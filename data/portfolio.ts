export type Project = {
  title: string;
  year?: string;
  category: "Graduate" | "Undergrad";
  tags: readonly string[];
  shortDesc: string;
  details: {
    overview: string;
    highlights: readonly string[];
    stack: readonly string[];
    outcomes?: readonly string[];
    github?: string;
    demo?: string;
  };
};

export type Experience = {
  title: string;
  org: string;
  location?: string;
  duration: string;
  badges?: readonly string[];
  bullets: readonly string[];
};

export type Education = {
  degree: string;
  school: string;
  duration: string;
  gpa: string;
  chips?: readonly string[];
};

export type SkillGroup = {
  title: string;
  items: readonly string[];
};

const basePath =
  process.env.NODE_ENV === "production" ? "/portfoliosite-final" : "";

export const portfolioData = {
  nameShort: "SR",
  name: "Santhosh Reddy",
  headlinePill: "MASTER OF COMPUTER SCIENCE @ UIC",
  quote: "Be water, my friend!",
  status: "Actively seeking 2026 roles",

  email: "skata9@uic.edu",
  socials: {
    github: "https://github.com/Santhosh1408",
    linkedin: "https://www.linkedin.com/in/santhoshreddy5/",
    instagram: "https://www.instagram.com/_.santhosh_reddy._",
    outlook: "mailto:skata9@uic.edu",
  },

  profileImages: [
    `${basePath}/ProfileA.jpg`,
    `${basePath}/ProfileB.jpg`,
    `${basePath}/ProfileC.jpg`,
    `${basePath}/ProfileH.jpg`,
    `${basePath}/ProfileF.jpg`,
    `${basePath}/ProfileG.jpg`,
  ] as const,

  heroSkillChips: [
    { label: "Machine Learning" },
    { label: "Deep Learning" },
    { label: "NLP" },
    { label: "Computer Vision" },
    { label: "ML on Graphs" },
    { label: "Software Development" },
    { label: "Full Stack" },
    { label: "Data Science" },
    { label: "Data Engineering" },
  ] as const,

  aboutTerminal: {
    filename: "PROFILE_SUMMARY.py",
    codeLead: ">>> print(santhosh.biography)",
    title: "class About:",
    defaultText:
      "I am a Machine Learning Engineer passionate about building intelligent systems that are useful, scalable, and grounded in real-world applications. My primary interests lie in machine learning and deep learning, where I enjoy designing models, experimenting with modern architectures, and developing end-to-end AI systems that turn ideas into practical solutions.\n\nI particularly enjoy taking concepts from early ideas to fully working systems, whether that involves developing ML models, building clean backend services, or integrating AI into real products that people can use. My focus is always on creating solutions that are both technically strong and practically valuable.\n\nI am currently pursuing a Master’s degree in Computer Science at the University of Illinois Chicago, where I continue to deepen my understanding of machine learning, artificial intelligence, and scalable software systems. I enjoy learning quickly, building fast, and collaborating with people who care about creating high-quality technology. My long-term goal is to develop deep learning systems that create meaningful impact in the real world.",
    moreText:
      "Looks like you're curious about me. Alright, go ahead!\n\nI’m originally from Chennai, Tamil Nadu, a place that shaped a huge part of who I am. Chennai taught me how to love people, respect others, and value community. I studied from kindergarten through higher secondary at Bethel Matriculation Higher Secondary School, a place filled with some of the happiest memories of my life. It’s where I met friends who are still a huge part of my life today. I was involved in many activities there and was also part of my school volleyball team. It was during those years that my interest in computer science began, which later led me to choose it as my major.\n\nI later joined SRM Institute of Science and Technology in Chennai for my bachelor’s degree. Our batch had a unique start because of COVID, and we didn’t get to experience our first year on campus. College truly began in the second year, surrounded by new faces and new experiences. That phase taught me many lessons about life and helped shape me into someone stronger and more independent. Those experiences eventually led me to one of the biggest decisions of my life pursuing my Master’s in Computer Science in the United States.\n\nFrom the streets of Chennai, I flew halfway across the world to Chicago, where I now continue my journey at the University of Illinois Chicago. No matter where life takes me, Chennai will always feel like home. Outside of technology, I enjoy driving, traveling, dancing, cooking, hiking, and spending time with friends. I also love sports like volleyball, badminton, football, and carrom anything fun and competitive. I often describe myself as a jack of many trades, still exploring what I will eventually master.\n\nFreedom is something I value deeply. To me, freedom means having the courage to choose your own path, take responsibility for your decisions, and grow through every experience life offers.\n\nFrom flying kites in Chennai to building systems and studying computer science in Chicago, the journey has been incredible so far. I’m still exploring, still learning, and still pushing myself to grow. And just like the philosophy I live by “Be water, my friend”, I plan to keep adapting, keep building, and keep moving forward toward creating technology that genuinely makes life better.",
  },

  career: {
    title: "Career & Growth",
    subtitle:
      "A data-driven journey through research, engineering, and continuous learning in the fields of Deep Learning and Software Systems.",
  },

  experience: [
    {
      title: "Research Assistant",
      org: "UI Health",
      location: "Chicago, IL",
      duration: "Jan 2025 — Present",
      badges: ["CURRENT ROLE", "RESEARCH"],
      bullets: [
        "Contribute to AI-driven healthcare projects focused on patient support and clinical decision-making.",
        "Developed an AI-powered recipe recommendation system using a RAG-style pipeline.",
        "Integrated the system into a full web app with FastAPI backend and a modern UI.",
      ],
    },
    {
      title: "IT Support Specialist",
      org: "UIC (University of Illinois Chicago)",
      location: "Chicago, IL",
      duration: "Jun 2025 — Present",
      badges: ["CURRENT ROLE"],
      bullets: [
        "Provide technical support: OS deployment, software installs, and troubleshooting.",
        "Resolve network/Wi-Fi issues and support production IT environments across campus.",
        "Support conference rooms and live events (Zoom setups, AV troubleshooting).",
      ],
    },
    {
      title: "Software Intern",
      org: "Soft Logic",
      location: "Remote",
      duration: "Jun 2023 — Aug 2023",
      bullets: [
        "Worked with senior developers on production software and backend services.",
        "Built/consumed REST APIs and contributed to engineering best practices (Git, Agile).",
      ],
    },
  ] as readonly Experience[],

  education: [
    {
      degree: "MS in Computer Science",
      school: "University of Illinois Chicago",
      duration: "Aug 2024 — May 2026",
      gpa: "3.6 / 4.0",
      chips: [
        "Deep Learning",
        "Machine Learning",
        "Computer Vision",
        "NLP",
        "ML on Graphs",
        "Data Science",
        "Algorithms",
      ],
    },
    {
      degree: "B.Tech in Engineering",
      school: "SRM Institute of Science & Tech",
      duration: "Jul 2020 — May 2024",
      gpa: "3.64 / 4.0",
      chips: ["Data Structures", "DBMS", "OS", "Software Engineering"],
    },
  ] as readonly Education[],

  skills: {
    title: "Technical Proficiencies",
    groups: [
      {
        title: "Machine Learning & AI",
        items: [
          "PyTorch",
          "TensorFlow",
          "Transformers",
          "Scikit-learn",
          "Deep Learning",
          "Natural Language Processing",
          "Model Optimization",
        ],
      },
      {
        title: "Data Science & Analytics",
        items: [
          "Pandas",
          "NumPy",
          "SQL",
          "PySpark",
          "Data Visualization",
          "Feature Engineering",
          "ETL Pipelines",
        ],
      },
      {
        title: "Software Development",
        items: [
          "Python",
          "Java",
          "FastAPI",
          "Flask",
          "REST APIs",
          "Docker",
          "Git",
        ],
      },
    ] as readonly SkillGroup[],
  },

  projectsSection: {
    title: "Projects",
    subtitle:
      "Research-driven builds across Machine Learning, Computer Vision, NLP, and software systems. Click “Details” on any project to see the full story.",
  },

  projects: [
    {
      title: "Graph Neural Networks for Audio Source Separation and Graph Unlearning",
      year: "2026",
      category: "Graduate",
      tags: ["GNN", "Deep Learning", "Audio", "Ongoing"],
      shortDesc:
        "Building a graph-based pipeline for audio source separation, with graph unlearning as the long-term objective.",
      details: {
        overview:
          "This ongoing project focuses on modeling mixed audio signals using Graph Neural Networks. The first phase involves implementing and training a GNN to learn relationships between mixed sources and reconstruct cleaner signals. The long-term research goal is to extend the system toward graph unlearning, enabling selective removal of unwanted source influence or bleed after training.",
        highlights: [
          "Constructing graph representations for multi-source audio signals.",
          "Training a GNN baseline for source separation as the first milestone.",
          "Extending toward graph unlearning for selective bleed removal.",
        ],
        stack: ["Python", "PyTorch", "GNN", "Signal Processing"],
      },
    },
    {
      title: "Deep Stereo Regression with AdaBins Loss for Depth Estimation",
      year: "2026",
      category: "Graduate",
      tags: ["Computer Vision", "Deep Learning", "Depth Estimation", "Ongoing"],
      shortDesc:
        "Developing a deep stereo regression pipeline using 3D cost volumes and AdaBins-based supervision.",
      details: {
        overview:
          "This project explores dense depth estimation from stereo image pairs using a 3D cost-volume architecture. The model integrates a Siamese CNN backbone, encoder-decoder regularization, and soft argmin regression. AdaBins loss is used to study whether adaptive distribution-aware supervision improves disparity prediction.",
        highlights: [
          "Implemented 3D cost-volume stereo regression architecture.",
          "Integrated AdaBins loss for adaptive depth estimation.",
          "Training with Scene Flow pretraining and KITTI fine-tuning.",
        ],
        stack: ["Python", "PyTorch", "Stereo Vision", "Scene Flow", "KITTI"],
      },
    },
    {
      title: "Distribution-Aware Visual Prompt Tuning for Lung Cancer Risk Prediction",
      year: "2024",
      category: "Graduate",
      tags: ["Computer Vision", "Deep Learning"],
      shortDesc:
        "Improved lung cancer risk prediction using Vision Transformers and distribution-aware prompt tuning.",
      details: {
        overview:
          "Built a slice-based Vision Transformer pipeline for lung cancer risk prediction using CT scans. Applied Distribution-Aware Visual Prompt Tuning (DA-VPT) on a frozen backbone to improve model performance.",
        highlights: [
          "Integrated medical foundation models with ViT architecture.",
          "Implemented DA-VPT for parameter-efficient fine-tuning.",
          "Improved AUC-ROC from 0.65 to 0.77.",
        ],
        stack: ["Python", "PyTorch", "HuggingFace", "MLflow"],
      },
    },
    {
      title: "De-Expression Residue Learning",
      year: "2024",
      category: "Graduate",
      tags: ["Computer Vision", "GANs"],
      shortDesc:
        "Generated de-expressed facial images using residue learning and GAN-based architectures.",
      details: {
        overview:
          "Developed a residue-learning-based approach for removing expressions from facial images using a U-Net generator and custom loss functions.",
        highlights: [
          "Designed U-Net generator for high-quality de-expression.",
          "Implemented residue-based learning mechanism.",
          "Used custom loss for expression disentanglement.",
        ],
        stack: ["Python", "PyTorch", "TensorFlow", "OpenCV"],
      },
    },
    {
      title: "Cancer Nutrition Analytics Dashboard",
      year: "2023",
      category: "Graduate",
      tags: ["Full Stack", "Data Visualization"],
      shortDesc:
        "Interactive dashboard for analyzing nutrition and lifestyle data across patient cohorts.",
      details: {
        overview:
          "Designed a full-stack dashboard for exploring patient nutrition data and behavioral trends with interactive visualizations.",
        highlights: [
          "Built cross-filtering visual analytics.",
          "Enabled cohort comparisons and insights.",
          "Developed clean UI for clinicians.",
        ],
        stack: ["React", "D3.js", "TypeScript"],
      },
    },
    {
      title: "Neural Machine Translation (French → English)",
      year: "2024",
      category: "Graduate",
      tags: ["NLP"],
      shortDesc:
        "Built translation models using Seq2Seq LSTM and Transformer architectures.",
      details: {
        overview:
          "Implemented an end-to-end neural machine translation pipeline using LSTM and Transformer models with BLEU-based evaluation.",
        highlights: [
          "Implemented Seq2Seq with attention and Transformer models.",
          "Used BLEU score for evaluation.",
          "Handled preprocessing, tokenization, and batching.",
        ],
        stack: ["Python", "TensorFlow", "NLTK"],
      },
    },
    {
      title: "Progressive In-Context Alignment (PICA)",
      year: "2025",
      category: "Graduate",
      tags: ["NLP", "LLMs"],
      shortDesc:
        "Reproduced PICA using LLaMA2-7B to study in-context learning behavior.",
      details: {
        overview:
          "Implemented Zero-shot, Vanilla ICL, and PICA setups using LLaMA2-7B and evaluated performance with multiple metrics.",
        highlights: [
          "Built prompt pipelines for ICL experiments.",
          "Evaluated using BLEU, ROUGE, cosine similarity.",
          "Analyzed generation quality under token constraints.",
        ],
        stack: ["PyTorch", "HuggingFace", "LLaMA2"],
      },
    },
    {
      title: "Learning-Based Airline Delay Estimation",
      year: "2024",
      category: "Graduate",
      tags: ["Data Engineering"],
      shortDesc:
        "Predicted flight delays using large-scale data and feature engineering.",
      details: {
        overview:
          "Developed a predictive system using flight and weather data with scalable processing and feature engineering.",
        highlights: [
          "Handled data imbalance and preprocessing.",
          "Built scalable pipelines with PySpark.",
          "Performed exploratory data analysis for insights.",
        ],
        stack: ["PySpark", "Python", "SQL", "Pandas"],
      },
    },
    {
      title: "Voice Mask",
      year: "2024",
      category: "Graduate",
      tags: ["Deep Learning", "Audio"],
      shortDesc:
        "Modified speaker identity while preserving content using deep learning.",
      details: {
        overview:
          "Built a voice transformation system using GAN architectures to alter speaker identity.",
        highlights: [
          "Implemented GAN-based voice conversion.",
          "Focused on content preservation.",
          "Explored CycleGAN and HiFi-GAN approaches.",
        ],
        stack: ["PyTorch", "Librosa", "GANs"],
      },
    },
    {
      title: "E-Commerce Analytics & Recommendation Platform",
      year: "2024",
      category: "Graduate",
      tags: ["Full Stack", "Recommendation Systems"],
      shortDesc:
        "Built a data-driven recommendation and analytics platform for e-commerce insights.",
      details: {
        overview:
          "Developed a platform that analyzes user behavior and generates personalized product recommendations using data pipelines and analytics.",
        highlights: [
          "Built recommendation engine using user behavior data.",
          "Developed analytics dashboards for insights.",
          "Integrated backend APIs for real-time recommendations.",
        ],
        stack: ["Python", "SQL", "Pandas", "Flask"],
      },
    },
    {
      title: "Towards Accelerating and Interpretable Weather Forecasting",
      year: "2023",
      category: "Undergrad",
      tags: ["Deep Learning"],
      shortDesc:
        "Developed a deep learning model for efficient and interpretable weather forecasting.",
      details: {
        overview:
          "Built a deep-learning-based weather prediction model to improve efficiency over traditional numerical methods.",
        highlights: [
          "Used probabilistic forecasting techniques.",
          "Integrated inductive biases for better generalization.",
          "Reduced computational cost compared to NWP models.",
        ],
        stack: ["Python", "PyTorch"],
      },
    },
    {
      title: "Stock Price Prediction using LSTM",
      year: "2022",
      category: "Undergrad",
      tags: ["Machine Learning"],
      shortDesc:
        "Predicted stock prices using LSTM-based time series modeling.",
      details: {
        overview:
          "Implemented LSTM-based forecasting using historical stock data and evaluated predictions visually.",
        highlights: [
          "Performed data preprocessing and scaling.",
          "Built sequence-based LSTM models.",
          "Compared predicted vs actual trends.",
        ],
        stack: ["TensorFlow", "Pandas", "Matplotlib"],
      },
    },
    {
      title: "Mall Customer Segmentation",
      year: "2022",
      category: "Undergrad",
      tags: ["Data Science"],
      shortDesc:
        "Segmented customers using clustering techniques for targeted marketing.",
      details: {
        overview:
          "Applied K-Means clustering to group customers based on behavior and spending patterns.",
        highlights: [
          "Performed exploratory data analysis.",
          "Used clustering for segmentation.",
          "Derived actionable business insights.",
        ],
        stack: ["Python", "Scikit-learn", "Pandas"],
      },
    },
    {
      title: "Smart Health Diagnosis App",
      year: "2023",
      category: "Undergrad",
      tags: ["Full Stack"],
      shortDesc:
        "Web app predicting diseases from symptoms using ML models.",
      details: {
        overview:
          "Built a Flask-based application that predicts diseases using ML models and stores user data in a database.",
        highlights: [
          "Integrated ML model with backend API.",
          "Designed responsive UI.",
          "Implemented database-driven workflow.",
        ],
        stack: ["Flask", "TensorFlow", "MySQL"],
      },
    },
  ] as readonly Project[],

  resumesPage: {
    title: "Resume",
    subtitle:
      "View my latest resume in the browser or download it as a PDF.",
    cards: [
      {
        title: "Santhosh Reddy Resume",
        pdfUrl: `${basePath}/resumes/Santhosh_Resume.pdf`,
      },
    ] as const,
  },
} as const;

export type PortfolioData = typeof portfolioData;
