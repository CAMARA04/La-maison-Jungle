import Banner from "./Banner";
import logo from "../assets/logo.png";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import "../styles/Layout.css";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  localStorage.setItem("cart", JSON.stringify(cart));
  useEffect(() => {}, [cart]);

  console.log(localStorage);
  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>

      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
