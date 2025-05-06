
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import BuyNumberModal from '@/components/call-history/BuyNumberModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useData } from '@/context/DataContext';
import { Plus, Phone } from 'lucide-react';

const CallHistoryPage = () => {
  const [isBuyNumberModalOpen, setIsBuyNumberModalOpen] = useState(false);
  const { toast } = useToast();
  const { phoneNumbers, buyPhoneNumber } = useData();

  const handlePurchaseNumber = (number: string, country: string) => {
    buyPhoneNumber(); // Use the context method to add a number
    toast({
      title: "Number Purchased",
      description: `Successfully purchased ${number}`,
    });
  };

  return (
    <DashboardLayout 
      title="Call History" 
      subtitle="View your agent call history and manage your phone numbers"
      balance="$0.99"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="col-span-2">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Agent Conversations</h3>
            <div className="text-sm text-gray-500">
              No conversations recorded yet. Purchase a number to start making calls.
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Phone Numbers</h3>
              <Button 
                size="sm" 
                onClick={() => setIsBuyNumberModalOpen(true)}
                data-testid="open-buy-number-modal"
              >
                <Plus className="h-4 w-4 mr-1" /> Buy Number
              </Button>
            </div>
            
            {phoneNumbers.length > 0 ? (
              <div className="space-y-2">
                {phoneNumbers.map((phone) => (
                  <div key={phone.id} className="p-2 border rounded-md flex justify-between items-center">
                    <div>
                      <p className="font-mono text-sm">{phone.number}</p>
                      <p className="text-xs text-gray-500">Agent: {phone.agent}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{phone.monthlyRent}/month</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-sm text-gray-500">
                No phone numbers purchased yet.
              </div>
            )}
            
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Account Balance</h4>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">$0.99</span>
                <Button size="sm" variant="outline" data-testid="add-funds-button">
                  Add Funds
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="border border-bolna-border rounded-lg overflow-hidden mb-6">
        <div className="bg-gray-50 p-4 border-b border-bolna-border">
          <h3 className="font-medium">Call Records</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <Button size="sm" variant="outline" data-testid="select-batch-button">
              Select Batch
            </Button>
            <Button size="sm" variant="outline" data-testid="pick-date-button">
              Pick a Date
            </Button>
            <Button size="sm" variant="outline" data-testid="fetch-records-button">
              Fetch Records
            </Button>
            <Button size="sm" variant="outline" data-testid="download-records-button">
              Download Records
            </Button>
          </div>
        </div>
        
        <div className="p-6 text-center text-gray-500">
          No call records available. Execute an agent to generate call history.
        </div>
      </div>
      
      {/* Buy Number Modal */}
      <BuyNumberModal 
        isOpen={isBuyNumberModalOpen} 
        onOpenChange={setIsBuyNumberModalOpen}
        onPurchase={handlePurchaseNumber}
      />
    </DashboardLayout>
  );
};

export default CallHistoryPage;
