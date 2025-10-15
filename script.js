import { expresionesRegulares } from "./services/utils.js"

let camposForm = document.querySelectorAll(".formulario__entrada")
camposForm.forEach((campoForm) => {
    campoForm.addEventListener("keyup", function (e) {
        switch (e.target.id) {
            case "nombre":
                if (expresionesRegulares.regexTexto.test(e.target.value)) {
                    document.getElementById("nombre").style.outline = "none"
                    document.getElementById("nombre").style.borderColor = "green"
                    document.getElementById("nombre").style.borderWidth = "2px"
                    document.getElementById("nombre").style.color = "black"
                } else {
                    document.getElementById("nombre").style.outline = "none"
                    document.getElementById("nombre").style.borderColor = "red"
                    document.getElementById("nombre").style.borderWidth = "2px"
                    document.getElementById("nombre").style.color = "red"
                }
                break;
            case "apellido":
                if (expresionesRegulares.regexTexto.test(e.target.value)) {
                    document.getElementById("apellido").style.outline = "none"
                    document.getElementById("apellido").style.borderColor = "green"
                    document.getElementById("apellido").style.borderWidth = "2px"
                    document.getElementById("apellido").style.color = "black"
                } else {
                    document.getElementById("apellido").style.outline = "none"
                    document.getElementById("apellido").style.borderColor = "red"
                    document.getElementById("apellido").style.borderWidth = "2px"
                    document.getElementById("apellido").style.color = "red"
                }
                break;
            case "documento":
                if (expresionesRegulares.regexNumero.test(e.target.value)) {
                    document.getElementById("documento").style.outline = "none"
                    document.getElementById("documento").style.borderColor = "green"
                    document.getElementById("documento").style.borderWidth = "2px"
                    document.getElementById("documento").style.color = "black"
                } else {
                    document.getElementById("documento").style.outline = "none"
                    document.getElementById("documento").style.borderColor = "red"
                    document.getElementById("documento").style.borderWidth = "2px"
                    document.getElementById("documento").style.color = "red"
                }
                break;
            case "telefono":
                if (expresionesRegulares.regexNumero.test(e.target.value)) {
                    document.getElementById("telefono").style.outline = "none"
                    document.getElementById("telefono").style.borderColor = "green"
                    document.getElementById("telefono").style.borderWidth = "2px"
                    document.getElementById("telefono").style.color = "black"
                } else {
                    document.getElementById("telefono").style.outline = "none"
                    document.getElementById("telefono").style.borderColor = "red"
                    document.getElementById("telefono").style.borderWidth = "2px"
                    document.getElementById("telefono").style.color = "red"
                }
                break;
        }
    })
})
