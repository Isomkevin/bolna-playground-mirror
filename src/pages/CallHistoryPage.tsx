
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Download, FilterX, FileJson } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from '@/components/ui/badge';

const CallHistoryPage = () => {
  const [isApiDialogOpen, setIsApiDialogOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  const { toast } = useToast();

  const handleAgentChange = (value: string) => {
    setSelectedAgent(value);
    setIsFiltered(value !== "" || selectedBatch !== "");
  };

  const handleBatchChange = (value: string) => {
    setSelectedBatch(value);
    setIsFiltered(value !== "" || selectedAgent !== "");
  };

  const clearFilters = () => {
    setSelectedAgent("");
    setSelectedBatch("");
    setIsFiltered(false);
  };

  const handleDownload = () => {
    toast({
      title: "Download started",
      description: "Your data is being prepared for download.",
      variant: "default",
    });
  };

  const copyAPICode = () => {
    navigator.clipboard.writeText(`
    const fetchCallHistory = async () => {
      const response = await fetch('https://api.afrivoiceai.com/v1/call-history', {
        headers: {
          'Authorization': 'Bearer YOUR_API_KEY'
        }
      });
      return response.json();
    };
    `);
    
    toast({
      title: "Code copied!",
      description: "API sample code has been copied to clipboard.",
      variant: "default",
    });
  };

  return (
    <DashboardLayout 
      title="Agent conversations" 
      subtitle="Displays all historical conversations with agents"
    >
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="w-full md:w-48">
          <Select value={selectedAgent} onValueChange={handleAgentChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select agent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Agents</SelectItem>
              <SelectItem value="agent1">New Agent</SelectItem>
              <SelectItem value="agent2">Customer Support</SelectItem>
              <SelectItem value="agent3">Sales Agent</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full md:w-48">
          <Select value={selectedBatch} onValueChange={handleBatchChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select batch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Batches</SelectItem>
              <SelectItem value="batch1">Batch 1</SelectItem>
              <SelectItem value="batch2">Batch 2</SelectItem>
              <SelectItem value="batch3">Batch 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {isFiltered && (
          <Button 
            variant="outline" 
            size="icon" 
            onClick={clearFilters}
            className="w-full md:w-auto md:h-auto"
          >
            <FilterX className="h-4 w-4 mr-2" />
            <span>Clear Filters</span>
          </Button>
        )}
        
        <div className="flex-1"></div>
        <div className="w-full md:w-auto">
          <Button 
            variant="outline" 
            className="w-full md:w-auto flex items-center gap-2"
            onClick={handleDownload}
          >
            <Download className="h-4 w-4" />
            Download these records
          </Button>
        </div>
        <div className="w-full md:w-auto">
          <Button 
            variant="outline" 
            className="w-full md:w-auto"
            onClick={() => setIsApiDialogOpen(true)}
          >
            Get these details using APIs
          </Button>
        </div>
      </div>
      
      <div className="border border-afrivoice-border rounded-lg p-12 text-center">
        {isFiltered ? (
          <div>
            <p className="text-gray-500 mb-4">No conversations found with the selected filters.</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {selectedAgent && (
                <Badge variant="outline" className="text-afrivoice-blue">
                  Agent: {selectedAgent === 'agent1' ? 'New Agent' : 
                          selectedAgent === 'agent2' ? 'Customer Support' : 
                          selectedAgent === 'agent3' ? 'Sales Agent' : selectedAgent}
                </Badge>
              )}
              {selectedBatch && (
                <Badge variant="outline" className="text-afrivoice-blue">
                  Batch: {selectedBatch}
                </Badge>
              )}
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Select an agent to view all its executions.</p>
        )}
      </div>
      
      {/* API Usage Dialog */}
      <Dialog open={isApiDialogOpen} onOpenChange={setIsApiDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>API Access</DialogTitle>
            <DialogDescription>
              Access call history data programmatically through our RESTful API
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="code" className="w-full">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="code">Sample Code</TabsTrigger>
              <TabsTrigger value="docs">API Documentation</TabsTrigger>
            </TabsList>
            <TabsContent value="code" className="space-y-4 pt-4">
              <div className="bg-gray-950 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                <pre>
                  <code>
{`// JavaScript example
const fetchCallHistory = async () => {
  const response = await fetch('https://api.afrivoiceai.com/v1/call-history', {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  });
  return response.json();
};`}
                  </code>
                </pre>
              </div>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={copyAPICode}
              >
                <FileJson className="h-4 w-4 mr-2" />
                Copy Code
              </Button>
            </TabsContent>
            <TabsContent value="docs" className="space-y-4 pt-4">
              <div className="border rounded-md p-4 text-sm">
                <h3 className="font-semibold mb-2">Endpoint</h3>
                <p className="font-mono bg-gray-100 p-1 rounded mb-4">/v1/call-history</p>
                
                <h3 className="font-semibold mb-2">Query Parameters</h3>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <li><span className="font-mono">agent_id</span> - Filter by agent ID</li>
                  <li><span className="font-mono">batch_id</span> - Filter by batch ID</li>
                  <li><span className="font-mono">start_date</span> - Start date (ISO format)</li>
                  <li><span className="font-mono">end_date</span> - End date (ISO format)</li>
                </ul>
                
                <h3 className="font-semibold mb-2">Response Format</h3>
                <p>Returns a JSON array of call records with metadata and transcripts</p>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open('https://docs.afrivoiceai.com/api/reference', '_blank')}
              >
                View Full API Documentation
              </Button>
            </TabsContent>
          </Tabs>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsApiDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default CallHistoryPage;
