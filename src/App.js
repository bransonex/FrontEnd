import "./App.css"
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import Home from "./components/hom";
import About from "./components/about";
import Cart from "./components/cart";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <NavBar></NavBar>


<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/catalog" element={<Catalog />}></Route>
  <Route path="/about" element={<About />}></Route>
  <Route path="/aboutme" element={<About />}></Route>
  <Route path="/cart" element={<Cart />}></Route>
</Routes>
      <Footer></Footer>
</BrowserRouter>
      <h1>Welcome to 3°i NFT'S!</h1>
    </div>  
  );
}

export default App;
