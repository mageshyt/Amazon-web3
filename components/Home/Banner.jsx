import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import Card from './Card'
import { CardData } from '../../lib/cardsData'
const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        className="select-none"
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        interval={2000}
        showStatus={false}
      >
        <div>
          <img src="/images/carousel1.png" />
        </div>
        {/* 2 */}
        <div>
          <img src="/images/carousel2.png" />
        </div>
        {/* 3 */}
        <div>
          <img src="/images/carousel3.png" />
        </div>
      </Carousel>
    </div>
    // cards
  )
}

export default Banner
