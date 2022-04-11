import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { AmazonContext } from '../../context/AmazonContext'

const styles = {
  wrapper: 'h-[400px] p-3 w-[300px] bg-white  flex-col ',
  title: 'text-2xl ',
  shop: 'cursor-pointer hover:text-orange-500 hover:underline text-blue-400',
}
const Card = (props) => {
  const { name, imageUrl, images, buttonTitle, routerUrl, category } = props
  const router = useRouter()
  const { setCategory } = useContext(AmazonContext)
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{name}</span>
      <div className="center object-contain ">
        {name !== 'Shop by Category' ? (
          <img
            src={imageUrl}
            alt="card image"
            className=" h-[300px] w-[350px] rounded-xl object-contain"
          />
        ) : (
          <ShopAll images={images} />
        )}
      </div>
      {/* shop now */}
      <div
        onClick={() => {
          router.push(`${routerUrl}`)
          setCategory(category)
        }}
        className="mt-2 text-center"
      >
        <span className={styles.shop}>{buttonTitle}</span>
      </div>
    </div>
  )
}

const ShopAll = ({ images }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2">
      {images.map((image, index) => {
        return (
          <img
            src={image}
            className="h-[140px] w-[140px] object-contain"
            key={index}
            alt=""
          />
        )
      })}
    </div>
  )
}
export default Card
