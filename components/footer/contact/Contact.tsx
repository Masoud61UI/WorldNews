import { FiPhoneCall, FiMail } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineFax } from "react-icons/md";
import { ContactProps } from "@/lib/definitions";

const contact: ContactProps[] = [
  { title: "شماره تماس", icon: FiPhoneCall, content: "۰۹۱۲-۱۲۳-۴۵۶۷" },
  { title: "ایمیل", icon: FiMail, content: "info@example.com" },
  { title: "آدرس", icon: SlLocationPin, content: "تهران، فرمانیه، مجتمع مینو" },
  { title: "فکس", icon: MdOutlineFax, content: "۱-۴۵۷-۲۵۷۷+" },
];

export default function Contact() {
  return (
    <ul className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
      {contact.map((items) => {
        const LinkIcon = items.icon;
        return (
          <li key={items.title} className="flex items-center">
            <div className="bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <LinkIcon className="size-5 text-green-600" />
            </div>
            <div className="text-sm mr-3">
              <small className="block text-gray-300">{items.title}</small>
              <strong className="text-green-600">{items.content}</strong>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
