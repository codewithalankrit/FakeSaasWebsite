import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SocialProof = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  const logos = [
    { name: "NovaLabs", letter: "N" },
    { name: "PixelForge", letter: "P" },
    { name: "Cloudwing", letter: "C" },
    { name: "Taskify", letter: "T" },
    { name: "AuroraSoft", letter: "A" },
  ];

  return (
    <motion.section 
      ref={sectionRef}
      style={{ opacity, y, scale }}
      className="py-16 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.p 
          className="text-center text-sm text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by innovative teams worldwide
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 5 }}
              >
                <span className="font-display font-bold text-foreground">{logo.letter}</span>
              </motion.div>
              <span className="font-display font-semibold text-lg">{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SocialProof;
