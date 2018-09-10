let a = 1
let b = 2
let c = 3

// Resultado: true 
if (6 < 2 * 5) {
	console.log("Hello, world!")
}

// Resultado: false "2222"
if (a > b && a > c) {
	console.log(1111)
} else {
	console.log(2222)
}

// Resultado: true "*"
if (a < c) {
	console.log("*")
} else if (a === b) {
	console.log("&")
} else {
	console.log("$")
}

// Resultado: true "###"
if (a < b) {
	console.log("####")
} else {
	console.log("&&&&")
}

// Resultado: false "100 200 0"
const x = 100
const y = 200
if (x > 100 && y <= 200) {
	console.log(`${x} ${y} ${x + y}`)
} else {
	console.log(`${x} ${y} ${2 * x - y}`)
}

// Resultado: true "*"
if (a < c) {
	console.log("*")
} else if (a === c) {
	console.log("&")
} else {
	console.log("$")
}

// Resultado: false "1 3 4 "
if (a++ > b++ || a-- > 0) {
	c++
} else {
	c--
}
console.log(`${a} ${b} ${c}`)

// Resultado: true "####"
if (a < b) {
	console.log("####")
} else {
	console.log("&&&&")
}

// Resultado: true "*****"
if (a < c) {
	console.log("****")
} else if (b > a) {
	console.log("&&&&")
} else {
	console.log("####")
}