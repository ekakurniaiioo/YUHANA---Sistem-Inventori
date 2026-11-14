import { Sidebar } from "../../components/sidebar/Sidebar";
import { DataTable } from "../../components/ui/DataTable";
import { StatusBadge } from "../../components/ui/StatusBadge";
import users from "../../data/users";
import equipment from "../../data/equipment";
import borrowings from "../../data/borrowings";
import borrowingItems from "../../data/borrowingItems";
import equipmentUnits from "../../data/equipmentUnits";

export function PetugasDashboard() {
  const summaryItems = [
    {
      title: "Pending Request",
      value: borrowings.filter((item) => item.status === "Pending").length,
    },
    {
      title: "Currently Borrowed",
      value: borrowings.filter((item) => item.status === "Borrowed").length,
    },
    {
      title: "Returns Today",
      value: "—",
    },
    {
      title: "Overdue",
      value: borrowings.filter((item) => item.status === "Overdue").length,
    },
  ];

  const recentColumns = [
    { header: "Borrower", accessor: "borrower" },
    { header: "Equipment", accessor: "equipment" },
    { header: "Unit Id", accessor: "unitId" },
    { header: "Borrow Date", accessor: "borrowDate" },
    { header: "Due Date", accessor: "dueDate" },
    {
      header: "Status",
      render: (row) => <StatusBadge status={row.status} />,
    },
  ];

  const recentData = borrowings.flatMap((borrowing) => {
    const user = users.find((user) => user.id === borrowing.userId);

    return borrowingItems
      .filter((item) => item.borrowingId === borrowing.id)
      .map((borrowingItem) => {
        const unit = equipmentUnits.find(
          (unit) => unit.id === borrowingItem.unitId,
        );
        const equipmentItem = equipment.find(
          (equipmentItem) => equipmentItem.id === unit?.equipmentId,
        );

        return {
          id: borrowingItem.id,
          borrower: user?.name ?? "Unknown",
          equipment: equipmentItem?.name ?? "Unknown",
          unitId: unit?.id ?? borrowingItem.unitId ?? "Unknown",
          borrowDate: borrowing.borrowDate ?? "—",
          dueDate: borrowing.dueDate ?? "—",
          status: borrowing.status,
        };
      });
  });

  return (
    <Sidebar role="petugas">
      <main className="min-h-screen p-6 bg-background">
        <header className="flex flex-col mb-6">
          <div>
            <h1 className="text-2xl font-poppins font-bold">Dashboard</h1>
            <p className="text-text/60 text-sm font-inter ">Halo, Petugas</p>
          </div>
        </header>

        <section className="grid grid-cols-4 gap-6">
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

        <section className="bg-surface border border-border text-text p-6 mt-6 text-center font-poppins rounded-lg">
          <header className="mb-4">
            <h2 className="text-lg font-semibold text-left">
              Recent Borrowings
            </h2>
          </header>

          <DataTable
            columns={recentColumns}
            data={recentData}
            getRowKey={(row) => row.id}
            bodyClassName=""
            rowClassName="text-left border-b border-border"
            headerCellClassName="py-3 px-4 text-xs font-semibold font-poppins tracking-wider uppercase text-text/60"
            cellClassName="py-4 px-4 text-xs font-medium text-text"
          />
        </section>
      </main>
    </Sidebar>
  );
}
