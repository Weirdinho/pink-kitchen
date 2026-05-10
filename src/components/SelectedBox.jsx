import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SelectedBox({ cart, boxSize, clearCart }) {
  const [hovered, setHovered] = useState(false);
  const [clearing, setClearing] = useState(false);

  const isEmpty = cart.length === 0;

  const handleClear = () => {
    if (cart.length === 0) return;

    setClearing(true);

    // wait for exit animation before clearing
    setTimeout(() => {
      clearCart();        // 🔥 resets App state → counter becomes 0
      setClearing(false);
    }, 500);
  };

  return (
    <section style={{ padding: "80px 8%" }}>
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        animate={{
          scale: isEmpty ? 0.95 : 1,
          opacity: isEmpty ? 0.7 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "30px",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
          minHeight: "400px",
        }}
      >
        {/* HEADER */}
        <h2
          style={{
            fontFamily: "Playfair Display",
            fontSize: "1.8rem",
            color: "#000",
            background:"#ffe1eb",
            textAlign:"center",
            padding:"10px",
            borderRadius:"20px",
            marginBottom: "30px",
            marginTop:0,
            display:"relative",
            top:0,
            zIndex:1,
          }}
        >
          The Pink Kitchen Box - {boxSize} Rolls
        </h2>

        {/* EMPTY STATE */}
        {isEmpty && (
          <p style={{  fontFamily: "Poppins", color: "#999" }}>
            Your box is empty - go pick some rolls!
          </p>
        )}

        {/* BOX GRID */}
        {!isEmpty && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(2, 120px)",
              gap: "14px",
              width: "420px",
              padding: "20px",
              borderRadius: "25px",
              marginTop: "20px",
            }}
          >
            <AnimatePresence>
              {!clearing &&
                cart.slice(0, 6).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{
                      opacity: 0,
                      y: 80,
                      x: index % 2 === 0 ? -30 : 30,
                      rotate: index % 2 === 0 ? -8 : 8,
                      transition: { duration: 0.5 },
                    }}
                    style={{
                      borderRadius: "18px",
                      overflow: "hidden",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                      border: "3px solid white",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        )}

        {/* FOOTER */}
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ 
             padding: "10px 18px",
            fontWeight: "600" 
            }}>
            Items: {cart.length}
          </div>

          <button
            onClick={handleClear}
            style={{
                fontFamily: "Comic Sans MS,cursive",
              padding: "10px 18px",
              borderRadius: "12px",
              border: "none",
              background: "transparent",
              cursor: "pointer", 
              fontWeight: "600",
              fontSize: "0.9rem",
              color: "#e68ea3",
            }}
          >
            Start Over
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default SelectedBox;