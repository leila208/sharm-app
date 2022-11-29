import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "./Responsive.css";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Content from "./pages/Content";
import User from "./pages/User";
import Fav from "./pages/Fav";
import AboutUs from "./pages/AboutUs";
import Questions from "./pages/Questions";
import Details from "./pages/Details";
import FilterCategories from "./pages/FilterCategories";
import FilterSubCategories from "./pages/FilterSubCategories";
import BasketPage from "./pages/BasketPage";
import Search from "./pages/Search";
import New from "./pages/New";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import FilterSubVariants from "./pages/FilterSubVariants";
import { useEffect} from "react";
AOS.init();
function App() {
  let loc = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [loc.pathname])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/user" element={<User />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/faq" element={<Questions />} />
       <Route path="/contact" element={<Contact/>}/>
        <Route path="/category/:category_name" element={<FilterCategories />} />
        <Route
          path="/subcategory/:subcategory"
          element={<FilterSubCategories />}
        />
        <Route path="/variant/:variant" element={<FilterSubVariants />} />
        <Route path="/blog" element={<Content />} />
        <Route path="/blogdetails/:content_id" element={<BlogDetails />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="/new" element={<New />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
