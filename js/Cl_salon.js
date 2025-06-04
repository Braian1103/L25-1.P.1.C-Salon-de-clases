export default class salon {
  constructor() {
    this.cntEstudiantes = 0;
    this.cnEdad = 0;
    this.cntChicas = 0;
    this.cntChicasMayores = 0;
    this.mayorEdad = 0;
    this.mayorNombre = "";
  }
  procesarEstudiante(n) {
    this.cntEstudiantes++;
    this.cnEdad += n.edad;
    if (n.edad > this.mayorEdad) {
      this.mayorEdad = n.edad;
      this.mayorNombre = n.nombre;
    }
    if (n.sexo === "F") {
      this.cntChicas++;
      if (n.edad >= 18) {
        this.cntChicasMayores++;
      }
    }
  }
  edadPromedio() {
    return this.cnEdad / this.cntEstudiantes;
  }
  estudianteMayorEdad() {
    return this.mayorNombre;
  }
  porcentajeChicasMayores() {
    return (this.cntChicasMayores / this.cntChicas) * 100;
  }
}
