import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import "./app.scss"
import SingUp from "./Components/SingUp/SingUp";
import Login from "./Components/Login/Login";
import SinglePageProduct from "./Components/SinglePageProduct/SinglePageProduct";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
     <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SingUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id"  element={<SinglePageProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
     </>
  );
}

export default App;
