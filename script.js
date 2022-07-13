// let pizza = [
//     {
//         id:1,
//         pizza1: "comun",
//         contiene: "jamon, queso"
//     },
//     {
//         id:2,
//         pizza2: "especial",
//         contiene: "jamon, queso, huevo, tomate, anchoas",
//     },
//     {
//         id: 3,
//         pizza3: "lomopizza",
//         contiene: "jamon, queso, huevo, carne, lechuga, tomate, mayonesa, cebolla",
//     }
// ];

// const filtrarId = pizza.filter((valor) => valor.id === 3);
// console.log(filtrarId);








const pizzaName = document.getElementById("name");
const precioPizza = document.getElementById("price");
const input = document.getElementById("pizzaId");
const boton = document.getElementById("btn");
const divError =  document.getElementById("diverror");
// let pizzas = [];

// console.dir(boton)

boton.addEventListener("click", addIdPizza);

// boton.addEventListener('click', () => {
//     if(crearId === 1){
//         elegir("elegiste pizza comun")
//     }

// })
const tiposPizza = [
    {
        id: 1,
        nombre: "Comun",
        ingredientes: ["jamon, queso"],
        precio: 850,
    },
    {
        id: 2,
        nombre: "Especial",
        ingredientes: ["jamon, queso, huevo, tomate"],
        precio:1200,
    },
    {
        id: 3,
        nombre:"Mediterranea",
        ingredientes:["queso, rucula, jamon crudo, aceitunas negras"],
        precio:2300,
    },
    {
        id: 4,
        nombre: "Vegetariana",
        ingredientes:["queso, huevo, champignones, choclo, tomate"],
        precio:2800,
    },
    {
        id: 5,
        nombre:"Alto Lomopizza",
        ingredientes:["queso, huevo, carne, jamon, panceta, tomate, mayonesa, cebolla"],
        precio:3000,
    }
    
];



function addIdPizza() {
    const pizza = input.value;
    if(tiposPizza[pizza]){
        pizzaName.innerHTML = tiposPizza[input.value].nombre;
        precioPizza.innerHTML = `Precio $${tiposPizza[input.value].precio}`;
    } else if(pizza == ''){
        verError("Ingresa un ID");
    } else {
        verError("El ID ingresado no existe")
    }
};

//     // console.dir(input.value);
//     const idPizza = input.value;
//     // console.log(idPizza)

//     if(idPizza === '') {
//         // alert('ingresa un ID');
//         verError("Ingresa un ID");
//     }

//     createHTML();
// };
// function createHTML() {
//     pizzas.forEach((id) => {
//         const p = document.createElement("p");
//         p.innerHTML = `${id.id}`;
//         container1.appendChild(p);
//     })
// }
function verError (error){
    const menError = document.createElement("p");
    menError.textContent = error;
    menError.classList.add("error")
    divError.appendChild(menError);
    setTimeout(() => {
                menError.remove();
                
            }, 2000);

};
// este si queda😀