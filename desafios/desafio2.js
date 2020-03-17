var soma = function soma(valor1,valor2){ return valor1/valor2}

soma(5,5)
10

var soma2 = soma(5, 5) + 5  

soma2
15

var novav
    //undefined
novav = "VALOR"
    //"VALOR"
novav = 0
    //0
var nova
    //undefined
    "Teste"
"Teste"
"Teste " + 10
    "Teste 10"

function ad(nova) { "O valor da variavel agora é " + nova, "Onde " + nova + " é o novo valor da variavel" }
//undefined
ad(10)
    //undefined
function ad(nova) { console.log("O valor da variavel agora é " + nova), console.log("Onde " + nova + " é o novo valor da variavel") }
//undefined
ad(10)
// 1 O valor da variavel agora é 10
//1 Onde 10 é o novo valor da variavel

function trescoisas(valor1, valor2, valor3) {
    if (valor1 !== undefined && valor2 === undefined && valor3 === undefined) {
        return valor1;
    } else if (valor1 !== undefined && valor2 !== undefined && valor3 === undefined) {
        return valor1 + valor2;
    } else if (valor1 !== undefined && valor2 !== undefined && valor3 !== undefined) {
        return (valor1 + valor2 / valor3);
    } else if (valor1 === undefined && valor2 === undefined && valor3 === undefined) {
        return false;
    } else {
        return null;
    }
}

trescoisas();
//false
trescoisas(1);
//1
trescoisas(1, 2);
//3
trescoisas(1, 2, 3);
//1