import React from "react";

function Availability() {
  return (
    <section
      style={{
        padding: "80px 8%",
        textAlign: "center",
        color: "#4b2e2e",
        
      }}
    >
      <h2
        style={{
            fontFamily: "Playfair Display",
          fontSize: "3rem",
          marginBottom: "20px",
          fontFamily: "Playfair Display",
        }}
      >
        Available Only Saturdays & Sundays
      </h2>

      <p
        style={{
             fontFamily: "Poppins",
          maxWidth: "700px",
          margin: "auto",
          lineHeight: "1.8",
        }}
      >
        Fresh batches every weekend across Abuja.
      </p>
    </section>
  );
}

export default Availability;