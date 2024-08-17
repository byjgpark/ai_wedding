'use client'

import { HTMLAttributes } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Header = ({ className, ...props }: HeaderProps) => {

  const pathname = usePathname()
  const isAuthPage = pathname === '/sign-in' || pathname === '/sign-up';

  if (isAuthPage) return null;

  return (
      <div className="flex flex-row items-center justify-center mx-5">
        <Link href="/">
            <div className="text-center mx-5">Home</div>
        </Link>
        <Link href="/map">
            <div className="text-center mx-5">Map</div>
        </Link>
        <Link href="/my">
            <div className="text-center mx-5">My Page</div>
        </Link>
      </div>
  )
}
