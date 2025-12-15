import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const integrations = [
  { name: "Slack", category: "Communication", description: "Send notifications and updates directly to your Slack channels." },
  { name: "GitHub", category: "Development", description: "Trigger workflows on commits, PRs, and issues." },
  { name: "Stripe", category: "Payments", description: "Automate billing, subscriptions, and payment workflows." },
  { name: "Salesforce", category: "CRM", description: "Sync contacts, deals, and automate sales processes." },
  { name: "Notion", category: "Productivity", description: "Connect your docs and databases seamlessly." },
  { name: "Zapier", category: "Automation", description: "Connect with 5,000+ apps through Zapier." },
  { name: "Google Sheets", category: "Productivity", description: "Read and write data to spreadsheets automatically." },
  { name: "Airtable", category: "Database", description: "Sync your Airtable bases with workflows." },
  { name: "Twilio", category: "Communication", description: "Send SMS and make calls from your workflows." },
  { name: "AWS", category: "Cloud", description: "Integrate with S3, Lambda, and other AWS services." },
  { name: "Shopify", category: "E-commerce", description: "Automate orders, inventory, and customer notifications." },
  { name: "HubSpot", category: "Marketing", description: "Sync contacts and automate marketing workflows." },
];

const Integrations = () => {
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
              Integrations
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Connect with your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                favorite tools
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Seamlessly integrate with 100+ apps and services to supercharge your workflows.
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass rounded-xl p-6 hover:bg-card/80 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-primary">{integration.name[0]}</span>
                </div>
                <span className="text-xs text-primary font-medium uppercase tracking-wider">{integration.category}</span>
                <h3 className="text-lg font-semibold mt-1 mb-2">{integration.name}</h3>
                <p className="text-sm text-muted-foreground">{integration.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-6">Don't see what you need?</p>
            <Button variant="outline" size="lg">Request an Integration</Button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Integrations;
