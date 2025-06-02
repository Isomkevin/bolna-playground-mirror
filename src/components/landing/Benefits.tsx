
import { Users, Clock, Shield } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="py-12 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center text-white mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">
            Autonomous AI agents to run your practice on autopilot
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
          <div className="space-y-3">
            <div className="flex justify-center">
              <Users className="h-12 w-12" />
            </div>
            <div className="text-3xl font-bold">52+</div>
            <div className="text-base opacity-90">AI Specialists</div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-center">
              <Clock className="h-12 w-12" />
            </div>
            <div className="text-3xl font-bold">24+</div>
            <div className="text-base opacity-90">Hours Available</div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-center">
              <Shield className="h-12 w-12" />
            </div>
            <div className="text-3xl font-bold">70+</div>
            <div className="text-base opacity-90">Specialties Covered</div>
          </div>
        </div>
        
        <div className="mt-12 text-center text-white space-y-4">
          <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            AI agents don't take days off. They're faster, more intelligent, and more reliable.
          </p>
          <p className="text-sm opacity-90 max-w-2xl mx-auto">
            They work on your of unpredictable situations, with unlimited bandwidth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">10X</div>
              <div className="text-sm opacity-90">Faster Response</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">10X</div>
              <div className="text-sm opacity-90">More Efficient</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">100X</div>
              <div className="text-sm opacity-90">Cost Effective</div>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-lg font-bold">ROI is in our DNA.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
