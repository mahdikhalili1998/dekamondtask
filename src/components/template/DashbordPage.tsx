"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/scss/dashboard.module.scss";

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
      <h1>Welcome, {user.name}!</h1>
      <img src={user.picture} alt={user.name} />
      <p>{user.email}</p>
      <p>{user.location}</p>
    </div>
  );
}
