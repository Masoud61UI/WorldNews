import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const dana = localFont({
  src: "../public/font/DanaVF.woff2",
});

export const metadata: Metadata = {
  title: {
    default: "خبرنامه - اخبارهای روز دنیا",
    template: "%s | خبرنامه"
  },
  description: "وبسایت جدیدترین اخبارهای جهان",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa-Ir">
      <body className={`${dana.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
