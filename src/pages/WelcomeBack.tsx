import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const WelcomeBack = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    keepSignedIn: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login validation
    if (!formData.email || !formData.password) {
      setError('Please enter your credentials');
      return;
    }

    // Simulate incorrect password for demo
    if (formData.password !== 'correctpassword') {
      setError('Please enter correct password');
      return;
    }

    console.log('Login submitted:', formData);
    toast({
      title: "Welcome back!",
      description: "You have successfully logged in.",
    });
    // Handle login here
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center bg-background px-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">
              Welcome back. Enter your credentials to access your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="hello@example.cl"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border-2 border-input rounded-lg bg-background focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-foreground">
                  Password
                </label>
                <Link 
                  to="/password" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Forgot Password
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••••••••"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-lg bg-background focus:outline-none transition-colors pr-12 ${
                    error ? 'border-destructive focus:border-destructive' : 'border-input focus:border-primary'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {error && (
                <p className="text-destructive text-sm mt-2">{error}</p>
              )}
            </div>

            {/* Keep me signed in */}
            <div className="flex items-center space-x-3">
              <Checkbox
                id="keepSignedIn"
                checked={formData.keepSignedIn}
                onCheckedChange={(checked) => handleInputChange('keepSignedIn', checked as boolean)}
              />
              <label htmlFor="keepSignedIn" className="text-sm text-foreground cursor-pointer">
                Keep me signed in
              </label>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-lg font-medium"
            >
              Continue
            </Button>

            <div className="text-center">
              <span className="text-muted-foreground">Don't have an Account? </span>
              <Link 
                to="/signup" 
                className="text-primary hover:underline font-medium"
              >
                Sign up here
              </Link>
            </div>
          </form>

          {/* Footer Links */}
          <div className="flex justify-center gap-6 mt-8 text-xs text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms & Conditions
            </Link>
            <span>|</span>
            <Link to="/refund" className="hover:text-foreground transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Background Image */}
      <div 
        className="hidden lg:flex flex-1 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('/lovable-uploads/7e94db71-ef57-4f30-b380-4ca42ca4f825.png')`
        }}
      >
        <div className="absolute bottom-8 right-8">
          <span className="text-2xl font-bold text-white">
            VOREA
          </span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBack;
