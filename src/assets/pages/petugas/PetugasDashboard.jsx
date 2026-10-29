import { Sidebar } from "../../components/sidebar/Sidebar";

export function PetugasDashboard() {
  const summaryItems = [
    { title: "Pending Request", value: 8 },
    { title: "Currently Borrowed", value: 12 },
    { title: "Returns Today", value: 4 },
    { title: "Overdue", value: 2 },
  ];

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

          <table className="w-full">
            <thead className="border-b border-border bg-background/50">
              <tr className="text-left">
                <th className="py-3 px-4 text-xs font-semibold font-poppins tracking-wider uppercase text-text/60">
                  Borrower
                </th>
                <th className="py-3 px-4 text-xs font-semibold font-poppins tracking-wider uppercase text-text/60">
                  Equipment
                </th>
                <th className="py-3 px-4 text-xs font-semibold font-poppins tracking-wider uppercase text-text/60">
                  Due Date
                </th>
                <th className="py-3 px-4 text-xs font-semibold font-poppins tracking-wider uppercase text-text/60">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-left border-b border-border">
                <td className="py-4 px-4 text-xs font-medium text-text">
                  Juun
                </td>
                <td className="py-4 px-4 text-xs font-medium text-text">
                  LED Panel
                </td>
                <td className="py-4 px-4 text-xs font-medium text-text">
                  5 Oct 2026
                </td>
                <td className="py-4 px-4 text-xs font-medium text-text">
                  <span className="bg-success/20 text-success px-2 py-1 rounded-sm text-xs font-medium">
                    Active
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </Sidebar>
  );
}
