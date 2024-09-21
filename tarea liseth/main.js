const root = document.getElementById("root");

const titulo = document.createElement("h1");
titulo.textContent= "todo listo";
root.append(titulo);

const tareaInput = document.createComment("input");
tareaInput.placeholder= "ingresa tu nombre";
root.append(tareaInput);

const botonEnviar = document.createElement("button");
botonEnviar.textContent = "enviar"
root.append(botonEnviar);

const contenedorTareas = document.createElement ("div");

root.append(contenedorTareas);
 
const textoTarea = document.createElement("p");
textoTarea.textContent = "soy una tarea";
contenedorTareas.append(textoTarea);

const eliminarTarea= document.createElement("button");
eliminarTarea.textContent="eliminar";
contenedorTareas.append(eliminarTarea);