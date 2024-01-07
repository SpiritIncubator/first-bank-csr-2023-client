'use client'

import React, { PropsWithChildren } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  href: string;
  style?: string;
}

const NavLink = ({ href, children, style }: PropsWithChildren<NavLinkProps>) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={style}>
      {children}
    </Link>
  )
}

export default NavLink