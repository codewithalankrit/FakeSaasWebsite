import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const changelog = [
  {
    version: "2.4.0",
    date: "December 10, 2024",
    type: "feature",
    title: "AI-Powered Workflow Suggestions",
    description: "Our new AI engine analyzes your patterns and suggests optimizations to save you time.",
    items: ["Smart workflow templates", "Auto-optimization hints", "Performance predictions"],
  },
  {
    version: "2.3.2",
    date: "December 5, 2024",
    type: "improvement",
    title: "Enhanced Dashboard Performance",
    description: "50% faster load times and smoother animations across the dashboard.",
    items: ["Optimized data fetching", "Reduced bundle size", "Improved caching"],
  },
  {
    version: "2.3.1",
    date: "November 28, 2024",
    type: "fix",
    title: "Bug Fixes & Stability",
    description: "Various fixes to improve reliability and user experience.",
    items: ["Fixed webhook retry logic", "Resolved timezone issues", "Fixed export formatting"],
  },
  {
    version: "2.3.0",
    date: "November 15, 2024",
    type: "feature",
    title: "Team Collaboration 2.0",
    description: "Real-time collaboration features for seamless teamwork.",
    items: ["Live cursor presence", "Inline comments", "Version history"],
  },
  {
    version: "2.2.0",
    date: "November 1, 2024",
    type: "feature",
    title: "Advanced Analytics",
    description: "Deep insights into your workflow performance and usage.",
    items: ["Custom dashboards", "Export reports", "Trend analysis"],
  },
];

const typeStyles = {
  feature: "bg-green-500/10 text-green-400",
  improvement: "bg-blue-500/10 text-blue-400",
  fix: "bg-orange-500/10 text-orange-400",
};

const Changelog = () => {
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
              Changelog
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              What's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                new
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay up to date with the latest features, improvements, and fixes.
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-16 max-w-4xl">
          <div className="space-y-12">
            {changelog.map((entry, index) => (
              <motion.div
                key={entry.version}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-border"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-sm font-mono text-muted-foreground">v{entry.version}</span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium capitalize ${typeStyles[entry.type as keyof typeof typeStyles]}`}>
                    {entry.type}
                  </span>
                  <span className="text-sm text-muted-foreground">{entry.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{entry.title}</h3>
                <p className="text-muted-foreground mb-4">{entry.description}</p>
                <ul className="space-y-2">
                  {entry.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
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

export default Changelog;
