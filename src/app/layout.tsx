import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BehindCurtain",
  description: "Source-linked intelligence for understanding people, power, and events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
