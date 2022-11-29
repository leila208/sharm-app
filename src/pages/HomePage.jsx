import Slider from "../Components/Slider";
import Rating from "../Components/Rating";
import RatedBlog from "./RatedBlog";
import Faq from "react-faq-component";
import New from "./New";
import { NavLink } from "react-router-dom";
function Homepage() {
   const data = {
     rows: [
       {
         title: "Dərimizi necə nəmləndirmək olar?",
         content:
           "Xoşbəxtlikdən, dərini nəmləndirmək üçün ciddi tədbirlər tələb etməyən bir sıra yollar var. Nəmləndirici kremdən və yaxşı üz nəmləndiricilərindən tutmuş zərərli maddələri kəsməyə və daha çox su içməyə qədər, bunlar ən təsirli dərini nəmləndirmə üsullarıdır.",
       },
       {
         title: "Məhsullar dəriyə uyğunluq baxımından sınaqdan keçirilirmi?",
         content: `Bütün düsturlar dəriyə uyğunluğu üçün dermatoloji cəhətdən sınaqdan keçirilir. `,
       },
       {
         title: "Həssas dəriyə qulluq zamanı xüsusilə nə vacibdir?",
         content: `
Həssas dəri irsi və ya qazanılmış ola bilər. Həssas dəri müəyyən məhsullara və ətraf mühitin təsirlərinə reaksiya verə bilər. `,
       }
     ],
   };
  return (
    <>
      <Slider />
      <div className="container">
        <div className="sectors">
          <NavLink to="category/skin-care">
            <div className="sector">
              <div className="sector-img">
                <img src="https://pro-theme.com/html/viasun/assets/img/shop-categories-1.png" />
              </div>
              <div className="sector-text">
                <h1>Dəriyə Qulluq</h1>
              </div>
            </div>
          </NavLink>
          <NavLink to="category/make-up">
            <div className="sector">
              <div className="sector-img">
                <img src="https://pro-theme.com/html/viasun/assets/img/shop-categories-5.png" />
              </div>
              <div className="sector-text">
                <h1> Makyaj</h1>
              </div>
            </div>
          </NavLink>
          <NavLink to="category/hair-care">
            <div className="sector">
              <div className="sector-img">
                <img src="https://pro-theme.com/html/viasun/assets/img/shop-categories-4.png" />
              </div>
              <div className="sector-text">
                <h1> Saça Qulluq</h1>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="container">
        <div className="heading">
          <h1> Ən çox satılan məhsullar</h1>
        </div>
        <Rating />
      </div>
      <div className="organic">
        <div className="organic-image">
          <img src="https://dtiva.wpengine.com/wp-content/uploads/2020/04/icon-lady-style-rounded.png" />
        </div>
        <div className="organic-text">
          <h1>
            <span>100% </span>Organik cild baxımı məhsulları
          </h1>
        </div>
        <NavLink to="category/skin-care">
          <div className="organic-button">
            <button>Alış-verişə başla</button>
          </div>
        </NavLink>
      </div>
      <div className="container">
        <div className="heading">
          <h1> Ən yeni məhsullar</h1>
        </div>
        <New />
      </div>
      <div className="container">
        <div className="navshops">
          <div className="navshop">
            <div className="navshop-image">
              <img src="https://cdn.shopify.com/s/files/1/0260/8014/9613/files/img-2_600x.jpg?v=1568981934" />
            </div>
            <div className="navshop-details">
              <h1>Təbii makyaj</h1>
              <p>Endirimli məhsullar</p>
              <div className="shop-now">
                <NavLink to="category/make-up" id="green">
                  Alış-verişə başla
                </NavLink>
              </div>
            </div>
          </div>
          <div className="navshop">
            <div className="navshop-image">
              <img src="https://cdn.shopify.com/s/files/1/0260/8014/9613/files/img-1_770x.jpg?v=1568982316" />
            </div>
            <div className="navshop-details">
              <h1>Saçlara baxım</h1>
              <p>Endirimli məhsullar</p>
              <div className="shop-now">
                <NavLink to="category/hair-care" id="aqua">
                  Alış-verişə başla
                </NavLink>
              </div>
            </div>
          </div>
          <div className="navshop">
            <div className="navshop-image">
              <img src="https://cdn.shopify.com/s/files/1/0260/8014/9613/files/img-3_95effcff-91ea-4b55-b2d4-bfcda4ac1235_770x.jpg?v=1568982880" />
            </div>
            <div className="navshop-details">
              <h1>Fırça dəstləri</h1>
              <p>Endirimli məhsullar</p>
              <div className="shop-now">
                <NavLink to="category/tools" id="pink">
                  Alış-verişə başla
                </NavLink>
              </div>
            </div>
          </div>
          <div className="navshop">
            <div className="navshop-image">
              <img src="https://cdn.shopify.com/s/files/1/0260/8014/9613/files/img-4_600x.jpg?v=1568981943" />
            </div>
            <div className="navshop-details">
              <h1>Cild baxımı</h1>
              <p>Endirimli məhsullar</p>
              <div className="shop-now">
                <NavLink to="category/skin-care" id="orangered">
                  Alış-verişə başla
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RatedBlog />
      <div className="heading">
        <h1>Tez-tez verilən suallar</h1>
      </div>
      <div className="container">
        <div className="faq">
          <Faq data={data} />
        </div>
      </div>
    </>
  );
}
export default Homepage;
