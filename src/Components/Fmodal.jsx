import React from "react";

function Fmodal({
  title,
  stage,
  setFmodalshow,
  removeFunction,
  removeProduct,
}) {
  return (
    <div
      onClick={() => setFmodalshow(false)}
      className={stage ? "fmodal-container fmodal-open" : "fmodal-container"}
    >
      <div onClick={(e) => e.stopPropagation()} className="fmodal">
        <h1>{title} bəyənilənlərdən silinsin?</h1>
        <p className="pcontent">Əməliyyatı yekunlaşdır:</p>
        <button id="closed" onClick={() => setFmodalshow(false)}>
          &times;
        </button>
        <div className="operations">
          <button id="delete" onClick={removeFunction}>
            Sil
          </button>

          <button onClick={() => setFmodalshow(false)} id="cancel">
            Ləğv et
          </button>
        </div>
      </div>
    </div>
  );
}

export default Fmodal;
