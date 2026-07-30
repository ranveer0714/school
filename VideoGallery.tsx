import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const VIDEOS = [
  'Annual Day Highlights',
  'Classroom Learning',
  'Parent Orientation',
];

export default function VideoGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-primary font-bold text-lg tracking-wider uppercase mb-2">Videos</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              See Learning in Action
            </h3>
          </motion.div>
          <p className="text-foreground/70 text-lg max-w-xl">
            Short school highlights for parents who want to understand our environment before visiting.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {VIDEOS.map((video, index) => (
            <motion.div
              key={video}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-[2rem] bg-background shadow-lg aspect-video"
            >
              <img src={['/images/gallery-4.jpg', '/images/gallery-1.jpg', '/images/gallery-3.jpg'][index]} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                <PlayCircle size={56} className="drop-shadow-md mb-3" />
                <h4 className="font-display font-bold text-xl">{video}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
