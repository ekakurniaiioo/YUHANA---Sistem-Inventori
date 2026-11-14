import { useState } from "react";
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
import { FooterPeminjam } from "../../components/footer/FooterPeminjam";
import { Button } from "../../components/ui/Button";
import borrowings from "../../data/borrowings";
import borrowingItems from "../../data/borrowingItems";
import equipmentUnits from "../../data/equipmentUnits";
import equipment from "../../data/equipment";
import { getCurrentUser } from "../../utils/auth";

const statusStyles = {
  Pending: "bg-amber-50 text-amber-700",
  Approved: "bg-blue-50 text-blue-700",
  Borrowed: "bg-green-50 text-green-700",
  Overdue: "bg-red-50 text-red-700",
};

const statusLabels = {
  Pending: "Menunggu Persetujuan",
  Approved: "Disetujui",
  Borrowed: "Sedang Dipinjam",
  Overdue: "Terlambat",
};

const summaryStatus = [
  {
    status: "Pending",
    title: "Menunggu Persetujuan",
    icon: Clock3,
    color: "text-amber-600",
    background: "bg-amber-50",
  },
  {
    status: "Approved",
    title: "Disetujui",
    icon: CheckCircle2,
    color: "text-blue-600",
    background: "bg-blue-50",
  },
  {
    status: "Borrowed",
    title: "Sedang Dipinjam",
    icon: Package,
    color: "text-green-600",
    background: "bg-green-50",
  },
  {
    status: "Overdue",
    title: "Terlambat",
    icon: AlertCircle,
    color: "text-red-600",
    background: "bg-red-50",
  },
];

const statusMessages = {
  Pending: "Pengajuan sedang menunggu pemeriksaan.",
  Approved: "Pengajuan telah disetujui.",
  Borrowed: "Equipment sedang dipinjam.",
  Overdue: "Batas pengembalian telah terlewati.",
};

function formatDate(date) {
  if (!date) return "—";

  return new Date(`${date}T00:00:00`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function PeminjamBorrowings() {
  const currentUser = getCurrentUser();
  const [searchInput, setSearchInput] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Semua");
  const userBorrowings = borrowings.filter(
    (borrowing) => borrowing.userId === currentUser?.id,
  );
  const summaryItems = summaryStatus.map((item) => ({
    ...item,
    value: userBorrowings.filter((borrowing) => borrowing.status === item.status)
      .length,
  }));
  const filters = [
    "Semua",
    ...new Set(userBorrowings.map((borrowing) => borrowing.status)),
  ];
  const filteredBorrowings = userBorrowings
    .filter((borrowing) =>
      borrowing.id.toLowerCase().includes(searchInput.toLowerCase()),
    )
    .filter(
      (borrowing) =>
        selectedStatus === "Semua" || borrowing.status === selectedStatus,
    );

  const borrowingsWithItems = filteredBorrowings.map((borrowing) => ({
    ...borrowing,
    items: borrowingItems
      .filter((item) => item.borrowingId === borrowing.id)
      .map((borrowingItem) => {
        const unit = equipmentUnits.find(
          (item) => item.id === borrowingItem.unitId,
        );
        const equipmentItem = equipment.find(
          (item) => item.id === unit?.equipmentId,
        );

        return {
          id: borrowingItem.id,
          equipmentName: equipmentItem?.name ?? "Equipment tidak ditemukan",
          equipmentId: equipmentItem?.id ?? unit?.equipmentId ?? "—",
          category: equipmentItem?.category ?? "—",
          unitId: unit?.id ?? borrowingItem.unitId ?? "—",
        };
      }),
  }));

  return (
    <main className="flex min-h-screen flex-col bg-[#F5F4F0]">
      <NavbarPeminjam />

      <div className="mx-auto w-full max-w-[1600px] flex-1 px-8 pb-16 pt-32 lg:px-16">
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
                  value={searchInput}
                  onChange={(event) => setSearchInput(event.target.value)}
                  className="w-full bg-transparent font-inter text-sm text-[#24231F] outline-none placeholder:text-black/40 md:w-52"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 border-b border-[#E7E4DC] pb-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedStatus(filter)}
                  className={`rounded-md px-4 py-2 font-inter text-xs font-medium transition-colors ${
                    selectedStatus === filter
                      ? "bg-[#24231F] text-white"
                      : "bg-[#F5F4F0] text-black/60 hover:bg-[#EAE6DC]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </header>

          {borrowingsWithItems.length ? (
            borrowingsWithItems.map((borrowing) => (
              <article
                key={borrowing.id}
                className="mt-6 rounded-lg border border-[#E7E4DC] p-4 transition-shadow hover:shadow-sm sm:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E7E4DC] pb-4">
                  <div className="flex flex-col gap-1">
                    <p className="font-inter text-xs text-black/50">
                      ID Peminjaman
                    </p>

                    <h3 className="font-poppins text-base font-semibold text-[#24231F]">
                      {borrowing.id}
                    </h3>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1.5 font-inter text-xs font-semibold ${
                      statusStyles[borrowing.status] ??
                      "bg-gray-50 text-gray-700"
                    }`}
                  >
                    {statusLabels[borrowing.status] ?? borrowing.status}
                  </span>
                </div>

                <div className="flex flex-col gap-5 py-5 sm:flex-row sm:items-center">
                  <div className="h-32 w-full shrink-0 overflow-hidden rounded-md bg-[#F5F4F0] sm:w-36">
                    <img
                      src="/HeroPeminjam1.jpg"
                      alt={borrowing.items[0]?.equipmentName ?? "Equipment"}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-3">
                    {borrowing.items.length ? (
                      borrowing.items.map((item) => (
                        <div key={item.id}>
                          <h4 className="font-poppins text-lg font-semibold text-[#24231F]">
                            {item.equipmentName}
                          </h4>

                          <p className="mt-1 font-inter text-sm text-black/50">
                            {item.category} · {item.equipmentId}
                          </p>

                          <p className="font-inter text-sm text-black/60">
                            Unit ID: {item.unitId}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="font-inter text-sm text-black/50">
                        Informasi equipment tidak tersedia.
                      </p>
                    )}

                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      <p className="font-inter text-sm text-black/60">
                        Jumlah:
                        <span className="ml-1 font-medium text-[#24231F]">
                          {borrowing.items.length} unit
                        </span>
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 font-inter text-sm text-black/50">
                      <CalendarDays size={16} />
                      {formatDate(borrowing.borrowDate)} – {formatDate(borrowing.dueDate)}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-4 border-t border-[#E7E4DC] pt-4 sm:flex-row sm:items-center">
                  <div className="flex flex-col gap-1">
                    <p className="font-inter text-sm font-medium text-[#A88B50]">
                      {statusLabels[borrowing.status] ?? borrowing.status}
                    </p>

                    <p className="font-inter text-xs text-black/50">
                      {statusMessages[borrowing.status] ?? "Status transaksi saat ini."}
                    </p>
                  </div>

                  <Button
                    to={`/peminjam/borrowings/${borrowing.id}`}
                    variant="outline"
                    className="!text-[#927644] hover:!text-white"
                  >
                    Lihat Detail
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </article>
            ))
          ) : (
            <p className="mt-6 font-inter text-sm text-black/50">
              {userBorrowings.length
                ? "Tidak ada transaksi yang sesuai dengan pencarian atau filter."
                : "Belum ada riwayat peminjaman."}
            </p>
          )}
        </section>
      </div>
      <FooterPeminjam />
    </main>
  );
}
