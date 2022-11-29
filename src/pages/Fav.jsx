import { connect } from "react-redux";
import Product from "../Components/Product";
import { useState } from "react";
function Fav({ fav, dispatch}) {
  window.localStorage.setItem("fav", JSON.stringify(fav));
   const [searchInput, setSearchInput] = useState("");
   const searching = (e) => {
     setSearchInput(e.target.value);
   };
  return (
    <section>
      <div className="k">
        <h1>Bəyənilənlər</h1>
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
          <div className="favs">
            {fav.length ? (
              fav
                ?.filter((a) => {
                  if (searchInput == "") {
                    return a;
                  } else if (
                    a.name.toLowerCase().includes(searchInput.toLowerCase())
                  ) {
                    return a;
                  }
                })
                .map((a) => (
                  <Product
                    category={a.category}
                    product={a}
                    key={a.id}
                    id={a.id}
                    name={a.name}
                    image={a.image}
                    price={a.price}
                  />
                ))
            ) : (
              <div className="no">
                <h1>
                  <i>Bəyəndiyiniz məhsullar hələ yoxdur</i>
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
let t=(a)=>a
export default connect(t)(Fav);
