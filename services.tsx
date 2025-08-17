import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Waves, 
  Wrench, 
  Hammer, 
  PaintBucket, 
  Search, 
  AlertTriangle,
  CheckCircle2,
  Clock,
  Shield,
  Star,
  Phone
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "cleaning",
      title: "Pool Cleaning Service",
      description: "Comprehensive weekly pool maintenance to keep your pool sparkling clean and swim-ready all year round.",
      icon: Waves,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      features: [
        "Weekly service visits",
        "Chemical testing & balancing", 
        "Skimming & vacuuming",
        "Filter maintenance",
        "Equipment inspection",
        "Detailed service reports"
      ],
      pricing: "Starting at $120/month",
      color: "bg-pool-blue"
    },
    {
      id: "repair",
      title: "Pool Repair Service",
      description: "Expert diagnosis and repair of all pool equipment including pumps, filters, heaters, and automation systems.",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      features: [
        "Pump & motor repair",
        "Filter system service",
        "Heater troubleshooting", 
        "Automation system repair",
        "Plumbing leak repair",
        "Equipment replacement"
      ],
      pricing: "Service call $95 + parts",
      color: "bg-pool-blue"
    },
    {
      id: "construction",
      title: "Pool Construction",
      description: "Custom pool design and construction services to create your dream backyard oasis from concept to completion.",
      icon: Hammer,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      features: [
        "Custom design consultation",
        "3D pool design rendering",
        "Excavation & construction",
        "Plumbing & electrical installation",
        "Equipment installation",
        "Landscaping coordination"
      ],
      pricing: "Free consultation & quote",
      color: "bg-pool-blue"
    },
    {
      id: "remodeling", 
      title: "Pool Remodeling",
      description: "Transform your existing pool with modern upgrades, new finishes, enhanced features, and improved functionality.",
      icon: PaintBucket,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      features: [
        "Surface refinishing",
        "Tile & coping replacement",
        "LED lighting upgrades",
        "Water feature additions",
        "Equipment modernization",
        "Safety feature installation"
      ],
      pricing: "Starting at $8,000",
      color: "bg-pool-blue"
    },
    {
      id: "leak-detection",
      title: "Leak Detection Service", 
      description: "Advanced leak detection technology to quickly locate and repair leaks, preventing water loss and structural damage.",
      icon: Search,
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      features: [
        "Electronic leak detection",
        "Pressure testing", 
        "Underground pipe location",
        "Structural leak identification",
        "Repair recommendations",
        "Follow-up verification"
      ],
      pricing: "Leak detection $275",
      color: "bg-pool-blue"
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for complete peace of mind."
    },
    {
      icon: Clock,
      title: "Reliable Service", 
      description: "Consistent, on-time service you can count on every week."
    },
    {
      icon: Star,
      title: "5-Star Reviews",
      description: "Hundreds of satisfied customers throughout Austin area."
    },
    {
      icon: CheckCircle2,
      title: "Service Guarantee",
      description: "100% satisfaction guarantee on all our services."
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Services Header */}
      <section className="py-20 gradient-pool text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-testid="services-page-title">
            Professional Pool Services in Austin
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto" data-testid="services-page-description">
            From weekly maintenance to complete pool construction, PoolIQ provides comprehensive pool services throughout Central Texas with unmatched expertise and customer service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-pool-accent hover:bg-pool-accent/90 text-pool-dark font-semibold px-8 py-4 text-lg"
              asChild
              data-testid="services-phone-button"
            >
              <a href="tel:512-XXX-XXXX">
                <Phone className="w-5 h-5 mr-2" />
                Call (512) XXX-XXXX
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-pool-blue px-8 py-4 text-lg font-semibold"
              asChild
              data-testid="services-quote-button"
            >
              <Link href="/quote">
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
                  data-testid={`service-section-${service.id}`}
                >
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-sm font-medium">
                        {service.pricing}
                      </Badge>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4" data-testid={`service-title-${service.id}`}>
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed" data-testid={`service-description-${service.id}`}>
                      {service.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className="flex items-center text-gray-600"
                          data-testid={`service-feature-${service.id}-${featureIndex}`}
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        size="lg"
                        className="bg-pool-blue hover:bg-pool-blue-dark text-white font-semibold"
                        asChild
                        data-testid={`service-quote-button-${service.id}`}
                      >
                        <Link href="/quote">Get Quote</Link>
                      </Button>
                      <Button 
                        size="lg"
                        variant="outline"
                        className="border-pool-blue text-pool-blue hover:bg-pool-blue hover:text-white"
                        asChild
                        data-testid={`service-contact-button-${service.id}`}
                      >
                        <Link href="/contact">Learn More</Link>
                      </Button>
                    </div>
                  </div>

                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <img 
                      src={service.image} 
                      alt={`${service.title} - Professional pool service in Austin, TX`}
                      className="rounded-2xl shadow-lg w-full h-auto"
                      data-testid={`service-image-${service.id}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold mb-4" data-testid="emergency-service-title">
              24/7 Emergency Pool Service
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8" data-testid="emergency-service-description">
              Pool emergency? Equipment failure? Green water before a party? We provide urgent pool service when you need it most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {["Equipment Failures", "Green Water Recovery", "Leak Emergencies", "Pre-Event Cleanup"].map((service, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white" data-testid={`emergency-feature-${index}`}>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold mb-2">{service}</h3>
                  <p className="text-sm text-red-100">Same-day service available</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-red-600 hover:bg-red-50 font-bold px-8 py-4 text-lg"
              asChild
              data-testid="emergency-call-button"
            >
              <a href="tel:512-XXX-XXXX">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Call Emergency Line: (512) XXX-XXXX
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose PoolIQ */}
      <section className="py-20 bg-pool-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4" data-testid="guarantees-title">
              The PoolIQ Guarantee
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="guarantees-description">
              Experience the difference with Austin's most trusted pool service company.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => {
              const IconComponent = guarantee.icon;
              return (
                <div key={index} className="text-center group" data-testid={`guarantee-${index}`}>
                  <div className="w-16 h-16 bg-pool-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-pool">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2" data-testid={`guarantee-title-${index}`}>
                    {guarantee.title}
                  </h3>
                  <p className="text-gray-600" data-testid={`guarantee-description-${index}`}>
                    {guarantee.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
