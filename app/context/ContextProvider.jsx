"use client";
import { createContext, useState } from "react";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const handleSideBar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <Context.Provider value={{ handleSideBar, openSidebar }}>
      {children}
    </Context.Provider>
  );
};
