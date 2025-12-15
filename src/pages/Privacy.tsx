import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Information We Collect",
    content: "We collect information you provide directly, including name, email, and payment information. We also collect usage data to improve our services."
  },
  {
    title: "How We Use Your Information",
    content: "We use your information to provide and improve our services, process payments, send communications, and ensure security."
  },
  {
    title: "Information Sharing",
    content: "We do not sell your personal information. We share data only with service providers who help us operate, and when required by law."
  },
  {
    title: "Data Security",
    content: "We implement industry-standard security measures including encryption, access controls, and regular security audits to protect your data."
  },
  {
    title: "Your Rights",
    content: "You have the right to access, correct, delete, or export your data. Contact us to exercise these rights."
  },
  {
    title: "Cookies and Tracking",
    content: "We use cookies for authentication, preferences, and analytics. You can manage cookie preferences in your browser settings."
  },
  {
    title: "Data Retention",
    content: "We retain your data as long as your account is active or as needed to provide services. You can request deletion at any time."
  },
  {
    title: "Changes to This Policy",
    content: "We may update this policy periodically. We will notify you of significant changes via email or in-app notification."
  },
];

const Privacy = () => {
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
              Privacy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Policy
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
              At Flowbyte, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.
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
              <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this privacy policy, please contact us at{" "}
                <a href="mailto:privacy@flowbyte.io" className="text-primary hover:underline">
                  privacy@flowbyte.io
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

export default Privacy;
