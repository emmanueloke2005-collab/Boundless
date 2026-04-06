import { motion } from "motion/react";
import { Sparkles, Calendar, FileText, Rocket } from "lucide-react";

const services = [
  {
    icon: <Sparkles className="text-accent" size={32} />,
    title: "Content Idea Pack",
    desc: "30 viral content ideas tailored to your specific niche and target audience.",
    price: "Popular",
  },
  {
    icon: <Calendar className="text-accent" size={32} />,
    title: "Content Strategy Blueprint",
    desc: "A comprehensive monthly strategy including a full content calendar and posting schedule.",
    price: "Strategic",
  },
  {
    icon: <FileText className="text-accent" size={32} />,
    title: "Done-For-You Scripts",
    desc: "High-converting hooks, engaging scripts, and proven CTA frameworks for your videos.",
    price: "Ready-to-use",
  },
  {
    icon: <Rocket className="text-accent" size={32} />,
    title: "Content Domination System",
    desc: "Weekly ideas, trend alerts, and 1-on-1 strategy calls to ensure you stay ahead.",
    price: "Premium",
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Choose the level of support you need to dominate your niche and turn your content into a sales machine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass-card hover:border-accent/40 transition-all group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">
                {service.price}
              </div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-white/60 leading-relaxed mb-8">
                {service.desc}
              </p>
              <a
                href="https://wa.me/2349077987547"
                className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More <Rocket size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="https://wa.me/2349077987547" className="btn-primary">
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  );
}
