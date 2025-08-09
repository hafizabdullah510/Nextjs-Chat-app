import React from "react";
import SidebarHeader from "./SidebarHeader";
import Navlinks from "./Navlinks";
import MemberProfile from "./MemberProfile";

const Sidebar = () => {
  return (
    <div className="px-4 w-80 min-h-full bg-base-300 py-8 grid grid-rows-[auto_1fr_auto] ">
      <SidebarHeader />
      <Navlinks />
      <MemberProfile />
    </div>
  );
};

export default Sidebar;
