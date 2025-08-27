import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  Mail,
  Trash2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

const sidebarItems = [
  { title: "Dashboard", icon: Monitor, active: true, path: "/dashboard"},
  { title: "Web Development", icon: Monitor,path: "/WebDevelopment" },
  { title: "App Development", icon: Smartphone, path: "/AppDevelopment" },
  { title: "SEO Services", icon: SearchIcon,  path: "/SEO" },
  { title: "SMM Services", icon: MessageSquare, path: "/SMM" },
  { title: "Technical Support", icon: Headphones, path: "/TechnicalSupport" },
  { title: "CRM", icon: Users },
];

const bottomSidebarItems = [
  { title: "Profile", icon: User, active: true },
  { title: "Help & Support", icon: HelpCircle, path: "/help-support" },
  { title: "Settings", icon: Settings,  path: "/settings" },
  { title: "Log Out", icon: LogOut },
];

const Profile = () => {
  const navigate = useNavigate();

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
                        className={item.active ? "bg-blue-50 text-blue-600 font-medium" : ""}
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
                    <div className="font-medium">Muslim</div>
                    <div className="text-muted-foreground text-xs">Admin</div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-6 bg-gray-50">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-foreground">Profile</h1>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Edit
              </Button>
            </div>

            <div className="max-w-4xl">
              {/* Profile Header */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
                      <img 
                        src="/lovable-uploads/325447a6-a9f0-4115-a9b1-0733c23f7ed8.png"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">Alexa Rowles</h2>
                      <p className="text-muted-foreground">alexarowles@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Profile Form */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input 
                        id="fullName"
                        placeholder="Your First Name"
                        className="bg-gray-50"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <div className="flex">
                        <Select defaultValue="+92">
                          <SelectTrigger className="w-20 bg-gray-50">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-white border shadow-lg z-50">
                            <SelectItem value="+92">+92</SelectItem>
                            <SelectItem value="+1">+1</SelectItem>
                            <SelectItem value="+44">+44</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input 
                          id="phoneNumber"
                          placeholder=""
                          className="flex-1 ml-2 bg-gray-50"
                        />
                      </div>
                    </div>

                    {/* Gender */}
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-50">
                          <SelectValue placeholder="Your First Name" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border shadow-lg z-50">
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Country */}
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-50">
                          <SelectValue placeholder="Your First Name" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border shadow-lg z-50">
                          <SelectItem value="pakistan">Pakistan</SelectItem>
                          <SelectItem value="usa">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Language */}
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-50">
                          <SelectValue placeholder="Your First Name" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border shadow-lg z-50">
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="urdu">Urdu</SelectItem>
                          <SelectItem value="arabic">Arabic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Time Zone */}
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Time Zone</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-50">
                          <SelectValue placeholder="Your First Name" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border shadow-lg z-50">
                          <SelectItem value="pkt">PKT (UTC+5)</SelectItem>
                          <SelectItem value="est">EST (UTC-5)</SelectItem>
                          <SelectItem value="gmt">GMT (UTC+0)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email Address Section */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">My email Address</h3>
                  
                  <div className="space-y-4">
                    {/* Current Email */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <Mail className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">alexarowles@gmail.com</div>
                          <div className="text-sm text-muted-foreground">1 month ago</div>
                        </div>
                      </div>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>

                    {/* Add Email Button */}
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                      +Add Email Address
                    </Button>
                  </div>
                </CardContent>
              </Card>
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

export default Profile;