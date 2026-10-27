import Pilas from "./componentes/Pilas";
import EjemploArreglo from "./componentes/EjemploArreglo";
import "./index.css"; //aqui esta taiwind pero con css
import Ejemplo2 from "./componentes/Ejemplo2";
import PagePersonas from "./componentes/PagePersonas";
import ListaCompras from "./componentes/ListaCompras"

function App() {
  const listaCompras=["leche",  "conflei", "papel de baño"]
  return (
    <div>
      <h1>Mi Proyecto de Estructura de Datos</h1>

      {/* Aquí se muestra el componente de la pila */}
      <Pilas />

      {/* Aquí se muestra el componente del arreglo */}
      <EjemploArreglo />

      {/* Aquí se muestra el Ejemplo2 */}
      <Ejemplo2 />

      {/* Aquí se muestra la página de personas (usa GestorDePersonas internamente) */}
      <PagePersonas />
      <ListaCompras compras={listaCompras}/> {/**aqui meto el nombre de mi arreglo de paple leche  */}
      {/* esta es mi propiedad  */}
    </div>
  );
}

export default App;