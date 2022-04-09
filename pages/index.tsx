import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../components/Home/HomePage'
const Home: NextPage = () => {
  return (
    <div className="h-screen w-full">
      <Head>
        <title>Amazon Web 3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Home*/}
      <div className="w-full">
        <HomePage />
      </div>
    </div>
  )
}

export default Home
