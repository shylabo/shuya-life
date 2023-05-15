import Head from 'next/head'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>home</title>
        <meta name="description" content="home" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start">
        <Layout className="pt-0 md:pt-16 sm:pt-16">main contents</Layout>
      </main>{' '}
    </>
  )
}
