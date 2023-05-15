import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { GithubIcon, InstagramIcon, LinkedInIcon, MediumIcon, YoutubeIcon } from './Icons'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className = '' }: { href: string; title: string; className?: string }) => {
  const router = useRouter()

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
        h-[1px]
      inline-block
      bg-dark
      absolute
      left-0
      -bottom-0.5
      group-hover:w-full
      transition-[width]
      ease
      duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}
      dark: bg-light
      `}
      >
        &nbsp;
      </span>
    </Link>
  )
}

// TODO: CustomMobileLink

const NavBar = () => {
  return (
    <header className="border-b-2">
      {/* TODO: responsible */}
      <div className="w-full px-32 py-8 flex justify-between items-center lg:hidden">
        {/* Site navigation */}
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="ml-4" />
        </nav>

        {/* External URL links */}
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://www.linkedin.com/in/shuya-sonoda-696b02138"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.8 }}
            title="LinkedIn"
            className="w-6 mx-3"
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
            href="https://www.youtube.com/c/ShuyaLife"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.8 }}
            title="Youtube"
            className="w-6 mx-3"
          >
            <YoutubeIcon />
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
        </nav>
      </div>
    </header>
  )
}

export default NavBar
