"use client"

import Link from "next/link"
import { useState } from "react"
import {
  Shield,
  Terminal,
  AlertTriangle,
  ChevronRight,
  ExternalLink,
  Zap,
  Menu,
  X,
  Bell,
  Github,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showNotification, setShowNotification] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleSubscribe = () => {
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  return (
    <div className="flex min-h-screen flex-col bg-malectrica-dark text-gray-100">
      <header className="sticky top-0 z-40 w-full border-b border-malectrica-blue/20 bg-malectrica-dark/95 backdrop-blur supports-[backdrop-filter]:bg-malectrica-dark/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center">
            <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
              <Zap className="h-6 w-6 text-malectrica-brightBlue" />
              <span className="font-bold text-xl">Malectrica</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/tools" className="transition-colors hover:text-malectrica-brightBlue relative group">
              Tools
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-malectrica-brightBlue transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/vulnerabilities" className="transition-colors hover:text-malectrica-brightBlue relative group">
              Vulnerabilities
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-malectrica-brightBlue transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/pocs" className="transition-colors hover:text-malectrica-brightBlue relative group">
              POCs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-malectrica-brightBlue transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/writeups" className="transition-colors hover:text-malectrica-brightBlue relative group">
              Write-ups
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-malectrica-brightBlue transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/blog" className="transition-colors hover:text-malectrica-brightBlue relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-malectrica-brightBlue transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/team" className="transition-colors hover:text-malectrica-brightBlue relative group">
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-malectrica-brightBlue transition-all group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="flex md:hidden">
            <Button variant="ghost" size="sm" className="px-2 text-gray-200" onClick={toggleMobileMenu}>
              <span className="sr-only">Toggle Menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-200 ease-in-out" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-200 ease-in-out" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-malectrica-darker border-b border-malectrica-blue/20 py-4">
            <nav className="container flex flex-col space-y-4">
              <Link
                href="/tools"
                className="px-4 py-2 hover:bg-malectrica-blue/10 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tools
              </Link>
              <Link
                href="/vulnerabilities"
                className="px-4 py-2 hover:bg-malectrica-blue/10 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Vulnerabilities
              </Link>
              <Link
                href="/pocs"
                className="px-4 py-2 hover:bg-malectrica-blue/10 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                POCs
              </Link>
              <Link
                href="/writeups"
                className="px-4 py-2 hover:bg-malectrica-blue/10 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Write-ups
              </Link>
              <Link
                href="/blog"
                className="px-4 py-2 hover:bg-malectrica-blue/10 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/team"
                className="px-4 py-2 hover:bg-malectrica-blue/10 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Notification toast */}
      {showNotification && (
        <div className="fixed top-20 right-4 z-50 bg-malectrica-blue/90 text-white px-4 py-2 rounded-md shadow-lg animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span>Thanks for subscribing! Check your email to confirm.</span>
          </div>
        </div>
      )}

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-malectrica-dark to-malectrica-darker">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4 text-center sm:text-left">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-100">
                  Your Cybersecurity Partner
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                  We are a collective of cybersecurity experts dedicated to finding vulnerabilities, developing security
                  tools, and sharing 1337 knowledge with the community.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row items-center sm:items-start">
                  <Link href="/tools">
                    <Button
                      size="lg"
                      className="bg-malectrica-blue/70 text-gray-200 hover:bg-malectrica-blue transition-all hover:translate-y-[-2px]"
                    >
                      Explore Tools
                    </Button>
                  </Link>
                  <Link href="/blog">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-malectrica-blue/50 text-malectrica-blue bg-malectrica-blue/10 hover:bg-malectrica-blue/20 hover:text-malectrica-brightBlue transition-all hover:translate-y-[-2px]"
                    >
                      Read Latest Findings
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-sm mx-auto group">
                  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-malectrica-blue to-malectrica-brightBlue opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative rounded-lg bg-malectrica-darker p-5">
                    <div className="flex items-center border-b border-gray-100/10 pb-2">
                      <div className="flex space-x-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <pre className="mt-4 overflow-x-auto text-sm text-malectrica-brightBlue">
                      <code>
                        {`$ nmap -sV -sC target.com\n
Discovered open holes: 22, 80, 443\n
Service on hole 80: Unshaved\n
Potential vulnerability: Anal Pegging\n
Running exploit verification...\n
[+] Target is peggable!`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tools" className="w-full py-12 md:py-24 lg:py-32 bg-malectrica-dark">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-malectrica-blue px-3 py-1 text-sm text-gray-100">
                  Security Tools
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Cutting-edge Security Tools</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Open-source security tools developed by our team to help secure your systems and exploit others.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  icon: <Terminal className="h-10 w-10 text-malectrica-brightBlue" />,
                  title: "Paifang",
                  description:
                    "A stealthy payload generator and handler for web backdoors, some might consider the branding cultural appropriation, but we don't care.",
                  language: "PHP",
                  stars: 342,
                  slug: "paifang",
                },
                {
                  icon: <Shield className="h-10 w-10 text-malectrica-brightBlue" />,
                  title: "Araneae",
                  description:
                    "A multipurpose web-crawler which preforms useful data collection and analysis on endpoints for application security testing",
                  language: "Python",
                  stars: 526,
                  slug: "araneae",
                },
                {
                  icon: <AlertTriangle className="h-10 w-10 text-malectrica-brightBlue" />,
                  title: "Hookline",
                  description:
                    "Hookline the UltraPhisher is a powerful SE tool that emulates the target's homepage by impersonating google search and using tabunder.",
                  language: "Python",
                  stars: 287,
                  slug: "hookline",
                },
              ].map((tool, i) => (
                <Card
                  key={i}
                  className="bg-malectrica-darker border-malectrica-blue/20 hover:bg-malectrica-blue/10 transition-colors hover:shadow-md hover:shadow-malectrica-blue/20 group"
                >
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="text-malectrica-brightBlue group-hover:text-malectrica-blue transition-colors">
                        {tool.icon}
                      </div>
                      <CardTitle className="text-xl text-white">{tool.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-400">{tool.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-malectrica-blue/30 text-malectrica-blue">
                        {tool.language}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-1 h-4 w-4"
                        >
                          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                        </svg>
                        {tool.stars}
                      </div>
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link href={`https://github.com/malectricasoftware/${tool.slug}`} target="_blank">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="gap-1 text-malectrica-blue hover:text-malectrica-brightBlue hover:bg-malectrica-blue/20"
                            >
                              View on GitHub <ExternalLink className="h-4 w-4" />
                            </Button>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Open GitHub repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center w-full">
              <Link href="/tools">
                <Button
                  variant="outline"
                  className="gap-1 border-malectrica-blue/50 text-malectrica-blue bg-malectrica-blue/10 hover:bg-malectrica-blue/20 hover:text-malectrica-brightBlue transition-all hover:translate-y-[-2px]"
                >
                  View All Tools <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="vulnerabilities" className="w-full py-12 md:py-24 lg:py-32 bg-malectrica-darker">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-red-600/80 px-3 py-1 text-sm text-gray-100">
                  Recent Discoveries
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Vulnerabilities Discovered</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Responsibly disclosed security vulnerabilities found by our research team.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              {[
                {
                  title: "Authentication Bypass in CMS Platform",
                  severity: "Critical",
                  date: "2023-11-15",
                  vendor: "ContentWave",
                  cve: "CVE-2023-87654",
                  status: "Patched",
                },
                {
                  title: "SQL Injection in E-commerce Framework",
                  severity: "High",
                  date: "2023-10-22",
                  vendor: "ShopPortal",
                  cve: "CVE-2023-54321",
                  status: "Patched",
                },
                {
                  title: "Remote Code Execution in DNS Service",
                  severity: "Critical",
                  date: "2023-09-10",
                  vendor: "DNSCloud",
                  cve: "CVE-2023-98765",
                  status: "Patched",
                },
                {
                  title: "API Key Leakage in Mobile SDK",
                  severity: "Medium",
                  date: "2023-08-05",
                  vendor: "AppConnect",
                  cve: "CVE-2023-56789",
                  status: "Patched",
                },
              ].map((vuln, i) => (
                <Card
                  key={i}
                  className="bg-malectrica-dark border-malectrica-blue/20 hover:bg-malectrica-blue/10 transition-colors hover:shadow-md hover:shadow-malectrica-blue/20"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg text-white">{vuln.title}</CardTitle>
                      <Badge
                        variant={
                          vuln.severity === "Critical"
                            ? "destructive"
                            : vuln.severity === "High"
                              ? "outline"
                              : "secondary"
                        }
                        className={
                          vuln.severity === "Critical"
                            ? "bg-red-600/80 text-gray-100"
                            : vuln.severity === "High"
                              ? "border-orange-500/80 text-orange-400"
                              : "bg-yellow-500/20 text-yellow-400"
                        }
                      >
                        {vuln.severity}
                      </Badge>
                    </div>
                    <CardDescription>
                      <div className="flex flex-col gap-1 mt-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Vendor:</span>
                          <span className="text-gray-200">{vuln.vendor}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">CVE:</span>
                          <Link
                            href={`https://nvd.nist.gov/vuln/detail/${vuln.cve}`}
                            target="_blank"
                            className="text-malectrica-blue hover:text-malectrica-brightBlue transition-colors"
                          >
                            {vuln.cve}
                          </Link>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Disclosure Date:</span>
                          <span className="text-gray-200">{vuln.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Status:</span>
                          <Badge variant="outline" className="bg-green-500/10 text-green-400 hover:bg-green-500/20">
                            {vuln.status}
                          </Badge>
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link href={`/vulnerabilities/${vuln.cve.toLowerCase()}`} className="w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full gap-1 border-malectrica-blue/50 text-malectrica-blue bg-malectrica-blue/10 hover:bg-malectrica-blue/20 hover:text-malectrica-brightBlue transition-all hover:translate-y-[-2px]"
                      >
                        View Details <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center w-full">
              <Link href="/vulnerabilities">
                <Button
                  variant="outline"
                  className="gap-1 border-malectrica-blue/50 text-malectrica-blue bg-malectrica-blue/10 hover:bg-malectrica-blue/20 hover:text-malectrica-brightBlue transition-all hover:translate-y-[-2px]"
                >
                  View All Vulnerabilities <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="pocs" className="w-full py-12 md:py-24 lg:py-32 bg-malectrica-dark">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-500/80 px-3 py-1 text-sm text-gray-100">
                  Proof of Concepts
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Vulnerability POCs</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Demonstration code for security researchers to understand and verify vulnerabilities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12">
              {[
                {
                  title: "XSS Vulnerability in Web Framework",
                  description:
                    "This POC demonstrates a cross-site scripting vulnerability in the popular framework that bypasses built-in XSS protection.",
                  language: "JavaScript",
                  date: "2023-12-01",
                  author: "Alex Chen",
                  slug: "xss-vulnerability-web-framework",
                },
                {
                  title: "Buffer Overflow in IoT Device Firmware",
                  description:
                    "A demonstration of exploiting a buffer overflow vulnerability in a widely-used IoT device that can lead to remote code execution.",
                  language: "C",
                  date: "2023-11-12",
                  author: "Maria Rodriguez",
                  slug: "buffer-overflow-iot-firmware",
                },
                {
                  title: "JWT Token Forgery Exploit",
                  description:
                    "This POC shows how to forge JWT tokens in applications using a vulnerable library version, allowing unauthorized access.",
                  language: "Python",
                  date: "2023-10-18",
                  author: "Sam Patel",
                  slug: "jwt-token-forgery-exploit",
                },
              ].map((poc, i) => (
                <Card
                  key={i}
                  className="bg-malectrica-darker border-malectrica-blue/20 hover:bg-malectrica-blue/10 transition-colors hover:shadow-md hover:shadow-malectrica-blue/20"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-white">{poc.title}</CardTitle>
                      <Badge variant="outline" className="border-malectrica-blue/30 text-malectrica-blue">
                        {poc.language}
                      </Badge>
                    </div>
                    <CardDescription className="pt-2 text-gray-400">{poc.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md bg-black p-4 overflow-x-auto border border-malectrica-blue/20 group-hover:border-malectrica-blue/40 transition-colors">
                      <pre className="text-sm text-malectrica-blue">
                        <code>
                          {poc.language === "JavaScript" &&
                            `// ${poc.title} - POC
fetch('/api/user/profile', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: '<img src=x onerror=alert(document.cookie)>',
    email: 'test@example.com'
  })
})`}
                          {poc.language === "C" &&
                            `// ${poc.title} - POC
#include <string.h>

void vulnerable_function(char *input) {
  char buffer[64];
  strcpy(buffer, input);  // Buffer overflow vulnerability
}

int main(int argc, char *argv[]) {
  vulnerable_function(argv[1]);
  return 0;
}`}
                          {poc.language === "Python" &&
                            `# ${poc.title} - POC
import jwt

# Create a forged token with a known weakness
header = {"alg": "none"}
payload = {"user_id": 1337, "role": "admin"}
forged_token = jwt.encode(payload, "", algorithm="none")

print(f"Forged token: {forged_token}")`}
                        </code>
                      </pre>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="text-sm text-gray-400">
                      Published: {poc.date} by {poc.author}
                    </div>
                    <Link href={`/pocs/${poc.slug}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1 border-malectrica-blue/50 text-malectrica-blue bg-malectrica-blue/10 hover:bg-malectrica-blue/20 hover:text-malectrica-brightBlue transition-all hover:translate-y-[-2px]"
                      >
                        View Full POC <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center w-full">
              <Link href="/pocs">
                <Button
                  variant="outline"
                  className="gap-1 border-malectrica-blue/50 text-malectrica-blue bg-malectrica-blue/10 hover:bg-malectrica-blue/20 hover:text-malectrica-brightBlue transition-all hover:translate-y-[-2px]"
                >
                  View All POCs <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="writeups" className="w-full py-12 md:py-24 lg:py-32 bg-malectrica-darker">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-malectrica-blue/80 px-3 py-1 text-sm text-gray-100">
                  Detailed Analysis
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Security Write-ups</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  In-depth technical analysis of vulnerabilities and security research findings.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              {[
                {
                  title: "Bypassing WAF Protection: A Case Study",
                  excerpt:
                    "An analysis of how we discovered and exploited weaknesses in popular web application firewalls to bypass security controls.",
                  date: "2023-12-05",
                  author: "Jamie Wilson",
                  readTime: "15 min read",
                  tags: ["WAF", "Bypass", "Web Security"],
                  slug: "bypassing-waf-protection",
                },
                {
                  title: "Reverse Engineering IoT Protocol",
                  excerpt:
                    "We reverse-engineered a proprietary IoT protocol and discovered multiple critical security flaws in the implementation.",
                  date: "2023-11-18",
                  author: "Taylor Kim",
                  readTime: "12 min read",
                  tags: ["IoT", "Reverse Engineering", "Protocol Analysis"],
                  slug: "reverse-engineering-iot-protocol",
                },
                {
                  title: "Cloud Misconfigurations Leading to Data Exposure",
                  excerpt:
                    "Analysis of common cloud security misconfigurations that led to the exposure of sensitive data across multiple organizations.",
                  date: "2023-10-24",
                  author: "Jordan Lee",
                  readTime: "10 min read",
                  tags: ["Cloud Security", "AWS", "Misconfigurations"],
                  slug: "cloud-misconfigurations-data-exposure",
                },
                {
                  title: "Breaking SAML: Authentication Bypass Techniques",
                  excerpt:
                    "A deep dive into SAML implementation flaws that allowed authentication bypasses in enterprise single sign-on systems.",
                  date: "2023-09-30",
                  author: "Casey Morgan",
                  readTime: "18 min read",
                  tags: ["SAML", "Authentication", "SSO"],
                  slug: "breaking-saml-authentication-bypass",
                },
              ].map((writeup, i) => (
                <Card
                  key={i}
                  className="bg-malectrica-dark border-malectrica-blue/20 hover:bg-malectrica-blue/10 transition-colors flex flex-col hover:shadow-md hover:shadow-malectrica-blue/20"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{writeup.title}</CardTitle>
                    <CardDescription className="pt-2 text-gray-400">{writeup.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {writeup.tags.map((tag, j) => (
                        <Badge
                          key={j}
                          variant="secondary"
                          className="text-xs bg-malectrica-blue/20 text-malectrica-blue hover:bg-malectrica-blue/30 cursor-pointer transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="text-sm text-gray-400">
                      {writeup.date} • {writeup.readTime}
                    </div>
                    <Link href={`/writeups/${writeup.slug}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1 border-malectrica-blue/50 text-malectrica-blue bg-malectrica-blue/10 hover:bg-malectrica-blue/20 hover:text-malectrica-brightBlue transition-all hover:translate-y-[-2px]"
                      >
                        Read Write-up <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center w-full">
              <Link href="/writeups">
                <Button
                  variant="outline"
                  className="gap-1 border-malectrica-blue/50 text-malectrica-blue bg-malectrica-blue/10 hover:bg-malectrica-blue/20 hover:text-malectrica-brightBlue transition-all hover:translate-y-[-2px]"
                >
                  View All Write-ups <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-malectrica-dark">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-malectrica-blue/80 px-3 py-1 text-sm text-gray-100">
                  Latest Insights
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Security Blog</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Articles, tutorials, and insights from our security research team.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "The Rise of Supply Chain Attacks",
                  excerpt:
                    "How attackers are increasingly targeting software supply chains as an entry point into organizations.",
                  date: "2023-12-10",
                  author: "Robin Chang",
                  category: "Trends",
                  slug: "rise-of-supply-chain-attacks",
                },
                {
                  title: "Securing Kubernetes Environments",
                  excerpt:
                    "Best practices for hardening Kubernetes clusters against the most common attack vectors in production.",
                  date: "2023-11-28",
                  author: "Avery Martinez",
                  category: "Cloud Security",
                  slug: "securing-kubernetes-environments",
                },
                {
                  title: "Modern Password Cracking Techniques",
                  excerpt:
                    "An exploration of how contemporary password cracking techniques have evolved and how to protect against them.",
                  date: "2023-11-15",
                  author: "Francis Wong",
                  category: "Authentication",
                  slug: "modern-password-cracking-techniques",
                },
                {
                  title: "API Security Testing Guide",
                  excerpt:
                    "A comprehensive guide to testing REST APIs for common security vulnerabilities and misconfigurations.",
                  date: "2023-11-02",
                  author: "Riley Johnson",
                  category: "Web Security",
                  slug: "api-security-testing-guide",
                },
                {
                  title: "Threat Hunting with OSINT",
                  excerpt:
                    "How to leverage open-source intelligence gathering techniques to identify potential threats to your organization.",
                  date: "2023-10-20",
                  author: "Morgan Smith",
                  category: "Threat Intelligence",
                  slug: "threat-hunting-with-osint",
                },
                {
                  title: "Security Implications of Quantum Computing",
                  excerpt:
                    "Understanding how quantum computing will impact current cryptographic standards and what organizations should do now.",
                  date: "2023-10-08",
                  author: "Dr. Jordan Taylor",
                  category: "Cryptography",
                  slug: "security-implications-quantum-computing",
                },
              ].map((blog, i) => (
                <Card
                  key={i}
                  className="bg-malectrica-darker border-malectrica-blue/20 hover:bg-malectrica-blue/10 transition-colors flex flex-col hover:shadow-md hover:shadow-malectrica-blue/20"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className="bg-malectrica-blue/20 text-malectrica-blue hover:bg-malectrica-blue/30 cursor-pointer transition-colors"
                      >
                        {blog.category}
                      </Badge>
                      <span className="text-xs text-gray-400">{blog.date}</span>
                    </div>
                    <CardTitle className="text-lg pt-2 text-white">{blog.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-400">{blog.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="text-sm text-gray-400">By {blog.author}</div>
                    <Link href={`/blog/${blog.slug}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1 border-malectrica-blue/50 text-malectrica-blue bg-malectrica-blue/10 hover:bg-malectrica-blue/20 hover:text-malectrica-brightBlue transition-all hover:translate-y-[-2px]"
                      >
                        Read Post <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center w-full">
              <Link href="/blog">
                <Button
                  variant="outline"
                  className="gap-1 border-malectrica-blue/50 text-malectrica-blue bg-malectrica-blue/10 hover:bg-malectrica-blue/20 hover:text-malectrica-brightBlue transition-all hover:translate-y-[-2px]"
                >
                  View All Blog Posts <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section id="founders" className="w-full py-12 md:py-24 lg:py-32 bg-malectrica-darker">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-malectrica-blue/80 px-3 py-1 text-sm text-gray-100">
                  Meet Our Founders
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">The Minds Behind Malectrica</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our founders are renowned security researchers with a track record of discovering critical
                  vulnerabilities in major systems.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              {[
                {
                  name: "Alex Winters",
                  role: "Co-Founder & Chief Security Researcher",
                  image: "/placeholder.svg?height=400&width=400",
                  bio: "Former NSA security analyst with over 15 years of experience in offensive security. Discovered 50+ critical vulnerabilities in Fortune 500 companies.",
                  hackerone: "alexw1nt3rs",
                  bugcrowd: "alexwinters",
                  github: "alexw1nt3rs",
                },
                {
                  name: "Samira Khan",
                  role: "Co-Founder & Lead Exploit Developer",
                  image: "/placeholder.svg?height=400&width=400",
                  bio: "Reverse engineering specialist with a background in low-level systems. Known for developing novel exploitation techniques for previously unknown vulnerabilities.",
                  hackerone: "samira_k",
                  bugcrowd: "samirakhan",
                  github: "samirakhan",
                },
              ].map((founder, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-lg bg-malectrica-dark border border-malectrica-blue/20 hover:border-malectrica-blue/40 transition-all duration-300 hover:shadow-lg hover:shadow-malectrica-blue/20"
                >
                  <div className="flex flex-col md:flex-row gap-6 p-6">
                    <div className="flex-shrink-0 mx-auto md:mx-0">
                      <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-malectrica-blue/50">
                        <img
                          src={founder.image || "/placeholder.svg"}
                          alt={founder.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-between flex-grow text-center md:text-left">
                      <div>
                        <h3 className="text-xl font-bold text-white">{founder.name}</h3>
                        <p className="mt-1 text-malectrica-blue">{founder.role}</p>
                        <p className="mt-3 text-gray-400">{founder.bio}</p>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Link
                                href={`https://hackerone.com/${founder.hackerone}`}
                                target="_blank"
                                className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-malectrica-blue/10 text-malectrica-blue hover:bg-malectrica-blue/20 hover:text-malectrica-brightBlue transition-colors"
                              >
                                <span className="sr-only">HackerOne Profile</span>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.9999 0C5.37991 0 0 5.37991 0 11.9999C0 18.6199 5.37991 24 11.9999 24C18.6199 24 24 18.6199 24 11.9999C24 5.37991 18.6199 0 11.9999 0ZM16.9999 17.4L12 12.3999L6.99994 17.4L6.59998 17.0001L11.6 11.9999L6.59998 6.99994L6.99994 6.59998L12 11.6L16.9999 6.59998L17.4 6.99994L12.3999 11.9999L17.4 17.0001L16.9999 17.4Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>HackerOne: @{founder.hackerone}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Link
                                href={`https://bugcrowd.com/${founder.bugcrowd}`}
                                target="_blank"
                                className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-malectrica-blue/10 text-malectrica-blue hover:bg-malectrica-blue/20 hover:text-malectrica-brightBlue transition-colors"
                              >
                                <span className="sr-only">Bugcrowd Profile</span>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 3.5C15.0376 3.5 17.7501 5.02333 19.3262 7.375C19.1766 7.66667 18.9355 7.91667 18.6262 8.125C18.1262 8.45833 17.5012 8.625 16.7512 8.625C15.9179 8.625 15.2262 8.39167 14.6762 7.925C14.1262 7.45833 13.8512 6.85833 13.8512 6.125C13.8512 5.875 13.8929 5.64167 13.9762 5.425C13.3429 5.14167 12.6845 5 12.0012 5C9.24258 5 7.00122 7.24167 7.00122 10C7.00122 12.7583 9.24258 15 12.0012 15C14.7596 15 17.0012 12.7583 17.0012 10C17.0012 9.95833 17.0012 9.91667 17.0012 9.875C17.3345 9.79167 17.6429 9.65 17.9262 9.45C18.3429 9.15833 18.6762 8.79167 18.9262 8.35C18.9762 8.89167 19.0012 9.44167 19.0012 10C19.0012 13.8583 15.8596 17 12.0012 17C8.14258 17 5.00122 13.8583 5.00122 10C5.00122 6.14167 8.14258 3 12.0012 3C12.0012 3 12.0012 3 12 3.5ZM12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Bugcrowd: @{founder.bugcrowd}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Link
                                href={`https://github.com/${founder.github}`}
                                target="_blank"
                                className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-malectrica-blue/10 text-malectrica-blue hover:bg-malectrica-blue/20 hover:text-malectrica-brightBlue transition-colors"
                              >
                                <span className="sr-only">GitHub Profile</span>
                                <Github className="h-4 w-4" />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>GitHub: @{founder.github}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center w-full">
              <Link href="/team">
                <Button
                  variant="outline"
                  className="gap-1 border-malectrica-blue/50 text-malectrica-blue bg-malectrica-blue/10 hover:bg-malectrica-blue/20 hover:text-malectrica-brightBlue transition-all hover:translate-y-[-2px]"
                >
                  Meet Our Full Team <Users className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-malectrica-dark via-malectrica-blue/30 to-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-100">
                  Stay Updated on Security Threats
                </h2>
                <p className="text-gray-400 md:text-xl">
                  Subscribe to our newsletter for the latest security research, tools, and vulnerabilities.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Input
                    placeholder="Enter your email"
                    className="sm:min-w-[300px] bg-malectrica-darker border-malectrica-blue/30 text-gray-200 focus:border-malectrica-blue/60 transition-colors"
                  />
                  <Button
                    className="bg-malectrica-blue/70 text-gray-200 hover:bg-malectrica-blue mt-2 sm:mt-0 transition-all hover:translate-y-[-2px]"
                    onClick={handleSubscribe}
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-gray-400">
                  By subscribing, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="text-malectrica-blue hover:text-malectrica-brightBlue transition-colors"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-malectrica-blue hover:text-malectrica-brightBlue transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-malectrica-blue/20 bg-black text-gray-100 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
                <Zap className="h-6 w-6 text-malectrica-brightBlue" />
                <span className="font-bold text-xl">Malectrica</span>
              </Link>
              <p className="text-sm text-gray-400">
                A cybersecurity research collective dedicated to making the digital world safer for everyone.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/tools" className="hover:text-malectrica-brightBlue transition-colors">
                    Security Tools
                  </Link>
                </li>
                <li>
                  <Link href="/vulnerabilities" className="hover:text-malectrica-brightBlue transition-colors">
                    Vulnerabilities
                  </Link>
                </li>
                <li>
                  <Link href="/pocs" className="hover:text-malectrica-brightBlue transition-colors">
                    POCs
                  </Link>
                </li>
                <li>
                  <Link href="/writeups" className="hover:text-malectrica-brightBlue transition-colors">
                    Write-ups
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-malectrica-brightBlue transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-malectrica-brightBlue transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-malectrica-brightBlue transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-malectrica-brightBlue transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-malectrica-brightBlue transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:text-malectrica-brightBlue transition-colors">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/privacy" className="hover:text-malectrica-brightBlue transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-malectrica-brightBlue transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/disclosure" className="hover:text-malectrica-brightBlue transition-colors">
                    Responsible Disclosure
                  </Link>
                </li>
                <li>
                  <Link href="/ethics" className="hover:text-malectrica-brightBlue transition-colors">
                    Ethics Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-malectrica-blue/20 pt-8 flex flex-col-reverse gap-4 md:flex-row md:justify-between">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Malectrica. All rights reserved.</p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/malectrica"
                target="_blank"
                className="text-gray-400 hover:text-malectrica-brightBlue transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com/malectrica"
                target="_blank"
                className="text-gray-400 hover:text-malectrica-brightBlue transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com/company/malectrica"
                target="_blank"
                className="text-gray-400 hover:text-malectrica-brightBlue transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

