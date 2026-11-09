export function About() {
  const roles = [
    {
      number: "01",
      title: "Admin",
      subtitle: "Pengelolaan sistem",
      description:
        "Mengelola data equipment, pengguna, dan keseluruhan aktivitas peminjaman.",
    },
    {
      number: "02",
      title: "Petugas",
      subtitle: "Operasional equipment",
      description:
        "Memproses permintaan peminjaman dan pengembalian, serta memantau status equipment.",
    },
    {
      number: "03",
      title: "Peminjam",
      subtitle: "Kebutuhan produksi",
      description:
        "Melihat equipment, mencari kebutuhan produksi, mengajukan peminjaman, dan memantau pengajuan sesuai peran.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-background text-white py-24 px-12 md:px-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-inter font-medium tracking-[0.2em] text-white/60 uppercase mb-4">
              02 / About YUHANA
            </span>
            <h2 className="text-5xl font-poppins font-bold text-text leading-tight">
              Kerja kreatif. <br />
              <span className="text-gold">Pengelolaan rapi.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4 text-sm font-inter text-white/70 leading-relaxed">
            <p className="text-white font-medium">
              YUHANA adalah sistem inventori internal untuk equipment produksi
              media dan entertainment.
            </p>
            <p>
              Dalam shooting, photoshoot, music video, maupun campaign,
              equipment digunakan oleh berbagai anggota tim. YUHANA dirancang
              sebagai tempat pencatatan barang, peminjaman, dan pengembalian
              agar informasi penggunaannya dapat dipantau bersama.
            </p>
            <p className="text-white/50 text-xs mt-2">
              Akses masuk akun internal, sesuai peran pengguna. Halaman Petugas
              dan Peminjam masih dalam pengembangan.
            </p>
          </div>
        </div>

        <div id="fitur" className="scroll-mt-20  flex flex-col pt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-5xl font-poppins font-bold text-text leading-tight">
              Peran yang <span className="text-gold">jelas.</span>
            </h3>

            <span className="text-xs font-inter font-medium tracking-[0.2em] text-white/50 uppercase">
              Pembagian peran dalam alur pengelolaan
            </span>
          </div>

          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {roles.map((role) => (
              <div
                key={role.number}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group hover:bg-white/[0.02] transition-colors px-4 rounded-xl"
              >
                <div className="md:col-span-3 flex items-baseline gap-4">
                  <span className="text-xs font-mono text-white/40 font-medium">
                    {role.number}
                  </span>
                  <div>
                    <h4 className="text-xl font-poppins font-semibold text-white">
                      {role.title}
                    </h4>
                    <span className="text-xs font-inter text-white/60 mt-0.5 block">
                      {role.subtitle}
                    </span>
                  </div>
                </div>

                <div className="md:col-span-9">
                  <p className="text-sm font-inter text-white/70 leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
