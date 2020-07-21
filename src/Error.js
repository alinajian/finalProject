import React, { Component } from "react";
 
class Error extends Component {
  render() {
    return (
    
        <div className="Err body_block pb100">

    <section id="fof" className="clear">
      <div className="positioned">
        <div className="hgroup">
          <h1 className="Err">!</h1>
          <h2 className="Err">404</h2>
            <h2 className="Err">Error</h2>
        </div>
        <p>The Page You Requested Could Not Be Found On WebSite</p>
        <p>Go Back To The Previous Page OR Visit Homepage</p>
      </div>
      
    </section>
    <div id="fof">
    <a href='/'><div className="btn btn-dark btn-rounded menuActive">Home page</div></a>

    </div>
    <div id="fof">
      <a href='javascript:history.go(-1)'><div className="btn btn-rounded menuActive">Previous Page</div></a>

    </div>
   
</div>
    );
  }
}
 
export default Error;

