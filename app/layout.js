import Header from "@/components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "Les petits plats",
  description: "Projet de recettes Les petits plats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
      <Header />
      {children}
      </body>
    </html>
  );
}
