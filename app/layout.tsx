import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "./components/navbar"
import type { Metadata } from "next"
import { Zap } from "lucide-react"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Malectrica - Cybersecurity Research Collective",
  description:
    "A cybersecurity research collective dedicated to finding vulnerabilities, developing security tools, and sharing knowledge with the community.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-malectrica-dark text-gray-100`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

