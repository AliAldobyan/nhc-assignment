import { Abel } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import styles from "./page.module.css";
import NavLinks from "./nav-links";

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
      <body className={abel.variable}>
        <div className={styles.page}>
          <header className={styles.header}>
            <div className={`${styles.container} ${styles.headerInner}`}>
              <div className={styles.logo}>
                <Image
                  src="/logo.svg"
                  alt="NHC Innovation logo"
                  width={36}
                  height={36}
                  className={styles.logoImage}
                />
              </div>
              <NavLinks />
            </div>
          </header>

          <main className={styles.main}>
            <div className={styles.container}>{children}</div>
          </main>

          <footer className={styles.footer}>
            <div className={`${styles.container} ${styles.footerInner}`}>
              <div className={styles.footerLogos}>
                <Image
                  src="/logo-white.svg"
                  alt="NHC Innovation logo"
                  width={42}
                  height={42}
                />
                <Image
                  src="/vision2030.png"
                  alt="Vision 2030 logo"
                  width={90}
                  height={42}
                />
              </div>
              <span>
                All rights reserved © 2022 - Developed and operated by National
                Housing
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
