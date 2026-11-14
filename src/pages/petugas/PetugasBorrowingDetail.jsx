import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Button } from "../../components/ui/Button";
import { DataTable } from "../../components/ui/DataTable";
import { StatusBadge } from "../../components/ui/StatusBadge";
import borrowings from "../../data/borrowings";
import borrowingItems from "../../data/borrowingItems";
import equipment from "../../data/equipment";
import equipmentUnits from "../../data/equipmentUnits";
import users from "../../data/users";
import { ConditionBadge } from "../../components/ui/ConditionBadge";

function formatDate(date) {
  if (!date) return "—";

  return new Date(`${date}T00:00:00`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function PetugasBorrowingDetail() {
  const { id } = useParams();
  const borrowing = borrowings.find((item) => item.id === id);
  const dialogRef = useRef(null);
  const [localDecision, setLocalDecision] = useState(null);
  const [confirmation, setConfirmation] = useState(null);
  const status =
    localDecision?.id === id ? localDecision.status : borrowing?.status;

  useEffect(() => {
    if (confirmation?.id === id && !dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, [confirmation, id]);

  const items = borrowingItems
    .filter((item) => item.borrowingId === id)
    .map((borrowingItem) => {
      const unit = equipmentUnits.find(
        (item) => item.id === borrowingItem.unitId,
      );
      const equipmentItem = equipment.find(
        (item) => item.id === unit?.equipmentId,
      );

      return {
        id: borrowingItem.id,
        equipment: equipmentItem?.name ?? "Equipment tidak ditemukan",
        unitId: unit?.id ?? borrowingItem.unitId ?? "Unknown",
        condition: unit?.condition ?? "Unknown",
        unitStatus: unit?.status ?? "Unknown",
      };
    });

  const confirmDecision = () => {
    if (status !== "Pending" || confirmation?.id !== id) return;

    setLocalDecision({
      id,
      status: confirmation.action === "approve" ? "Approved" : "Rejected",
    });
    setConfirmation(null);
  };

  const columns = [
    { header: "Equipment", accessor: "equipment" },
    { header: "Unit ID", accessor: "unitId" },
    { header: "Condition", 
      render: (row) => <ConditionBadge condition={row.condition} />
     },
    {
      header: "Unit Status",
      render: (row) => <StatusBadge status={row.unitStatus} />,
    },
  ];

  return (
    <Sidebar role="petugas">
      <main className="min-h-screen bg-background p-6">
        <header className="mb-6 flex flex-col">
          <h1 className="font-poppins text-2xl font-bold tracking-tight">
            Borrowing Detail
          </h1>
          <p className="mt-1 text-sm text-text/60">
            Review all equipment units in this transaction.
          </p>
          <Button
            to="/petugas/borrowings/pending"
            variant="dark"
            className="mt-4 w-fit"
          >
            &larr; Back to Pending Requests
          </Button>
        </header>

        {!borrowing ? (
          <section className="rounded-lg border border-border bg-surface p-6 text-text">
            <p>Transaksi peminjaman tidak ditemukan.</p>
          </section>
        ) : (
          <>
            <section className="mb-6 grid gap-4 rounded-lg border border-border bg-surface p-6 text-text sm:grid-cols-2">
              <div>
                <p className="text-sm text-text/60">Borrower</p>
                <p className="font-medium">
                  {users.find((user) => user.id === borrowing.userId)?.name ??
                    "Unknown"}
                </p>
              </div>
              <div>
                <p className="text-sm text-text/60">Transaction ID</p>
                <p className="font-medium">{borrowing.id}</p>
              </div>
              <div>
                <p className="text-sm text-text/60">Borrow Date</p>
                <p className="font-medium">{formatDate(borrowing.borrowDate)}</p>
              </div>
              <div>
                <p className="text-sm text-text/60">Due Date</p>
                <p className="font-medium">{formatDate(borrowing.dueDate)}</p>
              </div>
              <div className="sm:col-span-2">
                <p className="mb-2 text-sm text-text/60">Transaction Status</p>
                <StatusBadge status={status} />
              </div>
            </section>

            <section className="mb-6 rounded-lg border border-border bg-surface p-6 text-text">
              <h2 className="mb-4 font-poppins text-lg font-semibold">
                Equipment Items ({items.length})
              </h2>
              <DataTable
                columns={columns}
                data={items}
                getRowKey={(row) => row.id}
                emptyMessage="Tidak ada item pada transaksi ini."
              />
            </section>

            {status === "Pending" && (
              <section className="flex gap-3">
                <Button
                  variant="dark"
                  onClick={() => setConfirmation({ id, action: "approve" })}
                >
                  Approve
                </Button>
                <Button
                  onClick={() => setConfirmation({ id, action: "reject" })}
                >
                  Reject
                </Button>
              </section>
            )}
          </>
        )}

        {borrowing && confirmation?.id === id && (
          <dialog
            ref={dialogRef}
            onCancel={(event) => {
              event.preventDefault();
              setConfirmation(null);
            }}
            className="fixed inset-0 z-50 m-0 flex h-full w-full items-center justify-center border-0 bg-transparent p-4 backdrop:bg-black/50"
          >
            <section
              aria-labelledby="decision-title"
              className="w-full max-w-md rounded-lg bg-surface p-6 text-text shadow-xl"
            >
              <h2
                id="decision-title"
                className="font-poppins text-lg font-semibold"
              >
                Confirm {confirmation.action === "approve" ? "Approval" : "Rejection"}
              </h2>
              <p className="mt-3 text-sm text-text/70">
                {confirmation.action === "approve"
                  ? "Approve this entire transaction? Its equipment units will remain Available."
                  : "Reject this entire transaction? Its equipment units will remain Available."}
              </p>
              <div className="mt-6 flex justify-end gap-3">
                <Button onClick={() => setConfirmation(null)}>
                  Cancel
                </Button>
                <Button variant="dark" onClick={confirmDecision}>
                  Confirm
                </Button>
              </div>
            </section>
          </dialog>
        )}
      </main>
    </Sidebar>
  );
}
