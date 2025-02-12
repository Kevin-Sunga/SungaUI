import React from "react";
import "./styles.css";
import Header from "./components/header";
import Products from "./components/products";
import Footer from "./components/footer";


const App = () => {
  return (
    <div>
      <Header />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
