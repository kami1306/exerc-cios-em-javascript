function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}
nomeIdade("kamille",18);

console.log(nomeIdade(18,"Kamille"))
console.log(nomeIdade('Kamille',18))


function soma(numero1, numero2){
    return numero1+numero2;
}

function multiplica(numero1=1,numero2=1){
    return numero1*numero2;
}
console.log(soma(2))

console.log(multiplica(soma(4, 5)))
