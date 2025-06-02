
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-16 pb-12 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              AI Employees for Healthcare
              <br />
              <span className="text-blue-600">Practices</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our AI assistants work seamlessly across all channels — voice, chat, USSD — making intelligence accessible to everyone, everywhere in Africa.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-6">
            <Button 
              asChild 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/dashboard">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 text-base rounded-full transition-all duration-300"
            >
              <Link to="/#demo">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
