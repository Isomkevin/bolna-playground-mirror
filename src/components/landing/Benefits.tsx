
import { Users, Clock, Shield } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center text-white mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Autonomous AI agents to run your practice on autopilot
          </h2>
          <div className="w-16 h-0.5 bg-white/40 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white mb-16">
          <div className="space-y-4 group">
            <div className="flex justify-center">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <Users className="h-10 w-10" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">52+</div>
              <div className="text-lg opacity-90 font-medium">AI Specialists</div>
            </div>
          </div>
          
          <div className="space-y-4 group">
            <div className="flex justify-center">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <Clock className="h-10 w-10" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-lg opacity-90 font-medium">Hours Available</div>
            </div>
          </div>
          
          <div className="space-y-4 group">
            <div className="flex justify-center">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <Shield className="h-10 w-10" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">70+</div>
              <div className="text-lg opacity-90 font-medium">Specialties Covered</div>
            </div>
          </div>
        </div>
        
        <div className="text-center text-white space-y-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg md:text-xl leading-relaxed font-light">
              AI agents don't take days off. They're faster, more intelligent, and more reliable.
            </p>
            <p className="text-base opacity-90 max-w-3xl mx-auto leading-relaxed">
              They work seamlessly in any situation, handling unpredictable scenarios with unlimited bandwidth and consistent performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold mb-2 text-blue-100">10X</div>
              <div className="text-sm opacity-90 font-medium">Faster Response</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold mb-2 text-blue-100">10X</div>
              <div className="text-sm opacity-90 font-medium">More Efficient</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold mb-2 text-blue-100">100X</div>
              <div className="text-sm opacity-90 font-medium">Cost Effective</div>
            </div>
          </div>
          
          <div className="pt-6">
            <p className="text-xl font-semibold text-blue-100">ROI is in our DNA.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
