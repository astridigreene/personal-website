import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Settings } from "@/components/Settings";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Astrid Greene | Computer Science @ Michigan",
  description:
    "University of Michigan CS student. Software, AI, and machine learning. Technical analyst, researcher, builder.",
  openGraph: {
    title: "Astrid Greene | Computer Science @ Michigan",
    description:
      "University of Michigan CS student. Software, AI, and machine learning.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen py-0 md:py-4">
        <ThemeProvider>
          <div className="site-frame min-h-screen md:min-h-0">
            <Navbar />
            <main>{children}</main>
            <Settings />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
