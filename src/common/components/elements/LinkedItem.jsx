import React from "react";
import Link from "next/link";

export const LinkedItem = ({
  href,
  className = "",
  onClick,
  children,
  ...rest
}) => {
  return (
    <Link href={href}>
      <a onClick={onClick} className={className} {...rest}>
        {children}
      </a>
    </Link>
  );
};
