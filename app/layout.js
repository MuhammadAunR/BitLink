import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700", "100", "600", "200", "800"]
});


export const metadata = {
  title: "BitLinks - Your trusted URL shortener",
  description: "BitLinks helps you to shorten your Urls easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
      crosspilot="">
      <body
        className={`${poppins.variable} antialiased ${poppins.className}`} >
        <Navbar />
        {children}
        <Script src="https://cdn.lordicon.com/lordicon.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
