import AnimatedText from '@/components/AnimatedText'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import profilePic from '../../public/images/profile/developer-pic-2.png'

const about = () => {
  return (
    <>
      <Head>
        <title>Career - ShuyaLife</title>
        <meta name="description" content="career" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Endless passion for products"
            className="mb-16 !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Career summary</h2>
              <p className="font-medium">
                Full Stack software engineer with strong strategic planning and requirements definition skills for
                product management, and a track record of delivering high-value products in diverse development
                environments - from startups to enterprises - including significant contributions to fundraising efforts
                for a startup.
              </p>

              <p className="my-4 font-medium">
                In his over seven year&apos;s career as a product manager and software engineer, Shuya found his passion
                in creating products that help people through creating web apps and working closely together with
                Product and Design experts.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Shuya profile image"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
          <div className="flex justify-center items-center">
            <Link
              href="/resume.pdf"
              target={'_blank'}
              className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
              download={true}
            >
              ↓ DownLoad Resume
            </Link>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default about
