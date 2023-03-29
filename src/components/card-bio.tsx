import React from 'react'
import Image from 'next/image'

const cardBio = () => {
  return (
    <div className='inline-flex justify-center items-center rounded-lg border border-zinc-100 w-[312px] h-[134px] '>
        <Image alt='my-photo' src={"/img/foto-fix.png"} width={125} height={125} className="rounded-full ml-12"/>
        <div className='flex flex-col'>
            <div className='inline-flex gap-[3px] text-sm ml-1'>
            <Image alt='my-project' src={"/img/rocket.png"} width={35} height={26}/>
            <span className='font-bold text-3xl mx-1 text-rose-700'> 7 </span>
            <span className='text-gray-500 text-l'>Project Selesai</span>
            <div className='inline-flex gap-[3px] text-sm'>
            <Image alt='my-location' src={"/img/pin-loc.png"} width={35} height={26} className="ml-6"/>
            <span className='text-gray-500 text-l'>Jakarta, Indonesia</span>
            <div className='inline-flex gap-[3px] text-sm'>
            <Image alt='my-location' src={"/img/phone-call.png"} width={35} height={26} className="ml-6"/>
            <span className='text-gray-500 text-l'>+6287776645244</span>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default cardBio