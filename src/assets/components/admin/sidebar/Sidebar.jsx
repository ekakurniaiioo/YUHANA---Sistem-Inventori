import { LayoutDashboard, Camera, Users, ClipboardList } from "lucide-react";
import { SidebarItem } from "./SidebarItem";

export function Sidebar({ children }) {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/admin" },
    { name: "Equipment", icon: Camera, path: "/admin/equipment" },
    { name: "Users", icon: Users, path: "/admin/users" },
    { name: "Borrowings", icon: ClipboardList, path: "/admin/borrowings" },
  ];

  return (
    <div className="drawer lg:drawer-open">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle inline"
      />
      <div className="drawer-content">
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost drawer-button"
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
          <div className="px-4 font-poppins font-bold">Admin Panel</div>
        </nav>

        {children}
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          <div className="p-4 w-full border-b border-base-300 flex items-center gap-3">
            <img
              src="/YUHANA-Logo.png"
              alt="Yuhana"
              className="w-8 h-8 object-cover shrink-0"
            />
            <span className="font-poppins font-extrabold text-lg is-drawer-close:hidden tracking-wider">
              YUHA<span className="text-amber-500">NA</span>
            </span>
          </div>
          
          <ul className="menu w-full gap-1">
            {menuItems.map((item) => {
              return (
                <SidebarItem
                  key={item.name}
                  name={item.name}
                  icon={item.icon}
                  path={item.path}
                />
              );
            })}
          </ul>

        </div>
      </div>
    </div>
  );
}
