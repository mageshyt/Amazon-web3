import React from 'react'
import Banner from './Banner'
import Card from './Card'
import { CardData } from '../../lib/cardsData'
import Rating from '../Category and porduct/Rating'
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
