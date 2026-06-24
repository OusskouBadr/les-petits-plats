import Header from "@/components/Header/Header";
import { Anton, Manrope } from "next/font/google"
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const anton = Anton({
  substers: ["latin"],
  weight: '400',
  variable: "--font-anton"
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
})

export const metadata = {
  title: "Les petits plats",
  description: "Projet de recettes Les petits plats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={` ${anton.variable} ${manrope.variable}`}>
        <div className="app">
          <Header />
          {children}
          <Footer />
        </div>  
      </body>
    </html>
  );
}
