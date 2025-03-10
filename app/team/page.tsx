import Link from "next/link"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-malectrica-dark text-gray-100">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-malectrica-dark to-malectrica-darker">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-malectrica-blue/80 px-3 py-1 text-sm text-gray-100">
                  Our Team
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-100">
                  Meet the Malectrica Team
                </h1>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our collective of security researchers, exploit developers, and reverse engineers are dedicated to
                  pushing the boundaries of cybersecurity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-malectrica-dark">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <Tabs defaultValue="all" className="w-full mb-12">
                <TabsList className="grid grid-cols-4 bg-malectrica-darker border border-malectrica-blue/20 max-w-md mx-auto">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="founders">Founders</TabsTrigger>
                  <TabsTrigger value="researchers">Researchers</TabsTrigger>
                  <TabsTrigger value="developers">Developers</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-8">
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        name: "Alex Winters",
                        role: "Co-Founder & Chief Security Researcher",
                        image: "/placeholder.svg?height=400&width=400",
                        bio: "Former NSA security analyst with over 15 years of experience in offensive security. Discovered 50+ critical vulnerabilities in Fortune 500 companies.",
                        hackerone: "alexw1nt3rs",
                        bugcrowd: "alexwinters",
                        github: "alexw1nt3rs",
                        specialties: ["Web Security", "Mobile Security", "Network Penetration"],
                        type: "founders",
                      },
                      {
                        name: "Samira Khan",
                        role: "Co-Founder & Lead Exploit Developer",
                        image: "/placeholder.svg?height=400&width=400",
                        bio: "Reverse engineering specialist with a background in low-level systems. Known for developing novel exploitation techniques for previously unknown vulnerabilities.",
                        hackerone: "samira_k",
                        bugcrowd: "samirakhan",
                        github: "samirakhan",
                        specialties: ["Reverse Engineering", "Exploit Development", "Binary Analysis"],
                        type: "founders",
                      },
                      {
                        name: "Marcus Chen",
                        role: "Senior Security Researcher",
                        image: "/placeholder.svg?height=400&width=400",
                        bio: "Specializes in cloud security and container vulnerabilities. Previously led security at a major cloud provider.",
                        hackerone: "mchen",
                        bugcrowd: "marcuschen",
                        github: "marcuschen",
                        specialties: ["Cloud Security", "Container Security", "AWS/Azure"],
                        type: "researchers",
                      },
                      {
                        name: "Zoe Rodriguez",
                        role: "Security Researcher",
                        image: "/placeholder.svg?height=400&width=400",
                        bio: "Web application security specialist with a focus on authentication bypasses and authorization flaws.",
                        hackerone: "zoerod",
                        bugcrowd: "zoerodriguez",
                        github: "zoerodriguez",
                        specialties: ["Web Applications", "OAuth", "Authentication Systems"],
                        type: "researchers",
                      },
                      {
                        name: "Jamal Washington",
                        role: "Exploit Developer",
                        image: "/placeholder.svg?height=400&width=400",
                        bio: "Low-level systems expert specializing in kernel exploits and hardware vulnerabilities.",
                        hackerone: "jamalw",
                        bugcrowd: "jamalwashington",
                        github: "jamalw",
                        specialties: ["Kernel Exploitation", "Hardware Security", "Firmware Analysis"],
                        type: "developers",
                      },
                      {
                        name: "Lena Park",
                        role: "Tool Developer",
                        image: "/placeholder.svg?height=400&width=400",
                        bio: "Full-stack developer focused on creating security tools and automation frameworks for vulnerability research.",
                        hackerone: "lenapark",
                        bugcrowd: "lenapark",
                        github: "lenapark",
                        specialties: ["Security Tooling", "Automation", "Python/Go Development"],
                        type: "developers",
                      },
                      {
                        name: "Raj Patel",
                        role: "Mobile Security Specialist",
                        image: "/placeholder.svg?height=400&width=400",
                        bio: "Expert in Android and iOS security with a focus on application security and runtime manipulation.",
                        hackerone: "rajp",
                        bugcrowd: "rajpatel",
                        github: "rajpatel",
                        specialties: ["Android Security", "iOS Security", "Mobile App Pentesting"],
                        type: "researchers",
                      },
                      {
                        name: "Emma Johnson",
                        role: "Cryptography Researcher",
                        image: "/placeholder.svg?height=400&width=400",
                        bio: "Cryptography specialist with expertise in identifying weaknesses in cryptographic implementations.",
                        hackerone: "emmaj",
                        bugcrowd: "emmajohnson",
                        github: "emmajohnson",
                        specialties: ["Cryptography", "TLS", "Secure Communications"],
                        type: "researchers",
                      },
                      {
                        name: "David Kim",
                        role: "Security Tool Developer",
                        image: "/placeholder.svg?height=400&width=400",
                        bio: "Develops custom security tools for vulnerability research and exploitation. Expert in automation and scalable security testing.",
                        hackerone: "davidk",
                        bugcrowd: "davidkim",
                        github: "davidkim",
                        specialties: ["Tool Development", "Automation", "Scalable Testing"],
                        type: "developers",
                      },
                    ].map((member, i) => (
                      <Card
                        key={i}
                        className="group relative overflow-hidden bg-malectrica-darker border border-malectrica-blue/20 hover:border-malectrica-blue/40 transition-all duration-300 hover:shadow-lg hover:shadow-malectrica-blue/20"
                      >
                        <CardHeader className="pb-0">
                          <div className="flex flex-col items-center">
                            <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-malectrica-blue/50 mb-4">
                              <img
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                            <CardTitle className="text-xl text-white text-center">{member.name}</CardTitle>
                            <p className="text-malectrica-blue text-center mt-1">{member.role}</p>
                          </div>
                        </CardHeader>
                        <CardContent className="text-center pt-4">
                          <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                          <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {member.specialties.map((specialty, j) => (
                              <Badge
                                key={j}
                                variant="secondary"
                                className="text-xs bg-malectrica-blue/20 text-malectrica-blue hover:bg-malectrica-blue/30 cursor-pointer transition-colors"
                              >
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-center gap-3 pt-0">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link
                                  href={`https://hackerone.com/${member.hackerone}`}
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
                                <p>HackerOne: @{member.hackerone}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link
                                  href={`https://bugcrowd.com/${member.bugcrowd}`}
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
                                <p>Bugcrowd: @{member.bugcrowd}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link
                                  href={`https://github.com/${member.github}`}
                                  target="_blank"
                                  className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-malectrica-blue/10 text-malectrica-blue hover:bg-malectrica-blue/20 hover:text-malectrica-brightBlue transition-colors"
                                >
                                  <span className="sr-only">GitHub Profile</span>
                                  <Github className="h-4 w-4" />
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>GitHub: @{member.github}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="founders" className="mt-8">
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        name: "Alex Winters",
                        role: "Co-Founder & Chief Security Researcher",
                        image: "/placeholder.svg?height=400&width=400",
                        bio: "Former NSA security analyst with over 15 years of experience in offensive security. Discovered 50+ critical vulnerabilities in Fortune 500 companies.",
                        hackerone: "alexw1nt3rs",
                        bugcrowd: "alexwinters",
                        github: "alexw1nt3rs",
                        specialties: ["Web Security", "Mobile Security", "Network Penetration"],
                      },
                      {
                        name: "Samira Khan",
                        role: "Co-Founder & Lead Exploit Developer",
                        image: "/placeholder.svg?height=400&width=400",
                        bio: "Reverse engineering specialist with a background in low-level systems. Known for developing novel exploitation techniques for previously unknown vulnerabilities.",
                        hackerone: "samira_k",
                        bugcrowd: "samirakhan",
                        github: "samirakhan",
                        specialties: ["Reverse Engineering", "Exploit Development", "Binary Analysis"],
                      },
                    ].map((member, i) => (
                      <Card
                        key={i}
                        className="group relative overflow-hidden bg-malectrica-darker border border-malectrica-blue/20 hover:border-malectrica-blue/40 transition-all duration-300 hover:shadow-lg hover:shadow-malectrica-blue/20"
                      >
                        <CardHeader className="pb-0">
                          <div className="flex flex-col items-center">
                            <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-malectrica-blue/50 mb-4">
                              <img
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                            <CardTitle className="text-xl text-white text-center">{member.name}</CardTitle>
                            <p className="text-malectrica-blue text-center mt-1">{member.role}</p>
                          </div>
                        </CardHeader>
                        <CardContent className="text-center pt-4">
                          <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                          <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {member.specialties.map((specialty, j) => (
                              <Badge
                                key={j}
                                variant="secondary"
                                className="text-xs bg-malectrica-blue/20 text-malectrica-blue hover:bg-malectrica-blue/30 cursor-pointer transition-colors"
                              >
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-center gap-3 pt-0">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link
                                  href={`https://hackerone.com/${member.hackerone}`}
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
                                <p>HackerOne: @{member.hackerone}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link
                                  href={`https://bugcrowd.com/${member.bugcrowd}`}
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
                                <p>Bugcrowd: @{member.bugcrowd}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link
                                  href={`https://github.com/${member.github}`}
                                  target="_blank"
                                  className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-malectrica-blue/10 text-malectrica-blue hover:bg-malectrica-blue/20 hover:text-malectrica-brightBlue transition-colors"
                                >
                                  <span className="sr-only">GitHub Profile</span>
                                  <Github className="h-4 w-4" />
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>GitHub: @{member.github}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="researchers" className="mt-8">
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        name: "Marcus Chen",
                        role: "Senior Security Researcher",
                        image: "/placeholder.svg?height=400&width=400",
                        bio: "Specializes in cloud security and container vulnerabilities. Previously led security at a major cloud provider.",
                        hackerone: "mchen",
                        bugcrowd: "marcuschen",
                        github: "marcuschen",
                        specialties: ["Cloud Security", "Container Security", "AWS/Azure"],
                      },
                      {
                        name: "Zoe Rodriguez",
                        role: "Security Researcher",
                        image: "/placeholder.svg?height=400&width=400",
                        bio: "Web application security specialist with a focus on authentication bypasses and authorization flaws.",
                        hackerone: "zoerod",
                        bugcrowd: "zoerodriguez",
                        github: "zoerodriguez",
                        specialties: ["Web Applications", "OAuth", "Authentication Systems"],
                      },
                      {
                        name: "Raj Patel",
                        role: "Mobile Security Specialist",
                        image: "/placeholder.svg?height=400&width=400",
                        bio: "Expert in Android and iOS security with a focus on application security and runtime manipulation.",
                        hackerone: "rajp",
                        bugcrowd: "rajpatel",
                        github: "rajpatel",
                        specialties: ["Android Security", "iOS Security", "Mobile App Pentesting"],
                      },
                      {
                        name: "Emma Johnson",
                        role: "Cryptography Researcher",
                        image: "/placeholder.svg?height=400&width=400",
                        bio: "Cryptography specialist with expertise in identifying weaknesses in cryptographic implementations.",
                        hackerone: "emmaj",
                        bugcrowd: "emmajohnson",
                        github: "emmajohnson",
                        specialties: ["Cryptography", "TLS", "Secure Communications"],
                      },
                    ].map((member, i) => (
                      <Card
                        key={i}
                        className="group relative overflow-hidden bg-malectrica-darker border border-malectrica-blue/20 hover:border-malectrica-blue/40 transition-all duration-300 hover:shadow-lg hover:shadow-malectrica-blue/20"
                      >
                        <CardHeader className="pb-0">
                          <div className="flex flex-col items-center">
                            <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-malectrica-blue/50 mb-4">
                              <img
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                            <CardTitle className="text-xl text-white text-center">{member.name}</CardTitle>
                            <p className="text-malectrica-blue text-center mt-1">{member.role}</p>
                          </div>
                        </CardHeader>
                        <CardContent className="text-center pt-4">
                          <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                          <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {member.specialties.map((specialty, j) => (
                              <Badge
                                key={j}
                                variant="secondary"
                                className="text-xs bg-malectrica-blue/20 text-malectrica-blue hover:bg-malectrica-blue/30 cursor-pointer transition-colors"
                              >
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-center gap-3 pt-0">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link
                                  href={`https://hackerone.com/${member.hackerone}`}
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
                                <p>HackerOne: @{member.hackerone}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link
                                  href={`https://bugcrowd.com/${member.bugcrowd}`}
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
                                <p>Bugcrowd: @{member.bugcrowd}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link
                                  href={`https://github.com/${member.github}`}
                                  target="_blank"
                                  className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-malectrica-blue/10 text-malectrica-blue hover:bg-malectrica-blue/20 hover:text-malectrica-brightBlue transition-colors"
                                >
                                  <span className="sr-only">GitHub Profile</span>
                                  <Github className="h-4 w-4" />
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>GitHub: @{member.github}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="developers" className="mt-8">
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        name: "Jamal Washington",
                        role: "Exploit Developer",
                        image: "/placeholder.svg?height=400&width=400",
                        bio: "Low-level systems expert specializing in kernel exploits and hardware vulnerabilities.",
                        hackerone: "jamalw",
                        bugcrowd: "jamalwashington",
                        github: "jamalw",
                        specialties: ["Kernel Exploitation", "Hardware Security", "Firmware Analysis"],
                      },
                      {
                        name: "Lena Park",
                        role: "Tool Developer",
                        image: "/placeholder.svg?height=400&width=400",
                        bio: "Full-stack developer focused on creating security tools and automation frameworks for vulnerability research.",
                        hackerone: "lenapark",
                        bugcrowd: "lenapark",
                        github: "lenapark",
                        specialties: ["Security Tooling", "Automation", "Python/Go Development"],
                      },
                      {
                        name: "David Kim",
                        role: "Security Tool Developer",
                        image: "/placeholder.svg?height=400&width=400",
                        bio: "Develops custom security tools for vulnerability research and exploitation. Expert in automation and scalable security testing.",
                        hackerone: "davidk",
                        bugcrowd: "davidkim",
                        github: "davidkim",
                        specialties: ["Tool Development", "Automation", "Scalable Testing"],
                      },
                    ].map((member, i) => (
                      <Card
                        key={i}
                        className="group relative overflow-hidden bg-malectrica-darker border border-malectrica-blue/20 hover:border-malectrica-blue/40 transition-all duration-300 hover:shadow-lg hover:shadow-malectrica-blue/20"
                      >
                        <CardHeader className="pb-0">
                          <div className="flex flex-col items-center">
                            <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-malectrica-blue/50 mb-4">
                              <img
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                            <CardTitle className="text-xl text-white text-center">{member.name}</CardTitle>
                            <p className="text-malectrica-blue text-center mt-1">{member.role}</p>
                          </div>
                        </CardHeader>
                        <CardContent className="text-center pt-4">
                          <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                          <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {member.specialties.map((specialty, j) => (
                              <Badge
                                key={j}
                                variant="secondary"
                                className="text-xs bg-malectrica-blue/20 text-malectrica-blue hover:bg-malectrica-blue/30 cursor-pointer transition-colors"
                              >
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-center gap-3 pt-0">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link
                                  href={`https://hackerone.com/${member.hackerone}`}
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
                                <p>HackerOne: @{member.hackerone}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link
                                  href={`https://bugcrowd.com/${member.bugcrowd}`}
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
                                <p>Bugcrowd: @{member.bugcrowd}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link
                                  href={`https://github.com/${member.github}`}
                                  target="_blank"
                                  className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-malectrica-blue/10 text-malectrica-blue hover:bg-malectrica-blue/20 hover:text-malectrica-brightBlue transition-colors"
                                >
                                  <span className="sr-only">GitHub Profile</span>
                                  <Github className="h-4 w-4" />
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>GitHub: @{member.github}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-malectrica-dark via-malectrica-blue/30 to-black">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-100 mb-6">
                Join Our Team
              </h2>
              <p className="text-gray-400 md:text-xl mb-8">
                We're always looking for talented security researchers, developers, and reverse engineers to join our
                team. If you're passionate about cybersecurity and want to work on cutting-edge research, we'd love to
                hear from you.
              </p>
              <Link href="/careers">
                <Button className="bg-malectrica-blue/70 text-gray-200 hover:bg-malectrica-blue transition-all hover:translate-y-[-2px]">
                  View Open Positions
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

