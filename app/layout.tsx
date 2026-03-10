import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jhossep Martinez",
  description: "Software Engineer",
};

const themeScript = `(function(){try{if(localStorage.getItem("theme")==="light"){document.documentElement.classList.add("light")}}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col overflow-x-hidden bg-gray-1 font-sans antialiased`}
      >
        <div className="flex-1">{children}</div>
        <footer className="mx-auto w-full max-w-xl px-4 py-8">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-9">
              &copy; {new Date().getFullYear()} Jhossep Martinez
            </p>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="https://github.com/jhossepmartinez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-9 transition-colors hover:text-gray-12"
                aria-label="GitHub"
              >
                <GitHubLogoIcon className="size-4" />
              </a>
              <a
                href="https://linkedin.com/in/jhossepmartinez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-9 transition-colors hover:text-gray-12"
                aria-label="LinkedIn"
              >
                <LinkedInLogoIcon className="size-4" />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
