import {
  UserRound,
  Mail,
  LockKeyhole,
  Pencil,
  Save,
  ShieldCheck,
  Camera,
} from "lucide-react";
import { NavbarPeminjam } from "../../components/navbar/NavbarPeminjam";
import { FooterPeminjam } from "../../components/footer/FooterPeminjam";
import { Button } from "../../components/ui/Button";
import users from "../../data/users";
import { getCurrentUser } from "../../utils/auth";

export function PeminjamProfile() {
  const currentUser = getCurrentUser();
  const currentBorrower =
    currentUser?.role === "Peminjam"
      ? users.find(
          (user) =>
            user.id === currentUser.id && user.role === "Peminjam",
        )
      : null;

  return (
    <main className="flex min-h-screen flex-col bg-[#F5F4F0]">
      <NavbarPeminjam />

      <div className="mx-auto w-full max-w-[1400px] flex-1 px-8 pb-16 pt-32 lg:px-16">
        <div className="mb-10">
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#A88B50]">
            ACCOUNT SETTINGS
          </p>

          <h1 className="font-poppins text-3xl font-bold text-[#24231F]">
            Profil Saya
          </h1>

          <p className="mt-2 text-sm text-black/50">
            Informasi akun dan keamanan profilmu.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          <aside className="rounded-lg border border-[#E7E4DC] bg-white p-7">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex size-28 items-center justify-center rounded-full bg-[#F0EEE8] text-[#A88B50]">
                  <UserRound size={48} strokeWidth={1.4} />
                </div>

                <button
                  type="button"
                  aria-label="Ubah foto profil belum tersedia"
                  title="Ubah foto profil belum tersedia"
                  disabled
                  className="absolute bottom-0 right-0 flex size-9 cursor-not-allowed items-center justify-center rounded-full border-2 border-white bg-[#24231F] text-white opacity-50"
                >
                  <Camera size={16} />
                </button>
              </div>

              <h2 className="mt-5 font-poppins text-xl font-semibold text-[#24231F]">
                {currentBorrower?.name ?? "-"}
              </h2>

              <p className="mt-1 text-sm text-black/50">
                {currentBorrower?.email ?? "-"}
              </p>

              <span className="mt-4 rounded-full bg-[#F0EEE8] px-4 py-2 text-xs font-semibold text-[#A88B50]">
                Peminjam
              </span>
            </div>

            <div className="my-7 border-t border-[#E7E4DC]" />

            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-black/50">ID Pengguna</span>
                <span className="font-semibold text-[#24231F]">
                  {currentBorrower?.id ?? "-"}
                </span>
              </div>
            </div>
          </aside>

          <section className="flex flex-col gap-8 lg:col-span-2">
            <div className="rounded-lg border border-[#E7E4DC] bg-white p-7">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <h2 className="font-poppins text-lg font-semibold text-[#24231F]">
                    Informasi Profil
                  </h2>

                  <p className="mt-1 text-sm text-black/50">
                    Informasi dasar akun YUHANA.
                  </p>
                </div>

                <button
                  type="button"
                  disabled
                  className="flex cursor-not-allowed items-center gap-2 text-sm font-semibold text-[#A88B50] opacity-50"
                >
                  <Pencil size={16} />
                  Edit Profil
                </button>
              </div>

              <div className="flex flex-col gap-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#24231F]">
                    Nama Lengkap
                  </label>

                  <div className="relative">
                    <UserRound
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40"
                    />

                    <input
                      type="text"
                      defaultValue={currentBorrower?.name ?? ""}
                      disabled
                      className="w-full rounded-md border border-[#E7E4DC] bg-[#F5F4F0] py-3 pl-11 pr-4 text-sm text-black/60 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#24231F]">
                    Email
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40"
                    />

                    <input
                      type="email"
                      defaultValue={currentBorrower?.email ?? ""}
                      disabled
                      className="w-full rounded-md border border-[#E7E4DC] bg-[#F5F4F0] py-3 pl-11 pr-4 text-sm text-black/60 outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-[#E7E4DC] bg-white p-7">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <h2 className="font-poppins text-lg font-semibold text-[#24231F]">
                    Keamanan Akun
                  </h2>

                  <p className="mt-1 text-sm text-black/50">
                    Fitur perubahan kata sandi belum tersedia.
                  </p>
                </div>

                <ShieldCheck size={28} className="shrink-0 text-[#A88B50]" />
              </div>

              <div className="flex flex-col gap-5">
                {[
                  "Password Saat Ini",
                  "Password Baru",
                  "Konfirmasi Password Baru",
                ].map((label) => (
                  <div key={label}>
                    <label className="mb-2 block text-sm font-medium text-[#24231F]">
                      {label}
                    </label>

                    <div className="relative">
                      <LockKeyhole
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40"
                      />

                      <input
                        type="password"
                        placeholder="Masukkan password"
                        disabled
                        className="w-full cursor-not-allowed rounded-md border border-[#E7E4DC] bg-[#F5F4F0] py-3 pl-11 pr-4 text-sm opacity-60 outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-xs text-black/40">
                Pengelolaan kata sandi belum tersedia.
              </p>

              <div className="mt-7 flex justify-end">
                <Button variant="darkGold" disabled>
                  <Save size={16} />
                  Simpan Password
                </Button>
              </div>
            </div>

            <div className="flex gap-3 rounded-lg border border-[#E7E4DC] bg-[#F0EEE8] p-5">
              <ShieldCheck
                size={20}
                className="mt-0.5 shrink-0 text-[#A88B50]"
              />

              <p className="text-xs leading-6 text-black/60">
                Informasi akun digunakan untuk kebutuhan identifikasi peminjam
                dan pengelolaan transaksi peminjaman equipment di YUHANA.
              </p>
            </div>
          </section>
        </div>
      </div>
      <FooterPeminjam />
    </main>
  );
}
