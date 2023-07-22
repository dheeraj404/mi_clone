import React,{useState,useEffect} from 'react'
import Navcard from './Navcard.js'
import './Navoption.css'
const Navoption = ( {miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {

   const [miPhoneToggle, setMiPhoneToggle] = useState(false);
   const [redmiPhoneToggle,setRedmiPhoneToggle] = useState(false);
   const [tvToggle,setTvToggle] = useState(false);
   const [laptopToggle,setLaptopToggle] = useState(false);
   const [fitnessToggle,setFitnessToggle] = useState(false);
   const [homeToggle,setHomeToggle] = useState(false);
   const [audioToggle,setAudioToggle] = useState(false);
   const [accessoriesToggle,setAccessoriesToggle] = useState(false);
 

   useEffect(() => {
     
    if(window.location.pathname === "/miphones"){
        return   setMiPhoneToggle(true)
       }
     if(window.location.pathname === "/redmiphones"){
        return   setRedmiPhoneToggle(true)
       }
       if(window.location.pathname === "/tv"){
        return   setTvToggle(true)
       }
       if(window.location.pathname === "/laptops"){
        return   setLaptopToggle(true)
       }
       if(window.location.pathname === "/Lifestyle"){
        return  setFitnessToggle(true)
       }
       if(window.location.pathname === "/Home"){
        return  setHomeToggle(true)
       }
       if(window.location.pathname === "/Audio"){
        return  setAudioToggle(true)
       }
       
       if(window.location.pathname === "/accessories"){
        return  setAccessoriesToggle(true)
       }

       
   }, [])

    return (
        <div className="navOptions"> 

            {miPhoneToggle?   miPhones.map((item)=>(

                 < Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
              )) : null }
            
      
            {redmiPhoneToggle?   redmiPhones.map((item)=>(

               < Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     

            {tvToggle ?   tv.map((item)=>(

                < Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }

           {laptopToggle ?   laptop.map((item)=>(

              < Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     
   

            {fitnessToggle ?   fitnessAndLifeStyle.map((item)=>(

              < Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     

               {homeToggle ?   home.map((item)=>(

                   < Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
              )) : null }
     
     

            {audioToggle ?   audio.map((item)=>(

             < Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null }
     

            {accessoriesToggle ?   accessories.map((item)=>(

                < Navcard name={item.name} price={item.price} image={item.image} key={item.image} />
             )) : null }
     
        </div>
    )
}

export default Navoption