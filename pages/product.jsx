import { Rate } from 'antd'
import React from 'react'
import { useContext } from 'react'
import PurchaseModal from '../components/Category and porduct/PurchaseModal'
import Category from '../components/Home/Category'
import Header from '../components/Home/Header'
import { AmazonContext } from '../context/AmazonContext'

const style = {
  wrapper: 'vertical',
  productImage:
    ' transform-all duration-300 hover:scale-105 cursor-pointer h-[400px] ease-in w-[400px]',
  hoverText: 'text-white mt-4 text-sm text-gray-500 ',
  name: 'lg:text-3xl md:text-2xl text-md  whitespace-wrap  font-medium',
  price: 'text-red-400 font-medium text-xl',
  about: 'text-xl mt-4 mb-4',
}
const Product = () => {
  const { selectedProduct } = useContext(AmazonContext)
  console.log({ selectedProduct })
  const { image, name, price, about, rating } = selectedProduct
  return (
    <div className={style.wrapper}>
      {/* Headers */}
      <div>
        <Header />
        <Category />
      </div>
      {/* Product */}
      <div className="flex flex-col items-center justify-around  p-4 lg:flex-row ">
        {/* left -image */}
        <div className="mt-10 w-[400px]">
          <div className="vertical text-center">
            <img
              src={image}
              alt="product_image"
              className={style.productImage}
            />
            <p className={style.hoverText}>Hover over the image to zoom</p>
          </div>
        </div>

        {/* right -middle */}
        <div className="mt-10 ml-10 w-[90vw] lg:w-[800px] ">
          {/* Product Details */}
          <ProductDetail name={name} rating={rating} price={price} />
          {/* Divider */}
          <div className="mt-6 mb-8 w-[80vw] border lg:w-[800px]" />

          {/* About */}
          <div className="mt-4">
            <span className={style.about}>About this product:</span>
            <AboutItem about={about} />
          </div>

          {/* end */}
          <div className=" center mt-6">
            <PurchaseModal price={price} name={name} image={image} />
          </div>
        </div>
      </div>
    </div>
  )
}

const AboutItem = ({ about }) => {
  return (
    <div>
      <span className="text-sm text-gray-400">{about}</span>
    </div>
  )
}

const ProductDetail = ({ name, price, rating }) => {
  return (
    <>
      <div className="vertical space-y-8">
        <span className={style.name}>{name}</span>
        {/* Ratings */}
        <Rate defaultValue={rating} disabled={true} />
      </div>
      {/* Divider */}
      <div className="mt-4 w-[80vw] border lg:w-[800px]" />
      {/* Price*/}
      <div className="vertical  mt-2 space-y-3">
        <span className="text-gray-500">
          Price: <span className={style.price}>${price}</span>
        </span>
        <span className="text-gray-500">
          no Import Fees & Free Shipping Included
        </span>
      </div>
    </>
  )
}
export default Product
