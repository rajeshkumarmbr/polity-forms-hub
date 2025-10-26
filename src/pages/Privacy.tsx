import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Privacy Policy
            </h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8">1. Information We Collect</h2>
              <p className="text-foreground/80">
                We collect information you provide directly to us when you place orders, become a partner, 
                or contact us. This may include your name, email address, phone number, business details, 
                and delivery addresses.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">2. How We Use Your Information</h2>
              <p className="text-foreground/80">
                We use the information we collect to process orders, manage partnerships, communicate with you, 
                improve our services, and comply with legal obligations.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">3. Information Sharing</h2>
              <p className="text-foreground/80">
                We do not sell your personal information. We may share your information with partner farms 
                for order fulfillment, service providers who assist our operations, and when required by law.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">4. Data Security</h2>
              <p className="text-foreground/80">
                We implement appropriate security measures to protect your personal information from unauthorized 
                access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">5. Your Rights</h2>
              <p className="text-foreground/80">
                You have the right to access, correct, or delete your personal information. Contact us at 
                hello@goldenhenfarms.com to exercise these rights.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">6. Contact Us</h2>
              <p className="text-foreground/80">
                If you have questions about this Privacy Policy, please contact us at hello@goldenhenfarms.com 
                or call +91 98765 43210.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
