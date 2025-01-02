import React, { FC, InputHTMLAttributes } from "react";
import "./Input.scss";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string; // Error message
  variant?: "outlined" | "filled"; // Variants
  size?: "sm" | "md" | "lg"; // Sizes
}

export const Input: FC<InputProps> = ({
  label,
  error,
  variant = "outlined",
  size = "md",
  className = "",
  ...props
}) => {
  return (
    <div className={`input-field ${className}`}>
      {label && <label className="input-field_label">{label}</label>}
      <input
        className={`input-field__input input-field__input--${variant} input-field__input--${size} ${
          error ? "input-field__input--error" : ""
        }`}
        {...props}
      />
      {error && <span className="input-field_error-message">{error}</span>}
    </div>
  );
};
