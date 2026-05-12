import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  [key: string]: any;
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 text-sm sm:text-base cursor-pointer";
  const variants = {
    primary:
      "bg-[#e6ff4b] text-black hover:bg-[#d4ed45] hover:shadow-lg hover:-translate-y-0.5 shadow-[#e6ff4b]/20 px-6 py-3",
    secondary:
      "bg-white text-black border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 px-6 py-3",
    outline:
      "bg-transparent text-white border border-white/20 hover:bg-white/10 px-6 py-3",
    ghost:
      "bg-transparent text-neutral-600 hover:text-black hover:bg-neutral-100 px-4 py-2",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
