const boton = document.getElementById("abrir");
const inicio = document.querySelector(".inicio");
const contenido = document.getElementById("contenido");
const corazones = document.getElementById("lluvia-corazones");
const ramo = document.getElementById("ramo");
const musica = document.getElementById("musica");

boton.addEventListener("click", () => {
    // Ocultar bloque inicial
    inicio.style.display = "none";

    // Mostrar contenido
    contenido.classList.remove("oculto");

    // Música
    musica.volume = 0.6;
    musica.play();

    // Efectos
    iniciarCorazones();
    crecerRamo();
});

function iniciarCorazones() {
    setInterval(() => {
        const c = document.createElement("span");
        c.innerHTML = "❤️";
        c.style.left = Math.random() * 100 + "vw";
        c.style.animationDuration = (Math.random() * 3 + 6) + "s";
        c.style.opacity = Math.random() * 0.5 + 0.5;
        corazones.appendChild(c);

        setTimeout(() => c.remove(), 9000);
    }, 320);
}

function crecerRamo() {
    const rosas = ["🌹", "🌹", "🌹", "🌹", "🌹"];
    let i = 0;

    const intervalo = setInterval(() => {
        const rosa = document.createElement("span");
        rosa.innerHTML = rosas[i];
        rosa.style.opacity = 0;
        rosa.style.transform = "translateY(30px)";
        ramo.appendChild(rosa);

        requestAnimationFrame(() => {
            rosa.style.transition = "all 1s ease";
            rosa.style.opacity = 1;
            rosa.style.transform = "translateY(0)";
        });

        i++;
        if (i >= rosas.length) clearInterval(intervalo);
    }, 800);
}
