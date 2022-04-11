import { useState } from 'react'
import React from 'antd'
import { useContext } from 'react'
import { Layout } from 'antd'
import Header from '../components/Home/Header'
import Category from '../components/Home/Category'
import { AmazonContext } from '../context/AmazonContext'
import Rating from '../components/Category and porduct/Rating'
import PriceRange from '../components/Category and porduct/PriceRange'
import Results from '../components/Category and porduct/Results'
const styles = {
  filterBtn: 'bg-yellow-400 p-3 text-center cursor-pointer ',
}
const Categories = () => {
  const { Footer, Sider, Content } = Layout

  const { category } = useContext(AmazonContext)
  //! to track rating
  const [rating, setRating] = useState(0)
  //! track min price
  const [minPrice, setMinPrice] = useState(0)
  //! track max price
  const [maxPrice, setMaxPrice] = useState(100)
  return (
    <div>
      {/* header and category */}
      <div>
        <Header />
        <Category />
        <ShowProducts category={category} />
      </div>

      <Layout>
        <Sider width="340px" theme="light" className="hidden  p-7 md:block ">
          <div className=" vertical space-y-4">
            <Rating rating={rating} setRating={setRating} />
            <PriceRange
              minPrice={minPrice}
              maxPrice={maxPrice}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
            />
            <span className={styles.filterBtn}>Apply Filter</span>
          </div>
        </Sider>

        <Content theme="light" className="w-full  p-[35px]">
          <Results
            minPrice={minPrice}
            maxPrice={maxPrice}
            rating={rating}
            category={category}
          />
        </Content>
      </Layout>
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
