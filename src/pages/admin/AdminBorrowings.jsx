import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Eye } from "lucide-react";
import { DataTable } from "../../components/ui/DataTable";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { getBorrowerGroups } from "../../utils/borrowerBorrowings";

export function AdminBorrowings() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Status");
  const borrowerGroups = getBorrowerGroups();
  const status = [
    ...new Set(
      borrowerGroups.flatMap((group) =>
        group.borrowings.map((borrowing) => borrowing.status),
      ),
    ),
  ];

  const borrowingColumns = [
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
            onClick={() => navigate(`/admin/borrowings/${row.userId}`)}
            aria-label={`View ${row.borrower} details`}
            className="p-1.5 rounded-md text-text/70 hover:text-text hover:bg-background transition-colors cursor-pointer"
          >
            <Eye size={18} />
            <span>View</span>
          </button>
        </div>
      ),
    },
  ];

  const filteredBorrowers = borrowerGroups.filter((group) => {
    const matchesSearch = group.borrower
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    const matchesStatus =
      selectedStatus === "Status" ||
      group.borrowings.some((borrowing) => borrowing.status === selectedStatus);

    return matchesSearch && matchesStatus;
  });

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
              <Input
                type="search"
                placeholder="Search borrower..."
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
              />
            </label>

            <Select
              defaultValue="Status"
              onChange={(e) => setSelectedStatus(e.target.value)}
              value={selectedStatus}
              options={[
                { value: "Status", label: "Semua Status" },
                ...status.map((item) => ({ value: item, label: item })),
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
              columns={borrowingColumns}
              data={filteredBorrowers}
              getRowKey={(row) => row.userId}
            />
          </div>
        </section>
      </main>
    </Sidebar>
  );
}
