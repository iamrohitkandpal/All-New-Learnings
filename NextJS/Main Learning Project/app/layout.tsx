import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinBoard",
  description: "FinBoard is a financial dashboard for your personal finances.",
  icons: {
    icon: "/icons/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
