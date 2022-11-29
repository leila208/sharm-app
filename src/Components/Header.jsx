import React from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
function Header(props) {
  // const Header = () => {
    // Sticky Menu Area
    useEffect(() => {
      window.addEventListener("scroll", isSticky);
      return () => {
        window.removeEventListener("scroll", isSticky);
      };
    });
    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
      const header = document.querySelector(".header-section");
      const scrollTop = window.scrollY;
      scrollTop >= 350
        ? header.classList.add("is-sticky")
        : header.classList.remove("is-sticky");
  };
  const [istoggled, setIstoggled] = useState(false);
  return (
    <>
      <header className="header-section d-none d-xl-block">
        <Modal />
        {/* <div className="mobile-menu"> */}

        <div className={istoggled ? "mobile-menu mobile-menu-open" : ""}>
            <ul className="mobile-menu">
              <button
                id="finish"
                onClick={() => {
                  setIstoggled(!istoggled);
                }}
              >
                &times;
              </button>
              <li>
                <NavLink to="category/make-up">Makyaj</NavLink>
              </li>
              <li>
                <NavLink to="category/skin-care">Cild Baxımı</NavLink>
              </li>
              <li>
                <NavLink to="category/hair-care">Saç</NavLink>
              </li>
              <li>
                <NavLink to="category/tools">Fırça və aksesuarlar</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Əlaqə</NavLink>
              </li>
              <li>
                <NavLink to="/aboutus">Haqqımızda</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Bloq</NavLink>
              </li>
            </ul>
          </div>
        
        {/* </div> */}
        {/* <div className="container"> */}
        <div className="container">
          {/* <div className="header"> */}
          <div className="navbar">
            <div className="logo">
              <NavLink to="/">
                <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/374/7613382374_770d2ee7-43e4-43dc-9a87-892daa6f62c1.png?cb=1658422334" />
              </NavLink>
            </div>
            <ul className="all">
              <li className="open">
                <NavLink to="category/make-up">Makyaj</NavLink>
                <ul className="dropdown ">
                  <ul className="leftdrop">
                    <img src="https://images.unsplash.com/photo-1560129986-baba295cf72c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=458&q=80" />
                  </ul>
                  <ul className="rightdrop">
                    <ul className="down ">
                      <NavLink to="subcategory/üz">Üz</NavLink>
                      <li>
                        <NavLink to="variant/bronzer">Bronzer</NavLink>
                      </li>
                      <li>
                        <NavLink to="variant/bb crem">BB Krem</NavLink>
                      </li>
                      <li>
                        <NavLink to="variant/tonal crem">Tonal Krem</NavLink>
                      </li>
                      <li>
                        <NavLink to="variant/cc crem">CC Krem</NavLink>
                      </li>
                      <li>
                        <NavLink to="variant/pudra">Pudra</NavLink>
                      </li>
                      <li>
                        <NavLink to="variant/highlighter">Highlighter</NavLink>
                      </li>
                    </ul>
                    <ul className="down">
                      <NavLink to="subcategory/dodaqlar">Dodaqlar</NavLink>
                      <li>
                        <NavLink to="variant/lipstick">Dodaq boyası</NavLink>
                      </li>
                      <li>
                        <NavLink to="variant/lipstick">
                          Dodaq parıldadıcısı
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="variant/lipgloss">
                          Dodaq balmı və skrabı
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="variant/lipstick">Dodaq qələmi</NavLink>
                      </li>
                    </ul>
                    <ul className="down">
                      <NavLink to="subcategory/gözlər">Gözlər</NavLink>
                      <li>
                        <NavLink to="variant/eyeshadow">Göz kölgələri</NavLink>
                      </li>
                      <li>
                        <NavLink to="variant/mascara">Tuşlar</NavLink>
                      </li>
                      <li>
                        <NavLink to="variant/eyeliner">Layner</NavLink>
                      </li>
                    </ul>
                  </ul>
                </ul>
              </li>
              <li className="open">
                <NavLink to="category/skin-care">Cild Baxımı</NavLink>
                <ul className="dropdown ">
                  <ul className="leftdrop">
                    <img src="https://images.unsplash.com/photo-1608068811588-3a67006b7489?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
                  </ul>
                  <ul className="rightdrop">
                    <ul className="down brown">
                      <NavLink to="subcategory/normal">Normal</NavLink>
                      <li>
                        <NavLink to="variant/cleansers">
                          Üz Təmizləyiciləri
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="variant/serumlar">Serumlar</NavLink>
                      </li>
                      <li>
                        <NavLink to="variant/nemlendirici">
                          Nəmləndiricilər
                        </NavLink>
                      </li>
                    </ul>
                    <ul className="down brown">
                      <NavLink to="subcategory/quru">Quru</NavLink>
                    </ul>
                    <ul className="down brown">
                      <NavLink to="subcategory/həssas">Həssas</NavLink>
                    </ul>
                  </ul>
                </ul>
              </li>
              <li className="open">
                <NavLink to="category/hair-care">Saç</NavLink>
                <ul className="dropdown ">
                  <ul className="leftdrop">
                    <img src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpciUyMHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                  </ul>
                  <ul className="rightdrop">
                    <ul className="down brown">
                      <NavLink to="subcategory/maskalar">Saç Maskaları</NavLink>
                      <li>
                        <NavLink to="variant/oily mask">Yağlı saçlar</NavLink>
                      </li>
                      <li>
                        <NavLink to="variant/dry mask">Quru saçlar</NavLink>
                      </li>
                    </ul>
                    <ul className="down brown">
                      <NavLink to="subcategory/şampunlar">
                        Saç Şampunları
                      </NavLink>
                      <li>
                        <NavLink to="variant/oily hair">Yağlı saçlar</NavLink>
                      </li>
                      <li>
                        <NavLink to="variant/dry hair">Quru saçlar</NavLink>
                      </li>
                    </ul>
                    <ul className="down">
                      <NavLink to="subcategory/hair conditioners">
                        Saç Kondisionerləri
                      </NavLink>
                    </ul>
                  </ul>
                </ul>
              </li>
              <li className="open">
                <NavLink to="category/tools">Fırça və aksesuarlar</NavLink>
                <ul className="dropdown">
                  <ul className="leftdrop">
                    <img src="https://images.unsplash.com/photo-1523654881152-1f1f16389dc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
                  </ul>
                  <ul className="rightdrop">
                    <ul className="down">
                      <NavLink to="subcategory/fırçalar">Fırçalar</NavLink>
                    </ul>
                    <ul className="down">
                      <NavLink to="subcategory/digər">Alətlər</NavLink>
                    </ul>
                  </ul>
                </ul>
              </li>
              {/* <li className="open">
                <NavLink to="category/sets">Setlər</NavLink>
                <ul className="dropdown ">
                  <ul className="leftdrop">
                    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2020%2F10%2F29%2F3A0A5269.jpg" />
                  </ul>
                  <ul className="rightdrop">
                    <ul className="down brown">
                      <NavLink to="subcategory/endirimli">Endirimli</NavLink>
                    </ul>
                    <ul className="down">
                      <NavLink to="subcategory/endirimsiz">Endirimsiz</NavLink>
                    </ul>
                  </ul>
                </ul>
              </li> */}
              <li>
                <NavLink to="/contact">Əlaqə</NavLink>
              </li>
              <li>
                <NavLink to="/aboutus">Haqqımızda</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Bloq</NavLink>
              </li>
            </ul>
            <ul className="icon">
              <li className="ket">
                <NavLink to="/basket">
                  <i className="fa-solid fa-basket-shopping" />
                  <div className="props">{props.basket.length}</div>
                </NavLink>
              </li>
              <li className="hear">
                <NavLink to="/fav">
                  <i className="fa-solid fa-heart" />
                  <div className="props_fav">{props.fav.length}</div>
                </NavLink>
              </li>
              <li>
                <i
                  onClick={() =>
                    props.dispatch({
                      type: "OPEN_MODAL",
                    })
                  }
                  className="fa-solid fa-user"
                />
              </li>
            </ul>

            <i
              className="fa-regular fa-bars mobile-toggle"
              onClick={() => {
                setIstoggled(!istoggled);
              }}
            />
          </div>

          {/* </div> */}
          {/* </div> */}
        </div>
      </header>
    </>
  );
}
let t = (a) => a;
export default connect(t)(Header);
