
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Plus, Clipboard, Eye, EyeOff, Trash2, Copy } from 'lucide-react';
import { useData } from '@/context/DataContext';
import { toast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const DevelopersPage = () => {
  const { apiKeys, createApiKey, deleteApiKey } = useData();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newKeyData, setNewKeyData] = useState({
    apiKey: 'sk-',
    baseUrl: 'https://api.example.com',
    apiVersion: 'v1'
  });
  const [revealedKeys, setRevealedKeys] = useState<Record<string, boolean>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewKeyData(prev => ({ ...prev, [name]: value }));
  };

  const handleCreateKey = () => {
    createApiKey(newKeyData);
    setIsCreateModalOpen(false);
    toast({
      title: "API Key Created",
      description: "Your new API key has been created successfully."
    });
    // Reset form
    setNewKeyData({
      apiKey: 'sk-',
      baseUrl: 'https://api.example.com',
      apiVersion: 'v1'
    });
  };

  const handleCopyKey = (keyId: string, keyValue: string) => {
    navigator.clipboard.writeText(keyValue).then(() => {
      toast({
        title: "API Key Copied",
        description: "The API key has been copied to your clipboard."
      });
    }).catch(() => {
      toast({
        title: "Copy Failed",
        description: "Failed to copy the API key. Please try again.",
        variant: "destructive"
      });
    });
  };

  const toggleRevealKey = (keyId: string) => {
    setRevealedKeys(prev => ({
      ...prev,
      [keyId]: !prev[keyId]
    }));
  };

  const handleDeleteKey = (keyId: string) => {
    deleteApiKey(keyId);
    toast({
      title: "API Key Deleted",
      description: "The API key has been deleted successfully."
    });
  };

  // Function to mask the API key for display
  const maskApiKey = (key: string) => {
    if (!key) return '••••••••••••••••';
    const firstFour = key.substring(0, 6);
    const lastFour = key.substring(key.length - 4);
    return `${firstFour}••••••••••••${lastFour}`;
  };

  return (
    <DashboardLayout 
      title="Developers" 
      subtitle="These keys can be used to read and write data to Bolna. Please do not share these keys and make sure you store them somewhere secure."
    >
      <div className="mb-6">
        <Button 
          className="bg-bolna-blue hover:bg-bolna-blue/90 text-white flex items-center gap-2 transition-all duration-300 hover:shadow-md"
          onClick={() => setIsCreateModalOpen(true)}
          data-testid="create-api-key-button"
        >
          <Plus className="h-4 w-4" />
          Create a new API Key
        </Button>
      </div>
      
      <div className="border border-bolna-border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Key Identifier</TableHead>
              <TableHead>API Key</TableHead>
              <TableHead>Last accessed</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {apiKeys.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                  No keys found. Create your first API key using the button above.
                </TableCell>
              </TableRow>
            ) : (
              apiKeys.map(key => (
                <TableRow key={key.id} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium">{key.identifier}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm">
                        {revealedKeys[key.id] ? key.key : maskApiKey(key.key)}
                      </span>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 rounded-full hover:bg-gray-100"
                        onClick={() => toggleRevealKey(key.id)}
                        data-testid={`toggle-key-visibility-${key.id}`}
                      >
                        {revealedKeys[key.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 rounded-full hover:bg-gray-100"
                        onClick={() => handleCopyKey(key.id, key.key)}
                        data-testid={`copy-key-${key.id}`}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>{key.lastAccessed || 'Never'}</TableCell>
                  <TableCell>{new Date(key.created).toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="h-8 w-8 rounded-full text-red-500 hover:bg-red-50 hover:text-red-600"
                          data-testid={`delete-key-${key.id}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete API Key</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete this API key? This action cannot be undone,
                            and any applications using this key will no longer be able to access the API.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction 
                            onClick={() => handleDeleteKey(key.id)}
                            className="bg-red-600 hover:bg-red-700 text-white"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Create New API Key Modal */}
      <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
        <DialogContent className="sm:max-w-[500px]" data-testid="create-api-key-modal">
          <DialogHeader>
            <DialogTitle>Create a new API Key</DialogTitle>
            <DialogDescription>
              Enter the details below to generate a new API key. Make sure to copy and store it securely as it won't be fully displayed again.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="apiKey">API Key</Label>
              <Input
                id="apiKey"
                name="apiKey"
                value={newKeyData.apiKey}
                onChange={handleInputChange}
                placeholder="sk-XXXX"
                className="font-mono"
                data-testid="api-key-input"
              />
              <p className="text-xs text-muted-foreground">
                Your API key should start with 'sk-' followed by a unique identifier.
              </p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="baseUrl">Base URL</Label>
              <Input
                id="baseUrl"
                name="baseUrl"
                value={newKeyData.baseUrl}
                onChange={handleInputChange}
                placeholder="https://api.example.com"
                data-testid="base-url-input"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="apiVersion">API Version</Label>
              <Input
                id="apiVersion"
                name="apiVersion"
                value={newKeyData.apiVersion}
                onChange={handleInputChange}
                placeholder="v1"
                data-testid="api-version-input"
              />
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsCreateModalOpen(false)}
              data-testid="cancel-create-key"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleCreateKey}
              data-testid="submit-create-key"
            >
              Create Key
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default DevelopersPage;
