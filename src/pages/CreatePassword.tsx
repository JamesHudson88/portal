import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CreatePassword = () => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
    paymentMethod: 'crypto',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeToTerms) {
      newErrors.terms = 'You must agree to our terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      toast({
        title: "Account created successfully!",
        description: "Welcome to FOCUS platform.",
      });
      // Handle form submission here
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center bg-background px-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Create Password</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Set Password */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Set Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="At least 8 characters"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-input rounded-lg bg-background focus:border-primary focus:outline-none transition-colors pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-destructive text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Enter Password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-input rounded-lg bg-background focus:border-primary focus:outline-none transition-colors pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-destructive text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-4">
              {/* Pay by Crypto */}
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="crypto"
                  name="paymentMethod"
                  value="crypto"
                  checked={formData.paymentMethod === 'crypto'}
                  onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                  className="w-4 h-4 text-primary bg-background border-input focus:ring-primary"
                />
                <label htmlFor="crypto" className="flex items-center gap-2 text-foreground cursor-pointer">
                  Pay by Crypto
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-400 text-black text-xs font-semibold rounded">
                    ⚡ BINANCE PAY
                  </span>
                </label>
              </div>

              {/* Pay by Credit Card */}
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="credit"
                  name="paymentMethod"
                  value="credit"
                  checked={formData.paymentMethod === 'credit'}
                  onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                  className="w-4 h-4 text-primary bg-background border-input focus:ring-primary"
                />
                <label htmlFor="credit" className="flex items-center gap-2 text-foreground cursor-pointer">
                  Pay by Credit Card
                  <div className="flex gap-1">
                    <div className="w-8 h-5 bg-red-500 rounded-sm flex items-center justify-center">
                      <span className="text-white text-xs font-bold">M</span>
                    </div>
                    <div className="w-8 h-5 bg-blue-600 rounded-sm flex items-center justify-center">
                      <span className="text-white text-xs font-bold">V</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-sm text-foreground cursor-pointer">
                  Please confirm that you agree to our terms and conditions
                </label>
              </div>
              
              {errors.terms && (
                <div className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg text-sm">
                  {errors.terms}
                </div>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-lg font-medium"
            >
              Proceed
            </Button>
          </form>

          {/* Footer Links */}
          <div className="flex justify-center gap-6 mt-16 text-sm text-muted-foreground">
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

      {/* Right side - Branding */}
      <div className="hidden lg:flex flex-1 bg-primary items-center justify-center relative overflow-hidden">
        <div className="text-center z-10">
          <h2 className="text-8xl font-bold text-primary-foreground opacity-20 mb-8">
            FOCUS
          </h2>
          <div className="absolute bottom-8 right-8">
            <span className="text-2xl font-bold text-primary-foreground">
              VOREA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;