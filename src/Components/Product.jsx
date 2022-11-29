import { connect } from "react-redux";
import { Link } from "react-router-dom";

import React from "react";
import Pmodal from "./Pmodal";
import Fmodal from "./Fmodal";
import { useState } from "react";
function Product({ product, dispatch, basket, fav }) {
  // let exist = basket.find((a) => a.id === product.id);
  // let already_exist = fav.find((a) => a.id === product.id);
//  console.log(basket)
  // window.localStorage.setItem("fav", JSON.stringify(fav));
  window.localStorage.setItem("fav", JSON.stringify(fav));
  window.localStorage.setItem("basket", JSON.stringify(basket));
  // console.log(basket);
  //   console.log(fav);
  const [pmodalshow, setPmodalshow] = useState(false);
  const [deletedid, setDeletedid] = useState(null);
  const deleteProduct = (id) => {
    setPmodalshow(true);
    setDeletedid(product.id);
  };
  const deleteFunction = () => {
    dispatch({
      type: "REMOVE_BASKET",
      payload: product?.id,
    });
    setPmodalshow(false);
  };
  //favmodal
  const [fmodalshow, setFmodalshow] = useState(false);
  const [removedid, setRemovedid] = useState(null);
  const removeProduct = (id) => {
    setFmodalshow(true);
    setRemovedid(product.id);
  };
  const removeFunction = () => {
    dispatch({
      type: "REMOVE_FAV",
      payload: product.id,
    });
    setFmodalshow(false);
  }
 
  return (
    <>
      <Pmodal
        deleteProduct={deleteProduct}
        deleteFunction={deleteFunction}
        setPmodalshow={setPmodalshow}
        performance={pmodalshow}
        ad={product.name}
      />
      <Fmodal
        removeProduct={removeProduct}
        removeFunction={removeFunction}
        setFmodalshow={setFmodalshow}
        stage={fmodalshow}
        title={product.name}
      />
      <div className="sambal" data-aos="fade-up" data-aos-duration="3000">
        <Link to={`/details/${product.id}`}>
          <div className="sambal-image">
            <img src={product.image} />
            <div className="sambal-rights">
              <div className="sambal-right" onClick={(e) => e.preventDefault()}>
                {!fav?.find((a) => a.id === product.id) ? (
                  <i
                    className="fa-solid fa-heart heart "
                    onClick={() => {
                      // console.log(11111);
                      dispatch({
                        type: "FAV",
                        payload: product,
                      });
                    }}
                  ></i>
                ) : (
                  <i
                    onClick={() => {
                      setFmodalshow(true);
                      // console.log(2222);
                      // dispatch({
                      //   type: "REMOVE_FAV",
                      //   payload: product.id,
                      // });
                    }}
                    className="fa-solid fa-heart red"
                  ></i>
                )}
              </div>
              <div className="sambal-right" onClick={(e) => e.preventDefault()}>
                {!basket.find((a) => a?.id === product.id) ? (
                  <i
                    className="fa-solid fa-basket-shopping gray"
                    onClick={() =>
                      dispatch({
                        type: "ADD_BASKET",
                        payload: product,
                      })
                    }
                  ></i>
                ) : (
                  <i
                    onClick={
                      () => setPmodalshow(true)
                    }
                    className="fa-solid fa-basket-shopping brown"
                  ></i>
                )}
              </div>
            </div>
          </div>
        </Link>
        <div className="sambal-content">
          <h2> {product.name}</h2>
          <p className="der pcontent">{product.price}₼ </p>
        </div>
      </div>
    </>
  );
}
let t = (a) => a;
export default connect(t)(Product);
