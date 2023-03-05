const reg1 = new RegExp('bola');

console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Não tem "));


const reg2 = /bola/;

let text = 'Tem bola na rede';

console.log(reg2.test("tem bola?"));
console.log(reg2.test("Não tem"));
console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem um quadrado"));
console.log(/quadrado/.test("123456789 quadrado789456123"));