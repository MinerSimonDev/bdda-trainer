import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type Variant = "default" | "outline" | "secondary" | "ghost" | "link";

export function ButtonLink({
  className,
  variant = "default",
  size = "md",
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-5 text-[15px]",
  };
  return (
    <Link
      className={cn(buttonVariants({ variant }), sizes[size], className)}
      {...props}
    />
  );
}
