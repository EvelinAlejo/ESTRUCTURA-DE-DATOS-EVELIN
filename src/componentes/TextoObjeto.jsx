import React, { useState } from "react";

export default function TextoObjeto() {
  const [texto, setTexto] = useState("evelin");
  const [botonCambio, setBotonCambio] = useState(false);

  const obtenerTexto = (e) => {
    setTexto(e.target.value);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "30px auto",
        padding: "25px",
        backgroundColor: "#ffffff", // Fondo blanco de la tarjeta
        color: "#000000", // Forzamos el texto a negro para que se vea
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(255,255,255,0.2)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h3 style={{ marginBottom: "15px", color: "#333333" }}>
        Texto objeto de Evelin
      </h3>

      <input
        type="text"
        value={texto}
        onChange={obtenerTexto}
        placeholder="Escribe algo..."
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "15px",
          boxSizing: "border-box",
          marginBottom: "15px",
          color: "#000000", // Texto negro dentro del input
          backgroundColor: "#f9f9f9" // Fondo gris muy claro para el input
        }}
      />

      {/* El texto cambia dinámicamente */}
      {texto && (
        <p style={{ marginBottom: "15px", color: "#000000" }}>
          Has escrito: <strong>{texto}</strong>
        </p>
      )}

      <button
        onClick={() => setBotonCambio(!botonCambio)}
        style={{
          padding: "10px 20px",
          backgroundColor: botonCambio ? "green" : "red",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "background-color 0.3s ease",
        }}
      >
        {botonCambio ? "Activo" : "Inactivo"}
      </button>

      {botonCambio && (
        <p style={{ marginTop: "15px", color: "green", fontWeight: "bold" }}>
          ¡Cambio de color activado!
        </p>
      )}
    </div>
  );
}