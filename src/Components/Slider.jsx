import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/breakpoints";
import { NavLink } from "react-router-dom";
import FilterCategories from "../pages/FilterCategories";
function Slider() {
  return (
    <div className="homeslide">
      {/* <div> */}
      <div className="hero">
        <div id="hero-text">
          <h1>Gözəl Görün & Gözəl Hiss Et </h1>
        </div>
      </div>
      <div className="swip">
        <Swiper
          // breakpoints={{
          //   // when window width is >= 640px
          //   640: {
          //     width: 640,
          //     slidesPerView: 1,
          //   },
          //   // when window width is >= 768px
          //   768: {
          //     width: 768,
          //     slidesPerView: 2,
          //   },
          // }}
          loop="true"
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay]}
          slidesPerView={4}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1615396899839-c99c121888b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG9yYW5nZSUyMCUyMGJlYXV0eSUyMCUyMHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://pro-theme.com/html/viasun/assets/img/slider-slide-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://pro-theme.com/html/viasun/assets/img/slider-slide-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1601924649313-0097c1486427?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src=" https://pro-theme.com/html/viasun/assets/img/slider-slide-1.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Slider;
{
  /* </SwiperSlide>
          <SwiperSlide>
            <NavLink to="category/skin-care">
              <div className="slide">
                <div className="slideimg">
                  <img src="https://images.unsplash.com/photo-1600428877878-1a0fd85beda8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                </div>
                <div className="slidedetails">
                  <div className="slidetext">
                    <h1>Elə indi üzünüz üçün uyğun məhsulları əldə edin</h1>
                  </div>
                  <div className="slidebtn">
                    <button className="slidebutton">Alış-verişə başla</button>
                  </div>
                </div>
              </div>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="category/make-up">
              <div className="slide">
                <div className="slideimg">
                  <img src="https://img.freepik.com/free-photo/different-makeup-cosmetics-white-background-top-view_185193-7418.jpg?w=1060" />
                </div>
                <div className="slidedetails">
                  <div className="slidetext">
                    <h1>Makyajla gözəlliyinizə gözəllik qatın</h1>
                  </div>
                  <div className="slidebtn">
                    <button className="slidebutton">Alış-verişə başla</button>
                  </div>
                </div>
              </div>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="category/hair-care">
              <div className="slide">
                <div className="slideimg">
                  <img src="https://img.freepik.com/free-photo/concept-hair-care-white-background_185193-73398.jpg?w=1060&t=st=1656889476~exp=1656890076~hmac=c47db9ba6b07d0dc006ed14237e6b7de1fe7473f4a2de8fcabb925828821bcb9" />
                </div>
                <div className="slidedetails">
                  <div className="slidetext">
                    <h1>Saçlara qulluq hər zaman önəmlidir</h1>
                  </div>
                  <div className="slidebtn">
                    <button className="slidebutton">Alış-verişə başla</button>
                  </div>
                </div>
              </div>
            </NavLink>
          </SwiperSlide> */
}

{
  /* <SwiperSlide>
            <NavLink to="/Cargo">
              <div className="slide">
                <div className="slideimg">
                  <img src="https://timebusinessnews.com/wp-content/uploads/shopping-shannon-springs-2.jpg" />
                </div>
                <div className="slidedetails">
                  <div className="slidetext">
                    <h1>Sizin üçün alış-verişi daha sərfəli etdik</h1>
                  </div>
                  <div className="slidebtn">
                    <button className="slidebutton">Daha ətraflı</button>
                  </div>
                </div>
              </div>
            </NavLink>

          </SwiperSlide> */
}
