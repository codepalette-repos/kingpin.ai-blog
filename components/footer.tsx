import Link from "next/link"

export const FooterComponent = () => (
  <footer className="border-t bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <img src="/placeholder.svg?height=32&width=120" alt="Kingpin" className="h-8 mb-4" />
          <p className="text-muted-foreground max-w-md">
            Global Distribution Powered by AI. For sales teams at brands, distributors and wholesalers.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="#features" className="hover:text-foreground transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="#integrations" className="hover:text-foreground transition-colors">
                Integrations
              </Link>
            </li>
            <li>
              <Link href="#results" className="hover:text-foreground transition-colors">
                Results
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link
                href="https://calendar.app.google/TkdECDD4D782dmGo9"
                className="hover:text-foreground transition-colors"
              >
                Book Demo
              </Link>
            </li>
            <li>
              <Link href="https://portal.kingpin.global/login" className="hover:text-foreground transition-colors">
                Login
              </Link>
            </li>
            <li>
              <Link
                href="https://portal.kingpin.global/register/choose-role"
                className="hover:text-foreground transition-colors"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Kingpin. All rights reserved.</p>
      </div>
    </div>
  </footer>
)
