// let nombre = prompt("Ingrese una estación").toLowerCase()
// if(nombre == "verano")
//   alert("La estación inicia el 21 de Diciembre y finaliza el 20 de Marzo")
// else if(nombre == "otoño")
//   alert("La estación inicia el 21 de Marzo y finaliza el 20 de Junio")
// else if (nombre == "invierno")
//   alert("La estación inicia el 21 de Junio y finaliza el 20 de Septiembre")
// else if(nombre == primavera)
//   alert("La estación inicia el 21 de Septiembre y finaliza el 20 de Diciembre")
// else
//   alert("Esto no es una estación")

let nombres = prompt("Ingrese una estación").toLowerCase()
switch(nombres){
    case "verano":
        alert("La estación inicia el 21 de Diciembre y finaliza el 20 de Marzo");
        break;
    case "otoño":
        alert("La estación inicia el 21 de Marzo y finaliza el 20 de Junio");
        break;
    case "invierno":
        alert("La estación inicia el 21 de Junio y finaliza el 20 de Septiembre");
        break;
    case "primavera":
        alert("La estación inicia el 21 de Septiembre y finaliza el 20 de Diciembre");
        break;
   default:
   alert("Esto no es una estación");
   break;
}

function saludar(){
    console.log("¡Hola!")
}

function saludar(Nombre){
    console.log("¡Hola " + Nombre + "!")
}

saludar("Agustin")

function sumas(a, b){
    const res = a+b
    return res
}

console.log(sumas(5,7))

function sumar(a, b) {
const suma = a + b
const resultado = `El resultado de la suma es ${suma}`;
return resultado;
}
console.log( sumar( 5, 3 ) );

const sumando = sumar;
console.log( sumando ( 5, 3 ) );

function multiplicar(a, b = 1) {
    const resultado = a * b;
    return resultado;
    }
    console.log(multiplicar(5)); 
    console.log(multiplicar(5, 3));

const multiplicara = function(a, b) {
    return a * b;
    };
const resultado = multiplicara(5, 3);
console.log(resultado); 

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
    }
    const persona1 = new Persona("Juan", 25);
    const persona2 = new Persona("María", 30);
    persona1.saludar();
    persona2.saludar();

const func = function () {
    return "Función tradicional.";
    };

const funci = () => {
    return "Función flecha.";
    };

    const func1 = () => "Función flecha."; 
    const func2 = (e) => e + 1;
    const func3 = (a, b) => a + b;

    function ejemplo() {
        const variableLocal = 10; 
        console.log(variableLocal);
        }
        ejemplo();
        // console.log(variableLocal); 

let variableGlobal = 5;
function ejemplos() {
console.log(variableGlobal);
variableGlobal = 10;
}
ejemplos();
console.log(variableGlobal);

function ejemplar() {
    if (true) {
    var x = 10;
    console.log(x);
    }
    console.log(x);
    }
    ejemplar();
    // console.log(x);


console.log("Hola");

let mivariable = "mensaje";

let numero = 8;

let decimal = 8.5;

let booleano = true;

console.log(mivariable)
console.log(numero)
console.log(decimal)
console.log(booleano)

let miNombreDeVariable = "mensaje"
let arrayFrutas = ["uva","naranja","manzana"]
console.log(arrayFrutas)

let miObjeto = {
  nombre: "firulais",
  edad: 8,
  color: "marron"
}

console.log(miObjeto);
console.log(miObjeto.nombre)

let nombre = "John"
let apellido = "Doe"
let nombreCompleto = nombre + " " + apellido
console.log(nombreCompleto)
console.log(nombre + " " + apellido)

let num1 = 10
let num2 = 5
let num3 = 15

console.log(num1 > num2)

num1 += 5
console.log((num1>num2) || (num2>num3))

let numeros = 1;

if (numero > 0 ){
  console.log("El numero es mayor a 0")
}
else if (numero == 0){
  console.log("El numero es 0")
}
else console.log("El numero es menor a 0")

let fruta = "Manzana"
let precio
switch (fruta) {
  case "Naranja":
    precio = 2
    break;
  case "Limon":
    precio = 4
    break;
  case "Manzana":
    precio = 3
    break;
  case "Uva":
    precio = 2.5
    break;
  default:
    precio = "no encontrado"
    break;
}
console.log("El precio de " + fruta + " es $" + precio)

let numer = 10;
console.log(numer);  // Salida: 10

let texto = "Hola, mundo!";
console.log(texto);  // Salida: Hola, mundo!

let verdadero = true;
let falso = false;
console.log(verdadero);  // Salida: true
console.log(falso);      // Salida: false

let arreglo = [1, 2, 3, 4, 5];
console.log(arreglo);  // Salida: [1, 2, 3, 4, 5]

let objeto = { nombre: "Juan", edad: 25 };
console.log(objeto);  // Salida: { nombre: "Juan", edad: 25 }

let nume1 = 10;
let nume2 = 5;
let suma = nume1 + nume2;
console.log(suma);  // Salida: 15

let nume3 = 10;
if (nume3 > 0) {
  console.log("El número es positivo");
}

let num4 = 4;
if (num4 % 2 === 0) {
  console.log("El número es par");
}

let num5 = -2;
if (num5 > 0) {
  console.log("El número es mayor que cero");
} else if (num5 < 0) {
  console.log("El número es menor que cero");
} else {
  console.log("El número es igual a cero");
}

let texto1 = "Hola";
if (texto1.length > 5) {
  console.log("La cadena de texto tiene más de 5 caracteres");
}

let arreglo1 = [];
if (arreglo1.length === 0) {
  console.log("El arreglo está vacío");
}

let fruit = "manzana";
let price;

switch (fruit) {
  case "manzana":
    price = 1.5;
    break;
  case "banana":
    price = 0.5;
    break;
  case "naranja":
    price = 0.8;
    break;
  case "kiwi":
    price = 1.2;
    break;
  default:
    price = "Fruta no encontrada";
}

console.log("El precio de la fruta es: " + price);

let frutas = "manzana";

switch (frutas) {
  case "manzana":
    console.log("El precio de la manzana es: 1.5");
    break;
  case "banana":
    console.log("El precio de la banana es: 0.5");
    break;
  case "naranja":
    console.log("El precio de la naranja es: 0.8");
    break;
  case "kiwi":
    console.log("El precio del kiwi es: 1.2");
    break;
  default:
    console.log("Fruta no encontrada");
}

let opcion = 2;

switch (opcion) {
  case 1:
    console.log("Opción 1 seleccionada");
    break;
  case 2:
    console.log("Opción 2 seleccionada");
    break;
  case 3:
    console.log("Opción 3 seleccionada");
    break;
  default:
    console.log("Opción no válida");
}

let dia = 1;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Día no válido");
}

let calificacion = "A";

switch (calificacion) {
  case "A":
    console.log("Excelente");
    break;
  case "B":
    console.log("Bueno");
    break;
  case "C":
    console.log("Regular");
    break;
  case "D":
    console.log("Suficiente");
    break;
  case "F":
    console.log("Insuficiente");
    break;
  default:
    console.log("Calificación no válida");
}

let figura = "triangulo";

switch (figura) {
  case "cuadrado":
    console.log("Figura cuadrada");
    break;
  case "triangulo":
    console.log("Figura triangular");
    break;
  case "circulo":
    console.log("Figura circular");
    break;
  default:
    console.log("Figura desconocida");
}

