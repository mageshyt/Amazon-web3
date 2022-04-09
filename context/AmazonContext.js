import { useState } from 'react'
import { createContext } from 'react'

export const AmazonContext = createContext()

export const AmazonProvider = ({ children }) => {
  //Track category
  const [category, setCategory] = useState('a')

  return (
    <AmazonContext.Provider value={{ category, setCategory }}>
      {children}
    </AmazonContext.Provider>
  )
}
