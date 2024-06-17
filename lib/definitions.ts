import { Session } from "next-auth";
import { IconType } from "react-icons";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  isFullHeight?: boolean;
}

export interface UserAvatarProps {
  session: Session | null;
}

export interface UserProps {
  name: string;
}

export interface MenuItem {
  title: string;
  href: string;
}

export interface SubmitBtnProps {
  text: string;
}

export interface DeleteBtnProps {
  id: number;
}

export interface paramsProps {
  params: {
    postAddress: string;
  };
}

export interface SocialProps {
  name: string;
  logo: string;
  href: string;
}

export interface ContactProps {
  title: string;
  icon: IconType;
  content: string;
}
