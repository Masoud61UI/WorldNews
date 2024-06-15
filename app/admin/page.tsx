import NewPost from "@/components/admin/NewPost";
import PostList from "@/components/admin/PostList";
import Container from "@/components/ui/Container";
import { authOption } from "@/lib/next-auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function page() {
  const session = await getServerSession(authOption);

  if (!session || session?.user.userRole !== "ADMIN")
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

  return <div>
    <Container className="mt-8 flex flex-col gap-x-10 md:flex-row">
      <div className="w-full p-2">
        <NewPost/>
      </div>
      <div className="my-5 block border-b shadow-md md:hidden"></div>
      <div className="w-full p-2 md:h-96 md:overflow-y-auto">
        <PostList/>
      </div>
    </Container>
  </div>;
}
