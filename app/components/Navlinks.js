import Link from "next/link";
import React from "react";

const links = [
  { href: "/chat", label: "chat" },
  { href: "/tours", label: "tours" },
  { href: "/tours/new-tour", label: "new tour" },
  { href: "/profile", label: "profile" },
];

const Navlinks = () => {
  return (
    <ul className="menu text-base-content min-h-full w-full">
      {links.map((link) => (
        <li key={link.href} className="capitalize">
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navlinks;
