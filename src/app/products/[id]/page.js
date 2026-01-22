import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "../../page.module.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

function RatingStars({ rating }) {
  const rounded = Math.round(rating);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={index < rounded ? "text-[#f7c948]" : "text-[#d9d9d9]"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  if (!id) {
    return null;
  }
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return null;
  }
  const product = await res.json();

  return (
    <div className={`${styles.page} ${inter.className}`}>
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
            <Link href="/">Products</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className="flex w-full flex-col items-center gap-8">
            <h1 className="text-[22px] font-semibold text-[var(--brand)]">
              {product?.title}
            </h1>

            {product?.thumbnail && (
              <div className="w-full max-w-[520px] overflow-hidden rounded-lg bg-[var(--surface)] shadow-[0_6px_18px_rgba(0,0,0,0.1)]">
                <div className="relative h-[260px] w-full bg-[var(--surface)]">
                  <Image
                    src={product?.thumbnail}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 520px"
                    className="object-contain"
                  />
                </div>
              </div>
            )}

            <div className="grid w-full max-w-[520px] grid-cols-2 gap-4 text-[13px] text-[var(--text-primary)]">
              <p>
                Price :{" "}
                <span className="font-medium text-[var(--brand)]">
                  {product?.price}$
                </span>
              </p>
              <p>
                Discount Percentage :{" "}
                <span className="font-medium text-[var(--brand)]">
                  {product?.discountPercentage}
                </span>
              </p>
              <div className="flex items-center gap-2">
                <span>Rating :</span>
                <RatingStars rating={product?.rating} />
              </div>
              <p>
                Stock :{" "}
                <span className="font-medium text-[var(--brand)]">
                  {product?.stock}
                </span>
              </p>
              <p>
                Brand :{" "}
                <span className="font-medium text-[var(--brand)]">
                  {product?.brand}
                </span>
              </p>
              <p>
                Category :{" "}
                <span className="font-medium text-[var(--brand)]">
                  {product?.category}
                </span>
              </p>
            </div>

            <div className="w-full max-w-[700px]">
              <h2 className="text-[15px] font-medium text-[var(--text-primary)]">
                Product Description
              </h2>
              <p className="mt-2 text-[13px] text-[var(--text-muted)]">
                {product?.description}
              </p>
            </div>

            <div className="w-full max-w-[700px]">
              <h2 className="text-[15px] font-medium text-[var(--text-primary)]">
                Product Images
              </h2>
              <div className="mt-3 grid grid-cols-4 gap-3">
                {product?.images?.filter(Boolean).map((image) => (
                  <div
                    key={image}
                    className="relative h-[80px] w-full overflow-hidden rounded-md bg-[var(--surface)] shadow-[0_6px_18px_rgba(0,0,0,0.1)]"
                  >
                    <Image
                      src={image}
                      alt={product?.title}
                      fill
                      sizes="(max-width: 768px) 25vw, 120px"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
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
