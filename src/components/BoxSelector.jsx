import React from "react";

function BoxSelector({ boxSize, setBoxSize }) {
  const boxes = [2, 4, 6];

  return (
    <section
      style={{
        padding: "70px 8%",
        textAlign: "center",
      }}
    >
        <p style={{ fontFamily: "Segoe Script, cursive"}}>
            Pick it, Pick it
        </p>
      <h2
        style={{
            fontFamily: "Cursive",
          marginBottom: "30px",
          fontSize: "2.5rem",
        }}
      >
        Build Your Box
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {boxes.map((box) => (
          <button
            key={box}
            onClick={() => setBoxSize(box)}
            style={{
                fontFamily: "Comic Sans MS,cursive",
              padding: "18px 35px",
              borderRadius: "40px",
              border: "none",
              cursor: "pointer",
              background:
                boxSize === box ? "#e68ea3" : "#f7dce2",
              color: boxSize === box ? "white" : "#4b2e2e",
            }}
          >
            Box of {box}
          </button>
        ))}
      </div>
    </section>
  );
}

export default BoxSelector;