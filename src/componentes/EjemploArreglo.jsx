import { useState } from "react";

function EjemploArreglo() {
  // Estado para el arreglo inicial
  const [elementos, setElementos] = useState(["evelin"])

 
  const agregarDato = () => {
    const nuevoNumero = Math.floor(Math.random() * 50)
    setElementos([...elementos, nuevoNumero])
  }

  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState("");


  const handlePush = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setStack([inputValue, ...stack]);
    setInputValue("");
  };

  const handlePop = () => {
    if (stack.length === 0) return;
    const nuevoStack = stack.slice(1);
    setStack(nuevoStack);
  };

  const elementoTope = stack.length > 0 ? stack[0] : "Vacía";

  return (
    <div className="futurista-container">
      <h2 className="futurista-titulo">構造 // Estructura de Pila</h2>

      {/* Formulario para introducir datos */}
      <form onSubmit={handlePush} className="futurista-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Introduce un dato"
          className="futurista-input"
        />
        <button type="submit" className="futurista-btn futurista-btn-push">
          押込 Push
        </button>
      </form>

      {/* Botón para eliminar el elemento superior */}
      <button
        onClick={handlePop}
        disabled={stack.length === 0}
        className="futurista-btn futurista-btn-pop"
      >
        取出 Pop (Eliminar Tope)
      </button>

      {/* Información del tope y tamaño */}
      <div className="futurista-info">
        <div className="futurista-info-item">
          <span className="futurista-info-label">頂点 // Tope Actual</span>
          <span className="futurista-info-valor" style={{ fontSize: '1.1rem' }}>
            {elementoTope}
          </span>
        </div>
        <div className="futurista-info-item">
          <span className="futurista-info-label">要素 // Elementos</span>
          <span className="futurista-info-valor">{stack.length}</span>
        </div>
      </div>

      {/* Representación visual de la Pila estilo tecnológico japonés */}
      <div className="futurista-pila">
        {stack.length === 0 ? (
          <p className="futurista-vacia">空 // La estructura está vacía</p>
        ) : (
          stack.map((item, index) => (
            <div
              key={index}
              className={
                index === 0
                  ? "futurista-item futurista-item-tope"
                  : "futurista-item futurista-item-normal"
              }
            >
              <span>{item}</span>
              {index === 0 && <span className="futurista-tag">TOPE // 頂点</span>}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default EjemploArreglo;