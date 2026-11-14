export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  className = "",
}) {
  const start = totalItems ? (currentPage - 1) * pageSize + 1 : 0;
  const end = Math.min(currentPage * pageSize, totalItems);
  const buttonClass =
    "px-3 py-1.5 rounded-md border border-border text-xs transition-colors";

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4 pt-4 border-t border-border/50 text-sm font-poppins">
      <p className="text-text/60 text-xs">
        Showing <span className="font-semibold text-text">{start}</span> to{" "}
        <span className="font-semibold text-text">{end}</span> of{" "}
        <span className="font-semibold text-text">{totalItems}</span> entries
      </p>

      <nav aria-label="Pagination" className="flex items-center gap-1 flex-wrap">
        <button
          type="button"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          className={`${buttonClass} ${
            currentPage <= 1
              ? "text-text/40 cursor-not-allowed bg-background/30"
              : "text-text/80 hover:bg-background/50 cursor-pointer"
          }`}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              type="button"
              key={page}
              aria-current={page === currentPage ? "page" : undefined}
              onClick={() => onPageChange(page)}
              className={
                page === currentPage
                  ? "w-8 h-8 rounded-md bg-text text-background text-xs font-semibold flex items-center justify-center"
                  : "w-8 h-8 rounded-md border border-border text-text/80 hover:bg-background/50 transition-colors text-xs flex items-center justify-center cursor-pointer"
              }
            >
              {page}
            </button>
          ),
        )}
        <button
          type="button"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className={`${buttonClass} ${
            currentPage >= totalPages
              ? "text-text/40 cursor-not-allowed bg-background/30"
              : "text-text/80 hover:bg-background/50 cursor-pointer"
          }`}
        >
          Next
        </button>
      </nav>
    </div>
  );
}
