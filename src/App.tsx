
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import OTPVerification from "./pages/OTPVerification";
import CreatePassword from "./pages/CreatePassword";
import WelcomeBack from "./pages/WelcomeBack";
import PaymentSucceeded from "./pages/PaymentSucceeded";
import UnderReview from "./pages/UnderReview";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import HelpSupport from "./pages/HelpSupport";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import WebDevelopment from "./pages/WebDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import SEO from "./pages/SEO Services";
import SMMServices from "./pages/SMM"; // Importing the SMMServices component
import TechnicalSupport from "./pages/TechnicalSupport"; // Importing the TechnicalSupport component
import HomePage from "./pages/Home"; // Importing the HomePage component
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
          <Route path="/create-password" element={<CreatePassword />} />
          <Route path="/welcome-back" element={<WelcomeBack />} />
          <Route path="/payment-succeeded" element={<PaymentSucceeded />} />
          <Route path="/under-review" element={<UnderReview />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/help-support" element={<HelpSupport />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/WebDevelopment" element={<WebDevelopment />} />
          <Route path="/AppDevelopment" element={<AppDevelopment />} />
          <Route path="/SEO" element={<SEO />} />
          <Route path="/SMM" element={<SMMServices />} /> 
          <Route path="/TechnicalSupport" element={<TechnicalSupport />} /> 
          <Route path="/Home" element={<HomePage />} /> 

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
