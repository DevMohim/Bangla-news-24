import type { Metadata } from "next";
import {Noto_Sans_Bengali} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/shared/Footer";

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Bangla News 24 | Home Page",
  description: "The best bangla news website for latest news, breaking news, and trending news in Bangladesh.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${notoSansBengali.className} font-sans`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Navbar />
        <main className="max-w-7xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
