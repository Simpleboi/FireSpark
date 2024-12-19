import React, { FC } from 'react';
import "./Button.scss";

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ label, variant = 'primary', onClick }) => {
  return (
    <button 
      className={`button button-${variant}`} 
      onClick={onClick} 
      type="button"
    >
      {label}
    </button>
  );
};
