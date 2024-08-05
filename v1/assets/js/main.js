// Inicialización de inventario y ventas
let inventario = [];
let ventas = [];

// Función para agregar producto al inventario
function agregarProducto(nombre, cantidad) {
    let productoExistente = inventario.find(producto => producto.nombre === nombre);
    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        inventario.push({ nombre, cantidad });
    }
    actualizarTablaInventario();
}

// Función para agregar una venta
function agregarVenta(nombre, cantidad) {
    let productoEnInventario = inventario.find(producto => producto.nombre === nombre);
    if (productoEnInventario && productoEnInventario.cantidad >= cantidad) {
        ventas.push({ nombre, cantidad });
        productoEnInventario.cantidad -= cantidad;
        actualizarTablaVentas();
        actualizarTablaInventario();
    } else {
        alert('Producto no disponible o cantidad insuficiente.');
    }
}

// Función para anular la última venta
function anularUltimaVenta() {
    if (ventas.length === 0) {
        alert('No hay ventas para anular.');
        return;
    }

    // Eliminar la última venta
    let ultimaVenta = ventas.pop();

    // Buscar el producto en el inventario y revertir la cantidad
    let productoEnInventario = inventario.find(producto => producto.nombre === ultimaVenta.nombre);
    if (productoEnInventario) {
        productoEnInventario.cantidad += ultimaVenta.cantidad;
    }

    actualizarTablaVentas();
    actualizarTablaInventario();
}

// Función para actualizar la tabla de ventas
function actualizarTablaVentas() {
    let tablaVentas = document.getElementById('tablaVentas');
    tablaVentas.innerHTML = '';

    ventas.forEach((venta, index) => {
        let row = tablaVentas.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = venta.nombre;
        cell2.innerHTML = venta.cantidad;
    });
}

// Función para actualizar la tabla de inventario
function actualizarTablaInventario() {
    let tablaInventario = document.getElementById('tablaInventario');
    tablaInventario.innerHTML = '';

    inventario.forEach((producto, index) => {
        let row = tablaInventario.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = producto.nombre;
        cell2.innerHTML = producto.cantidad;
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

// Evento para manejar el formulario de inventario
document.getElementById('inventarioForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let nombre = document.getElementById('productoNombre').value;
    let cantidad = parseInt(document.getElementById('productoCantidad').value);
    agregarProducto(nombre, cantidad);
    this.reset();
});
