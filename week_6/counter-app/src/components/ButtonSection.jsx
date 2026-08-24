import React from 'react'
import Button from './Button'

function ButtonSection({ onIncrement, onDecrement }) {
  return (
    <div>
      <Button label="Increment" onClick={onIncrement} color="green" />
      <Button label="Decrement" onClick={onDecrement} color="red" />
    </div>
  )
}

export default ButtonSection
