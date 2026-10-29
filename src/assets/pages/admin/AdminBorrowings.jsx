import { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Eye } from "lucide-react";

export function AdminBorrowings() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sidebar>
      <main className="min-h-screen p-6 bg-background">
        <header className="flex flex-col mb-6">
          <h1 className="text-2xl font-poppins font-bold tracking-tight">
            Borrowings
          </h1>
          <p className="text-text/60 text-sm font-inter mt-1">
            Manage equipment borrowings
          </p>
        </header>

        <section className="flex gap-4 mb-6">
          <div className="flex items-center gap-3 w-full">
            <label className="input flex items-center gap-2 bg-surface border border-border rounded-md px-3 py-2 text-sm text-text w-full max-w-xs focus-within:border-text/40">
              <svg
                className="h-4 w-4 opacity-50 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                placeholder="Search borrower..."
                className="bg-transparent border-none outline-none w-full placeholder:text-text/40 text-sm"
              />
            </label>

            <select
              defaultValue="Status"
              className="select bg-surface border border-border rounded-md px-3 py-2 text-sm text-text cursor-pointer focus:outline-none"
            >
              <option disabled={true}>Status</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Borrowed</option>
              <option>Returned</option>
            </select>
          </div>
        </section>

        <section className="bg-surface border border-border text-text p-6 font-poppins rounded-lg shadow-xs">
          <header className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-left">
              Borrowings Table
            </h2>
          </header>

          <div className="overflow-hidden rounded-md border border-border/50">
            <table className="w-full">
              <thead className="border-b border-border bg-background/50">
                <tr className="text-left">
                  <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-text/60">
                    No
                  </th>
                  <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-text/60">
                    Peminjam
                  </th>
                  <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-text/60">
                    Equipment
                  </th>
                  <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-text/60">
                    Tanggal Pinjam
                  </th>
                  <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-text/60">
                    Status
                  </th>
                  <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-text/60 text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="text-left">
                  <td className="py-3.5 px-4 text-sm text-text/80">1</td>
                  <td className="py-3.5 px-4 text-sm font-medium">Juun</td>
                  <td className="py-3.5 px-4 text-sm font-medium">
                    Sony A7 IV
                  </td>
                  <td className="py-3.5 px-4 text-sm text-text/80">
                    27 Oktober 2026
                  </td>
                  <td className="py-3.5 px-4 text-sm text-text/80">
                    <span className="bg-success/20 text-success px-2 py-1 rounded-sm text-xs font-medium">
                      Approved
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-sm text-center">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        to="button"
                        onClick={() => setIsOpen(true)}
                        aria-label="View borrowing details"
                        className="p-1.5 rounded-md text-text/70 hover:text-text hover:bg-background transition-colors cursor-pointer"
                      >
                        <Eye size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50 text-sm font-poppins">
            <p className="text-text/60 text-xs">
              Showing <span className="font-semibold text-text">1</span> to{" "}
              <span className="font-semibold text-text">1</span> of{" "}
              <span className="font-semibold text-text">1</span> entries
            </p>

            <div className="flex items-center gap-1">
              <button
                disabled
                className="px-3 py-1.5 rounded-md border border-border text-xs text-text/40 cursor-not-allowed bg-background/30"
              >
                Previous
              </button>

              <button className="w-8 h-8 rounded-md bg-text text-background text-xs font-semibold flex items-center justify-center">
                1
              </button>
              <button className="w-8 h-8 rounded-md border border-border text-text/80 hover:bg-background/50 transition-colors text-xs flex items-center justify-center cursor-pointer">
                2
              </button>
              <button className="w-8 h-8 rounded-md border border-border text-text/80 hover:bg-background/50 transition-colors text-xs flex items-center justify-center cursor-pointer">
                3
              </button>

              <button className="px-3 py-1.5 rounded-md border border-border text-xs text-text/80 hover:bg-background/50 transition-colors cursor-pointer">
                Next
              </button>
            </div>
          </div>
        </section>

        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-surface border border-border rounded-lg p-6 w-full max-w-md shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-poppins font-semibold">
                  Borrowing Details
                </h2>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-text/60 hover:text-text cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-sm font-inter">
                <p>
                  <span className="text-text/60">Borrower:</span> Juun
                </p>

                <p>
                  <span className="text-text/60">Equipment:</span> Sony A7 IV
                </p>

                <p>
                  <span className="text-text/60">Borrow Date:</span> 27 Oktober
                  2026
                </p>

                <p>
                  <span className="text-text/60">Status:</span> Approved
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </Sidebar>
  );
}
