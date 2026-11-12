import React from 'react';
import FormDinamico from './FormDinamico';

function UsoFormDinamico() {
  return (
    <main className='min-h-screen bg-slate-950 text-slate-100 p-8 flex flex-col items-center justify-center'>
      
      {/* Quité el header vacío y metí los títulos aquí directamente */}
      <div className='text-center mb-8'>
        <h2 className='text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-100'>
          Uso de useState y useEffect
        </h2>
        <p className='text-slate-400 text-xs sm:text-sm mt-1'>
          Un mismo formulario usado con dos opciones
        </p>
      </div>

      {/* Contenedor de los formularios */}
      <div className='flex flex-col md:flex-row gap-6 w-full justify-center items-center'>
        <FormDinamico modo="alumnos" />
        <FormDinamico modo="materias" />
      </div>

    </main>
  );
}

export default UsoFormDinamico;