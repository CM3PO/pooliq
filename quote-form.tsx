import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertQuoteSchema } from "@shared/schema";
import { Send, CheckCircle2 } from "lucide-react";

export default function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm({
    resolver: zodResolver(insertQuoteSchema.extend({
      agreeToTerms: insertQuoteSchema.shape.message.optional()
    })),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      serviceType: "",
      message: "",
      agreeToTerms: false
    }
  });

  const quoteMutation = useMutation({
    mutationFn: async (data: any) => {
      const { agreeToTerms, ...quoteData } = data;
      return apiRequest("POST", "/api/quote", quoteData);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      queryClient.invalidateQueries({ queryKey: ["/api/quotes"] });
      toast({
        title: "Quote Request Submitted!",
        description: "We'll respond within 24 hours with your custom quote.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    }
  });

  const serviceOptions = [
    { value: "weekly-cleaning", label: "Weekly Pool Cleaning" },
    { value: "pool-repair", label: "Pool Repair" },
    { value: "pool-construction", label: "Pool Construction" },
    { value: "pool-remodeling", label: "Pool Remodeling" },
    { value: "leak-detection", label: "Leak Detection" },
    { value: "emergency-service", label: "Emergency Service" },
    { value: "multiple-services", label: "Multiple Services" }
  ];

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl p-8 text-center shadow-lg" data-testid="quote-success">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Quote Request Received!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in PoolIQ services. We'll review your request and respond within 24 hours with a detailed quote.
        </p>
        <p className="text-sm text-gray-500">
          Need immediate assistance? Call us at{" "}
          <a href="tel:512-XXX-XXXX" className="text-pool-blue font-semibold">
            (512) XXX-XXXX
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg" data-testid="quote-form">
      <h3 className="text-2xl font-bold text-pool-blue mb-6" data-testid="quote-form-title">
        Request Your Free Quote
      </h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => quoteMutation.mutate(data))} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} data-testid="input-firstName" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} data-testid="input-lastName" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="(512) 555-0123" {...field} data-testid="input-phone" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Address</FormLabel>
                <FormControl>
                  <Input placeholder="123 Main St, Austin, TX 78701" {...field} data-testid="input-address" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Services Interested In *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger data-testid="select-serviceType">
                      <SelectValue placeholder="Select a service..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Details</FormLabel>
                <FormControl>
                  <Textarea 
                    rows={4} 
                    placeholder="Tell us more about your pool service needs..." 
                    {...field} 
                    data-testid="textarea-message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="agreeToTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    data-testid="checkbox-agreeToTerms"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm text-gray-600">
                    I agree to receive communications from PoolIQ regarding my service request. *
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-pool-blue hover:bg-pool-blue-dark text-white py-4 text-lg font-semibold disabled:opacity-50"
            disabled={quoteMutation.isPending}
            data-testid="submit-quote"
          >
            {quoteMutation.isPending ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Get Free Quote
              </>
            )}
          </Button>

          <p className="text-sm text-gray-600 text-center" data-testid="quote-disclaimer">
            * Required fields. We'll respond within 24 hours with your custom quote.
          </p>
        </form>
      </Form>
    </div>
  );
}
