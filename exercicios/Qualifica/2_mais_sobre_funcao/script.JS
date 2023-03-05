function multiplicarTresNumeros(x, y, z) {
    return x * y * z;
}
console.log(multiplicarTresNumeros(2,3,4));

const mult = multiplicarTresNumeros(5,4,8);

console.log("O valor de mult é: " + mult );



function somarQuatroNumeros(a,b,c) {
    return a + b + c;
}
console.log(somarQuatroNumeros(5,10,20));

const somar = somarQuatroNumeros(30,40,50);

console.log("O valor de somar é :" + somar);


function podeDirigir(idade, cnh) {
    if(idade >=18 && cnh == true) {
        console.log("Pode dirigir");
    }else{
     console.log("Não pode dirigir");
    }
}

console.log(podeDirigir(52,true));
console.log(podeDirigir(25,true));
console.log(podeDirigir(44,0));
console.log(podeDirigir(19,1));
