import React from 'react'

function Pmodal({ad,performance,setPmodalshow ,deleteFunction,deleteProduct}) {
    return (
      <div
        onClick={() => setPmodalshow(false)}
        className={
          performance ? "pmodal-container pmodal-open" : "pmodal-container"
        }
      >
        <div onClick={(e) => e.stopPropagation()} className="pmodal">
          <h1>{ad} səbətdən silinsin?</h1>
          <p className="pcontent">Əməliyyatı yekunlaşdır:</p>
          <button id="closed" onClick={() => setPmodalshow(false)}>&times;</button>
          <div className="operations">
            <button id="delete" onClick={deleteFunction}>
              Sil 
            </button>
            <button onClick={() => setPmodalshow(false)} id="cancel">
               Ləğv et
            </button>
          </div>
        </div>
      </div>
    );
}

export default Pmodal