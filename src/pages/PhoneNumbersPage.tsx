
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { PhoneNumberPanel } from '@/components/phone-numbers/PhoneNumberPanel';
import { Checkbox } from "@/components/ui/checkbox";

const PhoneNumbersPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("kenya");
  const [selectedAgent, setSelectedAgent] = useState("new");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const { toast } = useToast();

  const handleBuyNumber = () => {
    if (!agreeTerms) {
      toast({
        title: "Agreement required",
        description: "You must agree to the terms and conditions.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call to buy number
    setTimeout(() => {
      setIsLoading(false);
      setIsDialogOpen(false);
      
      toast({
        title: "Success!",
        description: "Phone number purchased successfully.",
        variant: "default",
      });
      
      // Reset form
      setAgreeTerms(false);
    }, 1500);
  };

  return (
    <DashboardLayout 
      title="My phone numbers" 
      subtitle="Buy and view your phone numbers"
    >
      <div className="mb-6 flex justify-end">
        <Button 
          className="bg-afrivoice-blue hover:bg-afrivoice-blue/90 text-white"
          onClick={() => setIsDialogOpen(true)}
        >
          Buy phone number
        </Button>
      </div>
      
      <PhoneNumberPanel />
      
      {/* Buy Phone Number Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Buy a new phone number</DialogTitle>
            <DialogDescription>
              Purchase a local phone number to use with your voice agents
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="local" className="w-full">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="local">Local Number</TabsTrigger>
              <TabsTrigger value="tollfree">Toll-Free</TabsTrigger>
            </TabsList>
            <TabsContent value="local" className="space-y-4 pt-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Select Country</Label>
                  <Select 
                    value={selectedCountry} 
                    onValueChange={setSelectedCountry}
                  >
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kenya">Kenya (+254)</SelectItem>
                      <SelectItem value="nigeria">Nigeria (+234)</SelectItem>
                      <SelectItem value="south-africa">South Africa (+27)</SelectItem>
                      <SelectItem value="ghana">Ghana (+233)</SelectItem>
                      <SelectItem value="tanzania">Tanzania (+255)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="agent">Link to agent (optional)</Label>
                  <Select 
                    value={selectedAgent} 
                    onValueChange={setSelectedAgent}
                  >
                    <SelectTrigger id="agent">
                      <SelectValue placeholder="Select agent" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New Agent</SelectItem>
                      <SelectItem value="customer-support">Customer Support</SelectItem>
                      <SelectItem value="sales">Sales Agent</SelectItem>
                      <SelectItem value="none">No Agent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="border rounded-md p-3 bg-blue-50">
                  <div className="flex items-start space-x-2">
                    <p className="text-sm text-blue-700">
                      Cost: $1.50/month + $0.05/minute for incoming calls
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={agreeTerms}
                    onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm font-normal">
                    I agree to the <a href="#" className="text-afrivoice-blue underline">terms and conditions</a> for purchasing phone numbers
                  </Label>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="tollfree" className="space-y-4 pt-4">
              <p className="text-sm text-muted-foreground">
                Toll-free numbers are coming soon! These will allow your users to call your voice agents for free.
              </p>
            </TabsContent>
          </Tabs>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleBuyNumber}
              className="bg-afrivoice-blue hover:bg-afrivoice-blue/90"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Buy Number"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default PhoneNumbersPage;
