# Backend Development Guidelines for VORZA360 Platform

## 1. Technology Stack Recommendations

### Primary Backend Framework
- **Node.js with Express.js** or **Next.js API Routes**
- **TypeScript** for type safety
- **Prisma** or **TypeORM** for database ORM

### Database Options
- **PostgreSQL** (Recommended for production)
- **MongoDB** (For flexible document storage)
- **Redis** (For caching and sessions)

### Authentication & Security
- **JWT** for stateless authentication
- **bcrypt** for password hashing
- **express-rate-limit** for API rate limiting
- **helmet** for security headers
- **cors** for cross-origin requests

### File Storage
- **AWS S3** or **Cloudinary** for file uploads
- **Multer** for handling multipart/form-data

## 2. Database Schema Design

### Core Tables/Collections

#### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  role ENUM('admin', 'client', 'freelancer') DEFAULT 'client',
  is_verified BOOLEAN DEFAULT false,
  referral_code VARCHAR(50) UNIQUE,
  referred_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Services Table
```sql
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  category ENUM('web_development', 'app_development', 'seo', 'smm', 'technical_support'),
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  delivery_time INTEGER NOT NULL, -- in days
  features JSONB, -- array of included features
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Orders Table
```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  service_id UUID NOT NULL REFERENCES services(id),
  status ENUM('pending', 'confirmed', 'in_progress', 'completed', 'cancelled') DEFAULT 'pending',
  total_amount DECIMAL(10,2) NOT NULL,
  payment_status ENUM('pending', 'paid', 'failed', 'refunded') DEFAULT 'pending',
  payment_method VARCHAR(50),
  requirements TEXT,
  delivery_date DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Payments Table
```sql
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES orders(id),
  amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'PKR',
  payment_method VARCHAR(50) NOT NULL,
  transaction_id VARCHAR(255),
  status ENUM('pending', 'completed', 'failed', 'refunded') DEFAULT 'pending',
  gateway_response JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 3. API Structure

### Authentication Endpoints
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/verify-email
POST /api/auth/forgot-password
POST /api/auth/reset-password
POST /api/auth/refresh-token
```

### User Management
```
GET /api/users/profile
PUT /api/users/profile
GET /api/users/orders
GET /api/users/referrals
```

### Services
```
GET /api/services
GET /api/services/:category
GET /api/services/:id
POST /api/services (admin only)
PUT /api/services/:id (admin only)
DELETE /api/services/:id (admin only)
```

### Orders
```
POST /api/orders
GET /api/orders
GET /api/orders/:id
PUT /api/orders/:id/status (admin only)
DELETE /api/orders/:id
```

### Payments
```
POST /api/payments/create-intent
POST /api/payments/confirm
GET /api/payments/:orderId
POST /api/payments/webhook (for payment gateway callbacks)
```

## 4. Implementation Example (Express.js)

### Project Structure
```
backend/
├── src/
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── userController.ts
│   │   ├── serviceController.ts
│   │   ├── orderController.ts
│   │   └── paymentController.ts
│   ├── middleware/
│   │   ├── auth.ts
│   │   ├── validation.ts
│   │   └── errorHandler.ts
│   ├── models/
│   │   ├── User.ts
│   │   ├── Service.ts
│   │   ├── Order.ts
│   │   └── Payment.ts
│   ├── routes/
│   │   ├── auth.ts
│   │   ├── users.ts
│   │   ├── services.ts
│   │   ├── orders.ts
│   │   └── payments.ts
│   ├── utils/
│   │   ├── jwt.ts
│   │   ├── email.ts
│   │   └── validation.ts
│   ├── config/
│   │   ├── database.ts
│   │   └── environment.ts
│   └── app.ts
├── package.json
└── .env
```

### Sample Controller (authController.ts)
```typescript
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';
import { sendVerificationEmail } from '../utils/email';

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, fullName, phone, referralCode } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);
    
    // Create user
    const user = await User.create({
      email,
      passwordHash,
      fullName,
      phone,
      referralCode: generateReferralCode(),
      referredBy: referralCode ? await findUserByReferralCode(referralCode) : null
    });
    
    // Send verification email
    await sendVerificationEmail(user.email, user.id);
    
    res.status(201).json({
      message: 'User created successfully. Please verify your email.',
      userId: user.id
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.passwordHash);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: '24h' }
    );
    
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
```

## 5. Security Best Practices

### Input Validation
```typescript
import Joi from 'joi';

export const validateRegistration = (data: any) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    fullName: Joi.string().min(2).max(50).required(),
    phone: Joi.string().pattern(/^\+?[1-9]\d{1,14}$/).optional()
  });
  
  return schema.validate(data);
};
```

### Authentication Middleware
```typescript
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface AuthRequest extends Request {
  user?: any;
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};
```

## 6. Payment Integration

### Stripe Integration Example
```typescript
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const createPaymentIntent = async (req: Request, res: Response) => {
  try {
    const { orderId, amount } = req.body;
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: 'pkr',
      metadata: { orderId }
    });
    
    res.json({
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    res.status(500).json({ error: 'Payment creation failed' });
  }
};
```

## 7. Environment Variables (.env)
```
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/vorza360
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=24h

# Email Service (using SendGrid)
SENDGRID_API_KEY=your-sendgrid-api-key
FROM_EMAIL=noreply@vorza360.com

# Payment Gateways
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# File Storage
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_S3_BUCKET=vorza360-uploads

# App Configuration
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000
```

## 8. Deployment Recommendations

### Production Setup
1. **Use PM2** for process management
2. **Nginx** as reverse proxy
3. **SSL certificates** (Let's Encrypt)
4. **Database backups** (automated)
5. **Monitoring** (New Relic, DataDog)
6. **Logging** (Winston, Morgan)

### Docker Configuration
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
```

## 9. Testing Strategy

### Unit Tests (Jest)
```typescript
import { register } from '../controllers/authController';
import { User } from '../models/User';

jest.mock('../models/User');

describe('Auth Controller', () => {
  test('should register a new user', async () => {
    const mockUser = { id: '1', email: 'test@example.com' };
    (User.create as jest.Mock).mockResolvedValue(mockUser);
    
    const req = {
      body: {
        email: 'test@example.com',
        password: 'password123',
        fullName: 'Test User'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    
    await register(req as any, res as any);
    
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: 'User created successfully. Please verify your email.',
      userId: '1'
    });
  });
});
```

This comprehensive backend setup will provide a solid foundation for your VORZA360 platform with proper authentication, order management, payment processing, and security measures.