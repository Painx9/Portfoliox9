import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * =====================================================================
 * NESTED REPOSITORY GROUPS & SUB-PROJECTS CONFIGURATION:
 * =====================================================================
 * This structure maps your actual GitHub repositories and their sub-folders:
 * 1. Models (house-price-prediction, react-ai-agent, diabetes-prediction-ml, fake-news-prediction, sonar-vs-rock)
 * 2. Gen_AI (gemini-3.5_chat_bot)
 * 3. LLM_Applications (ai-video-analyzer, resume-analyzer, weather-forecast)
 * 4. Portfoliox9 (React Portfolio Website)
 * 5. Deep.github.io (GitHub API & Deployed Static Web Build)
 * =====================================================================
 */
const repositoryGroups = [
  {
    repoName: "Models",
    category: "Supervised & Unsupervised Machine Learning",
    description: "Contains core predictive models, price regression pipelines, ReAct agents, and diagnostic algorithms.",
    episode: "S01 REPO",
    subProjects: [
      {
        title: "House Price Prediction",
        description: "An end-to-end data science project utilizing the California Housing dataset to train an XGBoost regression model.",
        tags: ["Python", "XGBoost", "Scikit-Learn", "Pandas"],
        appLink: "https://house-price-prediction09.streamlit.app",
        repoLink: "https://github.com/Painx9/Models/tree/main/House-price-prediction"
      },
      {
        title: "ReAct AI Agent",
        description: "Implements an active Think --> Act --> Observe loop that matches LLM outputs to native Python tools.",
        tags: ["Python 3", "Groq API", "Streamlit", "Regex"],
        appLink: "https://react-ai-agent09.streamlit.app",
        repoLink: "https://github.com/Painx9/Models/tree/main/ReAct-AI-Agent"
      },
      {
        title: "Diabetes Prediction ML",
        description: "Standardizes 8 core patient physiological metrics to train a linear Support Vector Classifier.",
        tags: ["Python", "StandardScaler", "SVM", "Streamlit"],
        appLink: "https://diabetes-prediction09.streamlit.app",
        repoLink: "https://github.com/Painx9/Models/tree/main/diabetes-prediction-ml"
      },
      {
        title: "Fake News Prediction",
        description: "Cleaned raw news text using stemming and TF-IDF vectorization to train a classifier with over 90% accuracy.",
        tags: ["Python", "PorterStemmer", "Scikit-Learn", "SVM"],
        appLink: "https://fake-news-prediction09.streamlit.app",
        repoLink: "https://github.com/Painx9/Models/tree/main/fake-news-prediction"
      },
      {
        title: "Sonar vs Rock",
        description: "Interactive machine learning dashboard powered by a Logistic Regression model classifying sonar return signals.",
        tags: ["Python", "NumPy", "Scikit-Learn", "Streamlit"],
        appLink: "https://sonar-vs-rock09.streamlit.app",
        repoLink: "https://github.com/Painx9/Models/tree/main/sonar-vs-rock"
      }
    ]
  },
  {
    repoName: "Gen_AI",
    category: "Generative AI & Chat Architectures",
    description: "Repository focused on conversational AI interfaces and core generative frameworks.",
    episode: "S02 REPO",
    subProjects: [
      {
        title: "Gemini 3.5 Chat Bot",
        description: "An interactive chatbot application maintaining multi-turn session history with secure configuration handling.",
        tags: ["Python", "Streamlit", "Google GenAI SDK"],
        appLink: "https://chat-bot09.streamlit.app",
        repoLink: "https://github.com/Painx9/Gen_AI/tree/main/Gemini-3.5_Chat_Bot"
      }
    ]
  },
  {
    repoName: "LLM_Applications",
    category: "LLM Workflows & Multimodal Pipelines",
    description: "Production-ready language model utilities including video transcription analysis and resume optimization.",
    episode: "S03 REPO",
    subProjects: [
      {
        title: "AI Video Analyzer",
        description: "Streamlit dashboard that leverages the gemini-3.1-flash-lite model to automatically summarize and analyze YouTube videos.",
        tags: ["Streamlit", "Google GenAI SDK", "Gemini 3.1 Flash Lite", "Python"],
        appLink: "https://ai-youtube-video-analyzer09.streamlit.app",
        repoLink: "https://github.com/Painx9/LLM_Applications/tree/main/ai-video-analyzer"
      },
      {
        title: "Resume Analyzer",
        description: "Production-ready AI application that extracts raw text from PDF resumes and processes it through a strict schema-enforced LLM pipeline.",
        tags: ["Python", "Streamlit", "Pydantic", "PyPDF2"],
        appLink: "https://resume-analyzer09.streamlit.app",
        repoLink: "https://github.com/Painx9/LLM_Applications/tree/main/resume-analyzer"
      },
      {
        title: "Weather Forecast",
        description: "A lightweight, modular dashboard that fetches real-time weather metrics for any city globally via OpenWeatherMap API.",
        tags: ["Python", "Streamlit", "OpenWeatherMap API", "Pandas"],
        appLink: "https://ai-weather-forecast09.streamlit.app",
        repoLink: "https://github.com/Painx9/LLM_Applications/tree/main/weather-forecast"
      }
    ]
  },
  {
    repoName: "Portfoliox9",
    category: "Frontend Web Development",
    description: "Source code repository for your active personal developer portfolio web application.",
    episode: "S04 REPO",
    subProjects: [
      {
        title: "Netflix Developer Series Portfolio",
        description: "Immersive cinematic portfolio featuring GSAP 3D animations, custom web cursors, and repository folder nesting.",
        tags: ["React", "Vite", "Tailwind CSS", "GSAP"],
        appLink: "https://painx9.github.io/Deep.github.io/",
        repoLink: "https://github.com/Painx9/Portfoliox9"
      }
    ]
  },
  {
    repoName: "Deep.github.io",
    category: "Static Web Hosting & Deployment",
    description: "Live production repository hosting your statically built web application via GitHub Pages.",
    episode: "S05 REPO",
    subProjects: [
      {
        title: "GitHub Pages Production Build",
        description: "Live-hosted deployment repository syncing built web assets for public access globally.",
        tags: ["HTML5", "CSS3", "JavaScript", "GitHub Actions"],
        appLink: "https://painx9.github.io/Deep.github.io/",
        repoLink: "https://github.com/Painx9/Deep.github.io"
      }
    ]
  }
];

