
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Calendar, MessageSquare, Phone, Activity, FileText } from "lucide-react";

const features = [
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Patient Care",
    description: "24/7 patient support and monitoring"
  },
  {
    icon: <Calendar className="h-8 w-8 text-blue-600" />,
    title: "Appointment Scheduling",
    description: "Automated scheduling and reminders"
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
    title: "Telehealth Consultations",
    description: "Virtual consultations and follow-ups"
  },
  {
    icon: <Phone className="h-8 w-8 text-blue-600" />,
    title: "Emergency Response",
    description: "Immediate triage and emergency protocols"
  },
  {
    icon: <Activity className="h-8 w-8 text-blue-600" />,
    title: "Health Monitoring",
    description: "Continuous patient health tracking"
  },
  {
    icon: <FileText className="h-8 w-8 text-blue-600" />,
    title: "Medical Documentation",
    description: "Automated record keeping and reports"
  }
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Supercharge every function
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                From patient care to administrative tasks, our AI agents handle everything your healthcare practice needs to run smoothly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="bg-gray-50 border-0 p-4 hover:bg-blue-50 transition-colors duration-300">
                  <CardContent className="p-0 flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Transform into an AI Clinic that runs on autopilot</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">Reduce operational costs by 80%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">Improve patient satisfaction scores</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">24/7 availability for patient care</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">HIPAA compliant and secure</span>
                  </div>
                </div>
                <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square bg-blue-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-2"></div>
                  <p className="text-xs font-medium text-gray-700">Dr. AI Assistant</p>
                </div>
              </div>
              <div className="aspect-square bg-blue-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-2"></div>
                  <p className="text-xs font-medium text-gray-700">Schedule Bot</p>
                </div>
              </div>
              <div className="aspect-square bg-blue-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-2"></div>
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
