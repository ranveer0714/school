import React from 'react';
import { GraduationCap, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-10">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-2">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white">
            <GraduationCap size={24} />
            <Star size={12} className="absolute -top-1 -right-1 text-sunshine fill-sunshine" />
          </div>
          <span className="font-display font-bold text-xl">
            Little<span className="text-primary">Champ</span>
          </span>
        </a>
        <p className="text-white/70 text-sm text-center">
          (c) 2026 Little Champ Kindergarten. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
