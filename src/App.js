import React, { Component } from "react";
import './App.css';
import {
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Webdesign from "./Webdesign";
import Portfolio from "./Portfolio";
import Teaser from "./Teaser";
import Blog from "./Blog";
import Error from "./Error";


class Menu extends Component {
  render() {
    return (
      // forceRefresh={true}
      <BrowserRouter forceRefresh={true}> 
    <a className="menu-btn" href="javascript:void(0)">
        <i className="ion ion-grid"></i>
    </a>
        <div className="col-lg-2 col-md-3 col-12 menu_block"> 

            <div className="logo_box">
                <a href="/">
                    <img  src="assets/img/Logo.png" alt="Ali.NajiaN"/>
                </a>
            </div>

            <Navigation/>

            <div className="side_menu_bottom">
                <div className="side_menu_bottom_inner">
                    <ul className="social_menu">
                        <li>
                            <a href="https://www.pinterest.ca/ali_najian/"> <i className="paperB iconPading ion ion-social-pinterest"></i> </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/ali.najian69/"> <i className="paperB iconPading ion ion-social-facebook"></i> </a>
                        </li>
                        <li>
                            <a href="https://github.com/alinajian"> <i className="paperB iconPading ion ion-social-github"></i> </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ali.najian"> <i className="paperB iconPading ion ion-social-instagram"></i> </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/ali-najian-704a4a1a1/"> <i className="paperB iconPading ion ion-social-linkedin"></i> </a>
                        </li>
                    </ul>
                    <div className="copy_right">
                        <p className="copyright">Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved - This WebSite made By <a href="https://www.instagram.com/ali.najian/" target="_blank">Ali.NajiaN</a></p>
                    </div>
                </div>
            </div>
        </div>
         
        <div className="col-lg-10 col-12 body_block  align-content-center" >
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/About" component={About}/>
            <Route path="/Services" component={Services}/>
            <Route path="/Webdesign" component={Webdesign}/>
            <Route path="/Portfolio" component={Portfolio}/>
            <Route path="/Teaser" component={Teaser}/>
            <Route path="/Blog" component={Blog}/>
            <Route path="/contact" component={Contact}/> 
            <Route path component={Error}/>
            </Switch>
          </div>
              
      </BrowserRouter>
    );
  }
}


  class App extends React.Component {
    render() {
      return (
        <div className="rowC">
        <Menu/>
          </div>
      )
    }
  }

export default App;
