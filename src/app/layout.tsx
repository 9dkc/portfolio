import type { Metadata } from "next";
import { Andada_Pro, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";

const andada_pro = Andada_Pro({
  variable: "--font-display",
  subsets: ["latin"],
});

const jakarta_sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "yusof",
  description: "yusof's website",
  icons: ["/icon.png"],
  openGraph: {
    type: "website",
    title: "hi, im yusof",
    description: "this is my website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${andada_pro.variable} ${jakarta_sans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
