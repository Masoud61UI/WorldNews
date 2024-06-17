import Refresh from "@/components/ui/Refresh";
import Link from "next/link";

export default function page() {
  return (
    <div className="text-center my-40 space-y-6">
      <h1>مشکلی پیش آمد. لطفاً بعداً دوباره امتحان کنید.</h1>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <Refresh />
        <Link
          href="/"
          className="rounded-md bg-black px-7 py-3 text-base font-semibold text-green-500 hover:opacity-90 transition duration-180 ease-out hover:ease-in"
        >
          صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
