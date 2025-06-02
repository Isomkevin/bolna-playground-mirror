
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
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Phone size={24} className="text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-900">AfriCopilot</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/#features" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Features</Link>
          <Link to="/#use-cases" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Solutions</Link>
          <Link to="/#benefits" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Benefits</Link>
          <Link to="/developers" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">API</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            asChild 
            variant="outline" 
            className="hidden sm:inline-flex border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 rounded-full px-6"
          >
            <Link to="/agent-setup">Log In</Link>
          </Button>
          <Button 
            asChild 
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 shadow-lg"
          >
            <Link to="/agent-setup">Get Started</Link>
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
        <div className="md:hidden bg-white border-t animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link 
              to="/#features" 
              className="font-medium text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/#use-cases" 
              className="font-medium text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              to="/#benefits" 
              className="font-medium text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </Link>
            <Link 
              to="/developers" 
              className="font-medium text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              API
            </Link>
            <Link 
              to="/agent-setup" 
              className="w-full mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full"
              >
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
