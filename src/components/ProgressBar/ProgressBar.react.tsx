import { FC ,ProgressHTMLAttributes } from "react";
import "./ProgressBar.scss";

export interface ProgressBarProps
  extends ProgressHTMLAttributes<HTMLProgressElement> {
  progress: number;
  variant?: "primary" | "success" | "danger" | "info";
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  label?: string;
  style?: React.CSSProperties;
}

export const ProgressBar: FC<ProgressBarProps> = ({
  progress,
  variant = "primary",
  size = "md",
  showLabel = true,
  label,
  style,
  ...props
}) => {
  const progressValue = Math.min(Math.max(progress, 0), 100);

  return (
    <div
      className={`progress-bar progress-bar--${variant} progress-bar--${size}`}
      style={style}
    >
      {showLabel && (
        <span className="progress-bar__label">
          {label ? label : `${progressValue}%`}
        </span>
      )}
      <progress
        value={progressValue}
        max={100}
        className="progress-bar__element"
        {...props}
      ></progress>
    </div>
  );
};
