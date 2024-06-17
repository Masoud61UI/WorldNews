import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import prismadb from "@/lib/prismadb";
import { Post } from "@prisma/client";
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "وبلاگ",
};

export default async function page() {
  const posts = await prismadb.post.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <div>
      <Container className="pt-14">
        <div className="grid gap-10 divide-y sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {posts.map((post: Post) => (
            <Link
              key={post.id}
              href={`/blog/${post.address}`}
              className="flex flex-col p-3.5 sm:p-2 gap-y-1 rounded-lg border shadow-lg sm:transition sm:duration-500 sm:ease-out sm:hover:scale-105 sm:hover:shadow-xl"
            >
              <div className="relative h-52 md:h-48 overflow-hidden rounded-md w-full ">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-2 mt-2">
                <div className="space-y-3">
                  <h2 className="text-sm sm:text-[15px] 2xl:text-base font-bold leading-6">
                    {post.title}
                  </h2>
                  <p className="text-[12px] sm:text-sm 2xl:text-[15px] text-gray-600 line-clamp-2">
                    {post.body}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-3 text-green-600 pb-2">
                  <p className="text-[13px] sm:text-[15px] 2xl:text-base font-medium">
                    بیشتر بخوانید
                  </p>
                  <FaArrowLeftLong className="size-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
