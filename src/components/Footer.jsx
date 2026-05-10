import React from "react";

function Footer() {
  return (
    <footer
      style={{
        padding: "60px 8%",
        background: "#e68ea3",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2
        style={{
            fontFamily: "Playfair Display",
          fontSize: "2.5rem",
          fontFamily: "Playfair Display",
        }}
      >
        The Pink Kitchen
      </h2>

      <p style={{ fontFamily: "Poppins", marginTop: "20px" }}>
        Abuja, Nigeria
      </p>

      <p style={{ fontFamily: "Poppins",}}>+234 801 234 5678</p>
    </footer>
  );
}

export default Footer;