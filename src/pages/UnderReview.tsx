import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UnderReview = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      {/* Header with VOREA logo */}
      <header className="flex justify-center pt-8 pb-16">
        <h1 className="text-2xl font-bold text-foreground tracking-wider">
          VOREA
        </h1>
      </header>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <Card className="w-full max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            {/* Loading spinner */}
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Loader2 className="w-8 h-8 text-cyan-600 animate-spin" />
            </div>

            {/* Heading */}
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Under Review
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
              We are verifying your information. It usually takes 15-30 minutes
            </p>

            {/* Next button */}
            <Button 
              onClick={handleNext}
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
            >
              Next
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="pb-8 text-center">
        <div className="text-xs text-muted-foreground space-x-2">
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Terms & Conditions</span>
          <span>|</span>
          <span>Refund Policy</span>
        </div>
      </footer>
    </div>
  );
};

export default UnderReview;