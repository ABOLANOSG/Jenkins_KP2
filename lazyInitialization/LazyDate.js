class LazyDate {
  constructor() {
    this._date = null;
  }

  get value() {
    if (!this._date) {
      this._date = new Date();
    }
    return this._date;
  }
}

// Prueba del Lazy Initialization
const before = new Date(); // Paso 1: Memoriza la fecha actual (antes)
const lazyDate = new LazyDate();

setTimeout(() => {
  const memorized = lazyDate.value; // Paso 2: Obtiene el valor de Lazy Init
  console.log('Fecha antes:', before.toISOString());
  console.log('Fecha Lazy:', memorized.toISOString());
  // Paso 3: Compara que la fecha Lazy es posterior a la fecha antes
  console.log('¿Fecha Lazy es posterior a before?', memorized > before);
}, 100); // Espera 100ms para asegurar diferencia de tiempo