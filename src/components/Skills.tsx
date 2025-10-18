// 'use client';

// import { skills, skillCategories } from '@/data/skillsData';
// import { useState } from 'react';

// export default function Skills() {
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const filteredSkills = selectedCategory === 'All' 
//     ? skills 
//     : skills.filter(skill => skill.category === selectedCategory);

//   return (
//     <section id="skills" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Skills & Technologies
//           </h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Here are the technologies and tools I work with to bring ideas to life
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {skillCategories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
//                 selectedCategory === category
//                   ? 'bg-blue-600 text-white shadow-lg'
//                   : 'bg-white text-gray-700 hover:bg-gray-100'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredSkills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="flex justify-between items-center mb-3">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   {skill.name}
//                 </h3>
//                 <span className="text-sm font-medium text-blue-600">
//                   {skill.level}%
//                 </span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-3">
//                 <div
//                   className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
//                   style={{ width: `${skill.level}%` }}
//                 ></div>
//               </div>
//               <p className="text-sm text-gray-500 mt-2">{skill.category}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { skills, skillCategories } from '@/data/skillsData';
import { useState } from 'react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All' ? skills : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">Here are the technologies and tools I work with to bring ideas to life</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 px-2 sm:px-0">
          {skillCategories.map((category) => (
            <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 ${selectedCategory === category ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-white text-gray-700 hover:bg-gray-100 active:scale-95'}`}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-between items-center mb-2 sm:mb-3">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">{skill.name}</h3>
                <span className="text-xs sm:text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 sm:h-3 rounded-full transition-all duration-500" style={{ width: `${skill.level}%` }}></div>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-1.5 sm:mt-2">{skill.category}</p>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <p className="text-base sm:text-lg text-gray-500">No skills found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}