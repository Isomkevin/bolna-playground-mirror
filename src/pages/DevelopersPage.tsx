
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const DevelopersPage = () => {
  return (
    <DashboardLayout 
      title="Developers" 
      subtitle="These keys can be used to read and write data to Bolna. Please do not share these keys and make sure you store them somewhere secure."
    >
      <div className="mb-6">
        <Button className="bg-bolna-blue hover:bg-bolna-blue/90 text-white flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create a new API Key
        </Button>
      </div>
      
      <div className="border border-bolna-border rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 border-b border-bolna-border">
          <div className="font-medium">Key Identifier</div>
          <div className="font-medium flex items-center gap-1">
            Last accessed
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="m7 15 5 5 5-5"></path>
              <path d="m7 9 5-5 5 5"></path>
            </svg>
          </div>
          <div className="font-medium flex items-center gap-1">
            Created
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="m7 15 5 5 5-5"></path>
              <path d="m7 9 5-5 5 5"></path>
            </svg>
          </div>
        </div>
        <div className="p-6 text-center text-gray-500">
          No keys found.
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DevelopersPage;
