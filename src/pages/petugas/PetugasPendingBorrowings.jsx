import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Button } from "../../components/ui/Button";
import { DataTable } from "../../components/ui/DataTable";
import { Eye } from "lucide-react";
import borrowings from "../../data/borrowings";
import borrowingItems from "../../data/borrowingItems";
import users from "../../data/users";

function formatDate(date) {
  if (!date) return "—";

  return new Date(`${date}T00:00:00`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function PetugasPendingBorrowings() {
  const navigate = useNavigate();

  const pendingRequests = borrowings
    .filter((borrowing) => borrowing.status === "Pending")
    .map((borrowing) => ({
      id: borrowing.id,
      borrower:
        users.find((user) => user.id === borrowing.userId)?.name ?? "Unknown",
      borrowDate: borrowing.borrowDate,
      itemCount: borrowingItems.filter(
        (item) => item.borrowingId === borrowing.id,
      ).length,
    }));

  const columns = [
    { header: "Borrower", accessor: "borrower" },
    { header: "Transaction ID", accessor: "id" },
    {
      header: "Request Date",
      render: (row) => formatDate(row.borrowDate),
    },
    { header: "Items", accessor: "itemCount" },
    {
      header: "Actions",
      render: (row) => (
        <button
          onClick={() => navigate(`/petugas/borrowings/transaction/${row.id}`)}
          aria-label={`View ${row.borrower} details`}
          className="p-1.5 rounded-md text-text/70 hover:text-text hover:bg-background transition-colors cursor-pointer"
        >
          <Eye size={18} />
        </button>
      ),
    },
  ];

  return (
    <Sidebar role="petugas">
      <main className="min-h-screen bg-background p-6">
        <header className="mb-6 flex flex-col">
          <h1 className="font-poppins text-2xl font-bold tracking-tight">
            Pending Requests
          </h1>
          <p className="mt-1 text-sm text-text/60">
            Review borrowing requests before making a decision.
          </p>
          <Button
            to="/petugas/borrowings"
            variant="dark"
            className="mt-4 w-fit"
          >
            &larr; Back to Borrowings
          </Button>
        </header>

        <section className="rounded-lg border border-border bg-surface p-6 font-poppins text-text shadow-xs">
          <DataTable
            columns={columns}
            data={pendingRequests}
            getRowKey={(row) => row.id}
            emptyMessage="Tidak ada permintaan Pending."
          />
        </section>
      </main>
    </Sidebar>
  );
}
