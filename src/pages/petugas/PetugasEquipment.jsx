import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye } from "lucide-react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { DataTable } from "../../components/ui/DataTable";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import equipment from "../../data/equipment";
import equipmentUnits from "../../data/equipmentUnits";

export function PetugasEquipment() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const categories = [...new Set(equipment.map((item) => item.category))];
  const summaryItems = [
    {
      title: "Total Equipment",
      value: equipment.filter((item) => item.name).length,
    },
    {
      title: "Available Units",
      value: equipmentUnits.filter((item) => item.status === "Available")
        .length,
    },
    {
      title: "Borrowed",
      value: equipmentUnits.filter((item) => item.status === "Borrowed").length,
    },
  ];
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
            onClick={() => handleDetail(row.id)}
            aria-label="View equipment"
            className="p-1.5 rounded-md text-text/70 hover:text-text hover:bg-background transition-colors cursor-pointer"
          >
            <Eye size={18} />
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
    navigate(`/petugas/equipment/${id}`);
  };

  const filteredEquipment = equipmentData.filter((unit) => {
    const matchedSearch = unit.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());

    const matchedCategory =
      selectedCategory === "Category" || unit.category === selectedCategory;

    return matchedSearch && matchedCategory;
  });

  return (
    <Sidebar role="petugas">
      <main className="min-h-screen p-6 bg-background">
        <header className="flex flex-col mb-6">
          <h1 className="text-2xl font-poppins font-bold tracking-tight">
            Equipment
          </h1>
          <p className="text-text/60 text-sm font-inter mt-1">
            View equipment inventory and availability
          </p>
        </header>

        <section className="grid grid-cols-3 gap-6 mb-6">
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
                placeholder="Search equipment..."
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
              />
            </label>

            <Select
              defaultValue="Category"
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
              options={[
                { value: "Category", label: "Semua Category" },
                ...categories.map((category) => ({
                  value: category,
                  label: category,
                })),
              ]}
            />
          </div>
        </section>

        <section className="bg-surface border border-border text-text p-6 font-poppins rounded-lg shadow-xs">
          <header className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-left">Equipment Table</h2>
          </header>

          <div className="overflow-hidden rounded-md border border-border/50">
            <DataTable columns={equipmentColumns} data={filteredEquipment} />
          </div>
        </section>
      </main>
    </Sidebar>
  );
}
