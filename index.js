const productos=[
    {nombre: "1", descripcion: "teclado tanker RAINBOW T-TGK106", precio: 18500},
    {nombre: "2", descripcion: "teclado naxos T-TGK310", precio: 30000 },
    {nombre: "3", descripcion: "teclado bora  RAINBOW T-TGK313",precio: 17800 },
    {nombre: "4", descripcion: "teclado arena T-TGK321-RGB",precio: 38000 },
    {nombre: "5", descripcion: "teclado bora RGB T-TGK315",precio: 32000},
    {nombre: "6", descripcion: "teclado arena T-TGK321",precio: 183000 },
]

let carrito =[]

let sel= prompt ("¿Desea comprar algun producto SI o NO?");

while(sel != "si" && sel != "no") 
{
    alert("Por favor ingresar SI o NO");
    sel = prompt ("¿Desea comprar algun producto SI o NO?");
}

if(sel == "si")
{
    alert ("Listado de Productos");
    let todoslosProductos = productos.map((productos)=> `${productos.nombre} ${productos.descripcion}  \$ ${productos.precio}`);
    alert(todoslosProductos.join(" - "));
}
else if(sel == "no")
{
    alert("Gracias por su visita, regrese pronto!!");
}
while(sel != "no")
{
    let producto = prompt ("agraga un producto a tu carrito");
    let precio = 0;

    if(producto == "1" || producto == "2" || producto == "3" || producto == "4" || producto == "5" || producto == "6" || producto == "7" || producto == "8" || producto == "9")
    {
       switch (producto) 
       {
        case "1":
            precio= 18500;
            break;
        case "2":
            precio= 30000;
            break;
        case "3":
            precio= 17800;
            break;
        case "4":
            precio= 38000;
            break;
        case "5":
            precio= 32000;
            break;
        case "6":
            precio= 183000;
            break; 
       }
    let unidades = parseInt(prompt("¿Cuantas unidades desea?"));
    carrito.push({producto, unidades, precio})
    console.log(carrito);
    }
    else
    {
        alert ("No contamos con ese producto");
    }
    sel = prompt ("¿Desea continuar comprando?");
    while (sel == "no")
    {
        alert("Gracias por su compra");
        carrito.forEach((carritoFinal) => 
        {
             console.log(`producto: ${carritoFinal.producto}, undades: ${carritoFinal.unidades},
              total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log (`El total a pagar por la compra es: ${total}`);

alert("El total de su compra es:" + total);

