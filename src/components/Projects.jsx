import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Grouped Repository Structure with Nested Sub-Projects
const repositoryGroups = [
  {
    repoName: "MODELS & MACHINE LEARNING",
    category: "Supervised & Unsupervised Models",
    description: "Core predictive regression and classification pipelines built with Scikit-Learn and XGBoost.",
    episode: "S01 REPO",
    subProjects: [
      {
        title: "California House Price Model",
        description: "XGBoost Regressor model protecting pricing patterns from collinearity across 20,640 instances.",
        tags: ["XGBoost", "Pandas", "Scikit-Learn"],
        appLink: "https://your-streamlit-app-link.streamlit.app",
        repoLink: "https://github.com/Painx9/Models"
      },
      {
        title: "PIMA Diabetes Diagnostic Pipeline",
        description: "Live Streamlit app utilizing a cached Standard Scaler and linear SVC to evaluate clinical indicator feeds.",
        tags: ["Streamlit", "SVM", "Standard Scaler"],
        appLink: "https://your-streamlit-app-link.streamlit.app",
        repoLink: "https://github.com/Painx9/Models"
      },
      {
        title: "Sonar-Array Diagnostics Engine",
        description: "Automated binary geological categorization over 60-feature raw frequency spectrum data.",
        tags: ["Scikit-Learn", "NumPy", "Logistic Regression"],
        appLink: "https://your-streamlit-app-link.streamlit.app",
        repoLink: "https://github.com/Painx9/Models"
      }
    ]
  },
  {
    repoName: "AUTONOMOUS AGENTS & AI",
    category: "Generative AI Workflows",
    description: "Advanced reasoning-and-acting loops, text-to-code pipelines, and LLM integrations.",
    episode: "S02 REPO",
    subProjects: [
      {
        title: "Python ReAct Automation Agent",
        description: "Library-free, zero-dependency implementation of the Reasoning and Acting agent loop pattern.",
        tags: ["Python", "Groq API", "Regex", "Streamlit"],
        appLink: "https://your-streamlit-app-link.streamlit.app",
        repoLink: "https://github.com/Painx9/AI-Agents"
      },
      {
        title: "AI Resume Analyzer Pro",
        description: "Multi-widget Streamlit dashboard integrating Google GenAI SDK and Pydantic schemas for ATS parsing.",
        tags: ["Google GenAI SDK", "Pydantic", "Streamlit"],
        appLink: "https://your-streamlit-app-link.streamlit.app",
        repoLink: "https://github.com/Painx9/AI-Agents"
      }
    ]
  },
  {
    repoName: "DATA ANALYTICS & NLP",
    category: "Text Processing & Pipelines",
    description: "Large-scale text corpus cleaning, tokenization, and vector transformations.",
    episode: "S03 REPO",
    subProjects: [
      {
        title: "Fake News Text Processing Pipeline",
        description: "Cleaned 72,134 news articles using NLTK and TfidfTransformer to build a Logistic Regression classifier.",
        tags: ["NLTK", "TfidfTransformer", "Python"],
        appLink: "https://your-streamlit-app-link.streamlit.app",
        repoLink: "https://github.com/Painx9/Data-Analytics"
      },
      {
        title: "AI YouTube Video Analyzer",
        description: "Standalone analytics pipeline parsing transcriptions via youtube-transcript-api for summaries.",
        tags: ["YouTube Transcript API", "JSON", "Streamlit"],
        appLink: "https://your-streamlit-app-link.streamlit.app",
        repoLink: "https://github.com/Painx9/Data-Analytics"
      }
    ]
  }
];

