const cartoons = [
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
]

// Inicializamos la serie más antigua con el primer elemento
let oldestCartoon = cartoons[0]

// Recorremos el array para encontrar la serie más antigua
for (const cartoon of cartoons) {
  if (cartoon.debut < oldestCartoon.debut) {
    oldestCartoon = cartoon
  }
}

// Guardamos el nombre en una variable
const oldestCartoonName = oldestCartoon.name

// Imprimimos el resultado
console.log('La serie más antigua es:', oldestCartoonName)

/* Resultado esperado:
La serie más antigua es: Mickey Mouse
*/
