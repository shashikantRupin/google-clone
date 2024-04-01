// import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer.jsx";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google clone",
  description: "Google clone made with Next.js and TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative min-h-screen'>
        {children}
        <Footer />
      </body>
    </html>
  );
}
