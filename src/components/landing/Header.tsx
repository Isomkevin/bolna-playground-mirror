
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Phone size={32} className="text-africopilot-blue" />
          <span className="text-2xl font-bold">AfriCopilot AI</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/#features" className="font-medium text-gray-700 hover:text-africopilot-blue transition-colors">Features</Link>
          <Link to="/#use-cases" className="font-medium text-gray-700 hover:text-africopilot-blue transition-colors">Use Cases</Link>
          <Link to="/#benefits" className="font-medium text-gray-700 hover:text-africopilot-blue transition-colors">Benefits</Link>
          <Link to="/developers" className="font-medium text-gray-700 hover:text-africopilot-blue transition-colors">API</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link to="/agent-setup">Log In</Link>
          </Button>
          <Button asChild>
            <Link to="/agent-setup">Try Dashboard</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
