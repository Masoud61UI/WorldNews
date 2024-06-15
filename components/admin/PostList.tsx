import prismadb from "@/lib/prismadb";
import Image from "next/image";
import Link from "next/link";
import DeletePostBtn from "./DeletePostBtn";
import { FaExternalLinkAlt } from "react-icons/fa";

export default async function PostList() {
  const posts = await prismadb.post.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <div>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="flex gap-x-2">
            <div className="flex flex-1 items-start gap-x-4 rounded-md bg-gray-100 px-3 py-4 shadow-sm">
              <div className="relative size-20 basis-1/5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="100vw"
                  className="rounded-md w-full border object-cover shadow-md"
                />
              </div>
              <h3 className="text-lg font-bold basis-4/5">{post.title}</h3>
            </div>
            <div className="flex flex-col gap-y-2">
              <DeletePostBtn id={post.id} />

              <Link
                href={`/blog/${post.address}`}
                className="rounded-md bg-green-200 p-4 text-green-600 shadow-md hover:bg-green-600 hover:text-white transition duration-180 ease-out hover:ease-in"
              >
                <FaExternalLinkAlt />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
