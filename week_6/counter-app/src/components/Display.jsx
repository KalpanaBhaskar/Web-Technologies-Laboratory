import React from 'react'
import Header from './Header'
import Counter from './Counter'

function Display({ count }) {
  return (
    <div>
      <Header />
      <Counter count={count} />
    </div>
  )
}

export default Display
