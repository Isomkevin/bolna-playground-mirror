
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center overflow-hidden">
                    <span className="text-xs font-medium text-gray-700">User</span>
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">100+ active voice agents</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              AI Voice Agents for Africa
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Our AI agents can handle entire conversations via phone call, reliably and cost-effectively. No internet or smartphone required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="text-base bg-afrivoice-blue hover:bg-afrivoice-blue/90">
                <Link to="/agent-setup">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/#demo">Request a Demo</Link>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="aspect-video bg-afrivoice-blue/10 rounded-lg flex items-center justify-center">
                <span className="text-afrivoice-blue font-medium">Voice Agent Demo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
