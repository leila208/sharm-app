import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import Product from "./Product";
// Import Swiper styles
import "swiper/css";
function Rating() {
    const [topRated, setTopRated] = useState([]);
    useEffect(() => {
      const getData = async () => {
        let data = await fetch("http://localhost:7700/products").then((a) =>
          a.json()
        );
        data = data.filter((a) => a.rating > 7);
        setTopRated(data);
      };
      getData();
    }, []);
    return (
      <>
        {/*         
        <div className="rat">
          <div className="container">
            <h1>Ən çox satılan məhsullar</h1>
            <div className="rated">
              {topRated.map((a) => (
                <div
                  className="product"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  key={a.id}
                >
                  <Link to={`/details/${a.id}`}>
                    <img src={a.image} />
                  </Link>
                  <div className="product-details">
                    <div className="product-text">
                      <h2>{a.name}</h2>
                    </div>
                    <div className="product-detail">
                      <h3>{a.price}₼</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* <div className="container"> */}
        <div className="sambals">
          <Swiper
            loop="true"
            // autoplay={{
            //   delay: 2000,
            // }}
            modules={[Navigation, Pagination, Autoplay]}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            slidesPerView={3}
          >
            {topRated.map((a) => (
              <SwiperSlide key={a.id}>
                <Product product={a} id={a.id} image={a.image} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* </div> */}
        </div>
      </>
    );
}
export default Rating;
