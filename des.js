function calcularIMC(altura, peso){
    return console.log(`Tu IMC es: ${(peso/(altura*altura)).toFixed(1)}`)
}

function calcularFactorial(numero){
    let factor = numero-1;
    let resultado = numero*(factor);
    console.log(numero);
    while(factor != 0){
        console.log(resultado);
        factor--;
        resultado = resultado * factor;
    }
}

function aReales(dolar){
    return console.log(`Èl valor en reales brasileños es: R$${dolar*4.80}`)
}

function areaPerimetro(ancho,largo){
    return console.log(`El área es de: ${ancho*largo} y el perimetro es de: ${(ancho*2)+(largo*2)}`);
}

function areaPerimetroCirculo(radio){
    return console.log(`El área del circulo es de: ${3.14*(radio*radio)} y el perimetro es de: ${2*3.15*radio}`);
}

function tablaMultiplicar(numero){
    factor = 1;
    console.log(`La tabla del ${numero}:`)
    while(factor <= 10){
        console.log(`${numero} * ${factor} = ${numero*factor}`)
        factor++;
    }
}

calcularIMC(1.78,83);
calcularFactorial(5);
aReales(5);
areaPerimetro(10,5);
areaPerimetroCirculo(6)
tablaMultiplicar(5);