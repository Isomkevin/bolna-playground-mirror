
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
import { Phone } from "lucide-react";

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
      <DialogContent 
        className="sm:max-w-[500px] rounded-xl border border-africopilot-border shadow-lg bg-card animate-scale-in" 
        data-testid="assign-agent-modal"
      >
        <DialogHeader className="space-y-3 pb-2">
          <DialogTitle className="text-heading-4 font-semibold text-center sm:text-left">
            Setting phone number for your <span className="text-africopilot-blue">{agentName}</span> agent to answer calls
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-5 py-4">
          <div className="grid gap-3">
            <label htmlFor="phone-number" className="text-sm font-medium text-foreground">
              Please choose a number which the agent will use to answer calls
            </label>
            <Select 
              value={selectedNumber} 
              onValueChange={setSelectedNumber} 
              data-testid="phone-number-select"
            >
              <SelectTrigger 
                id="phone-number" 
                className="w-full border-input bg-background hover:bg-accent/20 transition-colors focus:ring-2 focus:ring-africopilot-blue focus:ring-offset-2"
              >
                <SelectValue placeholder={
                  <span className="flex items-center text-muted-foreground">
                    <Phone className="mr-2 h-4 w-4" />
                    {phoneNumbers.length > 0 ? "Select a phone number" : "No phone numbers found"}
                  </span>
                } />
              </SelectTrigger>
              <SelectContent className="bg-card border border-africopilot-border shadow-md">
                {phoneNumbers.length > 0 ? (
                  phoneNumbers.map((phone) => (
                    <SelectItem 
                      key={phone.id} 
                      value={phone.number}
                      className="hover:bg-accent/30 cursor-pointer"
                    >
                      <span className="font-mono">{phone.number}</span>
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="none" disabled className="text-muted-foreground italic">
                    No phone numbers found
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground flex items-center">
              <Phone className="h-4 w-4 mr-1 text-africopilot-blue" />
              You can buy a new number if you don't have any.
            </p>
          </div>
        </div>

        <DialogFooter className="flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-between mt-4">
          <Button 
            variant="outline" 
            onClick={handleBuyNumber} 
            data-testid="buy-number-button"
            className="w-full sm:w-auto border-africopilot-border hover:bg-secondary hover:text-secondary-foreground transition-colors"
          >
            Buy a new number
          </Button>
          <Button 
            onClick={handleSubmit} 
            data-testid="assign-number-button"
            className="w-full sm:w-auto bg-africopilot-blue hover:bg-africopilot-darkBlue transition-colors"
          >
            Assign phone number
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AssignInboundAgentModal;
