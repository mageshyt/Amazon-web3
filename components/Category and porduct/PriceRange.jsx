import React from 'react'
import { InputNumber, Space } from 'antd'
const styles = {
  heading: 'text-lg font-semibold text-gray-700',
  prices:
    'text-sm hover:text-orange-400 font-semibold cursor-pointer text-gray-700',
}
const PriceRange = ({ minPrice, maxPrice, setMaxPrice, setMinPrice }) => {
  //! function to handle price change
  const handlePriceChange = (min, max) => {
    setMinPrice(min)
    setMaxPrice(max)
  }
  return (
    <div>
      <span className={styles.heading}>Price Range</span>
      {/* Ranges */}
      <div className="mt-3 flex flex-col space-y-3">
        <span onClick={() => handlePriceChange(0, 5)} className={styles.prices}>
          under $5
        </span>
        <span
          onClick={() => handlePriceChange(5, 10)}
          className={styles.prices}
        >
          $5 - $10
        </span>
        <span
          onClick={() => handlePriceChange(10, 50)}
          className={styles.prices}
        >
          $10 - $50
        </span>
        <span
          onClick={() => handlePriceChange(50, 100)}
          className={styles.prices}
        >
          $50 & above
        </span>
      </div>
      <br />
      <Ranges minPrice={minPrice} maxPrice={maxPrice} />
    </div>
  )
}

export default PriceRange

const Ranges = ({ minPrice, maxPrice }) => {
  return (
    <Space>
      <InputNumber
        value={minPrice}
        onChange={(value) => handlePriceChange(value, maxPrice)}
        formatter={(value) => `${value}`}
      />
      <InputNumber
        value={maxPrice}
        onChange={(value) => handlePriceChange(minPrice, value)}
        formatter={(value) => `${value}`}
      />
    </Space>
  )
}
