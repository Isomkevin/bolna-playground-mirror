
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from 'react-router-dom';

interface GetCallFromAgentModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const GetCallFromAgentModal: React.FC<GetCallFromAgentModalProps> = ({
  isOpen,
  onOpenChange
}) => {
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [provider, setProvider] = useState("afrivoice");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handlePurchaseNumbers = () => {
    onOpenChange(false);
    navigate('/phone-numbers');
  };

  const handlePlaceCall = () => {
    if (!phoneNumber) {
      toast({
        title: "Phone number required",
        description: "Please enter a valid phone number to place a call.",
        variant: "destructive",
      });
      return;
    }

    const formattedNumber = `${countryCode}${phoneNumber.replace(/\D/g, '')}`;
    
    toast({
      title: "Call initiated",
      description: `Placing call to ${formattedNumber} using ${provider === 'afrivoice' ? 'AfriVoice' : provider === 'africas_talking' ? 'Africa\'s Talking' : 'Twilio'}.`,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]" data-testid="get-call-modal">
        <DialogHeader>
          <DialogTitle>Setting a phone number for your agent to answer calls</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <h3 className="text-sm font-medium">Place outbound calls</h3>
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1">
              <Input
                placeholder="+1"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="w-full"
                data-testid="country-code-input"
              />
            </div>
            <div className="col-span-3">
              <Input
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full"
                data-testid="phone-number-input"
              />
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Enter phone numbers with country code (for example: +162 82774700).
          </p>
          
          <div className="grid gap-2 mt-2">
            <label htmlFor="provider" className="text-sm font-medium">
              Calls can be made using:
            </label>
            <Select value={provider} onValueChange={setProvider} data-testid="provider-select">
              <SelectTrigger id="provider" className="w-full">
                <SelectValue placeholder="Select provider" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="afrivoice">AfriVoice managed phone numbers</SelectItem>
                <SelectItem value="africas_talking">Africa's Talking</SelectItem>
                <SelectItem value="twilio">Twilio</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-gray-500">
              You can purchase phone numbers to start making calls from your own custom numbers.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handlePurchaseNumbers} data-testid="buy-numbers-redirect">
            Buy phone numbers
          </Button>
          <Button onClick={handlePlaceCall} data-testid="place-call-button">
            Place call
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GetCallFromAgentModal;
