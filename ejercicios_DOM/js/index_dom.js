import hamburguerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "../01-Reloj/reloj.js";

const d =document;
d.addEventListener('DOMContentLoaded', (e=>{
    
    hamburguerMenu('.panel-btn', '.panel', '.menu a');
    digitalClock('#reloj','#activar_reloj','#desactivar_reloj');

}))
