
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-6xl">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Phone size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">AfriCopilot</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('features')} 
            className="font-medium text-gray-700 hover:text-blue-600 transition-colors text-sm"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('use-cases')} 
            className="font-medium text-gray-700 hover:text-blue-600 transition-colors text-sm"
          >
            Solutions
          </button>
          <button 
            onClick={() => scrollToSection('benefits')} 
            className="font-medium text-gray-700 hover:text-blue-600 transition-colors text-sm"
          >
            Benefits
          </button>
          <Link to="/dashboard/developers" className="font-medium text-gray-700 hover:text-blue-600 transition-colors text-sm">API</Link>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button 
            asChild 
            variant="outline" 
            className="hidden sm:inline-flex border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 rounded-full px-4 text-sm"
          >
            <Link to="/dashboard">Log In</Link>
          </Button>
          <Button 
            asChild 
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 shadow-lg text-sm"
          >
            <Link to="/dashboard">Get Started</Link>
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
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <button 
              onClick={() => scrollToSection('features')} 
              className="font-medium text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors text-left text-sm"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('use-cases')} 
              className="font-medium text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors text-left text-sm"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('benefits')} 
              className="font-medium text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors text-left text-sm"
            >
              Benefits
            </button>
            <Link 
              to="/dashboard/developers" 
              className="font-medium text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              API
            </Link>
            <Link 
              to="/dashboard" 
              className="w-full mt-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm"
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
