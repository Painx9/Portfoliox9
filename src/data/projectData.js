// src/data/projectsData.js

export const repositoryGroups = [
  {
    repoName: "Models",
    category: "Supervised & Unsupervised Machine Learning",
    description: "Contains core predictive models, price regression pipelines, ReAct agents, and healthcare diagnostic algorithms.",
    episode: "S01 REPO",
    repoLink: "https://github.com/Painx9/Models",
    overallTech: ["Python", "Scikit-Learn", "XGBoost", "Streamlit", "SVM"],
    subProjects: [
      {
        title: "House Price Prediction",
        mission: "Solves the challenge of estimating California housing market prices by leveraging machine learning to predict median district values based on geographic and demographic features.",
        description: "An end-to-end data science project utilizing the California Housing dataset to train an XGBoost regression model, deployed via an interactive Streamlit web dashboard for real-time predictions.",
        tags: ["Python", "XGBoost", "Scikit-Learn", "Pandas"],
        appLink: "https://house-price-prediction09.streamlit.app",
        repoLink: "https://github.com/Painx9/Models/tree/main/House-price-prediction"
      },
      {
        title: "ReAct AI Agent",
        mission: "This project solves the problem of heavy framework dependency by building a lightweight, zero-dependency ReAct (Reasoning + Acting) AI agent.",
        description: "Implements an active Think --> Act --> Observe loop that matches LLM outputs to native Python tools.",
        tags: ["Python 3", "Groq API", "Streamlit", "Regex"],
        appLink: "https://react-ai-agent09.streamlit.app",
        repoLink: "https://github.com/Painx9/Models/tree/main/ReAct-AI-Agent"
      },
      {
        title: "Diabetes Prediction ML",
        mission: "Early detection of diabetes is critical to preventing severe, long-term health complications by instantly evaluating patient metabolic metrics.",
        description: "Standardizes 8 core patient physiological metrics to train a linear Support Vector Classifier deployed via Streamlit.",
        tags: ["Python", "StandardScaler", "SVM", "Streamlit"],
        appLink: "https://diabetes-prediction09.streamlit.app",
        repoLink: "https://github.com/Painx9/Models/tree/main/diabetes-prediction-ml"
      },
      {
        title: "Fake News Prediction",
        mission: "Automates the detection of online misinformation by automatically classifying news articles as Real or Fake.",
        description: "Cleaned raw news text using stemming and TF-IDF vectorization to train a classifier with over 90% accuracy.",
        tags: ["Python", "PorterStemmer", "Scikit-Learn", "SVM"],
        appLink: "https://fake-news-prediction09.streamlit.app",
        repoLink: "https://github.com/Painx9/Models/tree/main/fake-news-prediction"
      },
      {
        title: "Sonar vs Rock",
        mission: "Solves the challenge of identifying underwater objects by automatically classifying sonar return signals to distinguish dangerous mines from rocks.",
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
    description: "Repository focused on conversational AI interfaces, multimodal responses, and secure API configuration handling.",
    episode: "S02 REPO",
    repoLink: "https://github.com/Painx9/Gen_AI",
    overallTech: ["Python", "Google GenAI SDK", "Streamlit", "JSON"],
    subProjects: [
      {
        title: "Gemini 3.5 Chat Bot",
        mission: "Solves the problem of building a responsive, context-aware conversational AI interface allowing users to chat with Google's Gemini model.",
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
    description: "Production-ready language model utilities including video transcription analysis, resume optimization, and weather forecasting.",
    episode: "S03 REPO",
    repoLink: "https://github.com/Painx9/LLM_Applications",
    overallTech: ["Streamlit", "Google GenAI SDK", "Pydantic", "OpenWeatherMap API"],
    subProjects: [
      {
        title: "AI Video Analyzer",
        mission: "To eliminate the tedious chore of watching hours of video content by instantly transforming any YouTube URL into an interactive, structured, and searchable knowledge asset.",
        description: "Streamlit dashboard that leverages advanced flash models to automatically summarize and analyze YouTube videos.",
        tags: ["Streamlit", "Google GenAI SDK", "Gemini 3.1 Flash Lite", "Python"],
        appLink: "https://ai-youtube-video-analyzer09.streamlit.app",
        repoLink: "https://github.com/Painx9/LLM_Applications/tree/main/ai-video-analyzer"
      },
      {
        title: "Resume Analyzer",
        mission: "Job seekers often struggle to optimize their resumes for rigid Applicant Tracking Systems (ATS), leading to immediate automated rejections. This application solves that.",
        description: "Production-ready AI application that extracts raw text from PDF resumes and processes it through a strict schema-enforced LLM pipeline.",
        tags: ["Python", "Streamlit", "Pydantic", "PyPDF2"],
        appLink: "https://resume-analyzer09.streamlit.app",
        repoLink: "https://github.com/Painx9/LLM_Applications/tree/main/resume-analyzer"
      },
      {
        title: "Weather Forecast",
        mission: "It eliminates the need for developers to host expensive backend infrastructure by allowing users to securely bring their own OpenWeatherMap API key.",
        description: "A lightweight, modular dashboard that fetches real-time weather metrics for any city globally.",
        tags: ["Python", "Streamlit", "OpenWeatherMap API", "Pandas"],
        appLink: "https://ai-weather-forecast09.streamlit.app",
        repoLink: "https://github.com/Painx9/LLM_Applications/tree/main/weather-forecast"
      }
    ]
  },
  {
    repoName: "Portfoliox9",
    category: "Frontend Web Development",
    description: "Source code repository for your active personal developer portfolio web application featuring immersive UI/UX.",
    episode: "S04 REPO",
    repoLink: "https://github.com/Painx9/Portfoliox9",
    overallTech: ["React", "Vite", "Tailwind CSS", "GSAP"],
    subProjects: [
      {
        title: "Netflix Developer Series Portfolio",
        mission: "Solves the limitation of standard static portfolios by delivering a cinematic, interactive developer experience modeled after enterprise video platforms.",
        description: "Immersive portfolio featuring GSAP 3D folder animations, custom web cursors, and nested repo architectures.",
        tags: ["React", "Vite", "Tailwind CSS", "GSAP"],
        appLink: "https://painx9.github.io/Deep.github.io/",
        repoLink: "https://github.com/Painx9/Portfoliox9"
      }
    ]
  },
  {
    repoName: "Deep.github.io",
    category: "Static Web Hosting & Deployment",
    description: "Live production repository hosting your statically built web application via GitHub Pages with automated syncing.",
    episode: "S05 REPO",
    repoLink: "https://github.com/Painx9/Deep.github.io",
    overallTech: ["HTML5", "CSS3", "JavaScript", "GitHub Actions"],
    subProjects: [
      {
        title: "GitHub Pages Production Build",
        mission: "Ensures reliable, fast, and globally accessible deployment for all experimental web applications.",
        description: "Live-hosted deployment repository syncing built web assets for public access globally.",
        tags: ["HTML5", "CSS3", "JavaScript", "GitHub Actions"],
        appLink: "https://painx9.github.io/Deep.github.io/",
        repoLink: "https://github.com/Painx9/Deep.github.io"
      }
    ]
  }
];
