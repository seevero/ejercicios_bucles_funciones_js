const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
]

function findMutantByPower(mutants, power) {
  // Filtramos los mutantes que tengan el poder buscado
  const foundMutants = mutants.filter((mutant) => mutant.power === power)

  if (foundMutants.length > 0) {
    const names = foundMutants.map((m) => m.name).join(', ')
    return `Mutante(s) encontrado(s) con el poder "${power}": ${names}`
  } else {
    return `No se encontró ningún mutante con el poder "${power}".`
  }
}

console.log(findMutantByPower(mutants, 'telepathy'))
// Mutante(s) encontrado(s) con el poder "telepathy": Professor X

console.log(findMutantByPower(mutants, 'regeneration'))
// Mutante(s) encontrado(s) con el poder "regeneration": Wolverine

console.log(findMutantByPower(mutants, 'invisibility'))
// No se encontró ningún mutante con el poder "invisibility".
