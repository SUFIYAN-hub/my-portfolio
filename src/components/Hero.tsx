'use client';

import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">
            Hi, my name is
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Sufiyan Tamboli
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-700 mb-6">
            Full Stack Web Developer
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            I build exceptional digital experiences with modern web technologies. 
            Specialized in React, Node.js, and creating scalable applications.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors duration-200">
              Contact Me
            </a>
            <a href="/Sufiyan Tamboli Resume.pdf" download className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="https://github.com/SUFIYAN-hub" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/sufiyan-tamboli-4064a7368/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <Linkedin size={28} />
            </a>
            <a href="mailto:sufiyanmtamboli2005@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}