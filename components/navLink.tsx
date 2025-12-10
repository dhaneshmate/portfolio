"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  link: {
    url: string;
    title: string;
  };
};

const NavLink = ({ link }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={link.url}
      className={`rounded p-1 ${
        pathname === link.url ? "bg-black text-white" : ""
      }`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
