import React from 'react'
import { connect } from "react-redux";
function BasketItem({ dispatch, basket, product }) {
  console.log(product)
  console.log(basket)
  const increase = () => {
    product.quantity++;
    dispatch({
      type: "ADD",
      payload: [...basket],
      
    })
  };
  const decrease = () => {
    product.quantity--;
    if (product.quantity === 0) {
       let f = basket.filter((a) => a.id !== product.id);
        dispatch({
          type: "ADD",
          payload: [...f],
        });
      return
    }
     dispatch({
       type: "ADD",
       payload: [...basket],
     });
  };
  
  return (
    <>
      {/* <div className="increasedivs"> */}
      <div className="increasediv">
        <div className="increasediv-details">
          <div className="increasediv-image">
            <img src={product.image} />
          </div>
          <div className="increasediv-text">
            <h1>{product.name}</h1>
          </div>
        </div>
        <div className="increasediv-btns">
          <div className="increasediv-price">
            <h3 className="pcontent" id="brownn">
              {product.price} ₼
            </h3>
          </div>
          <div className="increasediv-btn">
            <button onClick={increase} className="divs">
              +
            </button>
            <button className="divs">{product.quantity}</button>
            <button className="divs" onClick={decrease}>
              -
            </button>
          </div>
          <div className="increasediv-total">
            <h3 className="pcontent" id="brownn">
             {(product.quantity * product.price).toFixed(2)}₼
            </h3>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
let t = (a) => a;
export default connect(t)(BasketItem);