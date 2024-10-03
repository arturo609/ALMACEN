let productos = [
    {
        nombre: "gorditas",
        precio: 15,
        categoria: "alimento"
    },
    {
        nombre: "burrito",
        precio: 15,
        categoria: "alimento"
    },
    {
        nombre: "tostadas",
        precio: 100,
        categoria: "alimento"
    },
    {
        nombre: "sopes",
        precio: 150,
        categoria: "alimento"
    },
    {
        nombre: "lonches",
        precio: 25,
        categoria: "alimento"
    },
    {
        nombre: "tortillones",
        precio: 15,
        categoria: "alimento"
    },
    {
        nombre: "empanada",
        precio: 15,
        categoria: "alimento"
    },
    {
        nombre: "huevo con choriso",
        precio: 25,
        categoria: "alimento"
    },
    {
        nombre: "huevo con salchicha",
        precio: 25,
        categoria: "alimento"
    },
    {
        nombre: "homelet",
        precio: 1000,
        categoria: "alimento"
    }
];

 

let precio_alto = productos
.filter(producto => producto.categoria = "alimento" && producto.precio >= 100)
.map(producto => ({ nombre: producto.nombre, precio: producto.precio }));

console.log(precio_alto);

//Explica cómo funcionan estos métodos y cuál es su utilidad.
//filter(), esto me permitehacer un filtro de esta lista de productos para elegr algo en especifico y mostrarlo
//map(),  este me permite hacer un nuevo areglo  de el areglo original