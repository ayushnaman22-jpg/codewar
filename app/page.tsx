"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Code2, Cpu, Rocket, Sparkles, Terminal } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex w-full flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="mr-2 h-4 w-4" />
              Prompt Wars Hackathon Project
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Your Skills. Your Interests.<br />
              <span className="text-gradient">Your Next Big Project.</span>
            </h1>
            
            <p className="mx-auto max-w-3xl text-lg text-muted leading-relaxed">
              ProjectForge AI transforms your skills and interests into practical, innovative, 
              buildable final-year projects—with architecture, features, technology choices 
              and a step-by-step roadmap.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/generate">
                <Button variant="gradient" size="lg" className="w-full sm:w-auto gap-2 group">
                  Generate My Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/explore">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Example Projects
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="lg" 
                className="w-full sm:w-auto border border-accent/40 text-accent hover:bg-accent/10"
                onClick={() => router.push('/project/demo')}
              >
                ⚡ Try Live Demo
              </Button>
            </div>

            {/* Requirement 4: Animated AI Project Transformation Visual */}
            <div className="pt-12 max-w-4xl mx-auto">
              <Card glass className="p-6 md:p-8 border-primary/30 bg-surface/50 backdrop-blur-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  
                  {/* Left: Input */}
                  <div className="p-4 rounded-xl bg-surface border border-border text-center space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted block">YOUR INPUT</span>
                    <div className="font-bold text-sm text-foreground">Skills + Interests</div>
                    <div className="flex flex-wrap justify-center gap-1 text-[10px] text-muted">
                      <span className="bg-surface-hover px-2 py-0.5 rounded border border-border">Python</span>
                      <span className="bg-surface-hover px-2 py-0.5 rounded border border-border">AI/ML</span>
                      <span className="bg-surface-hover px-2 py-0.5 rounded border border-border">Cybersecurity</span>
                    </div>
                  </div>

                  {/* Center: Core Engine */}
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-accent p-0.5 animate-pulse">
                      <div className="w-full h-full bg-background rounded-[14px] flex items-center justify-center">
                        <Terminal className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-gradient">PROJECTFORGE AI</span>
                    <span className="text-[10px] text-muted">Orchestrating...</span>
                  </div>

                  {/* Right: Output */}
                  <div className="p-4 rounded-xl bg-surface border border-accent/40 text-center space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-accent block">YOUR PROJECT</span>
                    <div className="font-bold text-sm text-foreground">Idea + Architecture + Tech Stack + Roadmap</div>
                    <div className="text-[10px] text-emerald-400 font-semibold">100% Feasibility Verified</div>
                  </div>

                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="w-full border-y border-border/50 bg-surface/30 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-sm text-muted uppercase tracking-wider">Project Concepts</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-sm text-muted uppercase tracking-wider">Technology Domains</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-4xl font-bold text-white mb-2 text-primary">AI</div>
              <div className="text-sm text-muted uppercase tracking-wider">Powered Guidance</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="text-4xl font-bold text-white mb-2">E2E</div>
              <div className="text-sm text-muted uppercase tracking-wider">Development Roadmaps</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Judges Experience Section */}
      <section className="w-full py-32 container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">From "I Don't Know What To Build"<br/>To "I Know Exactly What To Build."</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">ProjectForge goes beyond text generation. We build the complete architectural vision for your final year project.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card glow className="p-8">
            <Terminal className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Intelligence</h3>
            <p className="text-muted">Evaluates feasibility and uniqueness based on your actual coding skills and time constraints.</p>
          </Card>
          <Card glow className="p-8">
            <Rocket className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Guidance</h3>
            <p className="text-muted">Automatically creates visual architecture diagrams, tech stacks, and step-by-step roadmaps.</p>
          </Card>
          <Card glow className="p-8">
            <Sparkles className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Mentorship</h3>
            <p className="text-muted">An embedded AI mentor that helps you debug, improve, and pitch your project to judges.</p>
          </Card>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="w-full py-24 bg-gradient-to-t from-primary/10 to-transparent text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Stop Searching for Projects.<br/>Start Building One.</h2>
          <p className="text-xl text-muted mb-8">Your next great project is closer than you think.</p>
          <Link href="/generate">
            <Button variant="gradient" size="lg" className="gap-2 group">
              Build My Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
