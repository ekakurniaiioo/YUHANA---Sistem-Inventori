import { Sidebar } from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

export function PetugasEquipment() {
  const summaryItems = [
    { title: "Total Equipment", value: 10 },
    { title: "Available", value: 9 },
    { title: "Borrowed", value: 1 },
  ];

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
              <input
                type="search"
                placeholder="Search equipment..."
                className="bg-transparent border-none outline-none w-full placeholder:text-text/40 text-sm"
              />
            </label>

            <select
              defaultValue="Category"
              className="select bg-surface border border-border rounded-md px-3 py-2 text-sm text-text cursor-pointer focus:outline-none"
            >
              <option disabled={true}>Category</option>
              <option>Camera</option>
              <option>Lighting</option>
              <option>Support</option>
            </select>
          </div>
        </section>

        <section className="bg-surface border border-border text-text p-6 font-poppins rounded-lg shadow-xs">
          <header className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-left">Equipment Table</h2>
          </header>

          <div className="overflow-hidden rounded-md border border-border/50">
            <table className="w-full">
              <thead className="border-b border-border bg-background/50">
                <tr className="text-left">
                  <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-text/60">
                    No
                  </th>
                  <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-text/60">
                    Name
                  </th>
                  <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-text/60">
                    Category
                  </th>
                  <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-text/60">
                    Stock
                  </th>
                  <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-text/60 text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="text-left">
                  <td className="py-3.5 px-4 text-sm text-text/80">1</td>
                  <td className="py-3.5 px-4 text-sm font-medium">
                    Sony A7 IV
                  </td>
                  <td className="py-3.5 px-4 text-sm text-text/80">Camera</td>
                  <td className="py-3.5 px-4 text-sm text-text/80">10</td>
                  <td className="py-3.5 px-4 text-sm text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Link
                        to="/petugas/equipment/detail"
                        aria-label="View equipment"
                        className="p-1.5 rounded-md text-text/70 hover:text-text hover:bg-background transition-colors cursor-pointer"
                      >
                        <Eye size={18} />
                      </Link>
                    </div>
                  </td>
                </tr>
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
