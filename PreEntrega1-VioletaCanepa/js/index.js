function mostrarProductos() {
    let productos = "Catálogo de productos: \n";
    productos += "1. Botella vidrio con tapa - $7000 \n";
    productos += "2. Taza de vidrio - $4000 \n";
    productos += "3. Cazuela 2 asas hierro - $35000 \n"; 
    productos += "4. Cepillo de silicona largo - $3000 \n"; 
    return productos;
}

function comprarProducto() {
    let total = 0;
    let seguirComprando = true;

    while (seguirComprando) {
        let catalogo = mostrarProductos();
        let eleccion = prompt(
            catalogo +
            "Por favor elija un producto ingresando el número o escriba 'salir' para finalizar "
        );

        if (eleccion === null || eleccion === "") {
            alert("No has ingresado un dato válido");
            continue;
        }

        if (eleccion.toLowerCase() === "salir") {
            break;
        }

        eleccion = parseInt(eleccion);

        if (isNaN(eleccion) || eleccion < 1 || eleccion > 4) {
            alert("Producto no válido, selecciona nuevamente");
            continue;
        }

        switch (eleccion) {
            case 1:
                total += 7000;
                alert("Has agregado Botella vidrio con tapa");
                break;
            case 2:
                total += 4000;
                alert("Has agregado Taza de vidrio");
                break;
            case 3:
                total += 35000; // Corregido el formato del precio
                alert("Has agregado Cazuela 2 asas hierro");
                break;
            case 4:
                total += 3000;
                alert("Has agregado Cepillo de silicona largo");
                break;
            default:
                alert("Opcion no valida");
                break;
        }

        let respuesta = prompt("¿Quieres seguir comprando? (si/no)");

        seguirComprando = respuesta && respuesta.toLowerCase() === "si";
    }

    // aplica el 10% de descuento si la compra es igual o mayor que $15000
    if (total >= 15000) {
        let descuento = total * 0.10; 
        total -= descuento;
        alert(`Se ha aplicado un descuento del 10%. El total final es de: $${total}`);
    } else {
        alert(`Gracias por su compra. Tu total es de: $${total}`);
    }
}

comprarProducto();