
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link2, Check } from 'lucide-react';
import { useData } from '@/context/DataContext';
import { toast } from '@/hooks/use-toast';

interface ProviderCardProps {
  id: number;
  logo: string;
  name: string;
  connected?: boolean;
  onConnect: (id: number) => void;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ id, logo, name, connected, onConnect }) => {
  return (
    <div className="border border-bolna-border rounded-lg p-6 flex flex-col hover:shadow-md transition-all duration-300">
      <div className="h-12 w-12 mb-6">
        <img src={logo} alt={name} className="h-full w-full object-contain" />
      </div>
      <div className="mt-auto flex items-center justify-between">
        <h3 className="text-lg font-medium">{name}</h3>
        {connected ? (
          <Button variant="outline" className="flex items-center gap-2 text-sm bg-green-50 border-green-200 text-green-600" disabled>
            <Check className="h-4 w-4" />
            Connected
          </Button>
        ) : (
          <Button 
            variant="outline" 
            className="flex items-center gap-2 text-sm hover:bg-gray-50 transition-colors"
            onClick={() => onConnect(id)}
          >
            <Link2 className="h-4 w-4" />
            Connect
          </Button>
        )}
      </div>
    </div>
  );
};

const ProvidersPage = () => {
  const { providers, connectProvider } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredProviders = providers.filter(provider => 
    provider.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleConnect = (providerId: number) => {
    connectProvider(providerId);
  };

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
          className="w-full transition-all duration-300 border-bolna-border focus:ring-2 focus:ring-bolna-blue/20 focus:border-bolna-blue"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProviders.map(provider => (
          <ProviderCard 
            key={provider.id} 
            id={provider.id}
            name={provider.name} 
            logo={provider.logo}
            connected={provider.connected}
            onConnect={handleConnect}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default ProvidersPage;
