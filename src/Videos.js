import React from 'react'
import Videocard from './Videocard'
import './Videos.css'
const Videos = ({videos}) => {
  return (
    <div className='videos'>
      {videos.map((item,index)=>(
        <Videocard index={index} image={item.image} name={item.name} />
      ))}
    </div>
  )
}

export default Videos
