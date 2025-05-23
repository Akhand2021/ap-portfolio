import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  Header  from './components/Header';
import { Footer } from './components/Footer';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Akhand Pratap Singh",
  description: "FullStack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
