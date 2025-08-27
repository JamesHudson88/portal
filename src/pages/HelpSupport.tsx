import { useState } from "react";
import { 
  Search, 
  ChevronDown, 
  Settings, 
  Monitor, 
  Smartphone, 
  Search as SearchIcon, 
  MessageSquare, 
  Headphones, 
  Users, 
  User, 
  HelpCircle, 
  LogOut,
  Code,
  Palette,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const sidebarItems = [
  { title: "Dashboard", icon: Monitor, path: "/dashboard" },
  { title: "Web Development", icon: Monitor, path: "/WebDevelopment", active: true },
  { title: "App Development", icon: Smartphone, path: "/AppDevelopment" },
  { title: "SEO Services", icon: SearchIcon,  path: "/SEO" },
  { title: "SMM Services", icon: MessageSquare, path: "/SMM" },
  { title: "Technical Support", icon: Headphones, path: "/TechnicalSupport" },
  { title: "CRM", icon: Users },
];

const bottomSidebarItems = [
  { title: "Profile", icon: User, path: "/profile" },
  { title: "Help & Support", icon: HelpCircle, active: true, path: "/help-support" },
  { title: "Settings", icon: Settings,  path: "/settings" },
  { title: "Log Out", icon: LogOut },
];

const HelpSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    inquiry: ''
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Query Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      inquiry: ''
    });
  };

  const handleNavigation = (path: string) => {
    if (path) {
      navigate(path);
    }
  };
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = async () => {
  try {
    // Optional: call your backend logout endpoint to invalidate session
    // await fetch('/api/logout', { method: 'POST', credentials: 'include' });

    // Remove auth tokens / user info from storage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');

    // Optional: clear cookies if you’re using cookies for auth
    // document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Redirect to login or home page
    navigate('/login');
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

  const services = [
    {
      title: "Web Development",
      image: "/public/icons/web.png"
    },
    {
      title: "App Development", 
      image: "/public/icons/app.png"
    },
    {
      title: "SEO",
      image: "/public/icons/seo.png"
    },
    {
      title: "Social Media Management",
      image: "/public/icons/smm.png"
    },
    {
      title: "Technical Support",
      image: "/public/icons/tech.png"
    },
    {
      title: "Graphic Designing",
      image: "/public/icons/graphic.png"
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {/* Sidebar */}
        <Sidebar className="border-r">
          <SidebarContent>
            {/* Logo */}
            <div className="p-6 border-b">
              <img 
                src="/lovable-uploads/6261d696-e0ff-4bd5-b923-79752df3fe68.png" 
                alt="VORZA" 
                className="h-8"
              />
            </div>

            {/* Main Menu */}
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton onClick={() => item.path && handleNavigation(item.path)}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Bottom Menu */}
            <div className="mt-auto">
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {bottomSidebarItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton 
                        className={item?.active? "bg-blue-50 text-blue-600 font-medium" : ""}
                        onClick={() => {
                          if(item.title === "Log Out") {
                            setShowLogoutModal(true);
                          } else if(item.path) {
                            handleNavigation(item.path);
                          }
                        }}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </div>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="border-b bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    placeholder="Search"
                    className="pl-9 w-64"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-sm">
                  🇺🇸 Eng (US) <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">M</span>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Musfiq</div>
                    <div className="text-muted-foreground text-xs">Admin</div>
                  </div>
                </div>
              </div>
            </div>
          </header>

                {/* Page Content */}
                <main className="flex-1 p-6 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header & Services Side by Side */}
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Left Side: Text */}
            <div className="flex-1">
              <div className="text-sm text-muted-foreground mb-2">Get a free Quote</div>
              <h1 className="text-4xl font-bold text-cyan-600 mb-4">HOW CAN WE HELP?</h1>
              <p className="text-muted-foreground mb-6 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h2 className="text-lg font-semibold mb-2">Or Contact us directly</h2>
              <div className="text-cyan-600">
                <div className="font-semibold">012 345 678</div>
                <div>johndoe@gmail.com</div>
              </div>
            </div>

            {/* Right Side: Services Icons */}
            <div className="grid grid-cols-3 gap-8 self-start mt-6 pt-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-2 cursor-pointer hover:opacity-80"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-20 h-20 object-contain"
                  />
                  <span className="text-xs font-medium text-gray-700">
                    {service.title}
                  </span>
                </div>
              ))}
            </div>
            </div>
          {/* Contact Form */}
          <div className="bg-white shadow rounded-lg p-8 max-w-4xl  ml-auto mr-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-gray-100 border-0"
                  required
                />
                <Input
                  placeholder="Company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="bg-gray-100 border-0"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-gray-100 border-0"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-gray-100 border-0"
                  required
                />
              </div>

              <Textarea
                placeholder="Your Inquiry"
                value={formData.inquiry}
                onChange={(e) => handleInputChange('inquiry', e.target.value)}
                className="bg-gray-100 border-0 min-h-[120px]"
                required
              />

              <div className="flex justify-end space-x-4">
                <Button 
                  type="button" 
                  variant="outline"
                  className="px-8"
                >
                  Back
                </Button>
                <Button 
                  type="submit"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8"
                >
                  Save
                </Button>
              </div>
            </form>
          </div>
          
        </div>
        </main>
        </div>
      </div>
          {showLogoutModal && (
              <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl shadow-xl p-6 w-80 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-red-500 p-3 rounded-full">
                      <LogOut className="text-white w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">Already Leaving?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Are you sure you want to log out?
                  </p>
                  <div className="flex flex-col gap-2">
                    <Button
                      className="bg-red-500 text-white hover:bg-red-600"
                      onClick={handleLogout}
                    >
                      Yes, Log Out
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => setShowLogoutModal(false)}
                    >
                      No, I’m staying
                    </Button>
                  </div>
                </div>
              </div>
            )}
    </SidebarProvider>
  );
};

export default HelpSupport;