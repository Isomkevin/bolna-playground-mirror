
import { CheckCircle, Users, Clock, Shield } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center text-white mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Autonomous AI agents to run your practice on autopilot
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          <div className="space-y-4">
            <div className="flex justify-center">
              <Users className="h-16 w-16" />
            </div>
            <div className="text-5xl font-bold">52+</div>
            <div className="text-xl opacity-90">AI Specialists</div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-center">
              <Clock className="h-16 w-16" />
            </div>
            <div className="text-5xl font-bold">24+</div>
            <div className="text-xl opacity-90">Hours Available</div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-center">
              <Shield className="h-16 w-16" />
            </div>
            <div className="text-5xl font-bold">70+</div>
            <div className="text-xl opacity-90">Specialties Covered</div>
          </div>
        </div>
        
        <div className="mt-20 text-center text-white space-y-8">
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            AI agents don't take days off. They're faster, more intelligent, and more reliable.
          </p>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            They work on your of unpredictable situations, with unlimited bandwidth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10X</div>
              <div className="text-lg opacity-90">Faster Response</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10X</div>
              <div className="text-lg opacity-90">More Efficient</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100X</div>
              <div className="text-lg opacity-90">Cost Effective</div>
            </div>
          </div>
          
          <div className="mt-12">
            <p className="text-2xl font-bold">ROI is in our DNA.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
