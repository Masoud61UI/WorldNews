import Image from "next/image";
import spinner from "@/public/spinner.svg";

export default function loading() {
  return (
    <div className="flex justify-center mt-16">
      <Image className="h-50" src={spinner} alt="loading..." />
    </div>
  );
}
