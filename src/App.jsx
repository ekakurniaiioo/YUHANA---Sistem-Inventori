import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Login } from "./pages/Login";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminEquipment } from "./pages/admin/AdminEquipment";
import { AdminEquipmentDetail } from "./pages/admin/AdminEquipmentDetail";
import { AdminUsers } from "./pages/admin/AdminUsers";
import { AdminBorrowings } from "./pages/admin/AdminBorrowings";
import { PetugasDashboard } from "./pages/petugas/PetugasDashboard";
import { PetugasEquipment } from "./pages/petugas/PetugasEquipment";
import { PetugasEquipmentDetail } from "./pages/petugas/PetugasEquipmentDetail";
import { PetugasBorrowings } from "./pages/petugas/PetugasBorrowings";
import { PeminjamEquipment } from "./pages/peminjam/PeminjamEquipment";
import { PeminjamEquipmentDetail } from "./pages/peminjam/PeminjamEquipmentDetail";
import { PeminjamCart } from "./pages/peminjam/PeminjamCart";
import { PeminjamBorrowings } from "./pages/peminjam/PeminjamBorrowings";
import { PeminjamBorrowingsDetail } from "./pages/peminjam/PeminjamBorrowingsDetail";
import { PeminjamProfile } from "./pages/peminjam/PeminjamProfile";
import { SidebarStateProvider } from "./components/sidebar/SidebarState";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";

function App() {
  return (
    <SidebarStateProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/equipment" element={<AdminEquipment />} />
          <Route
            path="/admin/equipment/detail"
            element={<AdminEquipmentDetail />}
          />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/borrowings" element={<AdminBorrowings />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["Petugas"]} />}>
          <Route path="/petugas" element={<PetugasDashboard />} />
          <Route path="/petugas/equipment" element={<PetugasEquipment />} />
          <Route
            path="/petugas/equipment/detail"
            element={<PetugasEquipmentDetail />}
          />
          <Route path="/petugas/borrowings" element={<PetugasBorrowings />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["Peminjam"]} />}>
          <Route path="/peminjam" element={<PeminjamEquipment />} />
          <Route
            path="/peminjam/detail"
            element={<PeminjamEquipmentDetail />}
          />
          <Route path="/peminjam/cart" element={<PeminjamCart />} />
          <Route path="/peminjam/borrowings" element={<PeminjamBorrowings />} />
          <Route
            path="/peminjam/borrowings/:id"
            element={<PeminjamBorrowingsDetail />}
          />
          <Route path="/peminjam/profile" element={<PeminjamProfile />} />
        </Route>
      </Routes>
    </SidebarStateProvider>
  );
}

export default App;
