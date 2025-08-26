import { Link } from "wouter";
import { Waves, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const services = [
    { name: "Pool Cleaning", href: "/services#cleaning" },
    { name: "Pool Repair", href: "/services#repair" },
    { name: "Pool Construction", href: "/services#construction" },
    { name: "Pool Remodeling", href: "/services#remodeling" },
    { name: "Leak Detection", href: "/services#leak-detection" },
  ];

  const serviceAreas = [
    "Austin Pool Service",
    "Georgetown Pool Service", 
    "Round Rock Pool Service",
    "Cedar Park Pool Service",
    "Pflugerville Pool Service",
    "View All Areas"
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Customer Reviews", href: "/testimonials" },
    { name: "Contact Us", href: "/contact" },
    { name: "Get Quote", href: "/quote" },
    { name: "Service Guarantee", href: "/guarantee" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="bg-pool-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-pool-blue rounded-lg flex items-center justify-center">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">PoolIQ</h3>
                <p className="text-sm text-gray-400">Premier Pool Services</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Austin's most trusted pool service company providing comprehensive pool care solutions throughout Central Texas.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-pool-blue flex-shrink-0" />
                <a 
                  href="tel:409-363-1741" 
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-phone"
                >
                  (512) XXX-XXXX
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-pool-blue flex-shrink-0" />
                <a 
                  href="mailto:info@pooliq.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-email"
                >
                  info@pooliq.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-pool-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Austin, Georgetown, Round Rock & Surrounding Areas</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-pool-blue flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                  <p>Sun: Emergency Service Only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                    data-testid={`footer-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/emergency" 
                  className="text-red-400 hover:text-red-300 transition-colors"
                  data-testid="footer-emergency-service"
                >
                  Emergency Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas for SEO */}
          <div>
            <h4 className="text-lg font-bold mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {serviceAreas.map((area, index) => (
                <li key={area}>
                  <Link 
                    href={index === serviceAreas.length - 1 ? "/service-areas" : `/service-areas#${area.toLowerCase().split(' ')[0]}`}
                    className="text-gray-400 hover:text-white transition-colors"
                    data-testid={`footer-area-${area.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>&copy; 2024 PoolIQ. All rights reserved. | Licensed & Insured Pool Services in Texas</p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="social-facebook"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="social-instagram"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.99-5.366 11.99-11.99C24.007 5.367 18.641.001 12.017.001zm6.624 17.852c-.395.394-.838.662-1.321.8-.484.139-.992.209-1.527.209H8.207c-.535 0-1.043-.07-1.527-.209-.483-.138-.926-.406-1.321-.8-.394-.395-.662-.838-.8-1.321-.139-.484-.209-.992-.209-1.527V8.418c0-.535.07-1.043.209-1.527.138-.483.406-.926.8-1.321.395-.394.838-.662 1.321-.8.484-.139.992-.209 1.527-.209h7.586c.535 0 1.043.07 1.527.209.483.138.926.406 1.321.8.394.395.662.838.8 1.321.139.484.209.992.209 1.527v7.586c0 .535-.07 1.043-.209 1.527-.138.483-.406.926-.8 1.321z"/>
                </svg>
              </a>
              <a 
                href="https://google.com/search?q=PoolIQ+Austin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="social-google"
              >
                <span className="sr-only">Google</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
              <a 
                href="https://yelp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="social-yelp"
              >
                <span className="sr-only">Yelp</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.69 2.19C12.5.97 16.53 1.7 19.61 4.78c3.08 3.08 3.81 7.11 2.59 9.92-.25.58-.6 1.08-1.02 1.5-.87.87-2.02 1.38-3.24 1.44-1.47.07-2.95-.43-4.14-1.4l-.86-.7c-.26-.21-.48-.45-.66-.72-.18-.27-.32-.57-.42-.88-.1-.31-.16-.63-.18-.95-.03-.64.02-1.28.16-1.9.14-.62.36-1.21.65-1.76.58-1.1 1.39-2.03 2.35-2.73 1.92-1.4 4.36-2.02 6.72-1.72.59.08 1.16.21 1.7.41.27.1.53.21.77.34.24.13.46.28.66.44.4.32.74.7 1.01 1.13.27.43.47.91.59 1.41.12.5.17 1.02.15 1.53-.04 1.02-.35 2.01-.88 2.87-.53.86-1.25 1.58-2.09 2.1-.84.52-1.78.84-2.75.94-.97.1-1.95-.02-2.87-.35-.92-.33-1.75-.84-2.43-1.49-.68-.65-1.2-1.43-1.52-2.29-.32-.86-.44-1.78-.35-2.69.09-.91.37-1.79.81-2.58.44-.79 1.06-1.49 1.8-2.04zm4.86 5.99c-.04.28-.14.54-.3.77-.16.23-.37.42-.61.55-.24.13-.51.21-.78.23-.27.02-.55-.01-.81-.08-.26-.07-.5-.19-.71-.34-.21-.15-.39-.34-.53-.55-.14-.21-.24-.44-.29-.68-.05-.24-.06-.49-.02-.73.04-.24.12-.47.24-.68.12-.21.28-.39.47-.54.19-.15.41-.26.64-.33.23-.07.47-.1.71-.09.24.01.47.06.69.15.22.09.42.22.59.38.17.16.31.35.41.56.1.21.16.44.17.67 0 .23-.03.46-.1.68zm-1.38-.17c.02-.15-.02-.3-.1-.43-.08-.13-.2-.24-.34-.31-.14-.07-.3-.1-.46-.08-.16.02-.31.09-.43.19-.12.1-.21.23-.26.38-.05.15-.06.31-.02.46.04.15.12.29.23.4.11.11.25.19.4.22.15.03.31.02.46-.04.15-.06.28-.16.37-.28.09-.12.14-.26.15-.41z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
