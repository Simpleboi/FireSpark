import React, { FC, InputHTMLAttributes } from "react";
import "./Input.scss";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string; 
  variant?: "outlined" | "filled"; 
  size?: "sm" | "md" | "lg"; 
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
        className={`input-field__input input-field_input--${variant} input-field_input--${size} ${
          error ? "input-field_input--error" : ""
        }`}
        {...props}
      />
      {error && <span className="input-field_error-message">{error}</span>}
    </div>
  );
};


// Example usage
<Input
    label="Email"
    type="email"
    placeholder="Enter your email"
    variant="outlined"
    size="lg"
    error="This field is required"
    onChange={(e) => console.log(e.target.value)}
/>