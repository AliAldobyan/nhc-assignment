import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const imageUrl = product?.thumbnail || product?.images?.[0];

  return (
    <Card className={styles.card}>
      {imageUrl && (
        <div className={styles.imageWrap}>
          <Image
            src={imageUrl}
            alt={product.title}
            width={320}
            height={240}
            sizes="(max-width: 768px) 100vw, 260px"
            className={styles.image}
          />
        </div>
      )}
      <CardContent className={styles.content}>
        <h3 className={styles.title}>{product?.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.meta}>
          <span className={styles.price}>
            <span className={styles.priceLabel}>Price :</span>{" "}
            <span className={styles.priceValue}>{product?.price}$</span>
          </span>
          <button type="button" className={styles.more}>
            More
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
