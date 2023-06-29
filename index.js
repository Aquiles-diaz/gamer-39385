const productos=[
    {nombre: "1", descripcion: "TECLADO TANKER RAINBOW T-TGK106", precio: 18500},
    {nombre: "2", descripcion: "tECLADO NAXOS T-TGK310", precio: 30000 },
    {nombre: "3", descripcion: "TECLADO BORA RAINBOW T-TGK313",precio: 17800 },
    {nombre: "4", descripcion: "TECLADO ARENA T-TGK321-RGB",precio: 38000 },
    {nombre: "5", descripcion: "TECLADO BORA RGB T-TGK315",precio: 32000},
    {nombre: "6", descripcion: "TECLADO BORA ARENA T-TGK321",precio: 183000 },
]

let carrito =[]
alert("¡Hola Somos De ADRX Technology! Marcar con un SI o NO y aguarde un momento");
let sel= prompt ("¿Quiere comprar algun producto ADRX Si o No?");
while(sel != "si" && sel != "no") 
{
  let  sel = prompt ("¿Desea Comprar Algun Producto?");
}

if(sel == "si")
{
    alert ("Lista  de Productos ADRX Technology");
    let todoslosTeclados = productos.map((productos)=> `${productos.nombre} ${productos.descripcion}  \$ ${productos.precio}`);
    alert(todoslosTeclados.join(" - "));
}
else if(sel == "no")
{
    alert("Gracias por su visita y Confiar en ADRX  vuelva pronto!");
}
while(sel != "no")
{
    let producto = prompt ("Agregar  un producto a tu Carrito y se tomara tu Pedido Inmediatamente");
    let precio = 0;

    if(producto == "1" || producto == "2" || producto == "3" || producto == "4" || producto == "5" || producto == "6")
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
        alert("¡Gracias por su compra Regrese Pronto!");
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

alert("El total de su compra es: " + total);

