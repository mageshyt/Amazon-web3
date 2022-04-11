import React from 'react'
import Banner from './Banner'
import Card from './Card'
import { CardData } from '../../lib/cardsData'
import Rating from '../Category and porduct/Rating'
const HomePage = () => {
  return (
    <div className=" pb-10">
      <Banner />

      {/* cards */}
      <div className="md:center flex flex-col items-center justify-center space-y-5 space-x-0 md:flex-row md:justify-around md:space-x-3">
        {CardData.map((card, index) => {
          return <Card key={index} {...card} />
        })}
      </div>
    </div>
  )
}

export default HomePage
