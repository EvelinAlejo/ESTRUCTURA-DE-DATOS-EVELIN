import Pilas from "./componentes/Pilas";
import EjemploArreglo from "./componentes/EjemploArreglo";
import "./index.css"

function App() {
  return (
    <div>
      <h1>Mi Proyecto de Estructura de Datos</h1>
      
      {/* Aquí se muestra el componente de la pila */}
      <Pilas />
      
      {/* Aquí se muestra el componente del arreglo */}
      <EjemploArreglo />
    </div>
  )
}

export default App