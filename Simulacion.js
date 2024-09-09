function pedirPizza(sabor){
    return new Promise((resolve, reject) =>{
        console.log(`Preparando tu pizza de ${sabor}...`)
        setTimeout(()=>{
            if(sabor){
                resolve(`Tu pizza de ${sabor} esta lista`)
            }else{
                reject("No especificaste el sabor de la pizza")
            }
        },4000)
    })
}

pedirPizza("Peperoni")
.then(res=>{
    console.log('Mensaje: ' + res)
})
.catch(error=>{
    console.log(error)
})