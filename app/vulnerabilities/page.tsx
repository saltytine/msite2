"use client"

import Link from "next/link"
import { ChevronRight, Filter, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState, useEffect } from "react"

export default function VulnerabilitiesPage() {
  const vulnerabilities = [
    {
      title: "Authentication Bypass in CMS Platform",
      severity: "Critical",
      date: "2023-11-15",
      vendor: "ContentWave",
      cve: "CVE-2023-87654",
      status: "Patched",
      description:
        "An authentication bypass vulnerability was discovered in ContentWave CMS versions 3.2.0 through 3.5.9 that allows attackers to gain administrative access without valid credentials.",
      impact:
        "This vulnerability allows unauthorized users to gain administrative access to the CMS, potentially leading to complete system compromise.",
      affected_versions: "ContentWave CMS 3.2.0 - 3.5.9",
      references: [
        "https://contentwave.com/security/advisories/CVE-2023-87654",
        "https://nvd.nist.gov/vuln/detail/CVE-2023-87654",
      ],
      discovery_date: "2023-10-18",
      disclosure_date: "2023-11-15",
      patch_date: "2023-11-02",
      category: "Authentication Bypass",
    },
    {
      title: "SQL Injection in E-commerce Framework",
      severity: "High",
      date: "2023-10-22",
      vendor: "ShopPortal",
      cve: "CVE-2023-54321",
      status: "Patched",
      description:
        "A SQL injection vulnerability in ShopPortal's product search functionality allows attackers to execute arbitrary SQL commands via malformed search parameters.",
      impact:
        "This vulnerability can be exploited to access, modify, or delete sensitive data in the backend database.",
      affected_versions: "ShopPortal 2.4.1 - 2.6.2",
      references: ["https://shopportal.com/security/CVE-2023-54321", "https://nvd.nist.gov/vuln/detail/CVE-2023-54321"],
      discovery_date: "2023-09-30",
      disclosure_date: "2023-10-22",
      patch_date: "2023-10-15",
      category: "SQL Injection",
    },
    {
      title: "Remote Code Execution in DNS Service",
      severity: "Critical",
      date: "2023-09-10",
      vendor: "DNSCloud",
      cve: "CVE-2023-98765",
      status: "Patched",
      description:
        "A buffer overflow in DNSCloud's DNS record parser allows remote attackers to execute arbitrary code by sending specially crafted DNS packets.",
      impact:
        "This vulnerability allows remote attackers to execute arbitrary code with the privileges of the DNS service.",
      affected_versions: "DNSCloud 5.0.0 - 5.2.3",
      references: [
        "https://dnscloud.net/security/bulletin/CVE-2023-98765",
        "https://nvd.nist.gov/vuln/detail/CVE-2023-98765",
      ],
      discovery_date: "2023-08-15",
      disclosure_date: "2023-09-10",
      patch_date: "2023-09-05",
      category: "Buffer Overflow",
    },
    {
      title: "API Key Leakage in Mobile SDK",
      severity: "Medium",
      date: "2023-08-05",
      vendor: "AppConnect",
      cve: "CVE-2023-56789",
      status: "Patched",
      description:
        "The AppConnect Mobile SDK stores API keys in plaintext in a world-readable cache file, allowing other applications on the device to extract sensitive credentials.",
      impact:
        "This vulnerability may lead to the exposure of API keys, potentially allowing unauthorized access to backend services.",
      affected_versions: "AppConnect SDK 2.1.0 - 2.4.2",
      references: [
        "https://appconnect.dev/security/advisories/CVE-2023-56789",
        "https://nvd.nist.gov/vuln/detail/CVE-2023-56789",
      ],
      discovery_date: "2023-07-10",
      disclosure_date: "2023-08-05",
      patch_date: "2023-08-01",
      category: "Information Disclosure",
    },
    {
      title: "Cross-Site Scripting in Forum Software",
      severity: "Medium",
      date: "2023-07-12",
      vendor: "CommunityTalk",
      cve: "CVE-2023-11223",
      status: "Patched",
      description:
        "A stored XSS vulnerability in CommunityTalk's user profile page allows attackers to inject malicious JavaScript code that executes in visitors' browsers.",
      impact:
        "This vulnerability can be exploited to steal user cookies, perform actions on behalf of users, or deface the website.",
      affected_versions: "CommunityTalk 4.2.1 - 4.5.0",
      references: [
        "https://communitytalk.org/security/CVE-2023-11223",
        "https://nvd.nist.gov/vuln/detail/CVE-2023-11223",
      ],
      discovery_date: "2023-06-25",
      disclosure_date: "2023-07-12",
      patch_date: "2023-07-08",
      category: "Cross-Site Scripting",
    },
    {
      title: "Path Traversal in File Upload System",
      severity: "High",
      date: "2023-06-28",
      vendor: "FileStack",
      cve: "CVE-2023-34567",
      status: "Patched",
      description:
        "A path traversal vulnerability in FileStack's file upload component allows attackers to write files to arbitrary locations on the server filesystem.",
      impact:
        "This vulnerability can be exploited to upload malicious files to sensitive locations, potentially leading to remote code execution.",
      affected_versions: "FileStack 3.0.0 - 3.2.2",
      references: [
        "https://filestack.io/security/advisories/CVE-2023-34567",
        "https://nvd.nist.gov/vuln/detail/CVE-2023-34567",
      ],
      discovery_date: "2023-06-10",
      disclosure_date: "2023-06-28",
      patch_date: "2023-06-22",
      category: "Path Traversal",
    },
    {
      title: "LDAP Injection in Identity Provider",
      severity: "Critical",
      date: "2023-05-15",
      vendor: "IdentityHub",
      cve: "CVE-2023-76543",
      status: "Patched",
      description:
        "An LDAP injection vulnerability in IdentityHub's user search functionality allows attackers to execute arbitrary LDAP commands via unsanitized input.",
      impact:
        "This vulnerability can be exploited to bypass authentication, extract sensitive data, or modify LDAP directory information.",
      affected_versions: "IdentityHub 2.8.0 - 2.9.5",
      references: [
        "https://identityhub.com/security/CVE-2023-76543",
        "https://nvd.nist.gov/vuln/detail/CVE-2023-76543",
      ],
      discovery_date: "2023-04-20",
      disclosure_date: "2023-05-15",
      patch_date: "2023-05-10",
      category: "Injection",
    },
    {
      title: "Open Redirect in Authentication Flow",
      severity: "Low",
      date: "2023-04-08",
      vendor: "AuthPortal",
      cve: "CVE-2023-23456",
      status: "Patched",
      description:
        "An open redirect vulnerability in AuthPortal's login flow allows attackers to redirect users to arbitrary external domains after authentication.",
      impact:
        "This vulnerability can be exploited for phishing attacks by redirecting users to malicious websites after a legitimate login.",
      affected_versions: "AuthPortal 1.5.0 - 1.8.3",
      references: [
        "https://authportal.com/security/bulletins/CVE-2023-23456",
        "https://nvd.nist.gov/vuln/detail/CVE-2023-23456",
      ],
      discovery_date: "2023-03-22",
      disclosure_date: "2023-04-08",
      patch_date: "2023-04-05",
      category: "Open Redirect",
    },
  ]
  const [currentPage, setCurrentPage] = useState(1)
  const [category, setCategory] = useState("All Categories")
  const [year, setYear] = useState("All Years")
  const itemsPerPage = 4
  const [filteredVulnerabilities, setFilteredVulnerabilities] = useState(vulnerabilities)
  const [displayedVulnerabilities, setDisplayedVulnerabilities] = useState([])
  // Add a new state variable for the active tab
  const [activeTab, setActiveTab] = useState("all")

  // Update the useEffect filtering logic to include severity filtering
  useEffect(() => {
    let result = vulnerabilities

    // Filter by category
    if (category !== "All Categories") {
      result = result.filter((vuln) => vuln.category.toLowerCase().includes(category.replace(" ", "").toLowerCase()))
    }

    // Filter by year
    if (year !== "All Years") {
      result = result.filter((vuln) => vuln.date.startsWith(year))
    }

    // Filter by severity (tab)
    if (activeTab !== "all") {
      result = result.filter((vuln) => vuln.severity.toLowerCase() === activeTab.toLowerCase())
    }

    setFilteredVulnerabilities(result)

    // Reset to first page when filters change
    setCurrentPage(1)
  }, [category, year, activeTab])

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    setDisplayedVulnerabilities(filteredVulnerabilities.slice(startIndex, endIndex))
  }, [currentPage, filteredVulnerabilities, itemsPerPage])

  return (
    <div className="min-h-screen bg-malectrica-dark text-gray-100">
      <main className="container py-12">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Vulnerabilities</h1>
              <p className="text-gray-400 mt-2">
                Responsibly disclosed security vulnerabilities found by our research team
              </p>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <TabsList className="bg-malectrica-darker">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="critical">Critical</TabsTrigger>
                <TabsTrigger value="high">High</TabsTrigger>
                <TabsTrigger value="medium">Medium</TabsTrigger>
                <TabsTrigger value="low">Low</TabsTrigger>
              </TabsList>
              <div className="flex flex-wrap gap-2 w-full lg:w-auto">
                <Select value={category} onValueChange={(value) => setCategory(value)}>
                  <SelectTrigger className="w-full sm:w-[180px] bg-malectrica-darker border-malectrica-blue/30">
                    <SelectValue className="text-white">{category}</SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-malectrica-darker border-malectrica-blue/30 text-white">
                    <SelectItem value="All Categories">All Categories</SelectItem>
                    <SelectItem value="Injection">Injection</SelectItem>
                    <SelectItem value="Authentication">Authentication</SelectItem>
                    <SelectItem value="XSS">Cross-Site Scripting</SelectItem>
                    <SelectItem value="Buffer Overflow">Buffer Overflow</SelectItem>
                    <SelectItem value="Information Disclosure">Information Disclosure</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={year} onValueChange={(value) => setYear(value)}>
                  <SelectTrigger className="w-full sm:w-[130px] bg-malectrica-darker border-malectrica-blue/30">
                    <SelectValue className="text-white">{year}</SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-malectrica-darker border-malectrica-blue/30 text-white">
                    <SelectItem value="All Years">All Years</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2020">2020</SelectItem>
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

            {/* TabsContent sections remain the same */}
          </Tabs>

          <div className="grid gap-6 mt-6">
            {displayedVulnerabilities.map((vuln, i) => (
              <Card
                key={i}
                className="bg-malectrica-darker border-malectrica-blue/20 hover:bg-malectrica-blue/10 transition-colors"
              >
                <CardHeader>
                  <div className="flex justify-between items-start gap-2 flex-wrap md:flex-nowrap">
                    <div>
                      <CardTitle className="text-xl text-white">{vuln.title}</CardTitle>
                      <CardDescription className="mt-2 text-gray-400">
                        {vuln.description.substring(0, 150)}...
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <Badge
                        variant={
                          vuln.severity === "Critical"
                            ? "destructive"
                            : vuln.severity === "High"
                              ? "outline"
                              : vuln.severity === "Medium"
                                ? "secondary"
                                : "outline"
                        }
                        className={
                          vuln.severity === "Critical"
                            ? "bg-red-600/80 text-gray-100"
                            : vuln.severity === "High"
                              ? "border-orange-500/80 text-orange-400"
                              : vuln.severity === "Medium"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "border-blue-500/80 text-blue-400"
                        }
                      >
                        {vuln.severity}
                      </Badge>
                      <Badge variant="outline" className="bg-green-500/10 text-green-400">
                        {vuln.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex flex-col gap-1">
                      <span className="text-gray-400">Vendor:</span>
                      <span className="text-gray-200">{vuln.vendor}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-gray-400">CVE:</span>
                      <span className="text-malectrica-blue">{vuln.cve}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-gray-400">Disclosure Date:</span>
                      <span className="text-gray-200">{vuln.date}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-gray-400">Category:</span>
                      <span className="text-malectrica-purple">{vuln.category}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-gray-400">Affected Versions:</span>
                      <span className="text-gray-200">{vuln.affected_versions}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Link href={`/vulnerabilities/${vuln.cve.toLowerCase()}`}>
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

