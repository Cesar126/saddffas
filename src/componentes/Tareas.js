import React from "react";
export default function 
Tareas(){
    const listadoTarea=[
        {
         titulo: "Estudiar Fisica",
        Responsable: "Pedro Alvarado",
        descripcion: "Cambiar disco Duro",
        prioridad: "Alta"
        },
        {
        titulo: "Estudiar Lenguaje",
        Responsable: "Devin Llerena",
        descripcion: "Leer 3 poemas",
        prioridad: "Baja" 
        },
        {
            titulo: "Estudiar Sistema",
            Responsable: "Federico Robles",
            descripcion: "Proyecto de curso",
            prioridad: "Muy Alta" 

        }
        
    ]
 console.log("Lista de tareas");
 console.log(listadoTarea)
    return (
        <div>
           <ul>
            {
                listadoTarea.map( (item,index)=> {
                    return <li key={index}>{item.titulo}</li>
                })
            }
           </ul>
        </div>
    )
}