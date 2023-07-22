import React from 'react'
import "./StarProduct.css"
const StarProduct = ({star}) => {
  return (
    <div className='starproduct'>
      <div className='pro1'>
        <a href={star[0].url}> <img src={star[0].image} alt='pro'/></a>
      </div>
      <div className='pro2'>
        <a href={star[1].url}> <img src={star[1].image} alt='pro'/></a>
        <a href={star[2].url}> <img src={star[2].image} alt='pro'/></a>
        <a href={star[3].url}> <img src={star[3].image} alt='pro'/></a>
      </div>
    </div>
  )
}

export default StarProduct
