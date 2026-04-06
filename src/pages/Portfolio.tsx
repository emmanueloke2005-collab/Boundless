import { motion } from "motion/react";
import { Play, TrendingUp, Users, Award } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Results & Case Studies
          </motion.h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            We don't just give ideas; we deliver measurable growth and engagement.
          </p>
        </div>

        {/* Case Study */}
        <div className="mb-24">
          <div className="glass-card overflow-hidden grid lg:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-accent font-bold mb-4">
                <Award size={20} />
                <span>CASE STUDY #1</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">From Zero Engagement to Viral Authority</h2>
              <p className="text-white/60 mb-8 text-lg">
                Our client was posting daily but getting less than 100 views. Within 30 days of implementing our Hook Engineering and Trend Mapping, their average views jumped to 25k+.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">250%</div>
                  <div className="text-sm text-white/40 uppercase tracking-wider">Engagement Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">12k+</div>
                  <div className="text-sm text-white/40 uppercase tracking-wider">New Followers</div>
                </div>
              </div>
            </div>
            <div className="bg-accent/10 relative min-h-[400px] flex items-center justify-center">
               <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000" 
                alt="Social Media Growth" 
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 p-8 text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                  <Play fill="black" />
                </div>
                <p className="font-bold">Watch the Breakdown</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Ideas */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <TrendingUp className="text-accent" />
              Sample Content Hooks
            </h3>
            <div className="space-y-4">
              {[
                "POV: You're losing clients because of this one mistake...",
                "3 mistakes killing your content growth in 2024",
                "How I turned 100 followers into a 6-figure business",
                "Stop posting like a robot. Do this instead.",
              ].map((hook, i) => (
                <div key={i} className="p-6 glass-card border-l-4 border-l-accent">
                  <p className="font-medium italic">"{hook}"</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Users className="text-accent" />
              AI Video Samples
            </h3>
            <div className="aspect-video glass-card flex items-center justify-center text-white/20 border-dashed border-2">
              <div className="text-center">
                <Play size={48} className="mx-auto mb-4 opacity-20" />
                <p>Cinematic AI Video Showcase Coming Soon</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="https://wa.me/2349077987547" className="text-accent text-2xl font-bold hover:underline">
            Work With Us →
          </a>
        </div>
      </div>
    </div>
  );
}
