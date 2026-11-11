import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";

const EMPTY_DATA = [];

export function DataTable({
  columns,
  data = EMPTY_DATA,
  pageSize = 10,
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
  const [currentPage, setCurrentPage] = useState(1);
  const safePageSize =
    Number.isInteger(pageSize) && pageSize > 0 ? pageSize : 10;
  const totalPages = Math.max(1, Math.ceil(data.length / safePageSize));
  const page = Math.min(currentPage, totalPages);
  const pageData = data.slice((page - 1) * safePageSize, page * safePageSize);

  useEffect(() => {
    setCurrentPage(1);
  }, [data, safePageSize]);

  return (
    <>
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
            pageData.map((row, index) => (
              <tr
                key={
                  getRowKey
                    ? getRowKey(row, (page - 1) * safePageSize + index)
                    : (page - 1) * safePageSize + index
                }
                className={rowClassName}
              >
                {columns.map((column) => (
                  <td
                    key={column.header}
                    className={column.cellClassName ?? cellClassName}
                  >
                    {column.render
                      ? column.render(row, (page - 1) * safePageSize + index)
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
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        totalItems={data.length}
        pageSize={safePageSize}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
