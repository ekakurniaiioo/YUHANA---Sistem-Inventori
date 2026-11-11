import { Sidebar } from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { DataTable } from "../../components/ui/DataTable";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";

export function PetugasEquipmentDetail() {
  const equipmentUnits = [
    {
      unitId: "CAM-001",
      name: "Sony A7 IV",
      category: "Camera",
      condition: "Good",
      status: "Available",
      borrower: "-",
    },
    {
      unitId: "CAM-002",
      name: "Sony A7 IV",
      category: "Camera",
      condition: "Good",
      status: "Available",
      borrower: "-",
    },
    {
      unitId: "CAM-003",
      name: "Sony A7 IV",
      category: "Camera",
      condition: "Good",
      status: "Available",
      borrower: "-",
    },
    {
      unitId: "CAM-004",
      name: "Sony A7 IV",
      category: "Camera",
      condition: "Good",
      status: "Available",
      borrower: "-",
    },
    {
      unitId: "CAM-005",
      name: "Sony A7 IV",
      category: "Camera",
      condition: "Good",
      status: "Borrowed",
      borrower: "Yuha",
    },
  ];

  return (
    <Sidebar role="petugas">
      <main className="min-h-screen p-6 bg-background">
        <header className="flex flex-col mb-6">
          <h1 className="text-2xl font-poppins font-bold tracking-tight">
            Equipment Detail
          </h1>
          <p className="text-text/60 text-sm font-inter mt-1">
            View equipment details
          </p>

          <Button to="/petugas/equipment" variant="dark" className="w-44 mt-4">
            &larr; Back to Equipment
          </Button>
        </header>

        <section className="bg-surface border border-border text-text p-6 font-poppins rounded-lg mb-6">
          <h2 className="text-xl font-bold">Sony A7 IV</h2>
          <p className="text-text/60">Camera • {equipmentUnits.length} Units</p>
        </section>

        <section className="flex gap-4 mb-6">
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
              />
            </label>

            <Select
              defaultValue="Condition"
              options={[
                { value: "Condition", label: "Condition", disabled: true },
                { value: "Good", label: "Good" },
                { value: "Damaged", label: "Damaged" },
              ]}
            />

            <Select
              defaultValue="Status"
              options={[
                { value: "Status", label: "Status", disabled: true },
                { value: "Available", label: "Available" },
                { value: "Borrowed", label: "Borrowed" },
              ]}
            />
          </div>
        </section>

        <section className="bg-surface border border-border text-text p-6 font-poppins rounded-lg shadow-xs">
          <header className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-left">Equipment Units</h2>
          </header>

          <div className="overflow-hidden rounded-md border border-border/50">
            <DataTable
              columns={[
                { header: "Unit ID", accessor: "unitId" },
                {
                  header: "Condition",
                  cellClassName: "py-3.5 px-4 text-sm",
                  render: (unit) => (
                    <span className="inline-block bg-success/15 text-success border border-success/20 px-2.5 py-0.5 rounded-lg text-xs font-medium">
                      {unit.condition}
                    </span>
                  ),
                },
                {
                  header: "Status",
                  cellClassName: "py-3.5 px-4 text-sm",
                  render: (unit) => (
                    <span className="inline-block bg-success/15 text-success border border-success/20 px-2.5 py-0.5 rounded-lg text-xs font-medium">
                      {unit.status}
                    </span>
                  ),
                },
                { header: "Borrowing User", accessor: "borrower" },
              ]}
              data={equipmentUnits}
              getRowKey={(unit) => unit.unitId}
            />
          </div>


        </section>
      </main>
    </Sidebar>
  );
}
