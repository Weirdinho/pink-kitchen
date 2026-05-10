import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { rolls } from "../data/rolls";

function RollGrid({ addToCart, cart, boxSize }) {
  const [animatingId, setAnimatingId] = useState(null);

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
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "30px",
        }}
      >
        {rolls.map((roll) => {
          const full = cart.length >= boxSize;

          return (
            <motion.div
              key={roll.id}
              whileHover={{
                y: -10,
              }}
              whileTap={{
                scale: 0.97,
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
                boxShadow:
                  "0 10px 40px rgba(0,0,0,0.08)",
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
                  whileHover={{
                    scale: 1.08,
                  }}
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

                {/* PLUS ICON */}
                {!full && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    onClick={() => handleAdd(roll)}
                    style={{
                      position: "absolute",
                      top: "18px",
                      right: "18px",
                      width: "55px",
                      height: "55px",
                      borderRadius: "50%",
                      background: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                      fontWeight: "300",
                      color: "#e68ea3",
                      boxShadow:
                        "0 5px 20px rgba(0,0,0,0.15)",
                      cursor: "pointer",
                      zIndex: 100,
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
                    fontFamily: "Poppins",
                    marginBottom: "10px",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    color: "#4b2e2e",
                  }}
                >
                  {roll.name}
                </h3>

                <p
                  style={{
                    fontFamily: "Poppins",
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