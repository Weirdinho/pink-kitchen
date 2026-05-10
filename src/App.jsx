import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Availability from "./components/Availability";
import BoxSelector from "./components/BoxSelector";
import RollGrid from "./components/RollGrid";
import SelectedBox from "./components/SelectedBox";
import OrderSummary from "./components/OrderSummary";
import InfoCards from "./components/InfoCards";
import SaturdayTreat from "./components/SaturdayTreat";
import Footer from "./components/Footer";

function App() {
  const [boxSize, setBoxSize] = useState(2);
  const [cart, setCart] = useState([]);

  const addToCart = (roll) => {
    if (cart.length >= boxSize) return;
    setCart((prev) => [...prev, roll]);
  };

  const clearCart = () => {
    setCart([]); // 🔥 single source of truth reset
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div
      style={{
        background: "#fff7f5",
        fontFamily: "Poppins",
        color: "#4b2e2e",
      }}
    >
      {/* HEADER + HERO */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/images/cinnamon_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "700px",
        }}
      >
        <Header />
        <Hero />
      </div>

      <Availability />

      <div id="boxing">
        <BoxSelector boxSize={boxSize} setBoxSize={setBoxSize} />
      </div>

      <RollGrid
        cart={cart}
        boxSize={boxSize}
        addToCart={addToCart}
      />

      <SelectedBox
        cart={cart}
        boxSize={boxSize}
        clearCart={clearCart}   // 🔥 IMPORTANT FIX
      />

      <OrderSummary cart={cart} total={total} />
      <InfoCards />
      {/* <SaturdayTreat /> */}
      <Footer />
    </div>
  );
}

export default App;