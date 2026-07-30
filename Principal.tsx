import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Principal() {
  return (
    <section className="py-20 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-softpink/5 rounded-l-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass-card rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-10 items-center relative"
        >
          <Quote size={120} className="absolute top-6 right-10 text-primary/10 -z-10 rotate-180" />
          
          <div className="w-full md:w-2/5 shrink-0">
            <div className="relative w-64 h-64 md:w-full md:h-96 mx-auto rounded-4xl overflow-hidden shadow-xl border-4 border-white -rotate-3">
              <img 
                src="/images/principal.svg" 
                alt="Mrs. Anjana Sharma, Principal" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Principal's Message
            </h2>
            <div className="w-16 h-1 bg-sunshine rounded-full mb-6 mx-auto md:mx-0" />
            
            <p className="text-foreground/70 text-lg mb-6 leading-relaxed italic">
              "Every child brings a unique light into the world. At Little Champ, our mission is to ensure that light shines as brightly as possible. We provide a sanctuary of love, learning, and discovery, where children build the foundation for lifelong success. Welcome to our family."
            </p>
            
            <div>
              <h4 className="font-bold text-xl text-primary font-display">Mrs. Anjana Sharma</h4>
              <p className="text-foreground/60 font-medium">Principal, Little Champ</p>
              
              {/* Decorative signature line */}
              <div className="mt-4 opacity-50">
                <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto md:mx-0">
                  <path d="M10 30C15 20 25 10 35 15C45 20 50 35 60 30C70 25 75 10 85 15C95 20 100 35 110 30C120 25 135 10 145 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
