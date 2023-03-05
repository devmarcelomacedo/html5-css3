
let ano = /\d\d\d\d/;
console.log(ano.test("05"));
console.log(ano.test("2023"));
console.log(ano.test("opa"));

let palavrasTresLetras = /\w\w\w/;
console.log(palavrasTresLetras.test("dia"));
console.log(palavrasTresLetras.test("ano"));
console.log(palavrasTresLetras.test("oi"));
console.log(palavrasTresLetras.test("teste"));



const dia = /\d\d/;

console.log(dia.test("2023"));
console.log(dia.test("asd"));
console.log(dia.test("05"));
