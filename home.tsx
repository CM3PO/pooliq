import Hero from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import TestimonialsSection from "@/components/sections/testimonials";
import BrandsSection from "@/components/sections/brands";
import ServiceAreasSection from "@/components/sections/service-areas";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-16 lg:pt-20">
      <Hero />
      <ServicesSection />
      <TestimonialsSection />
      <BrandsSection />
      <ServiceAreasSection />
      
      {/* Call-to-Action Section */}
      <section className="py-20 gradient-pool text-white" data-testid="cta-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="cta-title">
            Ready to Experience the PoolIQ Difference?
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto" data-testid="cta-description">
            Join hundreds of satisfied customers throughout Austin who trust PoolIQ for all their pool service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-pool-accent hover:bg-pool-accent/90 text-pool-dark font-semibold px-8 py-4 text-lg"
              asChild
              data-testid="cta-phone-button"
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
              data-testid="cta-quote-button"
            >
              <Link href="/quote">
                Get Free Quote
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 p-6 bg-red-600/90 rounded-lg max-w-md mx-auto" data-testid="emergency-notice">
            <div className="flex items-center justify-center mb-3">
              <AlertTriangle className="w-6 h-6 mr-2" />
              <h3 className="text-lg font-bold">Emergency Service Available</h3>
            </div>
            <p className="text-sm text-red-100 mb-3">
              Pool equipment failure? Green water? We offer 24/7 emergency service for urgent pool issues.
            </p>
            <Button 
              variant="secondary"
              className="bg-white text-red-600 hover:bg-red-50 font-semibold"
              asChild
              data-testid="emergency-call-button"
            >
              <a href="tel:512-XXX-XXXX">Emergency Service</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          size="icon"
          className="w-16 h-16 rounded-full bg-pool-accent hover:bg-pool-accent/90 text-pool-dark shadow-lg hover:shadow-xl transition-all duration-300"
          asChild
          data-testid="floating-phone-button"
        >
          <a href="tel:512-XXX-XXXX">
            <Phone className="w-6 h-6" />
          </a>
        </Button>
      </div>
    </div>
  );
}
