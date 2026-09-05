export interface ProjectData {
  id: string
  name: string
  tagline: string
  badges: string[]
  score: {
    total: number
    innovation: number
    feasibility: number
    technicalDepth: number
    resumeValue: number
    socialImpact: number
    scalability: number
  }
  dna: {
    aiDepth: number
    innovation: number
    difficulty: number
    impact: number
    scalability: number
    resumeValue: number
    summary: string
  }
  whyFits: string
  problemStatement: {
    problem: string
    limitations: string
    solution: string
    targetUsers: string
  }
  features: {
    name: string
    description: string
    type: "MVP" | "Advanced" | "Future"
  }[]
  mvpSteps: { step: string; days: string }[]
  techStack: {
    name: string
    layer: string
    why: string
  }[]
  architecture: {
    nodes: string[]
    flow: string
  }
  roadmap: {
    phase: string
    days: string
    tasks: string[]
  }[]
  uniqueness: {
    score: number
    commonParts: string
    differentiators: string
    waysToStandOut: string[]
  }
  feasibility: {
    status: string
    time: string
    skill: string
    budget: string
    hardware: string
    dataset: string
    reason: string
  }
  dataset: {
    name: string
    purpose: string
    size: string
    type: string
    approach: string
    url: string
  }
  databaseBlueprint: {
    table: string
    fields: string[]
    relations: string
  }[]
  apiBlueprint: {
    method: string
    endpoint: string
    description: string
  }[]
  codeStarters: {
    frontend: string
    backend: string
    aiModel: string
    database: string
  }
  careerAssets: {
    resumeBullets: string[]
    githubReadme: string
    linkedIn: string
  }
  judgeEvaluation: {
    score: number
    breakdown: { label: string; score: number }[]
    feedback: string
    strength: string
    weakness: string
    recommendation: string
  }
  pitch: {
    hook: string
    problem: string
    solution: string
    tech: string
    vision: string
  }
  evolution: {
    stage: string
    title: string
    desc: string
  }[]
}

