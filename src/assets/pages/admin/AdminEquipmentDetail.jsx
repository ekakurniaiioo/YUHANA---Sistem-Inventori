import { Sidebar } from "../../components/admin/sidebar/Sidebar";
import { Link } from "react-router-dom";
import { Trash, PenLine } from "lucide-react";

export function AdminEquipmentDetail() {
  const equipmentUnits = [
    {
      unitId: "CAM-001",
      name: "Sony A7 IV",
      category: "Camera",
      condition: "Good",
      status: "Available",
    },
    {
      unitId: "CAM-002",
      name: "Sony A7 IV",
      category: "Camera",
      condition: "Good",
      status: "Available",
    },
    {
      unitId: "CAM-003",
      name: "Sony A7 IV",
      category: "Camera",
      condition: "Good",
      status: "Available",
    },
    {
      unitId: "CAM-004",
      name: "Sony A7 IV",
      category: "Camera",
      condition: "Good",
      status: "Available",
    },
    {
      unitId: "CAM-005",
      name: "Sony A7 IV",
      category: "Camera",
      condition: "Good",
      status: "Available",
    },
  ];

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

          <Link
            to="/admin/equipment"
            className="bg-text w-44 text-background font-medium text-sm px-4 py-2.5 mt-4 rounded-md cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            &larr; Back to Equipment
          </Link>
        </header>

        <section className="bg-surface border border-border text-text p-6 font-poppins rounded-lg mb-6">
          <h2 className="text-xl font-bold">Sony A7 IV</h2>
          <p className="text-text/60">Camera • {equipmentUnits.length} Units</p>
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
                <input
                  type="search"
                  placeholder="Search unit..."
                  className="bg-transparent border-none outline-none w-full placeholder:text-text/40 text-sm"
                />
              </label>

              <select
                defaultValue="Condition"
                className="select bg-surface border border-border rounded-md px-3 py-2 text-sm text-text cursor-pointer focus:outline-none"
              >
                <option disabled={true}>Condition</option>
                <option>Good</option>
                <option>Damaged</option>
              </select>

              <select
                defaultValue="Status"
                className="select bg-surface border border-border rounded-md px-3 py-2 text-sm text-text cursor-pointer focus:outline-none"
              >
                <option disabled={true}>Status</option>
                <option>Available</option>
                <option>Borrowed</option>
              </select>
            </div>

            <div className="shrink-0">
              <button className="bg-text text-background font-medium text-sm px-4 py-2.5 rounded-md cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2">
                + Add Unit
              </button>
            </div>
          </div>
        </section>

        <section className="bg-surface border border-border text-text p-6 font-poppins rounded-lg shadow-xs">
          <header className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-left">Equipment Units</h2>
          </header>

          <div className="overflow-hidden rounded-md border border-border/50">
            <table className="w-full">
              <thead className="border-b border-border bg-background/50">
                <tr className="text-left">
                  <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-text/60">
                    Unit ID
                  </th>
                  <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-text/60">
                    Condition
                  </th>
                  <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-text/60">
                    Status
                  </th>
                  <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-text/60 text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {equipmentUnits.map((unit) => (
                  <tr key={unit.unitId} className="text-left">
                    <td className="py-3.5 px-4 text-sm text-text/80">
                      {unit.unitId}
                    </td>
                    <td className="py-3.5 px-4 text-sm">
                      <span className="inline-block bg-success/15 text-success border border-success/20 px-2.5 py-0.5 rounded-lg text-xs font-medium">
                        {unit.condition}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-sm">
                      <span className="inline-block bg-success/15 text-success border border-success/20 px-2.5 py-0.5 rounded-lg text-xs font-medium">
                        {unit.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-sm text-center">
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50 text-sm font-poppins">
            <p className="text-text/60 text-xs">
              Showing <span className="font-semibold text-text">1</span> to{" "}
              <span className="font-semibold text-text">1</span> of{" "}
              <span className="font-semibold text-text">1</span> entries
            </p>

            <div className="flex items-center gap-1">
              <button
                disabled
                className="px-3 py-1.5 rounded-md border border-border text-xs text-text/40 cursor-not-allowed bg-background/30"
              >
                Previous
              </button>

              <button className="w-8 h-8 rounded-md bg-text text-background text-xs font-semibold flex items-center justify-center">
                1
              </button>
              <button className="w-8 h-8 rounded-md border border-border text-text/80 hover:bg-background/50 transition-colors text-xs flex items-center justify-center cursor-pointer">
                2
              </button>
              <button className="w-8 h-8 rounded-md border border-border text-text/80 hover:bg-background/50 transition-colors text-xs flex items-center justify-center cursor-pointer">
                3
              </button>

              <button className="px-3 py-1.5 rounded-md border border-border text-xs text-text/80 hover:bg-background/50 transition-colors cursor-pointer">
                Next
              </button>
            </div>
          </div>
        </section>
      </main>
    </Sidebar>
  );
}
