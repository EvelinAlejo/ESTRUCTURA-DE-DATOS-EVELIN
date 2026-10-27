import { personasData } from "../data/personas.js";
import { GestorDePersonas } from "../clases/gestorDePersonas.js";

const gestor = new GestorDePersonas(personasData);

export default function PagePersonas({nombrecito}) { //aqui le pongo mi destructuración de arreglos y mi propsque viene de lista comptras 
  // Tus variables originales (esto está perfecto)
  const todosLosDatos = gestor.obtenerDatos();
  const promedioEdad = gestor.obtenerEdadPromedio();
  const filtroCarrera = gestor.filtrarPorCarrera("sistemas");

  return (
    /* Aquí empieza el diseño de tu maestro */
    <div className='p-8 font-sans max-w-2xl text-white mx-auto bg-black rounded-xl shadow-md border border-slate-200 my-6'>
      
      {/* --- SECCIÓN PROMEDIO --- */}
      <div className='bg-blue-50 text-black border border-blue-50 rounded-lg p-4 mb-6 flex items-center justify-between'>
        <p className='text-slate-700 font-medium'>
          <strong>Promedio de edad de los estudiantes:</strong>
        </p>
        <span className='text-xl font-bold text-blue-700 bg-white px-3 py-1 rounded-full shadow-sm'>
          {promedioEdad}
        </span>
      </div>

      {/* --- SECCIÓN TODOS LOS ALUMNOS --- */}
      <div className='mb-6'>
        <h2 className='text-xl text-white font-bold mb-3 tracking-tight border-b border-slate-600 pb-2'>
          Todos los alumnos
        </h2>

        <ul className='space-y-2'>
          {todosLosDatos.map(p => (
            <li key={p.id} className='flex justify-between items-center bg-slate-600 hover:bg-slate-700 transition-colors p-3 rounded-lg border border-slate-200/60'>
              <div>
                <span className='font-semibold text-white capitalize'> {p.nombre}</span>
                <span className='text-slate-300 text-sm ml-2'>({p.edad} años) -</span>
              </div>
              <em className='text-sm font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded not-italic capitalize'>
                {p.carrera}
              </em>
            </li>
          ))}
        </ul>
      </div>

      <hr className='my-6 border-slate-600' />
      
      {/* --- SECCIÓN SOLO UNA CARRERA --- */}
      <h2 className='text-xl font-bold text-white mb-3 tracking-tight border-b border-slate-600 pb-2'>
        Solo una carrera
      </h2>
      <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
        {filtroCarrera.map(p => (
          <li key={p.id} className='bg-sky-50 border border-sky-100 text-sky-900 font-medium p-3 rounded-lg flex items-center gap-2 capitalize'>
            <span className='h-2 w-2 rounded-full bg-sky-500 shrink-0'></span> 
            {p.nombre}
          </li>
        ))}
      </ul>

       <h4 className="bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-lg mt-6 flex items-center justify-center">
        {/* Le agregamos text-white y font-bold a todo el texto */}
        <span className="text-white font-bold text-lg">
          HOLA, <span className="text-yellow-400">{nombrecito}</span>
        </span>
      </h4>
    
      
    </div>
  );
}

  