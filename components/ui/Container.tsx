import { ContainerProps } from "@/lib/definitions";
import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
  isFullHeight,
}: ContainerProps) {
  return (
    <div
      className={cn("container mx-auto px-6", className, {
        "h-full": isFullHeight,
      })}
    >
      {children}
    </div>
  );
}
