import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Notes App",
  description: "Simple Notes App using Next.js and Express",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <main className="flex-grow pt-16 pb-8 px-4 flex justify-center">
          {children}
        </main>
        <Footer />
        {/* 👇 Toast notifications container */}
        <Toaster position="top-right" toastOptions={{ duration: 2500 }} />
      </body>
    </html>
  );
}
