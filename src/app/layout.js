import { Abel } from "next/font/google";
import "./globals.css";

const abel = Abel({
  variable: "--font-abel",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "NHC Products Search",
  description: "Search and browse products from NHC.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={abel.variable}>{children}</body>
    </html>
  );
}
