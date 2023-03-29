"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';


interface Props{
    params?: any
}

interface ItemProps {
    href? : string
    text? : string
}

const Item = ({href = "/", text = "Link"}: ItemProps) => {

    <Link
     href={href}
    className="flex flex-row items-center w-[250px] h-54px bg-zinc-100 hover:bg-zinc-200"
    >
        {text}
    </Link>
}

const Sidebar = ({ params }: Props) => {
   const PathName = usePathname()
  return (
    <div className='flex flex-col w-[231px] gap-[11px] ml-10 bg-inherit'>
        <Image
        alt='Logo'
        width={54}
        height={54}
        className="mx-4 mt-2"
        src = "/img/coding.png"/>

        <Link className='px-4 py-2 text-zinc-900 hover:bg-slate-200 rounded-md font-bold ' href={"/"}>Home</Link>
        <Link className='px-4 py-2 text-zinc-900  hover:bg-slate-200 rounded-md font-bold ' href={"/about"}>About</Link>
        <Link className='px-4 py-2 text-zinc-900  hover:bg-slate-200 rounded-md font-bold' href={"/project"}>Project</Link>
    </div>
  )
  }

export default Sidebar