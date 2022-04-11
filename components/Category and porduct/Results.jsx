import React from 'react'

import { products } from '../../lib/ProductData'
import ProductComponent from './ProductComponent'

const styles = {
  heading: 'text-3xl font-medium  mb-4',
}

const Results = ({ category, rating, minPrice, maxPrice }) => {
  console.log({ category, pr: products[category] })
  const filterProduct = products[category]?.filter((product) => {
    return (
      (product.rating >= rating &&
        product.price >= minPrice &&
        product.price <= maxPrice) ||
      product.price <= 2000
    )
  })
  console.log({ filterProduct })

  return (
    <div>
      <h1 className={styles.heading}>Results</h1>
      {filterProduct?.map((product) => {
        return (
          <div key={product.id}>
            <ProductComponent product={product} />
          </div>
        )
      })}
    </div>
  )
}

export default Results
