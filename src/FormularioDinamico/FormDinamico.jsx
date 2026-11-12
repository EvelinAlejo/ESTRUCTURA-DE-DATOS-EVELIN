//rfce



import React, { useState, useEffect } from 'react'

function FormDinamico({modo}) {
    const [busqueda, setBusqueda]=useState("") //inicializando useState
    const[constadorEffect , setContadorEffect]=useState(0)

    useEffect(()=>{
        //simular una busqueda
        if(busqueda.trim()!=="")
            setContadorEffect((prev)=>prev + 1) //para guardar el estado de una variable 
    }, [busqueda])

    // funciones para la actualización del formulario y usando props 
    const titulo=modo==="alumnos" ? "buscar alumno" : "buscar materias "
    
    const placeholderInput=modo==="alumnos" ? "ingresa el nombre del alumno ": "ingresa el nombre de la materia "

    const colorBorder=modo==="alumnos"?
    "border-blue-500": "border-green-500"


  return (
    <div className='w-full max-w-sm bg-slate-900 border
     border-slate-800 rounded-2xl p-5
      text-slate-100 shadow-lg'>

        <h3 className=' text-lg font-bold mb-3 
        flex items-center justify-between'>

            <span>{titulo}</span>
            {/**cambio de color segun la opción  */}
            <spam className={`text-xs px-2 py-0.5 rounded-full 
            ${modo==="alumno"? "bg-indigo-950 ": "bg-emerald-90 text-emerald-300"}
                `}>{modo.toUpperCase()}</spam>
        </h3>

        {/** iniciamos con el input  controlado  */}
        <div className='space-y-3'>
            <input type='text' value={busqueda} onChange={(e)=>setBusqueda(e.target.value)} placeholder={placeholderInput} className={` w-ful bg-slate-900 border
                ${colorBorder} rounded-xl px-3 py-2 text-sm text-slate-100
                focus:outline-none`}/>

                {/* operador ternario para cambier el esteilo del botom dpendiendo la opción */}

                <div className='text-xs text-slate-400 bg-slate-950 p-2.5
                rounded-xl border border-slate-800'>

                    {busqueda===""?(<span className=' italic text-slate-500'> escribe algo </span>):(<div> </div>)}

                    <p> buscando : <strong className='text-slate-200'>{busqueda}</strong></p>
                    <p className='mt-1 text-[10px] text-cyan-400'> 
                        contador de efecto 
                        {constadorEffect} veces
                    </p>


                </div>



        </div>

        
    
        
        
        
        
        FormDinamico
        </div>
  )
}

export default FormDinamico