
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useData } from '@/context/DataContext';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AssignInboundAgentModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  agentName: string;
}

const AssignInboundAgentModal: React.FC<AssignInboundAgentModalProps> = ({
  isOpen,
  onOpenChange,
  agentName
}) => {
  const { phoneNumbers } = useData();
  const [selectedNumber, setSelectedNumber] = useState<string>("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleBuyNumber = () => {
    onOpenChange(false);
    navigate('/phone-numbers');
  };

  const handleSubmit = () => {
    if (!selectedNumber) {
      toast({
        title: "No number selected",
        description: "Please select a phone number or buy a new one.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Agent assigned",
      description: `${agentName} has been assigned to phone number ${selectedNumber}.`,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]" data-testid="assign-agent-modal">
        <DialogHeader>
          <DialogTitle>Setting phone number for your {agentName} agent to use answer calls</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="phone-number" className="text-sm font-medium">
              Please choose a number which the agent will use to answer calls
            </label>
            <Select value={selectedNumber} onValueChange={setSelectedNumber} data-testid="phone-number-select">
              <SelectTrigger id="phone-number" className="w-full">
                <SelectValue placeholder="No phone numbers found" />
              </SelectTrigger>
              <SelectContent>
                {phoneNumbers.length > 0 ? (
                  phoneNumbers.map((phone) => (
                    <SelectItem key={phone.id} value={phone.number}>
                      {phone.number}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="none" disabled>
                    No phone numbers found
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
            <p className="text-sm text-gray-500">
              You can buy a new number if you don't have any.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleBuyNumber} data-testid="buy-number-button">
            Buy a new number
          </Button>
          <Button onClick={handleSubmit} data-testid="assign-number-button">
            Assign phone number
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AssignInboundAgentModal;
