"use client";
import Link from "next/link";
import { BsChatSquare } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { usePathname } from "next/navigation";
import { CgProfile } from "react-icons/cg";

const links = [
  {
    href: "/chat",
    label: "chat",
    icon: <BsChatSquare className="w-6 h-6" />,
  },
  {
    href: "/groups",
    label: "groups",
    icon: <MdGroups className="w-6 h-6" />,
  },
  {
    href: "/profile",
    label: "profile",
    icon: <CgProfile className="w-6 h-6" />,
  },
];

const Navlinks = () => {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;
  return (
    <ul className="menu text-base-content min-h-full w-full mt-4">
      {links.map((link) => (
        <li key={link.href} className="capitalize px-2 py-2">
          <Link
            href={link.href}
            className={`rounded-lg link no-underline py-2
             ${isActive(link.href) ? "menu-active" : ""}`}
          >
            {link.icon}
            <span className="ml-4 mt-0 text-sm md:text-lg">{link.label}</span>
            {link.href !== "/profile" && (
              <span className="badge badge-sm">99+</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navlinks;
