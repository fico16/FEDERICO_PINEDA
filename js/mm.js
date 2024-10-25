//como se inicializa un vector
let vector= [] //vector vacio

//vector con informacion
let nombres = ["carlos", "juan","pepe",
    "maria","luis","brayan","michael","cathe","andres"];
    //imprimir o escribir 
    console.log("vector: " + nombres);

    //imprimir o escribir un solo dato del vector
    console.log("el nombre que esta en la posicion 1 es: " + nombres[1]);

    //recorrer un vector
    for(let i = 0; i <nombres.length; i++) {
    console.log(nombres[i])
    }

    //agregar informacion a un vector
    nombres.push("stiven");

    console.log(nombres)
    
