// BONUS - 1

/* 
Resultado esperado:
n = 5

*****
*****
*****
*****
*****
*/

let n = 5;

/*for (let index = 0; index < n; index +=1) {
    console.log ("*****")
}
*/
 
for (let indexLinha = 0; indexLinha < n; indexLinha +=1) {
    let asteristicos = " ";
    for (let index = 0; index < n; index += 1) {
        asteristicos += "*";
    }
    console.log (asteristicos);
}
