import React from 'react'

const Custom404 = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center space-y-5 text-lg md:text-base font-bold text-black dark:text-white">
      <h1>404 - Page Not Found</h1>
      <p className="px-5 text-center">
        Sorry, the page you are looking for does not exists or might be under construction.
      </p>
    </div>
  )
}

export default Custom404
