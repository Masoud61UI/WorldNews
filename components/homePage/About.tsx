import Image from "next/image";
import Link from "next/link";
import aboutHomeImg from "@/public/undraw_blog_post_re_fy5x.svg";

export default function About() {
  return (
    <div className="bg-gray-100 w-full rounded-lg">
      <div className="grid md:grid-cols-2 gap-4 items-center md:max-h-[475px] overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center order-2 md:order-1 p-6">
          <Image
            src={aboutHomeImg}
            width={400}
            height={400}
            alt="About Img"
            className="object-contain "
          />
        </div>
        <div className="p-6 max-w-xl mx-auto order-1 md:order-2">
          <h1 className="sm:text-3xl text-xl font-bold text-green-600">
            درباره خبرنامه
          </h1>
          <div className="mt-6">
            <p className="text-sm text-gray-500">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ.
            </p>
            <p className="mt-2 mb-12 text-sm text-gray-500">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
          </div>
          <Link
            href="/about"
            className="rounded-md bg-black px-7 py-3 text-base font-semibold text-green-500 hover:opacity-90 transition duration-180 ease-out hover:ease-in"
          >
            درباره ما
          </Link>
        </div>
      </div>
    </div>
  );
}
