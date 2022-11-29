import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Product from "../Components/Product";
import "swiper/css/navigation";
import "swiper/css";
function New() {
  const [latest, setLatest] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let data = await fetch("http://localhost:7700/products").then((a) =>
        a.json()
      );
      data = data.filter((a) => a.status === "new");
      setLatest(data);
    };
    getData();
  }, []);
  return (
    <>
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
          {latest.map((a) => (
            <SwiperSlide key={a.id}>
              <Product product={a} id={a.id} image={a.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
let t = (a) => a;
export default connect(t)(New);
