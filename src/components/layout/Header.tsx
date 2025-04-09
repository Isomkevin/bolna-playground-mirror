
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  title: string;
  subtitle?: string;
  balance?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  subtitle, 
  balance = "$1.00" 
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
    if (path.includes('providers')) return 'Add keys securely to connect your own Providers within AfriVoice AI.';
    if (path.includes('developers')) return 'These keys can be used to read and write data to AfriVoice AI. Please do not share these keys and make sure you store them somewhere secure.';
    if (path.includes('voices')) return 'Explore and test voices';
    if (path.includes('knowledge-base')) return 'Manage knowledge base entries and upload PDFs';
    if (path.includes('phone-numbers')) return 'Buy and view your phone numbers';
    if (path.includes('call-history')) return 'Displays all historical conversations with agents';
    if (path.includes('agent-setup')) return '';
    if (path.includes('batches')) return 'Manage and monitor your batch processes';
    return '';
  };

  return (
    <div className="flex items-center justify-between py-4 px-6 border-b border-afrivoice-border">
      <div>
        <h1 className="text-2xl font-bold">{title || getPageTitle()}</h1>
        {(subtitle || getPageSubtitle()) && (
          <p className="text-gray-600 mt-1">{subtitle || getPageSubtitle()}</p>
        )}
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm flex items-center">
          <span className="text-gray-600 mr-2">Available balance:</span>
          <span className="font-medium">{balance}</span>
        </div>
        <Button className="bg-afrivoice-blue hover:bg-afrivoice-blue/90 text-white">
          Add more funds
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <span>Docs</span>
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
