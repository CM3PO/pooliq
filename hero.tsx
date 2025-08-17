import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-16 lg:pt-20 gradient-pool text-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="hero-title">
              Austin's Premier Pool Service Experts
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100" data-testid="hero-description">
              From weekly maintenance to complete pool construction, PoolIQ provides comprehensive pool services throughout Austin, Georgetown, and Round Rock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-pool-accent hover:bg-pool-accent/90 text-pool-dark font-semibold px-8 py-4 text-lg"
                asChild
                data-testid="hero-phone-button"
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
                data-testid="hero-quote-button"
              >
                <Link href="/quote">
                  Free Quote
                </Link>
              </Button>
            </div>
            {/* Local Service Areas for SEO */}
            <div className="text-sm text-blue-200" data-testid="service-areas">
              <p><strong>Service Areas:</strong> Austin, Georgetown, Round Rock, Cedar Park, Pflugerville, Lakeway, Leander</p>
            </div>
          </div>
          
          <div className="relative animate-fade-in lg:animate-slide-in">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Beautiful residential swimming pool with clear blue water and modern design" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="hero-image"
            />
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-pool-dark p-6 rounded-xl shadow-lg" data-testid="stats-card">
              <div className="flex items-center space-x-2">
                <div>
                  <div className="text-3xl font-bold text-pool-blue">500+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="flex space-x-1 ml-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
