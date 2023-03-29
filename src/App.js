import React, { useState } from "react";
import "./App.css";
import Cart from "./pages/Cart";

function App() {
  const [page, setPage] = useState("cart");
  return (
    <div className="App">
      <section className="cart py-5">
      {page === "cart" && <Cart />}
      </section>
      </div>
      
  );
}

export default App;