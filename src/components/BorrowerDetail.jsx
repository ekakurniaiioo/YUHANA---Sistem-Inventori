import { useParams } from "react-router-dom";
import { Sidebar } from "./sidebar/Sidebar";
import { Button } from "./ui/Button";
import { DataTable } from "./ui/DataTable";
import { StatusBadge } from "./ui/StatusBadge";
import { getBorrowerHistory } from "../utils/borrowerBorrowings";
import users from "../data/users";

export function BorrowerDetail({ role }) {
  const { borrowerId } = useParams();
  const borrower = users.find((user) => user.id === borrowerId);
  const history = getBorrowerHistory(borrowerId);
  const columns = [
    { header: "Borrowing ID", accessor: "borrowingId" },
    { header: "Equipment", accessor: "equipmentName" },
    { header: "Unit ID", accessor: "unitId" },
    { header: "Borrow Date", accessor: "borrowDate" },
    { header: "Due Date", accessor: "dueDate" },
    {
      header: "Status",
      render: (row) => <StatusBadge status={row.status} />,
    },
  ];

  return (
    <Sidebar role={role}>
      <main className="min-h-screen bg-background p-6">
        <header className="mb-6 flex flex-col">
          <h1 className="font-poppins text-2xl font-bold tracking-tight">
            Borrower Detail
          </h1>
          <p className="mt-1 text-sm text-text/60">
            Borrower information and borrowing history
          </p>
          <Button
            to={`/${role}/borrowings`}
            variant="dark"
            className="mt-4 w-fit"
          >
            &larr; Back to Borrowings
          </Button>
        </header>

        <section className="mb-6 rounded-lg border border-border bg-surface p-6 font-poppins text-text">
          <h2 className="text-xl font-bold">{borrower?.name ?? "Unknown"}</h2>
          <p className="mt-2 text-sm text-text/60">
            ID: {borrower?.id ?? borrowerId ?? "Unknown"}
          </p>
          <p className="text-sm text-text/60">
            Email: {borrower?.email ?? "Unknown"}
          </p>
        </section>

        <section className="rounded-lg border border-border bg-surface p-6 font-poppins text-text shadow-xs">
          <header className="mb-4">
            <h2 className="text-lg font-semibold">Borrowing History</h2>
          </header>
          <div className="overflow-hidden rounded-md border border-border/50">
            <DataTable
              columns={columns}
              data={history}
              getRowKey={(row) => row.id}
            />
          </div>
        </section>
      </main>
    </Sidebar>
  );
}
