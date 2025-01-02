import React from "react";
import "./ProgressBar.scss";

export interface ProgressBarProps {
  progress: number; // Progress percentage (0–100)
  variant?: "primary" | "success" | "danger" | "info"; 
  size?: "sm" | "md" | "lg"; 
  showLabel?: boolean; // Whether to show the percentage or custom label
  label?: string; 
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  variant = "primary",
  size = "md",
  showLabel = true,
  label,
}) => {
  const progressValue = Math.min(Math.max(progress, 0), 100); // Ensure progress is between 0–100

  return (
    <div className={`progress-bar progress-bar--${variant} progress-bar--${size}`}>
      <div
        className="progress-bar__fill"
        style={{ width: `${progressValue}%` }}
      ></div>
      {showLabel && (
        <div className="progress-bar__label">
          {label ? label : `${progressValue}%`}
        </div>
      )}
    </div>
  );
};
