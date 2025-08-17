import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Kyle H.",
      location: "Cedar Park",
      rating: 5,
      text: "PoolIQ has been maintaining our pool for over a year now. They're always on time, professional, and our pool has never looked better. Highly recommend!",
      initials: "KH"
    },
    {
      id: 2,
      name: "Kristin B.", 
      location: "Lago Vista",
      rating: 5,
      text: "After our pool turned green from the oak pollen, PoolIQ had it crystal clear within two visits. Excellent service and communication throughout the process.",
      initials: "KB"
    },
    {
      id: 3,
      name: "David S.",
      location: "Pflugerville", 
      rating: 5,
      text: "Professional, reliable, and knowledgeable. Our technician always explains what they're doing and sends detailed service reports. Worth every penny!",
      initials: "DS"
    },
    {
      id: 4,
      name: "Teresa M.",
      location: "Hutto",
      rating: 5, 
      text: "Teresa is new to servicing our pool. She is knowledgeable, has great attention to detail and is very accommodating and helpful. Any needs or concerns we've had have been addressed forthwith.",
      initials: "TM"
    },
    {
      id: 5,
      name: "Shari W.",
      location: "Austin",
      rating: 5,
      text: "Peter has been our pool tech for over 6 months now. We have a very challenging pool to upkeep and he always does a fantastic job. I really enjoy the texts he sends that explain everything.",
      initials: "SW"
    },
    {
      id: 6,
      name: "Michael R.",
      location: "Georgetown",
      rating: 5,
      text: "Outstanding service from start to finish. They fixed our pool heater quickly and at a fair price. The technician was knowledgeable and professional.",
      initials: "MR"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white" data-testid="testimonials-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4" data-testid="testimonials-title">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600" data-testid="testimonials-subtitle">
            Real reviews from satisfied Austin area pool owners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-pool-gray hover:shadow-lg transition-shadow duration-300" data-testid={`testimonial-${testimonial.id}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1" data-testid={`testimonial-stars-${testimonial.id}`}>
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="text-gray-600 font-semibold" data-testid={`testimonial-rating-${testimonial.id}`}>
                    {testimonial.rating}/5
                  </span>
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed" data-testid={`testimonial-text-${testimonial.id}`}>
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-pool-blue rounded-full flex items-center justify-center mr-3" data-testid={`testimonial-avatar-${testimonial.id}`}>
                    <span className="text-white font-semibold text-sm">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800" data-testid={`testimonial-name-${testimonial.id}`}>
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600" data-testid={`testimonial-location-${testimonial.id}`}>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-pool-blue hover:bg-pool-blue-dark text-white font-semibold px-8 py-3"
            data-testid="read-more-reviews-button"
          >
            <Star className="w-5 h-5 mr-2" />
            Read More Reviews
          </Button>
        </div>
      </div>
    </section>
  );
}
