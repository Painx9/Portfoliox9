// src/data/projectsData.js

export const repositoryGroups = [
  {
    repoName: "Models",
    category: "Supervised & Unsupervised Machine Learning",
    description:
      "Contains core predictive models, price regression pipelines, ReAct agents, and healthcare diagnostic algorithms.",
    episode: "S01 REPO",
    repoLink: "https://github.com/Painx9/Models",
    overallTech: ["Python", "Scikit-Learn", "XGBoost", "Streamlit", "SVM"],
    subProjects: [
      {
        title: "House Price Prediction",
        mission:
          "Solves the challenge of estimating California housing market prices by leveraging machine learning to predict median district values based on geographic and demographic features.",
        description:
          "An end-to-end data science project utilizing the California Housing dataset to train an XGBoost regression model, deployed via an interactive Streamlit web dashboard for real-time predictions.",
        tags: ["Python", "XGBoost", "Scikit-Learn", "Pandas"],
        appLink: "https://house-price-prediction09.streamlit.app",
        repoLink:
          "https://github.com/Painx9/Models/tree/main/House-price-prediction",
      },
      {
        title: "ReAct AI Agent",
        mission:
          "This project solves the problem of heavy framework dependency by building a lightweight, zero-dependency ReAct (Reasoning + Acting) AI agent.",
        description:
          "Implements an active Think --> Act --> Observe loop that matches LLM outputs to native Python tools.",
        tags: ["Python 3", "Groq API", "Streamlit", "Regex"],
        appLink: "https://react-ai-agent09.streamlit.app",
        repoLink: "https://github.com/Painx9/Models/tree/main/ReAct-AI-Agent",
      },
      {
        title: "Diabetes Prediction ML",
        mission:
          "Early detection of diabetes is critical to preventing severe, long-term health complications by instantly evaluating patient metabolic metrics.",
        description:
          "Standardizes 8 core patient physiological metrics to train a linear Support Vector Classifier deployed via Streamlit.",
        tags: ["Python", "StandardScaler", "SVM", "Streamlit"],
        appLink: "https://diabetes-prediction09.streamlit.app",
        repoLink:
          "https://github.com/Painx9/Models/tree/main/diabetes-prediction-ml",
      },
      {
        title: "Fake News Prediction",
        mission:
          "Automates the detection of online misinformation by automatically classifying news articles as Real or Fake.",
        description:
          "Cleaned raw news text using stemming and TF-IDF vectorization to train a classifier with over 90% accuracy.",
        tags: ["Python", "PorterStemmer", "Scikit-Learn", "SVM"],
        appLink: "https://fake-news-prediction09.streamlit.app",
        repoLink:
          "https://github.com/Painx9/Models/tree/main/fake-news-prediction",
      },
      {
        title: "Sonar vs Rock",
        mission:
          "Solves the challenge of identifying underwater objects by automatically classifying sonar return signals to distinguish dangerous mines from rocks.",
        description:
          "Interactive machine learning dashboard powered by a Logistic Regression model classifying sonar return signals.",
        tags: ["Python", "NumPy", "Scikit-Learn", "Streamlit"],
        appLink: "https://sonar-vs-rock09.streamlit.app",
        repoLink: "https://github.com/Painx9/Models/tree/main/sonar-vs-rock",
      },
    ],
  },
  {
    repoName: "Gen_AI",
    category: "Generative AI & Chat Architectures",
    description:
      "Repository focused on conversational AI interfaces, multimodal responses, and secure API configuration handling.",
    episode: "S02 REPO",
    repoLink: "https://github.com/Painx9/Gen_AI",
    overallTech: ["Python", "Google GenAI SDK", "Streamlit", "JSON"],
    subProjects: [
      {
        title: "Gemini 3.5 Chat Bot",
        mission:
          "Solves the problem of building a responsive, context-aware conversational AI interface allowing users to chat with Google's Gemini model.",
        description:
          "An interactive chatbot application maintaining multi-turn session history with secure configuration handling.",
        tags: ["Python", "Streamlit", "Google GenAI SDK"],
        appLink: "https://chat-bot09.streamlit.app",
        repoLink:
          "https://github.com/Painx9/Gen_AI/tree/main/Gemini-3.5_Chat_Bot",
      },
    ],
  },
  {
    repoName: "LLM_Applications",
    category: "LLM Workflows & Multimodal Pipelines",
    description:
      "Production-ready language model utilities including video transcription analysis, resume optimization, and weather forecasting.",
    episode: "S03 REPO",
    repoLink: "https://github.com/Painx9/LLM_Applications",
    overallTech: [
      "Streamlit",
      "Google GenAI SDK",
      "Pydantic",
      "OpenWeatherMap API",
    ],
    subProjects: [
      {
        title: "AI Video Analyzer",
        mission:
          "To eliminate the tedious chore of watching hours of video content by instantly transforming any YouTube URL into an interactive, structured, and searchable knowledge asset.",
        description:
          "Streamlit dashboard that leverages advanced flash models to automatically summarize and analyze YouTube videos.",
        tags: ["Streamlit", "Google GenAI SDK", "Gemini 3.1 Flash Lite", "Python"],
        appLink: "https://ai-youtube-video-analyzer09.streamlit.app",
        repoLink:
          "https://github.com/Painx9/LLM_Applications/tree/main/ai-video-analyzer",
      },
      {
        title: "Resume Analyzer",
        mission:
          "Job seekers often struggle to optimize their resumes for rigid Applicant Tracking Systems (ATS), leading to immediate automated rejections. This application solves that.",
        description:
          "Production-ready AI application that extracts raw text from PDF resumes and processes it through a strict schema-enforced LLM pipeline.",
        tags: ["Python", "Streamlit", "Pydantic", "PyPDF2"],
        appLink: "https://resume-analyzer09.streamlit.app",
        repoLink:
          "https://github.com/Painx9/LLM_Applications/tree/main/resume-analyzer",
      },
      {
        title: "Weather Forecast",
        mission:
          "It eliminates the need for developers to host expensive backend infrastructure by allowing users to securely bring their own OpenWeatherMap API key.",
        description:
          "A lightweight, modular dashboard that fetches real-time weather metrics for any city globally.",
        tags: ["Python", "Streamlit", "OpenWeatherMap API", "Pandas"],
        appLink: "https://ai-weather-forecast09.streamlit.app",
        repoLink:
          "https://github.com/Painx9/LLM_Applications/tree/main/weather-forecast",
      },
    ],
  },
  {
    repoName: "Portfoliox9",
    category: "Frontend Web Development",
    description:
      "Source code repository for your active personal developer portfolio web application featuring immersive UI/UX.",
    episode: "S04 REPO",
    repoLink: "https://github.com/Painx9/Portfoliox9",
    overallTech: ["React", "Vite", "Tailwind CSS", "GSAP"],
    subProjects: [
      {
        title: "Netflix Developer Series Portfolio",
        mission:
          "Solves the limitation of standard static portfolios by delivering a cinematic, interactive developer experience modeled after enterprise video platforms.",
        description:
          "Immersive portfolio featuring GSAP 3D folder animations, custom web cursors, and nested repo architectures.",
        tags: ["React", "Vite", "Tailwind CSS", "GSAP"],
        appLink: "https://painx9.github.io/Deep.github.io/",
        repoLink: "https://github.com/Painx9/Portfoliox9",
      },
    ],
  },
  {
    repoName: "Deep.github.io",
    category: "Static Web Hosting & Deployment",
    description:
      "Live production repository hosting your statically built web application via GitHub Pages with automated syncing.",
    episode: "S05 REPO",
    repoLink: "https://github.com/Painx9/Deep.github.io",
    overallTech: ["HTML5", "CSS3", "JavaScript", "GitHub Actions"],
    subProjects: [
      {
        title: "GitHub Pages Production Build",
        mission:
          "Ensures reliable, fast, and globally accessible deployment for all experimental web applications.",
        description:
          "Live-hosted deployment repository syncing built web assets for public access globally.",
        tags: ["HTML5", "CSS3", "JavaScript", "GitHub Actions"],
        appLink: "https://painx9.github.io/Deep.github.io/",
        repoLink: "https://github.com/Painx9/Deep.github.io",
      },
    ],
  },
  {
    repoName: "OIBSIP",
    category: "Data Analytics & Exploratory Data Science",
    description:
      "Internship repository for Oasis Infobyte (OIBSIP) Data Analytics track, featuring end-to-end EDA pipelines, customer segmentation, data cleaning audits, NLP sentiment analysis, and predictive models.",
    episode: "S06 REPO",
    repoLink: "https://github.com/Painx9/OIBSIP",
    overallTech: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn"],
    subProjects: [
      {
        title: "Retail Sales EDA & Insights",
        mission:
          "Uncovering purchasing trends, quarterly sales cycles, and customer demographic drivers from retail transaction records.",
        description:
          "Exploratory data analysis utilizing Pandas, Matplotlib, and Seaborn to compute category revenues, correlation heatmaps, and actionable business KPIs.",
        tags: ["Python", "Pandas", "Seaborn", "EDA"],
        appLink: null,
        repoLink:
          "https://github.com/Painx9/OIBSIP/tree/main/DataAnalytics-L1-EDARetailSales",
      },
      {
        title: "Customer Segmentation (K-Means)",
        mission:
          "Segmenting an e-commerce customer base using RFM behavioral analytics to empower targeted marketing campaigns.",
        description:
          "Applied StandardScaler normalization, calculated optimal clusters with the Elbow Method, and created customer profile clusters.",
        tags: ["Scikit-Learn", "K-Means", "RFM Analysis", "Pandas"],
        appLink: null,
        repoLink:
          "https://github.com/Painx9/OIBSIP/tree/main/DataAnalytics-L1-CustomerSegmentation",
      },
      {
        title: "Data Cleaning & Quality Audit",
        mission:
          "Systematically transforming deliberately messy raw datasets into production-grade, analysis-ready structured data.",
        description:
          "Produced data quality reports, handled median/mode missing value imputations, removed duplicates, and corrected numeric outliers via IQR bounds.",
        tags: ["Python", "Pandas", "Data Cleaning", "NumPy"],
        appLink: null,
        repoLink:
          "https://github.com/Painx9/OIBSIP/tree/main/DataAnalytics-L1-DataCleaning",
      },
      {
        title: "Customer Sentiment Analysis",
        mission:
          "Classifying unstructured consumer reviews into positive, negative, and neutral sentiments to gauge customer satisfaction.",
        description:
          "Constructed NLP pipelines using NLTK tokenization, stopword filtering, and TF-IDF vectorization to train Naive Bayes and SVM sentiment classifiers.",
        tags: ["NLP", "TF-IDF", "Scikit-Learn", "NLTK"],
        appLink: null,
        repoLink:
          "https://github.com/Painx9/OIBSIP/tree/main/DataAnalytics-L1-SentimentAnalysis",
      },
      {
        title: "Financial Fraud Detection",
        mission:
          "Detecting fraudulent transactions from heavily imbalanced financial data using specialized sampling and evaluation metrics.",
        description:
          "Resolved class imbalance using SMOTE oversampling and stratified splits, evaluating models through Precision, Recall, and AUC-ROC curves.",
        tags: ["SMOTE", "Scikit-Learn", "Logistic Regression", "AUC-ROC"],
        appLink: null,
        repoLink:
          "https://github.com/Painx9/OIBSIP/tree/main/DataAnalytics-L1-FraudDetection",
      },
      {
        title: "Google Play Store Ecosystem Analysis",
        mission:
          "Extracting market intelligence across app categories, pricing models, install volumes, and user review sentiment.",
        description:
          "Cleaned real-world app store data, evaluated rating distributions, and applied VADER/TextBlob sentiment scoring across market categories.",
        tags: ["Python", "EDA", "VADER", "Seaborn"],
        appLink: null,
        repoLink:
          "https://github.com/Painx9/OIBSIP/tree/main/DataAnalytics-L2-GooglePlayStoreAnalysis",
      },
    ],
  },
  {
    repoName: "codsoft_tasks",
    category: "Artificial Intelligence Internship",
    description:
      "Core AI projects engineered for the CodSoft Artificial Intelligence virtual internship, featuring rule-based conversational agents, game theory Minimax search algorithms, and content-based recommendation engines.",
    episode: "S07 REPO",
    repoLink: "https://github.com/Painx9/codsoft_tasks",
    overallTech: ["Python", "Scikit-Learn", "Minimax", "Regex", "Pandas"],
    subProjects: [
      {
        title: "Rule-Based Conversational Chatbot",
        mission:
          "Developing an intelligent conversational agent that parses user input intent and generates responsive dialogue flows using regex pattern matching.",
        description:
          "Engineered a lightweight text chatbot executing rule-based regex intent recognition, structured response dictionaries, and fallback dialogue loops.",
        tags: ["Python", "Regex", "NLP", "Pattern Matching"],
        appLink: null,
        repoLink:
          "https://github.com/Painx9/codsoft_tasks/tree/main/Task_1_Chatbot",
      },
      {
        title: "Unbeatable Minimax Tic-Tac-Toe AI",
        mission:
          "Implementing game theory and recursive adversarial decision trees to ensure the computer agent plays an optimal, mathematically unbeatable game.",
        description:
          "Built a game-tree search agent utilizing the Minimax recursive algorithm with depth-weighted scoring to evaluate optimal moves and counter human strategies.",
        tags: ["Python", "Minimax Algorithm", "Game Theory", "Adversarial Search"],
        appLink: null,
        repoLink:
          "https://github.com/Painx9/codsoft_tasks/tree/main/Task_2_TicTacToe",
      },
      {
        title: "Content-Based Movie Recommendation Engine",
        mission:
          "Overcoming content discovery challenges by calculating cosine similarity over tokenized genre metadata to recommend relevant films to users.",
        description:
          "Constructed a content-based recommendation model transforming multi-label genre strings into count vectors and computing pairwise cosine similarities.",
        tags: ["Python", "Pandas", "Scikit-Learn", "Cosine Similarity"],
        appLink: null,
        repoLink:
          "https://github.com/Painx9/codsoft_tasks/tree/main/Task_4_Recommender",
      },
    ],
  },
  {
    repoName: "CODSOFT_TASKNO",
    category: "Machine Learning Internship Suite",
    description:
      "Machine learning models developed during the CodSoft ML internship, covering movie genre classification, credit card fraud detection, customer churn forecasting, SMS spam filtering, and deep learning RNN handwriting generation.",
    episode: "S08 REPO",
    repoLink: "https://github.com/Painx9/CODSOFT_TASKNO",
    overallTech: ["Python", "Scikit-Learn", "TensorFlow", "Keras", "NLP"],
    subProjects: [
      {
        title: "Movie Genre Classification",
        mission:
          "Predicting film genres directly from plot summaries and unstructured synopses using natural language processing.",
        description:
          "Vectorized unstructured plot synopses using TF-IDF text representation and trained multi-class classifiers to accurately predict movie genres.",
        tags: ["NLP", "TF-IDF", "Scikit-Learn", "Python"],
        appLink: null,
        repoLink:
          "https://github.com/Painx9/CODSOFT_TASKNO/tree/main/CODSOFT_TASK1",
      },
      {
        title: "Credit Card Fraud Detection",
        mission:
          "Identifying fraudulent financial transactions amidst severe class imbalances to minimize false-negative fraud occurrences.",
        description:
          "Engineered feature preprocessing pipelines and evaluated classification algorithms (Logistic Regression, Decision Trees, Random Forests) on skewed transaction data.",
        tags: ["Scikit-Learn", "Random Forest", "Fraud Detection", "Imbalanced Data"],
        appLink: null,
        repoLink:
          "https://github.com/Painx9/CODSOFT_TASKNO/tree/main/CODSOFT_TASK2",
      },
      {
        title: "Customer Churn Prediction",
        mission:
          "Forecasting subscriber attrition for subscription-based business models using historical customer usage behaviors.",
        description:
          "Trained machine learning classification models on customer tenure, usage metrics, and service attributes to identify key churn indicators.",
        tags: ["Machine Learning", "Customer Churn", "Pandas", "Scikit-Learn"],
        appLink: null,
        repoLink:
          "https://github.com/Painx9/CODSOFT_TASKNO/tree/main/CODSOFT_TASK3",
      },
      {
        title: "Spam SMS Detection",
        mission:
          "Classifying incoming text messages as legitimate (ham) or malicious spam to prevent mobile messaging fraud.",
        description:
          "Processed SMS text data, extracted frequency matrices via TF-IDF vectorization, and trained high-precision classification models to filter out spam.",
        tags: ["NLP", "TF-IDF", "Naive Bayes", "Text Classification"],
        appLink: null,
        repoLink:
          "https://github.com/Painx9/CODSOFT_TASKNO/tree/main/CODSOFT_TASK4",
      },
      {
        title: "Handwritten Text Generation (RNN)",
        mission:
          "Generating continuous, authentic handwritten-style text sequences using deep learning sequence-to-sequence modeling.",
        description:
          "Implemented a character-level Recurrent Neural Network (RNN) in TensorFlow/Keras to model temporal character dependencies and generate realistic text.",
        tags: ["Deep Learning", "RNN", "TensorFlow", "Keras"],
        appLink: null,
        repoLink:
          "https://github.com/Painx9/CODSOFT_TASKNO/tree/main/CODSOFT_TASK5",
      },
    ],
  },
];
