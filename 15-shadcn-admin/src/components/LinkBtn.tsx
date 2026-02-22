import { type ReactNode } from "react";
import { Link } from "react-router";

export default function LinkBtn({
  to,
  className,
  children,
}: {
  to: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`border-b border-muted-foreground hover:text-foreground hover:border-foreground ${className}`}
    >
      {children}
    </Link>
  );
}
