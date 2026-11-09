import { NavLink } from "react-router-dom";

export function SidebarItem({ name, icon, path }) {
  const Icon = icon;

  return (
    <li>
      <NavLink
        to={path}
        end={name === "Dashboard"}
        className={({ isActive }) =>
          `group is-drawer-close:tooltip is-drawer-close:tooltip-right relative flex min-h-11 items-center gap-3 rounded-sm px-3 py-2.5 font-poppins text-[13px] font-medium leading-5 tracking-wide transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold is-drawer-close:justify-center is-drawer-close:px-0 ${
            isActive
              ? "bg-surface text-text before:absolute before:inset-y-2 before:left-0 before:w-0.5 before:bg-gold hover:bg-surface-light"
              : "text-text-secondary hover:bg-surface-light hover:text-text"
          }`
        }
        aria-label={name}
        data-tip={name}
      >
        <Icon
          size={18}
          strokeWidth={1.8}
          aria-hidden="true"
          className="shrink-0 text-text-secondary transition-colors group-hover:text-text"
        />
        <span className="is-drawer-close:hidden">{name}</span>
      </NavLink>
    </li>
  );
}
