import React from 'react'
import './Navcard.css'
const Navcard = ({name,price,image,index}) => {
  return (
    <div className='NavCard'>
 <img src={image} alt={`${index} phone`} />
     <p>{name}</p>
     <span>{price}</span>
    </div>
  )
}

export default Navcard
