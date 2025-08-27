
"use client";
import React, { useState } from 'react';
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
  Copy,
  Code,  
  CreditCard,
  Star,
  Clock,
  Sun,
  ShoppingCart,
  Briefcase,
  FileText,
  Newspaper,
  ShoppingBag
} from 'lucide-react';
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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


const SMMServices = () =>  {
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


  const services = [
    {
      id: 'Social Media Management',
      name: 'Social Media Management',
      category: 'SMM Services',
      delivery: '3-4 Business Days',
      price: '30,000 PKR',
      image: '/public/icons/LP.png',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'LinkedIn B2B Campaigns',
      name: ' LinkedIn B2B Campaigns',
      category: 'SMM Services',
      delivery: '10-14 Business Days',
      price: '90,000 PKR',
  image: '/public/icons/E-commerce Store.png',
      bgColor: 'bg-green-50'
    },
    {
      id: 'Social Media Post Design',
      name: 'Social Media Post Design',
      category: 'SMM Services',
      delivery: '10-14 Business Days',
      price: '60,000 PKR',
  image: '/public/icons/Business Website.png',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'Reels Editing',
      name: 'Reels Editing',
      category: 'SMM Services',
      delivery: '7-10 Business Days',
      price: '35,000 PKR',
  image: '/public/icons/Professional Portfolio.png',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'Hashtag & Trend Research',
      name: 'Hashtag & Trend Research',
      category: 'SMM Services',
      delivery: '7-10 Business Days',
      price: '45,000 PKR',
  image: '/public/icons/Blog or News Website.png',
      bgColor: 'bg-red-50'
    },
   
  ];

  const [selectedService, setSelectedService] = useState(services[0]);
  const sidebarItems = [
  { title: "Dashboard", icon: Monitor, path: "/dashboard" },
  { title: "Web Development", icon: Monitor, path: "/WebDevelopment" },
  { title: "App Development", icon: Smartphone, path: "/AppDevelopment" },
  { title: "SEO Services", icon: SearchIcon,  path: "/SEO" },
  { title: "SMM Services", icon: MessageSquare, active: true, path: "/SMM" },
  { title: "Technical Support", icon: Headphones, path: "/TechnicalSupport" },
  { title: "CRM", icon: Users },
];

const bottomSidebarItems = [
  { title: "Profile", icon: User, path: "/profile" },
  { title: "Help & Support", icon: HelpCircle, path: "/help-support" },
  { title: "Settings", icon: Settings, path: "/settings" },
  { title: "Log Out", icon: LogOut, path: "/logout" },
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
            <div className="flex items-center justify-left gap-x-60 mt-4 px-6">
                {/* Breadcrumb Section */}
                <div className="flex items-center space-x-4 ">
                  <span className="text-gray-500">Services</span>
                  <span className="text-gray-300">/</span>
                  <span className="text-gray-800 font-medium">SMM Services</span>
                </div>

                {/* Sort Section */}
                <div className="flex items-center space-x-4 mr-4">
                    <span className="text-sm text-gray-600 ">Sort by</span>
                    <div className="flex items-center space-x-1 bg-teal-500 text-white px-3 py-1 rounded text-sm cursor-pointer">
                        <span>Recommendation</span>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                </div>
              </div>

        {/* Content Area */}
        <div className="w-full p-6 flex gap-6">
          {/* Services List */}
          <div className="flex-1">
            <div className="grid gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-md border p-6 hover:shadow-2xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${service.bgColor}`}>
                        <img 
                          src={service.image} 
                          alt={service.name} 
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 text-lg">{service.name}</h3>
                        <p className="text-gray-600 text-sm">{service.category}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>Delivery in {service.delivery}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 mt-1 text-sm text-gray-500">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{service.price} / Year</span>
                        </div>
                      </div>
                    </div>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      PLACE ORDER
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Details Panel */}
          <div className="relative w-[500px] bg-blue-50 rounded-lg shadow-sm border p-4">
            {/* Mustard strip */}
            <div className=" absolute top-0 left-0 w-[500px] h-2 bg-yellow-500 rounded-t-lg"></div>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className={`p-3 rounded-lg ${selectedService.bgColor}`}>
                <img 
                  src={selectedService.image} 
                  alt={selectedService.name} 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h2 className="font-bold text-xl text-gray-800">{selectedService.name}</h2>
                <p className="text-gray-600">{selectedService.category}</p>
              </div>

            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800">60,000 PKR</span>
                <span className="text-gray-500">/ Year</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Delivery in 10-14 Business Days</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Description</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Includes Hosting + Basic Domain + Ongoing Support Perfect for Small to Medium Businesses Establish your online presence with a professionally designed website that reflects your brand and engages with your audience. Ideal for businesses looking to showcase their services, engage customers and generate leads—all at one place.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">What's Included</h3>
              <div className="space-y-2">
                {[
                  'Design & Development',
                  'Contact & Engagement',
                  'SEO & Tracking',
                  'Hosting & Domain',
                  'Ongoing Support (for 12 months)'
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">{item}</span>
                    <span className="text-green-500">+</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Ideal For:</h3>
              <div className="space-y-1 text-sm text-gray-600">
                {[
                  'Small to Medium Businesses',
                  'Agencies',
                  'Clinics',
                  'Real Estate',
                  'Consultants',
                  'Freelancers'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-medium transition-colors">
              PLACE ORDER
            </button>
          </div>
        </div>
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
}
export default SMMServices;