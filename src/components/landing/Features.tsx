
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageSquare, Users, Globe, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: <Phone className="h-10 w-10 text-africopilot-blue" />,
    title: "Multichannel Support",
    description: "Connect with users via phone calls, chat, or USSD - works on any device"
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-africopilot-blue" />,
    title: "Local Language Support",
    description: "AI assistants that understand and speak Swahili, Hausa, Amharic, and other African languages"
  },
  {
    icon: <Users className="h-10 w-10 text-africopilot-blue" />,
    title: "Specialized AI Teammates",
    description: "Create dedicated assistants for healthcare, agriculture, education, and more"
  },
  {
    icon: <Globe className="h-10 w-10 text-africopilot-blue" />,
    title: "Universal Accessibility",
    description: "Reach everyone regardless of device, connectivity, or technical skills"
  },
  {
    icon: <Clock className="h-10 w-10 text-africopilot-blue" />,
    title: "24/7 Availability",
    description: "Your AI teammate is always ready to help, without staffing limitations"
  },
  {
    icon: <Shield className="h-10 w-10 text-africopilot-blue" />,
    title: "Secure Interactions",
    description: "End-to-end encryption and privacy-focused design for sensitive information"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful AI Assistant Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AfriCopilot AI brings intelligent assistants to millions across Africa, 
            working as your reliable teammate across all communications channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
