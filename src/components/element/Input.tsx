import React from "react";
import styles from "@/scss/Input.module.scss";
import { InputProps } from "@/types/main";

export default function Input({ value, onChange, placeholder }: InputProps) {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      type="tel"
    />
  );
}
