import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Product from "../Components/Product";
import { connect } from "react-redux";
function FilterSubCategories(props) {
  const { subcategory } = useParams();
  console.log(subcategory);
  const [subcategoryId, setSubCategoryId] = useState(0);
  useEffect(() => {
    const getCategories = async () => {
      let c = await fetch("http://localhost:7700/subcategories").then((a) =>
        a.json()
      );
      let id = c.find(
        (a) => a.name.toLowerCase() === subcategory.toLowerCase()
      ).id;
      setSubCategoryId(id);
    };
    getCategories();
  }, [subcategory]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let data = await fetch("http://localhost:7700/products").then((a) =>
        a.json()
      );
      data = data.filter((a) => a.subcategory === subcategoryId);
      setProducts(data);
    };
    getData();
  }, [subcategoryId, subcategory]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    if (searchResults) {
      setSearchResults([...products]);
    }
  }, [products]);
  const searching = (e) => {
    setSearchInput(e.target.value);
    setSearchResults(
      products.filter((p) =>
        p.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  const [filters, setFilters] = useState([]);
  const check = (e) => {
    if (e.target.checked) {
      setFilters([...filters, e.target.value]);
    } else {
      setFilters([...filters.filter((a) => a !== e.target.value)]);
    }
  };
  const [demoProducts, setDemoProducts] = useState(searchResults);
  useEffect(() => {
    {
      setDemoProducts(searchResults);
    }
  }, [searchResults]);
  const [sorted, setSorted] = useState([]);
  const sorting = (e) => {
    if (e.target.value === "Ucuzdan_bahaya") {
      setSorted([...demoProducts].sort((a, b) => a.price - b.price));
    } else {
      setSorted([...demoProducts].sort((a, b) => b.price - a.price));
    }
  };
  console.log(sorted);
  useEffect(() => {
    setDemoProducts(sorted);
  }, [sorted]);
  return (
    <section>
      <div className="k">
        <h1>Mağaza</h1>
      </div>
      <div className="container">
        <div className="total">
          <div className="rightsearch">
            <div className="searching">
              <input
                className="input "
                type="text"
                placeholder="Məhsulu axtar"
                value={searchInput}
                onChange={searching}
              />
            </div>
            <div className="select_heading">
              <h1>Qiymətə görə filtrlə</h1>
            </div>
            <div className="selecteds">
              <div className="selected">
                <input
                  name="price"
                  type="radio"
                  onChange={sorting}
                  value="Ucuzdan_bahaya"
                  id="cheap"
                  className="red-input"
                />
                <label for="cheap">
                  <p className="pcontent">Ucuzdan bahaya</p>
                </label>
              </div>
              <div className="selected">
                <input
                  name="price"
                  type="radio"
                  onChange={sorting}
                  value="Bahadan_ucuza"
                  id="expensive"
                  className="red-input"
                />
                <label for="expensive">
                  <p className="pcontent">Bahadan ucuza</p>
                </label>
              </div>
            </div>
          </div>
          <div className="total-right">
            <div className="sambals">
              {demoProducts.map((a) => (
                <Product
                  subcategory={subcategory}
                  product={a}
                  key={a.id}
                  id={a.id}
                  name={a.name}
                  image={a.image}
                  price={a.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FilterSubCategories;
