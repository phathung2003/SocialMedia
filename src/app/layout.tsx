import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social",
  description: "Social Media",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
