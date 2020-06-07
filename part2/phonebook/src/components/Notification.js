import React from 'react'

const Notification = ({ text, color }) => {
  const msgStyle = {
    color,
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
  return (
    <div style={ msgStyle }>
      { text }
    </div>
  )
}

export default Notification