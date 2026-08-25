import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-zinc-950/60 border-y border-red-950/40 px-6 select-none relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-sans text-3xl font-black mb-12 text-center tracking-widest text-white uppercase">
          Education <span className="text-red-500">Timeline</span>
        </h2>
        
        <div className="space-y-12 relative border-l-2 border-red-900/40 ml-4 md:ml-6">
          
          {/* M.Sc. Artificial Intelligence */}
          <div className="relative pl-8 group">
            <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-[7px] top-2 ring-4 ring-black group-hover:scale-125 transition duration-300"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="font-sans text-lg font-bold text-white uppercase group-hover:text-red-400 transition duration-300">
                  M.Sc. Artificial Intelligence
                </h3>
                <p className="text-gray-400 font-medium text-sm md:text-base">
                  Brandenburg University of Technology (BTU), Germany
                </p>
              </div>
              <span className="font-mono text-xs md:text-sm text-red-500 font-bold mt-1 md:mt-0 bg-red-600/10 px-2.5 py-1 rounded border border-red-600/20">
                2024 - PRESENT
              </span>
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed mt-3">
              - Focus: Advanced Machine Learning, Data Warehouses, Neural Networks, Automated code verification.<br />
              - Track: Open to industry thesis partnerships or engineering team placements.
            </p>
          </div>

          {/* B.Tech. Computer Science */}
          <div className="relative pl-8 group mt-8">
            <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[7px] top-2 ring-4 ring-black group-hover:bg-red-500 group-hover:scale-125 transition duration-300"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="font-sans text-lg font-bold text-white uppercase group-hover:text-red-400 transition duration-300">
                  B.Tech. Computer Science
                </h3>
                <p className="text-gray-400 font-medium text-sm md:text-base">
                  Parul University, Gujarat, India
                </p>
              </div>
              <span className="font-mono text-xs md:text-sm text-zinc-500 font-bold mt-1 md:mt-0 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                2019 - 2023
              </span>
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed mt-3">
              - Foundations: Data Structures, SQL Databases, Object-Oriented Programming, System Normalization.<br />
              - Highlights: Contributed to tech workshops and database integration labs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
