import React from 'react';
import { motion } from 'framer-motion';
import { Gift, HeartHandshake } from 'lucide-react';

export default function Charity() {
  return (
    <section id="charity" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] bg-gradient-to-r from-primary to-fresh p-8 md:p-12 text-white shadow-xl overflow-hidden relative"
        >
          <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-white/10" />
          <div className="absolute -left-12 -bottom-12 w-56 h-56 rounded-full bg-sunshine/20" />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 font-bold mb-5">
                <HeartHandshake size={18} /> Community Care
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-5">
                Help Every Child Learn with Dignity
              </h2>
              <p className="text-white/85 text-lg max-w-3xl">
                Support school supplies, learning materials, and fee assistance for children who need a helping hand.
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-primary font-bold shadow-lg hover:-translate-y-1 transition-transform">
              <Gift size={22} /> Donate Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
