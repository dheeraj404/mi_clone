import React from 'react'
import "./Footer.css"
import './fo.css'
const restart=<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M451-122q-123-10-207-101t-84-216q0-77 35.5-145T295-695l43 43q-56 33-87 90.5T220-439q0 100 66 173t165 84v60Zm60 0v-60q100-12 165-84.5T741-439q0-109-75.5-184.5T481-699h-20l60 60-43 43-133-133 133-133 43 43-60 60h20q134 0 227 93.5T801-439q0 125-83.5 216T511-122Z"/></svg>;
const sil=<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-81q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Zm0-62q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143Zm0-337Z"/></svg>;
const map=<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m612-120-263-93-179 71q-17 9-33.5-1T120-173v-558q0-13 7.5-23t19.5-15l202-71 263 92 178-71q17-8 33.5 1.5T840-788v565q0 11-7.5 19T814-192l-202 72Zm-34-75v-505l-196-66v505l196 66Zm60 0 142-47v-512l-142 54v505Zm-458-12 142-54v-505l-142 47v512Zm458-493v505-505Zm-316-66v505-505Z"/></svg>;
const youtube=<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="100px" height="100px"><path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"/></svg>
const ti=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>;
const insta=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
const fb=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>

const Footer = ({footer}) => {
  return (
    <>
    <div className='pre'>
      <div>
        {restart}
        <p><b>Hassle free replacment</b> <br></br> 10-day easy replacment policy on mi.com</p>
      </div>
      <div>
        {sil}
        <p><b>100% secure payment</b> <br></br> We support cards ,Wallets,EMI and COD </p>
      </div>
      <div>
        {map}
        <p><b>Vast service network</b> <br></br> 1000 Mi services-center across 600 Cities </p>
      </div>
    </div>
    <div className='presecond'>
      <div>
        <h1>LET'S STAY IN TOUCH</h1>
        <span>Get Updates on Sales and more</span>
      </div>
      <div>
       <input type='text' placeholder='Enter Email  Address'/>
        <span>Thanks. You are on our emil list for special offers.</span>
      </div>
      <div>
        <h1>Follow MI</h1>
        <span>We Want to hear from You</span>
      </div>
      <div>
     {fb}
     {insta}
       {ti}
       {youtube}
      </div>
    </div>
    <div className="footer">
                  <div> 
                     <p> SUPPORT</p>
                      {footer.support.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                 <p> SHOP AND LEARN</p>
                  {footer.shopAndLearn.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name} </a>

                      ))}

                  </div>
                  <div>
                   <p> RETAIL STORE</p>
                    {footer.retailStore.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                           <p>  ABOUT</p>
                             {footer.aboutUS.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                 <p> CONTACT US</p>
                  {footer.contactUs.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                      <div>Chat with our Virtual AI Bot(24/7 Live Agent Support)</div><button>CHAT NOW</button>
                  </div>


                  
        </div>
        <div className="footerBorder">
       <div> Copyright © 2010 - 2021 Xiaomi. All Rights Reserved</div>
        </div>
    </>
  )
}

export default Footer
