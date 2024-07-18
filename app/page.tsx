"use client";

import styles from "./page.module.css";
import Link from 'next/link';
// import { authOptions } from "./api/auth/[...nextauth]/route"; // server component approach
// import { getServerSession } from "next-auth"; // server component approach
import { useSession } from "next-auth/react"; // client component approach

export default function Home() {
  // const data = await getServerSession(authOptions); // server component approach
  const  {data:session} = useSession(); // client component approach
  return (
    <main className={styles.main}>
      {/* {JSON.stringify(data)} */}
      {/* {JSON.stringify(status)} */}
      {JSON.stringify(session)}
      {!session?.user?.name &&
        <Link href="/api/auth/signin" className="p-button font-bold">
            Login
        </Link>
      }
      {session?.user?.name &&
      <Link href="/quiz/home" className="p-button font-bold">
          Get started
      </Link>
      }
    </main>
  );
}
