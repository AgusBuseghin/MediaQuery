let persona = {
    nombre: "Juan",
    Edad: 30,
    Genero: "masculino"
  };
  
  for (propiedad in persona){
    console.log(propiedad + ": " + persona[propiedad]);
    // otra forma
    console.log(`${propiedad}: ${persona[propiedad]}`)
  }
  
  let numeros = [1, 2, 3, 4, 5];
  for (let numero of numeros){
    console.log(numero);
  }
  let frutas = ["uva", "naranja", "manzana"];
  
  for (let fruta of frutas){
    console.log(fruta);
  }
  
  let person = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30
  };
  
  for (propiedad in person){
    console.log(`${propiedad}: ${person[propiedad]}`)
  }