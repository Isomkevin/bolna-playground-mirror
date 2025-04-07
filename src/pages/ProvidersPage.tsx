
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link2 } from 'lucide-react';

interface ProviderCardProps {
  logo: string;
  name: string;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ logo, name }) => {
  return (
    <div className="border border-bolna-border rounded-lg p-6 flex flex-col">
      <div className="h-12 w-12 mb-6">
        <img src={logo} alt={name} className="h-full w-full object-contain" />
      </div>
      <div className="mt-auto flex items-center justify-between">
        <h3 className="text-lg font-medium">{name}</h3>
        <Button variant="outline" className="flex items-center gap-2 text-sm">
          <Link2 className="h-4 w-4" />
          Connect
        </Button>
      </div>
    </div>
  );
};

const ProvidersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const providers = [
    { 
      id: 1, 
      name: 'Azure OpenAI', 
      logo: '/lovable-uploads/fa567b85-828a-41d3-abe8-91bf8f14dba0.png' 
    },
    { 
      id: 2, 
      name: 'Cal.com', 
      logo: '/lovable-uploads/210bb858-1f0b-4398-b25d-b76e551d89bd.png' 
    },
    { 
      id: 3, 
      name: 'Cartesia', 
      logo: '/lovable-uploads/ab8dc577-0efe-4699-9228-a348e5f67fea.png' 
    },
    { 
      id: 4, 
      name: 'Deepgram', 
      logo: '/lovable-uploads/6c3a56d9-2703-4a26-8dc7-b4b093bada90.png'  
    },
    { 
      id: 5, 
      name: 'ElevenLabs', 
      logo: '/lovable-uploads/9bf7ef3d-4537-4e5d-b63b-1fefd4287669.png' 
    },
    { 
      id: 6, 
      name: 'OpenAI', 
      logo: '/lovable-uploads/a9a01690-3800-4811-b2c4-6e2144c3dfcc.png'  
    },
    { 
      id: 7, 
      name: 'Perplexity', 
      logo: '/lovable-uploads/faa0b433-7424-4a2a-ae29-30a343a64c34.png'  
    },
    { 
      id: 8, 
      name: 'Plivo', 
      logo: '/lovable-uploads/faa0b433-7424-4a2a-ae29-30a343a64c34.png'  
    },
    { 
      id: 9, 
      name: 'Smallest', 
      logo: '/lovable-uploads/faa0b433-7424-4a2a-ae29-30a343a64c34.png'  
    },
  ];

  const filteredProviders = providers.filter(provider => 
    provider.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout 
      title="Providers" 
      subtitle="Add keys securely to connect your own Providers within Bolna."
    >
      <div className="w-full max-w-md mb-8">
        <Input 
          placeholder="Filter providers..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProviders.map(provider => (
          <ProviderCard 
            key={provider.id} 
            name={provider.name} 
            logo={provider.logo} 
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default ProvidersPage;
