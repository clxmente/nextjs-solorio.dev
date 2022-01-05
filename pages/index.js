import Head from 'next/head';
import Link from "next/link";
import { Social } from "../components/Social"
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import { IoMdMail } from 'react-icons/io'
import { BsLinkedin } from 'react-icons/bs'

export default function Home() {
  return (
    <div className="bg-neutral-900">
      <Head>
        <title>Clemente Solorio</title>
        <meta name="description" content="20 year old student studying Computer Science at CSUF." />
        <link rel="icon" href="https://github.com/clxmente.png"/>
      </Head>

      <main>
        <div className="flex justify-center items-center h-screen">
          <div>
            {/* Nav Bar Code */}
            <div className="h-24 flex justify-evenly sm:justify-start">
              <nav className="font-mono text-lg text-gray-200 no-underline">
                <div className="flex">
                  <div className="pr-6"><Link href={"/"}><a className="hover:text-mygreen-500">/home</a></Link></div>
                  <div className="pr-6"><Link href={"/projects"}><a className="hover:text-mygreen-500">/projects</a></Link></div>
                  <div className=""><Link href={"/skills"}><a className="hover:text-mygreen-500">/skills</a></Link></div>
                </div>
              </nav>
            </div>
            {/* END Nav Bar */}
            <h1 className="font-mono text-gray-200 font-bold text-4xl sm:text-6xl flex justify-evenly sm:justify-start">
              hello, i'm clem.
            </h1>
            <div className='px-12 sm:px-0'>
              <p className="font-mono text-neutral-500 text-lg leading-8 pt-8 sm:px-0">
                I'm Clemente Solorio, a 20 year old student enrolled{" "}
              </p>
              <p className="font-mono text-neutral-500 text-lg sm:px-0">
                <a 
                  className="text-mygreen-100 hover:text-mygreen-500 hover:cursor-pointer"
                  href="https://www.fullerton.edu/">
                  @CSUF
                </a>, majoring in Computer Science.
              </p>
            </div>
            <div className="flex flex-nowrap pt-8 space-x-8 justify-evenly sm:justify-start">
              <Social href={"https://github.com/clxmente"} icon={<AiOutlineGithub size={"36"} />} />
              <Social href={"https://www.linkedin.com/in/clementesolorio/"} icon={<BsLinkedin size={"36"} />} />
              <Social href={"mailto:clem@solorio.dev"} icon={<IoMdMail size={"36"} />} />
              <Social href={"https://twitter.com/clxmente_"} icon={<AiOutlineTwitter size={"36"} />} />
            </div>
          </div>
        </div>

        <p>
        </p>
      </main>
    </div>
  )
}
