import React from 'react';
import { motion } from 'framer-motion';

const ACTIVITIES = [
  { title: "Reading Time", image: "/images/gallery-2.jpg" },              // real
  { title: "Outdoor Play", image: "/images/activity-ai.jpg" },            // AI
  { title: "Art & Craft", image: "/images/gallery-5.jpg" },               // real
  { title: "Junior KG Class", image: "/images/program-lkg-ai.jpg" },      // AI
  { title: "Young Learners", image: "/images/gallery-8.jpg" },            // real
  { title: "Senior KG Class", image: "/images/program-ukg-ai.jpg" },      // AI
];

export default function Activities() {
  return (
    <section id="activities" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold text-lg tracking-wider uppercase mb-2">Extra-Curricular</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              School Activities
            </h3>
            <p className="text-foreground/70 text-lg">
              Beyond the classroom, we engage children in diverse activities to build physical, social, and emotional skills.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ACTIVITIES.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-[2rem] overflow-hidden aspect-[4/3] group shadow-lg cursor-pointer"
            >
              <img 
                src={activity.image} 
                alt={activity.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-display font-bold text-white text-2xl mb-1">{activity.title}</h4>
                <div className="w-12 h-1 bg-sunshine rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
