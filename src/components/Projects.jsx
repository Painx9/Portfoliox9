import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { repositoryGroups } from '../data/projectsData';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);
  
  const folderBackRef = useRef(null);
  const folderFrontRef = useRef(null);
  const folderCardsRef = useRef([]);

  const subFolderBackRef = useRef(null);
  const subFolderFrontRef = useRef(null);
  const subFolderCardsRef = useRef([]);

  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!selectedRepo) {
        gsap.set([folderBackRef.current, folderFrontRef.current], { xPercent: -50, yPercent: -50 });
        gsap.set(folderFrontRef.current, { transformOrigin: "bottom center" });

        folderCardsRef.current.forEach((card) => {
          if (!card) return;
          gsap.set(card, { xPercent: -50, yPercent: -50, rotation: gsap.utils.random(-8, 8), scale: 0.85, x: 0, y: 0 });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 40%", 
            toggleActions: "play none none none"
          }
        });

        tl.to(folderFrontRef.current, { rotationX: -130, duration: 1.2, ease: "power3.inOut" })
          .to(folderCardsRef.current, { y: -140, scale: 0.9, duration: 0.6, stagger: 0.08, ease: "back.out(1.2)" }, "-=0.6")
          .to(folderCardsRef.current, {
            x: (i) => (i - 2) * 280 + gsap.utils.random(-35, 35),
            y: (i) => (i % 2 === 0 ? -25 : 25) + gsap.utils.random(-15, 15),
            rotation: () => gsap.utils.random(-5, 5),
            scale: 0.92,
            duration: 1.2,
            stagger: 0.1,
            ease: "expo.out"
          }, "-=0.2");
      } else {
        gsap.set([subFolderBackRef.current, subFolderFrontRef.current], { xPercent: -50, yPercent: -50 });
        gsap.set(subFolderFrontRef.current, { transformOrigin: "bottom center" });

        subFolderCardsRef.current.forEach((card) => {
          if (!card) return;
          gsap.set(card, { xPercent: -50, yPercent: -50, rotation: gsap.utils.random(-8, 8), scale: 0.85, x: 0, y: 0 });
        });

        const subTl = gsap.timeline();

        subTl.to(subFolderFrontRef.current, { rotationX: -130, duration: 1.0, ease: "power3.inOut" })
          .to(subFolderCardsRef.current, { y: -120, scale: 0.9, duration: 0.5, stagger: 0.06, ease: "back.out(1.2)" }, "-=0.5")
          .to(subFolderCardsRef.current, {
            x: (i) => {
              const count = selectedRepo.subProjects.length;
              return (i - (count - 1) / 2) * 310 + gsap.utils.random(-30, 30);
            },
            y: (i) => (i % 2 === 0 ? -20 : 20) + gsap.utils.random(-15, 15),
            rotation: () => gsap.utils.random(-5, 5),
            scale: 1,
            duration: 1.0,
            stagger: 0.08,
            ease: "expo.out"
          }, "-=0.2");
      }
    }, containerRef);

    return () => ctx.revert();
  }, [selectedRepo]);

  return (
    <section id="projects" ref={containerRef} className="bg-[#0b0b0b] min-h-[100svh] md:min-h-[160vh] relative font-sans overflow-visible text-white w-full flex flex-col items-center justify-center py-24 select-none">
      
      <div className="absolute top-10 left-0 w-full flex items-start justify-center pointer-events-none z-0">
        <h1 className="text-[14vw] sm:text-[17vw] md:text-[20vw] font-black text-white/[0.03] tracking-tighter leading-none whitespace-nowrap uppercase">
          {selectedRepo ? selectedRepo.repoName : "REPOSITORIES"}
        </h1>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] bg-red-600/15 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="relative z-30 w-full max-w-7xl px-6 mb-6 flex flex-col items-center justify-center text-center gap-2">
        {selectedRepo ? (
          <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-3 w-full">
            <button 
              onClick={() => setSelectedRepo(null)}
              className="px-4 py-2 bg-neutral-900 border border-red-600/50 hover:bg-red-600 text-white font-mono text-xs uppercase tracking-widest rounded-lg transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(229,9,20,0.4)] cursor-pointer"
            >
              &larr; Back to Repositories
            </button>
            <span className="text-xs font-mono text-white/50 uppercase tracking-widest">// ACTIVE REPOSITORY: {selectedRepo.repoName}</span>
          </div>
        ) : (
          <div>
            <span className="text-xs font-mono text-red-500 uppercase tracking-widest bg-red-600/10 px-3 py-1 rounded border border-red-600/20 shadow-lg">
              // ARCHIVE DIRECTORY SYSTEM
            </span>
          </div>
        )}
      </div>

      {!selectedRepo ? (
        <div className="relative w-full max-w-7xl h-[480px] flex items-center justify-center perspective-[2000px] z-10 overflow-visible">
          <div className="relative w-0 h-0 transform-style-3d overflow-visible">
            <div ref={folderBackRef} className="absolute w-[85vw] md:w-[34vw] max-w-[400px] aspect-[4/3] bg-[#141414] rounded-[24px] border border-red-600/40 shadow-[0_20px_50px_rgba(229,9,20,0.25)] flex items-center justify-center" style={{ zIndex: 5 }}>
              <div className="absolute -top-6 left-6 w-32 h-8 bg-[#1f1f1f] rounded-t-xl border-t border-red-600/30" />
              <div className="relative z-10 text-red-600 font-mono font-black text-xl tracking-widest uppercase opacity-80">GITHUB_REPOSITORIES</div>
            </div>

            {repositoryGroups.map((repo, i) => (
              <div key={i} ref={el => folderCardsRef.current[i] = el} onClick={() => setSelectedRepo(repo)} className="hidden md:block absolute w-[80vw] md:w-[32vw] max-w-[340px] aspect-[4/4.2] will-change-transform cursor-pointer hover:!z-[999] group/card" style={{ zIndex: 10 + i }}>
                {/* Added hover:-translate-y-6 and hover:scale-105 with high priority z-index to clear neighbors fully */}
                <div className="w-full h-full rounded-[24px] overflow-hidden border border-white/15 bg-[#141414]/95 backdrop-blur-2xl shadow-[0_25px_50px_rgba(0,0,0,0.9)] transition-all duration-300 group-hover/card:border-red-600 group-hover/card:shadow-[0_50px_100px_rgba(229,9,20,0.6)] group-hover/card:scale-105 group-hover/card:-translate-y-6 relative z-10 p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-red-500 bg-red-600/10 px-2.5 py-1 rounded border border-red-600/20">{repo.episode}</span>
                    <a href={repo.repoLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-xs font-mono text-red-400 font-bold hover:underline">Access Code &rarr;</a>
                  </div>
                  <div className="space-y-2 my-auto">
                    <div className="text-[9px] font-mono uppercase tracking-widest text-white/40 truncate">{repo.category}</div>
                    <h3 className="text-xl font-black text-white tracking-tight group-hover/card:text-red-500 transition-colors duration-300 truncate">{repo.repoName}</h3>
                    <p className="text-xs text-white/70 font-light leading-relaxed line-clamp-3">{repo.description}</p>
                  </div>
                  <div className="space-y-2.5 pt-3 border-t border-white/10">
                    <div className="flex flex-wrap gap-1">
                      {repo.overallTech.slice(0, 3).map((tech, tIdx) => (
                        <span key={tIdx} className="text-[9px] font-mono text-white/70 bg-white/5 px-2 py-0.5 rounded">{tech}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-white/50">
                      <span>{repo.subProjects.length} Sub-Modules</span>
                      <span className="text-red-500 font-bold">[ OPEN FOLDER ]</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-red-600 group-hover/card:shadow-[0_0_15px_#E50914] transition-all" />
                </div>
              </div>
            ))}

            <div ref={folderFrontRef} className="absolute w-[85vw] md:w-[34vw] max-w-[400px] aspect-[4/3] pointer-events-none will-change-transform" style={{ zIndex: 60 }}>
              <div className="absolute bottom-0 w-full h-[85%] bg-[#1c1c1c] rounded-b-[24px] rounded-t-md shadow-[0_-5px_20px_rgba(0,0,0,0.8)] flex flex-col justify-end p-6 border-t border-red-600/40">
                <div className="w-20 h-1.5 bg-white/20 rounded-full mx-auto mb-2" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full max-w-7xl h-[480px] flex items-center justify-center perspective-[2000px] z-10 overflow-visible">
          <div className="relative w-0 h-0 transform-style-3d overflow-visible">
            <div ref={subFolderBackRef} className="absolute w-[85vw] md:w-[34vw] max-w-[400px] aspect-[4/3] bg-[#141414] rounded-[24px] border border-red-600/40 shadow-[0_20px_50px_rgba(229,9,20,0.25)] flex items-center justify-center" style={{ zIndex: 5 }}>
              <div className="absolute -top-6 left-6 w-32 h-8 bg-[#1f1f1f] rounded-t-xl border-t border-red-600/30" />
              <div className="relative z-10 text-red-600 font-mono font-black text-xl tracking-widest uppercase opacity-80">{selectedRepo.repoName.toUpperCase()}_MODULES</div>
            </div>

            {selectedRepo.subProjects.map((project, idx) => (
              <div key={idx} ref={el => subFolderCardsRef.current[idx] = el} className="hidden md:block absolute w-[80vw] md:w-[32vw] max-w-[340px] aspect-[4/4.2] will-change-transform hover:!z-[999] group/subcard" style={{ zIndex: 10 + idx }}>
                {/* Added hover:-translate-y-6 and hover:scale-105 with high priority z-index to clear neighbors fully */}
                <div className="w-full h-full rounded-[24px] overflow-hidden border border-white/15 bg-[#141414]/95 backdrop-blur-2xl shadow-[0_25px_50px_rgba(0,0,0,0.9)] transition-all duration-300 group-hover/subcard:border-red-600 group-hover/subcard:shadow-[0_50px_100px_rgba(229,9,20,0.6)] group-hover/subcard:scale-105 group-hover/subcard:-translate-y-6 relative z-10 p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-500 bg-red-600/10 px-2.5 py-1 rounded">MODULE 0{idx + 1}</span>
                  </div>
                  <div className="space-y-2 my-auto">
                    <h3 className="text-lg font-black text-white tracking-tight group-hover/subcard:text-red-500 transition-colors truncate">{project.title}</h3>
                    <p className="text-[11px] text-white/80 font-light leading-relaxed line-clamp-3">{project.mission}</p>
                  </div>
                  <div className="space-y-3 pt-3 border-t border-white/10">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span key={tIdx} className="text-[9px] font-mono text-white/70 bg-white/5 px-2 py-0.5 rounded">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 bg-white/10 hover:bg-white/20 text-white font-mono text-[11px] font-bold uppercase rounded text-center transition-all border border-white/15">Access Code</a>
                      <a href={project.appLink} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white font-mono text-[11px] font-bold uppercase rounded text-center transition-all shadow-[0_0_15px_rgba(229,9,20,0.5)]">Launch App</a>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-red-600 group-hover/subcard:shadow-[0_0_15px_#E50914] transition-all" />
                </div>
              </div>
            ))}

            <div ref={subFolderFrontRef} className="absolute w-[85vw] md:w-[34vw] max-w-[400px] aspect-[4/3] pointer-events-none will-change-transform" style={{ zIndex: 60 }}>
              <div className="absolute bottom-0 w-full h-[85%] bg-[#1c1c1c] rounded-b-[24px] rounded-t-md shadow-[0_-5px_20px_rgba(0,0,0,0.8)] flex flex-col justify-end p-6 border-t border-red-600/40">
                <div className="w-20 h-1.5 bg-white/20 rounded-full mx-auto mb-2" />
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
