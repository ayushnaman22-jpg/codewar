import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ProjectForge AI | Turn Your Skills Into Your Next Big Project",
  description: "An AI-powered platform that transforms your skills and interests into practical, innovative, buildable final-year projects.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary/30`}>
        <Navbar />
        <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  )
}
