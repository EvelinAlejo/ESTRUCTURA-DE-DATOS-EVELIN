export class GestorDePersonas{
    constructor(listaPersona){
        this.personas=[...listaPersona];
    }
    //operación 1 obtener todos los datos 
    obtenerDatos(){
        return this.personas;
    }

    //operacion 2 filtrar 
    filtrarPorCarrera(carrera){
        return this.personas.filter((p)=>p.carrera.toLowerCase() ===carrera.toLowerCase())
    }

    //obtener promedio 
    obtenerEdadPromedio(){
        if(this.personas.length===0)return 0;
        const total =this.personas.reduce((acumulador, person)=> acumulador+person.edad, 0) //en cero inicializa mi variable 
        return (total/this.personas.length).toFixed(1) // es para que no me de tantos puntos decimales 
    }
}