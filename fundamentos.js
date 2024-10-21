//JS - lado del cliente 


//Variable: contenedor de información 
//Tipos Simples 
let data = 12 //entero
let data1 = 23.6 //float 
let data2 = "hola" // string
let data3 = '@' //char
let data4 = false //booleano
let data5 =  undefined //ubdefine

//Tipos Compuestas 
let data6 = ['hola',54, false] //array 
let user = {         // objeto
    name: "Byron", 
    activo: true 
}

//no usar var - hoisting
//UTILIZAR LET Y CONST 


//-------------------------------------


//String  - cadena de caracteres 
let password = "          1234          "
//Propiedades - metodos, propiedad --> swin parentesis
console.log(password.length);
//Metodos  
console.log(password.trim())  //trim ---> quita espacios al inicio y al final 
console.log(password.includes('3')); //inclues ---> edetecta cualquier cambio y reinicia la terminal 
console.log(password.toUpperCase()); //
console.log(password.toLocaleLowerCase()); //
//E6 - nuwvas caracteristicas 
//Template strings --> Mezcla texto y variable (los concatena)
console.log(`eL PASSWORD DE JUAN ES: ${password}`);

// ------------------------------------------
let gamePrice1 = "500.35"
let gamePrice2 = 500.35

//Casting - ES6 ---> Tan solo se coloca un signo delante del numero que esta como string, signo: + 
console.log(-gamePrice1 + gamePrice2); 
// Orden de operaciones                                                                                                                            
//-------------------------------------------
//Condicionales 
let userCardBalance = 500; 
let cardBalance = 100; 
//ES6 Operador terneario (if - else), si pay sino consuming

let result = cardBalance <= userCardBalance /*Cndicion*/? "Pay" : "Consuming" ; 
let email 
!email ? console.log("Proviene un email") : console.log(" Registrate");


//Valores verdaderos - truthy 
//Valores falsos - falsy 
let userID =  "123" ? console.log("User found") : console.log("User does not  exit");

// Loops 
const  goals = ['Learn Js', 'Play Soccer', 'Watching Netflix', "Enjoy the "]

goals. forEach((goal)=>{
    console.log(goal)

} /*Callback: una funcion pasa como argumento a otra funcion  */)




//Clase 03 
//Funcion anonima y autoejecutables 
/*(function(){
    console.log("E jecución de una función");
})()*/
//fUNCIÓN DECLARADA
function getAvatar(){
    console.log('')
}
//Función expresada
const conecctionBDD=function(){
    console.log("cONEXIÓN EXITOSA")
}
const token = "Mireya"; 
//Argumentos
const validarEmailAndToken = function(email, token){
    console.log(`El token es ${token} y el email es ${email}`);
}
validarEmailAndToken(); 
//Que se puede retornar en una función 
function TipoDeRetornos (){
    //Lógica
    //return "Usuarios premium"
    return {
        name: "Mireya",
        id: 854
    }
} 
TipoDeRetornos()
//ES6 
const conecctionBDDMongo = () =>{
    console.log("CONEXIÓN EXITOSA"); 
}
//Camino largo
const registerUser = () => {
    console.log("user register"); 
}
//Camino corto 
const registrarUsuario = email => console.log("usuario registrado"); 

//------------------------------------

//Objetos
const datosBananeritoGood = {
    name: "Bananerito", 
    age: 1, 
    address:{
        city: "Machala", 
        telephone: 123, 
    }, 
    friends: ['Rodrigo','Toreto'],
    status: true
}
console.log(datosBananeritoGood.name); 
console.log(datosBananeritoGood.friends);
console.log(datosBananeritoGood.status); 
const nameB = datosBananeritoGood.name; 
const friendsB = datosBananeritoGood.friends; 
//ES6 //DESESTRUCTURACIÓN
const {name, age, address, friends, status} = datosBananeritoGood
console.log(age);
//Propiedades 
//Agregar 
datosBananeritoGood.photo = 'BBNERITO.png'
//Eliminación
//Solo se elimina la propiedad
delete datosBananeritoGood.age

console.log(datosBananeritoGood)
//VALUES DEVUELVE UN ARREGLO EN EL QUE SE VERIFICA SI EXISTE UN VALOR VACIO 
Object.values(datosBananeritoGood).includes("") ? console.log("Error") : console.log("OK")
//1: CAMPOS, 2 ALMACENO EN UN OBJETO, 3 VALIDO, 4 ENVIO A BASE DE DATOS

//--------------------
//OBJETO 02
//Operador spreade (Expandir)  
const lunch = {
    nameL: "Pollo Broaster", 
    price: 5
}

const drinks = {
    NAME: "Jugo de coco", 
    sweet: false
}
//NOTA: NO COLOCAR POPIEDADES CON EL MISMO NOMBRE
const oderUser = { ...lunch, ...drinks}
console.log(oderUser); 
// ES6 
// Nombres abreviador de propiedades: si se tiene el valor y la clave con nombres iguales no es necesario esta estructura clave: valor. 
const nameVideoGame = "MarioKart"
const priceViDEOgAME = 89
const VideoGame = {
    nameVideoGame,
    priceViDEOgAME
}

