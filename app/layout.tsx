import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Voshell's Pharmacy — B12 Clinical Partnership",
  description: "A standardized home B12 administration program for genetics and metabolism practices. Eliminate coordination burden. Protect patients at home.",
  openGraph: {
    title: "Voshell's Pharmacy — B12 Clinical Partnership",
    description: "Your clinical operations partner for safe, standardized home B12 execution.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
