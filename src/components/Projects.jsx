import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Project Data updated with both live App links and GitHub Repo links
const projectsData = [
  {
    title: "Python ReAct Automation Agent",
    category: "Autonomous Agent Architecture",
    description: "Library-free, zero-dependency implementation of the Reasoning and Acting (ReAct) agent loop pattern to optimize token usage.",
    tags: ["Python", "Streamlit", "Groq API", "Regex"],
    match: "99%",
    episode: "S01 E01",
    appLink: "https://your-streamlit-app-link.streamlit.app", 
    repoLink: "https://github.com/YOUR-USERNAME/your-repo-name"
  },
  {
    title: "AI Resume Analyzer Pro",
    category: "Generative AI & Pydantic",
    description: "Multi-widget Streamlit dashboard integrating the Google GenAI SDK and Pydantic schemas to parse raw resumes against ATS filters.",
    tags: ["Python", "Streamlit", "Google GenAI SDK", "Pydantic"],
    match: "98%",
    episode: "S01 E02",
    appLink: "https://your-streamlit-app-link.streamlit.app",
    repoLink: "https://github.com/YOUR-USERNAME/your-repo-name"
  },
  {
    title: "California House Price Model",
    category: "Predictive Analytics",
    description: "XGBoost Regressor model protecting pricing patterns from collinearity across 20,640 instances, achieving an R2 score of 0.943.",
    tags: ["XGBoost", "Pandas", "Seaborn", "Scikit-Learn"],
    match: "97%",
    episode: "S01 E03",
    appLink: "https://your-streamlit-app-link.streamlit.app",
    repoLink: "https://github.com/YOUR-USERNAME/your-repo-name"
  },
  {
    title: "AI YouTube Video Analyzer",
    category: "Multimodal Data Pipelines",
    description: "Standalone analytics pipeline parsing transcriptions via youtube-transcript-api to generate concise abstracts and action items.",
    tags: ["Python", "Streamlit", "YouTube Transcript API", "JSON"],
    match: "99%",
    episode: "S01 E04",
    appLink: "https://your-streamlit-app-link.streamlit.app",
    repoLink: "https://github.com/YOUR-USERNAME/your-repo-name"
  },
  {
    title: "Fake News Text Processing Pipeline",
    category: "NLP Classification",
    description: "Cleaned 72,134 news articles using NLTK and TfidfTransformer to build a Logistic Regression classifier achieving 92.7% training accuracy.",
    tags: ["NLTK", "TfidfTransformer", "Logistic Regression", "Regex"],
    match: "96%",
    episode: "S01 E05",
    appLink: "https://your-streamlit-app-link.streamlit.app",
    repoLink: "https://github.com/YOUR-USERNAME/your-repo-name"
  },
  {
    title: "Sonar-Array Diagnostics Engine",
    category: "Classification Engineering",
    description: "Automated binary geological categorization over 60-feature raw frequency spectrum data using Scikit-Learn and Logistic Regression.",
    tags: ["Scikit-Learn", "NumPy", "Pandas", "Logistic Regression"],
    match: "99%",
    episode: "S01 E06",
    appLink: "https://your-streamlit-app-link.streamlit.app",
    repoLink: "https://github.com/YOUR-USERNAME/your-repo-name"
  },
  {
    title: "Automated Loan Status Prediction",
    category: "Financial Data Processing",
    description: "Processed loan application datasets by cleaning rows, encoding strings, and deploying a baseline Support Vector Machine classifier.",
    tags: ["Support Vector Machines", "Pandas", "Data Cleaning"],
    match: "100%",
    episode: "S01 E07",
    appLink: "https://your-streamlit-app-link.streamlit.app",
    repoLink: "https://github.com/YOUR-USERNAME/your-repo-name"
  },
  {
    title: "PIMA Diabetes Diagnostic Pipeline",
    category: "Real-Time Healthcare AI",
    description: "Live Streamlit app utilizing a cached Standard Scaler configuration and linear SVC to evaluate clinical indicator feeds.",
    tags: ["Streamlit", "Standard Scaler", "SVM", "GitHub CI/CD"],
    match: "98%",
    episode: "S01 E08",
    appLink: "https://your-streamlit-app-link.streamlit.app",
    repoLink: "https://github.com/YOUR-USERNAME/your-repo-name"
  }
];

