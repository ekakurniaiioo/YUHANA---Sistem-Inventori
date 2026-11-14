import { useState } from "react";
import { LayoutGrid, Search, Camera, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { NavbarPeminjam } from "../../components/navbar/NavbarPeminjam";
import HeroPeminjaman from "../../components/hero/HeroPeminjaman";
import { FooterPeminjam } from "../../components/footer/FooterPeminjam";
import { Button } from "../../components/ui/Button";
import equipment from "../../data/equipment";
import equipmentUnits from "../../data/equipmentUnits";

export function PeminjamEquipment() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const handleDetail = (id) => {
    navigate(`/peminjam/detail/${id}`);
  };

  const categories = [
    "Semua",
    ...new Set(equipment.map((item) => item.category)),
  ];

  const filteredEquipment = equipment.filter((item) => {
    const matchedSearch = item.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());

    const matchedCategory =
      selectedCategory === "Semua" || item.category === selectedCategory;

    return matchedSearch && matchedCategory;
  });
  const totalPages = Math.ceil(filteredEquipment.length / pageSize);
  const firstItem = (currentPage - 1) * pageSize + 1;
  const lastItem = Math.min(currentPage * pageSize, filteredEquipment.length);
  const paginatedEquipment = filteredEquipment.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const unitStatuses = [
    {
      label: "Available",
      value: "Available",
      color: "bg-[#4BAE70]",
      badge: "bg-[#E1F3E5] text-[#287442]",
    },
    {
      label: "Borrowed",
      value: "Borrowed",
      color: "bg-[#D9A441]",
      badge: "bg-[#F8EDD5] text-[#8B6B37]",
    },
    {
      label: "Maintenance",
      value: "Maintenance",
      color: "bg-[#D97757]",
      badge: "bg-[#FCE8E1] text-[#A94F32]",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#F5F4F0]">
      <NavbarPeminjam />
      <HeroPeminjaman />

      <section className="mx-auto grid w-full flex-1 grid-cols-1 gap-6 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)] lg:gap-8 lg:px-16 lg:py-10">
        <div className="order-last flex min-w-0 flex-col gap-6 lg:order-first">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex min-w-[240px] flex-1 items-center gap-3 rounded-xl border border-[#E7E4DC] bg-white px-4 py-3">
              <Search size={19} className="shrink-0 text-black/40" />
              <input
                type="text"
                placeholder="Cari nama alat..."
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  setCurrentPage(1);
                }}
                value={searchInput}
                className="w-full bg-transparent font-inter text-sm text-black outline-none placeholder:text-black/40"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-poppins text-xl font-bold text-[#24231F]">
                Daftar Equipment
              </h2>
              <p className="mt-1 font-inter text-sm text-black/50">
                Temukan peralatan yang kamu butuhkan.
              </p>
            </div>

            <span className="font-inter text-sm text-black/50">
              {equipment.length} jenis alat
            </span>
          </div>

          {filteredEquipment.length ? (
            <>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {paginatedEquipment.map((item) => {
                  const availableUnits = equipmentUnits.filter(
                    (unit) =>
                      unit.equipmentId === item.id &&
                      unit.status === "Available",
                  ).length;

                  return (
                    <article
                      key={item.id}
                      className="overflow-hidden rounded-xl border border-[#E7E4DC] bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#ECEAE4]">
                        <img
                          src="./HeroPeminjam1.jpg"
                          alt={item.name}
                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>

                      <div className="flex flex-col gap-3 p-3">
                        <div>
                          <h3 className="font-poppins text-sm font-bold text-[#24231F]">
                            {item.name}
                          </h3>

                          <div className="mt-1.5 flex items-center gap-2 text-xs text-black/50">
                            <Camera size={14} />
                            <span className="font-inter">{item.category}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 border-t border-[#F0EEE8] pt-2.5 text-xs text-black/60">
                          <Package size={14} />
                          <span className="font-inter">
                            {availableUnits} unit tersedia
                          </span>
                        </div>

                        <Button
                          onClick={() => handleDetail(item.id)}
                          variant="gold"
                          className="!px-3 !py-2.5"
                        >
                          Lihat Detail
                        </Button>
                      </div>
                    </article>
                  );
                })}
              </div>
              {totalPages > 1 && (
                <div className="mt-4 flex flex-col gap-3 border-t border-[#E7E4DC] pt-4 text-sm sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-black/60">
                    Menampilkan {firstItem}–{lastItem} dari{" "}
                    {filteredEquipment.length} equipment
                  </p>

                  <nav
                    aria-label="Pagination"
                    className="flex flex-wrap items-center gap-1"
                  >
                    <button
                      type="button"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((page) => page - 1)}
                      className="rounded-md border border-[#E7E4DC] px-3 py-1.5 text-xs text-[#24231F] transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                      (page) => (
                        <button
                          key={page}
                          type="button"
                          aria-current={page === currentPage ? "page" : undefined}
                          onClick={() => setCurrentPage(page)}
                          className={`flex size-8 items-center justify-center rounded-md text-xs transition-colors ${
                            page === currentPage
                              ? "bg-[#24231F] font-semibold text-white"
                              : "border border-[#E7E4DC] text-[#24231F] hover:bg-white"
                          }`}
                        >
                          {page}
                        </button>
                      ),
                    )}

                    <button
                      type="button"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((page) => page + 1)}
                      className="rounded-md border border-[#E7E4DC] px-3 py-1.5 text-xs text-[#24231F] transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Next
                    </button>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <p className="py-6 text-sm text-black/50">
              Equipment tidak ditemukan.
            </p>
          )}
        </div>

        <aside className="order-first h-fit rounded-xl border border-[#E7E4DC] bg-white p-4 shadow-sm lg:order-last lg:p-6">
          <section>
            <h2 className="font-poppins text-base font-bold text-[#24231F]">
              Kategori
            </h2>

            <ul className="mt-3 flex flex-wrap gap-2 lg:mt-4 lg:flex-col lg:gap-0 lg:space-y-1">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={`flex w-auto shrink-0 items-center justify-between gap-3 rounded-lg px-3 py-2 text-left font-inter text-sm cursor-pointer transition-colors lg:w-full lg:py-3 ${
                      selectedCategory === category
                        ? "bg-[#F4EBDD] font-semibold text-[#8B6B37]"
                        : "text-black/60 hover:bg-[#F7F5F0] hover:text-black"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      {selectedCategory === category ? (
                        <LayoutGrid size={17} />
                      ) : (
                        <Package size={17} />
                      )}

                      {category}
                    </span>

                    <span className="rounded-full bg-black/5 px-2.5 py-1 text-xs">
                      {category === "Semua"
                        ? equipment.length
                        : equipment.filter((item) => item.category === category)
                            .length}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-4 border-t border-[#E7E4DC] pt-4 lg:mt-6 lg:pt-6">
            <h2 className="font-poppins text-base font-bold text-[#24231F]">
              Status Ketersediaan
            </h2>

            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3 lg:mt-4 lg:flex lg:flex-col lg:gap-4">
              {unitStatuses.map((status) => {
                const count = equipmentUnits.filter(
                  (unit) => unit.status === status.value,
                ).length;

                return (
                  <div
                    key={status.value}
                    className="flex items-center justify-between gap-3 text-sm"
                  >
                    <span className="flex items-center gap-3 text-black/70">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${status.color}`}
                      />
                      {status.label}
                    </span>

                    <span
                      className={`rounded-full px-2.5 py-1 text-xs ${status.badge}`}
                    >
                      {count}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>
        </aside>
      </section>
      <FooterPeminjam />
    </main>
  );
}