const Projects = () => {
  const containerRef = useRef(null);
  
  // Refs for Main Repositories View Animation
  const folderBackRef = useRef(null);
  const folderFrontRef = useRef(null);
  const folderCardsRef = useRef([]);

  // Refs for Sub-Projects View Animation
  const subFolderBackRef = useRef(null);
  const subFolderFrontRef = useRef(null);
  const subFolderCardsRef = useRef([]);

  // Tracks which repository folder has been clicked/opened
  const [selectedRepo, setSelectedRepo] = useState(null);

  // GSAP 3D Folder Opening and Stacking Animation Setup for both views
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!selectedRepo) {
        // VIEW 1 ANIMATION: Main Repository Folders
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
            start: "top 40%", 
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
          x: (i) => (i - 2) * 290,
          y: 0,
          rotation: 0,
          scale: 0.92,
          duration: 1.2,
          stagger: 0.1,
          ease: "expo.out"
        }, "-=0.2");
      } else {
        // VIEW 2 ANIMATION: Sub-Projects Nested Folder Stack Opening
        gsap.set([subFolderBackRef.current, subFolderFrontRef.current], { 
          xPercent: -50, 
          yPercent: -50 
        });
        gsap.set(subFolderFrontRef.current, { transformOrigin: "bottom center" });

        subFolderCardsRef.current.forEach((card) => {
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

        const subTl = gsap.timeline();

        subTl.to(subFolderFrontRef.current, {
          rotationX: -130,
          duration: 1.0,
          ease: "power3.inOut"
        })
        .to(subFolderCardsRef.current, {
          y: -100,
          scale: 0.9,
          duration: 0.5,
          stagger: 0.06,
          ease: "back.out(1.2)"
        }, "-=0.5")
        .to(subFolderCardsRef.current, {
          x: (i) => {
            const count = selectedRepo.subProjects.length;
            return (i - (count - 1) / 2) * 320;
          },
          y: 0,
          rotation: 0,
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
    <section id="projects" ref={containerRef} className="bg-[#0b0b0b] min-h-[100svh] md:min-h-[150vh] relative font-sans overflow-x-clip text-white w-full flex flex-col items-center justify-center py-20 select-none">
      
      {/* Background Watermark Heading */}
      <div className="absolute top-8 left-0 w-full flex items-start justify-center pointer-events-none z-0">
        <h1 className="text-[14vw] sm:text-[17vw] md:text-[20vw] font-black text-white/[0.03] tracking-tighter leading-none whitespace-nowrap uppercase">
          {selectedRepo ? selectedRepo.repoName : "REPOSITORIES"}
        </h1>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] bg-red-600/15 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Structured Top Header & Breadcrumb Container (Optimized for perfect vertical centering) */}
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

      {/* VIEW 1: Main Repositories Folders Stack */}
      {!selectedRepo ? (
        <div className="relative w-full max-w-7xl h-[420px] flex items-center justify-center perspective-[2000px] z-10">
          <div className="relative w-0 h-0 transform-style-3d">
            
            <div 
              ref={folderBackRef}
              className="absolute w-[85vw] md:w-[32vw] max-w-[380px] aspect-video bg-[#141414] rounded-[24px] border border-red-600/40 shadow-[0_20px_50px_rgba(229,9,20,0.25)] flex items-center justify-center"
              style={{ zIndex: 5 }}
            >
              <div className="absolute -top-6 left-6 w-32 h-8 bg-[#1f1f1f] rounded-t-xl border-t border-red-600/30" />
              <div className="relative z-10 text-red-600 font-mono font-black text-xl tracking-widest uppercase opacity-80">
                GITHUB_REPOSITORIES
              </div>
            </div>

            {repositoryGroups.map((repo, i) => (
              <div 
                key={i}
                ref={el => folderCardsRef.current[i] = el}
                onClick={() => setSelectedRepo(repo)}
                className="hidden md:block absolute w-[80vw] md:w-[30vw] max-w-[320px] aspect-[16/10] will-change-transform cursor-pointer"
                style={{ zIndex: 10 + i }}
              >
                <div className="w-full h-full rounded-[24px] overflow-hidden border border-white/15 bg-[#141414]/95 backdrop-blur-2xl shadow-[0_25px_50px_rgba(0,0,0,0.9)] transition-all duration-500 group hover:border-red-600 hover:shadow-[0_35px_80px_rgba(229,9,20,0.4)] hover:-translate-y-2 relative z-10 p-6 flex flex-col justify-between">
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-red-500 bg-red-600/10 px-2.5 py-1 rounded border border-red-600/20">
                      {repo.episode}
                    </span>
                    <span className="text-xs font-mono text-red-400 font-bold group-hover:translate-x-1 transition-transform">
                      Open &rarr;
                    </span>
                  </div>

                  <div className="space-y-1.5 my-auto">
                    <div className="text-[9px] font-mono uppercase tracking-widest text-white/40 truncate">
                      {repo.category}
                    </div>
                    <h3 className="text-xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors duration-300 truncate">
                      {repo.repoName}
                    </h3>
                    <p className="text-xs text-white/70 font-light leading-relaxed line-clamp-2">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] font-mono text-white/50">
                    <span>{repo.subProjects.length} Folders Inside</span>
                    <span className="text-red-500 font-bold">[ VIEW ]</span>
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
        /* VIEW 2: Sub-Projects 3D Folder Stack Animation View */
        <div className="relative w-full max-w-7xl h-[420px] flex items-center justify-center perspective-[2000px] z-10">
          <div className="relative w-0 h-0 transform-style-3d">
            
            <div 
              ref={subFolderBackRef}
              className="absolute w-[85vw] md:w-[32vw] max-w-[380px] aspect-video bg-[#141414] rounded-[24px] border border-red-600/40 shadow-[0_20px_50px_rgba(229,9,20,0.25)] flex items-center justify-center"
              style={{ zIndex: 5 }}
            >
              <div className="absolute -top-6 left-6 w-32 h-8 bg-[#1f1f1f] rounded-t-xl border-t border-red-600/30" />
              <div className="relative z-10 text-red-600 font-mono font-black text-xl tracking-widest uppercase opacity-80">
                {selectedRepo.repoName.toUpperCase()}_MODULES
              </div>
            </div>

            {selectedRepo.subProjects.map((project, idx) => (
              <div 
                key={idx}
                ref={el => subFolderCardsRef.current[idx] = el}
                className="hidden md:block absolute w-[80vw] md:w-[30vw] max-w-[320px] aspect-[16/10] will-change-transform"
                style={{ zIndex: 10 + idx }}
              >
                <div className="w-full h-full rounded-[24px] overflow-hidden border border-white/15 bg-[#141414]/95 backdrop-blur-2xl shadow-[0_25px_50px_rgba(0,0,0,0.9)] transition-all duration-500 group hover:border-red-600 hover:shadow-[0_35px_80px_rgba(229,9,20,0.4)] relative z-10 p-6 flex flex-col justify-between">
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-500 bg-red-600/10 px-2.5 py-1 rounded">
                      MODULE 0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-1.5 my-auto">
                    <h3 className="text-xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors truncate">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/70 font-light leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[9px] font-mono text-white/70 bg-white/5 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <a 
                        href={project.repoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 py-1.5 bg-white/10 hover:bg-white/20 text-white font-mono text-[11px] font-bold uppercase rounded text-center transition-all border border-white/15"
                      >
                        Code
                      </a>
                      <a 
                        href={project.appLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 py-1.5 bg-red-600 hover:bg-red-700 text-white font-mono text-[11px] font-bold uppercase rounded text-center transition-all shadow-[0_0_15px_rgba(229,9,20,0.5)]"
                      >
                        Launch App
                      </a>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-red-600 group-hover:shadow-[0_0_15px_#E50914] transition-all" />
                </div>
              </div>
            ))}

            <div 
              ref={subFolderFrontRef}
              className="absolute w-[85vw] md:w-[32vw] max-w-[380px] aspect-video pointer-events-none will-change-transform"
              style={{ zIndex: 60 }}
            >
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
