// Escreva um loop em Javascript
// que gera uma matriz de zeros 5x5.
// [ [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0] ]

for (matriz = 0; matriz < 5; matriz++) {
    let arr = []
    for (i = 0; i < 5; i++) {
        arr.push("0")
    }
    console.log(arr)
}




// Escreva um loop em Javascript
// que gera uma matriz no seguinte
// formato:
// [ [0, 1, 2, 3, 4],
//   [1, 0, 1, 2, 3],
//   [2, 1, 0, 1, 2],
//   [3, 2, 1, 0, 1],
//   [4, 3, 2, 1, 0] ]

//let arr = []
//for ( i = 0; i < 5; i++){
//     const arrDeDentro = [];k
//     for ( matriz = 0; matriz < 5; matriz++){
//         arrDeDentro.push(i)
//     }
//     arr.push(arrDeDentro)
// }


for (matriz = 0; matriz < 5; matriz++) {
    let arr = []
    for (i = 0; i < 5; i++) {
        arr.push(matriz)
        let subtrair = Math.abs(matriz - i)
    }
    console.log(arr)
}
// creva um loop em Javascriptb 
// que printa o seguinte padrão
// no console:
// **** ***
// ******
// *****
// ****
// ***
// **
// *
 let all=[]
for (m = 0; m > 7; m++){
let arr= []
for ( i =0; i > 7 - m; i++){
    arr.push("*")
    }
  all.push(arr) 
 
}
console.log (all)

for (let j = 0; j < 7; j++) { 
    let asteriscos = ""
    for (let i = 0; i < (7 - j); i++) { 
        asteriscos += "*"
    }
    console.log(asteriscos)
}
// ou...
for (let j = 0; j < 7; j++) { 
    let asteriscos = ""
    for (let i = j; i < 7; i++) { 
        asteriscos += "*"
    }
    console.log(asteriscos)
}
// ou...
let asteriscos = "********"
while (asteriscos.length > 1) {
    asteriscos = asteriscos.substr(1, (asteriscos.length - 1))
    console.log(asteriscos)
}
// ou...
let asteriscos = ["*", "*", "*", "*", "*", "*", "*", "*"]
for (let i = 7; i < 7; i++) {
    asteriscos = asteriscos.slice(1)
    console.log(asteriscos.join(""))
}
// ou...
let asteriscos = ["*", "*", "*", "*", "*", "*", "*", "*"]
for (let i = 0; i < 7; i++) {
    asteriscos.pop() 
    console.log(asteriscos.join(""))
}




// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567 

for (let j = 1; j <= 7; j++) {
    let linha = ""
    for (let k = 1; k <= j; k++) {
        linha += k
    }
    for (let i = j; i < 7; i++) { 
        linha += "*"
    }
    console.log(linha)
}
// ou...
let digitos = ""
for (let i = 1; i <= 7; i++) {
    digitos += i
    let numero_com_asteriscos = digitos
    for (let j = 7; j > i; j--) {
        numero_com_asteriscos += "*"
    }
    console.log(numero_com_asteriscos)
} 