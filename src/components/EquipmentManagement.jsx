import { Button } from "../components/ui/Button";

export function EquipmentManagement() {
  return (
    <section className="bg-[#EBE7DF] py-24 px-12 md:px-20 border-t border-black/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start">
          <span className="text-xs font-inter font-medium tracking-[0.2em] text-black/60 uppercase mb-4">
            Equipment management / YUHANA
          </span>

          <h2 className="text-7xl font-poppins font-bold text-black tracking-[-0.1em] leading-[1.15]">
            Setiap equipment. <br />
            <span className="text-gold">Satu tempat pencatatan.</span>
          </h2>
        </div>

        <div className="lg:col-span-5 flex flex-col items-start gap-6">
          <p className="text-sm font-inter text-black/70 leading-relaxed">
            Informasi barang, ketersediaan, peminjaman, dan pengembalian berada
            dalam satu sistem untuk mendukung pengelolaan equipment selama
            produksi.
          </p>

          <Button to="/login" variant="darkGold">
            Masuk ke sistem inventori
          </Button>
        </div>
      </div>
    </section>
  );
}
