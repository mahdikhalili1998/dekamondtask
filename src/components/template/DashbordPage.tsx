"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/scss/dashboard.module.scss";
import Image from "next/image";

interface UserInfo {
  name: string;
  email: string;
  picture: string;
  location: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<UserInfo | null>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) {
      router.replace("/auth");
    } else {
      setUser(JSON.parse(stored));
    }
  }, [router]);

  if (!user) return null;

  return (
    <div className={styles.dashboard}>
      <h1>خوش آمدی {user.name}!</h1>
      <Image
        src={user.picture}
        alt={user.name}
        width={300}
        height={300}
        priority
      />
      <p>ایمیل : {user.email}</p>
      <p> آدرس : {user.location}</p>
      <button onClick={() => router.back()}>بازگشت</button>
    </div>
  );
}
