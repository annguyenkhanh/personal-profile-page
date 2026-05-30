export const personalInfo = {
  name: "Nguyen Khanh An",
  role: "Software Engineer · Embedded Systems",
  tagline: "Engineer\nacross every layer",
  bio: "From IoT systems and network infrastructure to full-stack web apps and embedded firmware — I build across the entire stack. Currently deepening my embedded expertise with STM32, RTOS, and Embedded Linux at FPT Telecom.",
  location: "Ho Chi Minh City, Vietnam",
  email: "annguyen81401@gmail.com",
  phone: "079 823 3666",
  github: "https://github.com/annguyenkhanh",
  linkedin: "https://linkedin.com/in/annguyenkhanh",
  cvUrl: "/cv/annguyenkhanh.pdf",
  stats: [
    { number: "4+", label: "Years experience" },
    { number: "2", label: "IEEE publications" },
    { number: "3", label: "Engineering domains" },
  ],
};

export const skills = {
  core: ["C / C++", "STM32", "RTOS / AK-mOS", "Embedded Linux", "Python"],
  other: [
    // Web / Fullstack
    "ReactJS", "Next.js", "JavaScript", "Retool", "Shell",
    // IoT & Hardware
    "Raspberry Pi", "Orange Pi", "Arduino", "ThingsBoard", "MQTT",
    // Networking & Infra
    "Grafana", "Libre NMS", "TCP/IP", "Firewall", "Docker",
    // Other
    "Git & GitHub", "PostgreSQL",
  ],
};

export const projects = [
  {
    title: "CPE Automated Testing — Orange Pi",
    description:
      "Built an automated testing system for CPE devices on Orange Pi 5B+ at FPT Telecom. Python handles the core test logic, JavaScript powers the mini backend, and a custom frontend handles UI — all containerized with Docker.",
    icon: "🖥️",
    tech: ["Python", "JavaScript", "Docker", "Orange Pi 5B+"],
    featured: true,
    live: false,
    demoUrl: "",
    githubUrl: "https://github.com/annguyen81401/cpe-tester",
  },
  {
    title: "Web Monitor for 4M+ CPEs",
    description:
      "Template-based monitoring dashboard for over 4 million Customer Premises Equipment at FPT Telecom, built on Retool with custom ReactJS components. Also developed a TR-369 portal for device monitoring and control.",
    icon: "📡",
    tech: ["Retool", "ReactJS", "TR-369", "JavaScript"],
    featured: true,
    live: false,
    demoUrl: "",
    githubUrl: "https://github.com/annguyen81401/web-monitor",
  },
  {
    title: "Mini Game Dungeon — STM32",
    description:
      "A mini dungeon game running bare-metal on the AK Embedded Kit. MCU is STM32L151, assets stored on NOR Flash W25Q80, rendered on LCD SSD1306. Built to learn embedded systems fundamentals.",
    icon: "🎮",
    tech: ["STM32L151", "C", "NOR Flash W25Q80", "LCD SSD1306"],
    featured: false,
    live: false,
    demoUrl: "",
    githubUrl: "https://github.com/annguyenkhanh/Game-Dungeon",
  },
  // {
  //   title: "Arduino PID — Drone Motor",
  //   description:
  //     "Single-axis PID controller using Arduino, MPU6050 GY-521 IMU, and a drone motor. Implemented and tuned PID parameters to achieve stable balancing. A hands-on dive into control systems.",
  //   icon: "🚁",
  //   tech: ["Arduino", "C++", "MPU6050", "PID Control"],
  //   featured: false,
  //   live: false,
  //   demoUrl: "",
  //   githubUrl: "https://github.com/annguyen81401/pid-drone-motor",
  // },
  {
    title: "IoT Conveyor Belt Monitor",
    description:
      "Management system for monitoring a t-shirt printing conveyor belt at VNU.DC. Real-time data visualized on ThingsBoard for operational oversight and efficiency.",
    icon: "🏭",
    tech: ["IoT", "ThingsBoard", "Embedded C"],
    featured: false,
    live: false,
    demoUrl: "",
    githubUrl: "https://github.com/annguyen81401/conveyor-monitor",
  },
  {
    title: "Face Recognition — Raspberry Pi",
    description:
      "Real-time face recognition system running on Raspberry Pi 4, built with Python. A personal project to explore computer vision on constrained hardware.",
    icon: "👁️",
    tech: ["Python", "Raspberry Pi 4", "OpenCV"],
    featured: false,
    live: false,
    demoUrl: "",
    githubUrl: "https://github.com/annguyen81401/face-recognition-rpi",
  },
];

export const experience = [
  {
    period: "Jun 2024 — May 2026",
    role: "Software Engineer",
    company: "FPT Telecom",
    type: "Full-time",
    description:
      "Building CPE automation systems with Python and JavaScript on Orange Pi 5B+, all deployed via Docker. Developing a Retool-based web monitor for 4M+ CPEs with custom ReactJS components, and a TR-369 portal for device management. Also studying Embedded Linux with STM32 and RTOS with AK-mOS.",
  },
  {
    period: "Nov 2023 — May 2024",
    role: "Network Intern",
    company: "VNG Corporation",
    type: "Internship",
    description:
      "Configured and monitored VNG's network systems using Grafana and Libre. Managed core infrastructure including Firewall, Internet Gateway, and policy systems for 4,000+ employees. Participated in deploying VNG offices worldwide. Reduced issue resolution time by 40% — from 3 hours down to ~2h15m.",
  },
  {
    period: "May 2021 — May 2022",
    role: "IoT Intern",
    company: "VNU.DC",
    type: "Internship",
    description:
      "Developed a real-time management system to monitor a t-shirt printing conveyor belt. Visualized operational data on ThingsBoard, improving real-time oversight and operational efficiency.",
  },
];

export const publications = [
  {
    title: "Blockchain-based Reconfiguration Management For Smart City Architecture",
    venue: "IEEE Xplore",
    date: "August 2024",
    url: "https://ieeexplore.ieee.org",
    authors: "An Nguyen-Khanh, Tri Le-Dinh, Bao Nguyen-Van, Thuat Nguyen-Khanh, Quan Le-Trung",
  },
  {
    title: "GPS Signal Reception and Spoofing Based on Software-Defined Radio Devices",
    venue: "IEEE Xplore",
    date: "January 2023",
    url: "https://ieeexplore.ieee.org",
    authors: "Tang Nguyen-Tan, Long Thai Hoang, An Khanh Nguyen, Tien Do Minh, Binh Bui-Thanh, Phuoc Nguyen T. H",
  },
];

export const education = {
  school: "University of Information Technology (UIT)",
  major: "Computer Network and Data Communication",
  gpa: "7.42",
};

export const certificates = [
  { name: "CCNA 200-301", date: "Dec 2021", score: "59 — Good" },
  { name: "TOEIC Listening & Reading", score: "650" },
  { name: "TOEIC Speaking & Writing", score: "240" },
];
