import React, { useState } from "react";
import "./App.css";
import Cart from "./pages/Cart";

function App() {
  const [page, setPage] = useState("cart");
  return (
    <div className="App">
    <h1>Food Order Site</h1>
      <h3>Your's ordered items is shows bottom of the screen.</h3>
      <section className="cart py-5">
      {page === "cart" && <Cart />}
      </section>
      </div>
      
  );
}

export default App;
