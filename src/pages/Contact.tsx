import React, { useState } from "react";
import { motion } from "motion/react";
import { MessageCircle, Send, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", business: "", goal: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend or email service
    alert("Thanks for reaching out! We'll get back to you soon.");
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-bold mb-8"
            >
              Get Started
            </motion.h1>
            <p className="text-xl text-white/60 mb-12">
              Ready to stop guessing and start growing? Fill out the form or reach out directly via WhatsApp.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-white/40 uppercase tracking-widest">Call / WhatsApp</div>
                  <div className="text-lg font-bold">09077987547</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-white/40 uppercase tracking-widest">Email</div>
                  <div className="text-lg font-bold">hello@boundless.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-white/40 uppercase tracking-widest">Location</div>
                  <div className="text-lg font-bold">Remote / Global</div>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 glass-card border-accent/30 bg-accent/5">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <MessageCircle className="text-accent" />
                Fast Track
              </h3>
              <p className="mb-6 text-white/70">Want an immediate response? Chat with our strategy team on WhatsApp right now.</p>
              <a href="https://wa.me/2349077987547" className="btn-primary w-full text-center">
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="glass-card p-10">
            <h2 className="text-2xl font-bold mb-8">Tell us about your project</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Your Business</label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                  placeholder="E-commerce, SaaS, Personal Brand..."
                  value={formState.business}
                  onChange={(e) => setFormState({ ...formState, business: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Your Goal</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="What are you looking to achieve?"
                  value={formState.goal}
                  onChange={(e) => setFormState({ ...formState, goal: e.target.value })}
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                Submit Request <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
