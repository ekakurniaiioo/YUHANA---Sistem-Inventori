import { Sidebar } from "../../components/sidebar/Sidebar";
import { DataTable } from "../../components/ui/DataTable";
import { ConditionBadge } from "../../components/ui/ConditionBadge";
import { StatusBadge } from "../../components/ui/StatusBadge";
import borrowings from "../../data/borrowings";
import borrowingItems from "../../data/borrowingItems";
import users from "../../data/users";
import equipment from "../../data/equipment";
import equipmentUnits from "../../data/equipmentUnits";

export function AdminDashboard() {
  const summaryItems = [
    { title: "Total Equipment", value: equipment.length },
    { title: "Total Units", value: equipmentUnits.length },
    {
      title: "Available Units",
      value: equipmentUnits.filter((item) => item.status === "Available")
        .length,
    },
    {
      title: "Total Borrowers",
      value: users.filter((user) => user.role === "Peminjam").length,
    },
  ];

  const activeBorrowings = [
    { header: "Peminjam", accessor: "borrowerName" },
    { header: "Equipment", accessor: "equipmentName" },
    { header: "Unit ID", accessor: "unitId" },
    { header: "Due Date", accessor: "dueDate" },
    {
      header: "Status",
      accessor: "status",
      render: (row) => <StatusBadge status={row.status} />,
    },
  ];
  const equipmentAttention = [
    { header: "Equipment", accessor: "equipment" },
    {
      header: "Issue",
      accessor: "issue",
      render: (row) => <ConditionBadge condition={row.issue} />,
    },
  ];

  const pendingRequests = [
    { header: "Borrower", accessor: "borrower" },
    { header: "Transaction ID", accessor: "transactionId" },
    { header: "Equipment", accessor: "equipment" },
    { header: "Date Requested", accessor: "dateRequested" },
    {
      header: "Status",
      accessor: "status",
      render: (row) => <StatusBadge status={row.status} />,
    },
  ];

  const borrowingItemsData = borrowings.flatMap((borrowing) => {
    const user = users.find((user) => user.id === borrowing.userId);

    return borrowingItems
      .filter((item) => item.borrowingId === borrowing.id)
      .map((borrowingItem) => {
        const unit = equipmentUnits.find(
          (unit) => unit.id === borrowingItem.unitId,
        );
        const item = equipment.find(
          (item) => item.id === unit?.equipmentId,
        );

        return {
          id: borrowingItem.id,
          transactionId: borrowing.id,
          borrowerName: user?.name ?? "Unknown",
          equipmentName: item?.name ?? "Unknown",
          unitId: unit?.id ?? borrowingItem.unitId ?? "Unknown",
          dueDate: borrowing.dueDate ?? "—",
          dateRequested: borrowing.borrowDate ?? "—",
          status: borrowing.status,
        };
      });
  });

  const borrowingData = borrowingItemsData.filter(
    (item) => item.status === "Borrowed" || item.status === "Overdue",
  );

  const equipmentAttentionData = equipmentUnits
    .filter(
      (unit) =>
        unit.condition === "Damaged" || unit.status === "Maintenance",
    )
    .map((unit) => {
      const item = equipment.find((item) => item.id === unit.equipmentId);

      return {
        equipment: item?.name,
        issue: unit.condition,
      };
    });

  const pendingRequestsData = borrowingItemsData
    .filter((item) => item.status === "Pending")
    .map((item) => ({
      id: item.id,
      transactionId: item.transactionId,
      equipment: item.equipmentName,
      borrower: item.borrowerName,
      dateRequested: item.dateRequested,
      status: item.status,
    }));

  return (
    <Sidebar>
      <main className="min-h-screen p-6 bg-background">
        <header className="flex flex-col mb-6">
          <div>
            <h1 className="text-2xl font-poppins font-bold">Dashboard</h1>
            <p className="text-text/60 text-sm font-inter">
              Overview of YUHANA inventory and borrowing activity
            </p>
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

        <section className="mt-6 grid grid-cols-2 gap-6">
          <section className="bg-surface border border-border text-text p-6 text-center font-poppins rounded-lg">
            <header className="mb-4">
              <h2 className="text-lg font-semibold text-left">
                Active Borrowings
              </h2>
            </header>

            <DataTable
              columns={activeBorrowings}
              data={borrowingData}
              getRowKey={(row) => row.id}
              bodyClassName=""
              rowClassName="text-left border-b border-border"
              headerCellClassName="py-3 px-4 text-xs font-semibold font-poppins tracking-wider uppercase text-text/60"
              cellClassName="py-4 px-4 text-xs font-medium text-text"
            />
          </section>

          <section className="bg-surface border border-border text-text p-6 text-center font-poppins rounded-lg">
            <header className="mb-4">
              <h2 className="text-lg font-semibold text-left">
                Equipment Attention
              </h2>
            </header>

            <DataTable
              columns={equipmentAttention}
              data={equipmentAttentionData}
              bodyClassName=""
              rowClassName="text-left border-b border-border"
              headerCellClassName="py-3 px-4 text-xs font-semibold font-poppins tracking-wider uppercase text-text/60"
              cellClassName="py-4 px-4 text-xs font-medium text-text"
            />
          </section>
        </section>

        <section className="mt-6 bg-surface border border-border text-text p-6 text-center font-poppins rounded-lg">
          <header className="mb-4">
            <h2 className="text-lg font-semibold text-left">
              Pending Requests
            </h2>
          </header>

          <DataTable
            columns={pendingRequests}
            data={pendingRequestsData}
            getRowKey={(row) => row.id}
            emptyMessage="No pending requests."
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
