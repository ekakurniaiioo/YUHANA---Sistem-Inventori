import {
  ClipboardList,
  Clock3,
  CheckCircle2,
  Package,
  AlertCircle,
  Search,
  ArrowRight,
  CalendarDays,
} from "lucide-react";
import { NavbarPeminjam } from "../../components/navbar/NavbarPeminjam";
import { Link } from "react-router-dom";

export function PeminjamBorrowings() {
  const summaryItems = [
    {
      title: "Menunggu Persetujuan",
      value: 1,
      icon: Clock3,
      color: "text-amber-600",
      background: "bg-amber-50",
    },
    {
      title: "Disetujui",
      value: 1,
      icon: CheckCircle2,
      color: "text-blue-600",
      background: "bg-blue-50",
    },
    {
      title: "Sedang Dipinjam",
      value: 5,
      icon: Package,
      color: "text-green-600",
      background: "bg-green-50",
    },
    {
      title: "Terlambat",
      value: 2,
      icon: AlertCircle,
      color: "text-red-600",
      background: "bg-red-50",
    },
  ];

  const filters = ["Semua", "Pending", "Approved", "Borrowed", "Overdue", "Completed"];

  return (
    <main className="min-h-screen bg-[#F5F4F0]">
      <NavbarPeminjam />

      <div className="mx-auto max-w-[1600px] px-8 pb-16 pt-32 lg:px-16">
        <header className="flex flex-col gap-3">
          <p className="font-inter text-xs font-bold tracking-[0.2em] text-[#A88B50]">
            YUHANA RESOURCES
          </p>

          <h1 className="font-poppins text-3xl font-bold text-[#24231F]">
            Peminjaman Saya
          </h1>

          <p className="max-w-2xl font-inter text-sm leading-relaxed text-black/60">
            Pantau pengajuan dan status peminjaman equipment kamu dengan mudah.
          </p>
        </header>

        <section className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {summaryItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-lg border border-[#E7E4DC] bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="font-inter text-sm text-black/60">
                    {item.title}
                  </p>

                  <div className={`rounded-lg p-2 ${item.background}`}>
                    <Icon size={20} className={item.color} />
                  </div>
                </div>

                <h2 className="mt-4 font-poppins text-3xl font-semibold text-[#24231F]">
                  {item.value}
                </h2>

                <p className="mt-1 font-inter text-xs text-black/40">
                  Total transaksi
                </p>
              </article>
            );
          })}
        </section>

        <section className="mt-10 rounded-lg border border-[#E7E4DC] bg-white p-5 shadow-sm lg:p-7">
          <header className="flex flex-col gap-5">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div className="flex items-center gap-3">
                <ClipboardList size={25} className="text-[#A88B50]" />

                <div>
                  <h2 className="font-poppins text-lg font-semibold text-[#24231F]">
                    Daftar Peminjaman
                  </h2>

                  <p className="mt-1 font-inter text-xs text-black/50">
                    Riwayat pengajuan dan peminjaman equipment.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-md border border-[#E7E4DC] px-3 py-2">
                <Search size={17} className="text-black/40" />

                <input
                  type="text"
                  placeholder="Cari ID peminjaman..."
                  className="w-full bg-transparent font-inter text-sm text-[#24231F] outline-none placeholder:text-black/40 md:w-52"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 border-b border-[#E7E4DC] pb-4">
              {filters.map((filter, index) => (
                <button
                  key={filter}
                  type="button"
                  className={`rounded-md px-4 py-2 font-inter text-xs font-medium transition-colors ${
                    index === 0
                      ? "bg-[#24231F] text-white"
                      : "bg-[#F5F4F0] text-black/60 hover:bg-[#EAE6DC]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </header>

          <article className="mt-6 rounded-lg border border-[#E7E4DC] p-4 transition-shadow hover:shadow-sm sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E7E4DC] pb-4">
              <div className="flex flex-col gap-1">
                <p className="font-inter text-xs text-black/50">
                  ID Peminjaman
                </p>

                <h3 className="font-poppins text-base font-semibold text-[#24231F]">
                  BRW-009
                </h3>
              </div>

              <span className="rounded-full bg-amber-50 px-3 py-1.5 font-inter text-xs font-semibold text-amber-700">
                Menunggu Persetujuan
              </span>
            </div>

            <div className="flex flex-col gap-5 py-5 sm:flex-row sm:items-center">
              <div className="h-32 w-full shrink-0 overflow-hidden rounded-md bg-[#F5F4F0] sm:w-36">
                <img
                  src="/HeroPeminjam1.jpg"
                  alt="Sony A7 IV"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col gap-3">
                <div>
                  <h4 className="font-poppins text-lg font-semibold text-[#24231F]">
                    Sony A7 IV
                  </h4>

                  <p className="mt-1 font-inter text-sm text-black/50">
                    Camera · EQ-001
                  </p>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <p className="font-inter text-sm text-black/60">
                    Unit ID:
                    <span className="font-medium text-[#24231F]">CAM-001</span>
                  </p>

                  <p className="font-inter text-sm text-black/60">
                    Jumlah:
                    <span className="font-medium text-[#24231F]">1 unit</span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 font-inter text-sm text-black/50">
                  <CalendarDays size={16} />
                  29 Okt – 5 Nov 2026
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4 border-t border-[#E7E4DC] pt-4 sm:flex-row sm:items-center">
              <div className="flex flex-col gap-1">
                <p className="font-inter text-sm font-medium text-[#A88B50]">
                  Menunggu persetujuan petugas
                </p>

                <p className="font-inter text-xs text-black/50">
                  Pengajuan sedang menunggu pemeriksaan.
                </p>
              </div>

              <Link
                to="/peminjam/borrowings/detail"
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#A88B50] px-4 py-2.5 font-inter text-sm font-semibold text-[#927644] transition-colors hover:bg-[#A88B50] hover:text-white"
              >
                Lihat Detail
                <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
