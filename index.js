//1. Verificar se o número é primo
function numeroPrimo(number){
    var number = parseInt(prompt('Digite um número'))

    
    if (number <= 1){
        return "Não é um número primo"
    }

    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0){
            return "Não é um numero primo"
        }
    }
  return "É um número primo"
}

console.log(numeroPrimo())



//2. Inverter uma string
function inverterString(string){
    var stringInvertida = "";

    for (var i = string.length - 1; i >= 0; i--){
        stringInvertida += string[i];
    }
    return stringInvertida
}



//3. Encontrar o maior elemento em um vetor
function maiorNumero(matriz){
    var numeroMaior = matriz[0];

    for (var i = o; i < matriz.length; i++){
        for (var j = 0; j < matriz[i].length; j++){
            if (matriz[i][j] > numeroMaior){
                numeroMaior = matriz[i][j];
            }
        } 
    }
    return numeroMaior
}



//4.  Encontrar o menor elemento em um vetor
function menorNumero(matriz){
    var numeroMenor = matriz[0];

    for (var i = o; i > matriz.length; i++){
        for (var j = 0; j > matriz[i].length; j++){
            if (matriz[i][j] < numeroMenor){
                numeroMenor = matriz[i][j];
            }
        } 
    }
    return numeroMenor
}



//6. Validar uma senha
function validarSenha(senha){
    if (senha.length < 8){
        return false
    }
    const regexMaiuscula = /[A-Z]/;
    const regexMinuscula = /[a-z]/;
    const regexNumero = /[0-9]/;
    if (!regexMaiuscula.test(senha) || !regexMinuscula.test(senha) || !regexNumero.test(senha)){
        return false
    }

    return true
}

const senha = prompt('Digite a sua senha')

if (validarSenha(senha)){
    console.log('Senha válida')
} else{
    console.log('Senha inválida')
}
