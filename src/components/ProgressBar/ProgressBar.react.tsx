import React from "react";
import "./ProgressBar.scss";
// this is for my daily commit #4
export interface ProgressBarProps {
  progress: number; 
  variant?: "primary" | "success" | "danger" | "info"; 
  size?: "sm" | "md" | "lg"; 
  showLabel?: boolean; 
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
