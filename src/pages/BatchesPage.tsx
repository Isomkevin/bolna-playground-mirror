
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const BatchesPage = () => {
  return (
    <DashboardLayout 
      title="Batches" 
      subtitle="Manage and monitor your batch processes"
    >
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <h3 className="text-lg font-medium mb-2">Batch Processing</h3>
        <p className="text-gray-500 max-w-md">
          Create and manage batch processes to handle large volumes of calls or tasks efficiently.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default BatchesPage;
