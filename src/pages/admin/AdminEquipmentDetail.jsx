import { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Trash, PenLine } from "lucide-react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { DataTable } from "../../components/ui/DataTable";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { ConditionBadge } from "../../components/ui/ConditionBadge";
import { StatusBadge } from "../../components/ui/StatusBadge";
import equipment from "../../data/equipment";
import equipmentUnits from "../../data/equipmentUnits";

export function AdminEquipmentDetail() {
  const { id } = useParams();
  const [searchInput, setSearchInput] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("Semua Kondisi");
  const [selectedStatus, setSelectedStatus] = useState("Semua Status");
  const condition = [...new Set(equipmentUnits.map((unit) => unit.condition))];
  const status = [...new Set(equipmentUnits.map((unit) => unit.status))];

  const equipmentUnitsColumns = [
    { header: "Unit ID", accessor: "id" },
    {
      header: "Condition",
      cellClassName: "py-3.5 px-4 text-sm",
      render: (unit) => <ConditionBadge condition={unit.condition} />,
    },
    {
      header: "Status",
      cellClassName: "py-3.5 px-4 text-sm",
      render: (unit) => <StatusBadge status={unit.status} />,
    },
    {
      header: "Actions",
      headerClassName: "text-center",
      cellClassName: "py-3.5 px-4 text-sm text-center",
      render: () => (
        <div className="flex items-center justify-center gap-1">
          <button
            aria-label="Edit equipment"
            className="p-1.5 rounded-md text-text/70 hover:text-text hover:bg-background transition-colors cursor-pointer"
          >
            <PenLine size={18} />
          </button>
          <button
            aria-label="Delete equipment"
            className="p-1.5 rounded-md text-danger/80 hover:text-danger hover:bg-danger/10 transition-colors cursor-pointer"
          >
            <Trash size={18} />
          </button>
        </div>
      ),
    },
  ];


  const selectedEquipment = equipment.find((item) => item.id === id);
  const selectedUnits = equipmentUnits.filter(
    (unit) => unit.equipmentId === id,
  );

  const filteredUnits = selectedUnits.filter((unit) => {
    const matchesSearch = unit.id.toLowerCase().includes(searchInput.toLowerCase());
    const matchesCondition =
      selectedCondition === "Semua Kondisi" || unit.condition === selectedCondition;
    const matchesStatus =
      selectedStatus === "Semua Status" || unit.status === selectedStatus;

    return matchesSearch && matchesCondition && matchesStatus;
  });

  return (
    <Sidebar>
      <main className="min-h-screen p-6 bg-background">
        <header className="flex flex-col mb-6">
          <h1 className="text-2xl font-poppins font-bold tracking-tight">
            Equipment Detail
          </h1>
          <p className="text-text/60 text-sm font-inter mt-1">
            View and manage equipment details
          </p>

          <Button to="/admin/equipment" variant="dark" className="w-44 mt-4">
            &larr; Back to Equipment
          </Button>
        </header>

        <section className="bg-surface border border-border text-text p-6 font-poppins rounded-lg mb-6">
          <h2 className="text-xl font-bold">{selectedEquipment?.name}</h2>
          <p className="text-text/60">
            {selectedEquipment?.category} • {selectedUnits.length} Units
          </p>
        </section>

        <section className="flex gap-4 mb-6">
          <div className="flex gap-4 justify-between items-center w-full">
            <div className="flex gap-3 items-center w-full">
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
                  placeholder="Search unit..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </label>

              <Select
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                options={[
                  { value: "Semua Kondisi", label: "Semua Kondisi" },
                  ...condition.map((item) => ({ value: item, label: item })),
                ]}
              />

              <Select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                options={[
                  { value: "Semua Status", label: "Semua Status" },
                  ...status.map((item) => ({ value: item, label: item })),
                ]}
              />
            </div>

            <div className="shrink-0">
              <Button variant="dark">+ Add Unit</Button>
            </div>
          </div>
        </section>

        <section className="bg-surface border border-border text-text p-6 font-poppins rounded-lg shadow-xs">
          <header className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-left">Equipment Units</h2>
          </header>

          <div className="overflow-hidden rounded-md border border-border/50">
            <DataTable
              columns={equipmentUnitsColumns}
              data={filteredUnits}
              getRowKey={(row) => row.unitId}
            />
          </div>
        </section>
      </main>
    </Sidebar>
  );
}
