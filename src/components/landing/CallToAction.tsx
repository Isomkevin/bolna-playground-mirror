
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-bolna-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Start Building Voice AI Agents Today
        </h2>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          Join organizations across Africa that are using AfriVoice AI to reach communities and deliver services through simple phone calls.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" variant="secondary" className="text-blue-800 bg-white hover:bg-blue-50">
            <Link to="/agent-setup">
              Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
            <Link to="#demo" id="demo">
              Request a Demo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