const Projects = () => {
  const containerRef = useRef(null);
  const folderBackRef = useRef(null);
  const folderFrontRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set([folderBackRef.current, folderFrontRef.current], { 
        xPercent: -50, 
        yPercent: -50 
      });
      gsap.set(folderFrontRef.current, { transformOrigin: "bottom center" });
      
      const getGridPos = (index) => {
        let row, col;
        if (index < 3) { row = 0; col = index; }
        else if (index === 3) { row = 1; col = 0; }
        else if (index === 4) { row = 1; col = 2; }
        else { row = 2; col = index - 5; }
        return { row, col };
      };

      cardsRef.current.forEach((card) => {
        gsap.set(card, {
          xPercent: -50,
          yPercent: -50,
          rotation: gsap.utils.random(-6, 6),
          scale: 0.85,
          x: 0,
          y: 0,
        });
      });

      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        let floatTween;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%", 
            end: "bottom 50%",
            toggleActions: "play reverse play reverse",
            onEnter: () => { if (floatTween) floatTween.kill(); },
            onEnterBack: () => { if (floatTween) floatTween.kill(); },
            onLeave: () => { if (floatTween) floatTween.kill(); },
            onLeaveBack: () => { if (floatTween) floatTween.kill(); }
          },
          onComplete: () => {
            floatTween = gsap.to(cardsRef.current, {
              y: "+=12",
              rotation: "+=1",
              duration: 3.5,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut",
              stagger: { amount: 1.5, from: "random" }
            });
          }
        });

        tl.to(folderFrontRef.current, {
          rotationX: -130,
          duration: 1.2,
          ease: "power3.inOut"
        });

        tl.to(cardsRef.current, {
          y: -140,
          scale: 0.9,
          zIndex: 70,
          duration: 0.6,
          stagger: 0.04,
          ease: "back.out(1.2)"
        }, "-=0.6");

        tl.to(cardsRef.current, {
          x: (i) => {
            const w = Math.max(...cardsRef.current.map(c => c?.offsetWidth || 0)) || 360;
            const gap = 40;
            const { col } = getGridPos(i);
            return (col - 1) * (w + gap);
          },
          y: (i) => {
            const h = Math.max(...cardsRef.current.map(c => c?.offsetHeight || 0)) || 240;
            const gap = 40;
            const { row } = getGridPos(i);
            return (row - 1) * (h + gap);
          },
          rotation: () => gsap.utils.random(-3, 3),
          scale: 1,
          duration: 1.4,
          stagger: { amount: 0.4, from: "center" },
          ease: "expo.out"
        }, "-=0.2");
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="bg-[#0b0b0b] min-h-[100svh] md:min-h-[170vh] relative font-sans overflow-x-clip text-white w-full flex items-center justify-center py-24 md:py-40 select-none">
      
      <div className="absolute top-10 left-0 w-full flex items-start justify-center pointer-events-none z-0">
        <h1 className="text-[14vw] sm:text-[17vw] md:text-[20vw] font-black text-white/[0.03] tracking-tighter leading-none whitespace-nowrap uppercase">
          ORIGINALS
        </h1>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] bg-red-600/15 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="mt-12 relative w-full max-w-7xl h-full flex items-center justify-center perspective-[2000px] z-10">
        <div className="relative w-0 h-0 transform-style-3d">
          
          <div 
            ref={folderBackRef}
            className="absolute w-[85vw] md:w-[32vw] max-w-[380px] aspect-video bg-[#141414] rounded-[24px] border border-red-600/40 shadow-[0_20px_50px_rgba(229,9,20,0.25)] flex items-center justify-center"
            style={{ zIndex: 5 }}
          >
            <div className="absolute -top-6 left-6 w-32 h-8 bg-[#1f1f1f] rounded-t-xl border-t border-red-600/30" />
            <div className="relative z-10 text-red-600 font-mono font-black text-2xl tracking-widest uppercase opacity-60">
              PROJECT_ARCHIVE
            </div>
          </div>

          {projectsData.map((project, i) => (
            <div 
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="hidden md:block absolute w-[80vw] md:w-[33vw] max-w-[380px] aspect-[16/10] will-change-transform"
              style={{ zIndex: 10 + i }}
            >
              <div className="w-full h-full rounded-[24px] overflow-hidden border border-white/15 bg-[#141414]/95 backdrop-blur-2xl shadow-[0_25px_50px_rgba(0,0,0,0.9)] transition-all duration-500 group hover:border-red-600 hover:shadow-[0_35px_80px_rgba(229,9,20,0.35)] relative z-10 p-6 flex flex-col justify-between">
                
                {/* Top Card Header with Both Action Buttons */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-red-500 bg-red-600/10 px-2.5 py-1 rounded border border-red-600/20">
                    {project.episode}
                  </span>
                  <div className="flex items-center gap-2">
                    {/* GitHub Code Repository Button */}
                    <a 
                      href={project.repoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white font-mono text-[10px] font-bold uppercase rounded flex items-center gap-1 transition-all border border-white/15"
                      title="View Source Code"
                    >
                      Code
                    </a>

                    {/* Launch Streamlit App Button */}
                    <a 
                      href={project.appLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-red-600 hover:bg-red-700 text-white font-mono text-[10px] font-bold uppercase rounded flex items-center gap-1 transition-all shadow-[0_0_12px_rgba(229,9,20,0.5)]"
                    >
                      Launch App
                    </a>
                  </div>
                </div>

                {/* Middle Title & Description */}
                <div className="space-y-1.5 my-auto">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[9px] font-mono text-white/70 bg-white/5 px-2 py-0.5 rounded group-hover:border-red-600/30 transition-colors">
                      {tag}
                    </span>
                  ))}
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

    </section>
  );
};

export default Projects;
