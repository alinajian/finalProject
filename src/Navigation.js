import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
 
class Navigation extends Component {
  render() {
    return (
      <nav>    
      <ul className="mainmenu">
      <li className="paperB liMenu"><NavLink to="/" exact activeClassName="menuActive">Home</NavLink></li>
      <li className="paperB liMenu"><NavLink to="./About" activeClassName="menuActive">About</NavLink></li>
      <li className="paperB liMenu"><NavLink to="/Services" activeClassName="menuActive">Services</NavLink></li>
      <li className="paperB liMenu"><input type="checkbox" id="products"/>
            <label for="products">Portfolio</label>
            <ul className="submenu">
              <li><NavLink to="/Webdesign" activeClassName="menuActive">WebSite Design</NavLink></li>
              <li><NavLink to="/Portfolio" activeClassName="menuActive">Graphic Design</NavLink></li>
              <li className="pb10"><NavLink to="/Teaser" activeClassName="menuActive">Making Teaser</NavLink></li>
            </ul>
          </li>
          <li className="paperB liMenu"><NavLink to="/Blog" activeClassName="menuActive">Blog</NavLink></li>
          <li className="paperB liMenu"><NavLink to="/contact" activeClassName="menuActive">Contact</NavLink></li>
    </ul>
    </nav>
    );
  }
}
 
export default Navigation;