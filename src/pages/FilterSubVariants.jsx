import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Product from '../Components/Product';
import { connect } from "react-redux";
function FilterSubVariants() {
  const { variant } = useParams();
  console.log(variant);
    const [variantId, setVariantId] = useState(0);
    useEffect(() => {
      const getVariants = async () => {
        let d = await fetch("http://localhost:7700/variants").then((a) =>
          a.json()
        );
        let id = d.find((a) => a.name.toLowerCase() === variant.toLowerCase()).id;
          setVariantId(id);           
        };
        getVariants();
    }, [variant]);
  console.log(variantId);
      const [products, setProducts] = useState([]);
      useEffect(() => {
          const getInfo = async () => {
              let info = await fetch("http://localhost:7700/products").then((a) => a.json()
              )
              info=info.filter((a)=>a.variant===variantId)
               setProducts(info);
          }
    getInfo()
      }, [variantId,variant])
  console.log(products)
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
   useEffect(() => {
     setDemoProducts(sorted);
   }, [sorted]);
  return (
    <>
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
                    variant={variant}
                    product={a}
                    key={a.id}
                    id={a.id}
                    image={a.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
let t = (a) => a;
export default connect(t)(FilterSubVariants);