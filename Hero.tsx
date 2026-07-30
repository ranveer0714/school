import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Gradient & Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky/10 via-background to-background -z-10" />
      
      {/* Floating Elements (CSS via Framer Motion) */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-40 left-10 w-16 h-16 bg-sunshine rounded-full blur-[2px] opacity-60 -z-10"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }} 
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-40 right-20 w-24 h-24 bg-softpink rounded-full blur-[2px] opacity-60 -z-10"
      />
      <motion.div 
        animate={{ x: [0, 20, 0], y: [0, 15, 0] }} 
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-12 h-12 bg-fresh rounded-full blur-[1px] opacity-40 -z-10"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm text-primary font-bold text-sm mb-6">
              <Sparkles size={16} className="text-sunshine fill-sunshine" />
              Admissions Open 2025-2026
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black leading-tight mb-6 text-foreground">
              A Happy Place to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-softpink to-sunshine">
                Learn & Grow
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-8 font-medium leading-relaxed">
              Nurturing young minds with love, care, and quality education. Give your child the best start in a safe and joyful environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/admission" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold text-lg shadow-lg shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 transition-all">
                Online Admission <ArrowRight size={20} />
              </a>
              <a href="/contact" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-fresh text-white font-bold text-lg shadow-lg shadow-fresh/30 hover:bg-fresh/90 hover:-translate-y-1 transition-all">
                <Heart size={20} className="fill-white/20" /> Teacher Job App
              </a>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Generated Image */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white rotate-[-2deg] hover:rotate-0 transition-transform duration-500 z-20">
              <img 
                src="/images/hero.svg" 
                alt="Happy kindergarten children" 
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            
            {/* Reference Image as a polaroid element */}
            <motion.div 
              initial={{ opacity: 0, y: 50, rotate: 10 }}
              animate={{ opacity: 1, y: 0, rotate: 6 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-10 -left-10 md:-bottom-16 md:-left-16 p-3 bg-white rounded-2xl shadow-xl z-30 w-48 md:w-64"
            >
              <div className="rounded-xl overflow-hidden mb-2 h-32 md:h-48 border border-border/50">
                <img 
                  src="/images/classroom.svg" 
                  alt="Reference graphic" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center font-display font-bold text-xs md:text-sm text-foreground/80">Premium Quality</p>
            </motion.div>

            {/* Decorative Badges */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 -right-8 glass-card p-4 rounded-2xl z-30 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-sunshine/20 flex items-center justify-center text-sunshine font-bold text-xl">
                A+
              </div>
              <div>
                <p className="font-bold text-sm">Top Rated</p>
                <p className="text-xs text-foreground/60">Kindergarten</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
