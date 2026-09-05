"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { Sparkles, BrainCircuit, Dice5, ChevronRight, CheckCircle2, User, Cpu, Code2, Sliders, Zap } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

const STEPS = ["Profile", "Interests", "Skills", "Constraints", "Generate"]

export default function GenerateWizard() {
  const [step, setStep] = useState(0)
  const router = useRouter()
  const [loadingText, setLoadingText] = useState("Analyzing your skills...")

  // Form State
  const [profile, setProfile] = useState({
    name: "Alex Vance",
    degree: "B.Tech",
    branch: "CSE AI/ML",
    year: "Final Year",
    teamSize: "3"
  })

  const [selectedInterests, setSelectedInterests] = useState<string[]>(["AI / ML", "Generative AI", "Cybersecurity"])
  const [customInterest, setCustomInterest] = useState("")

  const [selectedSkills, setSelectedSkills] = useState<string[]>(["Python", "React", "Scikit-learn", "PostgreSQL", "FastAPI"])
  const [skillLevel, setSkillLevel] = useState("Intermediate")

  const [constraints, setConstraints] = useState({
    difficulty: "Medium",
    time: "3–6 Months",
    budget: "₹2,000",
    goal: "Academic Project",
    hardware: "No hardware"
  })

  // Pre-fill demo data (Requirement 37)
  const populateDemoData = () => {
    setProfile({
      name: "Alex Vance",
      degree: "B.Tech",
      branch: "CSE AI/ML",
      year: "Final Year",
      teamSize: "3"
    })
    setSelectedInterests(["Generative AI", "Cybersecurity", "Web Development"])
    setSelectedSkills(["Python", "JavaScript", "Machine Learning", "FastAPI", "React"])
    setConstraints({
      difficulty: "Medium",
      time: "3–6 Months",
      budget: "₹2,000",
      goal: "Academic Project",
      hardware: "No hardware"
    })
  }

  // Generation sequence animation (Requirement 7)
  useEffect(() => {
    if (step === 4) {
      const sequence = [
        "Analyzing your skills...",
        "Matching interests...",
        "Checking project feasibility...",
        "Designing architecture...",
        "Evaluating innovation...",
        "Building your roadmap...",
        "Your project is ready."
      ]
      let i = 0
      const interval = setInterval(() => {
        i++
        if (i < sequence.length) setLoadingText(sequence[i])
        if (i === sequence.length - 1) {
          clearInterval(interval)
          setTimeout(() => router.push('/project/demo'), 1200)
        }
      }, 900)
      return () => clearInterval(interval)
    }
  }, [step, router])

  const toggleInterest = (item: string) => {
    setSelectedInterests(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item])
  }

  const toggleSkill = (item: string) => {
    setSelectedSkills(prev => prev.includes(item) ? prev.filter(s => s !== item) : [...prev, item])
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl flex-1 flex flex-col justify-center">
      {/* Top Banner & Quick Demo Pre-fill */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">AI Project Generator</h1>
          <p className="text-xs text-muted">Architecting tailored final-year projects based on your exact profile.</p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={populateDemoData}
          className="gap-2 border-accent/40 text-accent hover:bg-accent/10 text-xs"
        >
          <Zap className="w-3.5 h-3.5" /> Auto-Fill Demo Profile
        </Button>
      </div>

      {/* Step Progress Indicator */}
      <div className="mb-10">
        <div className="flex justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-surface-hover -z-10 -translate-y-1/2" />
          <div 
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primary to-accent -z-10 -translate-y-1/2 transition-all duration-500"
            style={{ width: `${(step / 4) * 100}%` }}
          />
          {STEPS.map((label, i) => (
            <div key={label} className="flex flex-col items-center gap-1.5 cursor-pointer" onClick={() => i < step && setStep(i)}>
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300
                ${i < step ? 'bg-primary text-white shadow-lg shadow-primary/20' : i === step ? 'bg-surface border-2 border-primary text-primary shadow-lg shadow-primary/30' : 'bg-surface border-2 border-border text-muted'}`}>
                {i < step ? <CheckCircle2 className="w-5 h-5" /> : `0${i + 1}`}
              </div>
              <span className={`text-[11px] font-medium ${i <= step ? 'text-foreground' : 'text-muted'}`}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Multi-step Container */}
      <div className="relative min-h-[420px]">
        <AnimatePresence mode="wait">
          {/* STEP 1: STUDENT PROFILE */}
          {step === 0 && (
            <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <Card glass className="p-8 space-y-6">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <User className="text-primary w-6 h-6" />
                  <div>
                    <h2 className="text-xl font-bold">Step 1 — Student Profile</h2>
                    <p className="text-xs text-muted">Tell us about your academic standing and team.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold mb-1 block text-muted">Name</label>
                    <input 
                      type="text" 
                      value={profile.name} 
                      onChange={e => setProfile({...profile, name: e.target.value})}
                      className="w-full bg-surface border border-border rounded-lg p-2.5 text-sm focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold mb-1 block text-muted">Degree</label>
                    <select 
                      value={profile.degree}
                      onChange={e => setProfile({...profile, degree: e.target.value})}
                      className="w-full bg-surface border border-border rounded-lg p-2.5 text-sm focus:border-primary focus:outline-none"
                    >
                      <option>B.Tech</option>
                      <option>BCA</option>
                      <option>MCA</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold mb-1 block text-muted">Branch</label>
                    <select 
                      value={profile.branch}
                      onChange={e => setProfile({...profile, branch: e.target.value})}
                      className="w-full bg-surface border border-border rounded-lg p-2.5 text-sm focus:border-primary focus:outline-none"
                    >
                      <option>CSE AI/ML</option>
                      <option>CSE</option>
                      <option>IT</option>
                      <option>ECE</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold mb-1 block text-muted">Year</label>
                    <select 
                      value={profile.year}
                      onChange={e => setProfile({...profile, year: e.target.value})}
                      className="w-full bg-surface border border-border rounded-lg p-2.5 text-sm focus:border-primary focus:outline-none"
                    >
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                      <option>Final Year</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold mb-1 block text-muted">Team Size</label>
                    <select 
                      value={profile.teamSize}
                      onChange={e => setProfile({...profile, teamSize: e.target.value})}
                      className="w-full bg-surface border border-border rounded-lg p-2.5 text-sm focus:border-primary focus:outline-none"
                    >
                      <option>Solo</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <Button onClick={() => setStep(1)} variant="gradient">
                    Continue to Interests <ChevronRight className="ml-2 w-4 h-4"/>
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}

          {/* STEP 2: INTERESTS */}
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <Card glass className="p-8 space-y-6">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <Cpu className="text-accent w-6 h-6" />
                  <div>
                    <h2 className="text-xl font-bold">Step 2 — Domain & Interests</h2>
                    <p className="text-xs text-muted">Select domains you are passionate about.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "AI / ML", "Generative AI", "Computer Vision", "NLP", "Cybersecurity", 
                    "Web Development", "App Development", "IoT", "Robotics", "Cloud Computing", 
                    "Data Science", "Blockchain", "FinTech", "EdTech", "HealthTech", "AgriTech", 
                    "Smart City", "Sustainability", "AR/VR"
                  ].map(cat => {
                    const isSelected = selectedInterests.includes(cat)
                    return (
                      <button
                        key={cat}
                        onClick={() => toggleInterest(cat)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                          isSelected 
                            ? "bg-primary text-white border-primary shadow-md shadow-primary/20" 
                            : "bg-surface border-border text-muted hover:border-primary/50 hover:text-foreground"
                        }`}
                      >
                        {cat}
                      </button>
                    )
                  })}
                </div>

                <div>
                  <label className="text-xs font-semibold mb-1 block text-muted">Or describe your own custom idea / interest</label>
                  <input 
                    type="text" 
                    placeholder="e.g., An automated plant watering system using AI camera and IoT..." 
                    value={customInterest}
                    onChange={e => setCustomInterest(e.target.value)}
                    className="w-full bg-surface border border-border rounded-lg p-2.5 text-sm focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <Button variant="ghost" onClick={() => setStep(0)}>Back</Button>
                  <Button onClick={() => setStep(2)} variant="gradient">
                    Continue to Skills <ChevronRight className="ml-2 w-4 h-4"/>
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}

          {/* STEP 3: SKILL PROFILER */}
          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <Card glass className="p-8 space-y-6">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <Code2 className="text-primary w-6 h-6" />
                  <div>
                    <h2 className="text-xl font-bold">Step 3 — Technical Skill Profiler</h2>
                    <p className="text-xs text-muted">Select technologies your team already knows.</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-muted font-bold block mb-2 uppercase tracking-wider">Frontend & Mobile</span>
                    <div className="flex flex-wrap gap-2">
                      {["HTML", "CSS", "JavaScript", "React", "Flutter"].map(s => (
                        <button key={s} onClick={() => toggleSkill(s)} className={`px-2.5 py-1 rounded-md border ${selectedSkills.includes(s) ? 'bg-accent text-white border-accent' : 'bg-surface border-border text-muted'}`}>{s}</button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-muted font-bold block mb-2 uppercase tracking-wider">Backend & Languages</span>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Java", "Node.js", "FastAPI", "C++", "PHP"].map(s => (
                        <button key={s} onClick={() => toggleSkill(s)} className={`px-2.5 py-1 rounded-md border ${selectedSkills.includes(s) ? 'bg-primary text-white border-primary' : 'bg-surface border-border text-muted'}`}>{s}</button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-muted font-bold block mb-2 uppercase tracking-wider">AI / ML & Databases</span>
                    <div className="flex flex-wrap gap-2">
                      {["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "PostgreSQL", "MongoDB", "Firebase"].map(s => (
                        <button key={s} onClick={() => toggleSkill(s)} className={`px-2.5 py-1 rounded-md border ${selectedSkills.includes(s) ? 'bg-purple-500 text-white border-purple-500' : 'bg-surface border-border text-muted'}`}>{s}</button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="text-xs font-semibold mb-2 block text-muted">Overall Skill Level</label>
                    <div className="flex gap-3">
                      {["Beginner", "Intermediate", "Advanced"].map(lvl => (
                        <button 
                          key={lvl}
                          onClick={() => setSkillLevel(lvl)}
                          className={`flex-1 py-2 rounded-lg border text-xs font-bold transition-all ${skillLevel === lvl ? 'bg-primary/20 border-primary text-primary' : 'bg-surface border-border text-muted'}`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <Button variant="ghost" onClick={() => setStep(1)}>Back</Button>
                  <Button onClick={() => setStep(3)} variant="gradient">
                    Continue to Constraints <ChevronRight className="ml-2 w-4 h-4"/>
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}

          {/* STEP 4: CONSTRAINTS */}
          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <Card glass className="p-8 space-y-6">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <Sliders className="text-cyan-400 w-6 h-6" />
                  <div>
                    <h2 className="text-xl font-bold">Step 4 — Project Constraints</h2>
                    <p className="text-xs text-muted">Ensure your generated project is realistic and buildable.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold mb-1 block text-muted">Difficulty</label>
                    <select 
                      value={constraints.difficulty}
                      onChange={e => setConstraints({...constraints, difficulty: e.target.value})}
                      className="w-full bg-surface border border-border rounded-lg p-2.5 text-sm focus:border-primary focus:outline-none"
                    >
                      <option>Easy</option>
                      <option>Medium</option>
                      <option>Advanced</option>
                      <option>Research-Level</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold mb-1 block text-muted">Available Time</label>
                    <select 
                      value={constraints.time}
                      onChange={e => setConstraints({...constraints, time: e.target.value})}
                      className="w-full bg-surface border border-border rounded-lg p-2.5 text-sm focus:border-primary focus:outline-none"
                    >
                      <option>2 Weeks</option>
                      <option>1 Month</option>
                      <option>2 Months</option>
                      <option>3–6 Months</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold mb-1 block text-muted">Budget</label>
                    <select 
                      value={constraints.budget}
                      onChange={e => setConstraints({...constraints, budget: e.target.value})}
                      className="w-full bg-surface border border-border rounded-lg p-2.5 text-sm focus:border-primary focus:outline-none"
                    >
                      <option>₹0</option>
                      <option>₹500</option>
                      <option>₹2,000</option>
                      <option>₹5,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold mb-1 block text-muted">Project Goal</label>
                    <select 
                      value={constraints.goal}
                      onChange={e => setConstraints({...constraints, goal: e.target.value})}
                      className="w-full bg-surface border border-border rounded-lg p-2.5 text-sm focus:border-primary focus:outline-none"
                    >
                      <option>Academic Project</option>
                      <option>Resume Project</option>
                      <option>Hackathon</option>
                      <option>Startup Prototype</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-xs font-semibold mb-1 block text-muted">Hardware Availability</label>
                    <select 
                      value={constraints.hardware}
                      onChange={e => setConstraints({...constraints, hardware: e.target.value})}
                      className="w-full bg-surface border border-border rounded-lg p-2.5 text-sm focus:border-primary focus:outline-none"
                    >
                      <option>No hardware</option>
                      <option>Arduino</option>
                      <option>ESP32</option>
                      <option>Raspberry Pi</option>
                      <option>Sensors / Other</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <Button variant="ghost" onClick={() => setStep(2)}>Back</Button>
                  <div className="flex gap-3">
                    <Button onClick={() => setStep(4)} variant="outline" className="border-accent text-accent hover:bg-accent/10">
                      <Dice5 className="mr-2 w-4 h-4" /> 🎲 Surprise Me
                    </Button>
                    <Button onClick={() => setStep(4)} variant="gradient">
                      <Sparkles className="mr-2 w-4 h-4" /> Generate My Project
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* STEP 5: AI GENERATION SEQUENCE */}
          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div className="relative w-36 h-36 mb-8">
                <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin" />
                <div className="absolute inset-2 rounded-full border-r-2 border-accent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <BrainCircuit className="w-14 h-14 text-primary animate-pulse" />
                </div>
              </div>
              <h2 className="text-3xl font-extrabold text-gradient mb-2">{loadingText}</h2>
              <p className="text-xs text-muted max-w-sm">Orchestrating multi-model AI logic to craft architecture, database schemas, and roadmaps...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

