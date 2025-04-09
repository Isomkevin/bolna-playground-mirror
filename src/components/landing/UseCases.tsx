
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const useCaseCategories = [
  { value: "all", label: "All" },
  { value: "healthcare", label: "Healthcare" },
  { value: "agriculture", label: "Agriculture" },
  { value: "education", label: "Education" }
];

const useCases = [
  {
    category: "healthcare",
    title: "Patient Follow-Up",
    description: "Follows up with patients to schedule check-ins and monitor their progress",
    image: "/lovable-uploads/0ccc2fe4-093a-43eb-b030-b11359f01d7e.png"
  },
  {
    category: "healthcare",
    title: "Medication Reminders",
    description: "Calls patients with timely medication reminders and adherence checks",
    image: "/lovable-uploads/0ccc2fe4-093a-43eb-b030-b11359f01d7e.png"
  },
  {
    category: "agriculture",
    title: "Crop Pricing Updates",
    description: "Delivers current market prices and buying opportunities to farmers via phone",
    image: "/lovable-uploads/0ccc2fe4-093a-43eb-b030-b11359f01d7e.png"
  },
  {
    category: "agriculture",
    title: "Weather Alerts",
    description: "Alerts farmers about upcoming weather conditions that may affect crops",
    image: "/lovable-uploads/0ccc2fe4-093a-43eb-b030-b11359f01d7e.png"
  },
  {
    category: "education",
    title: "Student Support",
    description: "Provides homework help and answers study questions for students",
    image: "/lovable-uploads/0ccc2fe4-093a-43eb-b030-b11359f01d7e.png"
  },
  {
    category: "education",
    title: "Lesson Delivery",
    description: "Delivers educational content and lessons via phone calls in local languages",
    image: "/lovable-uploads/0ccc2fe4-093a-43eb-b030-b11359f01d7e.png"
  }
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Voice AI Use Cases</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore how AfriVoice AI agents are transforming service delivery across various sectors
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              {useCaseCategories.map((category) => (
                <TabsTrigger key={category.value} value={category.value}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {useCaseCategories.map((category) => (
            <TabsContent key={category.value} value={category.value} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {useCases
                  .filter(useCase => category.value === "all" || useCase.category === category.value)
                  .map((useCase, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                      <div className="aspect-[4/3] bg-gray-100 relative">
                        {useCase.image && (
                          <img 
                            src={useCase.image} 
                            alt={useCase.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                        <p className="text-gray-600 mb-4">{useCase.description}</p>
                        <Button variant="outline" size="sm">Learn more</Button>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default UseCases;
