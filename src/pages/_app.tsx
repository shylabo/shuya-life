import '@/styles/globals.css'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <main className=" w-full min-h-screen">
        <Component key={router.asPath} {...pageProps} />
      </main>
    </>
  )
}

export default App
