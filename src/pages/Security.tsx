import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Server, CheckCircle, FileCheck } from "lucide-react";

const features = [
  { icon: Lock, title: "End-to-End Encryption", description: "All data is encrypted in transit and at rest using AES-256 encryption." },
  { icon: Shield, title: "SOC 2 Type II", description: "Independently audited and certified for security, availability, and confidentiality." },
  { icon: Eye, title: "Privacy First", description: "We never sell your data. Your information stays yours." },
  { icon: Server, title: "Secure Infrastructure", description: "Hosted on enterprise-grade infrastructure with 24/7 monitoring." },
  { icon: CheckCircle, title: "Regular Audits", description: "Continuous security assessments and penetration testing." },
  { icon: FileCheck, title: "GDPR Compliant", description: "Full compliance with European data protection regulations." },
];

const certifications = [
  "SOC 2 Type II",
  "GDPR",
  "CCPA",
  "ISO 27001",
  "HIPAA Ready",
];

const Security = () => {
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
              Security
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enterprise-grade{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                security
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your data is protected by industry-leading security practices and infrastructure.
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass rounded-2xl p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-8">Certifications & Compliance</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert) => (
                <div key={cert} className="px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Report a Vulnerability</h2>
            <p className="text-muted-foreground mb-4">
              We take security seriously and appreciate responsible disclosure. If you discover a security issue, please report it to us.
            </p>
            <p className="text-muted-foreground">
              Contact our security team at{" "}
              <a href="mailto:security@flowbyte.io" className="text-primary hover:underline">
                security@flowbyte.io
              </a>
            </p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Security;
