import { connect } from "react-redux";
import Product from "../Components/Product";
import { useState } from "react";
import BasketItem from "../Components/BasketItem";
function BasketPage(props, basket) {
  const [searchInput, setSearchInput] = useState("");
  const searching = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <section>
      <div className="k">
        <h1>Səbət</h1>
      </div>
      <div>
        <div className="container">
          <div className="fsearch">
            <div className="searching">
              <input
                className="input"
                type="text"
                placeholder="Bəyənilənlər"
                value={searchInput}
                onChange={searching}
              />
            </div>
          </div>
          <div className="increase-nav">
            <ul className="increase-left-nav">
              <li>
                <h3>Məhsul</h3>
              </li>
            </ul>
            <ul className="increase-right-nav">
              <li>
                <h3>Qiymət</h3>
              </li>
              <li>
                <h3>Say</h3>
              </li>
              <li>
                <h3>Ümumi</h3>
              </li>
            </ul>
          </div>
          <div className="favs">
            {props.basket
              .filter((a) => {
                if (searchInput == "") {
                  return a;
                } else if (
                  a.name.toLowerCase().includes(searchInput.toLowerCase())
                ) {
                  return a;
                }
              })
              .map((a) => (   
                <BasketItem product={a} key={a.id} id={a.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
let t = (a) => a;
export default connect(t)(BasketPage);
