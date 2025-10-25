import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const featuredServices = services.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                India's Trusted Digital Form Network
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Access 25+ government and private form services with fast processing, expert guidance, and nationwide franchise support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
                  <Link to="/services">
                    Browse Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                  <Link to="/franchise">Become a Partner</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src={heroImage} 
                alt="Digital form services illustration" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-gradient-primary p-4 rounded-full">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Fast Processing</h3>
              <p className="text-muted-foreground">Quick turnaround time for all documentation services</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-gradient-primary p-4 rounded-full">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Secure & Trusted</h3>
              <p className="text-muted-foreground">Your documents are safe with our secure platform</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-gradient-primary p-4 rounded-full">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Expert Support</h3>
              <p className="text-muted-foreground">Dedicated team to guide you through every step</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From identity documents to business registration, we've got all your documentation needs covered
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Polity Form?</h2>
            <div className="space-y-6">
              {[
                "25+ government and private form services under one platform",
                "Experienced team with deep knowledge of documentation processes",
                "Fast processing with regular status updates",
                "Franchise opportunities across India",
                "Competitive pricing with no hidden charges",
                "Customer support available throughout the process",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Polity Form for their documentation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
              <Link to="/services">Apply for Service</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
