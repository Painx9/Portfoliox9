import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        gsap.fromTo(
          item,
          { opacity: 0, y: 50, x: -30 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.includes(el) || itemsRef.current.push(el);
    }
  };

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="py-32 bg-[#050505] border-y border-red-950/40 px-6 relative select-none overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-red-500 font-bold">ACADEMIC RECORD</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase text-center">
            EDUCATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700">TIMELINE</span>
          </h2>
        </div>
        
        {/* Timeline Container */}
        <div className="space-y-8 relative border-l-2 border-red-600/30 ml-4 md:ml-8 pl-6 md:pl-10">
          
          {/* M.Sc. Artificial Intelligence */}
          <div 
            ref={addToRefs}
            className="relative group bg-[#141414]/90 backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl hover:border-red-600/60 transition-all duration-300 hover:scale-[1.01]"
          >
            {/* Glowing Dot on Line */}
            <div className="absolute w-4 h-4 bg-red-600 rounded-full -left-[35px] md:-left-[51px] top-8 ring-4 ring-black group-hover:scale-125 group-hover:shadow-[0_0_15px_#E50914] transition-all duration-300"></div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-red-500 bg-red-600/10 px-2.5 py-1 rounded border border-red-600/20 uppercase">
                  CURRENT DEGREE
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase group-hover:text-red-500 transition-colors duration-300 mt-2">
                  M.Sc. Artificial Intelligence
                </h3>
                <p className="text-white/70 font-medium text-sm md:text-base">
                  Brandenburg University of Technology (BTU), Germany
                </p>
              </div>
              <span className="font-mono text-xs text-red-400 font-bold mt-2 md:mt-0 bg-black/60 px-3 py-1 rounded border border-white/10">
                2024 - PRESENT
              </span>
            </div>

            <div className="space-y-2 text-sm text-white/70 font-light leading-relaxed border-t border-white/10 pt-4">
              <p className="flex items-start gap-2">
                <span className="text-red-500 font-bold">›</span>
                <span><strong className="text-white font-medium">Focus:</strong> Advanced Machine Learning, Data Warehouses, Neural Networks, Automated code verification.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-red-500 font-bold">›</span>
                <span><strong className="text-white font-medium">Track:</strong> Open to industry thesis partnerships or engineering team placements.</span>
              </p>
            </div>
          </div>

          {/* B.Tech. Computer Science */}
          <div 
            ref={addToRefs}
            className="relative group bg-[#141414]/90 backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl hover:border-red-600/60 transition-all duration-300 hover:scale-[1.01]"
          >
            {/* Glowing Dot on Line */}
            <div className="absolute w-4 h-4 bg-zinc-600 rounded-full -left-[35px] md:-left-[51px] top-8 ring-4 ring-black group-hover:bg-red-600 group-hover:scale-125 group-hover:shadow-[0_0_15px_#E50914] transition-all duration-300"></div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-white/50 bg-white/5 px-2.5 py-1 rounded border border-white/10 uppercase">
                  GRADUATED
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase group-hover:text-red-500 transition-colors duration-300 mt-2">
                  B.Tech. Computer Science
                </h3>
                <p className="text-white/70 font-medium text-sm md:text-base">
                  Parul University, Gujarat, India
                </p>
              </div>
              <span className="font-mono text-xs text-white/60 font-bold mt-2 md:mt-0 bg-black/60 px-3 py-1 rounded border border-white/10">
                2019 - 2023
              </span>
            </div>

            <div className="space-y-2 text-sm text-white/70 font-light leading-relaxed border-t border-white/10 pt-4">
              <p className="flex items-start gap-2">
                <span className="text-red-500 font-bold">›</span>
                <span><strong className="text-white font-medium">Foundations:</strong> Data Structures, SQL Databases, Object-Oriented Programming, System Normalization.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-red-500 font-bold">›</span>
                <span><strong className="text-white font-medium">Highlights:</strong> Contributed to tech workshops and database integration labs.</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
