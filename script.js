// 1. Busca los elementos del HTML
let valorTemperatura = document.getElementById("valorTemperatura");
let unidadOrigen = document.getElementById("unidadOrigen");
let unidadDestino = document.getElementById("unidadDestino");
let botonConvertir = document.getElementById("botonConvertir");
let resultado = document.getElementById("resultado");

// 2. Función para saber si los 3 campos están llenos
function verificarCampos() {
    // Si el valor no está vacío Y el origen no está vacío Y el destino no está vacío
    if (valorTemperatura.value !== "" && unidadOrigen.value !== "" && unidadDestino.value !== "") {
        botonConvertir.disabled = false; // Habilita el botón
    } else {
        botonConvertir.disabled = true; // Lo deshabilita
    }
}

// 3. Escucha cuando el usuario escribe o cambia de opción
valorTemperatura.addEventListener("input", verificarCampos);
unidadOrigen.addEventListener("change", verificarCampos);
unidadDestino.addEventListener("change", verificarCampos);

// 4. Función para hacer la conversión al hacer clic
botonConvertir.onclick = function() {
    let valor = parseFloat(valorTemperatura.value); // Convierte el texto a número
    let origen = unidadOrigen.value;
    let destino = unidadDestino.value;

    // Si las unidades son iguales, el resultado es el mismo
    if (origen === destino) {
        resultado.innerHTML = valor + " " + origen + " es " + valor + " " + destino;
        return; // Detiene la función aquí
    }

    // Para no enredarse, primero se pasa todo a Celsius
    let enCelsius = 0;

    if (origen === "celsius") {
        enCelsius = valor;
    } else if (origen === "fahrenheit") {
        enCelsius = (valor - 32) * 5 / 9;
    } else if (origen === "kelvin") {
        enCelsius = valor - 273.15;
    }

    // Ahora se pasa de Celsius a la unidad de destino
    let resultadoFinal = 0;

    if (destino === "celsius") {
        resultadoFinal = enCelsius;
    } else if (destino === "fahrenheit") {
        resultadoFinal = (enCelsius * 9 / 5) + 32;
    } else if (destino === "kelvin") {
        resultadoFinal = enCelsius + 273.15;
    }

    // Redondea a 2 decimales con toFixed y muestra el texto en pantalla
    resultado.innerHTML = valor + " " + origen + " es " + resultadoFinal.toFixed(2) + " " + destino;
};