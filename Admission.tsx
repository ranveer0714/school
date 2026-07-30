import React from 'react';
import { motion } from 'framer-motion';

export default function Admission() {
  return (
    <section id="admission" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold text-lg tracking-wider uppercase mb-2">Admission</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Start Your Child's Learning Journey
            </h3>
            <p className="text-foreground/70 text-lg mb-8">
              Submit your details and our admission team will contact you with available classes, fees, and visit timings.
            </p>
            <ul className="space-y-4 text-foreground/70">
              {['Age-appropriate programs', 'Guided campus visit', 'Transparent fee discussion'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-fresh" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-background border border-border p-6 md:p-8 shadow-lg"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="rounded-2xl border border-input bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-primary" placeholder="Parent name" />
              <input className="rounded-2xl border border-input bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-primary" placeholder="Phone number" />
              <input className="rounded-2xl border border-input bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-primary" placeholder="Child name" />
              <select className="rounded-2xl border border-input bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-primary" defaultValue="">
                <option value="" disabled>Select program</option>
                <option>Play Group</option>
                <option>Nursery</option>
                <option>Junior KG</option>
                <option>Senior KG</option>
              </select>
            </div>
            <textarea className="mt-4 min-h-32 w-full rounded-2xl border border-input bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-primary" placeholder="Message" />
            <button type="button" className="mt-5 w-full rounded-full bg-primary px-8 py-4 text-white font-bold shadow-lg shadow-primary/25 hover:bg-primary/90">
              Submit Enquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
