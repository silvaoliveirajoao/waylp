import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});   

export const metadata = {
  title: "Way Turismo",
  description: "PENSAR EM DESCRIÇÃO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${outfit.className} min-h-sceen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
