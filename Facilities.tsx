import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Building, BookOpen, ToyBrick, Palette, Apple, Video, HeartPulse } from 'lucide-react';

const FACILITIES = [
  { title: "Safe & Secure", desc: "24/7 guarded campus ensuring complete safety.", icon: Shield, color: "text-sky", bg: "bg-sky/10" },
  { title: "Spacious Classes", desc: "Bright, airy rooms designed for active learning.", icon: Building, color: "text-sunshine", bg: "bg-sunshine/10" },
  { title: "Library Area", desc: "A colorful corner filled with engaging picture books.", icon: BookOpen, color: "text-fresh", bg: "bg-fresh/10" },
  { title: "Play Area", desc: "Safe indoor & outdoor spaces for physical growth.", icon: ToyBrick, color: "text-softpink", bg: "bg-softpink/10" },
  { title: "Art & Craft", desc: "Creative zones to explore painting and crafting.", icon: Palette, color: "text-primary", bg: "bg-primary/10" },
  { title: "Healthy Food", desc: "Nutritious and tasty meals prepared hygienically.", icon: Apple, color: "text-accent", bg: "bg-accent/10" },
  { title: "CCTV Cameras", desc: "Continuous monitoring for parental peace of mind.", icon: Video, color: "text-sky", bg: "bg-sky/10" },
  { title: "Medical Care", desc: "On-site nurse and regular health check-ups.", icon: HeartPulse, color: "text-destructive", bg: "bg-destructive/10" },
];

export default function Facilities() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold text-lg tracking-wider uppercase mb-2">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our Premium Facilities
            </h3>
            <p className="text-foreground/70 text-lg">
              We provide world-class amenities to ensure your child learns, plays, and grows in the best possible environment.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {FACILITIES.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-[2rem] p-6 md:p-8 text-center group cursor-pointer transition-shadow hover:shadow-xl border-t border-l border-white/80 border-b-border/30 border-r-border/30"
            >
              <div className={`w-20 h-20 mx-auto rounded-full ${facility.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <facility.icon size={36} className={facility.color} />
              </div>
              <h4 className="font-display font-bold text-xl text-foreground mb-3">{facility.title}</h4>
              <p className="text-foreground/60 text-sm leading-relaxed">{facility.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
