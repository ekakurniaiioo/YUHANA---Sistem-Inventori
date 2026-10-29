import { Link } from "react-router-dom";

export function SidebarItem({ name, icon, path }) {
  const Icon = icon;

  return (
    <li>
      <Link
        to={path}
        className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-3 py-3 cursor-pointer"
        data-tip={name}
      >
        <Icon size={18} className="shrink-0" />
        <span className="is-drawer-close:hidden font-poppins text-sm">
          {name}
        </span>
      </Link>
    </li>
  );
}
