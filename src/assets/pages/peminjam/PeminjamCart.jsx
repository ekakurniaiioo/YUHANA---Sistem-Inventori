import {
  Package,
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  ShoppingCart,
  ClipboardList,
} from "lucide-react";
import { NavbarPeminjam } from "../../components/navbar/NavbarPeminjam";

export function PeminjamCart() {
  return (
    <main className="min-h-screen bg-[#F5F4F0]">
      <NavbarPeminjam />

      <header className="flex flex-col gap-3 px-8 pt-32 lg:px-16">
        <p className="font-inter text-xs font-bold tracking-[0.2em] text-[#A88B50]">
          YUHANA RESOURCES
        </p>

        <h1 className="font-poppins text-3xl font-bold text-[#24231F] lg:text-4xl">
          Keranjang Peminjaman
        </h1>

        <p className="max-w-2xl font-inter text-sm leading-relaxed text-black/60 lg:text-base">
          Periksa equipment yang telah kamu pilih sebelum melanjutkan pengajuan
          peminjaman.
        </p>
      </header>

      <section className="mx-auto grid max-w-[1600px] grid-cols-1 gap-8 px-8 py-10 lg:grid-cols-3 lg:px-16">
        <div className="flex flex-col gap-5 lg:col-span-2">
          <div className="flex items-center gap-3">
            <Package size={30} className="text-[#A88B50]" />

            <div>
              <h2 className="font-poppins text-lg font-semibold text-[#24231F]">
                Equipment yang Dipilih (1)
              </h2>
              <p className="font-inter text-sm text-black/50">
                Periksa unit sebelum melanjutkan
              </p>
            </div>
          </div>

          <article className="rounded-lg border border-[#E7E4DC] bg-white p-4 shadow-sm sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="h-44 w-full shrink-0 overflow-hidden rounded-md bg-[#F5F4F0] sm:h-36 sm:w-40">
                <img
                  src="/HeroPeminjam1.jpg"
                  alt="Sony A7 IV"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-poppins text-lg font-semibold text-[#24231F]">
                      Sony A7 IV
                    </h3>

                    <p className="font-inter text-sm text-black/50">
                      Camera · EQ-001
                    </p>
                  </div>

                  <button
                    type="button"
                    aria-label="Hapus Sony A7 IV dari keranjang"
                    className="rounded-md p-2 text-[#A64D42] transition-colors hover:bg-red-50"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="flex items-center gap-2 font-inter text-sm font-medium text-[#477C58]">
                    <span className="size-2 rounded-full bg-[#477C58]" />
                    Unit tersedia
                  </p>

                  <p className="font-inter text-sm text-black/50">
                    ID Unit: CAM-003
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-inter text-sm text-black/60">
                    Jumlah unit
                  </p>

                  <div className="flex items-center overflow-hidden rounded-md border border-[#E7E4DC]">
                    <button
                      type="button"
                      aria-label="Kurangi jumlah unit"
                      className="p-2.5 text-[#24231F] transition-colors hover:bg-[#F5F4F0]"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="min-w-10 text-center font-inter text-sm text-[#24231F]">
                      1
                    </span>

                    <button
                      type="button"
                      aria-label="Tambah jumlah unit"
                      className="p-2.5 text-[#24231F] transition-colors hover:bg-[#F5F4F0]"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <a
            href="/peminjam"
            className="mt-2 inline-flex w-fit items-center gap-2 font-inter text-sm text-black/60 transition-colors hover:text-[#A88B50]"
          >
            <ArrowRight size={17} className="rotate-180" />
            Kembali ke Katalog
          </a>
        </div>

        <aside className="h-fit rounded-lg border border-[#E7E4DC] bg-white p-5 shadow-sm lg:p-6">
          <div className="mb-6 flex items-center gap-3">
            <ClipboardList size={25} className="text-[#A88B50]" />

            <h2 className="font-poppins text-lg font-semibold text-[#24231F]">
              Ringkasan Peminjaman
            </h2>
          </div>

          <div className="flex flex-col gap-4 border-b border-[#E7E4DC] pb-5">
            <div className="flex items-center justify-between gap-3">
              <span className="font-inter text-sm text-black/60">
                Total jenis equipment
              </span>
              <span className="font-inter text-sm font-semibold text-[#24231F]">
                1 jenis
              </span>
            </div>

            <div className="flex items-center justify-between gap-3">
              <span className="font-inter text-sm text-black/60">
                Total unit
              </span>
              <span className="font-inter text-sm font-semibold text-[#24231F]">
                1 unit
              </span>
            </div>
          </div>

          <div className="my-5 flex flex-col gap-3">
            <h3 className="font-inter text-sm font-semibold text-[#24231F]">
              Dalam keranjang
            </h3>

            <div className="flex items-center gap-3">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-[#F5F4F0]">
                <ShoppingCart size={20} className="text-[#A88B50]" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate font-inter text-sm font-medium text-[#24231F]">
                  Sony A7 IV
                </p>
                <p className="font-inter text-xs text-black/50">1 unit</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[#A88B50] px-4 py-3 font-inter text-sm font-semibold text-white transition-colors hover:bg-[#927644]"
          >
            Lanjutkan Pengajuan
            <ArrowRight size={17} />
          </button>

          <p className="mt-3 text-center font-inter text-xs leading-relaxed text-black/45">
            Pastikan unit yang dipilih sudah sesuai sebelum mengajukan
            peminjaman.
          </p>
        </aside>
      </section>
    </main>
  );
}
