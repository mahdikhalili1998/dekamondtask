"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/element/Input";
import Button from "@/components/element/Button";
import styles from "@/scss/auth.module.scss";

export default function AuthPage() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const isValidIranianPhone = (phone: string) => /^09\d{9}$/.test(phone);

  const handleLogin = async () => {
    if (!isValidIranianPhone(phone)) {
      setError("شماره موبایل معتبر نیست.");
      return;
    }

    const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
    const data = await res.json();
    const user = data.results[0];

    const userInfo = {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      picture: user.picture.large,
      location: `${user.location.city}, ${user.location.state}`,
    };

    localStorage.setItem("user", JSON.stringify(userInfo));
    router.push("/dashboard");
  };

  return (
    <div className={styles.auth}>
      <h1>ورود</h1>
      <p>برای ورود شماره همراه خود را وارد کنید </p>
      <Input value={phone} onChange={setPhone} placeholder="شماره موبایل" />
      {error && <p className={styles.error}>{error}</p>}
      <Button onClick={handleLogin}>ورود</Button>
    </div>
  );
}
