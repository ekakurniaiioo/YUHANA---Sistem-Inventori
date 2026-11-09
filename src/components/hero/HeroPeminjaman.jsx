export default function HeroPeminjaman() {
  return (
    <section className="relative mt-20 h-[340px] w-full overflow-hidden">
      <img
        src="./HeroPeminjam1.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full flex-col justify-center gap-3 px-8 lg:mx-auto lg:px-16">
        <p className="font-inter text-sm font-bold tracking-widest text-gold">
          YUHANA RESOURCES
        </p>

        <h1 className="max-w-xl font-poppins text-3xl font-bold leading-tight text-white lg:text-4xl">
          Temukan Peralatan yang Anda Butuhkan
        </h1>

        <p className="max-w-xl font-inter text-sm leading-relaxed text-white/70">
          Pilih dari berbagai peralatan berkualitas yang siap mendukung kegiatan
          dan kebutuhan Anda.
        </p>
      </div>
    </section>
  );
}
