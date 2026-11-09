export function DataTable({
  columns,
  data = [],
  getRowKey,
  className = "w-full",
  headerClassName = "border-b border-border bg-background/50",
  headerRowClassName = "text-left",
  headerCellClassName = "py-3 px-4 text-xs font-semibold uppercase tracking-wider text-text/60",
  bodyClassName = "divide-y divide-border",
  rowClassName = "text-left",
  cellClassName = "py-3.5 px-4 text-sm text-text/80",
  emptyMessage = "No records found.",
  emptyClassName = "px-4 py-8 text-center text-sm text-text/60",
}) {
  return (
    <table className={className}>
      <thead className={headerClassName}>
        <tr className={headerRowClassName}>
          {columns.map((column) => (
            <th
              key={column.header}
              className={`${headerCellClassName} ${column.headerClassName ?? ""}`}
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={bodyClassName}>
        {data.length ? (
          data.map((row, index) => (
            <tr
              key={getRowKey ? getRowKey(row, index) : index}
              className={rowClassName}
            >
              {columns.map((column) => (
                <td
                  key={column.header}
                  className={column.cellClassName ?? cellClassName}
                >
                  {column.render
                    ? column.render(row, index)
                    : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length} className={emptyClassName}>
              {emptyMessage}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
