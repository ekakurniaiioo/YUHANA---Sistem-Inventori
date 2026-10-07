import { Sidebar } from "../../components/admin/sidebar/Sidebar";
import { PenLine, Trash } from "lucide-react";
import users from "../../../data/users";

export function AdminUsers() {
  return (
    <Sidebar>
      <main className="min-h-screen p-6 bg-background">
        <header className="flex flex-col mb-6">
          <h1 className="text-2xl font-bold font-poppins tracking-tight">
            Users
          </h1>
          <p className="text-text/60 text-sm font-inter mt-1">
            Manage system users
          </p>
        </header>

        <section>
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
                <input
                  type="search"
                  placeholder="Search users..."
                  className="bg-transparent border-none outline-none w-full placeholder:text-text/40 text-sm"
                />
              </label>

              <select
                defaultValue="Role"
                className="select bg-surface border border-border rounded-md px-3 py-2 text-sm text-text cursor-pointer focus:outline-none"
              >
                <option disabled={true}>Role</option>
                <option>Admin</option>
                <option>Petugas</option>
                <option>Peminjam</option>
              </select>
            </div>

            <div className="shrink-0">
              <button className="bg-text text-background font-medium text-sm px-4 py-2.5 rounded-md cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2">
                + Add User
              </button>
            </div>
          </div>
        </section>

        <section className="bg-surface border border-border text-text p-6 font-poppins rounded-lg mt-6">
          <header className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-left">User List</h2>
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
                    Email
                  </th>
                  <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-text/60">
                    Role
                  </th>
                  <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-text/60 text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {users.map((user, index) => (
                  <tr key={user.id} className="text-left">
                    <td className="py-3.5 px-4 text-sm text-text/80">
                      {index + 1}
                    </td>
                    <td className="py-3.5 px-4 text-sm font-medium">
                      {user.name}
                    </td>
                    <td className="py-3.5 px-4 text-sm text-text/80">
                      {user.email}
                    </td>
                    <td className="py-3.5 px-4 text-sm text-text/80">
                      <span
                        className={
                          user.role === "admin"
                            ? "bg-red-500/20 text-red-300 px-2 py-1 rounded-sm text-xs font-medium"
                            : user.role === "petugas"
                              ? "bg-blue-500/20 text-blue-300 px-2 py-1 rounded-sm text-xs font-medium"
                              : "bg-amber-500/20 text-amber-300 px-2 py-1 rounded-sm text-xs font-medium"
                        }
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-sm text-center">
                      <div className="flex items-center justify-center gap-1">
                        <button
                          aria-label="Edit user"
                          className="p-1.5 rounded-md text-text/70 hover:text-text hover:bg-background transition-colors cursor-pointer"
                        >
                          <PenLine size={18} />
                        </button>
                        <button
                          aria-label="Delete user"
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
