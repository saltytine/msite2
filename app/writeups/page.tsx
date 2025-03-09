import Link from "next/link"
import { ChevronRight, Search, Filter, Tag, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function WriteUpsPage() {
  const writeups = [
    {
      title: "Bypassing WAF Protection: A Case Study",
      excerpt:
        "An analysis of how we discovered and exploited weaknesses in popular web application firewalls to bypass security controls.",
      content:
        "In this comprehensive case study, we examine multiple techniques for bypassing modern web application firewall (WAF) protections. We focus on three major commercial WAF solutions and their respective detection mechanisms. Through systematic testing and analysis, we were able to identify several bypass techniques that allowed malicious payloads to reach the protected applications.\n\nOur research involved creating a testing framework that automatically generated and mutated attack payloads, testing them against various WAF rule sets. This approach allowed us to discover several novel evasion techniques, including specific encodings and payload structures that successfully evaded detection.\n\nThe vulnerabilities were responsibly disclosed to the vendors, and all have since been patched. This write-up includes the technical details of the bypass methods as well as recommendations for WAF users on how to strengthen their configurations to prevent similar bypasses.",
      date: "2023-12-05",
      author: "Jamie Wilson",
      authorImage: "/placeholder.svg?height=100&width=100",
      authorTitle: "Senior Security Researcher",
      readTime: "15 min read",
      tags: ["WAF", "Bypass", "Web Security", "Defense Evasion", "Penetration Testing"],
      relatedCVEs: ["CVE-2023-12345", "CVE-2023-23456"],
      category: "Web Security",
      views: 4562,
    },
    {
      title: "Reverse Engineering IoT Protocol",
      excerpt:
        "We reverse-engineered a proprietary IoT protocol and discovered multiple critical security flaws in the implementation.",
      content:
        "This write-up documents our journey reverse engineering a proprietary protocol used in popular smart home devices. The investigation began when we identified unusual network traffic patterns from these devices, prompting a deeper analysis of the communication protocol.\n\nUsing a combination of static and dynamic analysis techniques, we were able to fully map the proprietary protocol structure and discovered it lacked fundamental security controls. The protocol transmitted sensitive data without encryption, used predictable session identifiers, and contained no protection against replay attacks.\n\nWe detail the methodology used to reverse engineer the protocol, including the tools and techniques that proved most effective. Our findings include proof-of-concept attacks that could allow an attacker to take control of affected devices, access sensitive information, or use the devices as an entry point into the home network.\n\nFollowing responsible disclosure, the manufacturer has released firmware updates addressing these vulnerabilities. We provide recommendations for IoT developers to implement secure communication protocols from the design phase.",
      date: "2023-11-18",
      author: "Taylor Kim",
      authorImage: "/placeholder.svg?height=100&width=100",
      authorTitle: "IoT Security Specialist",
      readTime: "12 min read",
      tags: ["IoT", "Reverse Engineering", "Protocol Analysis", "Hardware Security"],
      relatedCVEs: ["CVE-2023-34567", "CVE-2023-45678"],
      category: "IoT Security",
      views: 3785,
    },
    {
      title: "Cloud Misconfigurations Leading to Data Exposure",
      excerpt:
        "Analysis of common cloud security misconfigurations that led to the exposure of sensitive data across multiple organizations.",
      content:
        "This research paper analyzes common cloud security misconfigurations across AWS, Azure, and Google Cloud Platform that have resulted in significant data exposures over the past year. We examined over 50 publicly reported incidents to identify patterns and common failure points in cloud security configurations.\n\nOur analysis revealed that the most frequent misconfigurations included overly permissive IAM policies, publicly accessible storage buckets without proper access controls, and inadequate encryption settings for sensitive data at rest and in transit. Many organizations were found to be using default security settings that didn't align with security best practices for their specific use cases.\n\nWe present detailed case studies of three major incidents, analyzing the specific misconfigurations that led to the exposures and the remediation steps taken. The paper includes a comprehensive checklist for organizations to audit their cloud environments against these common misconfigurations, as well as automated scanning tools that can help identify potential vulnerabilities before they can be exploited.",
      date: "2023-10-24",
      author: "Jordan Lee",
      authorImage: "/placeholder.svg?height=100&width=100",
      authorTitle: "Cloud Security Architect",
      readTime: "10 min read",
      tags: ["Cloud Security", "AWS", "Azure", "GCP", "Misconfigurations"],
      relatedCVEs: [],
      category: "Cloud Security",
      views: 5231,
    },
    {
      title: "Breaking SAML: Authentication Bypass Techniques",
      excerpt:
        "A deep dive into SAML implementation flaws that allowed authentication bypasses in enterprise single sign-on systems.",
      content:
        "This technical write-up examines vulnerabilities in SAML (Security Assertion Markup Language) implementations that allowed attackers to bypass authentication controls in enterprise single sign-on systems. Our research focused on analyzing multiple major SAML libraries and service providers over a six-month period.\n\nWe discovered several critical implementation flaws including XML signature wrapping attacks, attribute statement manipulation, and session handling vulnerabilities. These flaws could allow an attacker to forge SAML assertions, modify authentication contexts, or hijack authenticated sessions.\n\nThe paper provides a detailed explanation of each vulnerability, including the underlying technical causes and exploitation methods. We include code examples showing both vulnerable implementations and the corresponding fixes. For each vulnerability, we provide a step-by-step walkthrough of the attack process with practical examples.\n\nFollowing responsible disclosure, vendors have released patches for the identified vulnerabilities. We conclude with recommendations for organizations implementing SAML-based single sign-on solutions, including implementation best practices and automated testing approaches to verify the security of SAML implementations.",
      date: "2023-09-30",
      author: "Casey Morgan",
      authorImage: "/placeholder.svg?height=100&width=100",
      authorTitle: "Identity & Access Security Researcher",
      readTime: "18 min read",
      tags: ["SAML", "Authentication", "SSO", "XML", "Identity"],
      relatedCVEs: ["CVE-2023-56789", "CVE-2023-67890"],
      category: "Authentication",
      views: 4103,
    },
    {
      title: "Supply Chain Attacks: Detecting Malicious Packages",
      excerpt: "How we developed detection methods for identifying malicious code in open-source software packages.",
      content:
        "This research paper details our development of novel detection methods for identifying malicious code in open-source software packages. With the rise of supply chain attacks targeting development pipelines, we focused on creating both static and dynamic analysis techniques to detect potentially harmful behaviors in package dependencies.\n\nOur approach combines machine learning-based anomaly detection with targeted behavior analysis focusing on common malicious activities such as data exfiltration, persistence mechanisms, and obfuscation techniques. We tested our detection system against a dataset of confirmed malicious packages as well as benign packages with unusual but legitimate behaviors.\n\nThe paper presents the architecture of our detection system, the features used for classification, and the performance metrics achieved in our testing. We also discuss the challenges of reducing false positives while maintaining high detection rates, particularly for sophisticated attacks that attempt to blend in with legitimate code patterns.\n\nWe conclude with practical recommendations for development teams to implement package vetting processes and continuous monitoring of dependencies to reduce the risk of supply chain compromises.",
      date: "2023-08-15",
      author: "Robin Chang",
      authorImage: "/placeholder.svg?height=100&width=100",
      authorTitle: "Supply Chain Security Analyst",
      readTime: "14 min read",
      tags: ["Supply Chain", "Package Security", "NPM", "PyPI", "Static Analysis"],
      relatedCVEs: [],
      category: "Software Supply Chain",
      views: 3752,
    },
    {
      title: "Browser Fingerprinting Techniques and Countermeasures",
      excerpt: "An exploration of advanced browser fingerprinting methods and effective defense strategies.",
      content:
        "This comprehensive write-up explores the evolving landscape of browser fingerprinting techniques and the countermeasures available to privacy-conscious users. We analyze both established and emerging methods used to create unique browser fingerprints, including canvas fingerprinting, audio fingerprinting, WebGL fingerprinting, and several newer techniques leveraging modern browser APIs.\n\nOur research included creating a test platform to evaluate the effectiveness of different fingerprinting methods across browser versions and configurations. We measured the entropy contributed by each fingerprinting vector and how this changes when users implement various privacy protections.\n\nThe paper examines the effectiveness of common countermeasures, including browser privacy modes, fingerprinting-resistant browsers, extensions, and VPNs. We provide quantitative data on how each approach impacts both fingerprinting resistance and normal browsing functionality.\n\nWe conclude with recommendations for both users seeking privacy and web developers looking to balance legitimate needs for fraud detection with respect for user privacy. The paper includes practical configuration guides for achieving different levels of fingerprinting resistance depending on user requirements.",
      date: "2023-07-22",
      author: "Aiden Chen",
      authorImage: "/placeholder.svg?height=100&width=100",
      authorTitle: "Privacy Researcher",
      readTime: "16 min read",
      tags: ["Privacy", "Browser", "Fingerprinting", "Tracking", "Web Security"],
      relatedCVEs: [],
      category: "Privacy & Tracking",
      views: 4889,
    },
    {
      title: "Exploiting Race Conditions in Smart Contracts",
      excerpt: "How we identified and exploited critical race conditions in blockchain smart contracts.",
      content:
        "This technical write-up details our research into race conditions affecting blockchain smart contracts, with a focus on high-value DeFi protocols. We examine how the inherent concurrency challenges in blockchain environments can lead to exploitable vulnerabilities when smart contract developers fail to account for transaction ordering dependencies.\n\nWe present multiple case studies of race condition vulnerabilities, including front-running attacks, sandwich attacks, and reentrancy variations that leverage transaction ordering. For each vulnerability type, we provide code examples showing both vulnerable implementations and secure alternatives.\n\nThe paper includes practical demonstrations of how these vulnerabilities can be exploited in real-world scenarios, using both public testnets and custom blockchain environments. We detail the methodologies used to identify these vulnerabilities, combining static analysis, symbolic execution, and economic modeling of potential attack vectors.\n\nFollowing responsible disclosure to affected projects, we conclude with a comprehensive set of design patterns and coding practices that can help smart contract developers prevent race conditions. We also discuss the limitations of current automated tools in detecting these vulnerabilities and suggest improvements for future security analysis tools.",
      date: "2023-06-08",
      author: "Zoe Rodriguez",
      authorImage: "/placeholder.svg?height=100&width=100",
      authorTitle: "Blockchain Security Engineer",
      readTime: "20 min read",
      tags: ["Blockchain", "Smart Contracts", "DeFi", "Race Conditions", "Ethereum"],
      relatedCVEs: [],
      category: "Blockchain Security",
      views: 5673,
    },
    {
      title: "Firmware Analysis of Vehicle ECUs",
      excerpt: "A methodology for extracting and analyzing firmware from automotive electronic control units.",
      content:
        "This research paper presents a comprehensive methodology for extracting and analyzing firmware from automotive Electronic Control Units (ECUs). As vehicles become increasingly software-driven, the security of ECU firmware has become a critical safety concern. Our research aimed to develop a systematic approach to firmware analysis that could be applied across different vehicle makes and models.\n\nWe detail the physical and electrical techniques used to access firmware from various ECU types, including both direct memory extraction and debugging interface approaches. The paper then covers the process of analyzing the extracted firmware, including disassembly, binary analysis, and reverse engineering of proprietary protocols.\n\nOur analysis revealed several common security issues across multiple manufacturers, including insufficient authentication for firmware updates, unencrypted sensitive data, and vulnerable communication protocols between ECUs. The paper includes anonymized case studies of vulnerabilities discovered during our research, all of which were responsibly disclosed to the affected manufacturers.\n\nWe conclude with recommendations for automotive manufacturers and tier-1 suppliers to improve the security posture of vehicle ECUs, as well as suggestions for standardized security testing methodologies for the automotive industry.",
      date: "2023-05-19",
      author: "Marcus Johnson",
      authorImage: "/placeholder.svg?height=100&width=100",
      authorTitle: "Automotive Security Specialist",
      readTime: "22 min read",
      tags: ["Automotive", "Firmware", "Embedded", "ECU", "Hardware Security"],
      relatedCVEs: ["CVE-2023-78901", "CVE-2023-89012"],
      category: "Automotive Security",
      views: 3987,
    },
  ]

  return (
    <div className="min-h-screen bg-malectrica-dark text-gray-100">
      <main className="container py-12">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Security Write-ups</h1>
              <p className="text-gray-400 mt-2">
                In-depth technical analysis of vulnerabilities and security research findings
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search write-ups..."
                  className="pl-8 bg-malectrica-darker border-malectrica-blue/30"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList className="bg-malectrica-darker">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web Security</TabsTrigger>
                <TabsTrigger value="cloud">Cloud</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="iot">IoT</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
              <div className="flex gap-2">
                <Select defaultValue="category">
                  <SelectTrigger className="w-full md:w-[180px] bg-malectrica-darker border-malectrica-blue/30">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-malectrica-darker border-malectrica-blue/30">
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="web">Web Security</SelectItem>
                    <SelectItem value="cloud">Cloud Security</SelectItem>
                    <SelectItem value="authentication">Authentication</SelectItem>
                    <SelectItem value="blockchain">Blockchain</SelectItem>
                    <SelectItem value="mobile">Mobile Security</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="date">
                  <SelectTrigger className="w-full md:w-[150px] bg-malectrica-darker border-malectrica-blue/30">
                    <SelectValue placeholder="Date" />
                  </SelectTrigger>
                  <SelectContent className="bg-malectrica-darker border-malectrica-blue/30">
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="readtime">Reading Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline" size="icon" className="border-malectrica-blue/30 bg-malectrica-darker">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-malectrica-blue/30 bg-malectrica-darker">
                <Tag className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-6 mt-6 md:grid-cols-2">
            {writeups.map((writeup, i) => (
              <Card
                key={i}
                className="bg-malectrica-darker border-malectrica-blue/20 hover:bg-malectrica-blue/10 transition-colors flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <Badge className="bg-malectrica-purple/70 hover:bg-malectrica-purple text-white">
                      {writeup.category}
                    </Badge>
                    <span className="text-gray-400">{writeup.date}</span>
                  </div>
                  <CardTitle className="text-xl text-white">{writeup.title}</CardTitle>
                  <CardDescription className="pt-2 text-gray-400">{writeup.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {writeup.tags.slice(0, 3).map((tag, j) => (
                      <Badge
                        key={j}
                        variant="secondary"
                        className="text-xs bg-malectrica-purple/20 text-malectrica-purple"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {writeup.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-malectrica-blue/20 text-malectrica-blue">
                        +{writeup.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t border-malectrica-blue/20 pt-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={writeup.authorImage} alt={writeup.author} />
                      <AvatarFallback className="bg-malectrica-blue/20 text-malectrica-blue">
                        {writeup.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="text-gray-200">{writeup.author}</p>
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <span>{writeup.authorTitle}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {writeup.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link href={`/writeups/${writeup.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1 border-malectrica-blue/50 text-malectrica-blue bg-malectrica-blue/10 hover:bg-malectrica-blue/20 hover:text-malectrica-brightBlue"
                    >
                      Read <ChevronRight className="h-4 w-4" />
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
                variant={page === 1 ? "default" : "outline"}
                size="icon"
                className={`w-9 h-9 ${
                  page === 1
                    ? "bg-malectrica-blue/70 hover:bg-malectrica-blue"
                    : "border-malectrica-blue/30 bg-malectrica-darker hover:bg-malectrica-blue/20"
                }`}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              className="w-9 h-9 border-malectrica-blue/30 bg-malectrica-darker hover:bg-malectrica-blue/20"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

