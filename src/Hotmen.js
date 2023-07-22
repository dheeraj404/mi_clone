import React from 'react'
import { Link } from 'react-router-dom'
import "./Hotmen.css"
const Hotmen = () => {
  return (
    <div className='home'>
     <Link className='hot' to="/music">Music Store</Link>
     <Link className='hot' to="/smartdevice">Smart Device</Link>
     <Link className='hot' to="/home">Home</Link>
     <Link className='hot' to="/lifestyle">Lifestyle</Link>
     <Link className='hot' to="/Mobile">Mobile</Link>
    </div>
  )
}   

export default Hotmen
