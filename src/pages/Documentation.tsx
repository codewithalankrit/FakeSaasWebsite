import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Book, Code, Rocket, Settings, Shield, Zap } from "lucide-react";

const sections = [
  { icon: Rocket, title: "Getting Started", description: "Quick start guide to set up your first workflow in minutes.", articles: 8 },
  { icon: Book, title: "Core Concepts", description: "Understand the fundamentals of workflows, triggers, and actions.", articles: 12 },
  { icon: Code, title: "API Reference", description: "Complete API documentation with examples and SDKs.", articles: 24 },
  { icon: Settings, title: "Configuration", description: "Advanced settings, environment variables, and customization.", articles: 15 },
  { icon: Shield, title: "Security", description: "Authentication, permissions, and security best practices.", articles: 10 },
  { icon: Zap, title: "Integrations", description: "Connect with third-party services and build custom integrations.", articles: 18 },
];

const popularArticles = [
  "How to create your first workflow",
  "Understanding triggers and actions",
  "API authentication guide",
  "Setting up webhooks",
  "Error handling best practices",
  "Team permissions and roles",
];

const Documentation = () => {
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
              Documentation
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Flowbyte
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive guides, API references, and tutorials to help you get the most out of Flowbyte.
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass rounded-xl p-6 hover:bg-card/80 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{section.description}</p>
                <span className="text-xs text-primary">{section.articles} articles</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Popular Articles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {popularArticles.map((article, index) => (
                <div
                  key={article}
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <span className="text-primary font-mono text-sm">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-foreground hover:text-primary transition-colors">{article}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;
