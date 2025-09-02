import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get <span className="text-primary">In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in partnering, piloting, or testing our MVP? 
            Let's discuss how BuildVision AI can transform your construction quality control.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-muted-foreground">contact@buildvision.ai</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <div className="text-muted-foreground">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Location</div>
                  <div className="text-muted-foreground">San Francisco, CA</div>
                </div>
              </div>
            </div>

            {/* Partnership Types */}
            <div className="mt-12">
              <h4 className="text-xl font-semibold text-foreground mb-6">Partnership Opportunities</h4>
              <div className="space-y-4">
                <div className="p-4 bg-card border border-border rounded-lg">
                  <div className="font-semibold text-primary mb-2">🏗️ Construction Companies</div>
                  <div className="text-muted-foreground text-sm">Pilot programs for quality control automation</div>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg">
                  <div className="font-semibold text-primary mb-2">🏢 Enterprise Builders</div>
                  <div className="text-muted-foreground text-sm">Large-scale deployment and custom integration</div>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg">
                  <div className="font-semibold text-primary mb-2">🎓 Research Institutions</div>
                  <div className="text-muted-foreground text-sm">Academic partnerships and data collaboration</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input type="email" placeholder="john@company.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                  <Input placeholder="Your Construction Company" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Interest</label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                    <option>Select your interest</option>
                    <option>Pilot Program</option>
                    <option>Enterprise Partnership</option>
                    <option>Technical Demo</option>
                    <option>Research Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your construction quality control challenges and how we can help..."
                    rows={4}
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;