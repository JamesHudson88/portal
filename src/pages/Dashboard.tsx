"use client";
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
  BarChart3,
  TrendingUp,
  DollarSign,
  Calendar,
  Copy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
  { title: "Dashboard", icon: Monitor, active: true, path: "/dashboard" },
  { title: "Web Development", icon: Monitor, path: "/WebDevelopment" },
  { title: "App Development", icon: Smartphone, path: "/AppDevelopment" },
  { title: "SEO Services", icon: SearchIcon,path: "/SEO" }, 
  { title: "SMM Services", icon: MessageSquare, path: "/SMM" },
  { title: "Technical Support", icon: Headphones, path: "/TechnicalSupport" },
  { title: "CRM", icon: Users },
];

const bottomSidebarItems = [
  { title: "Profile", icon: User, path: "/profile" },
  { title: "Help & Support", icon: HelpCircle, path: "/help-support" },
  { title: "Settings", icon: Settings, path: "/settings" },
  { title: "Log Out", icon: LogOut, path: "/logout" },
];

const Dashboard = () => {
  const recentOrders = [
    { client: "Junaid Sheikh", date: "17 July 2025", service: "SEO Website", status: "Confirmed" },
    { client: "Amir Hassan", date: "17 July 2025", service: "SEO Packages", status: "Confirmed" },
    { client: "Dianne Russell", date: "17 July 2025", service: "iOS App", status: "Processing" },
    { client: "Devon Lane", date: "17 July 2025", service: "Social Media Management", status: "Cancelled" },
  ];

  const recentActivities = [
    {
      message: "Changed the style.",
      time: "Just now",
      status: "Completed",
      color: "green",
    },
    {
      message: "Modified A data in Panel.",
      time: "Today, 11:59 AM",
      status: "In Progress",
      color: "purple",
    },
    {
      message: "Modified A data in Panel.",
      time: "Today, 11:59 AM",
      status: "In Progress",
      color: "purple",
    },
  ];
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
  

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1% from last month",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Active Projects",
      value: "23",
      change: "+4 new this week",
      icon: BarChart3,
      color: "text-blue-600"
    },
    {
      title: "Completed Tasks",
      value: "156",
      change: "+12% from last week",
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      title: "Upcoming Deadlines",
      value: "8",
      change: "Next 7 days",
      icon: Calendar,
      color: "text-orange-600"
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
                      <SidebarMenuButton 
                        className={item.active ? "bg-blue-50 text-blue-600 font-medium" : ""}
                        onClick={() => item.path && handleNavigation(item.path)}>
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
                          className=""
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
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-foreground">Overview</h1>
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="sm">Today</Button>
                <Button variant="default" size="sm" className="bg-black text-white">
                  Quick Actions
                </Button>
              </div>
            </div>

            {/* Overview Cards + Sales Overview + Referral */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
              {/* Left column */}
              <div className="lg:col-span-3 space-y-6">
                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { title: "Total Revenue", value: "7,265", change: "+11.01%" },
                    { title: "Numbers of Orders", value: "3,671", change: "-0.03%" },
                    { title: "Customer Count", value: "156", change: "+15.03%" },
                    { title: "Active Reseller", value: "2,318", change: "+6.08%" },
                  ].map((card, idx) => (
                    <Card key={idx} className="h-32">
                      <CardContent className="p-2">
                        <div className="text-sm text-muted-foreground mb-1">{card.title}</div>
                        <div className="text-2xl font-bold">{card.value}</div>
                        <div className="text-xs text-green-600">{card.change} ↗</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                

                {/* Sales Overview */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Sales Overview</CardTitle>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">Daily</Button>
                        <Button variant="ghost" size="sm">Weekly</Button>
                        <Button variant="default" size="sm" className="bg-purple-600 text-white">
                          Monthly
                        </Button>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="h-64 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                      <div className="text-sm text-muted-foreground">Chart visualization would go here</div>
                    </div>
                  </CardContent>
                </Card>
                {/* Recent Orders */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Recent Orders</CardTitle>
                  </CardHeader>
                  <CardContent className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Client</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Service</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentOrders.map((order, idx) => (
                          <TableRow key={idx}>
                            <TableCell>{order.client}</TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>{order.service}</TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={
                                  order.status === "Confirmed"
                                    ? "bg-green-100 text-green-800"
                                    : order.status === "Processing"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                                }
                              >
                                {order.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
              
              

              {/* Right column */}
              <div className="space-y-6">
                {/* Referral Earning */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Referral Earning</CardTitle>
                    <div className="text-xs text-muted-foreground">Earn 50% commission on referrals</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-xs text-muted-foreground">Your Referrals</div>
                        <div className="text-2xl font-bold text-cyan-600">12</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Your Earnings</div>
                        <div className="text-2xl font-bold text-cyan-600">249</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-2">Your Referral Link</div>
                      <div className="flex items-center space-x-2">
                        <Input value="https://vorza360.com/join?ref=USR" readOnly className="text-xs" />
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">Share this link to earn 50% of the</div>
                    </div>
                    <div className="space-y-2">
                      <Button variant="link" className="text-xs p-0 h-auto text-cyan-600">Terms & Conditions</Button>
                      <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white text-xs">INVITE FRIENDS</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
                    <div className="text-xs text-muted-foreground">The latest updates across your portal</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivities.map((activity, idx) => (
                      <div className="flex items-start space-x-3" key={idx}>
                        <div className={`w-2 h-2 mt-2 rounded-full bg-${activity.color}-500`} />
                        <div>
                          <div className="text-sm">{activity.message}</div>
                          <div className="text-xs text-muted-foreground">{activity.time}</div>
                          <Badge
                            className={`mt-1 ${
                              activity.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-purple-100 text-purple-800"
                            }`}
                          >
                            {activity.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
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

export default Dashboard;