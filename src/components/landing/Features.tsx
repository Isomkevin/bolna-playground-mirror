
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Users, Globe, Clock, Shield, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <Phone className="h-12 w-12 text-blue-600" />,
    title: "Dr. Sarah Johnson",
    subtitle: "Family Medicine",
    description: "Specializes in patient consultations and appointment scheduling with 10+ years experience",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    category: "Primary Care"
  },
  {
    icon: <MessageSquare className="h-12 w-12 text-blue-600" />,
    title: "Dr. Michael Chen",
    subtitle: "Cardiology",
    description: "Expert in heart health monitoring and cardiovascular disease prevention",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    category: "Cardiology"
  },
  {
    icon: <Users className="h-12 w-12 text-blue-600" />,
    title: "Dr. Emily Rodriguez",
    subtitle: "Pediatrics",
    description: "Dedicated to child healthcare and development with specialized AI training",
    image: "https://images.unsplash.com/photo-1594824618296-9bfb7c3e87dc?w=400&h=400&fit=crop&crop=face",
    category: "Pediatrics"
  },
  {
    icon: <Globe className="h-12 w-12 text-blue-600" />,
    title: "Dr. James Wilson",
    subtitle: "Internal Medicine",
    description: "Comprehensive healthcare for adults with AI-enhanced diagnostic capabilities",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    category: "Internal Medicine"
  },
  {
    icon: <Clock className="h-12 w-12 text-blue-600" />,
    title: "Dr. Lisa Thompson",
    subtitle: "Dermatology",
    description: "Skin health specialist with advanced AI image analysis for accurate diagnosis",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=face",
    category: "Dermatology"
  },
  {
    icon: <Shield className="h-12 w-12 text-blue-600" />,
    title: "Dr. Robert Kim",
    subtitle: "Mental Health",
    description: "Compassionate mental health support with AI-powered therapeutic assistance",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    category: "Mental Health"
  }
];

const categories = [
  "All", "Primary Care", "Cardiology", "Pediatrics", "Internal Medicine", "Dermatology", "Mental Health"
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Your AI Healthcare Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our specialized AI doctors are trained to provide expert healthcare assistance across multiple specialties
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                index === 0 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden group">
              <CardHeader className="p-0">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {feature.category}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-blue-600 font-medium mb-3 text-base">{feature.subtitle}</CardDescription>
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">{feature.description}</CardDescription>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
