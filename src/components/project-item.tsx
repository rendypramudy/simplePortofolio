import React from 'react'
import Image from 'next/image'

const ProjectItem = () => {
  return (
    <div className='flex flex-row'>
    {/* <h1 className="font-bold text-[48px]">My Project</h1> */}
    <Image  
      src={'/img/rocket.png'}
      width={200}
      height={200}
      className=""
      alt='Project 1'
    />
    <div className='flex flex-col justify-between'>
      <h2>Project Title</h2>
    <div className='inline-flex'>
      <span></span>
    </div>
    </div>
    </div>
  )
}

export default ProjectItem