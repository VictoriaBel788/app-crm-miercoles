import { expresionesRegulares } from "./services/utils.js"

let camposForm = document.querySelectorAll(".formulario__entrada")
camposForm.forEach((campoForm) => {
    campoForm.addEventListener("keyup", function (e) {
        switch (e.target.id) {
            case "nombre":
                if (expresionesRegulares.regexTexto.test(e.target.value)) {
                    console.log("Cumple la expresión regular")
                } else {
                    console.log("No cumple la expresión regular")
                }
                break;
        }
    })
})
