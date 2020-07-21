import React, { Component } from "react";


class Home extends Component {
  render() {
    return (
        <div id="header">
             <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
             <div className="carousel-inner">
               <div className="carousel-item active">
                 <img src="assets/img/bg/slider2.jpg" className="d-block w-100 noRadius" alt="Graphic Designer"/>
                 <div className="title">
                   <h1 className="animated slideInDown">Graphic Designer</h1>
                   <h2 className="animated slideInLeft">photoshop & illustrator</h2>
                 </div>
               </div>
               <div className="carousel-item">
                 <img src="assets/img/bg/slider3.jpg" className="d-block w-100 noRadius" alt="Web Developer"/>
                 <div className="title">
                   <h1 className="animated fadeInRight">Web Developer</h1>
                   <h2 className="animated fadeInLeft">js & node js & react</h2>
                 </div>
               </div>
               <div className="carousel-item">
                 <img src="assets/img/bg/slider1.jpg" className="d-block w-100 noRadius" alt="Phographer"/>
                 <div className="title">
                   <h1 className="animated slideInUp">Phographer</h1>
                   <h2 className="animated slideInRight">photography & edit</h2>
                 </div>
               </div>
               <div className="carousel-item">
                 <img src="assets/img/bg/slider4.jpg" className="d-block w-100 noRadius" alt="Teaser Maker"/>
                 <div className="title">
                   <h1 className="animated fadeInRight">Teaser Maker</h1>
                   <h2 className="animated fadeInLeft">After effect & Premiere</h2>
                 </div>
               </div>
             </div>
           </div>
           </div>
    );
  }
}
 
export default Home;