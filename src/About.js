import React, { Component } from "react";
 
class About extends Component {
  render() {
    return (
             <>
                <div className="img_card">
                    <div className="row justify-content-center">
                        <div className="paper col-10 img_section" >
                            <div className="aboutBG"></div>
                        </div>

                        <div className="mt30 col-lg-10 content_section">
                            <div className="content_box">
                                <div className="content_box_inner">
                                    <div>
                                        <h3 className="aboutH3">
                                            Just a Few Words About Me
                                        </h3>
                                        <p>
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?                                        </p>
                                        <div className="pt50">
                                            <div className="row justify-content-center">
                                                <div className="col-12 col-md-4">
                                                    <hr></hr>
                                                    <div className="inset counter_box">
                                                        <span className="counter">12</span>
                                                        <h4>Years of experience</h4>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                <hr></hr>
                                                    <div className="inset counter_box">
                                                        <span className="counter">257</span>
                                                        <h4>happy clients</h4>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                <hr></hr>
                                                    <div className="inset counter_box">
                                                        <span className="counter">192</span>
                                                        <h4>projects completed</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="paper col-lg-10 testimonial_carousel mt50 mb100">

                                        <div className="testimonial_box">
                                            <p>
                                                <img src="assets/img/portfolio/101.jpg" alt="ali-najian"/>
                                            </p>
                                            
                                        </div>

                                        <div className="testimonial_box">
                                            <p>
                                                <img src="assets/img/portfolio/17.jpg" alt="ali-najian"/>
                                            </p>
                                            
                                        </div>

                                        <div className="testimonial_box">
                                            <p>
                                                <img src="assets/img/portfolio/23.jpg" alt="ali-najian"/>
                                            </p>
                                            
                                        </div>

                                        <div className="testimonial_box">
                                            <p>
                                                <img src="assets/img/portfolio/40.jpg" alt="ali-najian"/>
                                            </p>
                                            
                                        </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                               </>
    );
  }
}
 
export default About;