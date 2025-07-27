import { ArrowRight, CheckCircle, Target, Zap, Database, Users, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-bold text-4xl tracking-tight sm:text-6xl lg:text-7xl">
              Sell Smarter,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Grow Faster
              </span>
            </h1>
            <h2 className="mt-6 text-xl text-muted-foreground sm:text-2xl">Global Distribution Powered by AI</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              For sales teams at brands, distributors and wholesalers.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="https://portal.kingpin.global/login">
                  Log In
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://calendar.app.google/TkdECDD4D782dmGo9">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-8 opacity-60">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <img
                  src={`/placeholder.svg?height=40&width=120&query=Brand logo ${i + 1}`}
                  alt={`Brand ${i + 1}`}
                  className="h-10 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Value Proposition */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
              From Catalogue to Customers in record speed
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Let Kingpin be the most productive, connected and intelligent digital worker to power your growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="https://portal.kingpin.global/register/choose-role">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://calendar.app.google/TkdECDD4D782dmGo9">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">Streamline Your Sales Process</h2>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Database className="h-6 w-6 text-blue-600" />
                    <CardTitle>Import your catalogue</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Upload products via spreadsheets, PDFs, or existing databases. AI automatically enriches data, adds
                    images, and organizes products.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-green-600" />
                    <CardTitle>Invite customers & set custom terms</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Create tailored views, pricing, and access for each of your customers.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-purple-600" />
                    <CardTitle>Run offline workflows digitally</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Share line sheets, manage collections, and track customer engagement.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                    <CardTitle>Collect & process orders effortlessly</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Lightning-fast order processing, shortening sales cycles and reducing manual errors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI Customer Discovery */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">AI-Driven Customer Discovery</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Better than trade shows, faster than sales reps.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Target className="h-8 w-8 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">Find high-value leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Use AI-driven filters to target companies resembling your most profitable buyers, ensuring every
                    lead is worth the pursuit.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-green-600 mb-4" />
                  <CardTitle className="text-xl">Cut research time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Automate data gathering and enrichment—no more manual, time-consuming searches—so your team can
                    close deals faster.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-purple-600 mb-4" />
                  <CardTitle className="text-xl">AI-Powered Retail Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tap into 15M+ retail businesses and 55M+ contacts with real-time verification, expanding your reach
                    and closing more deals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">Trusted For The Results We Deliver</h2>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">20%</div>
                <div className="mt-2 text-sm text-muted-foreground">Revenue uplift</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">85%</div>
                <div className="mt-2 text-sm text-muted-foreground">Faster order placement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600">3x</div>
                <div className="mt-2 text-sm text-muted-foreground">Increase in customer pipeline</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600">250%+</div>
                <div className="mt-2 text-sm text-muted-foreground">ROI in just a few months</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <Card className="p-8">
                <CardContent className="p-0">
                  <blockquote className="text-lg font-medium">"Kingpin is crucial to improving Sales"</blockquote>
                  <div className="mt-6 flex items-center gap-4">
                    <img
                      src="/placeholder.svg?height=48&width=48"
                      alt="Randy Hoogeweegen"
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold">Randy Hoogeweegen</div>
                      <div className="text-sm text-muted-foreground">Co-Founder, Ampère</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="p-0">
                  <blockquote className="text-lg font-medium">
                    "Kingpin has taken our sales process to the next level, eliminating manual errors and saving
                    significant time and money."
                  </blockquote>
                  <div className="mt-6 flex items-center gap-4">
                    <img
                      src="/placeholder.svg?height=48&width=48"
                      alt="Head of Distribution"
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold">Head of Distribution</div>
                      <div className="text-sm text-muted-foreground">Mizzen, MENA Distributors of On Running</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-bold text-3xl tracking-tight text-white sm:text-4xl">Welcome to Kingpin</h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Experience faster growth with smarter & efficient operations - powered by AI
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild>
                <Link href="https://portal.kingpin.global/register/choose-role">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href="https://calendar.app.google/TkdECDD4D782dmGo9">Book Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
