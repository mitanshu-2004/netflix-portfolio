



export const aboutData = {
  name: "Mitanshu Goel",
  title: "Software Engineer",
  description: "I am an engineering student with a passion for building intelligent software. I have a strong foundation across multiple domains, specializing in robotics software, artificial intelligence, and full-stack development. I enjoy tackling complex challenges by engineering creative and robust software solutions.",
  specializations: [
    "IoT & Embedded Systems",
    "Robotics & Automation",
    "AI & Machine Learning",
    "Full-Stack Development",
  ],
  introBackgroundImage: '/bg.gif', // Added for HeroBanner introduction background
  fallbackIntroIcon: 'MonitorPlay', // Fallback icon for HeroBanner introduction
  fallbackImageOffIcon: 'ImageOff', // Fallback icon when image is not available
};

export const experienceData = [
  {
    title: "AI and Robotics Intern - SarthakAI",
    description: "Designing automated sorting systems combining computer vision and robotics for intelligent package handling. Building sensor networks using Raspberry Pi 4 and ESP32 microcontrollers for real-time data collection. Developing voice-controlled AI assistant using NVIDIA NeMo framework for hands-free system commands and task automation.",
    tech: ["NVIDIA NeMo", "Raspberry Pi", "ESP32", "Computer Vision", "PyTorch", "OpenCV", "YOLO", "Voice AI"],
    github: "",
    hasGithub: false,
    live: "",
    hasLive: false,
    backgroundIcon: "BrainCircuit",
    image: '/sarthhak.png', // Placeholder GIF
  },
  {
    title: "Robotics Intern - Nextup Robotics",
    description: "Developing advanced motion planning algorithms for 6-DOF robotic manipulators using MoveIt framework and ROS Noetic. Implementing inverse kinematics solutions and trajectory optimization for pick-and-place operations. Targeting 30% reduction in task execution time through optimized path planning and real-time collision avoidance systems.",
    tech: ["ROS", "MoveIt", "C++", "Motion Planning", "Gazebo", "URDF", "Inverse Kinematics"],
    github: "",
    hasGithub: false,
    live: "",
    hasLive: false,
    backgroundIcon: "Bot",
    image: '/nextup.png', // Placeholder GIF
  },
  {
    title: "Core Member - A.T.O.M Robotics",
    description: "Developed hexapod walking robot with adaptive gait control and 6-DOF robotic arm for precision manipulation. Competed in ABU Robocon and International Rover Challenge (IRC). Organized technical workshops on embedded robotics, ROS development, and AI integration for fellow students, fostering campus-wide technical learning.",
    tech: ["Hexapod Design", "6-DOF Robotics", "ROS", "Arduino", "Competition Robotics", "Team Leadership", "Technical Workshops"],
    github: "",
    hasGithub: false,
    live: "",
    hasLive: false,
    backgroundIcon: "Users",
    image: '/atom.png', // Placeholder GIF
  },
];


export const roboticsProjects = [
  {
    title: "6 DOF Robotic ARM",
    description:
      "Designed, assembled, and programmed a complete 6-DOF robotic arm system from scratch. ROS-based motion planning with MoveIt, and a custom web interface for remote teleoperation. Includes real-time video feedback via OpenCV and WebSocket-based command execution for seamless human-robot interaction.",
    tech: ["Arduino Mega", "ROS", "MoveIt", "Gazebo", "Python", "C++", "JavaScript", "WebSockets", "OpenCV"],
    github: "https://github.com/atom-robotics-lab/arm",
    hasGithub: true,
    hasLive: false,
    backgroundIcon: "Hand",
    image: '/arm.png', // Placeholder GIF
  },
  {
    title: "HEXAPOD Walking Robot",
    description:
      "Developed stable locomotion algorithms for a six-legged robot using inverse kinematics and custom gait patterns. Simulated in ROS2/Gazebo environment, then deployed on physical hardware via Raspberry Pi using Dockerized ROS2 systems. Features adaptive gait control for various terrains and real-time stability monitoring.",
    tech: ["ROS2", "Gazebo", "Rviz", "Raspberry Pi", "Docker", "Python", "Fusion 360", "ROS2 Control", "Inverse Kinematics"],
    github: "https://github.com/atom-robotics-lab/hexapod",
    hasGithub: true,
    hasLive: false,
    backgroundIcon: "Bug",
    image: '/hexapod.png', // Placeholder GIF
  },
  {
    title: "SENTINEL - Mesh Safety Network",
    description:
      "Engineered an offline mesh-network safety system using ESP32 microcontrollers and ESP-NOW protocol. Features automatic fall detection via MPU6050 sensors, gas leak monitoring, and self-relaying emergency alerts. Designed for environments without Wi-Fi infrastructure, creating autonomous safety networks for remote locations.",
    tech: ["ESP32", "ESP-NOW", "C++", "Python", "Arduino IDE", "MPU6050", "Gas Sensors", "Mesh Networking"],
    hasGithub: false,
    hasLive: false,
    backgroundIcon: "Network",
    image: '/sentinel.png', // Placeholder GIF
  },
];

