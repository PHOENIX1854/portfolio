const profileData = {
  builder: {
    code: "AS-ML-01",
    title: "Applied AI builder",
    copy:
      "I am a Computer Science and Engineering student at VIT University building practical AI systems that move from model training to deployed software: detection pipelines, Android privacy tools, real-time video systems, and edge-device workflows.",
    focus: "ML + CV",
    stack: "PyTorch, YOLO, Flask",
    output: "Deployed projects",
    signals: ["YOLOv8/v11", "OpenCV", "REST APIs", "Raspberry Pi"],
    details: [
      [
        "Education foundation",
        "B.Tech in Computer Science and Engineering at VIT University, Chennai, with a project-heavy path across AI, Android, and full-stack systems.",
      ],
      [
        "Build pattern",
        "I connect models to usable interfaces, databases, APIs, streams, reports, and deployment targets instead of stopping at notebook results.",
      ],
      [
        "Working style",
        "Comfortable with Git, Linux, Docker, cloud tooling, Jupyter, VS Code, PyCharm, and IntelliJ while managing end-to-end workflows.",
      ],
    ],
  },
  vision: {
    code: "AS-CV-02",
    title: "Computer vision under real-world pressure",
    copy:
      "My strongest lane is turning video into action: accident detection with YOLOv11, airplane detection with YOLOv8n, live and recorded footage pipelines, and alert-ready systems for smart-city and infrastructure use cases.",
    focus: "Object detection",
    stack: "YOLOv8, YOLOv11, OpenCV",
    output: "Live inference",
    signals: ["Traffic footage", "mAP50 0.80", "Precision 0.85", "Emergency alerts"],
    details: [
      [
        "Accident detection",
        "Built a YOLOv11 traffic-surveillance pipeline for live and recorded footage with alert triggering for emergency-response workflows.",
      ],
      [
        "Airplane detector",
        "Trained YOLOv8n on a custom airplane dataset, reaching mAP50 of 0.80 and precision of 0.85 before edge deployment.",
      ],
      [
        "Video authenticity",
        "Engineered a Chrome extension and Flask backend that samples frames, uses CLIP embeddings, and displays real-time confidence scores.",
      ],
    ],
  },
  android: {
    code: "AS-APP-03",
    title: "Privacy-first Android thinking",
    copy:
      "PrivacyLens reflects how I like to build user-facing tools: local processing, clear risk explanations, trusted-app workflows, direct settings integration, and no data collection hiding behind the interface.",
    focus: "Android privacy",
    stack: "Kotlin, Compose, Room",
    output: "Offline analyzer",
    signals: ["DataStore", "Permission risk", "Trusted apps", "Zero collection"],
    details: [
      [
        "PrivacyLens core",
        "Built an offline scanner that lists installed apps and separates granted permissions from requested-only permissions.",
      ],
      [
        "Risk explanation",
        "Implemented local risk scoring, category detection, and trusted-app ignore flows so permission review stays understandable.",
      ],
      [
        "Privacy rule",
        "Designed the app for complete offline processing, direct Android settings access, and zero data collection.",
      ],
    ],
  },
  edge: {
    code: "AS-EDGE-04",
    title: "Models that leave the notebook",
    copy:
      "I care about deployment, not just experiments. I have built Flask video streams, Raspberry Pi inference flows, MySQL detection logs, and automated reporting so models become usable systems.",
    focus: "Edge AI",
    stack: "Flask, Raspberry Pi, MySQL",
    output: "MJPEG streaming",
    signals: ["openpyxl reports", "Video logs", "Linux workflow", "Real-time stream"],
    details: [
      [
        "Deployment target",
        "Moved trained detection models onto Raspberry Pi hardware with Flask-based real-time MJPEG video streaming.",
      ],
      [
        "Operational logging",
        "Integrated MySQL detection logs so inference events become searchable records rather than temporary console output.",
      ],
      [
        "Reporting layer",
        "Generated automated Excel reports using openpyxl to make detection results easier to inspect and share.",
      ],
    ],
  },
  research: {
    code: "AS-RL-05",
    title: "Simulation and research depth",
    copy:
      "My GIS-based ITS simulator uses real OpenStreetMap road networks to compare No-RL, DQN-based RL, and shared-policy MARL controllers under latency and dropout conditions.",
    focus: "Traffic systems",
    stack: "OSMnx, Gymnasium, SB3",
    output: "Metrics evaluation",
    signals: ["DQN", "MARL", "V2I", "RSU assisted"],
    details: [
      [
        "GIS grounding",
        "Built the simulator around real OpenStreetMap road networks rather than synthetic-only traffic layouts.",
      ],
      [
        "Controller comparison",
        "Compared No-RL, DQN-based reinforcement learning, and shared-policy MARL controllers with RSU-assisted V2I communication.",
      ],
      [
        "Evaluation lens",
        "Measured mobility, safety, and infrastructure behavior under communication latency and dropout conditions.",
      ],
    ],
  },
  proof: {
    code: "AS-PROOF-06",
    title: "Evidence on the board",
    copy:
      "Patent Publish (Indian Patent Application No. 202541054843): Designed an AI-powered autonomous rescue robot using computer vision, LiDAR, GPS, adaptive multi-terrain locomotion, robotic manipulation, and swarm intelligence for autonomous search, navigation, obstacle clearance, and rescue operations.",
    focus: "Validated work",
    stack: "Patent, DSA, certs",
    output: "End-to-end builds",
    signals: ["Patent Publish", "500+ DSA problems", "SIH", "IBM Watsonx"],
    details: [
      [
        "Patent publish",
        "Filed Indian Patent Application No. 202541054843 for the Rescue Operation System, an AI-powered autonomous rescue robot using computer vision, LiDAR, GPS, thermal imaging, SLAM, reinforcement learning, and swarm coordination for adaptive search-and-rescue operations.",
      ],
      [
        "Problem solving",
        "Solved 500+ DSA problems on LeetCode and earned multiple monthly coding badges.",
      ],
      [
        "Certifications",
        "Completed Generative AI using IBM Watsonx, IBM SQL/Data Science coursework, and EC-Council Ethical Hacking Essentials.",
      ],
    ],
  },
};

