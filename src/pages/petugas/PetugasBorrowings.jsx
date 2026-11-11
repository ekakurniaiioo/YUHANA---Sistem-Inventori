import { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Eye } from "lucide-react";
import { DataTable } from "../../components/ui/DataTable";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";

export function PetugasBorrowings() {
  const [isOpen, setIsOpen] = useState(false);
  const summaryItems = [
    { title: "Pending Request", value: 8 },
    { title: "Approved", value: 3 },
    { title: "Borrowed", value: 12 },
    { title: "Overdue", value: 2 },
  ];

  return (
    <Sidebar role="petugas">
      <main className="min-h-screen p-6 bg-background">
        <header className="flex flex-col mb-6">
          <h1 className="text-2xl font-poppins font-bold tracking-tight">
            Borrowings
          </h1>
          <p className="text-text/60 text-sm font-inter mt-1">
            Manage equipment borrowings request and returns
          </p>
        </header>

        <section className="grid grid-cols-4 gap-6 mb-6">
          {summaryItems.map((item) => (
            <div
              key={item.title}
              className="w-full bg-surface border border-border text-text p-6 font-poppins rounded-lg flex flex-col justify-between gap-2 shadow-xs"
            >
              <h2 className="text-sm font-medium text-text/60">{item.title}</h2>
              <p className="text-3xl font-bold tracking-tight text-text">
                {item.value}
              </p>
            </div>
          ))}
        </section>

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
              <Input
                type="search"
                placeholder="Search borrower..."
              />
            </label>

            <Select
              defaultValue="Status"
              options={[
                { value: "Status", label: "Status", disabled: true },
                { value: "Pending", label: "Pending" },
                { value: "Approved", label: "Approved" },
                { value: "Borrowed", label: "Borrowed" },
                { value: "Returned", label: "Returned" },
                { value: "Overdue", label: "Overdue" },
              ]}
            />
          </div>
        </section>

        <section className="bg-surface border border-border text-text p-6 font-poppins rounded-lg shadow-xs">
          <header className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-left">
              Borrowings Table
            </h2>
          </header>

          <div className="overflow-hidden rounded-md border border-border/50">
            <DataTable
              columns={[
                { header: "No", accessor: "number" },
                {
                  header: "Peminjam",
                  accessor: "borrower",
                  cellClassName: "py-3.5 px-4 text-sm font-medium",
                },
                {
                  header: "Equipment",
                  accessor: "equipment",
                  cellClassName: "py-3.5 px-4 text-sm font-medium",
                },
                { header: "Tanggal Pinjam", accessor: "borrowedAt" },
                { header: "Tanggal Jatuh Tempo", accessor: "dueAt" },
                {
                  header: "Status",
                  render: (row) => (
                    <span className="bg-success/20 text-success px-2 py-1 rounded-sm text-xs font-medium">
                      {row.status}
                    </span>
                  ),
                },
                {
                  header: "Actions",
                  headerClassName: "text-center",
                  cellClassName: "py-3.5 px-4 text-sm text-center",
                  render: () => (
                    <div className="flex items-center justify-center gap-1">
                      <button
                        onClick={() => setIsOpen(true)}
                        aria-label="View borrowing details"
                        className="p-1.5 rounded-md text-text/70 hover:text-text hover:bg-background transition-colors cursor-pointer"
                      >
                        <Eye size={18} />
                      </button>
                    </div>
                  ),
                },
              ]}
              data={[
                {
                  number: 1,
                  borrower: "Juun",
                  equipment: "Sony A7 IV",
                  borrowedAt: "27 Oktober 2026",
                  dueAt: "27 November 2026",
                  status: "Approved",
                },
              ]}
            />
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
                  <span className="text-text/60">UnitId:</span> CAM-004
                </p>

                <p>
                  <span className="text-text/60">Borrow Date:</span> 27 Oktober
                  2026
                </p>

                <p>
                  <span className="text-text/60">Due Date:</span> 27 November
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
