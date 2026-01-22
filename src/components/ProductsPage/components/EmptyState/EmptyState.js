import Image from "next/image";
import styles from "./EmptyState.module.css";

export default function EmptyState() {
  return (
    <div className={styles.emptyState}>
      <Image src="/emptyResult2.png" alt="No results" width={150} height={150} />
      <p>No results for your search!</p>
      <span>Try another keyword</span>
    </div>
  );
}
