
import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "MovieMind",
  description: "Discover movies you'll actually love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

