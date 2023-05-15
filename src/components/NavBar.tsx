import React, { useState } from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <header>
      {/* TODO: responsible */}
      <div className="w-full px-32 py-8 flex justify-between items-center lg:hidden">
        {/* Site navigation */}
        <nav>
          <Link href="/" title="Home" className="mr-4">
            Home
          </Link>
          <Link href="/about" title="About" className="mx-4">
            About
          </Link>
          <Link href="/projects" title="About" className="ml-4">
            Projects
          </Link>
        </nav>

        {/* External URL links */}
        <nav>
          <Link
            href="https://www.linkedin.com/in/shuya-sonoda-696b02138"
            target="_blank"
            title="LinkedIn"
            className="mr-4"
          >
            LinkedIn
          </Link>
          <Link href="https://github.com/shylabo" target="_blank" title="Github" className="mx-4">
            Github
          </Link>
          <Link href="https://medium.com/@shuya.tech" target="_blank" title="Medium" className="mx-4">
            Medium
          </Link>
          <Link href="https://www.youtube.com/c/ShuyaLife" target="_blank" title="Youtube" className="mx-4">
            Youtube
          </Link>
          <Link href="https://www.instagram.com/shuya.life" target="_blank" title="Instagram" className="ml-4">
            Instagram
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
