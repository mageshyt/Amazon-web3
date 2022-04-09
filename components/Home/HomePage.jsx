import React from 'react'
import Header from './Header'
import Categories from './Category'
import Banner from './Banner'
import Card from './Card'
import { CardData } from '../../lib/cardsData'
const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <div>
        {/* cards */}
        <div className=" center absolute top-[320px]  mx-auto w-full  space-x-10">
          {CardData.map((card, index) => {
            return <Card key={index} {...card} />
          })}
        </div>
      </div>
    </div>
  )
}

export default HomePage
