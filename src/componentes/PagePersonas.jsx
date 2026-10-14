import { personasData } from "../data/personas.js";
import { GestorDePersonas } from "../clases/gestorDePersonas.js";

const gestor = new GestorDePersonas(personasData);

export default function PagePersonas() {
  const todosLosDatos = gestor.obtenerDatos();
  const promedioEdad = gestor.obtenerEdadPromedio();
  const filtroCarrera = gestor.filtrarPorCarrera("sistemas");

  return (
    <div>
      <h2>Lista completa</h2>
      <ul>
        {todosLosDatos.map((p) => (
          <li key={p.id}>
            {p.nombre} - {p.edad} años - <em>{p.carrera}</em>
          </li>
        ))}
      </ul>

      <hr />
      <h2>Promedio</h2>
      <ul>
        <li>
          <p>
            <strong>promedio de los estudiantes:</strong> {promedioEdad}
          </p>
        </li>
      </ul>

      <hr />
      <h2>Solo una carrera (sistemas)</h2>
      <ul>
        {filtroCarrera.map((p) => (
          <li key={p.id}>{p.nombre}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
}