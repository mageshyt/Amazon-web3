import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { BsList } from 'react-icons/bs'
import { AmazonContext } from '../../context/AmazonContext'
const style = {
  wrapper: '  bg-[#232f3e] h-9 w-full flex items-center space-x-6',
}

const Categories = [
  'books',
  'electronics',
  'clothing',
  'home',
  'prime',
  'Amazon pay',
]

const Category = () => {
  const router = useRouter()
  const { setCategory } = useContext(AmazonContext)
  return (
    <div className={style.wrapper}>
      <div className="ml-2 flex items-center space-x-2 text-white">
        <BsList />
        <span className="text-md font-extrabold">Categories</span>
      </div>
      <div className="flex space-x-4">
        {Categories.map((item, index) => {
          return (
            <div
              key={index}
              className="flex cursor-pointer items-center space-x-2 p-[2px] text-white hover:border-2"
              onClick={() => {
                setCategory(item)
                router.push(`/categories/`)
              }}
            >
              <span className="text-md  font-medium">{item}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Category
