const validarMaiuscula = /[A-Z]/;

console.log(validarMaiuscula.test("testando"));
console.log(validarMaiuscula.test("123456"));
console.log(validarMaiuscula.test("TESTANDO"));

const validarId = /\d+ID\b/;

console.log(validarId.test("3456582ID"));
console.log(validarId.test("3456582"));
console.log(validarId.test("asd"));
console.log(validarId.test("asdasdID"));
console.log(validarId.test("3456582ID"));
console.log(validarId.test("ID"));

const validarMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validarMarca.test("Marca: Nike"));
console.log(validarMarca.test("Marca: asd"));
console.log(validarMarca.test("Marca:"));
console.log(validarMarca.test("123321"));
console.log(validarMarca.test("123321"));


