import React from 'react'
import "./Navori.css"
import {Link} from "react-router-dom"
const logo="https://i01.appmifile.com/webfile/globalimg/events/2018/newtemp/orange-logo.png"
const Searchicon=<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z"/></svg>
const Navori = () => {
  return (
<div className='main'>
<div className='logo'>
      <Link to="/dsd">
        <img className='log' src={logo} alt='not' />
      </Link>
      <a  className="navlink" href="/miphones">Mi Phones</a>
           <a   className="navlink"  href="/redmiphones">Redmi Phones</a>
           <a   className="navlink" href="/tv">TV</a>
           <a   className="navlink" href="/laptops">Laptops</a>
           <a   className="navlink" href="/Lifestyle">Fitness & Lifestyle</a>
           <a  className="navlink" href="/Home">Home</a>
           <a   className="navlink" href="/Audio">Radio</a>
           <a   className="navlink" href="/accessories">Accessories</a>
      <div className='serach'>
        <input type='text' name='Search' placeholder='Search products'/>
      
      </div>
      {
            Searchicon 
        }
       
    </div>
</div>
  )
}

export default Navori
