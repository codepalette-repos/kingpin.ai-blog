import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { ThemeSwitcher } from "./theme-switcher"

export const HeaderComponent = () => (
  <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 py-4 sm:px-6 lg:px-8">
    <div className="container mx-auto flex items-center justify-between">
      <Link className="flex items-center gap-2" href="/">
        <img src="/placeholder.svg?height=32&width=120" alt="Kingpin" className="h-8" />
      </Link>
      <nav className="hidden items-center gap-8 md:flex">
        <Link
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          href="#features"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          href="#integrations"
        >
          Integrations
        </Link>
        <Link
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          href="#results"
        >
          Results
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Button variant="ghost" asChild>
          <Link href="https://portal.kingpin.global/login">Log In</Link>
        </Button>
        <Button asChild>
          <Link href="https://portal.kingpin.global/register/choose-role">
            Sign Up
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <ThemeSwitcher />
      </div>
    </div>
  </header>
)