const keys = Array.from(document.querySelectorAll(".profile-key"));
const panel = document.querySelector(".identity-panel");
const fields = {
  code: document.querySelector("#profile-code"),
  title: document.querySelector("#profile-title"),
  copy: document.querySelector("#profile-copy"),
  focus: document.querySelector("#profile-focus"),
  stack: document.querySelector("#profile-stack"),
  output: document.querySelector("#profile-output"),
  details: [
    [
      document.querySelector("#profile-detail-one-title"),
      document.querySelector("#profile-detail-one-copy"),
    ],
    [
      document.querySelector("#profile-detail-two-title"),
      document.querySelector("#profile-detail-two-copy"),
    ],
    [
      document.querySelector("#profile-detail-three-title"),
      document.querySelector("#profile-detail-three-copy"),
    ],
  ],
  signals: [
    document.querySelector("#signal-one"),
    document.querySelector("#signal-two"),
    document.querySelector("#signal-three"),
    document.querySelector("#signal-four"),
  ],
};

function setProfile(profileKey) {
  const profile = profileData[profileKey];
  if (!profile || !panel) {
    return;
  }

  keys.forEach((key) => {
    const isActive = key.dataset.profileKey === profileKey;
    key.classList.toggle("is-active", isActive);
    key.setAttribute("aria-pressed", String(isActive));
  });

  fields.code.textContent = profile.code;
  fields.title.textContent = profile.title;
  fields.copy.textContent = profile.copy;
  fields.focus.textContent = profile.focus;
  fields.stack.textContent = profile.stack;
  fields.output.textContent = profile.output;
  fields.signals.forEach((signal, index) => {
    signal.textContent = profile.signals[index];
  });
  fields.details.forEach(([title, copy], index) => {
    title.textContent = profile.details[index][0];
    copy.textContent = profile.details[index][1];
  });

  panel.classList.remove("is-swapping");
  window.requestAnimationFrame(() => {
    panel.classList.add("is-swapping");
  });
}

function pulseKey(key) {
  key.classList.add("is-pressed");
  window.setTimeout(() => {
    key.classList.remove("is-pressed");
  }, 180);
}

