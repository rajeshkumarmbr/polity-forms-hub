import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Polity Form
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Simplifying access to digital government forms across India
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Polity Form was founded with a simple yet powerful vision: to make government and private documentation services accessible to every Indian, regardless of their location or technical expertise.
                </p>
                <p>
                  We recognized that navigating the complex world of government forms, applications, and certifications can be overwhelming. Long queues, confusing paperwork, and endless waiting times were common challenges faced by millions of Indians every day.
                </p>
                <p>
                  Our platform brings together over 25 essential services under one digital roof, making it easier than ever to apply for PAN cards, Aadhar corrections, business licenses, and much more. With our nationwide franchise network, we ensure that quality documentation assistance is available in every corner of the country.
                </p>
                <p>
                  Today, Polity Form serves thousands of customers and partners with hundreds of franchise owners who share our mission of digital empowerment and accessible government services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-4">
                <div className="bg-gradient-primary p-4 rounded-full inline-block">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize access to government and private form services by providing a reliable, efficient, and user-friendly platform that connects citizens with essential documentation services while empowering entrepreneurs through our franchise model.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-accent p-4 rounded-full inline-block">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become India's most trusted and comprehensive digital form network, reaching every district and empowering millions of Indians to access government services with ease while creating sustainable business opportunities nationwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <div className="bg-primary/10 p-4 rounded-full inline-block">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Trust & Reliability</h3>
                <p className="text-muted-foreground">
                  We handle your documents with the highest standards of security and confidentiality
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-primary/10 p-4 rounded-full inline-block">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Customer First</h3>
                <p className="text-muted-foreground">
                  Your satisfaction and convenience are at the heart of everything we do
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-primary/10 p-4 rounded-full inline-block">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Excellence</h3>
                <p className="text-muted-foreground">
                  We continuously improve our services to deliver the best possible experience
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">25+</div>
                <div className="text-white/90">Services</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">10K+</div>
                <div className="text-white/90">Happy Customers</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">200+</div>
                <div className="text-white/90">Franchise Partners</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">50+</div>
                <div className="text-white/90">Cities Covered</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
