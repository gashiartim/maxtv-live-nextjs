import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import classNames from "classnames";
import { Image } from "@/components";
import bodyBgImage from "@/assets/home/offers-background.jpg";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MaxTV Live - Home",
  description: "MaxTV Live - Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          montserrat.className,
          "bg-secondary-foreground text-secondary"
        )}
      >
        <Header />
        <main className="relative">
          {children}
          <Image
            src={bodyBgImage}
            alt="Bg Image"
            wrapperClassName="!fixed inset-0 z-[-1]"
          />
        </main>
        <Footer />
      </body>
    </html>
  );
}