export const demoProject: ProjectData = {
  id: "demo-aegis-ai",
  name: "AegisAI — Intelligent Student Cybersecurity Guardian",
  tagline: "An AI-powered system that detects suspicious digital behavior and helps students understand and prevent cyber threats.",
  badges: ["AI/ML", "Cybersecurity", "Web", "Intermediate", "3 Months"],
  score: {
    total: 91,
    innovation: 92,
    feasibility: 88,
    technicalDepth: 94,
    resumeValue: 95,
    socialImpact: 86,
    scalability: 90
  },
  dna: {
    aiDepth: 90,
    innovation: 82,
    difficulty: 64,
    impact: 91,
    scalability: 85,
    resumeValue: 96,
    summary: "This project is highly suitable for an AI/ML student who wants strong resume value without requiring expensive hardware."
  },
  whyFits: "Because you have Python + AI/ML knowledge and an interest in cybersecurity, this project provides enough technical depth while remaining achievable within your selected timeline.",
  problemStatement: {
    problem: "Students frequently fall victim to phishing, malware, and social engineering attacks on campus networks.",
    limitations: "Existing antivirus software is reactive and doesn't educate the user about why a threat occurred or how to prevent it in the future.",
    solution: "AegisAI proactively monitors network patterns using ML and provides educational interventions when risky behavior is detected.",
    targetUsers: "University students, campus IT administrators, research labs."
  },
  features: [
    { name: "AI Threat Detection", description: "Detect suspicious behavior using ML anomaly models.", type: "MVP" },
    { name: "Risk Dashboard", description: "Visualize security risks with interactive real-time charts.", type: "MVP" },
    { name: "Smart Alerts", description: "Instant push notifications when phishing attempts are flagged.", type: "MVP" },
    { name: "AI Explanation Engine", description: "Explains in natural language why a behavior was classified as risky.", type: "Advanced" },
    { name: "Activity Analytics", description: "Show historical threat trends and security health scores.", type: "Advanced" },
    { name: "Personalized Recommendations", description: "Suggest tailormade security hardening steps.", type: "Future" }
  ],
  mvpSteps: [
    { step: "User Authentication & JWT Tokens", days: "Days 1-3" },
    { step: "Network Telemetry Data Collection API", days: "Days 4-7" },
    { step: "Isolation Forest ML Anomaly Detector", days: "Days 8-12" },
    { step: "FastAPI Prediction Endpoint", days: "Days 13-16" },
    { step: "React Security Dashboard UI", days: "Days 17-21" },
    { step: "Real-time Threat Alert Toast System", days: "Days 22-25" }
  ],
  techStack: [
    { name: "Next.js / React", layer: "Frontend", why: "Provides fast server-side rendering and elegant component architecture." },
    { name: "FastAPI", layer: "Backend", why: "High performance asynchronous Python framework perfect for serving ML inference." },
    { name: "Scikit-learn / PyTorch", layer: "AI/ML Engine", why: "Ideal for tabular anomaly detection, Isolation Forests, and threat classification." },
    { name: "PostgreSQL", layer: "Database", why: "Robust relational storage for telemetry logs, user alerts, and model audit records." },
    { name: "Firebase Auth", layer: "Authentication", why: "Secure enterprise-grade user management out of the box." },
    { name: "Render / Vercel", layer: "Deployment", why: "Zero-config edge deployment for frontend and microservices backend." }
  ],
  architecture: {
    nodes: ["User Device", "Next.js Dashboard", "FastAPI Gatekeeper", "Scikit-learn Anomaly Engine", "PostgreSQL Storage"],
    flow: "User Telemetry → Next.js UI → FastAPI API → ML Anomaly Model → DB Log → Realtime Risk Alert"
  },
  roadmap: [
    { phase: "Phase 1 — Planning & Setup", days: "Day 1–3", tasks: ["Architecture diagramming", "Database schema definition", "Dataset acquisition & cleaning"] },
    { phase: "Phase 2 — AI Model & Backend", days: "Day 4–15", tasks: ["Train Isolation Forest & XGBoost model", "Build FastAPI REST endpoints", "Implement JWT auth & threat logging"] },
    { phase: "Phase 3 — UI & Visualization", days: "Day 16–28", tasks: ["Develop dark-mode Next.js dashboard", "Integrate Lucide charts & risk meters", "Build Forge Mentor side-panel"] },
    { phase: "Phase 4 — Integration & Testing", days: "Day 29–38", tasks: ["End-to-end API hookup", "Perform latency benchmark testing", "Conduct threat simulation tests"] },
    { phase: "Phase 5 — Deployment & Docs", days: "Day 39–45", tasks: ["Deploy API to Render & frontend to Vercel", "Generate SRS & Viva documentation", "Finalize presentation deck"] }
  ],
  uniqueness: {
    score: 84,
    commonParts: "Basic security dashboards and standard log viewers are widespread.",
    differentiators: "Combines ML anomaly detection with an AI Mentor that educates students on why their behavior was risky in real-time.",
    waysToStandOut: [
      "Add browser extension integration to inspect active phishing links.",
      "Integrate automated LLM-generated remedial quizzes when a student visits compromised sites.",
      "Provide campus-wide anonymized threat benchmark sharing."
    ]
  },
  feasibility: {
    status: "HIGH",
    time: "3 Months (Plenty of bandwidth for 2-3 student team)",
    skill: "Python + React fits standard CSE/AI/ML curriculum",
    budget: "₹0 (Free tier on Vercel, Render, and Supabase)",
    hardware: "Standard Laptop (No GPU hardware required for tabular ML)",
    dataset: "CICIDS-2017 Open Cybersecurity Dataset available on Kaggle",
    reason: "The project uses lightweight Scikit-learn models which train quickly on standard CPUs and deploy effortlessly on free cloud tiers."
  },
  dataset: {
    name: "CICIDS-2017 Intrusion Detection Dataset",
    purpose: "Train anomaly detection models on benign and malicious network flows.",
    size: "2.8 Million Records (Sampled to 50k for fast training)",
    type: "CSV / Tabular Network Telemetry",
    approach: "Random Forest Classifier + Isolation Forest for Anomaly Detection",
    url: "https://www.unb.ca/cic/datasets/ids-2017.html"
  },
  databaseBlueprint: [
    { table: "users", fields: ["id (UUID)", "email (VARCHAR)", "role (ENUM)", "created_at (TIMESTAMP)"], relations: "1-to-Many with threat_logs" },
    { table: "threat_logs", fields: ["id (UUID)", "user_id (FK)", "threat_type (VARCHAR)", "risk_score (FLOAT)", "flagged_at (TIMESTAMP)"], relations: "Belongs to users" },
    { table: "ai_insights", fields: ["id (UUID)", "threat_id (FK)", "explanation (TEXT)", "action_recommended (TEXT)"], relations: "1-to-1 with threat_logs" }
  ],
  apiBlueprint: [
    { method: "GET", endpoint: "/api/v1/projects/active", description: "Fetch current active project state and roadmap progress." },
    { method: "POST", endpoint: "/api/v1/telemetry/analyze", description: "Receive live network telemetry and return AI threat prediction." },
    { method: "POST", endpoint: "/api/v1/mentor/chat", description: "Interact with Forge Mentor AI for architecture & viva guidance." },
    { method: "POST", endpoint: "/api/v1/project/judge", description: "Evaluate project against hackathon criteria and generate judge report." }
  ],
  codeStarters: {
    frontend: `// Next.js Telemetry Hook
import { useState, useEffect } from 'react';

export function useThreatDetector(telemetryData) {
  const [risk, setRisk] = useState(null);
  useEffect(() => {
    fetch('/api/v1/telemetry/analyze', {
      method: 'POST',
      body: JSON.stringify(telemetryData)
    }).then(res => res.json()).then(data => setRisk(data.risk_score));
  }, [telemetryData]);
  return risk;
}`,
    backend: `# FastAPI Prediction Server
from fastapi import FastAPI
from pydantic import BaseModel
import joblib

app = FastAPI(title="AegisAI Engine")
model = joblib.load("model/threat_detector.pkl")

class Telemetry(BaseModel):
    packet_rate: float
    failed_logins: int
    payload_entropy: float

@app.post("/api/v1/telemetry/analyze")
def analyze(data: Telemetry):
    features = [[data.packet_rate, data.failed_logins, data.payload_entropy]]
    score = float(model.predict_proba(features)[0][1])
    return {"risk_score": score, "is_anomaly": score > 0.7}`,
    aiModel: `# Scikit-Learn Model Training
from sklearn.ensemble import IsolationForest
import pandas as pd
import joblib

df = pd.read_csv("cicids_sampled.csv")
X = df[['packet_rate', 'failed_logins', 'payload_entropy']]

clf = IsolationForest(contamination=0.05, random_state=42)
clf.fit(X)

joblib.dump(clf, "model/threat_detector.pkl")
print("AegisAI Anomaly Model Saved Successfully!")`,
    database: `-- PostgreSQL Schema Definition
CREATE TYPE threat_severity AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

CREATE TABLE threat_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    threat_type VARCHAR(100) NOT NULL,
    severity threat_severity DEFAULT 'MEDIUM',
    risk_score NUMERIC(5,2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`
  },
  careerAssets: {
    resumeBullets: [
      "Architected AegisAI, an ML-driven cybersecurity monitoring system utilizing Isolation Forests for real-time threat detection with 94% accuracy.",
      "Engineered high-throughput FastAPI backend handling 500+ telemetry events/sec linked to a PostgreSQL database on Render.",
      "Designed an interactive dark-themed Next.js dashboard featuring real-time risk visualization and natural language threat explanations."
    ],
    githubReadme: `# AegisAI — Intelligent Student Cybersecurity Guardian 🛡️\n\nAegisAI pro-actively detects anomalous network behavior on university campus networks using machine learning anomaly detection algorithms.\n\n## 🚀 Tech Stack\n- **Frontend**: Next.js 14, Tailwind CSS, Framer Motion\n- **Backend**: FastAPI, PyTorch, Scikit-learn\n- **Database**: PostgreSQL\n\n## ⚡ Quickstart\n\`\`\`bash\ngit clone https://github.com/student/aegis-ai.git\ncd aegis-ai\npip install -r requirements.txt\nuvicorn main:app --reload\n\`\`\``,
    linkedIn: "🚀 Excited to share my final-year capstone project: AegisAI! AegisAI transforms how campus networks protect students from phishing and malware by combining Scikit-learn anomaly detection with real-time AI guidance. Built using Next.js, FastAPI, and PostgreSQL! #Cybersecurity #MachineLearning #Nextjs #AI #Python"
  },
  judgeEvaluation: {
    score: 92,
    breakdown: [
      { label: "Innovation & Vision", score: 94 },
      { label: "Technical Complexity", score: 90 },
      { label: "Feasibility & Execution", score: 95 },
      { label: "UI / UX Design", score: 96 },
      { label: "Presentation & Pitch", score: 88 }
    ],
    feedback: "AegisAI presents a compelling, highly realistic solution for student network safety. The combination of lightweight anomaly detection and LLM-driven explanation elevates it beyond standard IT log monitors.",
    strength: "Exemplary UI/UX combined with practical tech choices that can easily be demonstrated in 2 minutes without heavy compute requirements.",
    weakness: "Requires synthetic network data generation for live hackathon testing if actual campus traffic cannot be captured.",
    recommendation: "Demonstrate a live simulated phishing attack during your presentation to show how the alert triggers instantaneously."
  },
  pitch: {
    hook: "Over 60% of university students fall for phishing attacks because existing tools are reactive and silent.",
    problem: "Traditional antiviruses block threats without explaining why, leaving students vulnerable to repeated attacks.",
    solution: "Meet AegisAI — an intelligent guardian that detects network anomalies using ML and educates students in real-time.",
    tech: "Powered by Next.js, FastAPI, and Scikit-learn, AegisAI delivers instantaneous anomaly scoring with zero hardware dependencies.",
    vision: "We are turning cybersecurity from a passive utility into an active, AI-guided learning experience for every student on campus."
  },
  evolution: [
    { stage: "Basic Idea", title: "Log Analyzer", desc: "Simple script that parses firewall logs for failed logins." },
    { stage: "MVP", title: "AegisAI Core", desc: "FastAPI REST service + Scikit-learn Isolation Forest + React dashboard." },
    { stage: "Advanced AI", title: "AegisAI Pro", desc: "Adds LLM-driven natural language threat explanations and remediation steps." },
    { stage: "Startup", title: "CampusGuard SaaS", desc: "Multi-tenant enterprise dashboard for university IT departments." },
    { stage: "Research Paper", title: "IEEE Publication", desc: "A novel lightweight ML approach for student network threat mitigation." }
  ]
}

