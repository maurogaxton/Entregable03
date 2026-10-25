//Simulador de pago con varias opciones

function preguntarCuotas (){
    let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: de 1 a 12"))
    return cuotas
}

function recargarCuotas(cantidadCuotas){
    let recargo = 1
    if (cantidadCuotas >= 1 || cantidadCuotas <= 3 ) {
        recargo = 1.1
    } else if (cantidadCuotas > 3 || cantidadCuotas <= 6 ) {
        recargo = 1.5
    } else {
        recargo = 2
    }
    return recargo
}


let pagar = true

while(pagar) {
    let importe = parseFloat(prompt("Ingrese el importe de la compra"))
    let menu = parseInt(prompt("Ingrese una opcion de pago: 1 VISA, 2 MASTERCARD, 3 AMERICAN EXPRESS, 4 MERCADOPAGO o 5 EFECTIVO"))
    

    switch(menu) {
        case 1:
            let cuotasVisa = preguntarCuotas()
            let cuotasRecargo = recargarCuotas(cuotasVisa)
            let importeCuota = ((importe * cuotasRecargo) / cuotasVisa)
            let costoTotalFinanciado = importe * cuotasRecargo

            alert("Por su compra de $ " + importe + " con Visa, abonara " + cuotasVisa + " cuotas de $ " + importeCuota + ". CTF: $ " + costoTotalFinanciado)
            break
        case 2:
            let importeMaster = importe * 0.9
            alert("Su pago con Mastercard tiene un 10% de descuento, por su compra de $ " + importe + " abonara $ " + importeMaster )
            break
        case 3:
            let importeAmerican = importe * 0.95
            alert("Su pago con American Express tiene un 5% de descuento, por su compra de $ " + importe + " abonara $ " + importeAmerican )
            break
        case 4:
            let importeMP = importe * 0.85
            alert("Su pago con MercadoPago tiene un 15% de descuento, por su compra de $ " + importe + " abonara $ " + importeMP )
            break
        case 5:
            let importeEfectivo = importe * 0.75
            alert("Su pago con efectivo tiene un 25% de descuento, por su compra de $ " + importe + " abonara $ " + importeEfectivo )
            break
        default:
            alert("Opcion incorrecta")
    }

    let confirmacion = prompt("Desea hacer otro pago? (si/no)").toLowerCase()
    if(confirmacion == "no"){
        pagar = false
        alert("Gracias por su compra!")
    }
}