// Cloud-Coffee - Módulo de cálculo de promociones
// Actividad 2.2 - Versionamiento (feature/descuento-capuchino)

function calcularDescuento() {
  const precioInput = document.getElementById("precio");
  const promoSelect = document.getElementById("promo");
  const resultado = document.getElementById("resultado");

  const precio = parseFloat(precioInput.value);
  const porcentaje = parseFloat(promoSelect.value);

  if (isNaN(precio) || precio <= 0) {
    resultado.style.display = "block";
    resultado.textContent = "Ingresa un precio válido antes de calcular.";
    return;
  }

  const descuento = precio * porcentaje;
  const total = precio - descuento;

  resultado.style.display = "block";
  resultado.innerHTML =
    `Precio original: $${precio.toFixed(2)}<br>` +
    `Descuento aplicado: ${(porcentaje * 100).toFixed(0)}% ($${descuento.toFixed(2)})<br>` +
    `<strong>Total a pagar: $${total.toFixed(2)}</strong>`;
}