keys.forEach((key) => {
  key.addEventListener("click", () => {
    setProfile(key.dataset.profileKey);
    pulseKey(key);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.metaKey || event.ctrlKey || event.altKey) {
    return;
  }

  const key = keys.find((candidate) => candidate.dataset.hotkey === event.key);
  if (!key) {
    return;
  }

  setProfile(key.dataset.profileKey);
  pulseKey(key);
});
const projectDetail = {
  privacyLens: {
    kicker: "Android privacy",
    title: "PrivacyLens",
    copy: "Offline Android privacy analyzer for installed app permissions with clear local risk scoring, trusted-app flows, and zero data collection.",
    overview: "PrivacyLens is an offline Android application that inspects installed apps, separates granted permissions from requested-only permissions, and presents risk explanations in plain language.",
    technologies: ["Kotlin", "Jetpack Compose", "Room", "DataStore", "Android Permissions"],
    highlights: [
      "Built local risk scoring, permission categories, and trusted-app ignore flows.",
      "Integrated direct Android settings access for safer permission review.",
      "Designed complete offline processing with zero data collection.",
    ],
  },
  vehicleAccidentDetection: {
    kicker: "Computer vision",
    title: "Vehicle Accident Detection",
    copy: "A real-time YOLOv11 traffic surveillance system that detects accidents and triggers emergency-response workflows for smart-city infrastructure.",
    overview: "This project processes live and recorded traffic footage with YOLOv11 to identify accidents, support rapid incident detection, and inform emergency response in urban traffic environments.",
    technologies: ["PyTorch", "YOLOv11", "OpenCV", "Python", "Computer Vision"],
    highlights: [
      "Trained on a custom traffic video dataset for accident detection.",
      "Designed inference for live and recorded traffic footage.",
      "Filed Indian Patent Application No. 202541054843 for the Rescue Operation System, an autonomous rescue and surveillance platform with modular tools, secure mesh communication, and SWARM coordination.",
    ],
    patent: {
      status: "🟢 Patent Publish (Application Awaiting Examination)",
      application: "Indian Patent Application No. 202541054843",
      title: "Rescue Operation System",
      description: "Embodiments of the disclosure describe an autonomous rescue and surveillance platform with modular robotic tools, AI-driven navigation, LIDAR, GPS, thermal imaging, stereo vision, sensor fusion, adaptive locomotion, robotic manipulation, secure mesh communication, and SWARM coordination for rescue missions.",
      timeline: "Filed: 6 June 2025 · Published: 13 June 2025 · Current Status: Patent Publish – Application Awaiting Examination",
    },
  },
  multiCityGisItsSimulator: {
    kicker: "Simulation",
    title: "Multi-City GIS ITS Simulator",
    copy: "GIS-grounded traffic control simulator comparing No-RL, DQN, and MARL controllers on real OpenStreetMap networks.",
    overview: "The simulator uses real GIS road networks to evaluate autonomous traffic control strategies, including reinforcement learning and shared-policy multi-agent approaches under latency and dropout conditions.",
    technologies: ["Python", "OSMnx", "Gymnasium", "Stable-Baselines3", "DQN", "MARL"],
    highlights: [
      "Built a GIS-grounded autonomous traffic control simulator on real OpenStreetMap networks.",
      "Compared No-RL, DQN-based RL, and shared-policy MARL controllers.",
      "Modeled RSU-assisted V2I communication with latency and dropout conditions.",
    ],
  },
  airplaneDetectionOnRaspberryPi: {
    kicker: "Edge deployment",
    title: "Airplane Detection on Raspberry Pi",
    copy: "Real-time YOLOv8n airplane detector deployed on Raspberry Pi with Flask MJPEG streaming and MySQL event logging.",
    overview: "This edge AI deployment moves a trained YOLOv8n airplane detector onto Raspberry Pi hardware, streams MJPEG video, logs detections in MySQL, and generates automated reports.",
    technologies: ["YOLOv8", "Flask", "Raspberry Pi", "MySQL", "MJPEG Streaming"],
    highlights: [
      "Deployed a YOLOv8n airplane detector to Raspberry Pi.",
      "Built Flask-based MJPEG video streaming and automated Excel reporting.",
      "Logged inference events to MySQL for searchable detection records.",
    ],
  },
  aslToSpeechTranslator: {
    kicker: "Assistive AI",
    title: "ASL-to-Speech Translator",
    copy: "Real-time ASL recognition using MediaPipe, a Random Forest classifier, Amazon Polly speech, and chatbot integration.",
    overview: "The ASL-to-Speech Translator converts American Sign Language gestures into spoken output with high accuracy and integrated feedback.",
    technologies: ["MediaPipe", "OpenCV", "Scikit-learn", "Amazon Polly", "Chatbot Integration"],
    highlights: [
      "Built a real-time ASL recognition system with MediaPipe landmarks.",
      "Achieved 98% classifier accuracy using a Random Forest model.",
      "Converted recognized gestures to speech using Amazon Polly.",
    ],
  },
  aiGeneratedVideoDetectionExtension: {
    kicker: "Browser AI",
    title: "AI-Generated Video Detection Extension",
    copy: "Browser extension and Flask backend that samples video frames, runs CLIP embeddings, and surfaces confidence scores in a browser overlay.",
    overview: "This project detects AI-generated video content with a Chrome extension and backend service, using CLIP embeddings and a responsive UI overlay for real-time scoring.",
    technologies: ["PyTorch", "Flask", "CLIP", "Chrome Extension", "Web Overlay"],
    highlights: [
      "Engineered a Chrome extension and Flask backend for AI-generated video detection.",
      "Sampled frames and computed CLIP embeddings for confidence scoring.",
      "Automatic CPU/GPU detection supports flexible deployment.",
    ],
  },
};

const projectCards = Array.from(document.querySelectorAll(".project-card[data-project-key]"));
const detailPanel = document.querySelector("#project-detail-panel");
const detailKicker = document.querySelector("#detail-kicker");
const detailTitle = document.querySelector("#detail-title");
const detailCopy = document.querySelector("#detail-copy");
const detailOverview = document.querySelector("#detail-overview");
const detailTech = document.querySelector("#detail-tech");
const detailHighlights = document.querySelector("#detail-highlights");
const detailPatent = document.querySelector("#detail-patent");
const detailPatentStatus = document.querySelector("#detail-patent-status");
const detailPatentApplication = document.querySelector("#detail-patent-application");
const detailPatentTitle = document.querySelector("#detail-patent-title");
const detailPatentDescription = document.querySelector("#detail-patent-description");
const detailPatentTimeline = document.querySelector("#detail-patent-timeline");

function showProjectDetail(projectKey) {
  const project = projectDetail[projectKey];
  if (!project || !detailPanel) {
    return;
  }

  detailPanel.classList.remove("hidden");
  detailKicker.textContent = project.kicker;
  detailTitle.textContent = project.title;
  detailCopy.textContent = project.copy;
  detailOverview.textContent = project.overview;
  detailTech.innerHTML = project.technologies.map((tech) => `<span>${tech}</span>`).join("");
  detailHighlights.innerHTML = project.highlights.map((item) => `<li>${item}</li>`).join("");

  if (project.patent) {
    detailPatent.classList.remove("hidden");
    detailPatentStatus.textContent = project.patent.status;
    detailPatentApplication.textContent = project.patent.application;
    detailPatentTitle.textContent = project.patent.title;
    detailPatentDescription.textContent = project.patent.description;
    detailPatentTimeline.textContent = project.patent.timeline;
  } else {
    detailPatent.classList.add("hidden");
    detailPatentStatus.textContent = "";
    detailPatentApplication.textContent = "";
    detailPatentTitle.textContent = "";
    detailPatentDescription.textContent = "";
    detailPatentTimeline.textContent = "";
  }

  projectCards.forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.projectKey === projectKey);
  });

  detailPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

