import { createContext, useContext, useState } from "react";

const SidebarStateContext = createContext(null);

export function SidebarStateProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarStateContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarStateContext.Provider>
  );
}

export function useSidebarState() {
  const state = useContext(SidebarStateContext);
  if (!state) throw new Error("useSidebarState requires SidebarStateProvider");
  return state;
}
