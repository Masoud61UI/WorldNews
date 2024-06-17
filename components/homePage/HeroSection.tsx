import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/undraw_online_articles_re_yrkj.svg";

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-8 items-center md:flex-row">
      <div className="flex-1">
        <div className="flex flex-col items-center gap-y-7 pr-0 md:items-start md:pr-5 lg:pr-12 xl:pr-20">
          <p className="text-sm font-semibold text-green-600 mb-2">
            <span className="rotate-90 inline-block ml-2">|</span> خوش آمدید به
            وبسایت خبرنامه
          </p>
          <h1 className="text-3xl font-bold lg:text-5xl text-center">
            دنیای <span className="text-green-600">خبر</span> در دستان شما
          </h1>
          <p className="text-center text-sm text-gray-600 md:text-right lg:text-base">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
          <Link
            href="/blog"
            className="rounded-md bg-black px-7 py-3 text-base font-semibold text-green-500 hover:opacity-90 transition duration-180 ease-out hover:ease-in"
          >
            وبلاگ ها
          </Link>
        </div>
      </div>
      <div className="flex-1 md:block">
        <div className="relative flex items-center justify-center m-auto size-[18rem] md:size-[28rem] lg:size-[32rem]">
          <Image src={heroImage} alt="hero-image" width={430} height={430} />
        </div>
      </div>
    </div>
  );
}
