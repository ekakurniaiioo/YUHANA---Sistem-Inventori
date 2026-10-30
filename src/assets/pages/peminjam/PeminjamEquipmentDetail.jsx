import { useState } from "react";
import {
  ArrowLeft,
  Camera,
  Check,
  CircleAlert,
  Package,
  ShoppingCart,
  Video,
  ScanSearch,
} from "lucide-react";
import { Link } from "react-router-dom";
import { NavbarPeminjam } from "../../components/navbar/NavbarPeminjam";
import equipmentUnits from "../../../data/equipmentUnits";
import equipment from "../../../data/equipment";

export function PeminjamEquipmentDetail() {
  const currentEquipment = equipment.find((item) => item.id === "EQ-001");

  const availableUnits = equipmentUnits.filter(
    (unit) => unit.equipmentId === "EQ-001" && unit.status === "Available",
  );

  const [selectedUnits, setSelectedUnits] = useState([]);

  function toggleUnit(unitId) {
    setSelectedUnits((previous) =>
      previous.includes(unitId)
        ? previous.filter((id) => id !== unitId)
        : [...previous, unitId],
    );
  }

  function handleAddToCart() {
    if (selectedUnits.length === 0) return;

    console.log("Unit yang dipilih:", selectedUnits);
  }

  if (!currentEquipment) {
    return <p>Equipment tidak ditemukan.</p>;
  }

  return (
    <main className="min-h-screen bg-[#F5F4F0]">
      <NavbarPeminjam />

      <div className="mx-auto max-w-[1600px] px-8 pb-16 pt-32 lg:px-16">
        <Link
          to="/peminjam"
          className="mb-8 inline-flex items-center gap-2 text-sm text-black/60 hover:text-[#A88B50]"
        >
          <ArrowLeft size={18} />
          Kembali ke Katalog
        </Link>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <section className="flex flex-col gap-8 lg:col-span-2">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-white">
                <img
                  src="/HeroPeminjam1.jpg"
                  alt={currentEquipment.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center gap-5">
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-bold tracking-[0.2em] text-[#A88B50]">
                    EQUIPMENT
                  </p>

                  <h1 className="font-poppins text-3xl font-bold text-[#24231F]">
                    {currentEquipment.name}
                  </h1>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-black/60">
                    <span className="flex items-center gap-2">
                      <Camera size={17} />
                      {currentEquipment.category}
                    </span>

                    <span>·</span>
                    <span>{currentEquipment.id}</span>
                  </div>
                </div>

                <p className="text-sm leading-7 text-black/60">
                  Pilih unit equipment yang tersedia sesuai kebutuhan
                  peminjamanmu.
                </p>

                <div className="grid grid-cols-3 gap-3 border-y border-[#E7E4DC] py-5">
                  <div className="flex flex-col gap-2">
                    <Camera size={23} />
                    <span className="text-sm font-semibold">Camera</span>
                    <span className="text-xs text-black/50">Peralatan</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Video size={23} />
                    <span className="text-sm font-semibold">Recording</span>
                    <span className="text-xs text-black/50">
                      Kebutuhan video
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <ScanSearch size={23} />
                    <span className="text-sm font-semibold">Unit fisik</span>
                    <span className="text-xs text-black/50">ID unik</span>
                  </div>
                </div>
              </div>
            </div>

            <section className="rounded-lg border border-[#E7E4DC] bg-white p-6">
              <h2 className="mb-5 font-poppins text-lg font-semibold text-[#24231F]">
                Informasi Equipment
              </h2>

              <div className="flex flex-col gap-4 text-sm sm:flex-row sm:justify-between">
                <span className="text-black/50">Nama equipment</span>
                <span className="font-medium text-[#24231F]">
                  {currentEquipment.name}
                </span>
              </div>

              <div className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:justify-between">
                <span className="text-black/50">Kategori</span>
                <span className="font-medium text-[#24231F]">
                  {currentEquipment.category}
                </span>
              </div>
            </section>
          </section>

          <aside className="h-fit rounded-lg border border-[#E7E4DC] bg-white p-5 lg:p-6">
            <div className="mb-6 flex items-start gap-3">
              <Package className="shrink-0 text-[#A88B50]" size={28} />

              <div>
                <h2 className="font-poppins text-lg font-semibold text-[#24231F]">
                  Pilih Unit yang Ingin Dipinjam
                </h2>

                <p className="mt-1 text-xs text-black/50">
                  {availableUnits.length} unit tersedia
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {equipmentUnits
                .filter((unit) => unit.equipmentId === "EQ-001")
                .map((unit) => {
                  const isAvailable = unit.status === "Available";
                  const isSelected = selectedUnits.includes(unit.id);

                  return (
                    <button
                      key={unit.id}
                      type="button"
                      disabled={!isAvailable}
                      onClick={() => toggleUnit(unit.id)}
                      className={`flex items-center gap-3 rounded-lg border p-4 text-left transition-colors ${
                        isSelected
                          ? "border-[#A88B50] bg-[#A88B50]/10"
                          : "border-[#E7E4DC] hover:border-[#C5AD7C]"
                      } ${!isAvailable ? "cursor-not-allowed opacity-50" : ""}`}
                    >
                      <span
                        className={`flex size-5 shrink-0 items-center justify-center rounded border ${
                          isSelected
                            ? "border-[#A88B50] bg-[#A88B50] text-white"
                            : "border-black/20"
                        }`}
                      >
                        {isSelected && <Check size={14} />}
                      </span>

                      <span className="flex-1">
                        <span className="block text-sm font-semibold text-[#24231F]">
                          {unit.id}
                        </span>

                        <span className="mt-1 block text-xs text-black/50">
                          Kondisi: {unit.condition}
                        </span>
                      </span>

                      <span
                        className={`rounded-full px-2 py-1 text-xs ${
                          isAvailable
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {isAvailable ? "Tersedia" : "Dipinjam"}
                      </span>
                    </button>
                  );
                })}
            </div>

            <div className="my-5 flex items-start gap-3 rounded-lg bg-[#F5F4F0] p-4">
              <CircleAlert
                size={19}
                className="mt-0.5 shrink-0 text-[#A88B50]"
              />

              <p className="text-xs leading-5 text-black/60">
                Pilih unit yang tersedia. Setiap unit memiliki ID fisik yang
                berbeda.
              </p>
            </div>

            <div className="mb-4 flex items-center justify-between rounded-lg border border-[#E7E4DC] p-4">
              <span className="text-sm text-black/60">Unit dipilih</span>

              <span className="text-sm font-semibold text-[#24231F]">
                {selectedUnits.length} unit
              </span>
            </div>

            <button
              type="button"
              disabled={selectedUnits.length === 0}
              onClick={handleAddToCart}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-[#24231F] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A88B50] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ShoppingCart size={17} />
              Tambah ke Keranjang
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
}
