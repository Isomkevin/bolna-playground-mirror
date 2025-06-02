
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Calendar, MessageSquare, Phone, Activity, FileText } from "lucide-react";

const features = [
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "Patient Care",
    description: "24/7 patient support and monitoring"
  },
  {
    icon: <Calendar className="h-6 w-6 text-blue-600" />,
    title: "Appointment Scheduling",
    description: "Automated scheduling and reminders"
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
    title: "Telehealth Consultations",
    description: "Virtual consultations and follow-ups"
  },
  {
    icon: <Phone className="h-6 w-6 text-blue-600" />,
    title: "Emergency Response",
    description: "Immediate triage and emergency protocols"
  },
  {
    icon: <Activity className="h-6 w-6 text-blue-600" />,
    title: "Health Monitoring",
    description: "Continuous patient health tracking"
  },
  {
    icon: <FileText className="h-6 w-6 text-blue-600" />,
    title: "Medical Documentation",
    description: "Automated record keeping and reports"
  }
];

const UseCases = () => {
  const handleLearnMore = () => {
    console.log("Learning more about AI clinic transformation");
    // Add navigation or modal logic here
  };

  return (
    <section id="use-cases" className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                Supercharge every function
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                From patient care to administrative tasks, our AI agents handle everything your healthcare practice needs to run smoothly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <Card key={index} className="bg-gray-50 border-0 p-3 hover:bg-blue-50 transition-colors duration-300">
                  <CardContent className="p-0 flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm">{feature.title}</h3>
                      <p className="text-xs text-gray-600">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="space-y-5">
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0 rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">Transform into an AI Clinic that runs on autopilot</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Reduce operational costs by 80%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Improve patient satisfaction scores</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">24/7 availability for patient care</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">HIPAA compliant and secure</span>
                  </div>
                </div>
                <Button 
                  onClick={handleLearnMore}
                  className="mt-4 bg-white text-blue-600 hover:bg-gray-100 rounded-full px-6 text-sm"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square bg-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-1"></div>
                  <p className="text-xs font-medium text-gray-700">Dr. AI Assistant</p>
                </div>
              </div>
              <div className="aspect-square bg-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-1"></div>
                  <p className="text-xs font-medium text-gray-700">Schedule Bot</p>
                </div>
              </div>
              <div className="aspect-square bg-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-1"></div>
                  <p className="text-xs font-medium text-gray-700">Care Monitor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
