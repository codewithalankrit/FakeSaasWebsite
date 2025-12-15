import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Book, Users } from "lucide-react";

const categories = [
  { title: "Getting Started", articles: ["Creating your account", "First workflow tutorial", "Understanding the dashboard", "Inviting team members"] },
  { title: "Billing & Plans", articles: ["Upgrading your plan", "Managing subscriptions", "Payment methods", "Invoices and receipts"] },
  { title: "Troubleshooting", articles: ["Workflow not running", "Integration issues", "Performance problems", "Error messages explained"] },
  { title: "Account Settings", articles: ["Changing your email", "Two-factor authentication", "API keys management", "Deleting your account"] },
];

const contactOptions = [
  { icon: MessageCircle, title: "Live Chat", description: "Chat with our support team in real-time.", action: "Start Chat" },
  { icon: Mail, title: "Email Support", description: "Get a response within 24 hours.", action: "Send Email" },
  { icon: Book, title: "Documentation", description: "Browse our comprehensive guides.", action: "View Docs" },
  { icon: Users, title: "Community", description: "Get help from other users.", action: "Join Community" },
];

const HelpCenter = () => {
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
              Help Center
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How can we{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                help?
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers, get support, and learn how to make the most of Flowbyte.
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{option.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                <Button variant="outline" size="sm">{option.action}</Button>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Browse by Category</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.articles.map((article) => (
                    <li key={article} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      {article}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HelpCenter;
