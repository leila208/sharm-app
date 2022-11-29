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
                      <p className="italic"> ({a.content.length}söz)</p>
                    </div>
                    <h2 className="t-t">#Tövsiyə</h2>
                    <hr />
                    <p className="pcontent">
                      Düşünürəm ki, bu 2022-ci ilin ilk postu olsun. Ola bilsin
                      ki, dövrü pozub daha tez-tez yazmağa başlayım. Əslində
                      məzmundan narahat olmadan yazmaq üçün darıxıram. 8-10 il
                      əvvəl bloqlar çox vacib idi, indi həvəskarlardan başqa
                      oxucu çox deyil. Onsuz da evdə dayana bilməyən iki yaşlı
                      körpəsi olan bir körpə var, bu anda düşünə biləcəyim şey
                      budur və bundan başqa heç bir şey narahat etmir.
                      Beləliklə, vaxt məhduddur. Nəysə, uzatdım, bax, uzun
                      müddət yazmayanda belə olur. Narahat olmadan yazmaq
                      gözəldir. Kosmetika və makiyaj dünyasından uzaq olmuşam.
                      Yalnız ehtiyacım olanda illərdir istifadə etdiyim
                      məhsullardan dərhal yenisini alıram. Hətta yeni bir
                      məhsulu sınamaq istəsəm də, mağazalardan yalnız
                      dostlarımın tövsiyə etdiyi və ya mənə maraqlı olanı
                      alıram. Onsuz da çox vaxtım yoxdur. İllərdir yağlı dərili
                      bir insan olaraq nəmləndiricilərə çox əhəmiyyət verməzdim.
                      Əvvəllər, amma həmişə parça-parça olur. Dəri yağlı
                      olduqda, onsuz da özünü təmin edir. Yaş bitsə də, qırışlar
                      hələ də bazarda yoxdur, şükür, bunu dərimin bir az yağlı
                      olması ilə əlaqələndirirəm. Bu yaxınlarda baxdım, evdə on
                      yüz milyonluq üz kremini birtəhər bitirmişəm, bəyənmədiyim
                      üz kremləri üçün artıq əl-ayaq kremləri düzəldirəm.
                      Clinique Turkey onlayn saytını sevirəm. Mağazalarla
                      müqayisədə daha müxtəlif məhsullar və yaxşı kampaniyalar
                      var. Bunu alsanız, hədiyyə olaraq çoxlu nümunələr var.
                      Clinique Pep-start Hydroblur nəmləndiricisi də yeni
                      sayılır, lakin dərimdən razı qalacağımı bilmədiyim üçün bu
                      tip kremlər üçün səyahət ölçüsünə üstünlük verirəm. Bu
                      ölçüləri qane etsem tam razmerini alacam. Beləliklə,
                      məhsullar əlimdə boşa getmir və istifadə etməyəcəyim bir
                      məhsula çox büdcə ayırmıram. Clinique saytında bir
                      kampaniya var idi. Hydroblur ilə kiçik ölçüdə Clinique
                      hədiyyə dəsti aldım, dodaq boyası aldım, onlarla birlikdə
                      bir neçə kiçik ölçülü məhsulla birlikdə başqa bir kiçik
                      ölçülü Clinique Pep-Start hədiyyə etdilər.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="content-side">
                  <h3 className="hover-orange">
                    Bloqun ən çox sevilən məhsulları
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
                  <h3>Rəylər</h3>
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
                    <h3>Rəy yaz</h3>
                    <textarea
                      className="comment-form-textarea"
                      value={comment}
                      onChange={onChangeHandler}
                    />
                    <button id="orangered" onClick={onClickHandler}>
                      Göndər
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      <div className="container sh">
        <h1>Bloqu paylaş</h1>
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

