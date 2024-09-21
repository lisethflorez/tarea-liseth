import tareaInput from "./tareainput.js";
import botonEnviar from "./botonenviar.js";
import { agregarTarea } from "./funciones.tareas.js";
 
const crearTareacontenedor = document.createElement("div");

botonEnviar.addEventListener("click",()=>agregarTarea(tareaInput));

crearTareacontenedor.append(tareaInput);
crearTareacontenedor.append(botonEnviar);

export default crearTareacontenedor;

