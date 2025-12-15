import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

const services = [
  { name: "API", status: "operational", uptime: "99.99%" },
  { name: "Dashboard", status: "operational", uptime: "99.98%" },
  { name: "Workflow Engine", status: "operational", uptime: "99.99%" },
  { name: "Webhooks", status: "operational", uptime: "99.97%" },
  { name: "Integrations", status: "operational", uptime: "99.95%" },
  { name: "Authentication", status: "operational", uptime: "99.99%" },
];

const incidents = [
  { date: "December 8, 2024", title: "Scheduled Maintenance", status: "completed", description: "Database optimization completed successfully." },
  { date: "December 1, 2024", title: "API Latency", status: "resolved", description: "Increased latency resolved after scaling infrastructure." },
  { date: "November 25, 2024", title: "Webhook Delays", status: "resolved", description: "Webhook delivery delays fixed within 2 hours." },
];

const statusConfig = {
  operational: { icon: CheckCircle, color: "text-green-400", bg: "bg-green-500/10" },
  degraded: { icon: AlertCircle, color: "text-yellow-400", bg: "bg-yellow-500/10" },
  outage: { icon: AlertCircle, color: "text-red-400", bg: "bg-red-500/10" },
};

const Status = () => {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4" />
              All Systems Operational
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              System{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Status
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-time status of all Flowbyte services and infrastructure.
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 mb-12"
          >
            <h2 className="text-xl font-semibold mb-6">Current Status</h2>
            <div className="space-y-4">
              {services.map((service) => {
                const config = statusConfig[service.status as keyof typeof statusConfig];
                return (
                  <div key={service.name} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-3">
                      <config.icon className={`w-5 h-5 ${config.color}`} />
                      <span className="font-medium">{service.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">{service.uptime} uptime</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${config.bg} ${config.color} capitalize`}>
                        {service.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <h2 className="text-xl font-semibold mb-6">Recent Incidents</h2>
            <div className="space-y-6">
              {incidents.map((incident) => (
                <div key={incident.date + incident.title} className="border-l-2 border-border pl-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{incident.date}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 capitalize">
                      {incident.status}
                    </span>
                  </div>
                  <h3 className="font-medium mb-1">{incident.title}</h3>
                  <p className="text-sm text-muted-foreground">{incident.description}</p>
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

export default Status;
