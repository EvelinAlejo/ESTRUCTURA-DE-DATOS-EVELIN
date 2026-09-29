import Pilas from "./componentes/Pilas";
import EjemploArreglo from "./componentes/EjemploArreglo";
import "./index.css";
import Ejemplo2 from "./componentes/Ejemplo2";  // ✅ el nombre coincide con el archivo

function App() {
  return (
    <div>
      <h1>Mi Proyecto de Estructura de Datos</h1>

      {/* Aquí se muestra el componente de la pila */}
      <Pilas />

      {/* Aquí se muestra el componente del arreglo */}
      <EjemploArreglo />

      {/* Aquí se muestra el Ejemplo2 👇 */}
      <Ejemplo2 />
    </div>
  );
}

export default App;