//Gestión de vernta del tanque de gas 

const boys = ["Peter", "Juan", "Luisa", "Ahahi", "Matheus"]

const costumers = [
    {
        name: "Luis", 
        order:45, 
        place:"Floresta"
    },
    {
        name: "Janneth", 
        order:45, 
        place:"Villaflora"
    },
]

boys.forEach((boy,i)=>{console.log(`${i+1}-${boy}`)})
costumers.forEach((c,i)=>console.log(`${i+1} ${c.order} ${c.name}`))

//

const services = [
    {
        name:"Basic", 
        mount: 5,
        image: "photo/service1.png", 
        datalis: ["Atención diaria", "Seguro médico"]
    }, 
    {
        name:"Plus", 
        mount: 25, 
        image: "photo/service2.png", 
        detalis: ["Atención segura", "mas"]
    }
]
//For each para cuando deseo iterar sin qauerer modificar el arreglo original 
//Si solo se desea mostrar cierta información con map se moldea la información que se desea. 
const newService = services.map(s => (
    {
        name: s.name, 
        image: s.image
    }
))
console.log(newService); 
//Se puede ejecutar de esta forma arreglo.map(parametro =>(Instrucciones))

const equipments = ["Tubo de Oxigeno","Camilla", "Termometros", "Medidores de P."];
//es6
//Desestructuración  Darle variables independientes a cada elemento de una array
const [EQUIPTMENT1, EQUIPTMENT2, EQUIPTMENT3, ] = equipments
//Para cuado quiero solo almacenar en una variable a solo un elemento 
const [,,, EQUIPTMENT4] = equipments
console.log(EQUIPTMENT4)

//Grupo 3
const categories = ["Camas", "Balanceados", "Juquetes", "Accesorios", "Ropa","123"]
categories.length >= 5 ? console.log("Registrar categoria") : console.log("No se puede registrar")
//Agregar al final del arreglo 
categories.push("Medicamentos")
console.log(categories)
//Agrega al inicio del arreglo
categories.unshift("Adopciones")
//Remueve el ultimo del arreglo y lo retorna 
categories.pop()
//Elimina el primer elemento del arreglo
categories.shift()
let resultadoCategorie = categories.find((C) => (C === "Camas"))
resultadoCategorie ? console.log("Mostrar subcategorias") : console.log("No existe categoria")
//Se muestra todas las categorias con la letra que se esta buscando 
let resultadoCategorieFilter = categories.filter((C) => (C.startsWith("W")))
console.log(resultadoCategorieFilter)
//ES6 
const servicesChages = ["Grúa", "Material", "Herramientas"]; 
const servicesMachines = ["Volqueta", "Trailer", "Tractores"]; 
//...REST (AGRUPAR)
//Las restantes se guardar en la variable "machines"
let [machine1, machine2, machine3, ...machines] = servicesMachines
//...SPREAD (EXPANSIÓN, UNIR LOS ARREGLOS)
let allServices = []
allServices = [...servicesChages, ...servicesMachines]
console.log(allServices)

//-----------------------------------------------------
//Manipulación del DOM 
//DOM - API PARA MANIPULAR LOS ELEMENTOS DE UN HTML
//JS - HTML (GACIAS A UN MOTOR DE PLANTILLAS PUEDE CONSIDERASE COMO LENGUAJE DE PROGRAMCIÓN)
//JS PURO - VANILLA JS
//PROGRAMACION 
//Progrmación Asincrónica 
// - callback 
const getUserBDD = () => {console.log({id:123, name05: "Pancho", rol:"Administrador"})}
setTimeout(getUserBDD, 5000);

//callback - hell
//Promesas
const CONEXIONbddeXTERNA = (dataConection) => {
  return new Promise((resolved, reject)=>{
    setTimeout (()=>{
        dataConection ? resolved("Connecction-OK") : reject("Conection bad")
    }, 3000)
  })
}

//then y catch
CONEXIONbddeXTERNA(false)
    .then(/*Callback*/ (response)=>{console.log(response)})
    .catch((error)=>{console.log(error)})

//Forma moderna 
// Async - await
const verifyConnection = async()=>{
   try {
    console.log(await CONEXIONbddeXTERNA (true)); 
   } catch (error) {
    console.log(error); 
   }
}
verifyConnection()

//Consumo
fetch("https://dog.ceo/api/breeds/image/random")
    .then((request)=>(request.json()))
    .then((data)=>{console.log(data)})
    .catch((error)=>(console.log(error)))

