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
          <footer className="w-full border-t border-malectrica-blue/20 bg-black text-gray-100 py-8">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-malectrica-brightBlue" />
                    <span className="font-bold text-xl">Malectrica</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    A cybersecurity research collective dedicated to making the digital world safer for everyone.
                  </p>
                </div>
                <div>
                  <h3 className="mb-4 text-sm font-medium">Resources</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>
                      <Link href="/tools" className="hover:text-malectrica-brightBlue">
                        Security Tools
                      </Link>
                    </li>
                    <li>
                      <Link href="/vulnerabilities" className="hover:text-malectrica-brightBlue">
                        Vulnerabilities
                      </Link>
                    </li>
                    <li>
                      <Link href="/pocs" className="hover:text-malectrica-brightBlue">
                        POCs
                      </Link>
                    </li>
                    <li>
                      <Link href="/writeups" className="hover:text-malectrica-brightBlue">
                        Write-ups
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="hover:text-malectrica-brightBlue">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 border-t border-malectrica-blue/20 pt-8 flex flex-col-reverse gap-4 md:flex-row md:justify-between">
                <p className="text-sm text-gray-400">
                  &copy; {new Date().getFullYear()} Malectrica. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

