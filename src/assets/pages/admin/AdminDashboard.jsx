import { Sidebar } from "../../components/admin/sidebar/Sidebar";

export function AdminDashboard() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background">
      <Sidebar />
    </div>
  );
}
