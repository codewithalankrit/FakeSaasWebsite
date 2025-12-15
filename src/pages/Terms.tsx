import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Acceptance of Terms",
    content: "By accessing or using Flowbyte, you agree to be bound by these Terms of Service. If you do not agree, do not use our services."
  },
  {
    title: "Description of Service",
    content: "Flowbyte provides workflow automation tools and related services. We reserve the right to modify, suspend, or discontinue any aspect of the service."
  },
  {
    title: "Account Registration",
    content: "You must provide accurate information when creating an account. You are responsible for maintaining the security of your account credentials."
  },
  {
    title: "Acceptable Use",
    content: "You agree not to misuse our services, including attempting to access unauthorized areas, interfering with other users, or violating any laws."
  },
  {
    title: "Intellectual Property",
    content: "All content and materials available through Flowbyte are our property or licensed to us. You retain ownership of your data and content."
  },
  {
    title: "Payment Terms",
    content: "Paid plans are billed in advance. Refunds are provided according to our refund policy. We may change pricing with 30 days notice."
  },
  {
    title: "Limitation of Liability",
    content: "Flowbyte is provided 'as is' without warranties. We are not liable for indirect, incidental, or consequential damages."
  },
  {
    title: "Termination",
    content: "We may terminate or suspend your account for violations of these terms. You may cancel your account at any time."
  },
  {
    title: "Governing Law",
    content: "These terms are governed by the laws of the State of Delaware, without regard to conflict of law principles."
  },
];

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Legal
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Service
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Last updated: December 1, 2024
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-16 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground mb-12"
            >
              Please read these Terms of Service carefully before using Flowbyte. By using our service, you agree to these terms.
            </motion.p>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass rounded-xl p-6"
                >
                  <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                  <p className="text-muted-foreground">{section.content}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-6 glass rounded-xl"
            >
              <h2 className="text-xl font-semibold mb-3">Questions?</h2>
              <p className="text-muted-foreground">
                If you have questions about these terms, please contact us at{" "}
                <a href="mailto:legal@flowbyte.io" className="text-primary hover:underline">
                  legal@flowbyte.io
                </a>
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
