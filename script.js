let camposForm = document.querySelectorAll(".formulario__entrada")
camposForm.forEach((campoForm) => {
    campoForm.addEventListener("keyup", function(){
        console.log("Presionando una tecla...")
    })
})