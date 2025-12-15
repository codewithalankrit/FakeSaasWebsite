import { useState, useRef } from "react";
import { LayoutDashboard, Bell, Settings, Users, LineChart, Folder } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

const ProductPreview = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.2], [80, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "analytics", label: "Analytics", icon: LineChart },
    { id: "team", label: "Team", icon: Users },
  ];

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  const dashboardContent = (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      key="dashboard"
    >
      <div className="md:col-span-2 space-y-4">
        <div className="glass rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium text-foreground">Recent Activity</h4>
            <span className="text-xs text-muted-foreground">Last 24h</span>
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i} 
                className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 5, backgroundColor: "hsl(var(--secondary))" }}
              >
                <motion.div 
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
                <div className="flex-1">
                  <p className="text-sm text-foreground">Workflow #{i} completed</p>
                  <p className="text-xs text-muted-foreground">{i * 2} hours ago</p>
                </div>
                <span className="text-xs text-primary">+{i * 12}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <motion.div 
          className="glass rounded-xl p-5"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Bell className="w-5 h-5 text-primary mb-3" />
          <p className="text-2xl font-bold text-foreground">12</p>
          <p className="text-sm text-muted-foreground">Notifications</p>
        </motion.div>
        <motion.div 
          className="glass rounded-xl p-5"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Folder className="w-5 h-5 text-accent mb-3" />
          <p className="text-2xl font-bold text-foreground">48</p>
          <p className="text-sm text-muted-foreground">Active Projects</p>
        </motion.div>
      </div>
    </motion.div>
  );

  const chartData = [
    { month: "Jan", value: 4200, revenue: 2800 },
    { month: "Feb", value: 3800, revenue: 3200 },
    { month: "Mar", value: 5100, revenue: 2900 },
    { month: "Apr", value: 4800, revenue: 3500 },
    { month: "May", value: 6200, revenue: 4100 },
    { month: "Jun", value: 5800, revenue: 3800 },
    { month: "Jul", value: 7200, revenue: 5200 },
    { month: "Aug", value: 6800, revenue: 4900 },
    { month: "Sep", value: 8100, revenue: 6100 },
    { month: "Oct", value: 7500, revenue: 5800 },
    { month: "Nov", value: 9200, revenue: 7200 },
    { month: "Dec", value: 8800, revenue: 6800 },
  ];

  const chartConfig = {
    value: {
      label: "Workflows",
      color: "hsl(var(--primary))",
    },
    revenue: {
      label: "Revenue",
      color: "hsl(var(--accent))",
    },
  };

  const analyticsContent = (
    <motion.div 
      className="glass rounded-xl p-6"
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      key="analytics"
    >
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-medium text-foreground">Performance Overview</h4>
        <div className="flex gap-2">
          {["1D", "1W", "1M"].map((period) => (
            <motion.button
              key={period}
              className="px-3 py-1 text-xs rounded-lg bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {period}
            </motion.button>
          ))}
        </div>
      </div>
      <ChartContainer config={chartConfig} className="h-[300px] w-full">
        <RechartsLineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis 
            dataKey="month" 
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            className="text-xs"
          />
          <YAxis 
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            className="text-xs"
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="var(--color-value)" 
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="var(--color-revenue)" 
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </RechartsLineChart>
      </ChartContainer>
    </motion.div>
  );

  const teamContent = (
    <motion.div 
      className="glass rounded-xl p-6"
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      key="team"
    >
      <h4 className="font-medium text-foreground mb-6">Team Members</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: "Alex Morgan", role: "Product Lead", status: "online" },
          { name: "Sam Chen", role: "Developer", status: "online" },
          { name: "Jordan Lee", role: "Designer", status: "away" },
          { name: "Taylor Swift", role: "Marketing", status: "offline" },
        ].map((member, index) => (
          <motion.div 
            key={member.name} 
            className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, x: 5 }}
          >
            <motion.div 
              className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
              whileHover={{ rotate: 10 }}
            >
              <span className="text-sm font-medium text-foreground">{member.name[0]}</span>
            </motion.div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{member.name}</p>
              <p className="text-xs text-muted-foreground">{member.role}</p>
            </div>
            <motion.div 
              className={`w-2 h-2 rounded-full ${
                member.status === "online" ? "bg-green-500" :
                member.status === "away" ? "bg-yellow-500" : "bg-muted-foreground"
              }`}
              animate={member.status === "online" ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <motion.section 
      ref={sectionRef}
      id="showcase" 
      className="py-24 relative"
      style={{ opacity }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
          style={{ y: backgroundY }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-4 md:px-6 relative z-10"
        style={{ y, scale }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-primary font-medium mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Product Preview
          </motion.p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            See it in <span className="gradient-text">action</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into the powerful interface that helps teams work smarter.
          </p>
        </motion.div>

        <motion.div 
          className="glass-strong rounded-2xl p-4 md:p-6 glow-primary"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
        >
          {/* Browser Chrome */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-3 h-3 rounded-full bg-destructive"
                whileHover={{ scale: 1.3 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-yellow-500"
                whileHover={{ scale: 1.3 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-green-500"
                whileHover={{ scale: 1.3 }}
              />
            </div>
            <motion.div 
              className="flex items-center gap-2 px-4 py-1.5 bg-secondary rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xs text-muted-foreground">app.flowbyte.io</span>
            </motion.div>
            <motion.div whileHover={{ rotate: 90 }} transition={{ duration: 0.3 }}>
              <Settings className="w-4 h-4 text-muted-foreground" />
            </motion.div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeTab === "dashboard" && dashboardContent}
              {activeTab === "analytics" && analyticsContent}
              {activeTab === "team" && teamContent}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ProductPreview;
