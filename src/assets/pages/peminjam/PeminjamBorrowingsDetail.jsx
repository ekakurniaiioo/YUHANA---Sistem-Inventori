import {
  ArrowLeft,
  CalendarDays,
  Camera,
  Check,
  Clock3,
  Package,
  UserRound,
  ClipboardList,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { NavbarPeminjam } from "../../components/navbar/NavbarPeminjam";
import borrowings from "../../../data/borrowings";
import equipmentUnits from "../../../data/equipmentUnits";
import equipment from "../../../data/equipment";
import users from "../../../data/users";

const statusStyles = {
  Pending: "bg-amber-100 text-amber-800",
  Approved: "bg-blue-100 text-blue-800",
  Borrowed: "bg-green-100 text-green-800",
  Overdue: "bg-red-100 text-red-800",
};

const statusLabels = {
  Pending: "Menunggu Persetujuan",
  Approved: "Disetujui",
  Borrowed: "Sedang Dipinjam",
  Overdue: "Terlambat",
};

function formatDate(date) {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function PeminjamBorrowingsDetail() {
  const { id } = useParams();

  const currentBorrowing = borrowings.find((item) => item.id === id);

  if (!currentBorrowing) {
    return (
      <main className="min-h-screen bg-[#F5F4F0]">
        <NavbarPeminjam />

        <div className="mx-auto max-w-[1600px] px-8 pt-40 lg:px-16">
          <h1 className="font-poppins text-2xl text-black font-semibold">
            Data peminjaman tidak ditemukan.
          </h1>

          <Link
            to="/peminjam/borrowings"
            className="mt-5 inline-flex items-center gap-2 text-sm text-[#A88B50]"
          >
            <ArrowLeft size={17} />
            Kembali ke Peminjaman Saya
          </Link>
        </div>
      </main>
    );
  }

  const currentUnit = equipmentUnits.find(
    (unit) => unit.id === currentBorrowing.unitId,
  );

  const currentEquipment = equipment.find(
    (item) => item.id === currentUnit?.equipmentId,
  );

  const currentUser = users.find((user) => user.id === currentBorrowing.userId);

  const steps = [
    { label: "Pengajuan dibuat", status: "Pending" },
    { label: "Pengajuan disetujui", status: "Approved" },
    { label: "Equipment dipinjam", status: "Borrowed" },
  ];

  const statusOrder = ["Pending", "Approved", "Borrowed"];

  const currentStep = statusOrder.indexOf(currentBorrowing.status);

  return (
    <main className="min-h-screen bg-[#F5F4F0]">
      <NavbarPeminjam />

      <div className="mx-auto max-w-[1600px] px-8 pb-16 pt-32 lg:px-16">
        <Link
          to="/peminjam/borrowings"
          className="mb-8 inline-flex items-center gap-2 text-sm text-black/60 transition-colors hover:text-[#A88B50]"
        >
          <ArrowLeft size={18} />
          Kembali ke Peminjaman Saya
        </Link>

        <div className="mb-8 flex flex-col gap-5 border-b border-[#E7E4DC] pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#A88B50]">
              DETAIL PEMINJAMAN
            </p>

            <h1 className="font-poppins text-3xl font-bold text-[#24231F]">
              {currentBorrowing.id}
            </h1>

            <p className="mt-2 text-sm text-black/50">
              Periode peminjaman {formatDate(currentBorrowing.borrowDate)} –{" "}
              {formatDate(currentBorrowing.dueDate)}
            </p>
          </div>

          <span
            className={`w-fit rounded-full px-4 py-2 text-xs font-semibold ${
              statusStyles[currentBorrowing.status] ??
              "bg-gray-100 text-gray-700"
            }`}
          >
            {statusLabels[currentBorrowing.status] ?? currentBorrowing.status}
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          <section className="flex flex-col gap-8 lg:col-span-2">
            <div className="rounded-lg border border-[#E7E4DC] bg-white p-6">
              <div className="mb-6 flex items-center gap-3">
                <Package className="text-[#A88B50]" size={23} />

                <h2 className="font-poppins text-lg font-semibold text-[#24231F]">
                  Equipment yang Dipinjam
                </h2>
              </div>

              {currentEquipment && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-[180px_1fr]">
                  <div className="aspect-square overflow-hidden rounded-lg bg-[#F5F4F0]">
                    <img
                      src="/HeroPeminjam1.jpg"
                      alt={currentEquipment.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center gap-3">
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-[#A88B50]">
                        {currentEquipment.category}
                      </p>

                      <h3 className="mt-2 font-poppins text-xl font-semibold text-[#24231F]">
                        {currentEquipment.name}
                      </h3>

                      <p className="mt-1 text-sm text-black/50">
                        {currentEquipment.id}
                      </p>
                    </div>

                    <p className="text-sm leading-6 text-black/60">
                      Equipment yang tercatat dalam transaksi peminjaman ini.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-lg border border-[#E7E4DC] bg-white p-6">
              <div className="mb-5 flex items-center gap-3">
                <Camera className="text-[#A88B50]" size={23} />

                <h2 className="font-poppins text-lg font-semibold text-[#24231F]">
                  Unit yang Dipinjam
                </h2>
              </div>

              {currentUnit ? (
                <div className="flex flex-col gap-3 rounded-lg border border-[#E7E4DC] p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#24231F]">
                      {currentUnit.id}
                    </p>

                    <p className="mt-1 text-xs text-black/50">
                      Kondisi unit: {currentUnit.condition}
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-800">
                    Unit terdaftar
                  </span>
                </div>
              ) : (
                <p className="text-sm text-black/50">
                  Informasi unit tidak ditemukan.
                </p>
              )}
            </div>

            <div className="rounded-lg border border-[#E7E4DC] bg-white p-6">
              <div className="mb-6 flex items-center gap-3">
                <UserRound className="text-[#A88B50]" size={23} />

                <h2 className="font-poppins text-lg font-semibold text-[#24231F]">
                  Informasi Peminjam
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs text-black/50">Nama peminjam</p>
                  <p className="text-sm font-semibold text-[#24231F]">
                    {currentUser?.name ?? "-"}
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-xs text-black/50">Email</p>
                  <p className="text-sm font-semibold text-[#24231F]">
                    {currentUser?.email ?? "-"}
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-xs text-black/50">ID pengguna</p>
                  <p className="text-sm font-semibold text-[#24231F]">
                    {currentBorrowing.userId}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <aside className="flex flex-col gap-6">
            <div className="rounded-lg border border-[#E7E4DC] bg-white p-6">
              <div className="mb-5 flex items-center gap-3">
                <ClipboardList className="text-[#A88B50]" size={22} />

                <h2 className="font-poppins text-lg font-semibold text-[#24231F]">
                  Ringkasan
                </h2>
              </div>

              <div className="flex flex-col gap-5">
                <div>
                  <p className="mb-1 text-xs text-black/50">ID Peminjaman</p>
                  <p className="text-sm font-semibold text-[#24231F]">
                    {currentBorrowing.id}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs text-black/50">
                    Tanggal Peminjaman
                  </p>
                  <p className="text-sm font-semibold text-[#24231F]">
                    {formatDate(currentBorrowing.borrowDate)}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs text-black/50">
                    Batas Pengembalian
                  </p>
                  <p className="text-sm font-semibold text-[#24231F]">
                    {formatDate(currentBorrowing.dueDate)}
                  </p>
                </div>

                <div className="border-t border-[#E7E4DC] pt-5">
                  <p className="mb-1 text-xs text-black/50">Jumlah Unit</p>
                  <p className="text-sm font-semibold text-[#24231F]">
                    {currentUnit ? "1 unit" : "0 unit"}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-[#E7E4DC] bg-white p-6">
              <div className="mb-6 flex items-center gap-3">
                <Clock3 className="text-[#A88B50]" size={22} />

                <h2 className="font-poppins text-lg font-semibold text-[#24231F]">
                  Status Peminjaman
                </h2>
              </div>

              <div className="flex flex-col">
                {steps.map((step, index) => {
                  const isCompleted =
                    currentStep >= index && currentStep !== -1;

                  const isLast = index === steps.length - 1;

                  return (
                    <div key={step.status} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <span
                          className={`flex size-7 shrink-0 items-center justify-center rounded-full ${
                            isCompleted
                              ? "bg-[#A88B50] text-white"
                              : "bg-[#F0EEE8] text-black/30"
                          }`}
                        >
                          {isCompleted ? (
                            <Check size={15} />
                          ) : (
                            <span className="text-xs">{index + 1}</span>
                          )}
                        </span>

                        {!isLast && (
                          <span
                            className={`my-1 h-10 w-px ${
                              isCompleted ? "bg-[#A88B50]" : "bg-[#E7E4DC]"
                            }`}
                          />
                        )}
                      </div>

                      <div className="pt-1">
                        <p
                          className={`text-sm font-semibold ${
                            isCompleted ? "text-[#24231F]" : "text-black/40"
                          }`}
                        >
                          {step.label}
                        </p>

                        {currentBorrowing.status === step.status && (
                          <p className="mt-1 text-xs text-[#A88B50]">
                            Status saat ini
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {currentBorrowing.status === "Overdue" && (
                <div className="mt-5 rounded-lg bg-red-50 p-4">
                  <p className="text-xs leading-5 text-red-700">
                    Peminjaman ini telah melewati batas waktu pengembalian.
                  </p>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
