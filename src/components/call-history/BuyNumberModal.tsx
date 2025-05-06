
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BuyNumberModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onPurchase: (number: string, country: string) => void;
}

const BuyNumberModal: React.FC<BuyNumberModalProps> = ({
  isOpen,
  onOpenChange,
  onPurchase
}) => {
  const [country, setCountry] = useState('US');
  const [pattern, setPattern] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [selectedNumber, setSelectedNumber] = useState('');
  const { toast } = useToast();

  const handleSearch = () => {
    if (!pattern) {
      toast({
        title: "Pattern required",
        description: "Please enter a pattern to search for available numbers.",
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);
    
    // Simulate search process
    setTimeout(() => {
      setIsSearching(false);
      
      // Mock search results
      const results = [
        `+1${pattern}${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
        `+1${pattern}${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
        `+1${pattern}${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`
      ];
      
      setSearchResults(results);
      setSelectedNumber(results[0]);
    }, 1500);
  };

  const handlePurchase = () => {
    if (!selectedNumber) {
      toast({
        title: "No number selected",
        description: "Please select a number to purchase.",
        variant: "destructive",
      });
      return;
    }

    onPurchase(selectedNumber, country);
    
    // Reset form
    setCountry('US');
    setPattern('');
    setSearchResults([]);
    setSelectedNumber('');
    
    // Close modal
    onOpenChange(false);
  };

  const handlePatternChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    const value = e.target.value.replace(/\D/g, '');
    setPattern(value);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]" data-testid="buy-number-modal">
        <DialogHeader>
          <DialogTitle>Buy a Phone Number</DialogTitle>
          <DialogDescription>
            Search for available phone numbers and purchase one for your account.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="country">Select Country</Label>
            <Select value={country} onValueChange={setCountry} data-testid="country-select">
              <SelectTrigger id="country">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Countries</SelectLabel>
                  <SelectItem value="US">United States</SelectItem>
                  <SelectItem value="CA">Canada</SelectItem>
                  <SelectItem value="GB">United Kingdom</SelectItem>
                  <SelectItem value="AU">Australia</SelectItem>
                  <SelectItem value="IN">India</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="pattern">Pattern (area code or prefix)</Label>
            <div className="flex gap-2">
              <Input
                id="pattern"
                value={pattern}
                onChange={handlePatternChange}
                placeholder="e.g., 615"
                className="w-full"
                maxLength={3}
                data-testid="pattern-input"
              />
              <Button 
                onClick={handleSearch} 
                disabled={isSearching || !pattern}
                data-testid="search-button"
              >
                {isSearching ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Search className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Enter a 3-digit area code (e.g., 615 for Nashville) to find available numbers in that region.
            </p>
          </div>
          
          {searchResults.length > 0 && (
            <div className="grid gap-2">
              <Label>Available Numbers</Label>
              <div className="border rounded-md p-2 max-h-40 overflow-y-auto">
                {searchResults.map((number, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center p-2 rounded-md cursor-pointer ${selectedNumber === number ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'}`}
                    onClick={() => setSelectedNumber(number)}
                    data-testid={`number-option-${index}`}
                  >
                    <input 
                      type="radio" 
                      name="phoneNumber" 
                      checked={selectedNumber === number} 
                      onChange={() => setSelectedNumber(number)}
                      className="mr-2"
                    />
                    <span className="font-mono">{number}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)}
            data-testid="cancel-purchase"
          >
            Cancel
          </Button>
          <Button 
            onClick={handlePurchase}
            disabled={!selectedNumber}
            data-testid="confirm-purchase"
          >
            Purchase Number
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BuyNumberModal;
