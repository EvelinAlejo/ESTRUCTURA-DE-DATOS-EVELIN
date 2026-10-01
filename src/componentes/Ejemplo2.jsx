import { useState } from 'react'

export default function Ejemplo2() {
  const [alumnos, setAlumnos] = useState([{ id: 1, nombre: "Juan", asistencia: 1 }])
  const [nuevoNombre, setNuevoNombre] = useState("")


  // 1. ELIMINAR 

  const eliminarObjeto = (id) => {
    const lima = alumnos.filter((alumno) => alumno.id !== id)
    setAlumnos(lima)
  }

 
  // 2. ACTUALIZAR 
 
  const actualizar = (dato) => {
    const nuevoIngresoN = prompt("Escribe el nuevo nombre por favor ")
    if (!nuevoIngresoN || nuevoIngresoN.trim() === "") return

    const listaNueva = alumnos.map((x) =>
      x.id === dato ? { ...x, nombre: nuevoIngresoN } : x
    )
    setAlumnos(listaNueva)
  }

  // 3. AGREGAR 

  const agregarAlumno = (e) => {
    e.preventDefault()
    if (nuevoNombre.trim() === "") return
    const nuevoAlumno = {
      id: Date.now(),
      nombre: nuevoNombre,
      asistencia: 0
    }
    setAlumnos([...alumnos, nuevoAlumno])
    setNuevoNombre("")
  }

  return (
    <div className="futurista-container">
      <h2 className="futurista-titulo">管理 // Gestión de Alumnos</h2>

      {/* Formulario para agregar */}
      <form onSubmit={agregarAlumno} className="futurista-form">
        <input
          type="text"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
          placeholder="Nombre del alumno"
          className="futurista-input"
        />
        <button type="submit" className="futurista-btn futurista-btn-push">
          追加 Añadir
        </button>
      </form>

      {/* Panel de Información general */}
      <div className="futurista-info">
        <div className="futurista-info-item">
          <span className="futurista-info-label">総数 // Total Alumnos</span>
          <span className="futurista-info-valor">{alumnos.length}</span>
        </div>
        <div className="futurista-info-item">
          <span className="futurista-info-label">セク // Sección</span>
          <span className="futurista-info-valor">A-1</span>
        </div>
      </div>

      {/* Renderizar la vista */}
      <div className="futurista-pila" style={{ borderTop: "2px solid #545147" }}>
        {alumnos.length === 0 ? (
          <p className="futurista-vacia">空 // No hay registros que mostrar</p>
        ) : (
          alumnos.map((alumno) => (
            <div
              key={alumno.id}
              className="futurista-item futurista-item-normal"
              style={{ justifyContent: "space-between" }}
            >
              <div style={{ textAlign: "left" }}>
                <strong>{alumno.nombre}</strong>
                <div style={{ fontSize: "11px", opacity: 0.7, marginTop: "2px" }}>
                  出席 // Asistencias: {alumno.asistencia}
                </div>
              </div>

              {/* Botones: ahora ELIMINAR va primero, luego EDITAR */}
              <div style={{ display: "flex", gap: "6px" }}>
                <button
                  onClick={() => eliminarObjeto(alumno.id)}
                  className="futurista-btn"
                  style={{ padding: "4px 8px", fontSize: "0.75rem", borderColor: "#bc1c30", color: "#bc1c30" }}
                >
                  削除 X
                </button>
                <button
                  onClick={() => actualizar(alumno.id)}
                  className="futurista-btn"
                  style={{ padding: "4px 8px", fontSize: "0.75rem", borderColor: "#545147", color: "#545147" }}
                >
                  編集 Editar
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}