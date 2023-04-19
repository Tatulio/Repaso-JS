/* SUMAR
const txtn1 = document.getElementById("n1")
const txtn2 = document.getElementById("n2")
const respuesta = document.getElementById("resp")
const btncalcular = document.getElementById("calcular")

btncalcular.addEventListener("click", calcular)

function calcular () {
    const op1 = parseFloat(txtn1.value)
    const op2 = parseFloat(txtn2.value)
    let resp = op1 + op2
    respuesta.innerText = resp
}
*/
const txt = document.getElementById("resp")

async function obtenerData () {
    /*const response =*/ await fetch("http://127.0.0.1:5500/data.json")
    /*const json = await response.text()
    console.log(JSON.parse(json))*/
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log("Error", error))
}

obtenerData()





















