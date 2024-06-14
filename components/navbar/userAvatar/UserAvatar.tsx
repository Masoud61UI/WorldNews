import { UserAvatarProps } from "@/lib/definitions";
import prismadb from "@/lib/prismadb";
import Link from "next/link";
import User from "./User";

export default async function UserAvatar({ session }: UserAvatarProps) {
  if (!session || !session.user.usreId)
    return (
      <div>
        <Link
          href={"/login"}
          className="rounded-md bg-black px-3 py-2 text-white hover:bg-gray-800"
        >
          ورود / ثبت نام
        </Link>
      </div>
    );

  const user = await prismadb.user.findUnique({
    where: {
      id: session.user.usreId,
    },
  });

  return <User name={user?.name as string} />;
}
