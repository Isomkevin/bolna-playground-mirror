
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';

const PhoneNumbersPage = () => {
  return (
    <DashboardLayout 
      title="My phone numbers" 
      subtitle="Buy and view your phone numbers"
    >
      <div className="mb-6 flex justify-end">
        <Button className="bg-bolna-blue hover:bg-bolna-blue/90 text-white">
          Buy phone number
        </Button>
      </div>
      
      <div className="border border-bolna-border rounded-lg overflow-hidden">
        <div className="grid grid-cols-7 gap-4 p-4 bg-gray-50 border-b border-bolna-border text-sm">
          <div className="font-medium">Phone number</div>
          <div className="font-medium">Agent answering this phone number</div>
          <div className="font-medium">Telephony</div>
          <div className="font-medium">Bought on</div>
          <div className="font-medium">Renews on</div>
          <div className="font-medium">Monthly rent</div>
          <div className="font-medium">Unlink agent from phone</div>
        </div>
        <div className="p-6 text-center text-gray-500">
          No data available.
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PhoneNumbersPage;
