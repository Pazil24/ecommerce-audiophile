import React from "react";

const Button = ({
  variant = "primary",
  children,
  text,
  className = "",
  onClick,
  type = "button",
  ...props
}) => {
  const baseClasses =
    "px-8 py-4 font-bold text-xs tracking-wider uppercase transition-all duration-300";

  const variants = {
    primary: "bg-[#D87D4A] text-white hover:bg-[#FBAF85]",
    secondary:
      "border-2 border-black text-black hover:bg-black hover:text-white",
    outline:
      "border border-black text-black bg-transparent hover:bg-black hover:text-white",
    shop: "text-black opacity-50 hover:text-[#D87D4A] text-sm font-bold tracking-wide",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick} type={type} {...props}>
      {children || text}
    </button>
  );
};

export default Button;
