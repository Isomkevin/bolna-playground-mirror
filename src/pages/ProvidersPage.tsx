
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Link2, Check, X, Settings, RefreshCw, ExternalLink, Plus } from 'lucide-react';
import { useData } from '@/context/DataContext';
import { toast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import ProviderConnectModal from '@/components/providers/ProviderConnectModal';

interface Provider {
  id: number;
  name: string;
  logo: string;
  description: string;
  category: 'Communication' | 'CRM' | 'Storage' | 'Other';
  connected?: boolean;
}

interface ProviderCardProps {
  provider: Provider;
  onConnect: (id: number) => void;
  onRefresh: (id: number) => void;
  onConfigure: (id: number) => void;
  onLearnMore: (id: number) => void;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ 
  provider, 
  onConnect, 
  onRefresh, 
  onConfigure, 
  onLearnMore 
}) => {
  return (
    <Card className="border-bolna-border flex flex-col h-full hover:shadow-soft-md transition-all duration-300">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 flex-shrink-0">
              <img src={provider.logo} alt={provider.name} className="h-full w-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium">{provider.name}</h3>
                {provider.connected && (
                  <Badge variant="outline" className="bg-blue-500 text-white border-none text-xs">
                    Connected
                  </Badge>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-1">{provider.description}</p>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex items-center text-sm mb-4">
            {provider.connected ? (
              <div className="flex items-center text-green-600">
                <Check className="h-4 w-4 mr-1.5" />
                <span>Successfully connected</span>
              </div>
            ) : (
              <div className="flex items-center text-gray-500">
                <X className="h-4 w-4 mr-1.5" />
                <span>Not connected</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {provider.connected ? (
              <>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-1.5"
                  onClick={() => onConfigure(provider.id)}
                >
                  <Settings className="h-4 w-4" />
                  Configure
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-1.5"
                  onClick={() => onRefresh(provider.id)}
                >
                  <RefreshCw className="h-4 w-4" />
                  Refresh
                </Button>
              </>
            ) : (
              <Button 
                variant="default" 
                size="sm"
                className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-1.5"
                onClick={() => onConnect(provider.id)}
              >
                <Link2 className="h-4 w-4" />
                Connect
              </Button>
            )}
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-1.5"
              onClick={() => onLearnMore(provider.id)}
            >
              <ExternalLink className="h-4 w-4" />
              Learn More
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProvidersPage = () => {
  const { providers: allProviders, connectProvider } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  
  // Add mock descriptions and categories for demonstration
  const providersWithDetails = allProviders.map(provider => ({
    ...provider,
    description: getProviderDescription(provider.name),
    category: getProviderCategory(provider.name)
  }));
  
  const filteredProviders = providersWithDetails.filter(provider => 
    provider.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
    (activeTab === 'all' || provider.category.toLowerCase() === activeTab.toLowerCase())
  );

  const handleOpenConnectModal = (providerId: number) => {
    const provider = providersWithDetails.find(p => p.id === providerId);
    if (provider) {
      setSelectedProvider(provider);
      setIsConnectModalOpen(true);
    }
  };

  const handleConnectSubmit = (providerId: number, formData: Record<string, string>) => {
    console.log("Connecting provider:", providerId, "with data:", formData);
    connectProvider(providerId);
    setIsConnectModalOpen(false);
    toast({
      title: "Connection successful",
      description: "Your provider has been connected successfully.",
    });
  };

  const handleRefresh = (providerId: number) => {
    toast({
      title: "Refreshing data",
      description: "Syncing with provider...",
    });
    // Implement refresh logic here
  };

  const handleConfigure = (providerId: number) => {
    toast({
      title: "Configure settings",
      description: "Opening configuration panel...",
    });
    // Implement configure logic here
  };

  const handleLearnMore = (providerId: number) => {
    // Implement learn more logic here
    // Could navigate to a details page or open documentation
  };

  const handleAddNew = () => {
    toast({
      title: "Add New Integration",
      description: "Opening integration selector...",
    });
    // Implement add new integration logic here
  };

  return (
    <DashboardLayout 
      title="Integrations" 
      subtitle="Connect your favorite tools and services to enhance your workflow."
    >
      <div className="flex justify-between items-center mb-6">
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
            <TabsTrigger value="crm">CRM</TabsTrigger>
            <TabsTrigger value="storage">Storage</TabsTrigger>
          </TabsList>
          
          <div className="mt-6 flex items-center justify-between">
            <Input 
              placeholder="Search integrations..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-xs transition-all duration-300 border-bolna-border focus:ring-2 focus:ring-bolna-blue/20 focus:border-bolna-blue"
            />
            
            <Button 
              onClick={handleAddNew}
              className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2"
              data-testid="add-new-integration"
            >
              <Plus className="h-4 w-4" />
              Add New Integration
            </Button>
          </div>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProviders.map(provider => (
          <ProviderCard 
            key={provider.id} 
            provider={provider}
            onConnect={() => handleOpenConnectModal(provider.id)}
            onRefresh={handleRefresh}
            onConfigure={handleConfigure}
            onLearnMore={handleLearnMore}
          />
        ))}
      </div>

      <ProviderConnectModal 
        provider={selectedProvider}
        isOpen={isConnectModalOpen}
        onOpenChange={setIsConnectModalOpen}
        onSubmit={handleConnectSubmit}
      />
    </DashboardLayout>
  );
};

// Helper functions to provide mock data
function getProviderDescription(name: string): string {
  const descriptions: Record<string, string> = {
    'Slack': 'Post summarized content to Slack channels',
    'Microsoft Teams': 'Share and collaborate on summarized content',
    'Zoom': 'Generate summaries from Zoom recordings',
    'Google Drive': 'Store and organize your documents securely',
    'Salesforce': 'Sync call summaries with customer profiles',
    'HubSpot': 'Add summaries to contact activity logs',
    'Dropbox': 'Back up and share important files',
    'GitHub': 'Integrate code repositories and documentation',
    'Trello': 'Create cards from summaries and action items',
    'Asana': 'Convert meeting notes into trackable tasks',
    'Notion': 'Build your knowledge base with integrated notes',
    'Zoho': 'Link summaries with deals and contacts'
  };
  
  return descriptions[name] || 'Connect and enhance your workflow';
}

function getProviderCategory(name: string): 'Communication' | 'CRM' | 'Storage' | 'Other' {
  const categories: Record<string, 'Communication' | 'CRM' | 'Storage' | 'Other'> = {
    'Slack': 'Communication',
    'Microsoft Teams': 'Communication',
    'Zoom': 'Communication',
    'Google Drive': 'Storage',
    'Salesforce': 'CRM',
    'HubSpot': 'CRM',
    'Dropbox': 'Storage',
    'GitHub': 'Other',
    'Trello': 'Other',
    'Asana': 'Other',
    'Notion': 'Other',
    'Zoho': 'CRM'
  };
  
  return categories[name] || 'Other';
}

export default ProvidersPage;
