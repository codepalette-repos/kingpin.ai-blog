import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { FooterComponent } from "@/components/footer"
import { HeaderComponent } from "@/components/header"
import { Geist, Geist_Mono } from "next/font/google"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Kingpin - Sell Smarter, Grow Faster. Global Distribution Powered by AI",
  description:
    "For sales teams at brands, distributors and wholesalers. Experience faster growth with smarter & efficient operations - powered by AI.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <HeaderComponent />
          {children}
          <FooterComponent />
        </ThemeProvider>
      </body>
    </html>
  )
}
