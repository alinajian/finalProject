import React, { Component } from "react";
 
class Contact extends Component {
    
  render() { 
    return (
      <div className="img_card">
      <div className="row justify-content-center">
      <div className="paper col-10 img_section mapHeight" >
      <iframe  className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4087.559590457268!2d-75.36652060478863!3d45.2668236997626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce77d45ae1228d%3A0x48e365b35666b342!2sTwilight%20Ave%2C%20Russell%2C%20ON%2C%20Canada!5e0!3m2!1sen!2s!4v1584056316356!5m2!1sen!2s" width="1500" height="500" frameborder="0"  tabindex="0"></iframe>
      </div>
          
          <div className="mt30 col-lg-10 content_section content_box content_box_inner">
                          <h2 className="contactH2">
                              Get in touch with Me
                          </h2>
                          <p>
                          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?                          </p>
                          <hr></hr>
                          <ul className="social_contact">
                              <li>
                                  <a href="https://www.pinterest.ca/ali_najian/"> <i className="paper myIcon ion ion-social-pinterest"></i> </a>
                              </li>
                              <li>
                                  <a href="https://www.facebook.com/ali.najian69/"> <i className="paper myIcon ion ion-social-facebook"></i> </a>
                              </li>
                              <li>
                                  <a href="https://github.com/alinajian"> <i className="paper myIcon ion ion-social-github"></i> </a>
                              </li>
                              <li>
                                  <a href="https://www.instagram.com/ali.najian"> <i className="paper myIcon ion ion-social-instagram"></i> </a>
                              </li>
                              <li>
                                  <a href="https://www.linkedin.com/in/ali-najian-704a4a1a1/"> <i className="paper myIcon ion ion-social-linkedin"></i> </a>
                              </li>
                          </ul>
                          <hr></hr>
                          <div className="mt30 row justify-content-center">
                              <div className="form-control">
                                  <form className="mb100" id="contactform" action="" method="post">
                                      <p className="form-element">
                                          <input id="name" type="text" name="name" placeholder="Name:" />
                                      </p>
                                      <p className="form-element">
                                          <input id="email" type="text" name="email" placeholder="Email:" />
                                      </p>
                                      <p className="form-element">
                                          <input id="phone" type="text" name="phone" placeholder="Phone:" />
                                      </p>
                                      <p className="form-element">
                                          <select id="order" name="order" className="contactSelect">
                                              <option value="value 1" >None Order</option>
                                              <option value="value 2">CV Card</option>
                                              <option value="value 3">Brand Identity</option>
                                              <option value="value 4">Logo</option>
                                              <option value="value 5" >Poster</option>
                                              <option value="value 6">Catalog</option>
                                              <option value="value 7">Flyer</option>
                                              <option value="value 8">Roll Up</option>
                                              <option value="value 9" >Infographic</option>
                                              <option value="value 10">Web UI/UX</option>
                                              <option value="value 11">App UI/UX</option>
                                              <option value="value 12">Icons</option>
                                              <option value="value 1" >2D Character</option>
                                              <option value="value 2">Make Teaser</option>
                                              <option value="value 3">SEO Content</option>
                                              <option value="value 4">Photography & Edit</option>
                                              </select>
                                      </p>
                                      <p className="form-element">
                                          <select id="plan" name="plan" className="contactSelect">
                                              <option value="value 1" >None Plan</option>
                                              <option value="value 2">Plan 1</option>
                                              <option value="value 3">Plan 2</option>
                                              <option value="value 4">Plan 3</option>
                                              </select>
                                      </p>
                                      <p className="form-element">
                                          <textarea id="message" name="message" placeholder="Your Message:"></textarea>
                                      </p>
                                      <p className="form-element">
                                          <input id="submit" type="button" value="send" />
                                      </p>
                                      <div id="success" className="successPM"></div>
                                  </form>
                              </div>
                            
                          </div>
                  </div>
      </div>
  </div>
    );
  }
}
 
export default Contact;