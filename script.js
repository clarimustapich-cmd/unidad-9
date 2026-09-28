let puntosJugador = 0;
let puntosMaquina = 0;

const botones = document.querySelectorAll(".opcion");
const mensaje = document.getElementById("estado");
const marcadorJugador = document.getElementById("puntosJugador");
const marcadorMaquina = document.getElementById("puntosMaquina");
const eleccionJugador = document.getElementById("eleccionJugador");
const eleccionMaquina = document.getElementById("eleccionMaquina");
const botonReinicio = document.getElementById("botonReinicio");



botones.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const jugada = boton.dataset.jugada;

        
        if (puntosJugador === 3 || puntosMaquina === 3) {
            return;
        }

        jugarRonda(jugada);
    });

});



function obtenerJugadaMaquina() {

    const opciones = ["piedra", "papel", "tijera"];

    const posicion = Math.floor(Math.random() * opciones.length);

    return opciones[posicion];
}



function ganadorDeRonda(jugador, maquina) {

    if (jugador === maquina) {
        return "empate";
    }

    if (
        (jugador === "piedra" && maquina === "tijera") ||
        (jugador === "papel" && maquina === "piedra") ||
        (jugador === "tijera" && maquina === "papel")
    ) {
        return "jugador";
    }

    return "maquina";
}



function jugarRonda(jugadaJugador) {

    const jugadaMaquina = obtenerJugadaMaquina();

    eleccionJugador.textContent =
        "Tu elección: " + jugadaJugador;

    eleccionMaquina.textContent =
        "Elección de la máquina: " + jugadaMaquina;


    const resultado = ganadorDeRonda(
        jugadaJugador,
        jugadaMaquina
    );


    if (resultado === "empate") {

        mensaje.textContent = "🤝 ¡Empate!";

    } else if (resultado === "jugador") {

        puntosJugador++;
        mensaje.textContent = "🎉 ¡Ganaste la ronda!";

    } else {

        puntosMaquina++;
        mensaje.textContent = "🤖 La máquina ganó la ronda.";
    }


    actualizarMarcador();


   
    if (puntosJugador === 3) {

        mensaje.textContent = "🏆 ¡Ganaste el torneo!";

    } else if (puntosMaquina === 3) {

        mensaje.textContent = "🤖 ¡La máquina ganó el torneo!";
    }
}



function actualizarMarcador() {

    marcadorJugador.textContent = puntosJugador;
    marcadorMaquina.textContent = puntosMaquina;
}



botonReinicio.addEventListener("click", function () {

    puntosJugador = 0;
    puntosMaquina = 0;

    actualizarMarcador();

    mensaje.textContent = "Elegí una jugada";

    eleccionJugador.textContent = "Tu elección: -";
    eleccionMaquina.textContent = "Elección de la máquina: -";

});