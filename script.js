function mostrarHoroscopo() {
    console.log("Botón presionado"); // Comprobación en consola
    const dia = parseInt(document.getElementById("dia").value);
    const mes = parseInt(document.getElementById("mes").value);
    const resultado = document.getElementById("resultado");
    let signo, imagenSrc, mensaje;

    // Verifica que los valores de día y mes sean válidos
    if (isNaN(dia) || isNaN(mes) || dia < 1 || dia > 31 || mes < 1 || mes > 12) {
        resultado.innerHTML = "<p>Por favor, ingresa un día y mes válidos.</p>";
        return;
    }

    // Determinar el signo según día y mes
    if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        signo = "Acuario";
        imagenSrc = "acuario.jpeg";
        mensaje = "¡Eres un gatito curioso y aventurero como Acuario!";
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        signo = "Piscis";
        imagenSrc = "piscis.jpeg";
        mensaje = "Tierno y soñador, eres un gatito Piscis.";
    } else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        signo = "Aries";
        imagenSrc = "aries.jpeg";
        mensaje = "Lleno de energía y valentía, ¡eres un gatito Aries!";
    } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        signo = "Tauro";
        imagenSrc = "tauro.jpeg";
        mensaje = "Paciente y relajado, Tauro es un gatito muy tranquilo.";
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        signo = "Géminis";
        imagenSrc = "geminis.jpeg";
        mensaje = "Curioso y juguetón, ¡eres un gatito Géminis!";
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        signo = "Cáncer";
        imagenSrc = "cancer.jpeg";
        mensaje = "Eres un gatito dulce y hogareño como Cáncer.";
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        signo = "Leo";
        imagenSrc = "leo.jpeg";
        mensaje = "¡Orgulloso y carismático, eres un gatito Leo!";
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        signo = "Virgo";
        imagenSrc = "virgo.jpeg";
        mensaje = "Eres detallista y observador, como un gatito Virgo.";
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        signo = "Libra";
        imagenSrc = "libra.jpeg";
        mensaje = "Amable y sociable, ¡así es un gatito Libra!";
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        signo = "Escorpio";
        imagenSrc = "escorpio.jpeg";
        mensaje = "Eres intenso y misterioso como un gatito Escorpio.";
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        signo = "Sagitario";
        imagenSrc = "sagitario.jpeg";
        mensaje = "Aventurero y libre, eres un gatito Sagitario.";
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        signo = "Capricornio";
        imagenSrc = "capricornio.jpeg";
        mensaje = "Eres un gatito responsable y tranquilo como Capricornio.";
    }

    // Mostrar imagen y mensaje
    if (signo) {
        resultado.innerHTML = `
            <div class="horoscopo-imagen">
                <img src="${imagenSrc}" alt="${signo}">
            </div>
            <p class="mensaje">${mensaje}</p>
        `;
    } else {
        resultado.innerHTML = "<p>Fecha no válida. Por favor, inténtalo de nuevo.</p>";
    }
}