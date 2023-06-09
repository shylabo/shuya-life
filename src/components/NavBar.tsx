import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { GithubIcon, LinkedInIcon, InstagramIcon, SunIcon, MoonIcon, MediumIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({
  href,
  title,
  className = '',
}: {
  href: string
  title: string
  className?: string
}) => {
  const router = useRouter()

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
          h-[2px] inline-block  bg-primary
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? 'w-full' : 'w-0'}
          dark:bg-primaryDark`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({
  href,
  title,
  className = '',
  toggle,
}: {
  href: string
  title: string
  className?: string
  toggle: any
}) => {
  const router = useRouter()

  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <a
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`
          h-[1px] inline-block  bg-light
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? 'w-full' : 'w-0'}
          dark:bg-dark`}
      >
        &nbsp;
      </span>
    </a>
  )
}

const NavBar = () => {
  const { mode, setMode } = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8
    "
    >
      <button
        className={`flex-col justify-center items-center hidden lg:flex ${isOpen ? 'fixed' : ''}`}
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          } `}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-center">
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/career" title="Career" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/media" title="Media" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://www.linkedin.com/in/shuya-sonoda-696b02138"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.8 }}
            title="LinkedIn"
            className="w-6 mr-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/shylabo"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.8 }}
            title="Github"
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://medium.com/@shuya.tech"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.8 }}
            title="Medium"
            className="w-6 mx-3"
          >
            <MediumIcon />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/shuya.life"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.8 }}
            title="Instagram"
            className="w-6 mx-3"
          >
            <InstagramIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`w-6 h-6 ml-3 flex items-center justify-center rounded-full p-1 ease
      ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
      `}
          >
            {mode === 'light' ? (
              <SunIcon className={'fill-dark'} />
            ) : (
              <MoonIcon className={'fill-dark'} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] sm:min-w-[90vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/30 dark:bg-light/30 rounded-lg backdrop-blur-md py-32
      "
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
            <CustomMobileLink href="/career" title="Career" className="" toggle={handleClick} />
            <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
            <CustomMobileLink href="/media" title="Media" className="" toggle={handleClick} />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://www.linkedin.com/in/shuya-sonoda-696b02138"
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              title="LinkedIn"
              className="w-6 mr-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/shylabo"
              target={'_blank'}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
              title="Github"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://medium.com/@shuya.tech"
              target={'_blank'}
              className="w-6 mx-3 sm:mx-1"
              title="Medium"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <MediumIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/shuya.life"
              target={'_blank'}
              className="w-6 mx-3 sm:mx-1"
              title="Instagram"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <InstagramIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className={`w-6 h-6 ml-3 flex items-center justify-center rounded-full p-1
      ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
      `}
            >
              {mode === 'light' ? (
                <SunIcon className={'fill-dark'} />
              ) : (
                <MoonIcon className={'fill-dark'} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]"></div>
    </header>
  )
}

export default NavBar
