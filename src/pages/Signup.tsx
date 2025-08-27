
import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const Signup = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center bg-white px-8 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#1C2125] mb-2">Sign Up</h1>
            <p className="text-gray-600">Sign up to join</p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                Full name
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                className="w-full"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                className="w-full"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone number
              </Label>
              <div className="flex">
                <div className="flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 rounded-l-md">
                  <span className="text-green-600 mr-1">🇧🇩</span>
                  <span className="text-sm text-gray-600">+92</span>
                  <span className="ml-1 text-gray-400">⌄</span>
                </div>
                <Input
                  id="phone"
                  type="tel"
                  className="flex-1 rounded-l-none border-l-0"
                />
              </div>
            </div>

            {/* Referral ID */}
            <div className="space-y-2">
              <Label htmlFor="referral" className="text-sm font-medium text-gray-700">
                Referral ID
              </Label>
              <Input
                id="referral"
                type="text"
                placeholder="Optional"
                className="w-full"
              />
            </div>

            {/* Next Button */}
            <Button 
              type="submit"
              className="w-full bg-[#3AA6B9] hover:bg-[#3293a3] text-white py-3 rounded-md text-base font-medium"
            >
              Next
            </Button>
          </form>

          {/* Sign in link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an Account?{' '}
              <Link to="/login" className="text-[#3AA6B9] hover:underline font-medium">
                Sign in here
              </Link>
            </p>
          </div>

          {/* Footer links */}
          <div className="mt-12 flex justify-center space-x-6 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-gray-700">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-gray-700">Terms & Conditions</Link>
            <span>|</span>
            <Link to="/refund" className="hover:text-gray-700">Refund Policy</Link>
          </div>
        </div>
      </div>

      {/* Right side - Branding */}
      <div className="flex-1 bg-[#3AA6B9] flex flex-col items-center justify-center relative">
        {/* FOCUS text */}
        <div className="text-white text-8xl font-bold tracking-wider">
          FOCUS
        </div>
        
        {/* VOREA logo at bottom */}
        <div className="absolute bottom-8 right-8">
          <div className="text-white text-xl font-bold tracking-widest">
            VOREA
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
