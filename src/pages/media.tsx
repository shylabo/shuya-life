import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { MouseEventHandler, useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import featured1 from '../../public/images/media/day-in-the-life-as-a-swe-in-tokyo.jpg'
import featured2 from '../../public/images/media/what-I-do-as-a-swe.jpg'
import featured3 from '../../public/images/media/interview-with-heo.jpg'
import featured4 from '../../public/images/media/interview-with-eric.jpg'
import article1 from '../../public/images/media/sql-vs-nosql.jpg'
import article2 from '../../public/images/media/ssl.png'
import article3 from '../../public/images/media/how-chat-gpt-learn.png'

const FramerImage = motion(Image)

const MovingImg = ({ title, img, link }: { title: string; img: string; link: string }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef(null)

  function handleMouse(event) {
    imgRef.current.style.display = 'inline-block'
    x.set(event.pageX)
    y.set(-10)
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = 'none'
    x.set(0)
    y.set(0)
  }

  return (
    <Link href={link} target="_blank" onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
      <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  )
}

const Article = ({
  img,
  title,
  date,
  link,
}: {
  img: any
  title: string
  date: string
  link: string
}) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
        sm:flex-col
        "
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  )
}

const FeaturedArticle = ({
  img,
  title,
  time,
  summary,
  link,
}: {
  img: any
  title: string
  time: string
  summary: string
  link: string
}) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
    rounded-br-3xl
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
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
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
    </li>
  )
}

const media = () => {
  return (
    <>
      <Head>
        <title>Media - ShuyaLife</title>
        <meta name="description" content="media" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="SHARING VALUABLE TECH IDEAS!"
            className="mb-16
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
          "
          />

          {/* YouTube Section */}
          <h2 className="font-bold text-4xl w-full text-center mb-8">Videos</h2>
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={featured1}
              title="A Day in the life of a Software Engineer in Japan Tokyo"
              time="Youtube"
              summary="A real day of my life as a software engineer (winter edition). If you are new to my channel, let's take a look at this first."
              link="https://youtu.be/nTzjmSesD-4"
            />
            <FeaturedArticle
              img={featured2}
              title="What do I do as a software engineer? (comprehensive 10 steps)"
              time="Youtube"
              summary="In this video, I'll show you what I actually do as a software engineer in a daily work to give a general idea for those who are considering going into tech."
              link="https://youtu.be/JKrzVa3cr7Q"
            />
            <FeaturedArticle
              img={featured3}
              title="What's it like working as a foreign software engineer in Japan?"
              time="Youtube"
              summary="In this video, we'll share what it's like working as a foreign software engineer in Japan. We'll discuss the different challenges and rewards of working in Japan and answer some of the most common questions about working as a foreign software engineer in Japan."
              link="https://youtu.be/pkPpdYiAqWY"
            />
            <FeaturedArticle
              img={featured4}
              title="Interview with a head of product in a Japanese company (working from Hong kong)"
              time="Youtube"
              summary="In this video, we're gonna dive in the role of product head and learn how to manage global team and maximize the value of product."
              link="https://youtu.be/8JLRHMt5ArY"
            />
          </ul>

          {/* Article Section */}
          <h2 className="font-bold text-4xl w-full text-center my-8 mt-32">Articles</h2>
          <ul className="flex flex-col items-center relative">
            <Article
              title="SQL Databases vs NoSQL Databases"
              img={article1}
              date="May 15, 2023"
              link="https://medium.com/@shuya.tech/sql-databases-vs-nosql-databases-47fdfbd80648"
            />
            <Article
              title="Understanding An SSL/TLS Certificate"
              img={article2}
              date="May 9, 2023"
              link="https://medium.com/@shuya.tech/what-is-an-ssl-tls-certificate-77db77401271"
            />
            <Article
              title="How ChatGPT learned to talk human-like?"
              img={article3}
              date="May 8, 2023"
              link="https://medium.com/@shuya.tech/how-chatgpt-learned-to-talk-human-like-8eb7ab6ac8c9"
            />
            <Link
              href="https://medium.com/@shuya.tech"
              target="_blank"
              className="mt-3 text-lg font-bold text-black dark:text-white hover:text-primary dark:hover:text-primaryDark transition ease-in duration-300"
            >
              and more...?
            </Link>
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default media
