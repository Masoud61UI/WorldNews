"use client";

import { MenuItem, UserAvatarProps } from "@/lib/definitions";
import { usePathname } from "next/navigation";
import Link from "next/link";

const menuItems: MenuItem[] = [
  { title: "صفحه اصلی", href: "/" },
  { title: "وبلاگ", href: "/blogs" },
  { title: "درباره‌ما", href: "/about" },
];

export default function MenuItems({ session }: UserAvatarProps) {
  const pathname = usePathname();

  return (
    <>
      <ul className="flex justify-between">
        {menuItems.map((items) => {
          return (
            <Link
              key={items.title}
              href={items.href}
              className={`transition duration-180 ease-out text-gray-500 hover:ease-in hover:text-green-500  ${
                pathname === items.href ? "text-green-600" : "text-gray-500"
              }`}
            >
              <li className="list-none text-[15px] font-medium md:px-5 md:py-2">
                {items.title}
              </li>
            </Link>
          );
        })}
        {session?.user.userRole === "ADMIN" && (
          <Link
            href={"/admin"}
            className={`transition duration-180 ease-out text-gray-500 hover:ease-in hover:text-green-500  ${
              pathname === "/admin" ? "text-green-600" : "text-gray-500"
            }`}
          >
            <li className="list-none text-[15px] font-medium md:px-5 md:py-2">
              پنل ادمین
            </li>
          </Link>
        )}
      </ul>
    </>
  );
}
