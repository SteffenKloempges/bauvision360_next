import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Bauvision360°",
  description: "BAUvision360 ist Ihr Bauunternehmen. Alles aus einer Hand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
