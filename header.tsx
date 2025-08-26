import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu, Phone, Waves } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Pool Cleaning", href: "/services#cleaning" },
    { name: "Pool Repair", href: "/services#repair" },
    { name: "Pool Construction", href: "/services#construction" },
    { name: "Pool Remodeling", href: "/services#remodeling" },
    { name: "Leak Detection", href: "/services#leak-detection" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" data-testid="logo-link">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-pool-blue rounded-lg flex items-center justify-center">
              <Waves className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-pool-blue">PoolIQ</h1>
              <p className="text-xs lg:text-sm text-gray-600 hidden sm:block">Premier Pool Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.name === "Services" ? (
                    <>
                      <NavigationMenuTrigger className="text-gray-700 hover:text-pool-blue font-medium">
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-48 p-2">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pool-blue rounded-md"
                              data-testid={`nav-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-4 py-2 font-medium transition-colors ${
                        location === item.href
                          ? "text-pool-blue"
                          : "text-gray-700 hover:text-pool-blue"
                      }`}
                      data-testid={`nav-${item.name.toLowerCase()}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="text-right">
              <p className="text-sm text-gray-600">Call Now</p>
              <a 
                href="tel:512-XXX-XXXX" 
                className="text-lg font-bold text-pool-blue hover:text-pool-blue-dark transition-colors"
                data-testid="phone-link"
              >
                (409) 363-1741
              </a>
            </div>
            <Link href="/quote">
              <Button className="bg-pool-accent hover:bg-pool-accent/90 text-pool-dark font-semibold" data-testid="button-get-quote">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="flex lg:hidden items-center space-x-2">
            <a 
              href="tel:409-363-1741"
              className="p-2 text-pool-blue"
              data-testid="mobile-phone-link"
            >
              <Phone className="w-5 h-5" />
            </a>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" data-testid="mobile-menu-trigger">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-pool-blue transition-colors"
                      onClick={() => setIsOpen(false)}
                      data-testid={`mobile-nav-${item.name.toLowerCase()}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Services</h3>
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block py-2 text-gray-600 hover:text-pool-blue transition-colors"
                        onClick={() => setIsOpen(false)}
                        data-testid={`mobile-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>

                  <div className="border-t pt-6">
                    <a 
                      href="tel:512-XXX-XXXX" 
                      className="text-xl font-bold text-pool-blue block mb-4"
                      data-testid="mobile-phone-number"
                    >
                      (512) XXX-XXXX
                    </a>
                    <Link href="/quote" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-pool-accent hover:bg-pool-accent/90 text-pool-dark font-semibold" data-testid="mobile-get-quote">
                        Get Free Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
