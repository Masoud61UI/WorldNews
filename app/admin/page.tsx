import { authOption } from "@/lib/next-auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function page() {
  const session = await getServerSession(authOption);

  if (session?.user.userRole !== "ADMIN")
    return (
      <div className="flex h-80 flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-red-500 mb-5">
          دسترسی غیر مجاز
        </h2>
        <Link
          href={"/"}
          className="text-sm py-3 px-5 bg-black text-green-500 rounded-md hover:opacity-90 transition duration-180 ease-out hover:ease-in"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    );

  return <div>admin</div>;
}
