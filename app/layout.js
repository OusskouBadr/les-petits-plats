import Header from "@/components/Header/Header";
import { Anton, Manrope } from "next/font/google"
import "./globals.css";

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
      <body className={`${anton.variable} ${manrope.variable}`}>
      <Header />
      {children}
      </body>
    </html>
  );
}
