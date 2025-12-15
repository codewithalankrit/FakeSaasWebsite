import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, Shield, BarChart3, Globe, Clock, Users, Layers, Lock, Cpu, RefreshCw, Bell, Palette } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Fast", description: "Execute workflows in milliseconds with our optimized engine built for speed and reliability.", category: "Performance" },
  { icon: Shield, title: "Enterprise Security", description: "Bank-grade encryption and SOC 2 Type II compliance to keep your data safe.", category: "Security" },
  { icon: BarChart3, title: "Advanced Analytics", description: "Real-time insights and custom dashboards to track every metric that matters.", category: "Analytics" },
  { icon: Globe, title: "Global CDN", description: "Deploy worldwide with edge locations in 200+ cities for minimal latency.", category: "Performance" },
  { icon: Clock, title: "24/7 Uptime", description: "99.99% SLA guarantee with automatic failover and redundancy built-in.", category: "Reliability" },
  { icon: Users, title: "Team Collaboration", description: "Real-time editing, comments, and version control for seamless teamwork.", category: "Collaboration" },
  { icon: Layers, title: "Modular Architecture", description: "Mix and match components to build exactly what you need.", category: "Flexibility" },
  { icon: Lock, title: "Role-Based Access", description: "Granular permissions to control who sees and does what.", category: "Security" },
  { icon: Cpu, title: "AI-Powered", description: "Smart suggestions and automation powered by machine learning.", category: "AI" },
  { icon: RefreshCw, title: "Auto Sync", description: "Keep everything in sync across all your tools automatically.", category: "Integration" },
  { icon: Bell, title: "Smart Notifications", description: "Get alerted about what matters, when it matters.", category: "Productivity" },
  { icon: Palette, title: "Custom Branding", description: "White-label everything to match your brand perfectly.", category: "Customization" },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Features
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Everything you need to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                scale
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help you automate, collaborate, and grow your business without limits.
            </p>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group glass rounded-2xl p-8 hover:bg-card/80 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs text-primary font-medium uppercase tracking-wider">{feature.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
