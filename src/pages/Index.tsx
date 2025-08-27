import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  UserPlus, 
  Lock, 
  Shield, 
  Key, 
  ArrowLeft, 
  CreditCard, 
  Clock, 
  LayoutDashboard, 
  User,
  HelpCircle 
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const pages = [
    {
      title: "Sign Up",
      description: "Create a new account",
      path: "/signup",
      icon: UserPlus,
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      title: "OTP Verification",
      description: "Verify your email with OTP code",
      path: "/otp-verification",
      icon: Shield,
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      title: "Create Password",
      description: "Set your account password",
      path: "/create-password",
      icon: Key,
      color: "bg-orange-500 hover:bg-orange-600"
    },
    {
      title: "Welcome Back",
      description: "Sign in to your account",
      path: "/welcome-back",
      icon: ArrowLeft,
      color: "bg-indigo-500 hover:bg-indigo-600"
    },
    {
      title: "Payment Succeeded",
      description: "Payment confirmation page",
      path: "/payment-succeeded",
      icon: CreditCard,
      color: "bg-emerald-500 hover:bg-emerald-600"
    },
    {
      title: "Under Review",
      description: "Account verification in progress",
      path: "/under-review",
      icon: Clock,
      color: "bg-yellow-500 hover:bg-yellow-600"
    },
    {
      title: "Dashboard",
      description: "Main application dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
      color: "bg-cyan-500 hover:bg-cyan-600"
    },
    {
      title: "Profile",
      description: "Manage your profile settings",
      path: "/profile",
      icon: User,
      color: "bg-pink-500 hover:bg-pink-600"
    },
    {
      title: "Help & Support",
      description: "Get help and submit queries",
      path: "/help-support",
      icon: HelpCircle,
      color: "bg-teal-500 hover:bg-teal-600"
    },
    {
      title: "Home",
      description: "navigation to the home page",
      path: "/Home",
      icon: HelpCircle,
      color: "bg-teal-500 hover:bg-teal-600"
    }
    
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Welcome to Your App
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Navigate through all the pages of your application. Click on any button below to explore different sections.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page, index) => {
            const IconComponent = page.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-slate-300"
                onClick={() => handleNavigation(page.path)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-full ${page.color} text-white`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-800">
                      {page.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    {page.description}
                  </p>
                  <Button 
                    className={`w-full ${page.color} text-white font-medium`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigation(page.path);
                    }}
                  >
                    Visit Page
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-slate-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>All pages are connected and ready to navigate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;