/**Sea un salón de clases en el DCyT, donde se procesan los datos de cada estudiante (nombre, 
edad y sexo). El dato sexo es una letra F o M (femenino - masculino). Se desean procesar estos 
registros de estudiantes para determinar: a. la edad promedio, b. el nombre del estudiante con 
mayor edad, c. el porcentaje de chicas que son mayor de edad. 
El profesor informa que si asisten Luis (16), Ana (19), José (20) y Carmen (18), la salida 
requerida presenta el siguiente formato: */
import Estudiante from "./Cl_estudiantes.js";
import salon from "./Cl_salon.js";

let estu1 = new Estudiante("luis", 16, "M");
let estu2 = new Estudiante("ana", 19, "F");
let estu3 = new Estudiante("jose", 20, "M");
let estu4 = new Estudiante("carmen", 18, "F");

let salon1 = new salon();

salon1.procesarEstudiante(estu1);
salon1.procesarEstudiante(estu2);
salon1.procesarEstudiante(estu3);
salon1.procesarEstudiante(estu4);

let salida = document.getElementById("salida");
salida.innerHTML = `
    Edad promedio: ${salon1.edadPromedio()}<br>
    Estudiante con mayor edad: ${salon1.estudianteMayorEdad()}<br>
    Porcentaje de chicas mayores: ${salon1.porcentajeChicasMayores()}%<br>
    `;
