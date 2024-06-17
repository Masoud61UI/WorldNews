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
          className="px-4 py-2 font-semibold bg-black text-green-500 rounded-md hover:opacity-90 transition duration-180 ease-out hover:ease-in"
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
