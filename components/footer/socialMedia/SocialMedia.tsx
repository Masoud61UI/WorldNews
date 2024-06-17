import Facebook from "@/public/social/facebook.svg";
import Instagram from "@/public/social/instagram.svg";
import Linkedin from "@/public/social/linkedin.svg";
import X from "@/public/social/x.svg";
import Image from "next/image";
import { SocialProps } from "@/lib/definitions";
import Link from "next/link";

const socials: SocialProps[] = [
  { name: "Facebook", logo: Facebook, href: "https://www.facebook.com/" },
  { name: "Linkedin", logo: Linkedin, href: "https://www.linkedin.com/" },
  { name: "Instagram", logo: Instagram, href: "https://www.instagram.com/" },
  { name: "X", logo: X, href: "https://x.com/" },
];

export default function SocialMedia() {
  return (
    <ul className="flex items-center justify-center flex-wrap gap-y-3 gap-x-6 mt-8">
      {socials.map((items) => {
        return (
          <li key={items.name}>
            <Link key={items.name} href={items.href}>
              <Image src={items.logo} width={24} height={24} alt={items.name} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
