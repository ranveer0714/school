import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Clock } from 'lucide-react';

const EVENTS = [
  { date: '05 Aug', title: 'Storytelling Week', time: '10:00 AM' },
  { date: '18 Aug', title: 'Health Check-up Camp', time: '09:30 AM' },
  { date: '30 Aug', title: 'Parent Interaction Day', time: '11:00 AM' },
];

export default function Events() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold text-lg tracking-wider uppercase mb-2">Events</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Upcoming School Events
            </h3>
            <p className="text-foreground/70 text-lg">
              Regular celebrations and parent-school interactions keep learning lively and connected.
            </p>
          </motion.div>

          <div className="space-y-5">
            {EVENTS.map((event, index) => (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center gap-5 rounded-[2rem] border border-border bg-background p-6 shadow-sm"
              >
                <div className="w-24 h-24 rounded-3xl bg-primary text-white flex flex-col items-center justify-center shrink-0">
                  <CalendarDays size={24} />
                  <span className="font-display font-bold text-lg mt-1">{event.date}</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-display font-bold text-2xl text-foreground mb-2">{event.title}</h4>
                  <p className="flex items-center gap-2 text-foreground/60">
                    <Clock size={18} /> {event.time}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
