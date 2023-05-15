import React from 'react'
import Link from 'next/link'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className="w-full font-medium border-t-2 border-solid border-dark text-lg dark:text-light dark:border-light | sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <div className="text-primary">Shuya Life</div>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <Link href="/" className="underline underline-offset-2">
          Blue pill or Red pill?
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer
