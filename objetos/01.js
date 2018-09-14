// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon

const pokemon = {
    "nome": "Vulpix",
    "nomeJapones": "Rokon",
    "cor": "laranja",
    "corDosOlhos": "azul",
    "numeroNacional": "037",
    "numeroEmJohto": "127",
    "evolution": "ovo"

}


// 2.
// Printe no console a seguinte
// frase: "Hello, my name is < >.
// And my name in Japanese is < >."
console.log(`Hello, my name is ${pokemon.nome}`)
console.log(`And my name in Japonese is  ${pokemon.nomeJapones}`)



// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `can_fly` 
// (ou algo do tipo) e defina
// ela como `true` ou `false`.
pokemon.can_fly = false




// 4.
// Adicione um método ao seu pokemon
// chamado `fly` que retorna "Sorry,
// I can't fly" ou "Flyyyyiinnngggg!".

pokemon.fly = function () {
    return this.can_fly ? "Flyyyiinnngg!" : "Sorry, I can't fly"
}

pokemon.fly()
// 5.
// Adicione um método chamado
// `do_something` ao seu pokemon
// que retorna randomicamente uma 
// das Strings "FIGHT", "BAG" ou "RUN".
pokemon.do_something = function () {
    const rand = Math.floor(Math.random() * 3)
    if (rand == 0) {
        return "FIGHT"
    }
    else if (rand == 1) {
        return "BAG"
    } else {
        return "RUN"
    }
}

//correçao 
pokemon.do_something = function ()
let habilities = ["FIGHT", "BAG", "RUN"]

pokemon.do_something()

// 6.
// Adicione um método chamado
// `ask` ao seu pokemon que printa
// no console "What will < > do?" e
// retorna o resultado do metodo
// `do_something`.

pokemon.ask = function () {
    console.log(`What will ${this.nome} do?`)
    return pokemon.do_something()
}

pokemon.ask()



// 7. 
// Printe todas as propriedades 
// do seu pokemon no console.
console.log(pokemon)
//correçao
for (const prop in pokemon) {
    console.log(prop)
}


// 8. 
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor>

for (const valores in pokemon) {
    console.log(valores, pokemon[valores])
}

//correçao
for (const prop in pokemon) {
    console.log(`${prop} : ${pokemon[prop]}`)
}


//9.
//Crie uma funçao construtora 
//de um pokemon generico
// function (nome , nomeJapones) {}

function Pokemon(nome, nome_japones, pode_voar){
    this.nome = nome
    this.nome_japones = nome_japones
    this.pode_voar = pode_voar
    this.diga_ola = function(){
        console.log (`Olá meu nome é  ${this.nome}. E meu nome em japonês é ${this.nome_japones}`)
    }
    this.pode_voar = function () {
        return this.pode_voar ? "Voandooo " : "Desculpa, voa não"
    }
    
    this.manda_ver = function () {
		let acoes = [
			"BRIGA! BRIGA! BRIGA!", 
			"ROUBAR DOCE DE CRIANÇA", 
			"CORRER PARA COLINA"
		]
		return acoes[Math.floor(Math.random() * acoes.length)]
	}
	this.pergunte = function () {
		console.log(`O que ${this.nome} vai fazer?`)
		return this.manda_ver()
	}
}

let pokemon = new Pokemon(nome, nome_japones, pode_voar)
