import { Link } from "react-router-dom";

export function Button({
  children,
  onClick,
  type = "button",
  to,
  href,
  disabled = false,
  variant = "outline",
  className = "",
}) {
  const variants = {
    gold: "inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-hover text-white text-sm font-poppins font-semibold text-base px-9 py-4 rounded-lg transition-all duration-200 shadow-lg cursor-pointer active:scale-95",
    dark: "bg-text text-background font-medium text-sm px-4 py-2.5 rounded-md cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2",
    darkGold:
      "flex w-full items-center justify-center gap-2 rounded-md bg-[#24231F] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A88B50] disabled:cursor-not-allowed disabled:opacity-40",
    outline:
      "inline-flex items-center gap-2 transition-all duration-200 active:scale-95 font-poppins font-semibold cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 text-white text-sm py-1.5 px-6 rounded-sm border border-gold hover:bg-gold hover:text-background",
  };
  const classes = `${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
