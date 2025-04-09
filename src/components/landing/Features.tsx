
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageSquare, Users, Globe, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: <Phone className="h-10 w-10 text-afrivoice-blue" />,
    title: "Phone Call Integration",
    description: "Connect with users via standard phone calls, no smartphone or internet required"
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-afrivoice-blue" />,
    title: "Local Language Support",
    description: "AI agents that understand and speak Swahili, Hausa, Amharic, and other African languages"
  },
  {
    icon: <Users className="h-10 w-10 text-afrivoice-blue" />,
    title: "Custom Voice Agents",
    description: "Create specialized AI agents for healthcare, agriculture, education, and more"
  },
  {
    icon: <Globe className="h-10 w-10 text-afrivoice-blue" />,
    title: "Rural Accessibility",
    description: "Reach remote communities without requiring internet infrastructure"
  },
  {
    icon: <Clock className="h-10 w-10 text-afrivoice-blue" />,
    title: "24/7 Availability",
    description: "Provide continuous service without staffing limitations or working hours"
  },
  {
    icon: <Shield className="h-10 w-10 text-afrivoice-blue" />,
    title: "Secure Conversations",
    description: "End-to-end encryption and privacy-focused design for sensitive information"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Voice AI Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AfriVoice AI brings smart voice agents to millions across Africa, 
            even in areas with limited connectivity and technology adoption.
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
