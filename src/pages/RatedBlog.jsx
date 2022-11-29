import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function RatedBlog() {
  const [rated, setRated] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let data = await fetch("http://localhost:7700/contents").then((a) =>
        a.json()
      );
      data = data.filter((a) => a.rating > 7);
      setRated(data);
    };
    getData();
  }, []);
  return (
    <>
      <div className="ratedblog">
        <div className="container">
          <div className="heading">
            <h1>Ən çox oxunanlar</h1>
          </div>
          <div className="rateblogs">
            {rated.slice(0, 3).map((a) => (
              <Link to={`/blogdetails/${a.id}`} key={a.id}>
                <div
                  className="rateblog"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="rateblog-img">
                    <img src={a.image} />
                  </div>
                  <div className="rated-details">
                    <div className="rated-icons">
                      <i className="fa-solid fa-right-long " id="brown"></i>
                      <ul>
                        <li>
                          <i className="fa-brands fa-facebook-f"></i>
                        </li>
                        <li>
                          <i className="fa-brands fa-twitter"></i>
                        </li>
                      </ul>
                    </div>
                    <p className="pcontent row-content-text" id="brown">
                      {a.type}
                    </p>
                    <h1>{a.name}</h1>
                  </div>
                  <div></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default RatedBlog;
