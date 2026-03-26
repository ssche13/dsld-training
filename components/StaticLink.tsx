"use client";

import { ReactNode } from "react";

// Plain <a> tag that works with file:// protocol
// Next.js Link intercepts clicks and uses absolute-path routing which breaks on file://
export default function StaticLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
