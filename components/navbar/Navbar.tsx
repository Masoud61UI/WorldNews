import { getServerSession } from "next-auth";
import Container from "../ui/Container";
import { authOption } from "@/lib/next-auth";
import UserAvatar from "./userAvatar/UserAvatar";
import Link from "next/link";
import MenuItems from "./MenuItems";

export default async function Navbar() {
  const session = await getServerSession(authOption);

  return (
    <nav className="border-b py-3">
      <Container isFullHeight>
        <div className="md:h-14 h-24 flex items-center justify-between flex-wrap md:flex-nowrap">
          <Link href={"/"} className="md:order-1 text-xl font-semibold">
            خبر<span className="text-green-600">نامه</span>
          </Link>
          <div className="order-3 w-full md:w-auto md:order-2">
            <MenuItems session={session} />
          </div>
          <div className="flex items-center justify-normal gap-x-6 order-2 md:order-3">
            <UserAvatar session={session} />
          </div>
        </div>
      </Container>
    </nav>
  );
}
