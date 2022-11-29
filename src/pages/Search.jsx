import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
function Search() {
  let { id } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const getInfo = async () => {
        let info = await fetch(`http://localhost:7700/products`).then((a) =>
          a.json()
        );
        setProducts(info);
      };
      getInfo();
      console.log(products)
    }, []);
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  const handleChange = (e) => {
      setSearchInput(e.target.value);
      console.log(searchInput)
  };
  const searching = (e) => {
    setSearchInput(e.target.value);
    setSearchResults(products.filter((p) => {
      p.name.toLowerCase().includes(searchInput);
    }))
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Məhsulu axtar"
        value={searchInput}
        onChange={searching}
      ></input>
      <img src={products.image}></img>
      <h1>{products.name}</h1>
      </div>
  );
}
export default Search;
