import React from "react";
import PagePersonas from "./PagePersonas"; // este es mi hijo para poder usar mi props
function ListaCompras({compras}){ //aqui voy a recibir una propiedad del archivo app.jsx se llama compras 
    //const {compras}=props , esto es para cuando tengo varios props
    const nombre="eve"// esta es mi propiedad
    return(
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-6 transition-all hover:shadow-2xl">
            
            <h3 className='text-xl font-bold text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3'>
                Lista de compras
            </h3>
            
            <ul className="flex flex-col gap-2">
                {
                    compras.map((producto, index) => (
                        <li key={index} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/60 hover:bg-indigo-50/50 hover:border-indigo-200 transition-colors text-slate-700 font-medium">
                            <span>{producto}</span>
                            <span className="text-xs bg-slate-200/70 text-slate-600 px-2.5 py-1 rounded-full font-semibold">
                                No. {index + 1}
                            </span>
                        </li>
                    ))
                }
            </ul>

            {/*aqui voy a pasar mi  propiedad  al hijo*/}
            <PagePersonas nombrecito={nombre}/>
        </div>
    );
    
       
}
export default ListaCompras