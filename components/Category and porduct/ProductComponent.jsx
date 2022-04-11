import { Rate } from 'antd'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { AmazonContext } from '../../context/AmazonContext'

const style = {
  wrapper:
    'my-6 product_card  flex md:flex-row  bg-white flex-col   space-x-4 transform-all duration-300 hover:scale-105  ',
  productImage: 'h-[300px] w-[300px] object-contain ',
  productName: 'text-xl font-bold hidden md:block',
  price: 'text-xl font-medium',
  ProductBtn: 'bg-yellow-400 p-3 text-center w-[230px] mb-4 cursor-pointer',
}
const ProductComponent = ({ product }) => {
  const { setSelectedProduct } = useContext(AmazonContext)
  const router = useRouter()
  const handleProduct = (product) => {
    router.push(`/product`)
    setSelectedProduct(product)
  }
  //! destructuring
  const { name, price, rating, image, about } = product
  return (
    <div className={style.wrapper}>
      {/* image */}
      <div className="center w-[350px] ">
        <img src={image} className={style.productImage} alt="productImage" />
      </div>
      {/* title ,rating ,price */}
      <div className="vertical  gap-y-10 md:mt-10">
        <h1 className={style.productName}>{name}</h1>
        {/* Price and rating */}
        <div className="vertical mb-4 space-y-2 md:mb-0">
          <Rate defaultValue={rating} disabled={true} />
          <h1 className={style.price}>${price}</h1>

          {/* Ship */}
          <span>Ship to Your Location</span>
          {/* Product btn */}
          <span
            onClick={() => handleProduct(product)}
            className={style.ProductBtn}
          >
            Go to the Product
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent
