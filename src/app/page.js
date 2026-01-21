import Image from "next/image";
import Link from "next/link";
import ProductsPage from "@/components/ProductsPage/ProductsPage";
import styles from "./page.module.css";

export default function Home() {
  return (
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
          <nav className={styles.nav}>
            <Link href="/" aria-current="page">
              Products
            </Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <ProductsPage />
        </div>
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
  );
}
