"use client"

import { Card } from "@/components/ui/Card"
import { Progress } from "@/components/ui/Progress"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Rocket, Trophy, Calendar, Sparkles, BookOpen } from "lucide-react"
import Link from "next/link"
import { demoProject } from "@/lib/mock-data"

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl space-y-8">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold mb-2">Good morning, Alex</h1>
          <p className="text-muted">You are a <span className="text-primary font-bold">Builder</span>. Let's make some progress today.</p>
        </div>
        <Link href="/generate">
          <Button variant="gradient"><Sparkles className="w-4 h-4 mr-2" /> New Project</Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Main Project Journey */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2"><Rocket className="text-primary"/> Your Project Journey</h2>
          
          <Card className="p-6 border-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10"></div>
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <Badge variant="accent" className="mb-2">In Progress</Badge>
                <h3 className="text-2xl font-bold">{demoProject.name.split("—")[0]}</h3>
                <p className="text-muted text-sm mt-1">{demoProject.tagline}</p>
              </div>
            </div>

            <div className="mb-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-primary">64% Completed</span>
                <span className="text-muted">Phase 3 — UI Development</span>
              </div>
              <Progress value={64} className="h-3" />
            </div>

            <div className="bg-surface-hover rounded-lg p-4 mb-6 border border-border">
              <h4 className="text-sm font-bold text-muted uppercase mb-2">Next Task</h4>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full border-2 border-primary"></div>
                <span className="font-medium">Implement authentication API endpoints</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Link href="/project/demo" className="flex-1">
                <Button className="w-full">Continue Building</Button>
              </Link>
              <Button variant="outline" className="flex-1">Open Mentor</Button>
            </div>
          </Card>

          {/* Saved Ideas */}
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><BookOpen className="text-accent"/> Saved Ideas</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="p-4 bg-surface/50 hover:bg-surface transition-colors cursor-pointer">
                <h4 className="font-bold mb-1">EcoVision</h4>
                <p className="text-xs text-muted mb-3">AI-powered waste sorting using CV.</p>
                <Badge variant="secondary">Idea Stage</Badge>
              </Card>
              <Card className="p-4 bg-surface/50 hover:bg-surface transition-colors cursor-pointer border-dashed">
                <div className="h-full flex flex-col items-center justify-center text-muted gap-2">
                  <Sparkles className="w-6 h-6" />
                  <span className="text-sm">Generate more ideas</span>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-6 bg-gradient-to-br from-surface to-surface-hover">
            <h3 className="font-bold flex items-center gap-2 mb-4"><Trophy className="text-yellow-500" /> Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 opacity-100">
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">💡</div>
                <div>
                  <div className="font-bold text-sm">First Idea</div>
                  <div className="text-xs text-muted">Generated a project</div>
                </div>
              </div>
              <div className="flex items-center gap-3 opacity-100">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">🧠</div>
                <div>
                  <div className="font-bold text-sm">AI Explorer</div>
                  <div className="text-xs text-muted">Used Forge Mentor</div>
                </div>
              </div>
              <div className="flex items-center gap-3 opacity-40 grayscale">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">⚡</div>
                <div>
                  <div className="font-bold text-sm">MVP Builder</div>
                  <div className="text-xs text-muted">Complete MVP phase</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold flex items-center gap-2 mb-4"><Calendar className="text-blue-400" /> Upcoming</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <div className="font-medium">Internal Review</div>
                <div className="text-xs text-muted">In 3 days</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Hackathon Submission</div>
                <div className="text-xs text-muted">In 14 days</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
