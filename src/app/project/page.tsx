import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
    return <div className="flex flex-col gap-[20px] ml-[36px] pl-[15px]">
    <h1 className="font-bold text-[48px]">My Project</h1>
    <div className='flex flex-col gap-9'>
    <div className='flex flex-row'>
    <Image src={'/img/sqllogo.png'} width={100} height={90} className="rounded-lg" alt='Project 1'/>
    <div className='flex flex-col justify-between'> 
      <h2 className='ml-2 font-bold'>Database</h2>
      <h3 className='ml-2 text-gray-500'>In this project, I helped a restaurant called Bakmi_WM . Bakmi_WM is a food restaurant that sells a variety of noodledishes. and in this project I helped Bakmi_WM to make the transaction system.</h3>
    <div className='ml-2 inline-flex'>
    <Link href="https://github.com/rendypramudy" className="underline underline-offset 8">Click Here!</Link>
  </div>
  </div>
  </div>

  <div className='flex flex-row'>
    <Image src={'/img/htmllogooke.png'} width={100} height={90} className="rounded-lg" alt='Project 2'/>
    <div className='flex flex-col justify-between'> 
      <h2 className='ml-2 font-bold'>HTML</h2>
      <h3 className='ml-2 text-gray-500'>In this project I created a game website called Kenshin Impact. This is a parody of the game genshin impact website. and this website contains information about this game such as the characters in this game, and pov images when the user plays this game.</h3>
      <div className='ml-2 inline-flex'>
    <Link href="https://github.com/rendypramudy/KenshinImpact/tree/main/ProjectHCIFIXFinal" className="underline underline-offset 8">Click Here!</Link>
   </div>
  </div>
</div>

<div className='flex flex-row'>
    <Image src={'/img/figmalogos.png'} width={100} height={90} className="rounded-lg" alt='Project 2'/>
    <div className='flex flex-col justify-between'> 
      <h2 className='ml-2 font-bold'>UI/UX</h2>
      <h3 className='ml-2 text-gray-500'>In this project, I create user interfaces (UI) for business ideas in the entrepreneurship course.
the proposed business idea is named GameON. GameOn is a game marketplace application that specifically sells local or Indonesian-made games.</h3>
      <div className='ml-2 inline-flex'>
    <Link href="https://github.com/rendypramudy/KenshinImpact/tree/main/ProjectHCIFIXFinal" className="underline underline-offset 8">Click Here!</Link>
   </div>
  </div>
</div>

 </div>
</div> 
}

export default page