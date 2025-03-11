"use client"

import Link from "next/link"
import { ChevronRight, Filter, CalendarDays, Code, Github, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState, useEffect } from "react"

export default function POCsPage() {
  const pocs = [
    {
      title: "XSS Vulnerability in Web Framework",
      description:
        "This POC demonstrates a cross-site scripting vulnerability in the popular framework that bypasses built-in XSS protection.",
      fullDescription:
        "This proof-of-concept demonstrates a severe cross-site scripting (XSS) vulnerability affecting versions 5.2.0 through 5.4.3 of the WebFrame framework. The vulnerability allows attackers to bypass the framework's built-in XSS protections by using a combination of HTML5 template elements and SVG animations. This can lead to client-side code execution in the context of the victim's browser session.",
      language: "JavaScript",
      date: "2023-12-01",
      author: "Alex Chen",
      cve: "CVE-2023-32156",
      affected: "WebFrame 5.2.0 - 5.4.3",
      impact: "High",
      mitigation: "Upgrade to WebFrame 5.4.4 or apply the security patch from the vendor.",
      verifiedWorks: true,
      views: 3241,
      downloads: 876,
      tags: ["XSS", "Web Security", "Client-Side"],
    },
    {
      title: "Buffer Overflow in IoT Device Firmware",
      description:
        "A demonstration of exploiting a buffer overflow vulnerability in a widely-used IoT device that can lead to remote code execution.",
      fullDescription:
        "This proof-of-concept demonstrates a critical buffer overflow vulnerability in the firmware of SmartConnect IoT devices (models SC-100, SC-200, and SC-300) running firmware versions 2.1.0 through 2.4.2. The vulnerability exists in the network packet processing component where input validation is insufficient, allowing an attacker to send specially crafted packets that trigger a buffer overflow and potentially achieve remote code execution with device privileges.",
      language: "C",
      date: "2023-11-12",
      author: "Maria Rodriguez",
      cve: "CVE-2023-27431",
      affected: "SmartConnect IoT devices (firmware 2.1.0 - 2.4.2)",
      impact: "Critical",
      mitigation: "Update device firmware to version 2.4.3 or later which includes the security patch.",
      verifiedWorks: true,
      views: 2985,
      downloads: 1243,
      tags: ["Buffer Overflow", "IoT", "Firmware", "RCE"],
    },
    {
      title: "JWT Token Forgery Exploit",
      description:
        "This POC shows how to forge JWT tokens in applications using a vulnerable library version, allowing unauthorized access.",
      fullDescription:
        "This proof-of-concept demonstrates a vulnerability in the SecureToken JWT library (versions 1.3.0 through 1.5.2) that allows attackers to forge valid JSON Web Tokens (JWT) due to improper signature verification. The vulnerability stems from a flawed implementation of the 'none' algorithm validation, which can be exploited to create tokens with arbitrary claims that will be accepted as valid without requiring any cryptographic key.",
      language: "Python",
      date: "2023-10-18",
      author: "Sam Patel",
      cve: "CVE-2023-18972",
      affected: "SecureToken JWT Library 1.3.0 - 1.5.2",
      impact: "Critical",
      mitigation:
        "Update to SecureToken version 1.5.3 or later, and explicitly disable the 'none' algorithm in JWT verification settings.",
      verifiedWorks: true,
      views: 4728,
      downloads: 1856,
      tags: ["JWT", "Authentication", "Crypto"],
    },
    {
      title: "SSRF in Cloud Service Provider API",
      description:
        "A server-side request forgery vulnerability in a major cloud provider's management API that allows internal network scanning.",
      fullDescription:
        "This proof-of-concept demonstrates a server-side request forgery (SSRF) vulnerability in CloudManager's API service (versions 2.8.0 to 3.2.1). The vulnerability exists in the resource validation endpoint which improperly validates URLs in user-provided configuration files. An attacker can exploit this vulnerability to make requests to internal services behind the firewall, potentially accessing sensitive metadata and other internal resources.",
      language: "Python",
      date: "2023-09-25",
      author: "Jie Zhang",
      cve: "CVE-2023-21098",
      affected: "CloudManager API 2.8.0 - 3.2.1",
      impact: "High",
      mitigation: "Upgrade to CloudManager API 3.2.2 or later which includes proper URL validation.",
      verifiedWorks: true,
      views: 3127,
      downloads: 942,
      tags: ["SSRF", "Cloud", "API", "Network"],
    },
    {
      title: "SQL Injection in E-Commerce Platform",
      description: "A blind SQL injection vulnerability in a popular e-commerce platform's product search feature.",
      fullDescription:
        "This proof-of-concept demonstrates a blind SQL injection vulnerability in the ShopSystem e-commerce platform (versions 4.5.0 to 4.8.3). The vulnerability exists in the product search feature where user input is not properly sanitized before being used in database queries. By manipulating the search parameters, an attacker can execute arbitrary SQL commands against the backend database, potentially extracting sensitive information like customer data and credentials.",
      language: "PHP",
      date: "2023-08-17",
      author: "Emma Wilson",
      cve: "CVE-2023-15762",
      affected: "ShopSystem 4.5.0 - 4.8.3",
      impact: "High",
      mitigation: "Update to ShopSystem 4.8.4 or later, which implements prepared statements for all database queries.",
      verifiedWorks: true,
      views: 2456,
      downloads: 813,
      tags: ["SQL Injection", "E-commerce", "Database"],
    },
    {
      title: "Path Traversal in File Upload Component",
      description:
        "A path traversal vulnerability in a widely-used file upload library that allows writing files to arbitrary locations.",
      fullDescription:
        "This proof-of-concept demonstrates a path traversal vulnerability in the FileProcessor library (versions 2.0.0 to 2.3.5) used in many web applications for file upload functionality. The vulnerability exists in the file path sanitization routine which can be bypassed using specific path sequences. An attacker can exploit this to upload files to arbitrary locations on the server filesystem, potentially leading to remote code execution if the files are uploaded to executable directories.",
      language: "JavaScript",
      date: "2023-07-24",
      author: "Marcus Johnson",
      cve: "CVE-2023-13529",
      affected: "FileProcessor Library 2.0.0 - 2.3.5",
      impact: "Critical",
      mitigation:
        "Update to FileProcessor 2.3.6 or later which implements proper path canonicalization and validation.",
      verifiedWorks: true,
      views: 1985,
      downloads: 679,
      tags: ["Path Traversal", "File Upload", "Web Security"],
    },
    {
      title: "OAuth2 Redirect URI Validation Bypass",
      description:
        "A vulnerability in OAuth2 implementation that allows attackers to bypass redirect URI validation and steal authorization codes.",
      fullDescription:
        "This proof-of-concept demonstrates a security bypass vulnerability in AuthProvider's OAuth2 implementation (versions 3.1.0 to 3.4.2). The vulnerability stems from a flaw in the redirect URI validation logic which fails to correctly normalize URIs before comparison. An attacker can exploit this vulnerability to bypass the redirect URI validation by using specially crafted URLs, potentially stealing authorization codes and gaining unauthorized access to user accounts.",
      language: "Python",
      date: "2023-06-15",
      author: "Olivia Chen",
      cve: "CVE-2023-09875",
      affected: "AuthProvider OAuth2 3.1.0 - 3.4.2",
      impact: "High",
      mitigation:
        "Update to AuthProvider 3.4.3 or later which implements proper URI normalization and strict validation.",
      verifiedWorks: true,
      views: 2563,
      downloads: 947,
      tags: ["OAuth", "Authentication", "Web Security"],
    },
    {
      title: "Container Escape via Host Mount",
      description:
        "A demonstration of a container escape technique that leverages improperly configured volume mounts to access the host filesystem.",
      fullDescription:
        "This proof-of-concept demonstrates a container escape vulnerability in ContainerPlatform (versions 4.2.0 to 4.5.1) when used with specific mount configurations. The vulnerability exists due to improper validation of volume mount paths, allowing a privileged container to access and modify the host filesystem beyond intended boundaries. An attacker with access to a container can exploit this to escape the container environment and potentially compromise the host system.",
      language: "Bash",
      date: "2023-05-22",
      author: "David Kumar",
      cve: "CVE-2023-08431",
      affected: "ContainerPlatform 4.2.0 - 4.5.1",
      impact: "Critical",
      mitigation:
        "Update to ContainerPlatform 4.5.2 or later and review all volume mount configurations for potential security issues.",
      verifiedWorks: true,
      views: 3789,
      downloads: 1255,
      tags: ["Container", "Privilege Escalation", "Docker", "Kubernetes"],
    },
  ]

  const [currentPage, setCurrentPage] = useState(1)
  const [language, setLanguage] = useState("All Languages")
  const [severity, setSeverity] = useState("All Severities")
  const itemsPerPage = 4
  const [filteredPocs, setFilteredPocs] = useState(pocs)
  const [displayedPocs, setDisplayedPocs] = useState([])
  // Add a new state variable for the active tab
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    let result = pocs

    // Filter by language
    if (language !== "All Languages") {
      result = result.filter((poc) => poc.language === language)
    }

    if (severity !== "All Severities") {
      result = result.filter((poc) => poc.impact === severity)
    }

    // Filter and sort by tab
    switch (activeTab) {
      case "verified":
        result = result.filter((poc) => poc.verifiedWorks === true)
        break
      case "recent":
        result = [...result].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
      case "popular":
        result = [...result].sort((a, b) => b.views - a.views)
        break
      // "all" case doesn't need special handling
    }

    setFilteredPocs(result)

    // Reset to first page when filters change
    setCurrentPage(1)
  }, [language, severity, activeTab])

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    setDisplayedPocs(filteredPocs.slice(startIndex, endIndex))
  }, [currentPage, filteredPocs, itemsPerPage])

  return (
    <div className="min-h-screen bg-malectrica-dark text-gray-100">
      <main className="container py-12">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Proof of Concepts</h1>
              <p className="text-gray-400 mt-2">
                Demonstration code for security researchers to understand and verify vulnerabilities
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <Tabs defaultValue="all" className="w-full lg:w-auto" onValueChange={setActiveTab}>
              <TabsList className="bg-malectrica-darker">
                <TabsTrigger value="all">All POCs</TabsTrigger>
                <TabsTrigger value="verified">Verified</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              <Select value={language} onValueChange={(value) => setLanguage(value)}>
                <SelectTrigger className="w-full sm:w-[150px] bg-malectrica-darker border-malectrica-blue/30">
                  <SelectValue className="text-white">{language}</SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-malectrica-darker border-malectrica-blue/30 text-white">
                  <SelectItem value="All Languages">All Languages</SelectItem>
                  <SelectItem value="JavaScript">JavaScript</SelectItem>
                  <SelectItem value="Python">Python</SelectItem>
                  <SelectItem value="C/C++">C/C++</SelectItem>
                  <SelectItem value="PHP">PHP</SelectItem>
                  <SelectItem value="Bash">Bash</SelectItem>
                </SelectContent>
              </Select>

              <Select value={severity} onValueChange={(value) => setSeverity(value)}>
                <SelectTrigger className="w-full sm:w-[150px] bg-malectrica-darker border-malectrica-blue/30">
                  <SelectValue className="text-white">{severity}</SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-malectrica-darker border-malectrica-blue/30 text-white">
                  <SelectItem value="All Severities">All Severities</SelectItem>
                  <SelectItem value="Critical">Critical</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>

              <div className="hidden lg:flex gap-2">
                <Button variant="outline" size="icon" className="border-malectrica-blue/30 bg-malectrica-darker">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-malectrica-blue/30 bg-malectrica-darker">
                  <CalendarDays className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid gap-6 mt-6">
            {displayedPocs.map((poc, i) => (
              <Card
                key={i}
                className="bg-malectrica-darker border-malectrica-blue/20 hover:bg-malectrica-blue/10 transition-colors"
              >
                <CardHeader>
                  <div className="flex justify-between items-start gap-2 flex-wrap md:flex-nowrap">
                    <div>
                      <CardTitle className="text-xl text-white">{poc.title}</CardTitle>
                      <CardDescription className="mt-2 text-gray-400">{poc.description}</CardDescription>
                    </div>
                    <div className="flex-shrink-0">
                      <Badge variant="outline" className="border-malectrica-blue/30 text-malectrica-blue">
                        {poc.language}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-sm">
                    <div className="flex flex-col gap-1">
                      <span className="text-gray-400">CVE:</span>
                      <span className="text-malectrica-blue">{poc.cve}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-gray-400">Affected:</span>
                      <span className="text-gray-200">{poc.affected}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-gray-400">Impact:</span>
                      <span
                        className={
                          poc.impact === "Critical"
                            ? "text-red-400"
                            : poc.impact === "High"
                              ? "text-orange-400"
                              : "text-yellow-400"
                        }
                      >
                        {poc.impact}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-gray-400">Date:</span>
                      <span className="text-gray-200">{poc.date}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {poc.tags.map((tag, j) => (
                      <Badge
                        key={j}
                        variant="secondary"
                        className="bg-malectrica-purple/20 text-malectrica-purple text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center text-sm gap-4 mt-4 text-gray-400">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{poc.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Code className="h-4 w-4" />
                      <span>{poc.downloads} downloads</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>By</span>
                      <span className="text-malectrica-blue">{poc.author}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1 border-malectrica-purple/50 text-malectrica-purple bg-malectrica-purple/10 hover:bg-malectrica-purple/20"
                  >
                    <Github className="h-4 w-4" /> View Code
                  </Button>
                  <Link href={`/pocs/${poc.cve.toLowerCase()}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1 border-malectrica-blue/50 text-malectrica-blue bg-malectrica-blue/10 hover:bg-malectrica-blue/20 hover:text-malectrica-brightBlue"
                    >
                      View Details <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
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

