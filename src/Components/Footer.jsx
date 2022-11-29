import React from "react";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot"> 
          <div className="topfoot">
            <div className="topdiv">
              <div className="one">
                <div className="topfooticon">
                  <i className="fa-solid fa-truck-fast"></i>
                </div>
                <div className="topfoottext">
                  <h3>Pulsuz Çatdırılma</h3>
                  <p>Şəhərdaxili</p>
                </div>
              </div>
              <div className="one">
                <div className="topfooticon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="topfoottext">
                  <h3>Məlumat Üçün</h3>
                  <p>+375 60 02</p>
                </div>
              </div>
              <div className="one">
                <div className="topfooticon">
                  <i className="fa-solid fa-headphones"></i>
                </div>
                <div className="topfoottext">
                  <h3>7/24 Xidmətinizdə</h3>
                  <p>Texniki Dəstək</p>
                </div>
              </div>
              <div className="one">
                <div className="topfooticon">
                  <i className="fa-solid fa-right-left"></i>
                </div>
                <div className="topfoottext">
                  <h3>Mübadilələr</h3>
                  <p>Asan Qaytarılma</p>
                </div>
              </div>
            </div>
          </div>
          <div className="otherfoot">
            <div className="bottomfoot">
              <div className="bottomdiv">
                <div className="bottomtwo">
                  <div className="bottomlogo">
                    <NavLink to="/">
                      <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/472/7626693472_f489d8d0-9af0-4f8e-8e0e-fc39e87d9301.png?cb=1658791450" />
                    </NavLink>
                  </div>
                  <div className="two">
                    <div className="bottomicon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="bottomtext">
                      <p> Yasamal r-nu, Həsənbəy Zərdabi</p>
                    </div>
                  </div>
                  <div className="two">
                    <div className="bottomicon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="bottomtext">
                      <p>055 443 56 19</p>
                    </div>
                  </div>
                  <div className="two">
                    <div className="bottomicon">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="bottomtext">
                      <p>beautyshop@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="bottomtwo">
                  <h1>
                    <span>Məlumat</span>
                  </h1>
                  <ul>
                    <li>
                      <NavLink to="/aboutus">Haqqımızda</NavLink>
                    </li>
                    <li>
                      <NavLink to="/faq">Tez-tez verilən suallar</NavLink>
                    </li>
                    <li>
                      <NavLink to="/cargo">Çatdırılma xidməti</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="bottomtwo">
                  <h1>
                    <span>Kömək</span>
                  </h1>
                  <ul>
                    <li>
                      <NavLink to="/contact">Əlaqə</NavLink>
                    </li>
                    <li>
                      <NavLink to="/faq">Suallarınız</NavLink>
                    </li>
                    <li>
                      <NavLink to="/cargo">Çatdırılma detalları</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

  /* <div className="container">
        <ul className="flex">
      
        </ul>
      </div> */

     /*    */


