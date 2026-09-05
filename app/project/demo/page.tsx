"use client"

import { useState } from "react"
import { demoProject } from "@/lib/mock-data"
import { Badge } from "@/components/ui/Badge"
import { Card } from "@/components/ui/Card"
import { Progress } from "@/components/ui/Progress"
import { CircularProgress } from "@/components/ui/CircularProgress"
import { Button } from "@/components/ui/Button"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Bot, CheckCircle2, ChevronRight, Code2, Database, Layout, ShieldCheck, Target, Zap, 
  Sparkles, Layers, FileText, Share2, Award, Copy, Check, ExternalLink, Activity, 
  HelpCircle, ArrowUpRight, Cpu, Play, Download, Lightbulb, GitBranch, RefreshCw,
  Rocket, TerminalSquare
} from "lucide-react"

export default function ProjectDemoPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "code" | "docs" | "judge">("overview")
  const [mentorInput, setMentorInput] = useState("")
  const [mentorMessages, setMentorMessages] = useState<{ role: "user" | "mentor"; content: string }[]>([
    { role: "mentor", content: "Hi! I'm your Forge Mentor AI. I designed AegisAI specifically for your skill profile (Python + React + Cybersecurity). Ask me anything about architecture, datasets, or viva prep!" }
  ])
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [codeTab, setCodeTab] = useState<"frontend" | "backend" | "aiModel" | "database">("backend")
  const [improvementModal, setImprovementModal] = useState(false)
  const [pitchModal, setPitchModal] = useState(false)
  const [judgeModal, setJudgeModal] = useState(false)
  const [isCopiedText, setIsCopiedText] = useState(false)

  const handleMentorSend = (textToSend?: string) => {
    const query = textToSend || mentorInput
    if (!query.trim()) return
    
    setMentorMessages(prev => [...prev, { role: "user", content: query }])
    if (!textToSend) setMentorInput("")

    // Generate intelligent contextual response
    setTimeout(() => {
      let reply = "Great question! Based on your 3-month timeline, focus on setting up the FastAPI REST endpoint first before connecting the Next.js frontend."
      const q = query.toLowerCase()
      if (q.includes("start") || q.includes("build first")) {
        reply = "Here is your immediate action plan:\n1. Run `pip install fastapi uvicorn scikit-learn`.\n2. Train the Isolation Forest model on the sampled dataset.\n3. Build the `/telemetry/analyze` endpoint!"
      } else if (q.includes("fastapi")) {
        reply = "FastAPI gives you asynchronous execution, automatic OpenAPI/Swagger documentation, and native Pydantic validation. It's 3x faster than Flask for serving ML model predictions!"
      } else if (q.includes("schema") || q.includes("database")) {
        reply = "Check out the Database Blueprint section! We recommend PostgreSQL with tables: `users`, `threat_logs`, and `ai_insights` linked with foreign keys."
      } else if (q.includes("viva")) {
        reply = "Expected Viva Questions:\n1. Why Isolation Forest over K-Means?\n-> Isolation Forest isolates anomalies explicitly rather than profiling normal data points.\n2. How do you handle false positives?\n-> We set a confidence threshold (0.75+) and log borderline events for manual admin review."
      }
      setMentorMessages(prev => [...prev, { role: "mentor", content: reply }])
    }, 600)
  }

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(type)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl space-y-8">
      {/* Top Banner & Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Badge variant="accent" className="px-3 py-1 text-xs">Project #8402</Badge>
            <span className="text-xs text-muted">Generated for CSE AI/ML • 3 Months Duration</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => setImprovementModal(true)} className="gap-2 border-primary/40 text-primary hover:bg-primary/10">
              <Sparkles className="w-4 h-4" /> Make Project Better
            </Button>
            <Button variant="outline" size="sm" onClick={() => setPitchModal(true)} className="gap-2 border-accent/40 text-accent hover:bg-accent/10">
              <Zap className="w-4 h-4" /> Pitch My Project
            </Button>
            <Button variant="gradient" size="sm" onClick={() => setJudgeModal(true)} className="gap-2">
              <ShieldCheck className="w-4 h-4" /> Judge My Project
            </Button>
          </div>
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
            {demoProject.name.split("—")[0]}
            <span className="text-muted font-normal text-2xl md:text-3xl block md:inline md:ml-3">
              — {demoProject.name.split("—")[1]}
            </span>
          </h1>
          <p className="text-lg text-foreground/80 max-w-4xl">{demoProject.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {demoProject.badges.map(b => (
            <Badge key={b} variant="outline" className="bg-surface/80 text-foreground border-border">{b}</Badge>
          ))}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-border space-x-6 overflow-x-auto text-sm font-medium">
        {[
          { id: "overview", label: "Project Blueprint & Score", icon: Target },
          { id: "architecture", label: "Architecture & Roadmap", icon: Layout },
          { id: "code", label: "Starter Code & DB", icon: Code2 },
          { id: "docs", label: "Docs & Career Assets", icon: FileText },
          { id: "judge", label: "AI Judge & Pitch", icon: Award },
        ].map(tab => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 py-3 px-1 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-primary text-primary font-bold"
                  : "border-transparent text-muted hover:text-foreground"
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Main Grid Content + Sidebar */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-8">

          {/* TAB 1: OVERVIEW & SCORES */}
          {activeTab === "overview" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              {/* Score & DNA Section */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card glass className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <Target className="text-primary" /> AI Evaluation Score
                    </h3>
                    <span className="text-xs text-muted">91 / 100 Overall</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <CircularProgress value={demoProject.score.total} />
                    <div className="flex-1 space-y-2.5">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-semibold"><span>Innovation</span><span>92%</span></div>
                        <Progress value={92} indicatorClassName="bg-blue-500" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-semibold"><span>Feasibility</span><span>88%</span></div>
                        <Progress value={88} indicatorClassName="bg-emerald-500" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-semibold"><span>Technical Depth</span><span>94%</span></div>
                        <Progress value={94} indicatorClassName="bg-purple-500" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-semibold"><span>Resume Value</span><span>95%</span></div>
                        <Progress value={95} indicatorClassName="bg-cyan-500" />
                      </div>
                    </div>
                  </div>
                </Card>

                {/* HACKATHON WOW FEATURE 1: PROJECT DNA */}
                <Card glass className="p-6 border-accent/40 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 opacity-10">
                    <Zap className="w-24 h-24 text-accent" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <Zap className="text-accent" /> Project DNA
                    </h3>
                    <Badge variant="accent" className="text-[10px]">WOW Feature</Badge>
                  </div>
                  <div className="space-y-2.5 text-xs">
                    <div>
                      <div className="flex justify-between mb-1"><span>AI Depth</span><span className="font-mono">90%</span></div>
                      <Progress value={90} indicatorClassName="bg-gradient-to-r from-primary to-accent" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1"><span>Social Impact</span><span className="font-mono">91%</span></div>
                      <Progress value={91} indicatorClassName="bg-emerald-400" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1"><span>Scalability</span><span className="font-mono">85%</span></div>
                      <Progress value={85} indicatorClassName="bg-cyan-400" />
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-surface/80 rounded-lg border border-border/80 text-xs text-muted leading-relaxed">
                    <span className="font-semibold text-foreground">Project DNA Summary: </span>
                    {demoProject.dna.summary}
                  </div>
                </Card>
              </div>

              {/* Why This Project */}
              <Card className="p-6 border-primary/20">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Lightbulb className="text-yellow-400 w-5 h-5" /> Why This Project Fits You
                </h3>
                <p className="text-muted text-sm leading-relaxed">{demoProject.whyFits}</p>
              </Card>

              {/* Problem Statement */}
              <Card className="p-6 space-y-4">
                <h3 className="text-xl font-bold mb-2">Problem Statement & Scope</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-950/20 border border-red-900/30 rounded-xl">
                    <h4 className="font-bold text-red-400 text-sm mb-1">The Real-World Problem</h4>
                    <p className="text-xs text-muted leading-relaxed">{demoProject.problemStatement.problem}</p>
                  </div>
                  <div className="p-4 bg-amber-950/20 border border-amber-900/30 rounded-xl">
                    <h4 className="font-bold text-amber-400 text-sm mb-1">Existing Solution Limitations</h4>
                    <p className="text-xs text-muted leading-relaxed">{demoProject.problemStatement.limitations}</p>
                  </div>
                  <div className="p-4 bg-emerald-950/20 border border-emerald-900/30 rounded-xl md:col-span-2">
                    <h4 className="font-bold text-emerald-400 text-sm mb-1">Proposed Solution</h4>
                    <p className="text-xs text-muted leading-relaxed">{demoProject.problemStatement.solution}</p>
                  </div>
                </div>
              </Card>

              {/* Core Features */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Core Features Breakdown</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {demoProject.features.map((feature, i) => (
                    <Card key={i} className="p-4 hover:border-primary/50 transition-all flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-sm">{feature.name}</h4>
                          <Badge variant={feature.type === "MVP" ? "accent" : feature.type === "Advanced" ? "outline" : "secondary"} className="text-[10px]">
                            {feature.type}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted">{feature.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* MVP Builder */}
              <Card className="p-6 border-accent/30 bg-gradient-to-br from-surface to-background">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Rocket className="text-accent" /> MVP Builder — "Build This First"
                  </h3>
                  <Badge variant="accent">Est. MVP: 2–3 Weeks</Badge>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {demoProject.mvpSteps.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border">
                      <span className="w-6 h-6 rounded-full bg-accent/20 text-accent font-bold text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <div className="flex-1">
                        <div className="text-xs font-semibold">{item.step}</div>
                        <div className="text-[10px] text-muted">{item.days}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Uniqueness Analyzer & Feasibility Checker */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Uniqueness */}
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <Sparkles className="text-primary" /> Uniqueness: {demoProject.uniqueness.score}%
                  </h3>
                  <p className="text-xs text-muted mb-3"><strong className="text-foreground">What makes it unique: </strong>{demoProject.uniqueness.differentiators}</p>
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-primary">3 Ways to make this stand out:</div>
                    <ul className="text-xs text-muted list-disc list-inside space-y-1">
                      {demoProject.uniqueness.waysToStandOut.map((way, idx) => (
                        <li key={idx}>{way}</li>
                      ))}
                    </ul>
                  </div>
                </Card>

                {/* Feasibility */}
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-400" /> Feasibility: {demoProject.feasibility.status}
                  </h3>
                  <div className="space-y-2 text-xs">
                    <div><span className="text-muted">Time Feasibility:</span> <span className="font-medium text-foreground">{demoProject.feasibility.time}</span></div>
                    <div><span className="text-muted">Skill Feasibility:</span> <span className="font-medium text-foreground">{demoProject.feasibility.skill}</span></div>
                    <div><span className="text-muted">Budget Required:</span> <span className="font-medium text-foreground">{demoProject.feasibility.budget}</span></div>
                    <div><span className="text-muted">Hardware:</span> <span className="font-medium text-foreground">{demoProject.feasibility.hardware}</span></div>
                  </div>
                </Card>
              </div>

              {/* Dataset Finder */}
              <Card className="p-6 border-blue-500/20 bg-blue-950/10">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold flex items-center gap-2 text-blue-400">
                      <Database className="w-5 h-5" /> Dataset Finder
                    </h3>
                    <p className="text-xs text-muted">Recommended dataset for model training.</p>
                  </div>
                  <a href={demoProject.dataset.url} target="_blank" rel="noreferrer">
                    <Button size="sm" variant="outline" className="gap-1 text-xs">
                      Find Dataset <ExternalLink className="w-3 h-3" />
                    </Button>
                  </a>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs pt-2">
                  <div className="p-2 rounded bg-surface border border-border">
                    <span className="text-muted block text-[10px]">Dataset Name</span>
                    <span className="font-bold">{demoProject.dataset.name}</span>
                  </div>
                  <div className="p-2 rounded bg-surface border border-border">
                    <span className="text-muted block text-[10px]">Approx Size</span>
                    <span className="font-bold">{demoProject.dataset.size}</span>
                  </div>
                  <div className="p-2 rounded bg-surface border border-border">
                    <span className="text-muted block text-[10px]">Data Type</span>
                    <span className="font-bold">{demoProject.dataset.type}</span>
                  </div>
                  <div className="p-2 rounded bg-surface border border-border">
                    <span className="text-muted block text-[10px]">Recommended Approach</span>
                    <span className="font-bold text-accent">{demoProject.dataset.approach}</span>
                  </div>
                </div>
              </Card>

              {/* HACKATHON WOW FEATURE 2: PROJECT EVOLUTION */}
              <Card className="p-6 bg-gradient-to-r from-surface via-surface-hover to-surface border-accent/30">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <GitBranch className="text-accent" /> Project Evolution Path
                    </h3>
                    <p className="text-xs text-muted">How your idea evolves from hackathon prototype to real startup.</p>
                  </div>
                  <Badge variant="accent">WOW Feature</Badge>
                </div>
                <div className="grid sm:grid-cols-5 gap-3 text-center">
                  {demoProject.evolution.map((stage, i) => (
                    <div key={i} className="p-3 bg-surface/80 rounded-xl border border-border relative flex flex-col items-center">
                      <span className="text-[10px] uppercase tracking-wider text-accent font-bold mb-1">{stage.stage}</span>
                      <h4 className="font-bold text-xs mb-1">{stage.title}</h4>
                      <p className="text-[10px] text-muted">{stage.desc}</p>
                    </div>
                  ))}
                </div>
              </Card>

            </motion.div>
          )}

          {/* TAB 2: ARCHITECTURE & ROADMAP */}
          {activeTab === "architecture" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              {/* Tech Stack & Why */}
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6">Recommended Tech Stack</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {demoProject.techStack.map((tech, i) => (
                    <div key={i} className="p-4 rounded-xl bg-surface border border-border space-y-2">
                      <div className="flex justify-between items-center">
                        <Badge variant="secondary" className="text-[10px]">{tech.layer}</Badge>
                        <span className="font-bold text-primary text-sm">{tech.name}</span>
                      </div>
                      <p className="text-xs text-muted"><strong className="text-foreground">Why this tech? </strong>{tech.why}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Visual Architecture Diagram */}
              <Card className="p-6 bg-gradient-to-br from-surface to-background border-primary/30">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Layout className="text-primary" /> Visual System Architecture
                </h3>
                <p className="text-xs text-muted mb-6">Data flow and microservices layout across client and server boundaries.</p>

                <div className="p-6 bg-surface-hover/80 rounded-xl border border-border flex flex-col md:flex-row items-center justify-between gap-4 text-center">
                  <div className="p-4 rounded-lg bg-surface border border-primary/40 w-full md:w-auto">
                    <Cpu className="mx-auto mb-2 text-blue-400 w-6 h-6" />
                    <div className="text-xs font-bold">User Device</div>
                    <div className="text-[10px] text-muted">React Dashboard</div>
                  </div>
                  <ChevronRight className="hidden md:block text-primary w-6 h-6 animate-pulse" />
                  <div className="p-4 rounded-lg bg-surface border border-accent/40 w-full md:w-auto">
                    <Code2 className="mx-auto mb-2 text-cyan-400 w-6 h-6" />
                    <div className="text-xs font-bold">FastAPI Server</div>
                    <div className="text-[10px] text-muted">REST API & Auth</div>
                  </div>
                  <ChevronRight className="hidden md:block text-primary w-6 h-6 animate-pulse" />
                  <div className="p-4 rounded-lg bg-surface border border-purple-500/40 w-full md:w-auto">
                    <Bot className="mx-auto mb-2 text-purple-400 w-6 h-6" />
                    <div className="text-xs font-bold">Scikit Anomaly Engine</div>
                    <div className="text-[10px] text-muted">Isolation Forest</div>
                  </div>
                  <ChevronRight className="hidden md:block text-primary w-6 h-6 animate-pulse" />
                  <div className="p-4 rounded-lg bg-surface border border-emerald-500/40 w-full md:w-auto">
                    <Database className="mx-auto mb-2 text-emerald-400 w-6 h-6" />
                    <div className="text-xs font-bold">PostgreSQL Storage</div>
                    <div className="text-[10px] text-muted">Logs & Metrics</div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-surface rounded-lg text-xs font-mono text-muted text-center border border-border">
                  {demoProject.architecture.flow}
                </div>
              </Card>

              {/* Detailed Development Roadmap Timeline */}
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6">Step-by-Step Development Roadmap</h3>
                <div className="space-y-6 relative border-l-2 border-primary/30 ml-4 pl-6">
                  {demoProject.roadmap.map((phase, i) => (
                    <div key={i} className="relative group">
                      <div className="absolute -left-[33px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-foreground text-sm">{phase.phase}</h4>
                        <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded">{phase.days}</span>
                      </div>
                      <div className="p-3 bg-surface rounded-lg border border-border text-xs">
                        <ul className="list-disc list-inside space-y-1 text-muted">
                          {phase.tasks.map((task, tidx) => (
                            <li key={tidx}>{task}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          )}

          {/* TAB 3: STARTER CODE & DATABASE BLUEPRINT */}
          {activeTab === "code" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              {/* Database Blueprint */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Database className="text-emerald-400" /> Database Blueprint & Entities
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {demoProject.databaseBlueprint.map((db, i) => (
                    <div key={i} className="p-4 rounded-xl bg-surface border border-border space-y-3">
                      <div className="flex justify-between items-center border-b border-border pb-2">
                        <span className="font-mono font-bold text-emerald-400 text-sm">{db.table}</span>
                        <Badge variant="outline" className="text-[9px]">Table</Badge>
                      </div>
                      <ul className="space-y-1 font-mono text-[11px] text-muted">
                        {db.fields.map((f, fidx) => (
                          <li key={fidx} className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {f}
                          </li>
                        ))}
                      </ul>
                      <div className="text-[10px] text-muted pt-2 border-t border-border/50">
                        <strong>Relations: </strong>{db.relations}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* API Blueprint */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Code2 className="text-cyan-400" /> API Blueprint Documentation
                </h3>
                <div className="space-y-2">
                  {demoProject.apiBlueprint.map((api, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-surface border border-border text-xs">
                      <div className="flex items-center gap-3 font-mono">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${api.method === "GET" ? "bg-blue-500/20 text-blue-400" : "bg-emerald-500/20 text-emerald-400"}`}>
                          {api.method}
                        </span>
                        <span className="font-bold text-foreground">{api.endpoint}</span>
                      </div>
                      <span className="text-muted text-[11px] hidden sm:block">{api.description}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Code Starter Panel */}
              <Card className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <TerminalSquare className="text-primary" /> Code Starter Templates
                  </h3>
                  <div className="flex gap-2">
                    {(["backend", "frontend", "aiModel", "database"] as const).map(tab => (
                      <button
                        key={tab}
                        onClick={() => setCodeTab(tab)}
                        className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                          codeTab === tab ? "bg-primary text-white font-bold" : "bg-surface text-muted hover:text-foreground"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-border bg-[#0a0d18] p-4">
                  <button
                    onClick={() => copyToClipboard(demoProject.codeStarters[codeTab], codeTab)}
                    className="absolute top-3 right-3 p-2 rounded-lg bg-surface hover:bg-surface-hover text-muted hover:text-foreground transition-colors"
                  >
                    {copiedCode === codeTab ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <pre className="font-mono text-xs text-foreground/90 overflow-x-auto p-2 leading-relaxed">
                    {demoProject.codeStarters[codeTab]}
                  </pre>
                </div>
              </Card>
            </motion.div>
          )}

          {/* TAB 4: DOCS & CAREER ASSETS */}
          {activeTab === "docs" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              {/* Project Documentation Generator */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FileText className="text-primary" /> Academic Document Generators
                </h3>
                <p className="text-xs text-muted mb-6">One-click generate college report sections and presentation slides.</p>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Generate Abstract", "Generate Problem Statement", "Generate Objectives", "Generate Methodology",
                    "Generate SRS Document", "Generate Report Outline", "Generate Presentation Deck", "Generate Viva Questions"
                  ].map((docName, i) => (
                    <Button 
                      key={i} 
                      variant="outline" 
                      size="sm" 
                      onClick={() => alert(`Generated: ${docName} for AegisAI!`)}
                      className="justify-between text-xs text-left h-auto py-2.5"
                    >
                      <span>{docName}</span>
                      <Download className="w-3 h-3 text-muted shrink-0" />
                    </Button>
                  ))}
                </div>
              </Card>

              {/* Resume & LinkedIn Value */}
              <Card className="p-6 space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Award className="text-accent" /> Turn Your Project Into a Career Asset
                </h3>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Resume Bullet Points</h4>
                  <div className="space-y-2">
                    {demoProject.careerAssets.resumeBullets.map((bullet, i) => (
                      <div key={i} className="p-3 bg-surface rounded-lg border border-border text-xs text-muted flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-2">LinkedIn Post Announcement</h4>
                  <div className="p-3 bg-surface rounded-lg border border-border font-sans text-xs text-muted relative">
                    <p>{demoProject.careerAssets.linkedIn}</p>
                    <button 
                      onClick={() => copyToClipboard(demoProject.careerAssets.linkedIn, "linkedin")}
                      className="mt-2 text-[10px] text-accent flex items-center gap-1 font-bold hover:underline"
                    >
                      {copiedCode === "linkedin" ? "Copied!" : "Copy LinkedIn Post"}
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* TAB 5: AI JUDGE & PITCH (WOW FEATURES 3 & 4) */}
          {activeTab === "judge" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              {/* AI Judge Evaluation */}
              <Card className="p-6 border-purple-500/30 bg-purple-950/10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <Badge variant="accent" className="mb-2">WOW Feature #3</Badge>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <ShieldCheck className="text-purple-400" /> Hackathon AI Judge Evaluation
                    </h3>
                    <p className="text-xs text-muted">Simulated evaluation from senior technical hackathon judges.</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-extrabold text-purple-400">{demoProject.judgeEvaluation.score} / 100</div>
                    <div className="text-[10px] text-muted uppercase tracking-wider">Overall Judge Score</div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {demoProject.judgeEvaluation.breakdown.map((item, i) => (
                    <div key={i} className="p-3 bg-surface rounded-lg border border-border space-y-1">
                      <div className="flex justify-between text-xs font-bold">
                        <span>{item.label}</span>
                        <span className="text-purple-400">{item.score} / 100</span>
                      </div>
                      <Progress value={item.score} indicatorClassName="bg-purple-500" />
                    </div>
                  ))}
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-emerald-950/20 border border-emerald-900/30 rounded-lg">
                    <strong className="text-emerald-400 block mb-1">Biggest Strength:</strong>
                    <p className="text-muted">{demoProject.judgeEvaluation.strength}</p>
                  </div>
                  <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-lg">
                    <strong className="text-red-400 block mb-1">Biggest Weakness:</strong>
                    <p className="text-muted">{demoProject.judgeEvaluation.weakness}</p>
                  </div>
                  <div className="p-3 bg-blue-950/20 border border-blue-900/30 rounded-lg">
                    <strong className="text-blue-400 block mb-1">Judge's Final Recommendation:</strong>
                    <p className="text-muted">{demoProject.judgeEvaluation.recommendation}</p>
                  </div>
                </div>
              </Card>

              {/* Pitch Generator */}
              <Card className="p-6 border-cyan-500/30">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <Badge variant="accent" className="mb-2">WOW Feature #4</Badge>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <Zap className="text-cyan-400" /> 60-Second Pitch Generator
                    </h3>
                    <p className="text-xs text-muted">Ready-to-deliver script for your viva or hackathon presentation.</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-surface rounded-lg border border-border">
                    <span className="text-cyan-400 font-bold uppercase text-[10px] block">00:00 - Hook</span>
                    <p className="text-foreground italic">"{demoProject.pitch.hook}"</p>
                  </div>
                  <div className="p-3 bg-surface rounded-lg border border-border">
                    <span className="text-cyan-400 font-bold uppercase text-[10px] block">00:15 - Problem</span>
                    <p className="text-foreground italic">"{demoProject.pitch.problem}"</p>
                  </div>
                  <div className="p-3 bg-surface rounded-lg border border-border">
                    <span className="text-cyan-400 font-bold uppercase text-[10px] block">00:30 - Solution & Tech</span>
                    <p className="text-foreground italic">"{demoProject.pitch.solution} {demoProject.pitch.tech}"</p>
                  </div>
                  <div className="p-3 bg-surface rounded-lg border border-border">
                    <span className="text-cyan-400 font-bold uppercase text-[10px] block">00:50 - Future Vision</span>
                    <p className="text-foreground italic">"{demoProject.pitch.vision}"</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

        </div>

        {/* PERSISTENT SIDEBAR: FORGE MENTOR PANEL */}
        <div className="space-y-6">
          <Card glass className="sticky top-24 flex flex-col h-[calc(100vh-8rem)] min-h-[500px]">
            {/* Header */}
            <div className="p-4 border-b border-border/50 bg-surface/50 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-lg"><Bot className="text-primary w-5 h-5" /></div>
                <div>
                  <h3 className="font-bold text-sm">Forge Mentor</h3>
                  <p className="text-[10px] text-muted">Persistent AI Technical Guide</p>
                </div>
              </div>
              <Badge variant="accent" className="text-[10px] animate-pulse">Online</Badge>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-background/20 text-xs">
              {mentorMessages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`p-3 rounded-xl max-w-[88%] leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-primary text-white ml-auto rounded-tr-none" 
                      : "bg-surface border border-border text-foreground rounded-tl-none mr-auto"
                  }`}
                >
                  {msg.content}
                </div>
              ))}
            </div>

            {/* Suggested Prompts */}
            <div className="p-2 border-t border-border/40 bg-surface/30 flex overflow-x-auto gap-1 text-[10px]">
              {[
                "How do I start?", 
                "Explain architecture", 
                "Why FastAPI?", 
                "Prepare viva questions", 
                "DB Schema"
              ].map(prompt => (
                <button 
                  key={prompt}
                  onClick={() => handleMentorSend(prompt)}
                  className="px-2 py-1 bg-surface-hover rounded text-muted hover:text-foreground whitespace-nowrap transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Footer */}
            <div className="p-3 border-t border-border/50 bg-surface/50 rounded-b-2xl">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Ask Forge Mentor..." 
                  className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-primary"
                  value={mentorInput}
                  onChange={e => setMentorInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleMentorSend()}
                />
                <Button size="icon" variant="default" className="h-8 w-8" onClick={() => handleMentorSend()}>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* MODAL 1: MAKE MY PROJECT BETTER */}
      {improvementModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl p-6 bg-surface border-primary/40 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b border-border pb-3">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Sparkles className="text-primary" /> Project Improvement Engine
              </h3>
              <Button size="sm" variant="ghost" onClick={() => setImprovementModal(false)}>✕</Button>
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-surface-hover rounded-lg">
                <strong className="text-primary block mb-1">⚡ Quick Wins</strong>
                <p className="text-muted">Add JWT authentication middleware and animated toast notifications for high threat score triggers.</p>
              </div>
              <div className="p-3 bg-surface-hover rounded-lg">
                <strong className="text-accent block mb-1">💡 Innovation Ideas</strong>
                <p className="text-muted">Integrate a Chrome browser extension that sends active tab URLs to your FastAPI engine for live phishing inspection.</p>
              </div>
              <div className="p-3 bg-surface-hover rounded-lg">
                <strong className="text-purple-400 block mb-1">🧠 AI Enhancements</strong>
                <p className="text-muted">Combine Isolation Forest with a fine-tuned Llama-3 model to output natural language explanation reports for campus IT admins.</p>
              </div>
              <div className="p-3 bg-surface-hover rounded-lg">
                <strong className="text-emerald-400 block mb-1">🚀 Startup Potential</strong>
                <p className="text-muted">Package as a SaaS subscription for private universities looking for budget-friendly automated security monitoring.</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* MODAL 2: PITCH GENERATOR */}
      {pitchModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl p-6 bg-surface border-accent/40 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b border-border pb-3">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Zap className="text-accent" /> Practice Your 60-Second Pitch
              </h3>
              <Button size="sm" variant="ghost" onClick={() => setPitchModal(false)}>✕</Button>
            </div>
            <p className="text-xs text-muted italic">"{demoProject.pitch.hook} {demoProject.pitch.problem} {demoProject.pitch.solution} {demoProject.pitch.tech} {demoProject.pitch.vision}"</p>
            <div className="pt-2 flex justify-end">
              <Button size="sm" variant="gradient" onClick={() => { setIsCopiedText(true); setTimeout(() => setIsCopiedText(false), 2000); }}>
                {isCopiedText ? "Copied Script!" : "Copy Full Pitch Script"}
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* MODAL 3: AI JUDGE REPORT */}
      {judgeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl p-6 bg-surface border-purple-500/40 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b border-border pb-3">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <ShieldCheck className="text-purple-400" /> Full Hackathon Judge Report
              </h3>
              <Button size="sm" variant="ghost" onClick={() => setJudgeModal(false)}>✕</Button>
            </div>
            <div className="text-center p-4 bg-purple-950/30 rounded-xl border border-purple-800/40">
              <div className="text-4xl font-extrabold text-purple-400">92 / 100</div>
              <div className="text-xs text-muted mt-1">Hackathon Verdict: Finalist Candidate</div>
            </div>
            <p className="text-xs text-muted">{demoProject.judgeEvaluation.feedback}</p>
          </Card>
        </div>
      )}
    </div>
  )
}

