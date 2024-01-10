

numeros = [2, 0, 8, 10, 7, 3, 1, 9];

numeros.push(4);
numeros.push(6);
numeros.push(5);


for (let i = 1; i <= numeros.length; i++) {

    if (numeros[i] %2 === 1){
    console.log('Numeros impares: ' + numeros[i]);
    }

}



