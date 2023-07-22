
import './App.css';
import Navbar from './Navbar';
import Navori from './Navori';
import Slider from './Slider';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import banner from "./data.json";
import data from "./data.json";
import Offers from "./Offers";
import Heading from './Heading';
import StarProduct from './StarProduct';
import Hotmen from './Hotmen';
import HotAccessories from './HotAccessories'
import Productreviews from './Productreviews';
import Videos from './Videos'
import Banner from './Banner'
import Footer from './Footer'
import Navoption from './Navoption'
function App() {
  return (
    <Router className="App">
      <Navbar />
      
      <Navori />
      <Navoption miPhones={data.miPhones} redmiPhones={data.redmiPhones} laptop={data.laptop} tv={data.tv} lifestyle={data.fitnessAndLifeStyle } home={data.home} audio={data.audio} accessories={data.accessories}></Navoption>
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="Star Product" />
      <StarProduct star={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <Hotmen />

      <Routes>
        <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}>
        </Route>
        <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}></Route>
        <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}>
        </Route>
        <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />}>

        </Route>

        <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}>
        </Route>
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
<Productreviews productReviews={data.productReviews}/>
<Heading text="VIDEOS" />
<Videos videos={data.videos}/>
<Heading text="IN THE PRESS" />
<Banner banner={data.banner}></Banner>
<Footer footer={data.footer}></Footer>
    </Router>
  );
}

export default App;
