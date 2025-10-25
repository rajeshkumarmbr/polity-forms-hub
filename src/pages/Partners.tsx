import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle, Handshake, TrendingUp, Users, Award } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Partners = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    farmName: "",
    location: "",
    capacity: "",
    experience: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 2-3 business days.",
    });
    setFormData({
      farmName: "",
      location: "",
      capacity: "",
      experience: "",
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Become Our Partner
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join our network of 20+ successful poultry farms across India
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Partnership Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full inline-block mb-4">
                    <Handshake className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Quality Inputs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Guaranteed supply of quality chicks, feed, and medicines at competitive prices
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full inline-block mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Expert Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    24/7 veterinary consultation and farm management guidance
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full inline-block mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Market Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Guaranteed buyback of products at market-competitive rates
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full inline-block mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Regular training programs on modern poultry farming techniques
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Partner Requirements</h2>
              <div className="space-y-6">
                {[
                  "Minimum 1000 sq ft covered area for layer/broiler farming",
                  "Basic infrastructure with water and electricity access",
                  "Commitment to follow biosecurity protocols",
                  "Willingness to adopt modern farming practices",
                  "Initial investment capacity (varies by farm size)",
                  "Located in areas accessible for logistics",
                ].map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">{requirement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Success Story</h2>
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-8">
                  <p className="text-lg italic mb-6">
                    "I started with just 2000 birds three years ago. Today, my farm produces 50,000 eggs per month. GoldenHen's support in getting quality inputs, veterinary care, and market linkage has been instrumental in my success."
                  </p>
                  <div>
                    <p className="font-semibold text-lg">Suresh Kumar</p>
                    <p className="text-muted-foreground">Partner Farmer since 2021, Patna</p>
                    <p className="text-sm text-primary mt-2">Production increased by 180% in 2 years</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Partner Application Form</CardTitle>
                  <CardDescription>
                    Fill out the form below and our team will contact you within 2-3 business days
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="farmName">Farm Name *</Label>
                        <Input
                          id="farmName"
                          value={formData.farmName}
                          onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location (City/District) *</Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="capacity">Farm Capacity (Birds) *</Label>
                        <Input
                          id="capacity"
                          value={formData.capacity}
                          onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                          placeholder="e.g., 5000"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Input
                          id="experience"
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          placeholder="e.g., 2"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your farm and goals</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partners;
