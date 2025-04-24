import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/navbar';
import About from './Components/about';
import Portfolio from './Components/portfolio';
import Contact from './Components/contact';
import Weddings from './Components/weddings';
import Africa from './Components/africa';
import Asia from './Components/asia';
import Europe from './Components/europe';
import Casual from './Components/casual';
import Corporate from './Components/corporate';
import Nature from './Components/nature';
import Animals from './Components/animals';
import Eventcorporate from './Components/eventcorporate';
import Social from './Components/social';
import Food from './Components/food';
// import ImageSlider from './Components/ImageSlider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
       <Navbar />
      <div>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/about'} component={About} />
          <Route path={'/portfolio'} component={Portfolio} />
          <Route path={'/contact'} component={Contact} />
          <Route path={'/weddings'} component={Weddings} />
          <Route path={'/africa'} component={Africa} />
          <Route path={'/asia'} component={Asia} />
          <Route path={'/europe'} component={Europe} />
          <Route path={'/casual'} component={Casual} />
          <Route path={'/corporate'} component={Corporate} />
          <Route path={'/nature'} component={Nature} />
          <Route path={'/animals'} component={Animals} />
          <Route path={'/eventcorporate'} component={Eventcorporate} />
          <Route path={'/social'} component={Social} />
          <Route path={'/food'} component={Food} />
        </Switch>
      </div>
      
    </Router>
  )
}

// function App() {

//   return (
    
//   );
// }

// const backgroundStyle = {
  // backgroundImage: `url(/images/Nature/1.jpg)`,
  // height: '91vh',
  // backgroundSize: 'cover'

  /* Full height */
  // height: '100%', 

  /* Center and scale the image nicely */
  // backgroundPosition: 'center',
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'cover',
// }

const Home = () => {
  // const slides = [
  //   {src: "/images/Events/SocialEvents/1.jpg", title: 'SocialEvents 1'},
  //   {src: "/images/Events/SocialEvents/2.jpg", title: ' 2'}

  // ]
  return(
    <>
      <div>
    <img className={'img-responsive mx-auto d-block'} width={120} src={'/images/logo_alban.JPG'} alt={'Logo Alban'} /> 
    <div id={"demo"} className={"carousel slide"} data-ride={"carousel"}>
      <ul className={"carousel-indicators"}>
        <li data-target={"#demo"} data-slide-to={"0"} className={"active"}></li>
        <li data-target={"#demo"} data-slide-to={"1"}></li>
        <li data-target={"#demo"} data-slide-to={"2"}></li>
      </ul>
      <div className={"carousel-inner"}>
        <div className={"carousel-item active"}>
          <img className={'d-block mx-auto'} src={"/images/Weddings/15.jpg"} alt={"Los Angeles"} />
          <div className={"carousel-caption"}>
            <h3>Weddings</h3>
            {/* <p>Great Day.</p> */}
          </div>   
        </div>
        <div className={"carousel-item"}>
          <img className={'d-block mx-auto'} src={"/images/Animals/10.jpg"} alt={"Chicago"} />
          <div className={"carousel-caption"}>
            <h3>Animals</h3>
            {/* <p>Thank you, Chicago!</p> */}
          </div>   
        </div>
        <div className={"carousel-item"}>
          <img className={'d-block mx-auto'} src={"/images/Travels/Europe/16.jpg"} alt={"New York"} />
          <div className={"carousel-caption"}>
            <h3>Travels</h3>
            {/* <p>Europe</p> */}
          </div>   
        </div>
      </div>
      <a className={"carousel-control-prev"} href={"#demo"} data-slide={"prev"}>
        <span className={"carousel-control-prev-icon"}></span>
      </a>
      <a className={"carousel-control-next"} href={"#demo"} data-slide={"next"}>
        <span className={"carousel-control-next-icon"}></span>
      </a>
    </div>
  </div>
      {/* <h1 className={'text-center'}>Slide</h1>
      <ImageSlider slides={slides} /> */}
      {/* <div className='hero-container'>
      </div> */}
    </>
  )
}

// const Home = () => (
//   //https://www.ibrahima-ndaw.com/blog/react-fullscreen-slider/
//   /*** Slide show */

//   // <div className='home'>
//   //   <img className='img-fluid mx-auto d-block' src='/images/Nature/1.jpg' alt='Nature' />
//   // </div>
//   <div className='hero-container'>
//     {/* <Navbar /> */}
//   </div>
// )

export default App;