import {
  LayoutGrid,
  Search,
  Camera,
  ChevronDown,
  CircleCheck,
  Package,
} from "lucide-react";
import { NavbarPeminjam } from "../../components/navbar/NavbarPeminjam";
import HeroPeminjaman from "../../components/hero/HeroPeminjaman";

export function PeminjamEquipment() {
  const categories = [
    { name: "Semua Kategori", count: 8 },
    { name: "Camera", count: 1 },
    { name: "Lens", count: 1 },
    { name: "Stabilizer", count: 1 },
    { name: "Lighting", count: 1 },
    { name: "Audio", count: 1 },
    { name: "Support", count: 1 },
    { name: "Storage", count: 1 },
    { name: "Drone", count: 1 },
  ];

  return (
    <main className="min-h-screen bg-[#F5F4F0]">
      <NavbarPeminjam />
      <HeroPeminjaman />

      <section className="mx-auto grid grid-cols-3 gap-8 px-8 py-10 lg:px-16">
        <div className="col-span-2 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex min-w-[240px] flex-1 items-center gap-3 rounded-xl border border-[#E7E4DC] bg-white px-4 py-3">
              <Search size={19} className="shrink-0 text-black/40" />
              <input
                type="text"
                placeholder="Cari nama alat..."
                className="w-full bg-transparent font-inter text-sm text-black outline-none placeholder:text-black/40"
              />
            </div>

            <button
              type="button"
              className="flex items-center gap-2 rounded-xl border border-[#E7E4DC] bg-white px-4 py-3 font-inter text-sm text-black/70 transition-colors hover:bg-[#F0EDE6]"
            >
              Semua Status
              <ChevronDown size={16} />
            </button>
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
              8 jenis alat
            </span>
          </div>

          <div className="grid grid-cols-2 gap-5 xl:grid-cols-3">
            <article className="overflow-hidden rounded-xl border border-[#E7E4DC] bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#ECEAE4]">
                <img
                  src="./HeroPeminjam1.jpg"
                  alt="Sony A7 IV"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />

                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-[#E1F3E5] px-3 py-1 text-xs font-semibold text-[#287442]">
                  <CircleCheck size={13} />
                  Tersedia
                </span>
              </div>

              <div className="flex flex-col gap-4 p-4">
                <div>
                  <h3 className="font-poppins text-base font-bold text-[#24231F]">
                    Sony A7 IV
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-black/50">
                    <Camera size={15} />
                    <span className="font-inter">Camera</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 border-t border-[#F0EEE8] pt-3 text-sm text-black/60">
                  <Package size={16} />
                  <span className="font-inter">2 unit tersedia</span>
                </div>

                <button
                  type="button"
                  className="w-full rounded-lg bg-gold px-4 py-2.5 font-inter text-sm font-semibold text-[#24231F] transition-colors hover:bg-gold-hover"
                >
                  Lihat Detail
                </button>
              </div>
            </article>
          </div>
        </div>

        <aside className="h-fit rounded-xl border border-[#E7E4DC] bg-white p-6 shadow-sm">
          <section>
            <h2 className="font-poppins text-base font-bold text-[#24231F]">
              Kategori
            </h2>

            <ul className="mt-4 space-y-1">
              {categories.map((category, index) => (
                <li key={category.name}>
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-3 text-left font-inter text-sm transition-colors ${
                      index === 0
                        ? "bg-[#F4EBDD] font-semibold text-[#8B6B37]"
                        : "text-black/60 hover:bg-[#F7F5F0] hover:text-black"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      {index === 0 ? (
                        <LayoutGrid size={17} />
                      ) : (
                        <Package size={17} />
                      )}

                      {category.name}
                    </span>

                    <span className="rounded-full bg-black/5 px-2.5 py-1 text-xs">
                      {category.count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-6 border-t border-[#E7E4DC] pt-6">
            <h2 className="font-poppins text-base font-bold text-[#24231F]">
              Status Ketersediaan
            </h2>

            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="flex items-center gap-3 text-black/70">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#4BAE70]" />
                  Available
                </span>
                <span className="rounded-full bg-[#E1F3E5] px-2.5 py-1 text-xs text-[#287442]">
                  16
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="flex items-center gap-3 text-black/70">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D9A441]" />
                  Borrowed
                </span>
                <span className="rounded-full bg-[#F8EDD5] px-2.5 py-1 text-xs text-[#8B6B37]">
                  8
                </span>
              </div>
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}
