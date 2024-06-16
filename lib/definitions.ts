import { Session } from "next-auth";

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
