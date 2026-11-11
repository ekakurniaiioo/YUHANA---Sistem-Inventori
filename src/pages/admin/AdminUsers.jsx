import { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { PenLine, Trash } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { DataTable } from "../../components/ui/DataTable";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import users from "../../data/users";

export function AdminUsers() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedRole, setSelectedRole] = useState("Role");
  const role = [...new Set(users.map((user) => user.role))];

  const roleClasses = {
    Admin: "bg-danger/15 text-danger border-danger/20",
    Petugas: "bg-info/15 text-info border-info/20",
    Peminjam: "bg-success/15 text-success border-success/20",
  };

  const userColumns = [
    {
      header: "No",
      render: (_, index) => index + 1,
    },
    {
      header: "Name",
      accessor: "name",
      cellClassName: "py-3.5 px-4 text-sm font-medium",
    },
    { header: "Email", accessor: "email" },
    {
      header: "Role",
      cellClassName: "py-3.5 px-4 text-sm text-text/80",
      render: (user) => (
        <span
          className={`inline-block rounded-lg border px-2.5 py-0.5 text-xs font-medium ${
            roleClasses[user.role] ?? "bg-text/10 text-text/70 border-border"
          }`}
        >
          {user.role}
        </span>
      ),
    },
    {
      header: "Actions",
      headerClassName: "text-center",
      cellClassName: "py-3.5 px-4 text-sm text-center",
      render: () => (
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
      ),
    },
  ];

  const userData = users.map((user, index) => ({
    id: user.id,
    number: index + 1,
    name: user.name,
    email: user.email,
    role: user.role,
  }));

  const filteredUsers = userData.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());

    const matchesRole =
      selectedRole === "Role" || user.role === selectedRole;

    return matchesSearch && matchesRole;
  });

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
                <Input
                  type="search"
                  placeholder="Search users..."
                  onChange={(e) => setSearchInput(e.target.value)}
                  value={searchInput}
                />
              </label>

              <Select
                defaultValue="Role"
                onChange={(e) => setSelectedRole(e.target.value)}
                value={selectedRole}
                options={[
                  { value: "Role", label: "Semua Role" },
                  ...role.map((item) => ({ value: item, label: item })),
                ]}
              />
            </div>

            <div className="shrink-0">
              <Button variant="dark">+ Add User</Button>
            </div>
          </div>
        </section>

        <section className="bg-surface border border-border text-text p-6 font-poppins rounded-lg mt-6">
          <header className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-left">User List</h2>
          </header>

          <div className="overflow-hidden rounded-md border border-border/50">
            <DataTable
              columns={userColumns}
              data={filteredUsers}
              getRowKey={(user) => user.id}
            />
          </div>
        </section>
      </main>
    </Sidebar>
  );
}
