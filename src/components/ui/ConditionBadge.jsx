const conditionClasses = {
  Good: "bg-success/15 text-success border-success/20",
  Fair: "bg-warning/15 text-warning border-warning/20",
  Damaged: "bg-danger/15 text-danger border-danger/20",
};

export function ConditionBadge({ condition }) {
  const colorClasses =
    conditionClasses[condition] ?? "bg-text/10 text-text/70 border-border";

  return (
    <span
      className={`inline-block rounded-lg border px-2.5 py-0.5 text-xs font-medium ${colorClasses}`}
    >
      {condition}
    </span>
  );
}
