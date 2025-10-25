import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = {
    general: [
      {
        question: "What is Polity Form?",
        answer: "Polity Form is India's trusted digital form network that provides access to 25+ government and private form services under one platform. We simplify the documentation process by offering expert guidance, fast processing, and nationwide support."
      },
      {
        question: "How does Polity Form work?",
        answer: "Simply browse our services, select the form you need, fill in the required details, and submit. Our team will guide you through the process, collect necessary documents, and ensure your application is processed smoothly."
      },
      {
        question: "Is my personal information safe with Polity Form?",
        answer: "Yes, absolutely. We use industry-standard encryption and security measures to protect your personal information. All documents are handled with strict confidentiality and stored securely."
      },
      {
        question: "How long does it take to process applications?",
        answer: "Processing times vary depending on the service. Most applications are processed within 7-15 days. You can check the specific processing time for each service on its respective page."
      },
    ],
    services: [
      {
        question: "What services does Polity Form offer?",
        answer: "We offer 25+ services including PAN card application, Aadhar services, voter ID, passport services, GST registration, business licenses, MSME registration, various certificates, driving license, and many more government and private documentation services."
      },
      {
        question: "Can I track my application status?",
        answer: "Yes, you can track your application status through our customer support or by logging into your account (if you're registered). We also provide regular updates via SMS and email."
      },
      {
        question: "What documents do I need for different services?",
        answer: "Required documents vary by service. When you select a service, we'll provide a complete list of required documents. Our support team is also available to help you understand the documentation requirements."
      },
      {
        question: "Do you offer urgent/tatkal services?",
        answer: "Yes, for select services like passport applications, we offer tatkal and urgent processing options at additional charges. Please contact our support team for more details."
      },
    ],
    franchise: [
      {
        question: "How can I become a Polity Form franchise partner?",
        answer: "You can apply for a franchise by filling out the application form on our Franchise page. Our team will review your application and contact you within 24 hours to discuss the next steps."
      },
      {
        question: "What is the investment required for a franchise?",
        answer: "We offer two franchise plans: Basic Plan (₹25,000) and Premium Plan (₹50,000). Both plans include comprehensive training, marketing support, and access to all services with different commission structures."
      },
      {
        question: "What kind of training and support do franchise partners receive?",
        answer: "Franchise partners receive comprehensive training on all services, documentation processes, customer handling, and business operations. We also provide ongoing support through dedicated account managers, marketing materials, and technical assistance."
      },
      {
        question: "What are the earning opportunities for franchise partners?",
        answer: "Franchise partners earn attractive commissions on every service they facilitate. The commission structure varies by service type and franchise plan. With the right effort and customer base, partners can build a sustainable and profitable business."
      },
    ],
    payment: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods including UPI, net banking, debit/credit cards, and digital wallets. Payment options are displayed during the checkout process."
      },
      {
        question: "Are there any hidden charges?",
        answer: "No, we believe in complete transparency. The price displayed for each service is the final price you pay. There are no hidden charges unless you opt for additional services like urgent processing."
      },
      {
        question: "What is your refund policy?",
        answer: "If your application is rejected due to an error on our part, we offer a full refund. However, if the rejection is due to incorrect information provided by you or government policy reasons, refunds may not be applicable. Please refer to our Terms of Service for detailed refund policy."
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Find answers to common questions about our services, franchise opportunities, and more
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-12">
              {/* General Questions */}
              <div>
                <h2 className="text-2xl font-bold mb-6">General Questions</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.general.map((faq, index) => (
                    <AccordionItem key={index} value={`general-${index}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Services</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.services.map((faq, index) => (
                    <AccordionItem key={index} value={`services-${index}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Franchise */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Franchise Opportunities</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.franchise.map((faq, index) => (
                    <AccordionItem key={index} value={`franchise-${index}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Payment */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Payment & Refunds</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.payment.map((faq, index) => (
                    <AccordionItem key={index} value={`payment-${index}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our support team is here to help you with any queries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Support
              </a>
              <a href="tel:+919876543210" className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-6 py-2 border border-input bg-background hover:bg-secondary">
                Call: +91 98765 43210
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
