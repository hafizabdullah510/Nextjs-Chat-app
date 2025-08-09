import Sidebar from "../components/Sidebar";
import { AiFillPlusCircle } from "react-icons/ai";

export default function Layout({ children }) {
  return (
    <div className="drawer md:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar w-full md:hidden">
          <div className="flex justify-between items-center w-full">
            <label
              htmlFor="my-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <h1 className="text-lg md:text-4xl font-semibold">Chats</h1>
            <button className="$$btn $$btn-circle cursor-pointer">
              <AiFillPlusCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="bg-base-100 flex-1">{children}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay md:hidden"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
}
