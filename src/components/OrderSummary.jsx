import React from "react";

function OrderSummary({ cart, total }) {
  // 🔥 GROUP ITEMS BY NAME
  const grouped = cart.reduce((acc, item) => {
    if (!acc[item.name]) {
      acc[item.name] = {
        count: 1,
        price: item.price,
      };
    } else {
      acc[item.name].count += 1;
    }
    return acc;
  }, {});

  // 🔥 FORMAT WHATSAPP MESSAGE
  const message = encodeURIComponent(
    `Hello The Pink Kitchen, I want to order:\n\n` +
      Object.entries(grouped)
        .map(
          ([name, data]) =>
            `${data.count}x ${name} - ₦${data.price * data.count}`
        )
        .join("\n") +
      `\n\nTotal: ₦${total}`
  );

  const whatsappLink = `https://wa.me/2349060704863?text=${message}`;

  return (
    <section style={{ padding: "40px 8%" }}>
      <div
        style={{
          background: "#fff",
          borderRadius: "30px",
          padding: "40px",
        }}
      >
        <h2 style={{fontFamily: "Playfair Display"}}>Order Summary</h2>

        {/* ITEMS */}
        {Object.entries(grouped).map(([name, data], index) => (
          <div key={index} style={{ marginTop: "15px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "500",
              }}
            >
              <p style={{ fontFamily: "Poppins", margin: 0 }}>
                {data.count}x {name}
              </p>
              <p style={{ fontFamily: "Poppins", margin: 0 }}>₦{data.price * data.count}</p>
            </div>

            {/* LINE */}
            <div
              style={{
                height: "1px",
                background: "#eee",
                marginTop: "10px",
              }}
            />
          </div>
        ))}

        {/* TOTAL (FIXED ALIGNMENT) */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "30px",
            paddingTop: "15px",
            borderTop: "2px solid #f3f3f3",
            fontWeight: "800",
            fontSize: "1.2rem",
          }}
        >
          <p style={{ fontFamily: "Poppins", margin: 0 }}>Total</p>
          <p style={{ fontFamily: "Poppins", margin: 0, color: "#e68ea3" }}>₦{total}</p>
        </div>

        {/* BUTTON */}
        <a href={whatsappLink} target="_blank" rel="noreferrer">
          <button
            style={{
                fontFamily: "Comic Sans MS,cursive",
              marginTop: "25px",
              width: "100%",
              padding: "18px",
              border: "none",
              borderRadius: "30px",
              background: "#7a5c5c",
              color: "white",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Continue To WhatsApp
          </button>
        </a>

        <p
          style={{
             fontFamily: "Poppins",
            color: "black",
            fontSize: "0.9rem",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          We reply with delivery details
        </p>
      </div>
    </section>
  );
}

export default OrderSummary;