// Escreva um loop um Javascript
// que vai calcular a soma de todos
// os números entre 0 e 300.
 

   let soma= 0 
for (i = 0; i<= 300; i++){
soma = soma+i
console.log = soma 
}



// Escreva um loop em Javascript
// que vai calcular a seguinte soma:
// 1 * 1 + 2 * 2 + 3 * 3 + ... + 400 * 400

let soma = 1
let multi = 1 

for ( i = 0; i <= 400; i++){
 
  soma = multi+i
  console.log (soma,"soma")
  multi = i*i 
  console.log (`multi ${multi}`)
}

let soma = 1
for ( i = 0; i <= 400; i++){
 
  soma = soma + i*i
  }
  
  let soma = 1
for ( i = 0; i <= 400; i++){
 
  soma = soma + i**2
  }



// Escreva um loop em Javascript
// que vai calcular a seguinte soma:
// 1 * 2 + 2 * 3 + 3 * 4 + ... + 249 * 250

let soma = 1
let multi = 1
for (i = 1; i <= 249; i++){
  soma = soma+multi
  console.log (`soma ${soma}`)
  multi = i*(i+1)
  console.log (`multi ${multi}`)
}

// Escreva um loop em Javascript que
// vai calcular 10! (10 fatorial), o
// que significa 10 * 9 * 8 * 7 ... * 1.
let fator = 10
for( i= 9; i>0; i--){
  fator = fator*i
}



// Escreva um loop em Javascript que 
// calcula quantos termos a soma
// 1 + 2 + 3 + ... precisa para
// que o resultado dela exceda um milhão.

let soma = 0 
let cont = 0 
while ( soma <= 1000000){
  cont = cont + 1
  soma = soma+ cont 

}




// Escreva um loop em Javascript que
// simule o problema 3x + 1.
// ref: https://pt.wikipedia.org/wiki/Conjectura_de_Collatz
// "Esta conjectura aplica-se a qualquer 
// número natural não nulo, e diz-nos para, 
// se este número for par, o dividir 
// por 2 (/2), e se for impar, para 
// multiplicar por 3 e adicionar 1 (*3+1).
// Desta forma, por exemplo, se a sequência 
// iniciar com o número 5 ter-se-á: 5; 16; 8; 4; 2; 1".




// Escreva um loop em Javascript
// que gera uma lista com 100
// número randomicos.




// Escreva um loop em Javascript
// que "lance uma moeda" a cada 
// nova iteração. Considere 1 = cara,
// 0 = coroa. Rode esse loop 1000 vezes e
// printe o numero de caras e o numero
// de coroas no console.