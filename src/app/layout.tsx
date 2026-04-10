import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yug Thakkar | Data Analyst Portfolio",
  description: "Portfolio of Yug Thakkar, a Data Analyst specializing in Excel, Power BI, and SQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
