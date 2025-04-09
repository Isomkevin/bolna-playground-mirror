
import { CheckCircle } from "lucide-react";

const benefits = [
  "Works across multiple channels - voice, chat, and more",
  "Supports multiple African languages",
  "Available 24/7 as your reliable AI teammate",
  "Scalable to handle thousands of concurrent interactions",
  "Integrates with Africa's Talking and other local providers",
  "Custom workflows tailored to your specific needs",
  "Detailed analytics and conversation insights",
  "Pay-as-you-go pricing model with no upfront costs"
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="bg-gradient-to-tr from-africopilot-blue to-blue-400 rounded-2xl p-1">
              <div className="bg-white rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/493b10a9-9de1-4247-80dd-230bd186cbb8.png" 
                  alt="AfriCopilot Benefits" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose AfriCopilot AI?
            </h2>
            
            <p className="text-lg text-gray-600">
              Our platform is designed specifically for African contexts, providing a supportive AI teammate 
              that works seamlessly across all devices and connectivity levels.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
