import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const featuredPost = {
    title: "The Future of Workflow Automation: 2025 Trends",
    excerpt: "Explore the emerging trends shaping how teams automate their work, from AI-powered workflows to no-code solutions.",
    date: "Dec 10, 2025",
    readTime: "8 min read",
    category: "Industry Trends",
    slug: "future-of-workflow-automation-2025",
  };

  const posts = [
    {
      title: "10 Ways to Boost Team Productivity with Flowbyte",
      excerpt: "Discover practical tips to maximize your team's efficiency using our automation platform.",
      date: "Dec 8, 2025",
      readTime: "5 min read",
      category: "Tips & Tricks",
      slug: "boost-team-productivity",
    },
    {
      title: "How NovaLabs Saved 200+ Hours Monthly with Automation",
      excerpt: "A deep dive into how one of our customers transformed their operations with Flowbyte.",
      date: "Dec 5, 2025",
      readTime: "6 min read",
      category: "Case Study",
      slug: "novalabs-case-study",
    },
    {
      title: "Building Your First Automated Workflow: A Beginner's Guide",
      excerpt: "Step-by-step tutorial for creating powerful workflows without any coding experience.",
      date: "Dec 1, 2025",
      readTime: "10 min read",
      category: "Tutorial",
      slug: "first-automated-workflow-guide",
    },
    {
      title: "Enterprise Security: How Flowbyte Keeps Your Data Safe",
      excerpt: "An overview of our security measures, certifications, and best practices.",
      date: "Nov 28, 2025",
      readTime: "7 min read",
      category: "Security",
      slug: "enterprise-security-overview",
    },
    {
      title: "Integrating Flowbyte with Your Existing Tech Stack",
      excerpt: "Learn how to connect Flowbyte with popular tools like Slack, Notion, and more.",
      date: "Nov 25, 2025",
      readTime: "6 min read",
      category: "Integrations",
      slug: "integrating-with-tech-stack",
    },
    {
      title: "Announcing Flowbyte 2.0: What's New",
      excerpt: "Explore the exciting new features in our latest major release.",
      date: "Nov 20, 2025",
      readTime: "4 min read",
      category: "Product Updates",
      slug: "flowbyte-2-announcement",
    },
  ];

  const categories = ["All", "Industry Trends", "Tips & Tricks", "Case Study", "Tutorial", "Product Updates"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Flowbyte <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Insights, tutorials, and updates from the Flowbyte team.
              </p>
            </motion.div>

            {/* Categories */}
            <motion.div 
              className="flex flex-wrap justify-center gap-2 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    index === 0 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="pb-16">
          <div className="container mx-auto px-4 md:px-6">
            <motion.article
              className="glass-strong rounded-2xl p-8 md:p-12 glow-primary cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                  {featuredPost.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {featuredPost.date}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {featuredPost.readTime}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground text-lg mb-6 max-w-3xl">
                {featuredPost.excerpt}
              </p>
              <Button variant="glow" className="group">
                Read Article 
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.article>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 border-t border-border/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  className="glass rounded-xl p-6 cursor-pointer hover-lift group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Button variant="glass" size="lg">
                Load More Articles
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
