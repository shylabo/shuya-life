import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import dalle from '../../public/images/projects/dalle.png'
import cleanArchitectureApi from '../../public/images/projects/TypeScript-clean-architecture-api.jpg'
import notionCloneApp from '../../public/images/projects/notion-clone-app.png'
import travelAnywhere from '../../public/images/projects/travel-anywhere.png'
import aiChatRoom from '../../public/images/projects/ai-chat-room.png'
import { motion } from 'framer-motion'

const FramerImage = motion(Image)

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: {
  type: string
  title: string
  summary: string
  img: any
  link: string
  github: string
}) => {
  return (
    <article
      className="w-full flex items-center justify-between relative  rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
    rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
    "
      />
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl xs:text-2xl">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {' '}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({
  title,
  type,
  img,
  link,
  github,
}: {
  title: string
  type: string
  img: any
  link: string
  github: string
}) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
    rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
    "
      />
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>

        <div className="w-full flex items-center justify-between">
          <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base">
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects - ShuyaLife</title>
        <meta name="description" content="projects" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Coding is always fun!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Travel Booking App"
                summary="This travel booking app offers an extensive range of destinations worldwide, allowing you to book numerous places across the globe. It provides convenient features such as third-party login integration, efficient search functionality, seamless reservation processes, and comprehensive property management capabilities. Additionally, the app boasts a modern and fully responsive design, making it visually appealing and user-friendly for an optimal booking experience. Developed as an application using Next.js and React, it combines robust functionality with cutting-edge technology to deliver a top-notch travel booking platform.
                "
                img={travelAnywhere}
                link="https://travel-anywhere.vercel.app/"
                github="https://github.com/shylabo/travel-anywhere"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Full Stack"
                title="Notion clone app"
                img={notionCloneApp}
                link="https://notion-clone-shylabo.vercel.app"
                github="https://github.com/shylabo/notion-clone"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Backend Api"
                title="Clean Architecture API (TypeScript)"
                img={cleanArchitectureApi}
                link="https://github.com/shylabo/typescript-clean-architecture-api"
                github="https://github.com/shylabo/typescript-clean-architecture-api"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="ChatGPT"
                title="Image Generation App Powered by OpenAI API"
                img={dalle}
                link="https://dalle-web-65vw.onrender.com/"
                github="https://github.com/shylabo/dalle"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="ChatGPT"
                title="AI Chat Room Powered by OpenAI API"
                img={aiChatRoom}
                link="https://ai-chat-room-client.onrender.com/"
                github="https://github.com/shylabo/ai-chat-room"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
