export function Input({ type = "text", className = "", ...props }) {
  return (
    <input
      type={type}
      className={`bg-transparent border-none outline-none w-full placeholder:text-text/40 text-sm disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}
