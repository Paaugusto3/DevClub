
//const paragraph = document.getElementsByClassName("paragraph-js")
////console.log(paragraph)

//const elements = document.getElementsByTagName("h1")
//console.log(elements)

//const elements = document.getElementsByName("name")
//console.log(elements)

/*
Procurar um elemento pela classe no querySelector 

//const elements = document.querySelector(".paragraph")
//console.log(elements)
*/
/**
 * Procurar um id no querySelector
 * const elements = document.querySelector("#main-input")
 * console.log(elements)
 *  
 */
/**
 * procurar uma classe especifica dentro do querySelector 
 * const elements = document.querySelector("button.abacate")
 * console.log(elements)
 */

/**
 Alterando Textos HTML E CSS
 */
const element = document.querySelector(".paragraph-js")

element.innerText = "Esse é o novo Texto"

console.log(element.textContent) //Só HTML
console.log(element.innerText) // Leva em conta o CSS
console.log(element.innerHTML) // Trás Tudo




