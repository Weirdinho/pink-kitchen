import React from "react";

function Header() {
  return (
    <header
      style={{
        padding: "20px 8%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        background: "transparent",
        color: "white",
        zIndex: 1,
      }}
    >
      <h1
        style={{
            fontFamily: "Playfair Display",
          fontSize: "2rem",
          fontFamily: "Playfair Display",
          
        }}
      >
        The Pink Kitchen
      </h1>

      <a href="#boxing">
        <button
          style={{
            fontFamily: "Comic Sans MS,cursive",
            background: "#e68ea3",
            border: "none",
            padding: "14px 28px",
            borderRadius: "40px",
            color: "white",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Order Now
        </button>
      </a>
    </header>
  );
}

export default Header;