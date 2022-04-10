import React from 'react'

import { books } from '../../lib/ProductData'

const styles = {
  heading: 'text-2xl font-bold text-center mb-4',
}
const Results = () => {
  console.log(books)
  return (
    <div>
      <h1 className={styles.heading}>Results</h1>
    </div>
  )
}

export default Results
