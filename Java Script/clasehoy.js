let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;
}

console.log("Fin del bucle.");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


const animales = ["Perro", "Gato", "Conejo", "Caballo", "Elefante"];

for (let i = 0; i < animales.length; i++) {
  console.log(animales[i]);
}

setTimeout(() =>{
    console.log("Esto se ejecuta despues de 2 segundos");
}, 2000);

setInterval(() => {
   console.log("Esto se ejecuta cada 2 segundos"); 
}, 2000);

let animal =["perro", "gato", "caballo", "conejo", "koala"];

let extension = animal.length -1;

for(let i=0; i<=extension; i++){
  console.log(animal[i]);
}
