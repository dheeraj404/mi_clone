import React from 'react'
import './ProductReviewcard.css'
const ProductReviewcard = ({image,price,name,review}) => {
  return (
    <div className='card'>
      <img src={image} alt='img'/>
      <h5>{review}</h5>
      <div className='sec'>
      <span>{name}</span>
      <b> {price}</b>
      </div>
    </div>
  )
}

export default ProductReviewcard
