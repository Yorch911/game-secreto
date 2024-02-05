let listaGenerica = [];
let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
let lenguajesDeProgramacion2 = ['JavaScript','C','C++','Kotlin','Python'];
let listaDeNumeros = [1,4,7,9,21,47,0,202];
let parametro = 7;
let buscar = 'C++';

lenguajesDeProgramacion.push('Java','Ruby','GoLang');

function mostrarLista(listaGenerica = []){
    return console.log(listaGenerica);
}

function mostrarListaReves(listaGenerica = []){
    while(listaGenerica.length > 0){
        console.log(listaGenerica[listaGenerica.length-1]);
        listaGenerica.pop();
    }
}

function promedioLista(listaGenerica = []){
    let suma = 0;
    for(i = 0; i < listaGenerica.length; i++){
        suma += listaDeNumeros[i];
    }
    return console.log(`El promedio es: ${suma/i}`);
}

function sumaLista(listaGenerica = []){
    let suma = 0;
    for(i = 0; i < listaGenerica.length; i++){
        suma += listaDeNumeros[i];
    }
    return console.log(`La suma de la lista de números es: ${suma}`);
}

function numeroMayorMenor(listaGenerica = []){
    let mayor = 0;
    let menor = 1;
    for(i = 0; i < listaGenerica.length; i++){
        if(mayor < listaGenerica[i]){
            mayor = listaGenerica[i];
        } else if(menor > listaGenerica[i]){
            menor = listaGenerica[i];
        }
    }
    return console.log(`Número mayor: ${mayor}.  Número menor: ${menor}`);
}

function posicionLista(listaGenerica = [], indice){
    if(indice < 0 || indice > listaGenerica.length-1){
        return console.log('El valor para el indice es incorrecto!');
    } else {
        return console.log(`El valor de la lista según el indice es: ${listaGenerica[indice]}`);
    }
}

function buscarEnLista(lista = [], elementoABuscar){
        if(lista[0] == elementoABuscar){
            return console.log('El elemento se encuentra en la primera posición!');
        } else{
            for(i = 0; i < lista.length; i++){
                if(lista[i] == elementoABuscar){
                    return console.log(`El elemento se encuentra en la posición: ${i}`);
                }
            }
            if(lista.length == i){
                return console.log('-1, el elemento no se encontró en la lista');
            }
        }
}

mostrarLista(lenguajesDeProgramacion);
mostrarListaReves(lenguajesDeProgramacion);
promedioLista(listaDeNumeros);
numeroMayorMenor(listaDeNumeros);
sumaLista(listaDeNumeros);
posicionLista(listaDeNumeros,parametro);
buscarEnLista(lenguajesDeProgramacion2,buscar);