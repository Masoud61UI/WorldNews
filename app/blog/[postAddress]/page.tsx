import Container from "@/components/ui/Container";
import { paramsProps } from "@/lib/definitions";
import prismadb from "@/lib/prismadb";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function page({ params }: paramsProps) {
  const post = await prismadb.post.findUnique({
    where: {
      address: decodeURI(params.postAddress),
    },
  });

  if (!post) notFound();

  return (
    <div>
      <Container>
        <div className="flex flex-col lg:flex-row gap-14 max-w-6xl mx-auto pt-16">
          <div className="relative h-52 basis-5/5 lg:basis-2/5 w-full shadow-lg md:h-80">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="100vw"
              className="object-cover rounded-lg"
              quality={100}
            />
          </div>
          <div className="space-y-6 basis-5/5 lg:basis-3/5">
            <h1 className="text-lg sm:text-2xl font-bold">{post.title}</h1>
            <p className="text-justify text-gray-600 text-sm sm:text-base">{post.body}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
