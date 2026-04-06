import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Target, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">
              Stop Guessing Content.<br />
              <span className="text-accent">Start Converting.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
              We generate high-converting content ideas that drive attention, engagement, and sales for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/2349077987547" className="btn-primary">
                Get Ideas Now
              </a>
              <Link to="/portfolio" className="flex items-center gap-2 text-white font-semibold hover:text-accent transition-colors">
                View Results <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full -z-10" />
      </section>

      {/* The Problem */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">The Problem</h2>
              <p className="text-xl text-white/70 mb-8">
                You post content but get no engagement. Your competitors are winning attention while you're shouting into the void.
              </p>
              <div className="p-6 glass-card border-accent/20">
                <p className="text-2xl font-bold text-accent italic">
                  "The problem isn’t consistency. It’s strategy."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Target className="text-accent" />, title: "No Engagement", desc: "Likes and comments are non-existent." },
                { icon: <TrendingUp className="text-accent" />, title: "Stagnant Growth", desc: "Follower count hasn't moved in months." },
                { icon: <Zap className="text-accent" />, title: "Wasted Time", desc: "Hours spent creating with zero ROI." },
                { icon: <MessageSquare className="text-accent" />, title: "Zero Leads", desc: "Content isn't driving business results." },
              ].map((item, i) => (
                <div key={i} className="p-6 glass-card">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The System */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">The Boundless System</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Trend Mapping", desc: "Identifying what's working now." },
              { title: "Hook Engineering", desc: "Stopping the scroll in 1 second." },
              { title: "Script Structuring", desc: "Keeping them watching until the end." },
              { title: "Conversion Layering", desc: "Turning viewers into buyers." },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-white/5 absolute -top-8 left-1/2 -translate-x-1/2 -z-10">0{i+1}</div>
                <h3 className="text-xl font-bold mb-4 text-accent">{step.title}</h3>
                <p className="text-white/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-accent/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What You Get</h2>
          <div className="space-y-6 text-left">
            {[
              "Viral-ready content ideas tailored to your niche",
              "Increased engagement and community building",
              "More leads and sales through strategic CTAs",
              "A clear roadmap for content domination",
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-4 p-6 glass-card">
                <CheckCircle2 className="text-accent shrink-0" />
                <span className="text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Ready to Grow?</h3>
            <a href="https://wa.me/2349077987547" className="btn-primary">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