export const softwareProjects = [
  {
    title: "AI MEMORY VAULT",
    description:
      "Built an intelligent personal memory assistant using semantic search capabilities. Features FastAPI backend with ChromaDB vector database for AI-powered note retrieval using Sentence Transformers. React frontend provides intuitive organization, tagging, and natural language search through personal memories and documents.",
    tech: ["FastAPI", "Python", "ChromaDB", "Sentence Transformers", "React", "JavaScript", "Vector Search", "AI/ML"],
    hasGithub: true,
    github: "https://github.com/mitanshu-2004/memory",
    hasLive: false,
    backgroundIcon: "Brain",
    image: '/memory.png', // Placeholder image
  },
  {
    title: "Stock Analysis Platform",
    description:
      "Developed a comprehensive web application for analyzing correlations between user-provided datasets and historical stock prices. Features CSV upload processing, integration with Yahoo Finance API, and advanced statistical analysis using Pearson, Spearman, and Kendall correlation methods with interactive data visualizations.",
    tech: ["FastAPI", "Python", "Pandas", "NumPy", "SciPy", "yfinance", "React", "JavaScript", "Data Analysis"],
    github: "https://github.com/mitanshu-2004/stock",
    live: "https://stock-influence.vercel.app/",
    hasGithub: true,
    hasLive: true,
    backgroundIcon: "LineChart",
    image: '/stock.png', // Placeholder image
  },
  {
    title: "Interactive Chess Platform",
    description:
      "Built a real-time multiplayer chess game with AI integration. Features move validation, Stockfish engine integration for AI gameplay, Firebase real-time synchronization for multiplayer matches, and Express backend for game state management. Includes move evaluation and analysis features for player improvement.",
    tech: ["React", "JavaScript", "Stockfish Engine (UCI)", "Node.js", "Express", "Firebase", "Real-time APIs"],
    github: "https://github.com/mitanshu-2004/chess",
    live: "https://chess-two-black.vercel.app/",
    hasGithub: true,
    hasLive: true,
    backgroundIcon: "Puzzle",
    image: '/chess.png', // Placeholder image
  },
];


export const skillsData = [
  {
    title: "Programming Languages",
    backgroundIcon: "Code",
    image: "/programming.png",
    skills: [
      { name: "Python", icon: "Code" },
      { name: "C++", icon: "SquareCode" },
      { name: "JavaScript", icon: "FileJson" },
      { name: "C", icon: "C" },
      { name: "SQL", icon: "Database" },
    ],
  },
  {
    title: "Robotics & Computer Vision",
    backgroundIcon: "Cpu",
    image: "/robotics.png",
    skills: [
      { name: "ROS", icon: "Bot" },
      { name: "MoveIt", icon: "Move" },
      { name: "Gazebo", icon: "Gazebo" },
      { name: "OpenCV", icon: "Camera" },
      { name: "YOLO", icon: "Target" },
    ],
  },
  {
    title: "Web Development",
    backgroundIcon: "Globe",
    image: "/web.png",
    skills: [
      { name: "React", icon: "Atom" },
      { name: "FastAPI", icon: "Activity" },
      { name: "Express", icon: "Server" },
      { name: "Tailwind CSS", icon: "Palette" },
    ],
  },
  {
    title: "AI/ML & Scientific Computing",
    backgroundIcon: "Brain",
    image: "/ai.png",
    skills: [
      { name: "Pandas", icon: "Table" },
      { name: "NumPy", icon: "Sigma" },
      { name: "SciPy", icon: "SciPy" },
      { name: "Transformers", icon: "Brain" },
    ],
  },
  {
    title: "Databases & Data",
    backgroundIcon: "Database",
    image: "/database.png",
    skills: [
      { name: "PostgreSQL", icon: "Database" },
      { name: "MongoDB", icon: "Database" },
      { name: "MySQL", icon: "MySQL" },
      { name: "ChromaDB", icon: "SwatchBook" },
    ],
  },
  {
    title: "Tools & Platforms",
    backgroundIcon: "Wrench",
    image: "/tools.png",
    skills: [
      { name: "Git", icon: "GitBranch" },
      { name: "Docker", icon: "Package" },
      { name: "Linux", icon: "Linux" },
      { name: "Fusion 360", icon: "Box" },
    ],
  },
];

export const socialLinksData = [
  {
    href: "https://github.com/mitanshu-2004",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/mitanshu-goel-177624248",
    label: "LinkedIn",
  },
  {
    href: "mailto:mitanshug2004@gmail.com",
    label: "Email",
  },
  {
    href: "https://www.instagram.com/mitanshu._.05/",
    label: "Instagram",
  },
];

export const footerData = {
  name: "Mitanshu",
  description: "Systems engineer focused on building integrated solutions that bridge hardware and software—from embedded robotics to AI-powered applications.",
  quickLinks: [
    { name: "About", id: "hero-about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" }
  ],
  contact: [
    { type: "email", value: "mitanshug2004@gmail.com" },
    { type: "location", value: "Delhi, India" },
    { type: "phone", value: "+91 8595657583" },
  ]
};