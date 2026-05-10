import React from "react";
import { motion } from "framer-motion";

function InfoCards() {
  const cards = [
    {
      title: "Choose Your Perfect Box",
      description:
        "Select from our beautifully curated boxes of 2, 4 or 6 cinnamon rolls and build your own sweet experience with your favorite flavors.",
    },

    {
      title: "Send Orders Via WhatsApp",
      description:
        "Once your box is complete, your order summary is automatically prepared and sent directly to our WhatsApp business line for easy confirmation.",
    },

    {
      title: "Fast Door Delivery",
      description:
        "Your freshly baked cinnamon rolls are carefully packed and delivered quickly to your doorstep while still soft, warm and delicious.",
    },

    {
      title: "Delivered Across Abuja",
      description:
        "We currently deliver across major Abuja locations including Wuse, Gwarinpa, Maitama, Asokoro, Lugbe, Jahi, Apo and many more.",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 8%",
        background: "#fff7f5",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "30px",
        }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -10,
            }}
            transition={{
              duration: 0.3,
            }}
            style={{
              textAlign: "center",
              background: "white",
              padding: "45px 35px",
              borderRadius: "35px",
              boxShadow:
                "0 10px 40px rgba(0,0,0,0.06)",
              transition: "0.3s",
            }}
          >
            <h3
              style={{
                fontFamily: "Playfair Display",
                fontSize: "1.7rem",
                marginBottom: "20px",
                color: "#e68ea3",
                lineHeight: "1.3",
              }}
            >
              {card.title}
            </h3>

            <p
              style={{
                fontFamily: "Segoe Script, cursive",
                fontSize: "1rem",
                lineHeight: "1.9",
                color: "#7a5c5c",
              }}
            >
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default InfoCards;