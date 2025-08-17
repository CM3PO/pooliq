import { Link } from "wouter";
import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServiceAreasSection() {
  const serviceAreas = [
    {
      city: "Austin",
      services: [
        { name: "Austin Pool Cleaning", href: "/services#cleaning" },
        { name: "Austin Pool Repair", href: "/services#repair" },
        { name: "Austin Pool Construction", href: "/services#construction" },
        { name: "Austin Pool Remodeling", href: "/services#remodeling" },
        { name: "Austin Leak Detection", href: "/services#leak-detection" }
      ]
    },
    {
      city: "Georgetown", 
      services: [
        { name: "Georgetown Pool Cleaning", href: "/services#cleaning" },
        { name: "Georgetown Pool Repair", href: "/services#repair" },
        { name: "Georgetown Pool Remodeling", href: "/services#remodeling" },
        { name: "Georgetown Leak Detection", href: "/services#leak-detection" }
      ]
    },
    {
      city: "Round Rock",
      services: [
        { name: "Round Rock Pool Cleaning", href: "/services#cleaning" },
        { name: "Round Rock Pool Repair", href: "/services#repair" },
        { name: "Round Rock Pool Remodeling", href: "/services#remodeling" },
        { name: "Round Rock Leak Detection", href: "/services#leak-detection" }
      ]
    },
    {
      city: "Cedar Park",
      services: [
        { name: "Cedar Park Pool Cleaning", href: "/services#cleaning" },
        { name: "Cedar Park Pool Repair", href: "/services#repair" },
        { name: "Cedar Park Pool Maintenance", href: "/services#cleaning" }
      ]
    },
    {
      city: "Pflugerville",
      services: [
        { name: "Pflugerville Pool Cleaning", href: "/services#cleaning" },
        { name: "Pflugerville Pool Repair", href: "/services#repair" },
        { name: "Pflugerville Pool Service", href: "/services" }
      ]
    },
    {
      city: "Additional Areas",
      services: [
        { name: "Lakeway Pool Service", href: "/services" },
        { name: "Leander Pool Service", href: "/services" },
        { name: "Hutto Pool Service", href: "/services" },
        { name: "Dripping Springs Pool Service", href: "/services" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" data-testid="service-areas-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4" data-testid="service-areas-title">
            Service Areas
          </h2>
          <p className="text-xl text-gray-600" data-testid="service-areas-subtitle">
            Proudly serving Austin and surrounding communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceAreas.map((area, index) => (
            <Card key={area.city} className="bg-pool-gray hover:shadow-lg transition-shadow duration-300" data-testid={`service-area-${index}`}>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-pool-blue flex items-center gap-2" data-testid={`service-area-title-${index}`}>
                  <MapPin className="w-5 h-5" />
                  {area.city} Pool Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {area.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>
                      <Link 
                        href={service.href} 
                        className="text-gray-600 hover:text-pool-blue transition-colors text-sm"
                        data-testid={`service-link-${index}-${serviceIndex}`}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-pool-blue text-white rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4" data-testid="coverage-area-title">
            Complete Coverage Throughout Central Texas
          </h3>
          <p className="text-lg text-blue-100 mb-6 max-w-3xl mx-auto" data-testid="coverage-area-description">
            From downtown Austin to the surrounding suburbs, PoolIQ provides reliable, professional pool services throughout the greater Austin metropolitan area. Don't see your city listed? Give us a call - we may still service your area!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {["Austin", "Georgetown", "Round Rock", "Cedar Park", "Pflugerville", "Lakeway", "Leander", "Hutto", "Dripping Springs", "Bee Cave", "West Lake Hills", "Rollingwood"].map((city) => (
              <span key={city} className="bg-white/20 px-3 py-1 rounded-full" data-testid={`coverage-city-${city.toLowerCase().replace(/\s+/g, '-')}`}>
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
