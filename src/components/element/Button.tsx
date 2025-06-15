import React from "react";
import styles from "@/scss/Button.module.scss";
import { ButtonProps } from "@/types/main";
export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
