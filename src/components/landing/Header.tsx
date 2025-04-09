
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="border-b bg-white dark:bg-africopilot-900 sticky top-0 z-50 shadow-soft-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Phone size={32} className="text-africopilot-blue" />
          <span className="text-2xl font-bold text-gradient-blue">AfriCopilot AI</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/#features" className="font-medium text-africopilot-700 hover:text-africopilot-blue transition-colors">Features</Link>
          <Link to="/#use-cases" className="font-medium text-africopilot-700 hover:text-africopilot-blue transition-colors">Use Cases</Link>
          <Link to="/#benefits" className="font-medium text-africopilot-700 hover:text-africopilot-blue transition-colors">Benefits</Link>
          <Link to="/developers" className="font-medium text-africopilot-700 hover:text-africopilot-blue transition-colors">API</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            asChild 
            variant="outline" 
            className="hidden sm:inline-flex hover-lift focus:ring-2 focus:ring-africopilot-blue/20"
          >
            <Link to="/agent-setup">Log In</Link>
          </Button>
          <Button 
            asChild 
            className="hover-lift bg-africopilot-blue hover:bg-africopilot-darkBlue text-white transition-all shadow-soft-sm"
          >
            <Link to="/agent-setup">Try Dashboard</Link>
          </Button>
          
          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden" 
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-africopilot-900 border-t border-africopilot-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/#features" 
              className="font-medium text-africopilot-700 hover:text-africopilot-blue py-2 px-3 rounded-md hover:bg-africopilot-lightBlue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/#use-cases" 
              className="font-medium text-africopilot-700 hover:text-africopilot-blue py-2 px-3 rounded-md hover:bg-africopilot-lightBlue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Use Cases
            </Link>
            <Link 
              to="/#benefits" 
              className="font-medium text-africopilot-700 hover:text-africopilot-blue py-2 px-3 rounded-md hover:bg-africopilot-lightBlue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </Link>
            <Link 
              to="/developers" 
              className="font-medium text-africopilot-700 hover:text-africopilot-blue py-2 px-3 rounded-md hover:bg-africopilot-lightBlue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              API
            </Link>
            <Link 
              to="/agent-setup" 
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button 
                className="w-full bg-africopilot-blue hover:bg-africopilot-darkBlue text-white mt-2"
              >
                Try Dashboard
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
