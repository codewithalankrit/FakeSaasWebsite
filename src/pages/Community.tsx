import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Calendar, Award } from "lucide-react";

const stats = [
  { label: "Community Members", value: "50,000+" },
  { label: "Questions Answered", value: "120,000+" },
  { label: "Templates Shared", value: "5,000+" },
  { label: "Countries", value: "150+" },
];

const channels = [
  { icon: MessageSquare, title: "Discord Server", description: "Join real-time discussions with other Flowbyte users.", members: "25,000", action: "Join Discord" },
  { icon: Users, title: "Forum", description: "Ask questions, share ideas, and help others.", threads: "10,000+", action: "Visit Forum" },
  { icon: Calendar, title: "Events", description: "Weekly webinars, workshops, and community calls.", upcoming: 3, action: "View Events" },
  { icon: Award, title: "Champions", description: "Our most active community contributors.", champions: 50, action: "Meet Champions" },
];

const Community = () => {
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
              Community
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                movement
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with thousands of automation enthusiasts, share ideas, and grow together.
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {channels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <channel.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                <p className="text-muted-foreground mb-6">{channel.description}</p>
                <Button>{channel.action}</Button>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
