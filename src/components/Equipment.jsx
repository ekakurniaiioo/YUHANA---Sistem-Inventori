import equipment from "../data/equipment";

export function Equipment() {
  const categories = equipment.map((item) => item.category);

  return (
    <section
      id="product"
      className="min-h-screen bg-[#F5F4F0] py-20 px-12 md:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-inter font-medium tracking-[0.2em] text-black/60 uppercase">
              01 / Equipment
            </span>
            <h2 className="text-5xl font-poppins font-bold text-black leading-tight mb-6">
              Di balik setiap <br />
              <span className="text-gold">hasil karya</span>
            </h2>
          </div>
          <p className="text-sm font-inter text-black/70 max-w-sm leading-relaxed">
            Kamera hingga perlengkapan pendukung. Kenali kategori equipment yang
            menjadi bagian dari kebutuhan tim produksi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 relative">
            <div className="overflow-hidden rounded-sm bg-[#EBE7DF] aspect-[4/3] shadow-sm">
              <img
                src="./Camera.webp"
                alt="Equipment Production"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex justify-between items-center mt-4 text-xs font-inter text-black/50">
              <span>Equipment dalam konteks produksi</span>
              <span>Foto / Ilustrasi</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <div className="divide-y divide-[#E5E2D9]">
              {categories.map((category, index) => (
                <div
                  key={category}
                  className="py-5 first:pt-0 last:pb-6 group cursor-pointer"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="text-xs font-mono text-black/40 font-medium">
                      0{index + 1}
                    </span>
                    <h3 className="font-poppins text-lg font-semibold text-[#1A1916] group-hover:text-black transition-colors">
                      {category}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E2D9] flex flex-col sm:flex-row sm:items-center justify-end gap-4">
              <p className="text-xs font-inter text-black/70">
                Daftar barang dan informasi inventori tersedia melalui akun
                internal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
