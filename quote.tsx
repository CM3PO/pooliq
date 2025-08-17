import QuoteForm from "@/components/forms/quote-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Phone, 
  CheckCircle2, 
  Clock, 
  Shield, 
  Star,
  Calculator,
  FileText,
  Users,
  Award,
  Waves,
  Wrench,
  Hammer,
  PaintBucket,
  Search
} from "lucide-react";

export default function Quote() {
  const services = [
    {
      title: "Weekly Pool Cleaning",
      description: "Regular maintenance to keep your pool pristine",
      icon: Waves,
      startingPrice: "$120/month",
      features: ["Chemical balancing", "Skimming & vacuuming", "Filter cleaning", "Equipment inspection"]
    },
    {
      title: "Pool Repair",
      description: "Expert repairs for all pool equipment",
      icon: Wrench,
      startingPrice: "$95 service call",
      features: ["Pump & motor repair", "Filter replacement", "Heater service", "Plumbing repairs"]
    },
    {
      title: "Pool Construction",
      description: "Custom pool design and installation",
      icon: Hammer,
      startingPrice: "Free consultation",
      features: ["Custom design", "Excavation", "Installation", "Landscaping"]
    },
    {
      title: "Pool Remodeling",
      description: "Transform your existing pool",
      icon: PaintBucket,
      startingPrice: "Starting at $8,000",
      features: ["Surface refinishing", "Tile replacement", "LED lighting", "Feature additions"]
    },
    {
      title: "Leak Detection",
      description: "Advanced leak detection technology",
      icon: Search,
      startingPrice: "$275",
      features: ["Electronic detection", "Pressure testing", "Pipe location", "Repair recommendations"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for your protection"
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "Most quotes provided within 24 hours"
    },
    {
      icon: Star,
      title: "5-Star Service",
      description: "Hundreds of satisfied customers in Austin"
    },
    {
      icon: Award,
      title: "Best Value",
      description: "Competitive pricing with premium service quality"
    }
  ];

  const quoteProcess = [
    {
      step: 1,
      title: "Submit Request",
      description: "Fill out our detailed quote form with your pool service needs",
      icon: FileText
    },
    {
      step: 2,
      title: "Site Assessment",
      description: "We'll schedule a convenient time to assess your pool and discuss options",
      icon: Calculator
    },
    {
      step: 3,
      title: "Custom Quote",
      description: "Receive a detailed, personalized quote tailored to your specific requirements",
      icon: Users
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Quote Header */}
      <section className="py-20 gradient-pool text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-testid="quote-page-title">
            Get Your Free Pool Service Quote
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto" data-testid="quote-page-description">
            Professional pool services tailored to your needs. Get a detailed, no-obligation quote from Austin's most trusted pool experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-pool-accent hover:bg-pool-accent/90 text-pool-dark font-semibold px-8 py-4 text-lg"
              asChild
              data-testid="quote-phone-button"
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
              data-testid="quote-contact-button"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Form and Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Quote Information */}
            <div data-testid="quote-info-section">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8" data-testid="quote-info-title">
                Why Choose PoolIQ?
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {whyChooseUs.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300" data-testid={`why-choose-${index}`}>
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-pool-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2" data-testid={`why-choose-title-${index}`}>
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm" data-testid={`why-choose-description-${index}`}>
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Quote Process */}
              <h3 className="text-2xl font-bold text-gray-800 mb-6" data-testid="quote-process-title">
                How It Works
              </h3>
              <div className="space-y-6">
                {quoteProcess.map((process, index) => {
                  const IconComponent = process.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4" data-testid={`quote-process-${index}`}>
                      <div className="w-12 h-12 bg-pool-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-pool-dark font-bold">{process.step}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-1" data-testid={`process-title-${index}`}>
                          {process.title}
                        </h4>
                        <p className="text-gray-600" data-testid={`process-description-${index}`}>
                          {process.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Card className="bg-green-50 border-green-200 mt-8" data-testid="quote-guarantee-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">No Obligation Guarantee</h4>
                      <p className="text-gray-600">
                        Our quotes are completely free with no obligation to purchase. We believe in transparent pricing and will never pressure you into a service you don't need.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quote Form */}
            <div data-testid="quote-form-section">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Pricing Overview */}
      <section className="py-20 bg-pool-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4" data-testid="pricing-overview-title">
              Service Pricing Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="pricing-overview-description">
              Transparent pricing for all our pool services. Actual costs may vary based on pool size, condition, and specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border border-gray-200" data-testid={`pricing-service-${index}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-pool-blue rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-sm font-medium">
                        {service.startingPrice}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800" data-testid={`pricing-title-${index}`}>
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600" data-testid={`pricing-description-${index}`}>
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600" data-testid={`pricing-feature-${index}-${featureIndex}`}>
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              All prices are estimates and may vary based on pool size, condition, and specific requirements. 
              Contact us for a detailed, personalized quote.
            </p>
            <Button 
              size="lg"
              className="bg-pool-blue hover:bg-pool-blue-dark text-white font-semibold"
              asChild
              data-testid="custom-quote-button"
            >
              <a href="#quote-form">
                Get Custom Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4" data-testid="faq-title">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600" data-testid="faq-subtitle">
              Common questions about our pool services and pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does it take to get a quote?",
                answer: "Most quotes are provided within 24 hours. For urgent requests, we can often provide same-day estimates."
              },
              {
                question: "Do you offer free estimates?", 
                answer: "Yes! All our quotes and estimates are completely free with no obligation to purchase any services."
              },
              {
                question: "What information do you need for an accurate quote?",
                answer: "Pool size, current condition, type of service needed, and access information help us provide the most accurate quote."
              },
              {
                question: "Do your prices include all materials and labor?",
                answer: "Our quotes include all labor and standard materials. Any specialty parts or upgrades will be discussed beforehand."
              },
              {
                question: "Can I get a quote without an on-site visit?",
                answer: "For many services, we can provide estimates based on photos and information. Complex projects may require a site visit."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept cash, check, and all major credit cards. Payment terms will be included in your detailed quote."
              }
            ].map((faq, index) => (
              <Card key={index} className="border border-gray-200" data-testid={`faq-${index}`}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3" data-testid={`faq-question-${index}`}>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600" data-testid={`faq-answer-${index}`}>
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Have more questions? We're here to help!
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="border-pool-blue text-pool-blue hover:bg-pool-blue hover:text-white"
              asChild
              data-testid="contact-questions-button"
            >
              <Link href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-pool text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="quote-cta-title">
            Ready to Get Started?
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto" data-testid="quote-cta-description">
            Join hundreds of satisfied customers who trust PoolIQ for professional pool services throughout Austin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-pool-accent hover:bg-pool-accent/90 text-pool-dark font-semibold px-8 py-4 text-lg"
              asChild
              data-testid="quote-cta-phone-button"
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
              onClick={() => {
                document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              data-testid="quote-cta-form-button"
            >
              Request Quote Online
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
