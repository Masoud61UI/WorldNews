import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import aboutImg from "@/public/undraw_team_spirit_re_yl1v.svg";

export default function Content() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gray-50 lg:p-10 p-6 rounded-md">
        <div className="grid md:grid-cols-2 items-center gap-16">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold mb-4">
              متعهد به ارائه اخبار دقیق و درست
            </h3>
            <p className="text-sm text-gray-600">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ.
            </p>
            <ul className="space-y-4 mt-8">
              <li className="flex items-center text-sm font-semibold">
                <FaCheck className="ml-3 bg-green-500 fill-white rounded-full p-[3px] size-4" />
                منبع موثق
              </li>
              <li className="flex items-center text-sm font-semibold">
                <FaCheck className="ml-3 bg-green-500 fill-white rounded-full p-[3px] size-4" />
                تحلیل عمیق
              </li>
              <li className="flex items-center text-sm font-semibold">
                <FaCheck className="ml-3 bg-green-500 fill-white rounded-full p-[3px] size-4" />
                صدر اخبارها
              </li>
              <li className="flex items-center text-sm font-semibold">
                <FaCheck className="ml-3 bg-green-500 fill-white rounded-full p-[3px] size-4" />
                اخبار بی‌طرفانه
              </li>
            </ul>
          </div>
          <Image src={aboutImg} width={800} height={800} alt="About Image" />
        </div>
      </div>
    </div>
  );
}
