import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const CONTACT = [
  { icon: Phone, label: '+91 98765 43210' },
  { icon: Mail, label: 'hello@littlechamp.edu' },
  { icon: MapPin, label: 'Main Road, Your City, India' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-primary font-bold text-lg tracking-wider uppercase mb-2">Contact</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Visit Little Champ
          </h3>
          <p className="text-foreground/70 text-lg">
            Reach out for admission, teacher job applications, school visits, and general questions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {CONTACT.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-[2rem] p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
                <item.icon size={30} />
              </div>
              <p className="font-display font-bold text-lg text-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
