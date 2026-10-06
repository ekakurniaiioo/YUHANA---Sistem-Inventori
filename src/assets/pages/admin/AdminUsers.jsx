import { Sidebar } from "../../components/admin/sidebar/Sidebar";

export function AdminUsers() {
  return (
    <Sidebar>
      <main className="min-h-screen p-6 bg-background">
        <h1 className="text-2xl font-bold">Admin Users</h1>
        <p>Welcome to the admin users page!</p>
      </main>
    </Sidebar>
  );
}