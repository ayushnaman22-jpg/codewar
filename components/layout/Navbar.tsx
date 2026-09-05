"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkles, TerminalSquare, Compass, LayoutDashboard } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Generate", href: "/generate", icon: Sparkles },
    { name: "Explore", href: "/explore", icon: Compass },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center px-4 mx-auto max-w-7xl">
        <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <TerminalSquare className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl tracking-tight text-gradient">ProjectForge AI</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-8">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 transition-colors hover:text-primary",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
          <div className="flex items-center space-x-3">
            <Link href="/project/demo">
              <Button variant="outline" size="sm" className="border-accent/40 text-accent hover:bg-accent/10">
                Try Demo
              </Button>
            </Link>
            <Link href="/generate">
              <Button variant="gradient" size="sm" className="gap-2">
                <Sparkles className="h-4 w-4" />
                New Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