const getDog = async () => {
  try {
    let request = await fetch("https://dog.ceo/api/breeds/image/random");
    let data = await request.json(); 
    console.log(data); 
  } catch (error) {
    console.log(error); 
  }
}
getDog()
//lerx9FDWD5PH78M207Cj95ac4KTt8G3vv
//token: api.giphy.com/v1/stickers/trending
const tokenGy = "lerx9FDWD5PH78M207Cj95ac4KTt8G3v"
const url = "http://api.giphy.com/v1/stickers/trending"
fetch(`${url}?api_key=${tokenGy}`)
    .then((request)=>(request.json()))
    .then((data)=>{console.log(data)})
    .catch((error)=>(console.log(error)))
// Hacer el consumo Autenticación para la web 
// Faceio
// Public Apis
// Apis Ninga 
// CONSUMIR LA API PRIVADA Y DESPÚES SE CONSUMEN LAS APIS PUBLICAS 

//-----------------------------------------------------------------------

//ADVANCE 
// NPM INIT-T : iNFORMACIÓN DEL PROYECTO, "INDEX.JS", --Y = A todo le dice que sí 
// packege.lock :mantiene una versión igual que tienen el desarrollador 1 al desarrollador 2. con "npm i" para que se genere el directorio nodede_modules, no se debe pasar el archivo "node_modules"
// Ruta: ¿Qué es lo que desea el consumidor? Dar la respuesta al usuario, darle un recurso al usuario, cliente realiza la solicitud 
//       el servidor responde a dicha solicitud. El servidor debe tener registrado la ruta para que se le entregue el recurso solicitado al cliente. 
//       El enpoind se envía al servidor y este verifica si la ruta esta registrada y le entrehga el recurso solicitado. Algo que se llame como el enpoidt. 
//       Se puede solicitar de diferentes formas
// Response como se entregara la solicitud
// Middleware: Seguridad, dice el nivel de acceso, ¿Pasa o no pasa?  
// Autorización: Nivel de acceso 
// Autenticación: 
const express = require('express');
const app = new express(); //Inicializar Express
app.use(express.json());

//Ruta/ 
app.post('/register', (req, res)=>{
    const {email, password} = req.body /*Desmenusar el contenido*/;
    email === "mire@epn.edu.ec" ? res.send("User registred") : res.send("bad credentiales"); 
})

//Ruta / 
/*app.get('/', (resq, res)=>{
    res.send("Hola")
})*/
//Ruta 02 "/franquicias"
app.get('/franquicias', (resq, res)=>{
    res.send("Información de franquicias")
})
//Ruta 03 "/simple"
app.get(/*Para backend se llaman rutas (para fronted: endpoint) : */'/simple', (resq, res)=>{
    /*Recursos : */res.send("Hamburguesa simple")
})

//Ruta /products/:id
app.get('/products/:id',(req,res)=>{
    const {id} = req.params
    const products = [
        {
            id: 56, 
            title: "Laptop", 
            price: 500
        },
        {
            id:77, 
            title: "Play 5", 
            price: 800
        }
    ]
    console.log(req.params)
    const response = products.find((product)=>product.id === +id); 
    response ? res.send(response):res.send("Product not found"); 
})

//Ruta /search
app.get('/search', (req, res)=>{
    //Desestruccion
    const{orden}=req.query;
    //Objeto
    const responses = {
        pollo:"Pollo del Hornero",
        milanesa: "Milanesa de pollo"
    }

    const response = responses[orden] || "No existe"; 
    res.send(response)
})
//Diferentes respuestas del servidor
//RUTA
app.get('/', (req, res)=>{
    res.send("Landing Page de bienvenida")
})
//texto
//RUTA / dashboard
app.get('/dashboard',(req, res)=>{
    const json = {
        name: "mireya"
    }
    res.json(json)
})
//Json
//RUTA / profile 
/*app.get('/user/profile', (req, res)=>{
    //_dirname = da el path
    res.sendFile('./a.jpg', {
        root:__dirname
    })
})*/

app.get('/user/profile', (req, res)=>{
    //_dirname = da el path
    res.sendFile('Clase.pdf', {
        root:__dirname
    })
})
//Ruta /404
app.get('/mouse', (req, res)=>{
    res.send(
        "<h1>Pagina no encontrada -404<h1></h1>"
    )
})
//Esto es un middleware resquest: lo que se solicita 
app.use((resq, res)=>{res.send("<h1>Pagina no encontrada -404<h1>")})

app.listen(3000)

console.log("server ok")

//Ruta/ 

//Middleware (Se encuentra entre el request y el response) es intermediaro 
//            verifica si da o no el acceso 
///           El "use" te indica si es un middleware
//            Se controla el acceso 
//Response = El tipo de recurso que el servidor enviará o no

app.use((req, res, next)=>{
    const {token} = req.body; 
    const response = token === "123"  ? true : false
    //sIN EL NEXT NO PASA A LA SECCION DE RUTAS 
    response ? next(): res.status(409).json({msg:"invalid token"})
})
//RUTAS
app.get("/gifs", (req, res)=>{
    res.send("Lista de gifs"); 
})
//Servidor 
app.listen(3000); 









                                                           

