
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface ProviderConnectModalProps {
  provider: {
    id: number;
    name: string;
    logo: string;
    category: string;
    connected?: boolean;
  } | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (providerId: number, formData: Record<string, string>) => void;
}

const ProviderConnectModal: React.FC<ProviderConnectModalProps> = ({
  provider,
  isOpen,
  onOpenChange,
  onSubmit
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState<Record<string, string>>({
    apiKey: '',
    clientId: '',
    clientSecret: '',
    redirectUri: window.location.origin + '/providers/callback',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!provider) return;

    // Validate required fields
    const requiredFields = getRequiredFields(provider.name);
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing required fields",
        description: `Please fill in all required fields: ${missingFields.join(', ')}`,
        variant: "destructive",
      });
      return;
    }

    onSubmit(provider.id, formData);
    // Reset form after submission
    setFormData({
      apiKey: '',
      clientId: '',
      clientSecret: '',
      redirectUri: window.location.origin + '/providers/callback',
    });
  };

  // Get required fields based on provider
  const getRequiredFields = (providerName: string): string[] => {
    switch(providerName) {
      case 'Slack':
      case 'Microsoft Teams':
      case 'Zoom':
        return ['clientId', 'clientSecret', 'redirectUri'];
      case 'Salesforce':
      case 'HubSpot': 
        return ['clientId', 'clientSecret', 'apiKey', 'redirectUri'];
      default:
        return ['apiKey'];
    }
  };

  // Get provider-specific fields
  const getProviderFields = () => {
    if (!provider) return null;

    const fields = [];
    const requiredFields = getRequiredFields(provider.name);

    if (requiredFields.includes('apiKey')) {
      fields.push(
        <div className="grid w-full items-center gap-1.5" key="apiKey">
          <Label htmlFor="apiKey">API Key</Label>
          <Input
            id="apiKey"
            name="apiKey"
            value={formData.apiKey}
            onChange={handleInputChange}
            placeholder="Enter API key"
            data-testid="provider-api-key-input"
            className="w-full"
          />
        </div>
      );
    }

    if (requiredFields.includes('clientId')) {
      fields.push(
        <div className="grid w-full items-center gap-1.5" key="clientId">
          <Label htmlFor="clientId">Client ID</Label>
          <Input
            id="clientId"
            name="clientId"
            value={formData.clientId}
            onChange={handleInputChange}
            placeholder="Enter client ID"
            data-testid="provider-client-id-input"
            className="w-full"
          />
        </div>
      );
    }

    if (requiredFields.includes('clientSecret')) {
      fields.push(
        <div className="grid w-full items-center gap-1.5" key="clientSecret">
          <Label htmlFor="clientSecret">Client Secret</Label>
          <Input
            id="clientSecret"
            name="clientSecret"
            value={formData.clientSecret}
            onChange={handleInputChange}
            placeholder="Enter client secret"
            data-testid="provider-client-secret-input"
            className="w-full"
            type="password"
          />
        </div>
      );
    }

    if (requiredFields.includes('redirectUri')) {
      fields.push(
        <div className="grid w-full items-center gap-1.5" key="redirectUri">
          <Label htmlFor="redirectUri">Redirect URI</Label>
          <Input
            id="redirectUri"
            name="redirectUri"
            value={formData.redirectUri}
            onChange={handleInputChange}
            placeholder="Enter redirect URI"
            data-testid="provider-redirect-uri-input"
            className="w-full"
            disabled
          />
          <p className="text-xs text-muted-foreground">
            Use this URL in your provider's developer console
          </p>
        </div>
      );
    }

    return fields;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]" data-testid="provider-connect-modal">
        <DialogHeader>
          <DialogTitle>
            {provider && (
              <div className="flex items-center gap-2">
                {provider.logo && (
                  <img 
                    src={provider.logo} 
                    alt={provider.name} 
                    className="w-6 h-6 object-contain" 
                  />
                )}
                <span>Enter the following details to connect your {provider?.name} account</span>
              </div>
            )}
          </DialogTitle>
          <DialogDescription>
            Connect your account to enable integration with {provider?.name}.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {getProviderFields()}
          
          <DialogFooter className="pt-4">
            <DialogClose asChild>
              <Button variant="outline" type="button" data-testid="provider-connect-cancel">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" data-testid="provider-connect-submit">
              Connect
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProviderConnectModal;
