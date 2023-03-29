import CardBio from "@/components/card-bio"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return <div className="flex flex-col gap-[20px] mx-[35px]">
    <h1 className="font-bold text-[48px]">Rendy Pramudya Zahran</h1>
    <p className="text-gray-500">Hello, My name is Rendy Pramudya Zahran. I am an undergraduate student majoring in Computer Science at <span className="font-bold">Binus University</span></p>
    <CardBio/> 
    <p className="text-gray-500">
    I am a fast learner, willing to take on challenges,eager to learn new things and seek new experiences. I'm able to work in a team and enthusiasthic about executing fresh ideas and have an interest in data science and data analysis.
    </p>
    <h4 className="font-bold text-[25px]">Skills</h4>
    <div className="inline-flex gap-6">
      {/* <Link href="https://github.com/rendypramudy" className="underline underline-offset 8">Github</Link>
      <Link href="https://www.linkedin.com/in/rendypramudyaz/" className="underline underline-offset 8">Linkedin</Link> */}
       <Image src={'/img/sqllogo.png'} width={80} height={70} className="rounded-lg" alt='SQL'/>
       <Image src={'/img/htmllogooke.png'} width={80} height={70} className="rounded-lg" alt='HTML'/>
       <Image src={'/img/figmalogos.png'} width={80} height={70} className="rounded-lg" alt='Figma'/>
       <Image src={'/img/Tableau-logo.png'} width={80} height={70} className="rounded-lg" alt='Tableau'/>
    </div>
  </div>
}
