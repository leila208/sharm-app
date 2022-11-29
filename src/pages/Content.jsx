import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Pagination from "../Components/Pagination";
function Content() {
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
  const [searchInput, setSearchInput] = useState("");
  const searching = (e) => {
    setSearchInput(e.target.value);
  };
  const [rated, setRated] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let data = await fetch("http://localhost:7700/contents").then((a) =>
        a.json()
      );
      data = data.filter((a) => a.status === "new");
      setRated(data);
    };
    getData();
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts=contents.slice(firstPostIndex, lastPostIndex);
   const [priceFilter, setPriceFilter] = useState([]);
   const pricing = (e) => {
     if (e.target.value === "az") {
       setPriceFilter(
         [...contents].sort(
           (a, b) => a.name.charCodeAt() - b.name.charCodeAt()
         )
       );
     } else {
       setPriceFilter(
         [...contents].sort(
           (a, b) => b.name.charCodeAt() - a.name.charCodeAt()
         )
       );
     }
  };
   useEffect(() => {
     setContents(priceFilter);
   }, [priceFilter]);
  return (
    <>
      <section>
        <div className="k">
          <h1>Bloq</h1>
        </div>
        <div className="container">
          <div className="blogdetail">
            <div className="blogsearch">
              <div className="search">
                <div className="searching">
                  <input
                    className="input"
                    type="text"
                    placeholder="Bloqu axtar"
                    value={searchInput}
                    onChange={searching}
                  />
                </div>
              </div>
              <div className="recent">
                <h1>Ən yeni bloqlar</h1>
                {rated.slice(0, 4).map((a) => (
                  <div key={a.id}>
                    <div className="recent-blog">
                      <div
                        className="recent-details "
                        data-aos="fade-left"
                        data-aos-duration="3000"
                      >
                        <div className="recent-image">
                          <img src={a.image} />
                        </div>
                        <div className="recent-text">
                          <Link to={`/blogdetails/${a.id}`}>
                            <h1>{a.text}</h1>
                          </Link>
                          <div className="calendar">
                            <i className=" orange fa-regular fa-calendar"></i>{" "}
                            <p>18 May 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="tags ">
                <h1>Bloq başlıqları</h1>
                {rated.slice(0, 3).map((a) => (
                  <Link to={`/blogdetails/${a.id}`} key={a.id}>
                    <div className="tag">
                      <p id="orangered"> #{a.type}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="blogcontents">
              <div className="paginations">
                <Pagination
                  totalPosts={contents.length}
                  postsPerPage={postsPerPage}
                  setCurrentPage={setCurrentPage}
                />
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
              <div className="blogcontent">
                {currentPosts
                  .filter((a) => {
                    if (searchInput == "") {
                      return a;
                    } else if (
                      a.name.toLowerCase().includes(searchInput.toLowerCase())
                    ) {
                      return a;
                    }
                  })
                  .map((a) => (
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
                            <i
                              className="fa-solid fa-right-long "
                              id="brown"
                            ></i>
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
        </div>
      </section>
    </>
  );
}
export default Content;