function validarFormulario(nombre, correo){
    return new Promise((resolve, reject)=>{
    if (nombre && correo){
        resolve("Formulario valido")
    }else{
        reject("Formulario invalido. Falta nombre o correo")
    }
    })
}

validarFormulario("Juan", "Juan@gmail.com")
.then(res=>{
    console.log('Mensaje' + res)
})
.catch(error => {
    console.log('Error: ' + error)
})