

const sum = (...numbers) => {
  return numbers.reduce((acc, n) => acc + n)
}

console.log(sum(29, 28, 14, 11, 18, 05))