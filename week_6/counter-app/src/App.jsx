import React, { useState } from 'react'
import Display from './components/Display'
import ButtonSection from './components/ButtonSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '200px' }}>
      <Display count={count} />
      <ButtonSection
        onIncrement={() => setCount(count + 1)}
        onDecrement={() => setCount(count - 1)}
      />
    </div>
  )
}

export default App
