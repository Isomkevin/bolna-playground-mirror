
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
    title: "Patient Support",
    description: "Assists patients with appointment scheduling and health monitoring",
    image: "https://framerusercontent.com/images/qACNH2r91DMiHd8YwLGb7UmDziY.png"
  },
  {
    category: "healthcare",
    title: "Medication Assistant",
    description: "Helps patients with medication schedules and adherence through timely reminders",
    image: "https://framerusercontent.com/images/9hxum5wl73R1XhpD4uKYAKVxOc.png"
  },
  {
    category: "agriculture",
    title: "Market Intelligence",
    description: "Delivers current crop prices and buying opportunities to farmers",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-K9hWOxogNIvT6VMSD_hQEYnw-t4z0ddSRA&s"
  },
  {
    category: "agriculture",
    title: "Weather Insights",
    description: "Provides personalized weather forecasts and farming recommendations",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNWcI2mRfEVO63h5kY-8X7gkJ-q4Qu3uBOJ3VxVSev2KWuc33NreWDsVXB1lRfpNGnWD0&usqp=CAU"
  },
  {
    category: "education",
    title: "Learning Companion",
    description: "Offers homework assistance and answers study questions for students",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOT9RPMg-zUpd6TI3clIT21_GkWFM9EBNkuw&s"
  },
  {
    category: "education",
    title: "Knowledge Delivery",
    description: "Delivers educational content in an interactive, engaging format",
    image: "https://www.instancy.com/wp-content/uploads/2024/01/DALL%C2%B7E-2024-01-18-17.02.39-Image-2_-A-visual-representation-of-a-multi-modal-AI-agent-in-an-educational-setting.-The-AI-agent-is-a-sleek-advanced-computer-interface-shown-proce.png"
  }
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Assistant Use Cases</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore how AfriCopilot AI assistants are transforming service delivery across various sectors
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
