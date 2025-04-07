
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ExternalLink, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  title: string;
  subtitle?: string;
  balance?: string;
  onMobileMenuToggle?: () => void;
  showMobileMenuButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  subtitle, 
  balance = "$1.00",
  onMobileMenuToggle,
  showMobileMenuButton = false
}) => {
  const location = useLocation();
  
  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes('providers')) return 'Providers';
    if (path.includes('developers')) return 'Developers';
    if (path.includes('voices')) return 'Voices';
    if (path.includes('knowledge-base')) return 'Knowledge Base';
    if (path.includes('phone-numbers')) return 'My phone numbers';
    if (path.includes('call-history')) return 'Agent conversations';
    if (path.includes('agent-setup')) return 'Agent setup';
    if (path.includes('batches')) return 'Batches';
    return 'Dashboard';
  };

  const getPageSubtitle = () => {
    const path = location.pathname;
    if (path.includes('providers')) return 'Add keys securely to connect your own Providers within Bolna.';
    if (path.includes('developers')) return 'These keys can be used to read and write data to Bolna. Please do not share these keys and make sure you store them somewhere secure.';
    if (path.includes('voices')) return 'Explore and test voices';
    if (path.includes('knowledge-base')) return 'Manage knowledge base entries and upload PDFs';
    if (path.includes('phone-numbers')) return 'Buy and view your phone numbers';
    if (path.includes('call-history')) return 'Displays all historical conversations with agents';
    if (path.includes('agent-setup')) return '';
    if (path.includes('batches')) return 'Manage and monitor your batch processes';
    return '';
  };

  return (
    <div className="flex items-center justify-between py-4 px-4 md:px-6 border-b border-bolna-border">
      <div className="flex items-center gap-3">
        {showMobileMenuButton && (
          <button 
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
            onClick={onMobileMenuToggle}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        )}
        <div>
          <h1 className="text-xl md:text-2xl font-bold">{title || getPageTitle()}</h1>
          {(subtitle || getPageSubtitle()) && (
            <p className="text-sm md:text-base text-gray-600 mt-1">{subtitle || getPageSubtitle()}</p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="text-xs md:text-sm hidden sm:flex items-center">
          <span className="text-gray-600 mr-2">Available balance:</span>
          <span className="font-medium">{balance}</span>
        </div>
        <Button className={cn(
          "bg-bolna-blue hover:bg-bolna-blue/90 text-white",
          "text-xs md:text-sm px-2 md:px-4"
        )}>
          <span className="hidden sm:inline">Add more funds</span>
          <span className="sm:hidden">Add funds</span>
        </Button>
        <Button variant="outline" className="flex items-center gap-1 md:gap-2 text-xs md:text-sm px-2 md:px-4">
          <span>Docs</span>
          <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
