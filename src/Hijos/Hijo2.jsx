import React from "react";
//aqui recibo la promps 
function Hijo2 ({mensaje, hacerClic}){
    return(
        <div>
            <h1>hijo2</h1>
            {/* aqui ejecuto la función qye me da el padre */}
            <button onClick={alHacerClic} >haz clic aqui </button>

        </div>
    )

}
export default Hijo2