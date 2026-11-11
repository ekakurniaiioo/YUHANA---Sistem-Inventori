import { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Eye } from "lucide-react";
import { DataTable } from "../../components/ui/DataTable";
import { StatusBadge } from "../../components/ui/StatusBadge";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import users from "../../data/users";
import equipment from "../../data/equipment";
import borrowings from "../../data/borrowings";
import equipmentUnits from "../../data/equipmentUnits";

export function AdminBorrowings() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Status");
  const [selectedBorrowingId, setSelectedBorrowingId] = useState(null);
  const status = [...new Set(borrowings.map((borrowing) => borrowing.status))];

  const borrowingColumns = [
    { header: "No", render: (_, index) => index + 1 },
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
    { header: "Tanggal Pinjam", accessor: "date" },
    {
      header: "Status",
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      header: "Actions",
      headerClassName: "text-center",
      cellClassName: "py-3.5 px-4 text-sm text-center",
      render: (row) => (
        <div className="flex items-center justify-center gap-1">
          <button
            onClick={() => {
              setSelectedBorrowingId(row.id);
              setIsOpen(true);
            }}
            aria-label="View borrowing details"
            className="p-1.5 rounded-md text-text/70 hover:text-text hover:bg-background transition-colors cursor-pointer"
          >
            <Eye size={18} />
          </button>
        </div>
      ),
    },
  ];

  const borrowingData = borrowings.map((item, index) => {
    const user = users.find((user) => user.id === item.userId);

    const unit = equipmentUnits.find((unit) => unit.id === item.unitId);

    const name = equipment.find((name) => name.id === unit.equipmentId);

    return {
      id: item.id,
      number: index + 1,
      borrower: user ? user.name : "Unknown",
      equipment: name ? name.name : "Unknown",
      unitId: item.unitId,
      date: item.borrowDate,
      status: item.status,
    };
  });

  const selectedBorrowing = borrowingData.find(
    (item) => item.id === selectedBorrowingId,
  );

  const filteredBorrowings = borrowingData.filter((unit) => {
    const matchesSearch =
      unit.borrower.toLowerCase().includes(searchInput.toLowerCase()) ||
      unit.equipment.toLowerCase().includes(searchInput.toLowerCase());

    const macthesCategory =
      selectedStatus === "Status" || unit.status === selectedStatus;

    return matchesSearch && macthesCategory;
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
            <DataTable columns={borrowingColumns} data={filteredBorrowings} />
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

              {selectedBorrowing && (
                <div className="space-y-4 text-sm font-inter">
                  <p>
                    <span className="text-text/60">Borrower: </span>
                    {selectedBorrowing.borrower}
                  </p>

                  <p>
                    <span className="text-text/60">Equipment: </span>
                    {selectedBorrowing.equipment}
                  </p>

                  <p>
                    <span className="text-text/60">Unit Id: </span>
                    {selectedBorrowing.unitId}
                  </p>

                  <p>
                    <span className="text-text/60">Borrow Date: </span>
                    {selectedBorrowing.date}
                  </p>

                  <p>
                    <span className="text-text/60">Status: </span>
                    {selectedBorrowing.status}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </Sidebar>
  );
}
