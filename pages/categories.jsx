import React from 'react'
import { useContext } from 'react'

import Header from '../components/Home/Header'
import Category from '../components/Home/Category'
import { AmazonContext } from '../context/AmazonContext'
const Categories = () => {
  const { category } = useContext(AmazonContext)
  return (
    <div>
      {/* header and category */}
      <div>
        <Header />
        <Category />
        <ShowProducts category={category} />
      </div>
    </div>
  )
}

const ShowProducts = ({ category }) => {
  return (
    <div className="h-[40px] border-b p-2">
      <span>Showing products for </span>
      <span className="text-lg text-yellow-500">" {category} "</span>
    </div>
  )
}
export default Categories
