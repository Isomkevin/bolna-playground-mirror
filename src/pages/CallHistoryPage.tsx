
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Download } from 'lucide-react';

const CallHistoryPage = () => {
  return (
    <DashboardLayout 
      title="Agent conversations" 
      subtitle="Displays all historical conversations with agents"
    >
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="w-full md:w-48">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select agent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="agent1">New Agent</SelectItem>
              <SelectItem value="agent2">Customer Support</SelectItem>
              <SelectItem value="agent3">Sales Agent</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full md:w-48">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select batch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="batch1">Batch 1</SelectItem>
              <SelectItem value="batch2">Batch 2</SelectItem>
              <SelectItem value="batch3">Batch 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1"></div>
        <div className="w-full md:w-auto">
          <Button variant="outline" className="w-full md:w-auto flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download these records
          </Button>
        </div>
        <div className="w-full md:w-auto">
          <Button variant="outline" className="w-full md:w-auto">
            Get these details using APIs
          </Button>
        </div>
      </div>
      
      <div className="border border-bolna-border rounded-lg p-12 text-center">
        <p className="text-gray-500">Select an agent to view all its executions.</p>
      </div>
    </DashboardLayout>
  );
};

export default CallHistoryPage;
