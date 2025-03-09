import Link from "next/link"
import { Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-malectrica-blue/20 bg-malectrica-dark/95 backdrop-blur supports-[backdrop-filter]:bg-malectrica-dark/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-2 items-center">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-malectrica-brightBlue" />
              <span className="font-bold text-xl">Malectrica</span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/tools" className="transition-colors hover:text-malectrica-brightBlue">
            Tools
          </Link>
          <Link href="/vulnerabilities" className="transition-colors hover:text-malectrica-brightBlue">
            Vulnerabilities
          </Link>
          <Link href="/pocs" className="transition-colors hover:text-malectrica-brightBlue">
            POCs
          </Link>
          <Link href="/writeups" className="transition-colors hover:text-malectrica-brightBlue">
            Write-ups
          </Link>
          <Link href="/blog" className="transition-colors hover:text-malectrica-brightBlue">
            Blog
          </Link>
        </nav>
        <div className="flex md:hidden">
          <Button variant="ghost" size="sm" className="px-2 text-gray-200">
            <span className="sr-only">Open Menu</span>
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
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}

