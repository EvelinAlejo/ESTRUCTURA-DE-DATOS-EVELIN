import { useState } from 'react'

export default function Ejemplo2() {
  const [alumnos, setAlumnos] = useState([{ id: 1, nombre: "Juan", asistencia: 1 }])
  const [nuevoNombre, setNuevoNombre] = useState("")

  //Crear primera función
  const agregarAlumno = (e) => {
    e.preventDefault()
    if (nuevoNombre.trim() === "") return
    const nuevoAlumno = {
      id: Date.now(),
      nombre: nuevoNombre,
      asistencia: 0
    }
    //Introducir valores al arreglo
    setAlumnos([...alumnos, nuevoAlumno])  // ← CORREGIDO: antes guardaba nuevoNombre
    setNuevoNombre("")
  }

  //Eliminar objeto
  const eliminarObjeto = (id) => {
    const listaFilter = alumnos.filter((alumno) => alumno.id !== id)  // ← CORREGIDO: !== en vez de ===
    setAlumnos(listaFilter)
  }

  //esta es para actualizar
  const actualizar = (dato) => {
    //aquí pido el nuevo nombre
    const nuevoIngresoN = prompt("Escribe el nuevo nombre")  // ← CORREGIDO: texto sin errores
    if (!nuevoIngresoN || nuevoIngresoN.trim() === "") return
    //recorro con el .map
    const listaNueva = alumnos.map((flash) =>
      flash.id === dato
        ? { ...flash, nombre: nuevoIngresoN }
        : flash
    )
    setAlumnos(listaNueva)  // ← NUEVO: faltaba guardar la lista nueva
  }

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Operaciones con arreglos</h1>

      {/* Formulario para agregar los datos */}
      <form onSubmit={agregarAlumno} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
          placeholder="Ingresa un nombre"
          style={{ padding: "8px 12px", marginRight: "10px", width: "60%" }}
        />
        <button
          type="submit"
          style={{ padding: "8px 12px", background: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}
        >
          Agregar
        </button>
      </form>

      {/* Renderizar la vista */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {alumnos.length === 0 ? (
          <p style={{ color: "#999", textAlign: "center" }}>
            No hay datos que mostrar
          </p>
        ) : (
          alumnos.map((alumno) => (
            <div
              key={alumno.id}
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <div>
                <strong>{alumno.nombre}</strong>
                <br />
                <span style={{ fontSize: "12px", color: "#666" }}>
                  Asistencias: {alumno.asistencia}
                </span>
              </div>

              {/* ← NUEVO: botones para llamar a las funciones */}
              <div style={{ display: "flex", gap: "6px" }}>
                <button
                  onClick={() => actualizar(alumno.id)}
                  style={{ background: "#1e88e5", color: "white", border: "none", padding: "6px 10px", cursor: "pointer" }}
                >
                  Editar
                </button>
                <button
                  onClick={() => eliminarObjeto(alumno.id)}
                  style={{ background: "#e53935", color: "white", border: "none", padding: "6px 10px", cursor: "pointer" }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}