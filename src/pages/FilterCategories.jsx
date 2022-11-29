import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Product from "../Components/Product";
import Pmodal from "../Components/Pmodal";
import Pagination from "../Components/Pagination";
import Faq from "react-faq-component";
import { connect } from "react-redux";
import Best from "../Components/Best";
function FilterCategories(props) {
  const { category_name } = useParams();
  const [category, setCategory] = useState({});
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let categories = await fetch("http://localhost:7700/categories").then(
        (a) => a.json()
      );
      let subcategories = await fetch(
        "http://localhost:7700/subcategories"
      ).then((a) => a.json());
      let category = categories.find((a) => a.name === category_name);
      let subcategory = subcategories.filter((a) =>
        category.subcategories.includes(a.id)
      );
      setCategory(category);
      setSubCategories(subcategory);
    };
    getData();
  }, [category_name]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getInfo = async () => {
      let info = await fetch("http://localhost:7700/products").then((a) =>
        a.json()
      );
      info = info.filter((a) => a.category === category.id);
      setProducts(info);
    };
    getInfo();
  }, [category]);
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
    if (filters.length) {
      let d = searchResults.filter((a) =>
        filters.includes(a.subcategory.toString())
      );
      setDemoProducts([...d]);
    } else {
      setDemoProducts(searchResults);
    }
  }, [filters, searchResults]);
  const [sorted, setSorted] = useState([]);
  const sorting = (e) => {
    if (e.target.value === "Ucuzdan_bahaya") {
      setSorted([...demoProducts].sort((a, b) => a.price - b.price));
    } else {
      setSorted([...demoProducts].sort((a, b) => b.price - a.price));
    }
  };
  useEffect(() => {
    setDemoProducts(sorted);
  }, [sorted]);
  const [type, setTpye] = useState([]);
  const typing = (e) => {
    if (e.target.value === "vegan") {
      setTpye([...demoProducts].filter((a) => a.type === "Veqan"));
    } else {
      setTpye([...demoProducts].filter((a) => a.type !== "Veqan"));
    }
  };
  useEffect(() => {
    setDemoProducts(type);
  }, [type]);
  const [priceFilter, setPriceFilter] = useState([]);
  const pricing = (e) => {
    if (e.target.value === "az") {
      setPriceFilter(
        [...demoProducts].sort(
          (a, b) => a.name.charCodeAt() - b.name.charCodeAt()
        )
      );
    } else {
      setPriceFilter(
        [...demoProducts].sort(
          (a, b) => b.name.charCodeAt() - a.name.charCodeAt()
        )
      );
    }
  };
  useEffect(() => {
    setDemoProducts(priceFilter);
  }, [priceFilter]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = demoProducts.slice(firstPostIndex, lastPostIndex);
  const [mobileview, setMobileView] = useState(0);
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
              <h2>Növünə görə filtrlə</h2>
            </div>
            <div className="selecteds">
              {subCategories.map((a) => (
                <div key={a.id} className="selected">
                  <input
                    className="red-input"
                    type="checkbox"
                    onClick={check}
                    value={a.id}
                    id={a.id}
                    name="name"
                    subcategory="subcategory"
                  />
                  <label>
                    <p className="pcontent">{a.name}</p>
                  </label>
                </div>
              ))}
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
                <label htmlFor="cheap">
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
                <label htmlFor="expensive">
                  <p className="pcontent">Bahadan ucuza</p>
                </label>
              </div>
            </div>
            <div className="select_heading">
              <h1>Tipinə görə filtrlə</h1>
            </div>
            <div className="selecteds">
              <div className="selected">
                <input
                  className="red-input"
                  name="product_type"
                  type="radio"
                  onChange={typing}
                  value="vegan"
                  id="p_vegan"
                />
                <label htmlFor="p_vegan">
                  <p className="pcontent">Veqan</p>
                </label>
              </div>
              <div className="selected">
                <input
                  className="red-input"
                  name="product_type"
                  type="radio"
                  onChange={typing}
                  value="novegan"
                  id="no_vegan"
                />
                <label htmlFor="no_vegan">
                  <p className="pcontent">Adi</p>
                </label>
              </div>
              <div className="select_heading">
                <h2>Ən çox alınanlar</h2>
              </div>
              <Best />
            </div>
          </div>
          <div className="total-right">
            <div className="paginations">
              <div className="mobile-views">
                <div className="mobile-view">
                  <i
                    className="fa-solid fa-grid"
                    onClick={() => setMobileView(0)}
                  />
                </div>
                <div className="mobile-view " onClick={() => setMobileView(1)}>
                  <i className="fa-regular fa-chart-tree-map" />
                </div>
              </div>
              <select
                className="select"
                onChange={pricing}
                defaultValue={"DEFAULT"}
              >
                <option className="option" value="DEFAULT" disabled>
                  Əlifba sırasına görə filtrlə
                </option>
                <option className="option" value="az">
                  A-Z
                </option>
                <option className="option" value="za">
                  Z-A
                </option>
              </select>
            </div>
            <div className={mobileview === 0 ? "sambals" : ""}>
              {currentPosts.map((a) => (
                  <Product
                    category_name={category_name}
                    product={a}
                    name={a.name}
                    key={a.id}
                    id={a.id}
                    image={a.image}
                  />
              ))}
            </div>
            <div className="bottom-paginations">
              <Pagination
                totalPosts={demoProducts.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
let t = (a) => a;
export default connect(t)(FilterCategories);
