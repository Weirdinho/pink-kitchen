import React from "react";

function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        padding: "0 10%",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          background: "rgba(0,0,0,0.35)",
          padding: "20px",
          borderRadius: "30px",
        }}
      >
        <h1
          style={{
            fontFamily: "Playfair Display",
            fontSize: "4rem",
            marginBottom: "20px",
            fontFamily: "Playfair Display",
          }}
        >
          Cinnamon Rolls for sweet Souls.
        </h1>

        <p
          style={{
             fontFamily: "Comic Sans MS,cursive",
            lineHeight: "1.8",
            marginBottom: "30px",
            
            
          }}
        >
          Pillow-soft buns, blanketed in cream cheese frosting and toppings you grew up loving. Pack your own box - we'll do the rest.     </p>

        <a href="#boxing">
          <button
            style={{
                fontFamily: "Comic Sans MS,cursive",
              background: "#ffb6c1",
              border: "none",
              padding: "16px 30px",
              borderRadius: "40px",
              fontSize: "1rem",
              cursor: "pointer",
              
            }}
          >
            Start Packing Your Box
          </button>
        </a>
          {/* <p
          style={{
             fontFamily: "Poppins",
            marginBottom: "10px",
          }}
        >
          Saturdays and Sundays only.
        </p> */}
      </div>
    </section>
  );
}

export default Hero;