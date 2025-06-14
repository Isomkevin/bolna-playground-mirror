
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const CallToAction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      
      toast({
        title: "Demo request submitted",
        description: "Thank you for your interest. Our team will contact you shortly.",
        variant: "default",
      });
      
      // Reset form
      setEmail("");
      setName("");
      setCompany("");
    }, 1000);
  };
  
  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Get Started with Ava
          </h2>
          <p className="text-base text-gray-600 mb-5 max-w-xl mx-auto">
            Join healthcare practices across Africa that are using AfriCopilot AI to transform their patient care and operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button 
              asChild 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base rounded-full shadow-lg"
            >
              <Link to="/dashboard">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 text-base rounded-full"
              onClick={() => setIsOpen(true)}
            >
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">Request a Demo</DialogTitle>
            <DialogDescription className="text-gray-600 text-sm">
              Fill out the form below and our team will get in touch with you to schedule a personalized demo.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-3 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Your full name"
                  className="rounded-lg border-gray-300 focus:border-blue-600 text-sm"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Your email address"
                  className="rounded-lg border-gray-300 focus:border-blue-600 text-sm"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company" className="text-sm font-medium">Company</Label>
                <Input 
                  id="company" 
                  value={company} 
                  onChange={(e) => setCompany(e.target.value)} 
                  placeholder="Your organization name"
                  className="rounded-lg border-gray-300 focus:border-blue-600 text-sm"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 text-sm"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CallToAction;
