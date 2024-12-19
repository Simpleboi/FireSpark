import React, { FC, ButtonHTMLAttributes } from "react";
import "./Button.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  label = "Placeholder",
  variant = "primary",
  onClick,
  className = "",
  size = "md",
  style = {},
}) => {
  return (
    <button
      className={`firesparkBtn ${size} ${className}`}
      onClick={onClick}
      type="button"
      style={style}
    >
      {label}
    </button>
  );
};
