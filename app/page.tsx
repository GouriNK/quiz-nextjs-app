import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/quiz/home" className="p-button font-bold">
          Get started
      </Link>
    </main>
  );
}
