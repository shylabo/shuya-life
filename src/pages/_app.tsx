import '@/styles/globals.css'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className=" w-full min-h-screen">
        <Component key={router.asPath} {...pageProps} />
      </main>
    </>
  )
}

export default App
