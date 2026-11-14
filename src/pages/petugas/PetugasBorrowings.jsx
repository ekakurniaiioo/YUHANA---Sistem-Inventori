import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Eye } from "lucide-react";
import { DataTable } from "../../components/ui/DataTable";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { getBorrowerGroups } from "../../utils/borrowerBorrowings";

export function PetugasBorrowings() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const borrowerGroups = getBorrowerGroups();

  const borrowerColumns = [
    { header: "No", render: (_, index) => index + 1 },
    {
      header: "Peminjam",
      accessor: "borrower",
      cellClassName: "py-3.5 px-4 text-sm font-medium",
    },
    { header: "Active Equipment", accessor: "activeEquipmentCount" },
    {
      header: "Actions",
      headerClassName: "text-center",
      cellClassName: "py-3.5 px-4 text-sm text-center",
      render: (row) => (
        <div className="flex items-center justify-center gap-1">
          <button
            onClick={() => navigate(`/petugas/borrowings/${row.userId}`)}
            aria-label={`View ${row.borrower} details`}
            className="p-1.5 rounded-md text-text/70 hover:text-text hover:bg-background transition-colors cursor-pointer"
          >
            <Eye size={18} />
          </button>
        </div>
      ),
    },
  ];

  const filteredBorrowers = borrowerGroups.filter((group) => {
    const matchesSearch = group.borrower
      .toLowerCase()
      .includes(searchInput.toLowerCase());

    return matchesSearch;
  });

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
          <Button
            to="/petugas/borrowings/pending"
            variant="dark"
            className="mt-4 w-fit"
          >
            Pending Requests
          </Button>
        </header>

        <section className="flex gap-4 mb-6">
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
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
          </label>
        </section>

        <section className="bg-surface border border-border text-text p-6 font-poppins rounded-lg shadow-xs">
          <header className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-left">
              Borrowings Table
            </h2>
          </header>

          <div className="overflow-hidden rounded-md border border-border/50">
            <DataTable
              columns={borrowerColumns}
              data={filteredBorrowers}
              getRowKey={(row) => row.userId}
            />
          </div>
        </section>
      </main>
    </Sidebar>
  );
}
