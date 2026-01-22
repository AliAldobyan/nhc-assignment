"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
        Products
      </Link>
      <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined}>
        About
      </Link>
    </nav>
  );
}
