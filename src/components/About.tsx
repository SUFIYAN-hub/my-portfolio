// 'use client';

// export default function About() {
//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             About Me
//           </h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
//               <p className="text-gray-500 text-lg">Your Photo Here</p>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">
//               Hi, I am a Full Stack Developer
//             </h3>
//             <p className="text-gray-600 mb-4 leading-relaxed">
//               I am passionate about building excellent software that improves the lives of those around me. 
//               I specialize in creating software for clients ranging from individuals and small businesses to large enterprise corporations.
//             </p>
//             <p className="text-gray-600 mb-4 leading-relaxed">
//               With expertise in modern web technologies like React, Node.js, and TypeScript, I create responsive, 
//               user-friendly applications that solve real-world problems.
//             </p>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               When I am not coding, you can find me learning new technologies, contributing to open-source projects, 
//               or sharing my knowledge with the developer community.
//             </p>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <p className="text-gray-900 font-semibold mb-2">Name:</p>
//                 <p className="text-gray-600">Sufiyan Musa Tamboli</p>
//               </div>
//               <div>
//                 <p className="text-gray-900 font-semibold mb-2">Email:</p>
//                 <p className="text-gray-600">sufiyanmtamboli2005@gmail.com</p>
//               </div>
//               <div>
//                 <p className="text-gray-900 font-semibold mb-2">Location:</p>
//                 <p className="text-gray-600">Pandharpur, India</p>
//               </div>
//               <div>
//                 <p className="text-gray-900 font-semibold mb-2">Experience:</p>
//                 <p className="text-gray-600">1+ Years</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/profile.jpg" 
                alt="Sufiyan Musa Tamboli" 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hi, I am a Full Stack Developer
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I am passionate about building excellent software that improves the lives of those around me. 
              I specialize in creating software for clients ranging from individuals and small businesses to large enterprise corporations.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With expertise in modern web technologies like React, Node.js, and TypeScript, I create responsive, 
              user-friendly applications that solve real-world problems.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              When I am not coding, you can find me learning new technologies, contributing to open-source projects, 
              or sharing my knowledge with the developer community.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-900 font-semibold mb-2">Name:</p>
                <p className="text-gray-600">Sufiyan Musa Tamboli</p>
              </div>
              <div>
                <p className="text-gray-900 font-semibold mb-2">Email:</p>
                <p className="text-gray-600">sufiyanmtamboli2005@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-900 font-semibold mb-2">Location:</p>
                <p className="text-gray-600">Pandharpur, India</p>
              </div>
              <div>
                <p className="text-gray-900 font-semibold mb-2">Experience:</p>
                <p className="text-gray-600">1+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}