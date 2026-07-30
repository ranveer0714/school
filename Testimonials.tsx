import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Ritika Mehta',
    role: 'Parent of Nursery Student',
    quote: 'The teachers are caring, patient, and very attentive. My child feels excited to go to school every morning.',
  },
  {
    name: 'Amit Verma',
    role: 'Parent of UKG Student',
    quote: 'We have seen wonderful growth in confidence, language, and social skills since joining Little Champ.',
  },
  {
    name: 'Sneha Iyer',
    role: 'Parent of Play Group Student',
    quote: 'The classrooms are cheerful and safe, and the communication from school is clear and reassuring.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-primary font-bold text-lg tracking-wider uppercase mb-2">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Trusted by Parents
          </h3>
          <p className="text-foreground/70 text-lg">
            Families choose Little Champ for a warm, attentive, and joyful start to education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-[2rem] p-8"
            >
              <div className="flex gap-1 text-sunshine mb-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="fill-current" />
                ))}
              </div>
              <p className="text-foreground/70 leading-relaxed mb-6">"{item.quote}"</p>
              <h4 className="font-display font-bold text-lg text-foreground">{item.name}</h4>
              <p className="text-sm text-foreground/60">{item.role}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
