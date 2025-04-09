
import React from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";
import { Unlink } from 'lucide-react';

export const PhoneNumberPanel = () => {
  const { toast } = useToast();
  
  const handleUnlink = () => {
    toast({
      title: "Agent unlinked",
      description: "The agent has been unlinked from this phone number.",
      variant: "default",
    });
  };
  
  return (
    <div className="border border-afrivoice-border rounded-lg overflow-hidden">
      <div className="grid grid-cols-7 gap-4 p-4 bg-gray-50 border-b border-afrivoice-border text-sm">
        <div className="font-medium">Phone number</div>
        <div className="font-medium">Agent answering this phone number</div>
        <div className="font-medium">Telephony</div>
        <div className="font-medium">Bought on</div>
        <div className="font-medium">Renews on</div>
        <div className="font-medium">Monthly rent</div>
        <div className="font-medium">Unlink agent from phone</div>
      </div>
      
      {/* If there are numbers, show them, otherwise show empty state */}
      <div className="p-6 text-center text-gray-500">
        No data available.
      </div>
      
      {/* Example of how a phone number row would look, hidden for now */}
      <div className="hidden grid grid-cols-7 gap-4 p-4 border-b border-afrivoice-border">
        <div>+254 712 345678</div>
        <div>Customer Support Agent</div>
        <div>Africa's Talking</div>
        <div>Apr 09, 2025</div>
        <div>May 09, 2025</div>
        <div>$1.50</div>
        <div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Unlink className="h-4 w-4 mr-1" />
                Unlink
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Unlink Agent</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to unlink this agent from the phone number? This will make the phone number unresponsive to calls until a new agent is linked.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleUnlink} className="bg-afrivoice-blue hover:bg-afrivoice-blue/90">
                  Unlink
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};
