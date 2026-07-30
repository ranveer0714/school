import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserCheck, Award, Home as HomeIcon } from 'lucide-react';

const STATS = [
  { value: "500+", label: "Students", icon: Users, color: "text-sky", bg: "bg-sky/10" },
  { value: "50+", label: "Teachers", icon: UserCheck, color: "text-fresh", bg: "bg-fresh/10" },
  { value: "15+", label: "Years of Excellence", icon: Award, color: "text-sunshine", bg: "bg-sunshine/10" },
  { value: "20+", label: "Classrooms", icon: HomeIcon, color: "text-softpink", bg: "bg-softpink/10" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold text-lg mb-2 tracking-wider uppercase">Welcome to Little Champ</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Nurturing young minds with love and care.
            </h3>
            <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
              At Little Champ Kindergarten, we believe that every child is unique and deserves a supportive environment to explore, learn, and grow. Our curriculum is designed to foster creativity, critical thinking, and social skills from an early age.
            </p>
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
              With a perfect blend of play-based learning and structured activities, we ensure your child is prepared for the bright future ahead, stepping into primary school with confidence and joy.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                    <stat.icon size={28} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-2xl text-foreground">{stat.value}</h4>
                    <p className="text-foreground/60 text-sm font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-square md:aspect-auto md:h-[600px]">
              <img 
                src="/images/classroom.svg" 
                alt="Warm cozy classroom interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-3xl z-10 max-w-xs shadow-xl border border-white">
              <div className="flex gap-2 mb-2">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5 text-sunshine fill-sunshine" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-bold text-foreground text-sm italic">"The best kindergarten in the city! My kids love going to school."</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
