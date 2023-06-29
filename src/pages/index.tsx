import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../../public/images/profile/developer-pic-1.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - ShuyaLife</title>
        <meta name="description" content="home" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start">
        <Layout className="pt-0 md:pt-16 sm:pt-16">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Shuya's profile picture"
                className="w-full h-auto p-8 rounded-full lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="< HIGH HOPES />"
                className="!text-5xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl
                "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Hello, my name is Shuya. Originally from Tokyo, I am currently living in Vancouver.
                As a digital creator, I passionately build web applications and produce captivating
                video content that aims to inspire and entertain a global audience. Continuously
                striving for personal growth, I embrace challenges outside my comfort zone and
                immerse myself in unfamiliar environments. My insatiable curiosity fuels my love for
                exploring the world and its boundless wonders.
                <br />
                <br />
                In a nutshell, boundlessly ambitious, creative, and inspiring through technology!
                Let&apos;s adventure with me!
              </p>
              <div className="flex items-center justify-center mt-2">
                <Link
                  href="mailto:shuya.life@gmail.com"
                  target={'_blank'}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
