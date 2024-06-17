import { MenuItem } from "@/lib/definitions";
import Link from "next/link";

const navFooter: MenuItem[] = [
  { title: "قوانین و سیاست‌ها", href: "#" },
  { title: "خانه", href: "/" },
  { title: "وبلاگ‌ها", href: "/blog" },
  { title: "درباره‌ما", href: "/about" },
];

export default function NavFooter() {
  return (
    <ul className="flex flex-wrap gap-4">
      {navFooter.map((items) => {
        return (
          <li key={items.title} className="text-sm">
            <Link
              href={items.href}
              className="text-gray-600 font-semibold hover:underline hover:text-green-600"
            >
              {items.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
