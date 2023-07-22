import React from 'react'
import "./Heading.css"
const Heading = ({text}) => {
  return (
    <div className='heading'>
      <div className='div1'></div>
      <p>{text}</p>
      <div className='div2'></div>
    </div>
  )
}

export default Heading
