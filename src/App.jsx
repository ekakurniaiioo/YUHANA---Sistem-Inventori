import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./assets/pages/LandingPage";
import { Login } from "./assets/pages/Login";
import { AdminDashboard } from "./assets/pages/admin/AdminDashboard";
import { AdminEquipment } from "./assets/pages/admin/AdminEquipment";
import { AdminEquipmentDetail } from "./assets/pages/admin/AdminEquipmentDetail";
import { AdminUsers } from "./assets/pages/admin/AdminUsers";
import { AdminBorrowings } from "./assets/pages/admin/AdminBorrowings";
import { PetugasDashboard } from "./assets/pages/petugas/PetugasDashboard";
import { PetugasEquipment } from "./assets/pages/petugas/PetugasEquipment";
import { PetugasEquipmentDetail } from "./assets/pages/petugas/PetugasEquipmentDetail";
import { PetugasBorrowings } from "./assets/pages/petugas/PetugasBorrowings";
import { PeminjamEquipment } from "./assets/pages/peminjam/PeminjamEquipment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/equipment" element={<AdminEquipment />} />
        <Route
          path="/admin/equipment/detail"
          element={<AdminEquipmentDetail />}
        />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/borrowings" element={<AdminBorrowings />} />
        <Route path="/petugas" element={<PetugasDashboard />} />
        <Route path="/petugas/equipment" element={<PetugasEquipment />} />
        <Route
          path="/petugas/equipment/detail"
          element={<PetugasEquipmentDetail />}
        />
        <Route path="/petugas/borrowings" element={<PetugasBorrowings />} />
        <Route path="/peminjam" element={<PeminjamEquipment />} />
      </Routes>
    </>
  );
}

export default App;
