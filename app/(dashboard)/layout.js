import Sidebar from "../components/Sidebar";
import { FaBarsStaggered } from "react-icons/fa6";

export default function Layout({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="drawer-button fixed top-6 right-6 lg:hidden"
        >
          <FaBarsStaggered className="w-8 h-8 text-primary" />
        </label>
        <div className="bg-base-200 px-8 py-12 min-h-screen">{children}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          className="drawer-overlay"
          aria-label="close sidebar"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
}
