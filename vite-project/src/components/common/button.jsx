import React from "react";

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
  const baseStyle =
    "px-4 py-2 rounded-2xl font-medium transition-all duration-300";

  const variants = {
    primary: "bg-[#3C3C3C] text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
