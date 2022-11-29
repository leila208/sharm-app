import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import New from "./New";
      import ReactStars from "react-stars";
function Details( props) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  let { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getData = async () => {
      let data = await fetch(`http://localhost:7700/products/${id}`).then((a) =>
        a.json()
      );
      setProduct(data);
    };
    getData();
  }, []);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };
  const current = new Date();
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthIndex = new Date().getMonth();
  let monthName = monthNames[monthIndex];
  const day = current.getDate();
  const year = current.getFullYear();
  const [show, setShow] = useState(0);
  return (
    <section>
      <div className="k">
        <h1>Detallı məlumat</h1>
      </div>
      <div className="container">
        <div className="alldetails">
          <div className="details-images">
            <div className="details-image">
              <img src={product.image} />
            </div>
            <div className="details-flexing-images">
              <div className="details-little-image">
                <img src={product.image} />
              </div>
              <div className="details-littletwo-image">
                <img src={product.image} />
              </div>
            </div>
          </div>
          <div className="details">
            <div className="details-text">
              <h3 className="thirty"> {product.name}</h3>
              <div className="starts">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={35}
                  color2={"#ffd700"}
                />
              </div>
              <div className="credits">
                <div className="credit">
                  <i className="fa-regular fa-credit-card" />
                  <p>6 ayadək kredit</p>
                </div>
                <div className="credit">
                  <i className="fa-regular fa-truck" /> <p>Pulsuz çatdırılma</p>
                </div>
                <div className="credit">
                  <i className="fa-regular fa-lock-keyhole" />
                  <p>Güvənli ödəmə</p>
                </div>
              </div>
            </div>
            <p>
              Son “ikinci dəri” hissi üçün hamar filtr-finiş effekti vermək üçün
              nəzərdə tutulmuş yeni orta və tam əhatə edən 14 saat qırışa
              davamlı formulamızı sınayın.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="description-headings">
          <div className="description-heading">
            <h1>
              <Link to="#" className="active" onClick={() => setShow(0)}>
                Təsvir
              </Link>
            </h1>
            <h1>
              <Link to="#" onClick={() => setShow(1)}>
                Ödəmə
              </Link>
            </h1>
            <h1>
              <Link to="#" onClick={() => setShow(2)}>
                Çatdırılma
              </Link>
            </h1>
          </div>
        </div>
        <div className={show === 0 ? "blocking" : "noning"}>
          <p className="paragraph">{product.description}</p>
        </div>
        <div className={show === 1 ? "blocking" : "noning"}>
          <div className="cashs">
            <div className="cash-image">
              <img src="https://cdn03.ciceksepeti.com/payment/150x90-visa.jpg" />
            </div>
            <div className="cash-image">
              <img src="https://cdn03.ciceksepeti.com/payment/150x90-mastercard.jpg" />
            </div>
            <div className="cash-image">
              <img src="https://cdn03.ciceksepeti.com/payment/150x90-troy.jpg" />
            </div>
            <div className="cash-image">
              <img src="https://cdn03.ciceksepeti.com/payment/150x90-amex.jpg" />
            </div>
            <div className="cash-image">
              <img src="https://cdn03.ciceksepeti.com/payment/150x90-guvenliodeme.jpg" />
            </div>
            <div className="cash-image">
              <img src="https://cdn03.ciceksepeti.com/payment/150x90-google.jpg" />
            </div>
          </div>
        </div>
        <div className={show === 2 ? "blocking" : "noning"}>
          <p className="paragraph">Şəhərdaxili pulsuz çatdırılma mövcuddur.</p>
        </div>
      </div>
      <div className="container">
        <div className="heading">
          <h1> Tövsiyə olunan məhsullar</h1>
        </div>
        <New />
      </div>
      <div className="container">
        <div className=" v">
          <h3>Müştəri rəyləri</h3>
          <div className="review-form">
            <div className="review-form-icon">
              <i className="fa-regular fa-user-hair-long orange"></i>
            </div>
            <div className="review-form-detail">
              <p className="bolder">Leyla Mehtiyeva</p>
              <p>18 May,2022 13:30</p>
              <p className="rev">{product.productcomment}</p>
            </div>
          </div>
          {comments.map((text) => (
            <div key={text.id}>
              <div className="review-form">
                <div className="review-form-icon">
                  <i className="fa-regular fa-user-hair-long orange" />
                </div>
                <div className="review-form-detail">
                  <p className="bolder">Leyla Mehtiyeva</p>
                  <p>
                    {day} {monthName},{year} {time}
                  </p>
                  <p className="rev"> {text}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="add-comment">
            <h3>Rəy yaz</h3>
            <textarea
              className="comment-form-textarea"
              value={comment}
              onChange={onChangeHandler}
            />
            <button id="orangered" onClick={onClickHandler}>
              Göndər
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
let t = (a) => a;
export default connect(t)(Details);

