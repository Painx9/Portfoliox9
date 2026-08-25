# PortfolioX9 — Netflix-Inspired AI & ML Portfolio

A cinematic, Netflix-themed developer portfolio website built with React, Vite, Tailwind CSS, and GSAP. Designed and engineered by **Deep Patel**, an AI & Machine Learning Engineer based in Hamburg, Germany, and currently pursuing an M.Sc. in Artificial Intelligence at Brandenburg University of Technology (BTU).

---

## 🚀 Features & Architecture

* **Cinematic Netflix Theme**: Dark-mode aesthetic featuring custom red accents (`#E50914`), immersive typography, and smooth interactive UI elements.
* **Interactive Intro & Preloader**: Custom Netflix-style preloader and dynamic marquee title animations.
* **Dynamic Education Timeline**: Interactive timeline detailing academic milestones from BTU Cottbus-Senftenberg and Parul University.
* **3D Tilt & Glassmorphism Cards**: Smooth mouse-tracking glare effects and depth-perspective component cards.
* **Projects Matrix**: Centralized project dataset showcasing core repositories, autonomous agent frameworks, and generative AI pipelines.
* **Responsive Design**: Fully optimized layout for seamless viewing across mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

* **Core Framework**: React (Vite)
* **Styling**: Tailwind CSS
* **Animations**: GSAP (GreenSock Animation Platform) & ScrollTrigger
* **Deployment**: Vercel

---

## 📂 Repository Structure

Based on your project file tree, the layout is organized as follows:

```text
portfoliox9/
├── public/                 # Static assets
│   ├── favicon.svg         # Browser tab icon
│   └── icons.svg           # UI vector icons sprite sheet
├── src/
│   ├── assets/Portfolio/   # Visual assets (e.g., picture.png)
│   ├── components/         # Modular React components
│   │   ├── About.jsx       # Bio, background, and linguistic profile
│   │   ├── Contact.jsx     # Contact links and form endpoints
│   │   ├── CustomCursor.jsx# Interactive custom mouse pointer
│   │   ├── Education.jsx   # Dynamic academic timeline component
│   │   ├── Expertise.jsx   # Technical domain highlights
│   │   ├── Footer.jsx      # Page footer, navigation, and copyright
│   │   ├── Hero.jsx        # Landing section with marquee roles & 3D tilt card
│   │   ├── NetflixPreloader.jsx # Cinematic intro sequence
│   │   ├── Projects.jsx    # Repository showcase matrix
│   │   └── Skills.jsx      # Technical skills matrix cards
│   ├── data/               # Centralized data files
│   │   └── projectsData.js # Structured datasets for project entries
│   ├── App.css             # Global layout adjustments and custom styles
│   ├── App.jsx             # Main component orchestration and routing sequence
│   ├── index.css           # Tailwind CSS configuration imports
│   └── main.jsx            # React root entry point
├── .gitattributes          # Git source control attributes
├── LICENSE                 # Open-source license agreement
├── README.md               # Project documentation
├── eslint.config.js        # ESLint code linting rules
├── index.html              # HTML root template & SEO meta tags
├── package-lock.json       # Locked dependency versions
├── package.json            # Project dependencies and npm scripts
└── vite.config.js          # Vite build and bundler configuration
