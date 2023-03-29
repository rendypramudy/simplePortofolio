import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return <div className="flex flex-col gap-[20px] mx-[36px] pl-[15px]">
  <h1 className="font-bold text-[48px]">About Me</h1>
  <Image alt='my-photo' src={"/img/foto-abt.jpeg"} width={85} height={85} className="rounded-full ml-10"/>
  <p className="text-gray-500">My name is Rendy Pramudya Zahran. I am an undergraduate student majoring in Computer Science at <span className="font-bold">Binus University</span> and here im gonna share my experience :</p>
  <div className='border my-3'/>
  <div className='inline-flex gap-1'>
  <p className="text-gray-500">
  I am a fast learner, willing to take on challenges,eager to learn new things and seek new experiences. I'm able to work in a team and enthusiasthic about executing fresh ideas and have an interest in data science and data analysis.
  </p>
  <p className='text-gray-500'>
  I can solve problems well and creatively. In Jakarta I am a student from Bina Nusantara University and will complete my education next year. During my studies, I have received lessons about the importance of applying strategies to modern projects.
  </p>
  <p className='text-gray-500'>
  The concentration in Informatics engineering provides broad knowledge of engineering concepts as well as participation in several patent procedures that are done collaboratively in a team.
  </p>
  </div>
  <p className='text-gray-500'><span className='font-bold'>Lets Connect With Me!</span></p>
  <div className="inline-flex gap-4">
    <Link href="https://github.com/rendypramudy" className="underline underline-offset 8">Github</Link>
    <Link href="https://www.linkedin.com/in/rendypramudyaz/" className="underline underline-offset 8">Linkedin</Link>
  </div>
</div>
  
}

export default page