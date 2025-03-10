"use client"

import Link from "next/link"
import { ChevronRight, Filter, ArrowDownAZ, Terminal, Shield, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState, useEffect } from "react"

export default function ToolsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [language, setLanguage] = useState("all")
  const [category, setCategory] = useState("all")
  const itemsPerPage = 6
  const allTools = [
    {
      icon: <Terminal className="h-10 w-10 text-malectrica-brightBlue" />,
      title: "NetScan",
      description: "Advanced network scanning tool with vulnerability detection capabilities",
      longDescription:
        "NetScan is a sophisticated network scanning utility designed to identify vulnerabilities in network infrastructure. It performs port scanning, service enumeration, and vulnerability detection with minimal footprint.",
      language: "Python",
      stars: 342,
      forks: 87,
      lastUpdate: "2023-11-23",
      readme:
        "# NetScan\n\nAdvanced network scanning tool with vulnerability detection capabilities.\n\n## Features\n\n- Fast TCP/UDP port scanning\n- Service fingerprinting\n- CVE correlation\n- Low detection profile\n- Customizable scan profiles",
      tags: ["Network", "Scanner", "Security", "Pentest"],
    },
    {
      icon: <Shield className="h-10 w-10 text-malectrica-brightBlue" />,
      title: "EncryptShield",
      description: "File encryption utility with military-grade protection algorithms",
      longDescription:
        "EncryptShield provides advanced encryption capabilities for sensitive files using military-grade algorithms. It offers a clean interface for encrypting files and folders with minimal performance impact.",
      language: "Rust",
      stars: 526,
      forks: 132,
      lastUpdate: "2023-12-05",
      readme:
        "# EncryptShield\n\nFile encryption utility with military-grade protection algorithms.\n\n## Features\n\n- AES-256 encryption\n- RSA-4096 key support\n- Secure key management\n- File integrity verification\n- Encrypted containers",
      tags: ["Encryption", "Security", "Privacy", "Rust"],
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-malectrica-brightBlue" />,
      title: "FireWatch",
      description: "Real-time intrusion detection system for containerized environments",
      longDescription:
        "FireWatch is an intrusion detection system specifically designed for containerized environments. It monitors container activity in real-time and alerts on suspicious behavior patterns.",
      language: "Go",
      stars: 287,
      forks: 64,
      lastUpdate: "2023-10-17",
      readme:
        "# FireWatch\n\nReal-time intrusion detection system for containerized environments.\n\n## Features\n\n- Kubernetes integration\n- Docker container monitoring\n- Behavior-based anomaly detection\n- Real-time alerts\n- Low overhead monitoring",
      tags: ["IDS", "Container", "Kubernetes", "Security"],
    },
    {
      icon: <Terminal className="h-10 w-10 text-malectrica-purple" />,
      title: "APIGuard",
      description: "API security testing and monitoring toolkit",
      longDescription:
        "APIGuard helps security teams test and monitor API endpoints for common vulnerabilities. It can be integrated into CI/CD pipelines for continuous security validation.",
      language: "JavaScript",
      stars: 204,
      forks: 48,
      lastUpdate: "2023-09-28",
      readme:
        "# APIGuard\n\nAPI security testing and monitoring toolkit.\n\n## Features\n\n- REST API vulnerability scanning\n- Authentication testing\n- Rate limiting verification\n- Input validation testing\n- CI/CD integration",
      tags: ["API", "Web Security", "Testing", "JavaScript"],
    },
    {
      icon: <Shield className="h-10 w-10 text-malectrica-purple" />,
      title: "MemShielder",
      description: "Memory protection toolkit for C/C++ applications",
      longDescription:
        "MemShielder provides advanced memory protection capabilities for C/C++ applications. It helps developers prevent buffer overflows, use-after-free, and other memory-related vulnerabilities.",
      language: "C++",
      stars: 176,
      forks: 38,
      lastUpdate: "2023-11-09",
      readme:
        "# MemShielder\n\nMemory protection toolkit for C/C++ applications.\n\n## Features\n\n- Buffer overflow protection\n- Use-after-free detection\n- Memory allocation tracker\n- Heap canaries\n- Custom allocator integration",
      tags: ["Memory", "C++", "Security", "Low-level"],
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-malectrica-brightBlue" />,
      title: "DomainRadar",
      description: "Advanced domain monitoring for phishing prevention",
      longDescription:
        "DomainRadar continuously monitors for suspicious domain registrations that could be used in phishing attacks targeting your organization. It provides early warning of potential impersonation attempts.",
      language: "Python",
      stars: 163,
      forks: 29,
      lastUpdate: "2023-10-12",
      readme:
        "# DomainRadar\n\nAdvanced domain monitoring for phishing prevention.\n\n## Features\n\n- Typosquat detection\n- New domain alerts\n- Visual similarity scoring\n- Integration with security platforms\n- Custom alerting rules",
      tags: ["Phishing", "Domain", "Monitoring", "Security"],
    },
    {
      icon: <Terminal className="h-10 w-10 text-malectrica-brightBlue" />,
      title: "CloudLock",
      description: "Security auditing tool for cloud infrastructure",
      longDescription:
        "CloudLock performs comprehensive security audits of cloud infrastructure across AWS, Azure, and GCP. It identifies misconfigurations, overly permissive policies, and security vulnerabilities.",
      language: "Python",
      stars: 312,
      forks: 76,
      lastUpdate: "2023-12-01",
      readme:
        "# CloudLock\n\nSecurity auditing tool for cloud infrastructure.\n\n## Features\n\n- Multi-cloud support (AWS, Azure, GCP)\n- IAM policy analysis\n- Network configuration auditing\n- Compliance verification\n- Remediation suggestions",
      tags: ["Cloud", "AWS", "Azure", "GCP", "Auditing"],
    },
    {
      icon: <Shield className="h-10 w-10 text-malectrica-purple" />,
      title: "ThreatHunter",
      description: "Threat hunting automation platform",
      longDescription:
        "ThreatHunter automates common threat hunting procedures across endpoint and network data. It enables security teams to proactively search for indicators of compromise that may have evaded existing defenses.",
      language: "Rust",
      stars: 245,
      forks: 52,
      lastUpdate: "2023-11-17",
      readme:
        "# ThreatHunter\n\nThreat hunting automation platform.\n\n## Features\n\n- IOC scanning\n- YARA rule support\n- Timeline analysis\n- Behavioral detection\n- Reporting and dashboards",
      tags: ["Threat Hunting", "Security", "Automation", "SOC"],
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-malectrica-brightBlue" />,
      title: "SecretSentry",
      description: "Secrets and credential scanner for code repositories",
      longDescription:
        "SecretSentry scans code repositories for accidentally committed credentials, API keys, and other sensitive information. It can be integrated into CI/CD pipelines to prevent secret exposure.",
      language: "Go",
      stars: 189,
      forks: 41,
      lastUpdate: "2023-10-29",
      readme:
        "# SecretSentry\n\nSecrets and credential scanner for code repositories.\n\n## Features\n\n- API key detection\n- Password identification\n- Custom secret patterns\n- Git hook integration\n- CI/CD pipeline integration",
      tags: ["Secret", "Scanner", "DevSecOps", "Git"],
    },
  ]
  const featuredTools = allTools.slice(0, 3)
  const [filteredTools, setFilteredTools] = useState(allTools)
  const [displayedTools, setDisplayedTools] = useState([])

  useEffect(() => {
    let result = allTools

    if (language !== "all") {
      result = result.filter((tool) => tool.language.toLowerCase() === language.toLowerCase())
    }

    if (category !== "all") {
      result = result.filter((tool) => tool.tags.some((tag) => tag.toLowerCase() === category.toLowerCase()))
    }

    setFilteredTools(result)

    // Reset to first page when filters change
    setCurrentPage(1)
  }, [language, category])

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    setDisplayedTools(filteredTools.slice(startIndex, endIndex))
  }, [currentPage, filteredTools, itemsPerPage])

  return (
    <div className="min-h-screen bg-malectrica-dark text-gray-100">
      <main className="container py-12">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Security Tools</h1>
              <p className="text-gray-400 mt-2">Open-source security tools developed by our research team</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList className="bg-malectrica-darker">
                <TabsTrigger value="all">All Tools</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="latest">Latest</TabsTrigger>
              </TabsList>
              <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                <div className="flex gap-2">
                  <Select defaultValue="language" onValueChange={(value) => setLanguage(value)}>
                    <SelectTrigger className="w-full md:w-[150px] bg-malectrica-darker border-malectrica-blue/30">
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent className="bg-malectrica-darker border-malectrica-blue/30 text-white">
                      <SelectItem value="all">All Languages</SelectItem>
                      <SelectItem value="python">Python</SelectItem>
                      <SelectItem value="rust">Rust</SelectItem>
                      <SelectItem value="go">Go</SelectItem>
                      <SelectItem value="javascript">JavaScript</SelectItem>
                      <SelectItem value="cpp">C/C++</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="category" onValueChange={(value) => setCategory(value)}>
                    <SelectTrigger className="w-full md:w-[150px] bg-malectrica-darker border-malectrica-blue/30">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent className="bg-malectrica-darker border-malectrica-blue/30 text-white">
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="network">Network</SelectItem>
                      <SelectItem value="encryption">Encryption</SelectItem>
                      <SelectItem value="detection">Detection</SelectItem>
                      <SelectItem value="cloud">Cloud</SelectItem>
                      <SelectItem value="app">Application</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="outline" size="icon" className="border-malectrica-blue/30 bg-malectrica-darker">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-malectrica-blue/30 bg-malectrica-darker">
                  <ArrowDownAZ className="h-4 w-4" />
                </Button>
              </div>
              <TabsContent value="all" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {displayedTools.map((tool, i) => (
                    <Card
                      key={i}
                      className="bg-malectrica-darker border-malectrica-blue/20 hover:bg-malectrica-blue/10 transition-colors"
                    >
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          {tool.icon}
                          <CardTitle className="text-xl text-white">{tool.title}</CardTitle>
                        </div>
                        <CardDescription className="text-gray-400">{tool.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-wrap gap-2">
                        {tool.tags.map((tag, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className={
                              i % 2 === 0
                                ? "border-malectrica-blue/30 text-malectrica-blue"
                                : "border-malectrica-purple/30 text-malectrica-purple"
                            }
                          >
                            {tag}
                          </Badge>
                        ))}
                      </CardContent>
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
                        <Link href={`/tools/${tool.title.toLowerCase()}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="gap-1 text-malectrica-blue hover:text-malectrica-brightBlue hover:bg-malectrica-blue/20"
                          >
                            View Tool <ChevronRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="featured" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {featuredTools.map((tool, i) => (
                    <Card
                      key={i}
                      className="bg-malectrica-darker border-malectrica-blue/20 hover:bg-malectrica-blue/10 transition-colors"
                    >
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          {tool.icon}
                          <CardTitle className="text-xl text-white">{tool.title}</CardTitle>
                        </div>
                        <CardDescription className="text-gray-400">{tool.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-wrap gap-2">
                        {tool.tags.map((tag, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className={
                              i % 2 === 0
                                ? "border-malectrica-blue/30 text-malectrica-blue"
                                : "border-malectrica-purple/30 text-malectrica-purple"
                            }
                          >
                            {tag}
                          </Badge>
                        ))}
                      </CardContent>
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
                        <Link href={`/tools/${tool.title.toLowerCase()}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="gap-1 text-malectrica-blue hover:text-malectrica-brightBlue hover:bg-malectrica-blue/20"
                          >
                            View Tool <ChevronRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="flex items-center justify-center mt-8 gap-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "outline"}
                size="icon"
                className={`w-9 h-9 ${
                  page === currentPage
                    ? "bg-malectrica-blue/70 hover:bg-malectrica-blue"
                    : "border-malectrica-blue/30 bg-malectrica-darker hover:bg-malectrica-blue/20"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              className="w-9 h-9 border-malectrica-blue/30 bg-malectrica-darker hover:bg-malectrica-blue/20"
              onClick={() => setCurrentPage(Math.min(currentPage + 1, 5))}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

