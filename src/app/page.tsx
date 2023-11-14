import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li className={styles.item}>
          <Link href="/facebook">Facebook</Link>
        </li>
        <li className={styles.item}>
          <Link href="/youtube">Youtube</Link>
        </li>
        <li className={styles.item}>
          <Link href="/tiktok">Tiktok</Link>
        </li>
      </ul>

      {/* <ul>
        <li className={styles.item}>
          <a href="/facebook">Facebook</a>
        </li>
        <li className={styles.item}>
          <a href="/youtube">Youtube</a>
        </li>
        <li className={styles.item}>
          <a href="/tiktok">Tiktok</a>
        </li>
      </ul> */}
    </main>
  );
}
