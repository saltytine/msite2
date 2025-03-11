"use client"

import Link from "next/link"
import { ChevronRight, Filter, Tag, Clock, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState, useEffect } from "react"
import { Linkedin, Github, Youtube } from "lucide-react"

// Add these custom icon components for HackerOne and Bugcrowd
const HackerOneIcon = (props) => (
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
    {...props}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M7.5 12.5L10 15l6.5-6.5" />
  </svg>
)

const BugcrowdIcon = (props) => (
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
    {...props}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
    <path d="M12 8v2M12 14v2M8 12h2M14 12h2" />
  </svg>
)

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [category, setCategory] = useState("All Categories")
  const [sortBy, setSortBy] = useState("Newest First")
  const itemsPerPage = 6
  const [filteredPosts, setFilteredPosts] = useState([])
  const [displayedPosts, setDisplayedPosts] = useState([])
  // Add a new state variable for the active tab
  const [activeTab, setActiveTab] = useState("all")

  const blogPosts = [
    {
      title: "The Rise of Supply Chain Attacks",
      excerpt: "How attackers are increasingly targeting software supply chains as an entry point into organizations.",
      image: "/placeholder.svg?height=400&width=600",
      date: "2023-12-10",
      author: "Robin Chang",
      authorImage: "/placeholder.svg?height=100&width=100",
      authorTitle: "Security Researcher",
      category: "Trends",
      likes: 124,
      comments: 32,
      readTime: "8 min",
      tags: ["Supply Chain", "Software Security", "DevSecOps"],
    },
    {
      title: "Securing Kubernetes Environments",
      excerpt: "Best practices for hardening Kubernetes clusters against the most common attack vectors in production.",
      image: "/placeholder.svg?height=400&width=600",
      date: "2023-11-28",
      author: "Avery Martinez",
      authorImage: "/placeholder.svg?height=100&width=100",
      authorTitle: "Cloud Security Engineer",
      category: "Cloud Security",
      likes: 98,
      comments: 24,
      readTime: "12 min",
      tags: ["Kubernetes", "Container Security", "Cloud Native"],
    },
    {
      title: "Modern Password Cracking Techniques",
      excerpt:
        "An exploration of how contemporary password cracking techniques have evolved and how to protect against them.",
      image: "/placeholder.svg?height=400&width=600",
      date: "2023-11-15",
      author: "Francis Wong",
      authorImage: "/placeholder.svg?height=100&width=100",
      authorTitle: "Offensive Security Specialist",
      category: "Authentication",
      likes: 87,
      comments: 19,
      readTime: "10 min",
      tags: ["Password Security", "Authentication", "Cryptography"],
    },
    {
      title: "API Security Testing Guide",
      excerpt: "A comprehensive guide to testing REST APIs for common security vulnerabilities and misconfigurations.",
      image: "/placeholder.svg?height=400&width=600",
      date: "2023-11-02",
      author: "Riley Johnson",
      authorImage: "/placeholder.svg?height=100&width=100",
      authorTitle: "Application Security Engineer",
      category: "Web Security",
      likes: 112,
      comments: 28,
      readTime: "15 min",
      tags: ["API Security", "Web Testing", "OWASP"],
    },
    {
      title: "Threat Hunting with OSINT",
      excerpt:
        "How to leverage open-source intelligence gathering techniques to identify potential threats to your organization.",
      image: "/placeholder.svg?height=400&width=600",
      date: "2023-10-20",
      author: "Morgan Smith",
      authorImage: "/placeholder.svg?height=100&width=100",
      authorTitle: "Threat Intelligence Analyst",
      category: "Threat Intelligence",
      likes: 76,
      comments: 17,
      readTime: "11 min",
      tags: ["OSINT", "Threat Hunting", "Intelligence"],
    },
    {
      title: "Security Implications of Quantum Computing",
      excerpt:
        "Understanding how quantum computing will impact current cryptographic standards and what organizations should do now.",
      image: "/placeholder.svg?height=400&width=600",
      date: "2023-10-08",
      author: "Dr. Jordan Taylor",
      authorImage: "/placeholder.svg?height=100&width=100",
      authorTitle: "Cryptography Researcher",
      category: "Cryptography",
      likes: 154,
      comments: 43,
      readTime: "14 min",
      tags: ["Quantum Computing", "Cryptography", "Post-Quantum"],
    },
    {
      title: "Zero Trust Architecture Implementation",
      excerpt: "A practical guide to implementing a Zero Trust security model in enterprise environments.",
      image: "/placeholder.svg?height=400&width=600",
      date: "2023-09-25",
      author: "Cameron Lee",
      authorImage: "/placeholder.svg?height=100&width=100",
      authorTitle: "Enterprise Security Architect",
      category: "Architecture",
      likes: 103,
      comments: 31,
      readTime: "16 min",
      tags: ["Zero Trust", "Enterprise Security", "Architecture"],
    },
    {
      title: "Reverse Engineering iOS Applications",
      excerpt: "Techniques and tools for reverse engineering iOS applications to identify security vulnerabilities.",
      image: "/placeholder.svg?height=400&width=600",
      date: "2023-09-12",
      author: "Alex Rivera",
      authorImage: "/placeholder.svg?height=100&width=100",
      authorTitle: "Mobile Security Researcher",
      category: "Mobile Security",
      likes: 91,
      comments: 22,
      readTime: "13 min",
      tags: ["iOS", "Mobile Security", "Reverse Engineering"],
    },
    {
      title: "Building Effective Security Monitoring",
      excerpt:
        "How to design and implement an effective security monitoring program that balances coverage, cost, and complexity.",
      image: "/placeholder.svg?height=400&width=600",
      date: "2023-08-30",
      author: "Taylor Wilson",
      authorImage: "/placeholder.svg?height=100&width=100",
      authorTitle: "Security Operations Manager",
      category: "Security Operations",
      likes: 88,
      comments: 25,
      readTime: "9 min",
      tags: ["SOC", "Monitoring", "SIEM", "Detection"],
    },
  ]

  const featuredPost = blogPosts[0]
  const regularPosts = blogPosts.slice(1)

  // Update the useEffect filtering logic to include tab filtering
  useEffect(() => {
    // Get all posts except the featured one
    const regularPosts = blogPosts.slice(1)

    // Sort posts based on sortBy
    const sorted = [...regularPosts]

    if (sortBy === "Newest First") {
      sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else if (sortBy === "Oldest First") {
      sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    } else if (sortBy === "Most Popular") {
      sorted.sort((a, b) => b.likes - a.likes)
    }

    // Apply category filter from dropdown
    let filtered = sorted
    if (category !== "All Categories") {
      filtered = filtered.filter((post) => post.category.toLowerCase().includes(category.toLowerCase()))
    }

    // Apply tab filter
    if (activeTab === "trends") {
      filtered = filtered.filter((post) => post.category === "Trends")
    } else if (activeTab === "tutorials") {
      // Assuming tutorials would be tagged with a specific category
      filtered = filtered.filter((post) => post.tags.some((tag) => tag.toLowerCase().includes("tutorial")))
    } else if (activeTab === "research") {
      // Assuming research posts would be tagged with research or have research in the title
      filtered = filtered.filter(
        (post) =>
          post.tags.some((tag) => tag.toLowerCase().includes("research")) ||
          post.title.toLowerCase().includes("research"),
      )
    }

    setFilteredPosts(filtered)

    // Reset to first page when filters change
    setCurrentPage(1)
  }, [sortBy, category, activeTab])

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    setDisplayedPosts(filteredPosts.slice(startIndex, endIndex))
  }, [currentPage, filteredPosts, itemsPerPage])

  return (
    <div className="min-h-screen bg-malectrica-dark text-gray-100">
      <main className="container py-12">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Security Blog</h1>
              <p className="text-gray-400 mt-2">Articles, tutorials, and insights from our security research team</p>
            </div>
          </div>

          {/* Featured Post */}
          <div className="relative rounded-lg overflow-hidden bg-malectrica-darker border border-malectrica-blue/20 hover:border-malectrica-blue/40 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-r from-malectrica-dark to-transparent opacity-80 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-malectrica-darker to-transparent opacity-90 z-10"></div>
            <div className="absolute top-0 left-0 m-4 z-20">
              <Badge className="bg-malectrica-purple hover:bg-malectrica-purple text-white">Featured</Badge>
            </div>
            <div
              className="w-full h-64 md:h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${featuredPost.image})` }}
            ></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex items-center gap-2 text-xs mb-2">
                <Badge className="bg-malectrica-blue/70 hover:bg-malectrica-blue text-white">
                  {featuredPost.category}
                </Badge>
                <span className="text-gray-300">{featuredPost.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{featuredPost.title}</h2>
              <p className="text-gray-300 mb-4 max-w-3xl">{featuredPost.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={featuredPost.authorImage} alt={featuredPost.author} />
                    <AvatarFallback className="bg-malectrica-blue/20 text-malectrica-blue">
                      {featuredPost.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-gray-200">{featuredPost.author}</p>
                    <p className="text-gray-400 text-sm">{featuredPost.authorTitle}</p>
                  </div>
                </div>
                <Link href={`/blog/${featuredPost.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  <Button className="bg-malectrica-purple/80 hover:bg-malectrica-purple text-white">
                    Read Article
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <Tabs defaultValue="all" className="w-full lg:w-auto" onValueChange={setActiveTab}>
              <TabsList className="bg-malectrica-darker">
                <TabsTrigger value="all">All Posts</TabsTrigger>
                <TabsTrigger value="trends">Trends</TabsTrigger>
                <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              <Select value={category} onValueChange={(value) => setCategory(value)}>
                <SelectTrigger className="w-full sm:w-[180px] bg-malectrica-darker border-malectrica-blue/30">
                  <SelectValue className="text-white">{category}</SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-malectrica-darker border-malectrica-blue/30 text-white">
                  <SelectItem value="All Categories">All Categories</SelectItem>
                  <SelectItem value="Trends">Trends</SelectItem>
                  <SelectItem value="Cloud Security">Cloud Security</SelectItem>
                  <SelectItem value="Web Security">Web Security</SelectItem>
                  <SelectItem value="Mobile Security">Mobile Security</SelectItem>
                  <SelectItem value="Cryptography">Cryptography</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
                <SelectTrigger className="w-full sm:w-[150px] bg-malectrica-darker border-malectrica-blue/30">
                  <SelectValue className="text-white">{sortBy}</SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-malectrica-darker border-malectrica-blue/30 text-white">
                  <SelectItem value="Newest First">Newest First</SelectItem>
                  <SelectItem value="Oldest First">Oldest First</SelectItem>
                  <SelectItem value="Most Popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>

              <div className="hidden lg:flex gap-2">
                <Button variant="outline" size="icon" className="border-malectrica-blue/30 bg-malectrica-darker">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-malectrica-blue/30 bg-malectrica-darker">
                  <Tag className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Regular Posts Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayedPosts.map((post, i) => (
              <Card
                key={i}
                className="bg-malectrica-darker border-malectrica-blue/20 hover:bg-malectrica-blue/10 transition-colors flex flex-col"
              >
                <div
                  className="h-48 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <Badge
                      className={
                        post.category === "Trends"
                          ? "bg-malectrica-blue/70 hover:bg-malectrica-blue text-white"
                          : post.category === "Cloud Security"
                            ? "bg-malectrica-blue/70 hover:bg-malectrica-blue text-white"
                            : "bg-malectrica-blue/70 hover:bg-malectrica-blue text-white"
                      }
                    >
                      {post.category}
                    </Badge>
                    <span className="text-gray-400">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl text-white">{post.title}</CardTitle>
                  <CardDescription className="pt-2 text-gray-400">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 pt-0">
                  {post.tags.map((tag, j) => (
                    <Badge
                      key={j}
                      variant="secondary"
                      className="text-xs bg-malectrica-purple/20 text-malectrica-purple"
                    >
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter className="mt-auto pt-4 flex items-center justify-between border-t border-malectrica-blue/20">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={post.authorImage} alt={post.author} />
                      <AvatarFallback className="bg-malectrica-blue/20 text-malectrica-blue">
                        {post.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <span className="text-gray-200">{post.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-xs">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      {post.likes}
                    </span>
                  </div>
                  <Link href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-1 text-malectrica-blue hover:text-malectrica-brightBlue hover:bg-malectrica-blue/20 ml-2"
                    >
                      Read <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Company Socials */}
          <div className="mt-12 mb-8 py-8 border-t border-b border-malectrica-blue/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Connect with Malectrica</h3>
              <p className="text-gray-400 mb-6">Stay updated with our latest research and insights</p>
              <div className="flex justify-center space-x-6">
                <Link href="https://github.com/malectricasoftware" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://youtube.com/@malectrica" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/company/malectrica" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://hackerone.com/malectricaofficial" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <HackerOneIcon className="h-5 w-5" />
                    <span className="sr-only">HackerOne</span>
                  </Button>
                </Link>
                <Link href="https://bugcrowd.com/malectrica" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <BugcrowdIcon className="h-5 w-5" />
                    <span className="sr-only">Bugcrowd</span>
                  </Button>
                </Link>
              </div>
            </div>
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

