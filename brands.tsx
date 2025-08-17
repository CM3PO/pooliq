import { Card } from "@/components/ui/card";
import { Waves, Cog, Droplet, Bot } from "lucide-react";

export default function BrandsSection() {
  const brands = [
    {
      name: "Pentair",
      icon: Waves,
      description: "Premium pool equipment and automation systems"
    },
    {
      name: "Hayward", 
      icon: Cog,
      description: "Industry-leading pumps, filters, and cleaners"
    },
    {
      name: "Jandy",
      icon: Droplet,
      description: "Professional pool and spa equipment"
    },
    {
      name: "Polaris",
      icon: Bot, 
      description: "Advanced pool cleaning robots and equipment"
    }
  ];

  return (
    <section className="py-20 bg-pool-gray" data-testid="brands-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4" data-testid="brands-title">
            Trusted Equipment Brands
          </h2>
          <p className="text-xl text-gray-600" data-testid="brands-subtitle">
            We service and install equipment from industry-leading manufacturers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {brands.map((brand, index) => {
            const IconComponent = brand.icon;
            return (
              <Card 
                key={brand.name} 
                className="bg-white p-6 lg:p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                data-testid={`brand-card-${index}`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-pool-gray rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-pool-blue group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2" data-testid={`brand-name-${index}`}>
                    {brand.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed" data-testid={`brand-description-${index}`}>
                    {brand.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed" data-testid="brands-description">
            When providing pool repairs and equipment installations in Austin, we use only supplies and parts from top pool equipment manufacturers to ensure long-lasting reliability and optimal performance.
          </p>
        </div>
      </div>
    </section>
  );
}
