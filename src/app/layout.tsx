import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "astrid greene | computer science @ michigan",
  description:
    "university of michigan cs student. software, ai, and machine learning. technical analyst, researcher, builder.",
  openGraph: {
    title: "astrid greene | computer science @ michigan",
    description:
      "university of michigan cs student. software, ai, and machine learning.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="site-frame min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
