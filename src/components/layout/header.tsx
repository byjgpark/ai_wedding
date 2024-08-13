import { HTMLAttributes } from 'react'
import Link from 'next/link'
// import { cn } from "@/lib/utils";
interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Header = ({ className, ...props }: HeaderProps) => {
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
