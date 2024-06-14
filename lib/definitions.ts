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
