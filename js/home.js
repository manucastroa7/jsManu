let numero = parseInt(prompt('Ingrese un numero entero'))

let valores = 0



for (i=0; i < numero ; i++) {

    valores = valores + i*3
}

console.log(valores)



let numeroUsuario = parseInt(prompt("Cuantas veces se tiene que repetir la palabra Hola"))

let resultado = "Hola"

for (i=0 ; i < numeroUsuario ; i++ ) {

    console.log (resultado)
}

let eslabones = " "

let palabra = prompt ("Decime una palabra para finalizar escribe ESC")


do {
    eslabones = eslabones + palabra + ' '

    palabra = prompt ("Ingresa otra palabra")
}

while (palabra != "ESC")

console.log (eslabones)







