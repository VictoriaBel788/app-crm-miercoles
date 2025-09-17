let camposForm = document.querySelectorAll(".formulario__entrada")

camposForm.forEach(function(campoForm){
campoForm.addEventListener("keyup", function(){
    console.log("Presionando una tecla... ");
})
})