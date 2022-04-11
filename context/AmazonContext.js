import { useState } from 'react'
import { createContext } from 'react'

export const AmazonContext = createContext()

export const AmazonProvider = ({ children }) => {
  //Track category
  const [category, setCategory] = useState('a')
  //! track selected product
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <AmazonContext.Provider
      value={{ category, setCategory, selectedProduct, setSelectedProduct }}
    >
      {children}
    </AmazonContext.Provider>
  )
}
