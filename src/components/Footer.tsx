import React from 'react'
import Layout from '@/components/Layout'

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-black
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-evenly lg:flex-col lg:py-6 xl:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      </Layout>
    </footer>
  )
}

export default Footer
