const statusClasses = {
  Available: "bg-success/15 text-success border-success/20",
  Borrowed: "bg-info/15 text-info border-info/20",
  Maintenance: "bg-danger/15 text-danger border-danger/20",
  Pending: "bg-warning/15 text-warning border-warning/20",
  Approved: "bg-success/15 text-success border-success/20",
  Overdue: "bg-danger/15 text-danger border-danger/20",
  Rejected: "bg-danger/15 text-danger border-danger/20",
};

export function StatusBadge({ status }) {
  const colorClasses =
    statusClasses[status] ?? "bg-text/10 text-text/70 border-border";

  return (
    <span
      className={`inline-block rounded-lg border px-2.5 py-0.5 text-xs font-medium ${colorClasses}`}
    >
      {status}
    </span>
  );
}
