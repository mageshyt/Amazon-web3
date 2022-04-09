import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Category from '../components/Home/Category'
import Header from '../components/Home/Header'
import HomePage from '../components/Home/HomePage'
const Home: NextPage = () => {
  return (
    <div className="h-screen w-full">
      <Head>
        <title>Amazon Web 3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Home*/}
      <Header />
      <Category />
      <div className=" mx-auto max-w-[1700px]">
        <HomePage />
      </div>
    </div>
  )
}

export default Home
