const boton = document.getElementById("abrir");
const contenido = document.getElementById("contenido");
const corazones = document.getElementById("lluvia-corazones");
const ramo = document.getElementById("ramo");

boton.addEventListener("click", () => {
    boton.style.display = "none";
    contenido.classList.remove("oculto");

    iniciarCorazones();
    crecerRamo();
});

function iniciarCorazones() {
    setInterval(() => {
        const c = document.createElement("span");
        c.innerHTML = "❤️";
        c.style.left = Math.random() * 100 + "vw";
        c.style.animationDuration = (Math.random() * 3 + 5) + "s";
        corazones.appendChild(c);

        setTimeout(() => c.remove(), 8000);
    }, 280);
}

function crecerRamo() {
    const rosas = ["🌹", "🌹", "🌹", "🌹", "🌹"];
    let i = 0;

    const intervalo = setInterval(() => {
        const rosa = document.createElement("span");
        rosa.innerHTML = rosas[i];
        rosa.style.opacity = 0;
        rosa.style.transform = "translateY(20px)";
        ramo.appendChild(rosa);

        requestAnimationFrame(() => {
            rosa.style.transition = "all 0.8s ease";
            rosa.style.opacity = 1;
            rosa.style.transform = "translateY(0)";
        });

        i++;
        if (i >= rosas.length) clearInterval(intervalo);
    }, 700);
}
