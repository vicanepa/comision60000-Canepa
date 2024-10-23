const productos = [
    { id: 1, nombre: "Plato Postre", precio: 5500, stock: 10 },
    { id: 2, nombre: "Bowl Carrara", precio: 12000, stock: 15 },
    { id: 3, nombre: "Tenedor Dorado", precio: 4000, stock: 16 },
    { id: 4, nombre: "Cuchillo Dorado", precio: 4000, stock: 18 },
];


const agregarProducto = ({ nombre, precio, stock }) => {
    console.clear();
    const nuevoId = productos.length ? productos[productos.length - 1].id + 1 : 1;
    productos.push({ id: nuevoId, nombre, precio, stock });
    mostrarProductos();
}

const mostrarProductos = () => {
    console.clear();
    // defino una variable por fuera del bucle for, para mostrar las caracteristicas de cada producto.
    let mensajeInformativo = "";
    for (let producto of productos) {
        mensajeInformativo += `

        ID : ${producto.id}
        nombre : ${producto.nombre}
        precio: ${producto.precio}
        stock: ${producto.stock} \n
        `;
    }
    console.log(mensajeInformativo);
};

const solicitarDatosDelProducto = () => {
    let nombreProducto = prompt("Ingresa el nombre del producto");
    let precioDelProducto = parseFloat(
        prompt("Por favor ingresa el precio del producto")
    );
    let stock = parseInt(
        prompt("A continuacion, ingresa la cantidad de unidades disponible")
    );
    if (nombreProducto && !isNaN(precioDelProducto) && !isNaN(stock)) {
        return { nombre: nombreProducto, precio: precioDelProducto, stock };
    } else {
        alert("Por favor ingresa datos validos");
    }
};

const eliminarProducto = (nombre) => {
    console.clear();
    const indice = productos.findIndex(
        (producto) => producto.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (indice !== -1) {
        productos.splice(indice, 1);
        console.log(`Producto ${nombre} eliminado con exito`);
        mostrarProductos();
    } else {
        alert(`Producto ${nombre} no encontrado`);
    }
};

const encontrarOfertas = (precioMaximo) => {
    const productosBaratos = productos.filter(
        (producto) => producto.precio < precioMaximo
    );

    if (productosBaratos.length > 0) {
        console.log("Productos más baratos que " + precioMaximo + ":");
        productosBaratos.forEach((producto) => {
            console.log(producto.nombre);
        });
    } else {
        console.log("No hay productos mas baratos que :" + precioMaximo);
    }
};



const main = () => {
    let opcion = "";

    while (opcion !== "5") {
        opcion = prompt(
            "Selecciona una opcion: \n1. Ver Productos \n2. Agregar Productos \n3. Eliminar Producto \n4. Productos Económicos \n5. Salir"
        );


        switch (opcion) {
            case "1":
                mostrarProductos();
                break;

            case "2":
                const nuevoProducto = solicitarDatosDelProducto();
                if (nuevoProducto) {
                    agregarProducto(nuevoProducto);
                }
                break;

            case "3":
                const productoAElimar = prompt(
                    "ingresa el nombre del producto a eliminar"
                );
                eliminarProducto(productoAElimar);
                break;

            case "4":
                const precioMaximo = parseFloat(
                    prompt("Ingresa el precio maximo a gastar, para encontrar productos más económicos")
                );
                encontrarOfertas(precioMaximo);
                break;

            case "5":
                console.clear();
                console.log("Saliendo...");
                break;

            default:
                alert("Opcion no valida . Por favor selecciona nuevamente");
        }
    };
};

main(); 