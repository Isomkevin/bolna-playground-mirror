
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

const KnowledgeBasePage = () => {
  return (
    <DashboardLayout 
      title="Knowledge Base" 
      subtitle="Manage knowledge base entries and upload PDFs"
    >
      <div className="mb-6 flex justify-end">
        <Button className="bg-bolna-blue hover:bg-bolna-blue/90 text-white flex items-center gap-2">
          <Upload className="h-4 w-4" />
          Upload PDF
        </Button>
      </div>
      
      <div className="border border-bolna-border rounded-lg overflow-hidden">
        <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 border-b border-bolna-border text-sm">
          <div className="font-medium">RAG ID</div>
          <div className="font-medium">Filename</div>
          <div className="font-medium">PDF uploaded on</div>
          <div className="font-medium">Status</div>
          <div className="font-medium text-right">Delete</div>
        </div>
        <div className="p-6 text-center text-gray-500">
          No data available.
        </div>
      </div>
    </DashboardLayout>
  );
};

export default KnowledgeBasePage;
