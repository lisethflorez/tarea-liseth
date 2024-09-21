import contenedorTareas from "./contenedortareas.js";

function agregarTarea(input){
    const tarjeta= document.createElement("div");
    tarjeta.style=`
     margin: 12px;
     display: flex;
     gap: 8px;
     
    `;

    constparrafoTarea = document.createElement("p");
    parrafoTarea.textContent= input.value.trin();
    input.value=null;

    const iscomplete = document.createElement("input");
    iscomplete.type="button";
    iscomplete.value= "tachar";
    iscomplete.addEventListener("click",()=> completarTarea
    (iscomplete, parrafoTarea));

    const botonActualizar = document.createElement("button");
    botonActualizar.textContent= "actualizar";
    botonActualizar.style=`
     color: white;
     background-color:green;
     border: 1px solid grey;
     cursor: pointer;
    `
    botonActualizar.addEventListener("click",()=>actualizarTarea
    (input, parrafoTarea));

    const botonEliminar= document.createElement("button");
    botonEliminar.textContent= "eliminar";
    botonEliminar.style=`
     color: white;
     background-color:red;
     border: 1px solid grey;
    `;

    botonEliminar.addEventListener("click",()=> eliminarTarea (parrafoTarea,botonEliminar));

    tarjeta.append(parrafoTarea,botonActualizar, botonEliminar);
    contenedorTareas.append(tarjeta);
}
 function eliminarTarea(nuevaTarea, tarea) {
    tarea.textContent=nuevaTarea.value;
    nuevaTarea.value= "";
    nuevaTarea.placeholder= "tarea actualizada";
    setTimeout(()=>{
       nuevaTarea.placeholder= "ingresa tu tarea";
    }, 3000);

}

 function eliminarTarea(tarjetaTarea){
    tarjetaTarea.remove();
}

export {agregarTarea,eliminarTarea};
