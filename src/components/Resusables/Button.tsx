import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "link" | "white" | "plain";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  icon,
  disabled = false,
  fullWidth = false,
}) => {
  const baseClasses =
    "transition-colors flex items-center justify-center";

  const variantClasses = {
    primary: "bg-purple-800 text-white hover:bg-opacity-90",
    white: "text-purple-800 bg-white hover:bg-purple-600 hover:text-white",
    secondary: "bg-red-200 border border-red-300 text-red-500 hover:bg-opacity-90",
    outline:
      "border border-purple-800 text-purple-800 hover:bg-purple-600 hover:bg-opacity-10",
    link: "text-purple-800 underline hover:text-opacity-90",
    plain: ""
  };

  const sizeClasses = {
    sm: "text-xs py-2 px-2",
    md: "text-sm py-2 px-4",
    lg: "text-base py-3 px-6",
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;