import { Sidebar } from "../../components/admin/sidebar/Sidebar";

export function AdminDashboard() {
  return (
    <Sidebar>
      <main className="min-h-screen p-6 bg-background">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p>Welcome to the admin dashboard!</p>
      </main>
    </Sidebar>
  );
}
