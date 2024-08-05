// Inicialización de ventas
let ventas = [];

// Función para agregar una venta
function agregarVenta(nombre, cantidad) {

    ventas.push({ nombre, cantidad });
    actualizarTablaVentas();
}

// Función para anular la última venta
function anularUltimaVenta() {
    if (ventas.length === 0) {
        alert('No hay ventas para anular.');
        return;
    }
    ventas.pop();
    actualizarTablaVentas();
}

// Función para actualizar la tabla de ventas
function actualizarTablaVentas() {
    let tablaVentas = document.getElementById('tablaVentas');
    // Limpiar tabla antes de actualizar
    tablaVentas.innerHTML = ''; 

    ventas.forEach((venta) => {
        let row = tablaVentas.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = venta.nombre;
        cell2.innerHTML = venta.cantidad;
    });
}

// Evento para manejar el formulario de ventas
document.getElementById('ventaForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let nombre = document.getElementById('ventaProducto').value;
    let cantidad = parseInt(document.getElementById('ventaCantidad').value);
    agregarVenta(nombre, cantidad);
    this.reset();
});

// Evento para manejar el botón de anular venta
document.getElementById('anularVentaBtn').addEventListener('click', function () {
    anularUltimaVenta();
});
