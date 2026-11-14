export function FooterPeminjam() {
  return (
    <footer className="w-full border-t border-[#E7E4DC] bg-[#F5F4F0] px-5 py-5 sm:px-8 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start justify-between gap-3 md:flex-row md:items-center">
        <div className="flex flex-col">
          <span className="text-base font-semibold text-[#24231F]">
            YUHANA
          </span>
          <span className="text-xs text-black/50">Sistem Inventori</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-black/50">
          <span>© 2026 YUHANA</span>
          <span>Inventory Management</span>
        </div>
      </div>
    </footer>
  );
}
