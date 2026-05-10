import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { rolls } from "../data/rolls";

function RollGrid({ addToCart, cart, boxSize }) {
  const [animatingId, setAnimatingId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const handleAdd = (roll) => {
    if (cart.length >= boxSize) return;

    setAnimatingId(roll.id);

    setTimeout(() => {
      addToCart(roll);
      setAnimatingId(null);
    }, 700);
  };

  return (
    <section
      style={{
        padding: "20px 8%",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "30px",
        }}
      >
        {rolls.map((roll) => {
          const full = cart.length >= boxSize;
          const isHovered = hoveredId === roll.id;

          return (
            <motion.div
              key={roll.id}
              onHoverStart={() => setHoveredId(roll.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.3,
              }}
              style={{
                background: "white",
                borderRadius: "30px",
                overflow: "hidden",
                position: "relative",
                cursor: full ? "not-allowed" : "pointer",
                opacity: full ? 0.45 : 1,
                boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
              }}
            >
              {/* FLYING ANIMATION */}
              <AnimatePresence>
                {animatingId === roll.id && (
                  <motion.img
                    src={roll.image}
                    alt=""
                    initial={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    animate={{
                      opacity: 0,
                      scale: 0.6,
                      y: 500,
                      x: 100,
                      rotate: 25,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: "fixed",
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "25px",
                      zIndex: 9999,
                      top: "30%",
                      left: "40%",
                      pointerEvents: "none",
                    }}
                  />
                )}
              </AnimatePresence>

              {/* IMAGE */}
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <motion.img
                  
                  transition={{
                    duration: 0.4,
                  }}
                  src={roll.image}
                  alt={roll.name}
                  style={{
                    width: "100%",
                    height: "320px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* PLUS ICON (NOW TRIGGERS ON CARD HOVER) */}
                {!full && (
                  <motion.div
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    onClick={() => handleAdd(roll)}
                    style={{
                      position: "absolute",
                      top: "18px",
                      right: "18px",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                      fontWeight: "300",
                      color: "#e68ea3",
                      boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
                      cursor: "pointer",
                      pointerEvents: isHovered ? "auto" : "none",
                    }}
                  >
                    +
                  </motion.div>
                )}
              </div>

              {/* CONTENT */}
              <div
                style={{
                  padding: "24px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Segoe Script, cursive",
                    marginBottom: "10px",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                  }}
                >
                  {roll.name}
                </h3>

                <p
                  style={{
                     fontFamily: "Poppins",
                     fontWeight: 500,
                    letterSpacing: "1px",
                    color: "#e68ea3",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                  }}
                >
                  ₦{roll.price}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default RollGrid;