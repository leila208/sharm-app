import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Product from "../Components/Product";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";

function Best() {
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
  // console.log(latest);
  return (
    <>
      {/* <div className="container"> */}
      <div className="sambals">
        <Swiper
          loop="true"
          // autoplay={{
          //   delay: 2000,
          // }}
          modules={[Pagination, Navigation, Autoplay]}
          //   pagination={{
          //     clickable: true,
          //   }}
          navigation={true}
          slidesPerView={1}
        >
          {latest.map((a) => (
      
              <SwiperSlide key={a.id}>
                <Product product={a} id={a.id}   image={a.image} />
              </SwiperSlide>

          ))}
        </Swiper>
        {/* </div> */}
      </div>
      {/* </div> */}
    </>
  );
}
let t = (a) => a;
export default connect(t)(Best);
