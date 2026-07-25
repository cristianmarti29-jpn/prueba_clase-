document.addEventListener('DOMContentLoaded', () => {
  // Manejo de botones de compra
  const botonesComprar = document.querySelectorAll('.btn-comprar');

  botonesComprar.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      const tarjeta = e.target.closest('.tarjeta-producto');
      const nombreProducto = tarjeta.querySelector('h2').innerText;
      const tallaSeleccionada = tarjeta.querySelector('select').value;

      alert(`¡Has añadido "${nombreProducto}" (Talla: ${tallaSeleccionada}) al carrito!`);
    });
  });
});