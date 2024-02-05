function saludoDeBievenida(){
    return(console.log('Hola mundo!'));
}

function unNombre(nombre){
    return(console.log(`Hola ${nombre}!`))
}

function elDoble(numero){
    return(console.log(`El doble de tu número es: ${numero*2}`))
}

function elPromedio(primero, segundo, tercero){
    return(console.log(`El promedio de los numeros ingresados es: ${Math.round((primero+segundo+tercero)/3)}`))
}

function elMayor(a, b){
    if(a > b){
        return(console.log(`El número mayor es: ${a}`));
    } else{
        return(console.log(`El número mayor es: ${b}`));
    }
}

function alCuadrado(a){
    return(console.log(`El número elevado al cuadrado es: ${a*a}`));
}

saludoDeBievenida();
unNombre('Jorge');
elDoble(4);
elPromedio(2,5,7);
elMayor(3,5);
alCuadrado(4);