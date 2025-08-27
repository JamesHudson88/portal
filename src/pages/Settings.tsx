"use client";
import { Check, Download } from "lucide-react"; 
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
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
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
// Sidebar items
const sidebarItems = [
  { title: "Dashboard", icon: Monitor, path: "/dashboard" },
  { title: "Web Development", icon: Monitor, path: "/WebDevelopment" },
  { title: "App Development", icon: Smartphone, path: "/AppDevelopment" },
  { title: "SEO Services", icon: SearchIcon,  path: "/SEO" },
  { title: "SMM Services", icon: MessageSquare, path: "/SMM" },
  { title: "Technical Support", icon: Headphones, path: "/TechnicalSupport" },
  { title: "CRM", icon: Users },
];


const bottomSidebarItems = [
  { title: "Profile", icon: User, path: "/profile" },
  { title: "Help & Support", icon: HelpCircle, path: "/help-support" },
  { title: "Settings", icon: Settings, active:true, path: "/settings" },
  { title: "Log Out", icon: LogOut },
];

const SettingsPage = () => {
  
const [activeTab, setActiveTab] = useState("general");
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
  const [selectedCard, setSelectedCard] = useState("visa");
  const [dailyUpdate, setDailyUpdate] = useState(false);
  const [eventCreated, setEventCreated] = useState(false);
  const [teamAdded, setTeamAdded] = useState(true);
  const [reminders, setReminders] = useState(true);
  const [promotions, setPromotions] = useState(true);
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(true);
  const [mobilePush, setMobilePush] = useState(true);
  const [desktopNotif, setDesktopNotif] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);
  const [emailChecked, setEmailChecked] = useState(true);
  const [langChecked, setLangChecked] = useState(true);


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
                        onClick={() => item.path && handleNavigation(item.path)}
                        >
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
          <main className="p-6 overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-1">System Settings</h2>
            <p className="text-muted-foreground mb-6">
              Setup and edit system settings and preferences
            </p>

            <div className="border-b mb-4">
              <div className="flex space-x-6 text-sm">
                <Button
                  variant="ghost"
                  className={activeTab === "general" ? "border-b-2 border-blue-500 rounded-none text-blue-600" : ""}
                  onClick={() => setActiveTab("general")}>
                
                  General Settings
                </Button>
                <Button
                  variant="ghost"
                  className={activeTab === "billing" ? "border-b-2 border-blue-500 rounded-none text-blue-600" : ""}
                  onClick={() => setActiveTab("billing")}
                >
                  Billing
                </Button>
                <Button
                  variant="ghost"
                  className={activeTab === "notifications" ? "border-b-2 border-blue-500 rounded-none text-blue-600" : ""}
                  onClick={() => setActiveTab("notifications")}
                >
                  Notifications
                </Button>
                <Button
                  variant="ghost"
                  className={activeTab === "security" ? "border-b-2 border-blue-500 rounded-none text-blue-600" : ""}
                  onClick={() => setActiveTab("security")}
                >
                  Security & Privacy
                </Button>
              </div>

            </div>

            {activeTab === "general" && (
              <Card className="p-6 space-y-6">
                <div>
                <h2 className="text-lg font-semibold mb-2">My Notifications</h2>
                <p className="text-sm text-muted-foreground mb-4">Notify me when...</p>
                <div className="space-y-3">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={dailyUpdate}
                      onChange={() => setDailyUpdate(!dailyUpdate)}
                    />
                    <span>Daily productivity update</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={eventCreated}
                      onChange={() => setEventCreated(!eventCreated)}
                    />
                    <span>New Event created</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={teamAdded}
                      onChange={() => setTeamAdded(!teamAdded)}
                    />
                    <span>New team is added</span>
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium">Mobile Push Notifications</h3>
                    <p className="text-xs text-muted-foreground">
                      Receive a push notification when your organization needs your attention
                    </p>
                  </div>
                  <Switch checked={mobilePush} onCheckedChange={setMobilePush} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium">Desktop Notifications</h3>
                    <p className="text-xs text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                  </div>
                  <Switch checked={desktopNotif} onCheckedChange={setDesktopNotif} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium">Email Notifications</h3>
                    <p className="text-xs text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                  </div>
                  <Switch checked={emailNotif} onCheckedChange={setEmailNotif} />
                </div>
              </div>

              <div className="pt-4 border-t">
                <h2 className="text-lg font-semibold mb-4">My Preferences</h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Appearance</label>
                    <div className="flex items-center border rounded px-3 py-1">
                      <span className="text-sm">Light Theme</span>
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium">Two Factor Authentication</h3>
                      <p className="text-xs text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      </p>
                    </div>
                    <Switch
                      checked={twoFactorAuth}
                      onCheckedChange={setTwoFactorAuth}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">System Language</label>
                    <div className="flex items-center border rounded px-3 py-1">
                      <span className="text-sm">English</span>
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
              </Card>)
            }

            {activeTab === "billing" && (
              <Card className="p-6 space-y-8">
                <div>
                  <h2 className="text-lg font-semibold mb-4 text-gray-900">Payment Method</h2>
                  <p className="text-sm font-medium mb-3 text-gray-900">Contact Information</p>
                  <p className="text-xs text-gray-500 mb-4">where should we contact you</p>
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <div>
                        {/* Toggle: Send to my email */}
                        <div
                          className="flex items-center space-x-2 mb-1 cursor-pointer"
                          onClick={() => setEmailChecked(!emailChecked)}
                        >
                          <div
                            className={`w-4 h-4 rounded-full border-2 ${
                              emailChecked ? "border-blue-600 bg-blue-600" : "border-gray-400"
                            } flex items-center justify-center`}
                          >
                            {emailChecked && <div className="w-2 h-2 bg-white rounded-full" />}
                          </div>
                          <span className="text-sm font-medium text-gray-900 ml-6">
                            Send to my email
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 ml-6 text-center">example@gmail.com</p>
                      </div>
                    </div>
                    {/* Toggle: System Language */}
                    <div className="flex justify-center">
                      <div className="cursor-pointer" onClick={() => setLangChecked(!langChecked)}>
                        {/* System Language with radio button */}
                        <div className="flex items-center space-x-2 mb-2">
                          <div
                            className={`w-4 h-4 rounded-full border-2 ${
                              langChecked ? "border-blue-600 bg-blue-600" : "border-gray-400"
                            } flex items-center justify-center`}
                          >
                            {langChecked && <div className="w-2 h-2 bg-white rounded-full" />}
                          </div>
                          <label className="text-sm font-medium text-gray-900">System Language</label>
                        </div>

                        {/* Language value below */}
                        <div className="ml-6">
                          <div className="border border-gray-300 rounded px-3 py-2 w-32 bg-white">
                            <span className="text-sm text-gray-700">English</span>
                          </div>
                        </div>
                      </div>
                    </div>

                      <p className="text-sm font-medium mb-3 text-gray-900">Cards Details</p>
                      <p className="text-xs text-gray-500 mb-4">Select default payment methods</p>

                    <div className="flex flex-col items-center">
                    
                    <div className="w-full max-w-md space-y-2">
                      {/* Visa Card */}
                      <div
                        onClick={() => setSelectedCard("visa")}
                        className={`flex flex-col border rounded-lg p-4 cursor-pointer ${
                          selectedCard === "visa"
                            ? "border-purple-300 bg-purple-50 text-purple-700"
                            : "border-gray-200 bg-white text-gray-900"
                        }`}
                      >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                          VISA
                        </div>
                        <span className="text-sm font-semibold">Visa ending in 1234</span>
                      </div>
                      {selectedCard === "visa" && (
                        <Check className="text-purple-600 w-4 h-4" />
                      )}
                    </div>
                    <p className="text-xs mb-2">Expiry 06/2024</p>
                    <div className="text-xs space-x-2">
                      <button className="text-purple-600 hover:text-purple-800">Set as default</button>
                      <span className="text-gray-400">•</span>
                      <button className="text-purple-600 hover:text-purple-800">Edit</button>
                    </div>
                  </div>

                  {/* Mastercard */}
                  <div
                    onClick={() => setSelectedCard("mastercard")}
                    className={`flex flex-col border rounded-lg p-4 cursor-pointer ${
                      selectedCard === "mastercard"
                        ? "border-purple-300 bg-purple-50 text-purple-700"
                        : "border-gray-200 bg-white text-gray-900"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                          MC
                        </div>
                        <span className="text-sm font-semibold">Mastercard ending in 1234</span>
                      </div>
                      {selectedCard === "mastercard" && (
                        <Check className="text-purple-600 w-4 h-4" />
                      )}
                    </div>
                    <p className="text-xs mb-2">Expiry 06/2024</p>
                    <div className="text-xs space-x-2">
                      <button className="text-purple-600 hover:text-purple-800">Set as default</button>
                      <span className="text-gray-400">•</span>
                      <button className="text-purple-600 hover:text-purple-800">Edit</button>
                    </div>
                  </div>
                  </div>
                  </div>

                  <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">Billing History</h2>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">Download all</Button>
                      <Button variant="default" size="sm">Upload</Button>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 text-left">
                        <tr>
                          <th className="p-3 font-medium text-gray-900">Invoice</th>
                          <th className="p-3 font-medium text-gray-900">Amount</th>
                          <th className="p-3 font-medium text-gray-900">Date uploaded</th>
                          <th className="p-3 font-medium text-gray-900">Status</th>
                          <th className="p-3 font-medium text-gray-900">User On plan</th>
                          <th className="p-3"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { file: "Tech requirements.pdf", size: "200 KB", date: "Jan 4, 2022", user: "Olivia Rhye" },
                          { file: "Dashboard screenshot.jpg", size: "720 KB", date: "Jan 4, 2022", user: "Phoenix Baker" },
                          { file: "Dashboard prototype recording.mp4", size: "16 MB", date: "Jan 2, 2022", user: "Lana Steiner" },
                          { file: "Dashboard prototype FINAL.fig", size: "4.2 MB", date: "Jan 6, 2022", user: "Demi Wilkinson" },
                          { file: "UX Design Guidelines.docx", size: "400 KB", date: "Jan 8, 2022", user: "Candice Wu" },
                          { file: "Dashboard interaction.framerx", size: "12 MB", date: "Jan 4, 2022", user: "Natali Craig" },
                          { file: "App inspiration.png", size: "800 KB", date: "Jan 6, 2022", user: "Drew Cano" }
                        ].map((item, index) => (
                          <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                            <td className="p-3 text-gray-900">{item.file}</td>
                            <td className="p-3 text-gray-600">{item.size}</td>
                            <td className="p-3 text-gray-600">{item.date}</td>
                            <td className="p-3">
                              <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 font-medium">
                                Paid
                              </span>
                            </td>
                            <td className="p-3 text-gray-600">{item.user}</td>
                            <td className="p-3">
                              <button className="text-gray-900 hover:text-blue-600">
                                <Download className="h-4 w-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                </div>
                </div>
                
              </Card>
            )}
            
            {activeTab === "notifications" && (
              <Card className="p-6 space-y-6">
                <div>
                  <h2 className="text-lg font-semibold mb-2">My Notifications</h2>
                  <p className="text-sm text-muted-foreground mb-4">Notify me when...</p>
                  <div className="flex gap-3 flex-wrap">
                    <Button variant="outline" className={dailyUpdate ? "bg-blue-100 text-blue-700" : ""} onClick={() => setDailyUpdate(!dailyUpdate)}>Daily productivity update</Button>
                    <Button variant="outline" className={eventCreated ? "bg-blue-100 text-blue-700" : ""} onClick={() => setEventCreated(!eventCreated)}>New Event created</Button>
                    <Button variant="outline" className={teamAdded ? "bg-blue-100 text-blue-700" : ""} onClick={() => setTeamAdded(!teamAdded)}>New team is added</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {[{
                    label: "Reminders and Events",
                    desc: "Receive a push notification when your organization need your attention",
                    value: reminders,
                    setter: setReminders
                  }, {
                    label: "Promotions and Offers",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                    value: promotions,
                    setter: setPromotions
                  }, {
                    label: "Email Notifications",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                    value: emailNotif,
                    setter: setEmailNotif
                  }, {
                    label: "SMS Notifications",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                    value: smsNotif,
                    setter: setSmsNotif
                  }, {
                    label: "Mobile Push Notifications",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                    value: mobilePush,
                    setter: setMobilePush
                  }, {
                    label: "Desktop Notifications",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                    value: desktopNotif,
                    setter: setDesktopNotif
                  }].map(({ label, desc, value, setter }) => (
                    <div key={label} className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium">{label}</h3>
                        <p className="text-xs text-muted-foreground">{desc}</p>
                      </div>
                      <Switch checked={value} onCheckedChange={setter} />
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {activeTab === "security" && (
              <Card className="p-6 space-y-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Security & Privacy</h2>
                  <p className="text-sm text-gray-500">Manage Security and privacy to protect your account</p>
                </div>

                {/* Verify Email */}
                <div className="flex items-center justify-between border-t pt-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Verify Email Address</h3>
                    <p className="text-xs text-gray-500">Receive a push notification when your organization need your attention</p>
                  </div>
                  <button className="text-xs bg-green-100 text-green-800 px-4 py-1.5 rounded">Verify</button>
                </div>

                {/* Update Password */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Update Password</h3>
                    <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                  </div>
                  <button className="text-xs bg-gray-200 text-gray-500 px-4 py-1.5 rounded cursor-not-allowed">Change Password</button>
                </div>

                {/* Recovery Settings */}
                <div className="pt-2">
                  <h2 className=" font-semibold text-gray-900 mb-4">Recovery Settings</h2>

                  {/* Recovery Email Address */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900">Recovery Email Address</h4>
                    <p className="text-xs text-gray-500">Receive a push notification when your organization need your attention</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900">Another Email Address</h4>
                  </div>
                  {/* Another Email Address Input + Save */}
                  <div className="flex items-center space-x-4 mb-4">
                    <input
                      type="email"
                      placeholder="johndoe@gmail.com"
                      className="w-full border border-gray-300 text-sm px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <button className="bg-black text-white px-4 py-1.5 text-xs rounded">Save</button>
                  </div>

                  {/* Recovery Phone Number */}
                  <div className="flex items-center justify-between space-x-4 mt-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Recovery Phone Number</h4>
                      <p className="text-xs text-gray-500">Receive a push notification when your organization need your attention</p>
                    </div>
                    <button className="border border-black text-black px-4 py-1.5 text-xs rounded">Setup</button>
                  </div>

                  {/* Deactivate Account */}
                  <div className="flex items-center justify-between space-x-4 mt-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Deactivate your Account</h4>
                      <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    <button className="text-xs bg-gray-200 text-gray-500 px-4 py-1.5 rounded cursor-not-allowed">Deactivate</button>
                  </div>
                </div>
              </Card>
            )}


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

export default SettingsPage;
