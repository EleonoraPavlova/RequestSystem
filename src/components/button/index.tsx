import { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./button.module.css";

import { cn } from "@/shared/lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        styles.btn,
        styles[`btn-${variant}`],
        styles[`btn-${size}`],
        isLoading && styles["is-loading"],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <span className={styles.spinner} />}
      <span className={styles["btn-content"]}>{isLoading ? "Wait..." : children}</span>
    </button>
  );
};

export default Button;
