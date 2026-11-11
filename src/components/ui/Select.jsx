export function Select({ options = [], className = "", ...props }) {
  return (
    <select
      className={`select bg-surface border border-border rounded-md px-3 py-2 text-sm text-text cursor-pointer focus:outline-none focus:border-text/40 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {options.map(({ value, label, disabled = false }) => (
        <option key={value} value={value} disabled={disabled}>
          {label}
        </option>
      ))}
    </select>
  );
}
