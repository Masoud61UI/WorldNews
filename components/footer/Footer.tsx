import Link from "next/link";
import SocialMedia from "./socialMedia/SocialMedia";
import Contact from "./contact/Contact";
import NavFooter from "./navFooter/NavFooter";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r bg-black text-white py-10 px-10 font-sans tracking-wide mt-20">
      <div className="max-w-2xl mx-auto text-center">
        <Link href={"/"} className="inline-block text-xl sm:text-2xl font-bold">
          خبر<span className="text-green-600">نامه</span>
        </Link>
        <p className="text-sm mt-6 text-gray-200">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است.
        </p>

        <SocialMedia />
      </div>

      <Contact />

      <hr className="my-10 border-gray-500" />

      <div className="flex max-md:flex-col gap-4">
        <NavFooter />
        <p className="text-sm text-gray-500 md:mr-auto">
          تمامی حقوق این سایت محفوظ است. نقل مطالب با ذکر منبع بلامانع است.
        </p>
      </div>
    </footer>
  );
}