const Projects = () => {
  const containerRef = useRef(null);
  const folderBackRef = useRef(null);
  const folderFrontRef = useRef(null);
  const folderCardsRef = useRef([]);

  // State to track if a repository folder is opened to view its sub-projects
  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!selectedRepo) {
        // Initial Folder Stacking Animation Setup
        gsap.set([folderBackRef.current, folderFrontRef.current], { 
          xPercent: -50, 
          yPercent: -50 
        });
        gsap.set(folderFrontRef.current, { transformOrigin: "bottom center" });

        folderCardsRef.current.forEach((card) => {
          if (!card) return;
          gsap.set(card, {
            xPercent: -50,
            yPercent: -50,
            rotation: gsap.utils.random(-6, 6),
            scale: 0.85,
            x: 0,
            y: 0,
          });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%", 
            toggleActions: "play none none none"
          }
        });

        tl.to(folderFrontRef.current, {
          rotationX: -130,
          duration: 1.2,
          ease: "power3.inOut"
        })
        .to(folderCardsRef.current, {
          y: -120,
          scale: 0.9,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out(1.2)"
        }, "-=0.6")
        .to(folderCardsRef.current, {
          x: (i) => (i - 1) * 380,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "expo.out"
        }, "-=0.2");
      } else {
        // Sub-projects entrance animation when a repo folder is clicked
        gsap.fromTo(
          ".sub-project-card",
          { opacity: 0, y: 50, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [selectedRepo]);

  return (
    <section id="projects" ref={containerRef} className="bg-[#0b0b0b] min-h-[100svh] md:min-h-[170vh] relative font-sans overflow-x-clip text-white w-full flex flex-col items-center justify-center py-24 md:py-40 select-none">
      
      <div className="absolute top-10 left-0 w-full flex items-start justify-center pointer-events-none z-0">
        <h1 className="text-[14vw] sm:text-[17vw] md:text-[20vw] font-black text-white/[0.03] tracking-tighter leading-none whitespace-nowrap uppercase">
          {selectedRepo ? selectedRepo.repoName : "REPOSITORIES"}
        </h1>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] bg-red-600/15 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Breadcrumb Header if inside a Repo Folder */}
      {selectedRepo && (
        <div className="relative z-30 mb-12 flex items-center gap-4">
          <button 
            onClick={() => setSelectedRepo(null)}
            className="px-4 py-2 bg-neutral-900 border border-red-600/50 hover:bg-red-600 text-white font-mono text-xs uppercase tracking-widest rounded-lg transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(229,9,20,0.4)]"
          >
            &larr; Back to Repositories
          </button>
          <span className="text-xs font-mono text-white/50 uppercase tracking-widest">// VIEWING: {selectedRepo.repoName}</span>
        </div>
      )}

      {/* VIEW 1: Main Repositories Folders */}
      {!selectedRepo ? (
        <div className="mt-12 relative w-full max-w-7xl h-full flex items-center justify-center perspective-[2000px] z-10">
          <div className="relative w-0 h-0 transform-style-3d">
            
            <div 
              ref={folderBackRef}
              className="absolute w-[85vw] md:w-[32vw] max-w-[380px] aspect-video bg-[#141414] rounded-[24px] border border-red-600/40 shadow-[0_20px_50px_rgba(229,9,20,0.25)] flex items-center justify-center"
              style={{ zIndex: 5 }}
            >
              <div className="absolute -top-6 left-6 w-32 h-8 bg-[#1f1f1f] rounded-t-xl border-t border-red-600/30" />
              <div className="relative z-10 text-red-600 font-mono font-black text-xl tracking-widest uppercase opacity-80">
                MAIN_REPOSITORIES
              </div>
            </div>

            {repositoryGroups.map((repo, i) => (
              <div 
                key={i}
                ref={el => folderCardsRef.current[i] = el}
                onClick={() => setSelectedRepo(repo)}
                className="hidden md:block absolute w-[80vw] md:w-[33vw] max-w-[360px] aspect-[16/10] will-change-transform cursor-pointer"
                style={{ zIndex: 10 + i }}
              >
                <div className="w-full h-full rounded-[24px] overflow-hidden border border-white/15 bg-[#141414]/95 backdrop-blur-2xl shadow-[0_25px_50px_rgba(0,0,0,0.9)] transition-all duration-500 group hover:border-red-600 hover:shadow-[0_35px_80px_rgba(229,9,20,0.4)] hover:-translate-y-2 relative z-10 p-7 flex flex-col justify-between">
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-red-500 bg-red-600/10 px-2.5 py-1 rounded border border-red-600/20">
                      {repo.episode}
                    </span>
                    <span className="text-xs font-mono text-red-400 font-bold group-hover:translate-x-1 transition-transform">
                      Open Folder &rarr;
                    </span>
                  </div>

                  <div className="space-y-2 my-auto">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                      {repo.category}
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors duration-300">
                      {repo.repoName}
                    </h3>
                    <p className="text-xs text-white/70 font-light leading-relaxed line-clamp-2">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-white/50">
                    <span>{repo.subProjects.length} Projects Inside</span>
                    <span className="text-red-500 font-bold">[ CLICK TO EXPAND ]</span>
                  </div>

                  <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-red-600 group-hover:shadow-[0_0_15px_#E50914] transition-all" />
                </div>
              </div>
            ))}

            <div 
              ref={folderFrontRef}
              className="absolute w-[85vw] md:w-[32vw] max-w-[380px] aspect-video pointer-events-none will-change-transform"
              style={{ zIndex: 60 }}
            >
              <div className="absolute bottom-0 w-full h-[85%] bg-[#1c1c1c] rounded-b-[24px] rounded-t-md shadow-[0_-5px_20px_rgba(0,0,0,0.8)] flex flex-col justify-end p-6 border-t border-red-600/40">
                <div className="w-20 h-1.5 bg-white/20 rounded-full mx-auto mb-2" />
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* VIEW 2: Nested Sub-Projects Inside Selected Repository */
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedRepo.subProjects.map((project, idx) => (
            <div 
              key={idx}
              className="sub-project-card bg-[#141414]/95 border border-white/15 rounded-[24px] p-6 flex flex-col justify-between shadow-2xl hover:border-red-600 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-500 bg-red-600/10 px-2.5 py-1 rounded">
                    SUB_MODULE 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 pt-6 mt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[9px] font-mono text-white/70 bg-white/5 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase rounded text-center transition-all border border-white/15"
                  >
                    Access Code
                  </a>
                  <a 
                    href={project.appLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase rounded text-center transition-all shadow-[0_0_15px_rgba(229,9,20,0.5)]"
                  >
                    Launch App
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </section>
  );
};

export default Projects;
