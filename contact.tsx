import ContactForm from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(512) XXX-XXXX",
      href: "tel:512-XXX-XXXX",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@pooliq.com",
      href: "mailto:info@pooliq.com",
      description: "Send us an email anytime"
    },
    {
      icon: MapPin,
      title: "Service Area",
      content: "Austin, Georgetown, Round Rock & Surrounding Areas",
      href: "#service-areas",
      description: "We serve the greater Austin metro area"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 8:00 AM - 6:00 PM",
      href: "#hours",
      description: "Saturday: 9:00 AM - 4:00 PM, Sunday: Emergency Only"
    }
  ];

  const emergencyServices = [
    "Equipment failures and breakdowns",
    "Green water emergency treatment", 
    "Leak detection and urgent repairs",
    "Pre-event pool preparation",
    "Chemical balance emergencies",
    "Pump and filter failures"
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Contact Header */}
      <section className="py-20 gradient-pool text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-testid="contact-page-title">
            Contact PoolIQ
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto" data-testid="contact-page-description">
            Ready to experience professional pool service? Get in touch with Austin's most trusted pool experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-pool-accent hover:bg-pool-accent/90 text-pool-dark font-semibold px-8 py-4 text-lg"
              asChild
              data-testid="contact-phone-button"
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
              data-testid="contact-emergency-button"
            >
              <a href="tel:512-XXX-XXXX">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Emergency Service
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div data-testid="contact-info-section">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8" data-testid="contact-info-title">
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300" data-testid={`contact-info-${index}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-pool-blue rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-800 mb-1" data-testid={`contact-info-title-${index}`}>
                              {info.title}
                            </h3>
                            {info.href.startsWith('#') ? (
                              <p className="text-pool-blue font-semibold mb-2" data-testid={`contact-info-content-${index}`}>
                                {info.content}
                              </p>
                            ) : (
                              <a 
                                href={info.href} 
                                className="text-pool-blue hover:text-pool-blue-dark font-semibold mb-2 block transition-colors"
                                data-testid={`contact-info-link-${index}`}
                              >
                                {info.content}
                              </a>
                            )}
                            <p className="text-gray-600 text-sm" data-testid={`contact-info-description-${index}`}>
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Additional Business Hours */}
              <Card className="bg-pool-gray border-0" data-testid="business-hours-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-pool-blue" />
                    Detailed Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-semibold">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-semibold text-red-600">Emergency Service Only</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div data-testid="contact-form-section">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service Information */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold mb-4" data-testid="emergency-section-title">
              24/7 Emergency Pool Service
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8" data-testid="emergency-section-description">
              Pool emergencies don't wait for business hours. When you need urgent pool service, PoolIQ is here to help with same-day emergency service throughout Austin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6" data-testid="emergency-services-title">
                Emergency Services Include:
              </h3>
              <ul className="space-y-3">
                {emergencyServices.map((service, index) => (
                  <li key={index} className="flex items-center text-red-100" data-testid={`emergency-service-${index}`}>
                    <AlertTriangle className="w-5 h-5 mr-3 flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <Card className="bg-white/10 border-white/20 text-white" data-testid="emergency-contact-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Emergency Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-100 mb-6">
                  For pool emergencies requiring immediate attention, call our emergency line. We provide same-day service for urgent situations.
                </p>
                <div className="space-y-4">
                  <Button 
                    size="lg"
                    variant="secondary"
                    className="w-full bg-white text-red-600 hover:bg-red-50 font-bold text-lg"
                    asChild
                    data-testid="emergency-call-button"
                  >
                    <a href="tel:512-XXX-XXXX">
                      <Phone className="w-5 h-5 mr-2" />
                      Emergency: (512) XXX-XXXX
                    </a>
                  </Button>
                  <p className="text-sm text-red-200 text-center">
                    Emergency service rates may apply. Same-day service available for urgent pool issues.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4" data-testid="response-time-title">
              Fast Response Times
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center" data-testid="response-time-emergency">
                <div className="text-3xl font-bold text-pool-accent">1-4 hours</div>
                <div className="text-red-100">Emergency Response</div>
              </div>
              <div className="text-center" data-testid="response-time-urgent">
                <div className="text-3xl font-bold text-pool-accent">Same Day</div>
                <div className="text-red-100">Urgent Repairs</div>
              </div>
              <div className="text-center" data-testid="response-time-standard">
                <div className="text-3xl font-bold text-pool-accent">24 hours</div>
                <div className="text-red-100">Standard Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-pool-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4" data-testid="service-areas-title">
              We Serve the Greater Austin Area
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="service-areas-description">
              PoolIQ provides professional pool services throughout Central Texas. Contact us to confirm service availability in your area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Austin", "Georgetown", "Round Rock", "Cedar Park",
              "Pflugerville", "Lakeway", "Leander", "Hutto",
              "Dripping Springs", "Bee Cave", "West Lake Hills", "Rollingwood"
            ].map((city, index) => (
              <Card key={city} className="bg-white hover:shadow-lg transition-shadow duration-300" data-testid={`service-city-${index}`}>
                <CardContent className="p-4 text-center">
                  <MapPin className="w-6 h-6 text-pool-blue mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">{city}</h3>
                  <p className="text-sm text-gray-600">Full Service Available</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see your city listed? We may still service your area.
            </p>
            <Button 
              size="lg"
              className="bg-pool-blue hover:bg-pool-blue-dark text-white font-semibold"
              asChild
              data-testid="check-service-button"
            >
              <a href="tel:512-XXX-XXXX">
                <Phone className="w-5 h-5 mr-2" />
                Call to Check Service Availability
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
