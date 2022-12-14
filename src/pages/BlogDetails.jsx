import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function BlogDetails() {
  const { content_id } = useParams();
  const [contents, setContents] = useState([]);
  useEffect(() => {
    const getInfo = async () => {
      let data = await fetch("http://localhost:7700/contents").then((a) =>
        a.json()
      );
      setContents(data);
    };
    getInfo();
  }, []);
   const [comment, setComment] = useState("");
   const [comments, setComments] = useState([]);
   const onClickHandler = () => {
     setComments((comments) => [...comments, comment]);
   };
   const onChangeHandler = (e) => {
     setComment(e.target.value);
  };
  const current = new Date();
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthIndex = new Date().getMonth();
  let monthName = monthNames[monthIndex];
  const day = current.getDate();
  const year = current.getFullYear();
  return (
    <section>
      {contents
        .filter((a) => a.id == content_id)
        .map((a) => {
          return (
            <>
              <div className="k" key={a.id}>
                <h1>{a.name}</h1>
              </div>
              <div className="blogdetail">
                <div className="container">
                  <div className="content">
                    <div className="content-image">
                      <img src={a.image} />
                    </div>
                    <div className="content-details">
                      <p id="brown" className=" t-t">
                        {a.type}
                      </p>
                      <h2 className="t-t">#{a.text}</h2>
                      <hr />
                      <p className="pcontent">{a.content}</p>
                      <p className="italic"> ({a.content.length}s??z)</p>
                    </div>
                    <h2 className="t-t">#T??vsiy??</h2>
                    <hr />
                    <p className="pcontent">
                      D??????n??r??m ki, bu 2022-ci ilin ilk postu olsun. Ola bilsin
                      ki, d??vr?? pozub daha tez-tez yazma??a ba??lay??m. ??slind??
                      m??zmundan narahat olmadan yazmaq ??????n dar??x??ram. 8-10 il
                      ??vv??l bloqlar ??ox vacib idi, indi h??v??skarlardan ba??qa
                      oxucu ??ox deyil. Onsuz da evd?? dayana bilm??y??n iki ya??l??
                      k??rp??si olan bir k??rp?? var, bu anda d??????n?? bil??c??yim ??ey
                      budur v?? bundan ba??qa he?? bir ??ey narahat etmir.
                      Bel??likl??, vaxt m??hduddur. N??ys??, uzatd??m, bax, uzun
                      m??dd??t yazmayanda bel?? olur. Narahat olmadan yazmaq
                      g??z??ldir. Kosmetika v?? makiyaj d??nyas??ndan uzaq olmu??am.
                      Yaln??z ehtiyac??m olanda ill??rdir istifad?? etdiyim
                      m??hsullardan d??rhal yenisini al??ram. H??tta yeni bir
                      m??hsulu s??namaq ist??s??m d??, ma??azalardan yaln??z
                      dostlar??m??n t??vsiy?? etdiyi v?? ya m??n?? maraql?? olan??
                      al??ram. Onsuz da ??ox vaxt??m yoxdur. ??ll??rdir ya??l?? d??rili
                      bir insan olaraq n??ml??ndiricil??r?? ??ox ??h??miyy??t verm??zdim.
                      ??vv??ll??r, amma h??mi???? par??a-par??a olur. D??ri ya??l??
                      olduqda, onsuz da ??z??n?? t??min edir. Ya?? bits?? d??, q??r????lar
                      h??l?? d?? bazarda yoxdur, ????k??r, bunu d??rimin bir az ya??l??
                      olmas?? il?? ??laq??l??ndirir??m. Bu yax??nlarda baxd??m, evd?? on
                      y??z milyonluq ??z kremini birt??h??r bitirmi????m, b??y??nm??diyim
                      ??z kreml??ri ??????n art??q ??l-ayaq kreml??ri d??z??ldir??m.
                      Clinique Turkey onlayn sayt??n?? sevir??m. Ma??azalarla
                      m??qayis??d?? daha m??xt??lif m??hsullar v?? yax???? kampaniyalar
                      var. Bunu alsan??z, h??diyy?? olaraq ??oxlu n??mun??l??r var.
                      Clinique Pep-start Hydroblur n??ml??ndiricisi d?? yeni
                      say??l??r, lakin d??rimd??n raz?? qalaca????m?? bilm??diyim ??????n bu
                      tip kreml??r ??????n s??yah??t ??l????s??n?? ??st??nl??k verir??m. Bu
                      ??l????l??ri qane etsem tam razmerini alacam. Bel??likl??,
                      m??hsullar ??limd?? bo??a getmir v?? istifad?? etm??y??c??yim bir
                      m??hsula ??ox b??dc?? ay??rm??ram. Clinique sayt??nda bir
                      kampaniya var idi. Hydroblur il?? ki??ik ??l????d?? Clinique
                      h??diyy?? d??sti ald??m, dodaq boyas?? ald??m, onlarla birlikd??
                      bir ne???? ki??ik ??l????l?? m??hsulla birlikd?? ba??qa bir ki??ik
                      ??l????l?? Clinique Pep-Start h??diyy?? etdil??r.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="content-side">
                  <h3 className="hover-orange">
                    Bloqun ??n ??ox sevil??n m??hsullar??
                  </h3>
                  <div className="content-images">
                    <div data-aos="fade-right" data-aos-duration="2000">
                      <div className="content-side-image">
                        <img src="https://i.pinimg.com/originals/52/6f/9b/526f9bc3a4793dde33072befb09dee01.jpg" />
                      </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000">
                      <div className="content-side-image">
                        <img src="https://cdn.shopify.com/s/files/1/0454/1310/5819/products/kerastase-nutritive-severely-dry-hair-care-set_b374b35c-df6c-411d-8a31-82354b4f7d8c_900x900.jpg?v=1604088947" />
                      </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000">
                      <div className="content-side-image">
                        <img src="https://m.media-amazon.com/images/I/41xQL65RbLL.jpg" />
                      </div>
                    </div>
                  </div>
                  <div className="content-side-details">
                    <h3></h3>
                  </div>
                </div>
              </div>
              <div>
                <div className="container v">
                  <h3>R??yl??r</h3>
                  <div className="review-form">
                    <div className="review-form-icon">
                      <i className="fa-regular fa-user-hair-long orange"></i>
                    </div>
                    <div className="review-form-detail">
                      <p className="bolder">{a.username}</p>
                      <p>18 May,2022 13:30</p>
                      <p className="rev">{a.review}</p>
                    </div>
                  </div>
                  {comments.map((text,b) => (
                    <div key={b}>
                      <div className="review-form">
                        <div className="review-form-icon">
                          <i className="fa-regular fa-user-hair-long orange"></i>
                        </div>
                        <div className="review-form-detail">
                          <p className="bolder">Leyla Mehtiyeva</p>
                          <p>
                            {day} {monthName},{year} {time}
                          </p>
                          <p className="rev"> {text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="add-comment">
                    <h3>R??y yaz</h3>
                    <textarea
                      className="comment-form-textarea"
                      value={comment}
                      onChange={onChangeHandler}
                    />
                    <button id="orangered" onClick={onClickHandler}>
                      G??nd??r
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      <div className="container sh">
        <h1>Bloqu payla??</h1>
        <div className="share-icons">
          <div className="share-icon">
            <i className="fa-brands fa-pinterest share"></i>
          </div>
          <div className="share-icon">
            <i className="fa-brands fa-twitter share"></i>
          </div>
          <div className="share-icon">
            <i className="fa-brands fa-facebook share"></i>
          </div>
          <div className="share-icon">
            <i className="fa-brands fa-instagram share"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BlogDetails;