export const EXPLORE_PROJECTS: Partial<ProjectData>[] = [
  demoProject,
  {
    id: "project-2",
    name: "AgroSmart — AI Precision Agriculture Platform",
    tagline: "Computer vision & IoT system predicting crop diseases and soil moisture optimization.",
    badges: ["AI/ML", "IoT", "AgriTech", "Advanced", "3 Months"],
    score: { total: 89, innovation: 91, feasibility: 85, technicalDepth: 92, resumeValue: 94, socialImpact: 96, scalability: 87 },
    whyFits: "Combines OpenCV image recognition with IoT sensor monitoring to solve real agricultural yield problems.",
    problemStatement: {
      problem: "Farmers suffer up to 40% crop loss due to undetected leaf blights and inefficient watering.",
      limitations: "Manual inspection is slow and lab soil tests take days to return results.",
      solution: "AgroSmart uses mobile camera plant disease detection combined with ESP32 soil sensors.",
      targetUsers: "Smallholder farmers, agricultural extension workers."
    },
    features: [
      { name: "Leaf Disease Classifier", description: "Identify 38 plant diseases from leaf photos.", type: "MVP" },
      { name: "Soil Moisture Dashboard", description: "Realtime ESP32 sensor telemetry display.", type: "MVP" },
      { name: "Irrigation Scheduler", description: "Predict optimal watering times based on weather.", type: "Advanced" }
    ],
    techStack: [
      { name: "TensorFlow Lite", layer: "AI/ML", why: "Lightweight mobile inference directly on mobile devices." },
      { name: "Flutter", layer: "Mobile App", why: "Cross-platform iOS & Android UI from single codebase." },
      { name: "ESP32 + MQTT", layer: "Hardware/IoT", why: "Ultra low cost microcontroller with built-in Wi-Fi." }
    ]
  },
  {
    id: "project-3",
    name: "FinLearn — Gamified AI Wealth Coach for Gen Z",
    tagline: "Interactive financial education platform with AI budget simulation.",
    badges: ["FinTech", "Web", "Gen AI", "Beginner", "1 Month"],
    score: { total: 86, innovation: 87, feasibility: 94, technicalDepth: 78, resumeValue: 88, socialImpact: 85, scalability: 90 },
    whyFits: "Great starter project utilizing modern Web standards and LLM API integrations.",
    problemStatement: {
      problem: "Young adults lack financial literacy and find traditional banking apps boring.",
      limitations: "Existing apps focus on tracking spent money rather than teaching future decision making.",
      solution: "FinLearn uses AI to simulate hypothetical 5-year investment scenarios with game mechanics.",
      targetUsers: "College students, first-time salary earners."
    },
    features: [
      { name: "Budget Simulator", description: "AI simulates cashflow based on user decisions.", type: "MVP" },
      { name: "Daily Byte Lessons", description: "Micro-learning modules with AI quizzes.", type: "MVP" },
      { name: "Portfolio Battle", description: "Compete with friends in simulated trading.", type: "Advanced" }
    ],
    techStack: [
      { name: "React / Vite", layer: "Frontend", why: "Fast and lightweight SPA development." },
      { name: "Node.js", layer: "Backend", why: "Rapid API development with extensive package ecosystem." },
      { name: "Gemini API", layer: "AI Engine", why: "Generates tailored financial advice and scenario prompts." }
    ]
  },
  {
    id: "project-4",
    name: "MedSync — Decentralized Patient EHR Ledger",
    tagline: "Cryptographically secure electronic health records using IPFS and Blockchain.",
    badges: ["Blockchain", "HealthTech", "Security", "Advanced", "3-6 Months"],
    score: { total: 93, innovation: 96, feasibility: 80, technicalDepth: 96, resumeValue: 97, socialImpact: 92, scalability: 89 },
    whyFits: "High resume value project showcasing web3 cryptography and distributed storage skills.",
    problemStatement: {
      problem: "Medical history is fragmented across hospitals, leading to duplicate tests and fatal errors.",
      limitations: "Centralized EHR databases are prime targets for ransomware attacks.",
      solution: "MedSync gives patients complete ownership of encrypted health records via smart contracts.",
      targetUsers: "Patients, doctors, diagnostic labs, insurance providers."
    },
    features: [
      { name: "Encrypted Document Vault", description: "Upload PDF lab reports directly to IPFS.", type: "MVP" },
      { name: "Doctor Access Grant", description: "Time-bounded permission granting via Ethereum contract.", type: "MVP" },
      { name: "Audit Trail Viewer", description: "Immutable log of every time a record was inspected.", type: "Advanced" }
    ],
    techStack: [
      { name: "Solidity", layer: "Smart Contracts", why: "Industry standard smart contract language for EVM." },
      { name: "Next.js + Ethers.js", layer: "Frontend", why: "Seamless Web3 wallet connector integration." },
      { name: "IPFS / Pinata", layer: "Storage", why: "Decentralized immutable file storage." }
    ]
  }
]

