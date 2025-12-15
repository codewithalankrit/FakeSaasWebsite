import { motion } from "framer-motion";
import { MapPin, Clock, DollarSign, ArrowRight, Heart, Zap, Globe, Coffee } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const perks = [
    { icon: Heart, title: "Health & Wellness", description: "Comprehensive health, dental, and vision coverage for you and your family." },
    { icon: Zap, title: "Equity", description: "Meaningful equity packages so you share in our success." },
    { icon: Globe, title: "Remote-First", description: "Work from anywhere in the world with flexible hours." },
    { icon: Coffee, title: "Unlimited PTO", description: "Take the time you need to recharge and do your best work." },
  ];

  const jobs = [
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$150K - $200K",
      slug: "senior-frontend-engineer",
    },
    {
      title: "Backend Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$140K - $180K",
      slug: "backend-engineer",
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "$120K - $160K",
      slug: "product-designer",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$145K - $185K",
      slug: "devops-engineer",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$160K - $210K",
      slug: "product-manager",
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      salary: "$90K - $120K",
      slug: "customer-success-manager",
    },
  ];

  const departments = ["All", "Engineering", "Design", "Product", "Customer Success", "Marketing"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-20 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-20 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
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
                Join Our Team
              </motion.p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Build the future of <span className="gradient-text">work</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mb-8">
                We're looking for passionate people to join us on our mission to revolutionize workflow automation.
              </p>
              <Button variant="glow" size="lg">
                View Open Positions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Perks */}
        <section className="py-20 border-y border-border/50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Why Join Flowbyte?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer competitive benefits designed to support you both professionally and personally.
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((perk, index) => (
                <motion.div
                  key={perk.title}
                  className="glass rounded-xl p-6 text-center hover-lift"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 5 }}
                  >
                    <perk.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{perk.title}</h3>
                  <p className="text-sm text-muted-foreground">{perk.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find your next opportunity and grow with us.
              </p>
            </motion.div>

            {/* Department Filter */}
            <motion.div 
              className="flex flex-wrap justify-center gap-2 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {departments.map((dept, index) => (
                <motion.button
                  key={dept}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    index === 0 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {dept}
                </motion.button>
              ))}
            </motion.div>

            {/* Jobs List */}
            <div className="space-y-4 max-w-4xl mx-auto">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.slug}
                  className="glass rounded-xl p-6 cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.01, x: 5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-primary font-medium">{job.department}</span>
                      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3" /> {job.salary}
                        </span>
                      </div>
                    </div>
                    <motion.div whileHover={{ x: 5 }}>
                      <Button variant="glass" size="sm" className="group/btn">
                        Apply
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground mb-4">
                Don't see a role that fits? We're always looking for talented people.
              </p>
              <Button variant="glass">Send General Application</Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
