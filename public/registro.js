// // Obtén una referencia al botón
// const miBoton = document.getElementById('miBoton');

// // Agrega un manejador de eventos para el clic del botón
// miBoton.addEventListener('click', () => {
//   // Código que se ejecutará cuando se haga clic en el botón
//   alert('¡El botón fue clickeado!');
// });

// Obtener referencias a los elementos HTML
const animalInput = document.getElementById('nombre');
const valorInput = document.getElementById('valorInput');
const incrementarBtn = document.getElementById('incrementarBtn');
const tabla = document.querySelector('tbody');

// Agregar un manejador de eventos para el clic del botón
incrementarBtn.addEventListener('click', (e) => {

  e.preventDefault(); // Evitar que la página se recargue por defecto
   
  const animalBuscado = animalInput.value;
  const valorAIncrementar = parseInt(valorInput.value); // Convertir a número

  // Recorrer las filas de la tabla para encontrar el animal
  const filas = tabla.querySelectorAll('tr');
  for (const fila of filas) {
    const celdas = fila.querySelectorAll('td');
    const animalEnTabla = celdas[1].textContent;

    if (animalEnTabla === animalBuscado) {
      // Encontramos el animal, incrementar el valor numérico
      const valorActual = parseInt(celdas[2].textContent);
      celdas[2].textContent = (valorActual + valorAIncrementar).toString();
      break; // Salir del bucle una vez que se haya actualizado
    }
  }
   // Limpiar los campos del formulario después de guardar
   animalInput.value = ''; // Limpiar el campo del tipo de animal
   valorInput.value = '';  // Limpiar el campo del valor a agregar
   descripcion.value= ''; //Limpiar el campo del valor caracteristicas
});

