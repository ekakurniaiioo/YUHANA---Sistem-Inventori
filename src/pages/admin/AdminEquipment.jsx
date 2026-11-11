import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Trash, PenLine, Eye } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { DataTable } from "../../components/ui/DataTable";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import equipment from "../../data/equipment";
import equipmentUnits from "../../data/equipmentUnits";

export function AdminEquipment() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua Category");
  const categories = [...new Set(equipment.map((item) => item.category))];

  const equipmentColumns = [
    { header: "No", render: (_, index) => index + 1 },
    {
      header: "Name",
      accessor: "name",
      cellClassName: "py-3.5 px-4 text-sm font-medium",
    },
    { header: "Category", accessor: "category" },
    { header: "Stock", accessor: "stock" },
    {
      header: "Actions",
      headerClassName: "text-center",
      cellClassName: "py-3.5 px-4 text-sm text-center",
      render: (row) => (
        <div className="flex items-center justify-center gap-1">
          <button
            aria-label="Edit equipment"
            className="p-1.5 rounded-md text-text/70 hover:text-text hover:bg-background transition-colors cursor-pointer"
          >
            <PenLine size={18} />
          </button>
          <button
            onClick={() => handleDetail(row.id)}
            aria-label="View equipment"
            className="p-1.5 rounded-md text-text/70 hover:text-text hover:bg-background transition-colors cursor-pointer"
          >
            <Eye size={18} />
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

  const equipmentData = equipment.map((item, index) => ({
    id: item.id,
    number: index + 1,
    name: item.name,
    category: item.category,
    stock: equipmentUnits.filter((unit) => unit.equipmentId === item.id).length,
  }));

  const handleDetail = (id) => {
    navigate(`/admin/equipment/${id}`);
  };

  const filteredEquipment = equipmentData.filter((unit) => {
    const matchesSearch = unit.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());

    const matchesCategory =
      selectedCategory === "Semua Category" ||
      unit.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <Sidebar>
      <main className="min-h-screen p-6 bg-background">
        <header className="flex flex-col mb-6">
          <h1 className="text-2xl font-poppins font-bold tracking-tight">
            Equipment
          </h1>
          <p className="text-text/60 text-sm font-inter mt-1">
            Manage production equipment
          </p>
        </header>

        <section className="flex gap-4 mb-6">
          <div className="flex gap-4 justify-between items-center w-full">
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
                  placeholder="Search equipment..."
                  onChange={(e) => setSearchInput(e.target.value)}
                  value={searchInput}
                />
              </label>

              <Select
                defaultValue="Semua Category"
                onChange={(e) => setSelectedCategory(e.target.value)}
                value={selectedCategory}
                options={[
                  { value: "Semua Category", label: "Semua Category" },
                  ...categories.map((category) => ({
                    value: category,
                    label: category,
                  })),
                ]}
              />
            </div>

            <div className="shrink-0">
              <Button variant="dark">+ Add Equipment</Button>
            </div>
          </div>
        </section>

        <section className="bg-surface border border-border text-text p-6 font-poppins rounded-lg shadow-xs">
          <header className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-left">Equipment Table</h2>
          </header>

          <div className="overflow-hidden rounded-md border border-border/50">
            <DataTable
              columns={equipmentColumns}
              data={filteredEquipment}
              getRowKey={(row) => row.id}
            />
          </div>
        </section>
      </main>
    </Sidebar>
  );
}
