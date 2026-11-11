import { LayoutDashboard, Camera, Users, ClipboardList, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SidebarItem } from "./SidebarItem";
import { useSidebarState } from "./SidebarState";
import { logoutUser } from "../../utils/auth";
import { Button } from "../ui/Button";

export function Sidebar({ children, role = "admin" }) {
  const { isOpen, setIsOpen } = useSidebarState();
  const navigate = useNavigate();
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: `/${role}` },
    { name: "Equipment", icon: Camera, path: `/${role}/equipment` },

    ...(role === "admin"
      ? [{ name: "Users", icon: Users, path: "/admin/users" }]
      : []),

    {
      name: "Borrowings",
      icon: ClipboardList,
      path: `/${role}/borrowings`,
    },
  ];
  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="drawer min-h-screen lg:drawer-open">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle inline"
        checked={isOpen}
        onChange={(event) => setIsOpen(event.currentTarget.checked)}
      />
      <div className="drawer-content min-w-0">
        <nav className="navbar sticky top-0 z-20 h-16 w-full border-b border-border bg-background/95 px-3 backdrop-blur-sm sm:px-5">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost drawer-button text-text hover:bg-surface"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-3 font-poppins text-sm font-semibold tracking-wide text-text">
            {role === "admin" ? "Admin" : "Petugas"}
            <span className="ml-2 font-inter text-xs font-normal tracking-normal text-text-muted">
              Inventory
            </span>
          </div>
        </nav>

        {children}
      </div>

      <div className="drawer-side z-30 is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full w-64 flex-col items-start border-r border-border bg-sidebar text-text is-drawer-close:w-16 is-drawer-open:w-60">
          <div className="flex w-full items-center gap-3 border-b border-border px-4 py-5">
            <img
              src="/YUHANA-Logo.png"
              alt="YUHANA"
              className="size-8 shrink-0 object-contain"
            />
            <div className="is-drawer-close:hidden">
              <div className="font-poppins text-base font-bold tracking-[0.18em] text-text">
                YUHA<span className="text-gold">NA</span>
              </div>
              <div className="mt-0.5 font-inter text-[10px] uppercase tracking-[0.16em] text-text-muted">
                Equipment Library
              </div>
            </div>
          </div>

          <div className="w-full px-3 pt-6 is-drawer-close:px-2">
            <p className="mb-2 px-3 font-inter text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted is-drawer-close:hidden">
              Workspace
            </p>
            <ul className="menu w-full gap-1 p-0">
              {menuItems.map((item) => (
                <SidebarItem
                  key={item.name}
                  name={item.name}
                  icon={item.icon}
                  path={item.path}
                />
              ))}
            </ul>
          </div>
          <div className="mt-auto w-full border-t border-border p-3 is-drawer-close:px-2">
            <Button
              variant="outline"
              onClick={handleLogout}
              aria-label="Logout"
              data-tip="Logout"
              className="group w-full justify-start gap-3 rounded-sm border-transparent px-3 py-2.5 font-poppins text-[13px] font-medium tracking-wide text-text-secondary transition-colors duration-150 hover:border-border hover:bg-surface-light hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-close:justify-center is-drawer-close:px-0"
            >
              <LogOut size={18} strokeWidth={1.8} aria-hidden="true" className="shrink-0" />
              <span className="is-drawer-close:hidden">Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
