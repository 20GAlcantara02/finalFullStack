// components/ui/Button.tsx
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({ children, className, variant = "default", ...props }: ButtonProps) {
  const base = "px-4 py-2 rounded text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  };

  const style = clsx(base, variants[variant], className);

  return (
    <button className={style} {...props}>
      {children}
    </button>
  );
}
