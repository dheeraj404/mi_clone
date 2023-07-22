import React from 'react'
import ProductReviewcard from "./ProductReviewcard.js"
import './Productreviews.css'

const Productreviews = ({productReviews}) => {
    return (
        <div className="ProductReviews">
           
        {productReviews.map((item,index)=>(

<ProductReviewcard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image} />


        ))}
             
        </div>
    )
}

export default Productreviews