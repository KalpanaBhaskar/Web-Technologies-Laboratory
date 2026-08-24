import React from 'react'

function Button({ label, onClick, color }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, color: 'white', marginRight: '5px', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
    >
      {label}
    </button>
  )
}

export default Button
