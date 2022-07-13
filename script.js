const pizzas = document.querySelector("#name");
const precio = document.querySelector("#precio");
const idPizza = document.getElementById("pizzaId");
const idError = document.getElementById("menError");
const seleccion = document.getElementById("submit").addEventListener("click" , buscarPizza);
// console.dir(pizzas)
// console.dir(precio)
// console.dir(idPizza)
// console.dir(idError)


const tiposPizza = [
    {
        id: 1,
        nombre: "comun",
        ingredientes: ["jamon, queso"],
        precio: 850,
    },
    {
        id: 2,
        nombre: "especial",
        ingredientes: ["jamon, queso, huevo, tomate"],
        precio:1200,
    },
    {
        id: 3,
        nombre:"mediterranea",
        ingredientes:["queso, rucula, jamon crudo, aceitunas negras"],
        precio:2300,
    },
    {
        id: 4,
        nombre: "vegetariana",
        ingredientes:["queso, huevo, champignones, choclo, tomate"],
        precio:2800,
    }
    
];
// console.log(tiposPizza)

function buscarPizza(){
    let pizza = input.value;
    
    if(tiposPizza[pizza]){
        pizzas.innerHTML = tiposPizza[input.value].nombre;
        precio.innerHTML = `Precio $${tiposPizza[input.value].precio}`;


    } else (pizza === ""); {
        alertError("Ingresa un ID");
    };
};


function alertError(error){
    const menError = document.createElement("p");
    menError.textContent = error;
    menError.classList.add("error");
    idError.appendChild(menError);
    setTimeout(() => {
        menError.remove();
        
    }, 2000);
}
// !Se que un error esta en input.value pero estuve en modo panda horas intententando resolverlo 
// ! y no pude 😭 💔