projectCards.forEach((card) => {
  card.addEventListener("click", () => showProjectDetail(card.dataset.projectKey));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showProjectDetail(card.dataset.projectKey);
    }
  });
});

const palettes = [
  {
    at: 0,
    a: [23, 107, 91],
    b: [189, 76, 59],
    c: [184, 135, 45],
  },
  {
    at: 0.28,
    a: [41, 92, 158],
    b: [21, 143, 119],
    c: [189, 76, 59],
  },
  {
    at: 0.55,
    a: [118, 76, 154],
    b: [29, 116, 131],
    c: [199, 126, 57],
  },
  {
    at: 0.78,
    a: [166, 75, 67],
    b: [32, 121, 101],
    c: [67, 88, 139],
  },
  {
    at: 1,
    a: [19, 79, 68],
    b: [176, 86, 43],
    c: [73, 93, 143],
  },
];

function mixChannel(start, end, amount) {
  return Math.round(start + (end - start) * amount);
}

function mixColor(start, end, amount) {
  return start.map((channel, index) => mixChannel(channel, end[index], amount));
}

function setColorVariable(name, value) {
  document.documentElement.style.setProperty(name, value.join(", "));
}

function updateScrollTheme() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  const clamped = Math.min(1, Math.max(0, progress));
  const nextIndex = palettes.findIndex((palette) => palette.at >= clamped);
  const upper = palettes[nextIndex === -1 ? palettes.length - 1 : nextIndex];
  const lower = palettes[Math.max(0, palettes.indexOf(upper) - 1)];
  const span = upper.at - lower.at || 1;
  const localProgress = (clamped - lower.at) / span;

  setColorVariable("--reactive-a", mixColor(lower.a, upper.a, localProgress));
  setColorVariable("--reactive-b", mixColor(lower.b, upper.b, localProgress));
  setColorVariable("--reactive-c", mixColor(lower.c, upper.c, localProgress));
  document.documentElement.style.setProperty("--scroll-progress", clamped.toFixed(3));
}

let scrollFrame = null;
function requestScrollTheme() {
  if (scrollFrame) {
    return;
  }

  scrollFrame = window.requestAnimationFrame(() => {
    updateScrollTheme();
    scrollFrame = null;
  });
}

updateScrollTheme();
window.addEventListener("scroll", requestScrollTheme, { passive: true });
window.addEventListener("resize", requestScrollTheme);
