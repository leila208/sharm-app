import React from 'react'
import { useState, useEffect } from "react";
    function Sorting() {
     const [sorting, setSorting] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let data = await fetch("http://localhost:7700/products").then((a) =>
        a.json()
      );
       data= data.sort(function (a, b) {
            return a.price - b.price;
      })
      setSorting(data);
    };
    getData();
  }, []);
  console.log(sorting);
  return (
    <>
      <div className="sorting">
        <h1>Qiymətə görə filtrlə</h1>
        <i class="fa-regular fa-filter-circle-dollar"></i>
      </div>
      <div className="selected">
        <select className="select">
          <option className="option" value="Ucuzdan bahaya">
            Ucuzdan bahaya
          </option>
          <option className="option" value="Bahadan ucuza">
            Bahadan ucuza
          </option>
        </select>
      </div>
      {sorting.map((a) => (
        <>
          <div key={a.id}>
          </div>
        </>
      ))}
    </>
  );
}

export default Sorting