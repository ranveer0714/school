import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PROGRAMS = [
  {
    title: "Play Group",
    age: "2 - 3 Years",
    desc: "A gentle introduction to learning through guided play, sensory activities, and social interaction.",
    image: "/images/program-playgroup.svg",
    color: "from-sky/20 to-transparent",
    btnColor: "bg-sky text-white hover:bg-sky/90"
  },
  {
    title: "Nursery",
    age: "2.5 - 3.5 Years",
    desc: "Focusing on motor skills, vocabulary building, and creative expression in a structured environment.",
    image: "/images/program-nursery.svg",
    color: "from-sunshine/20 to-transparent",
    btnColor: "bg-sunshine text-foreground hover:bg-sunshine/90"
  },
  {
    title: "Junior KG (LKG)",
    age: "3.5 - 4.5 Years",
    desc: "Introducing foundational literacy, numeracy, and environmental awareness through fun themes.",
    image: "/images/program-lkg.svg",
    color: "from-fresh/20 to-transparent",
    btnColor: "bg-fresh text-white hover:bg-fresh/90"
  },
  {
    title: "Senior KG (UKG)",
    age: "4.5 - 5.5 Years",
    desc: "Preparing children for primary school with advanced reading, writing, math, and logical thinking.",
    image: "/images/program-ukg.svg",
    color: "from-softpink/20 to-transparent",
    btnColor: "bg-softpink text-white hover:bg-softpink/90"
  }
];

export default function LearningPrograms() {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-primary font-bold text-lg tracking-wider uppercase mb-2">Education</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Learning Programs
            </h3>
            <p className="text-foreground/70 text-lg">
              Tailored curriculum for every stage of early childhood development.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <button className="px-6 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors">
               Download Brochure
             </button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROGRAMS.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-b ${program.color} rounded-[2rem] overflow-hidden bg-white shadow-xl border border-white group flex flex-col h-full`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-foreground shadow-sm">
                  {program.age}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="font-display font-bold text-2xl text-foreground mb-3">{program.title}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6 flex-grow">{program.desc}</p>
                
                <button className={`w-full py-3 rounded-xl font-bold flex justify-center items-center gap-2 transition-transform active:scale-95 ${program.btnColor}`}>
                  Learn More <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
