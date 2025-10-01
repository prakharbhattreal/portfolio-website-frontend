import type { Metadata } from "next";
import { Fira_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Navbar } from "@/components/navbar";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose the weights you'll use
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prakhar | Creative Web Developer & Portfolio",
  description:
    "Portfolio of Prakhar – showcasing modern web projects, creative frontend builds, and high-performance apps. Built with Next.js.",
  keywords: [
    "Prakhar",
    "portfolio",
    "web developer",
    "Next.js",
    "frontend",
    "creative websites",
    "Webathon",
  ],
  authors: [{ name: "Prakhar" }],
  creator: "Prakhar",
  publisher: "Prakhar",
  metadataBase: new URL("https://your-domain.com"),
  alternates: {
    canonical: "https://your-domain.com",
  },
  openGraph: {
    title: "Prakhar | Creative Web Developer",
    description:
      "Explore Prakhar's creative projects, interactive UI builds, and high-performance web apps.",
    url: "https://your-domain.com",
    siteName: "Prakhar Portfolio",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg", // 1200x630 recommended
        width: 1200,
        height: 630,
        alt: "Preview of Prakhar's portfolio website",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakhar | Creative Web Developer",
    description:
      "High-performance, visually striking websites built with Next.js.",
    creator: "@yourTwitterHandle",
    images: ["https://your-domain.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${firaSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen> 
            <div className="lg:block">
              <AppSidebar />
            </div>

            <main className="w-full">
              <Navbar />
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
