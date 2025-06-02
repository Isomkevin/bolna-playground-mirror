
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Users, Globe, Clock, Shield } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: <Phone className="h-8 w-8 text-blue-600" />,
    title: "Dr. Sarah Johnson",
    subtitle: "Family Medicine",
    description: "Specializes in patient consultations and appointment scheduling with 10+ years experience",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    category: "Primary Care"
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
    title: "Dr. Michael Chen",
    subtitle: "Cardiology",
    description: "Expert in heart health monitoring and cardiovascular disease prevention",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    category: "Cardiology"
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Dr. Emily Rodriguez",
    subtitle: "Pediatrics",
    description: "Dedicated to child healthcare and development with specialized AI training",
    image: "https://images.unsplash.com/photo-1594824618296-9bfb7c3e87dc?w=300&h=300&fit=crop&crop=face",
    category: "Pediatrics"
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Dr. James Wilson",
    subtitle: "Internal Medicine",
    description: "Comprehensive healthcare for adults with AI-enhanced diagnostic capabilities",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
    category: "Internal Medicine"
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: "Dr. Lisa Thompson",
    subtitle: "Dermatology",
    description: "Skin health specialist with advanced AI image analysis for accurate diagnosis",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop&crop=face",
    category: "Dermatology"
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: "Dr. Robert Kim",
    subtitle: "Mental Health",
    description: "Compassionate mental health support with AI-powered therapeutic assistance",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    category: "Mental Health"
  }
];

const categories = [
  "All", "Primary Care", "Cardiology", "Pediatrics", "Internal Medicine", "Dermatology", "Mental Health"
];

const Features = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredFeatures = activeCategory === "All" 
    ? features 
    : features.filter(feature => feature.category === activeCategory);

  const handleLearnMore = (doctorName: string) => {
    console.log(`Learning more about ${doctorName}`);
    // Add modal or navigation logic here
  };

  return (
    <section id="features" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Meet Your AI Healthcare Team
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Our specialized AI doctors are trained to provide expert healthcare assistance across multiple specialties
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFeatures.map((feature, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-0 overflow-hidden group">
              <CardHeader className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {feature.category}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-bold text-gray-900 mb-1">{feature.title}</CardTitle>
                <CardDescription className="text-blue-600 font-medium mb-2 text-sm">{feature.subtitle}</CardDescription>
                <CardDescription className="text-gray-600 mb-4 text-sm leading-relaxed">{feature.description}</CardDescription>
                <Button 
                  onClick={() => handleLearnMore(feature.title)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 text-sm py-2"
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
