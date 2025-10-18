// "use client";

// import { projects, categories } from "@/data/projectsData";
// import { useState } from "react";
// import { Github, ExternalLink } from "lucide-react";

// export default function Projects() {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredProjects =
//     selectedCategory === "All"
//       ? projects
//       : projects.filter((project) => project.category === selectedCategory);

//   return (
//     <section id="projects" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             My Projects
//           </h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Here are some of my recent projects that showcase my skills and
//             experience
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
//                 selectedCategory === category
//                   ? "bg-blue-600 text-white shadow-lg"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
//             >
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//                 />
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4">{project.description}</p>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.technologies.map((tech, index) => (
//                     <span
//                       key={index}
//                       className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-4">
//                   <a
//                     href={project.githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
//                   >
//                     <Github size={20} />
//                     <span>Code</span>
//                   </a>
//                   <a
//                     href={project.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
//                   >
//                     <ExternalLink size={20} />
//                     <span>Live Demo</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { projects, categories } from '@/data/projectsData';
import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">Here are some of my recent projects that showcase my skills and experience</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 px-2 sm:px-0">
          {categories.map((category) => (
            <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 ${selectedCategory === category ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95'}`}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-50 text-blue-600 text-xs sm:text-sm rounded-full font-medium">{tech}</span>
                  ))}
                </div>

                <div className="flex gap-3 sm:gap-4 pt-2 border-t border-gray-100">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <p className="text-base sm:text-lg text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}