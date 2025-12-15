import { motion } from "framer-motion";
import { Users, Target, Sparkles, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const team = [
    { name: "Alex Chen", role: "CEO & Co-founder", avatar: "AC" },
    { name: "Sarah Miller", role: "CTO & Co-founder", avatar: "SM" },
    { name: "James Wilson", role: "Head of Design", avatar: "JW" },
    { name: "Emily Davis", role: "Head of Engineering", avatar: "ED" },
    { name: "Michael Brown", role: "Head of Marketing", avatar: "MB" },
    { name: "Lisa Park", role: "Head of Sales", avatar: "LP" },
  ];

  const values = [
    { icon: Target, title: "Mission-Driven", description: "We're on a mission to make workflow automation accessible to everyone." },
    { icon: Users, title: "Customer-Centric", description: "Every decision we make starts with our customers' needs in mind." },
    { icon: Sparkles, title: "Innovation First", description: "We push boundaries and embrace new technologies to stay ahead." },
    { icon: Award, title: "Excellence", description: "We strive for excellence in everything we build and deliver." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p 
                className="text-primary font-medium mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                About Us
              </motion.p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Building the future of <span className="gradient-text">automation</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl">
                Founded in 2023, Flowbyte is on a mission to revolutionize how teams work by making powerful automation tools accessible to everyone.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Flowbyte was born from a simple frustration: why is workflow automation so complicated? Our founders, Alex and Sarah, spent years building automation tools at enterprise companies, watching small teams struggle with overcomplicated solutions.
                  </p>
                  <p>
                    They envisioned a world where any team, regardless of technical expertise, could automate their workflows with just a few clicks. In 2023, that vision became Flowbyte.
                  </p>
                  <p>
                    Today, we serve thousands of teams worldwide, from ambitious startups to Fortune 500 companies, helping them save millions of hours through intelligent automation.
                  </p>
                </div>
              </div>
              <motion.div 
                className="glass-strong rounded-2xl p-8 glow-primary"
                whileHover={{ scale: 1.02 }}
              >
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <p className="text-4xl font-bold gradient-text">10K+</p>
                    <p className="text-muted-foreground text-sm mt-1">Active Teams</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold gradient-text">50M+</p>
                    <p className="text-muted-foreground text-sm mt-1">Tasks Automated</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold gradient-text">99.9%</p>
                    <p className="text-muted-foreground text-sm mt-1">Uptime</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold gradient-text">4.9/5</p>
                    <p className="text-muted-foreground text-sm mt-1">User Rating</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 border-y border-border/50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Flowbyte.
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="glass rounded-xl p-6 hover-lift"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The talented people behind Flowbyte's success.
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="glass rounded-xl p-6 text-center hover-lift"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 5 }}
                  >
                    <span className="text-2xl font-bold text-foreground">{member.avatar}</span>
                  </motion.div>
                  <h3 className="font-display font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
