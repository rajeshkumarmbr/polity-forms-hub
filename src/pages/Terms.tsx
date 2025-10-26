import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Terms of Service
            </h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8">1. Acceptance of Terms</h2>
              <p className="text-foreground/80">
                By accessing and using GoldenHen Poultry Farms services, you accept and agree to be bound 
                by these Terms of Service and our Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">2. Products and Services</h2>
              <p className="text-foreground/80">
                We provide poultry products including eggs, chicks, broilers, and feed. Product availability, 
                specifications, and pricing are subject to change without notice.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">3. Orders and Payments</h2>
              <p className="text-foreground/80">
                All orders are subject to acceptance and availability. We reserve the right to refuse or cancel 
                any order. Payment terms will be communicated at the time of order confirmation.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">4. Delivery and Returns</h2>
              <p className="text-foreground/80">
                Delivery timelines are estimates and may vary. Due to the nature of live products, returns 
                are subject to inspection and must be reported within 24 hours of delivery.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">5. Partnership Terms</h2>
              <p className="text-foreground/80">
                Partnership applications are subject to review and approval. Partner agreements will include 
                specific terms regarding quality standards, delivery commitments, and compensation.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">6. Limitation of Liability</h2>
              <p className="text-foreground/80">
                GoldenHen Poultry Farms shall not be liable for any indirect, incidental, or consequential 
                damages arising from the use of our products or services.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">7. Contact Information</h2>
              <p className="text-foreground/80">
                For questions about these Terms of Service, contact us at hello@goldenhenfarms.com or 
                call +91 98765 43210.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
