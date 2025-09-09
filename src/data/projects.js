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