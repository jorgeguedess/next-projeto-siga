import Link from "next/link";
import { ReactNode } from "react";

interface HeaderMenuItemProps {
  icon: ReactNode;
  label: string;
  path: string;
}

const HeaderMenuItem = ({ icon, label, path }: HeaderMenuItemProps) => {
  return (
    <li className="font-main">
      <Link
        href={path}
        className="w-full cursor-pointer flex items-center gap-4 px-11 py-4 text-secondary-foreground hover:bg-[#3d4145] focus:bg-[#3d4145]"
      >
        {icon}
        <span className="text-base font-bold capitalize">{label}</span>
      </Link>
    </li>
  );
};

export default HeaderMenuItem;
