import React from 'react';
import { motion } from 'framer-motion';

const GALLERY_IMAGES = [
  { title: 'Creative Classroom', image: '/images/classroom.svg' },
  { title: 'Reading Corner', image: '/images/programs.svg' },
  { title: 'Playful Activities', image: '/images/activity.svg' },
  { title: 'Bright Campus', image: '/images/hero.svg' },
  { title: 'Happy Learners', image: '/images/classroom.svg' },
  { title: 'Celebration Day', image: '/images/activity.svg' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-primary font-bold text-lg tracking-wider uppercase mb-2">Gallery</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Moments from Our School
          </h3>
          <p className="text-foreground/70 text-lg">
            A glimpse into classrooms, celebrations, and everyday learning at Little Champ.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((item, index) => (
            <motion.figure
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-lg border border-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="px-5 py-4 font-display font-bold text-foreground">
                {item.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
