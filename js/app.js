const header = document.getElementById('header');

header.addEventListener('click', (event) => {
    // Evita activar el blur si se hizo clic en un enlace
    if (!event.target.closest('a')) {
        header.classList.toggle('blur');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".tarjeta .play-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation(); // evita que se abra el modal

            const card = btn.closest(".tarjeta");
            const img = card.querySelector(".preview");
            const video = card.querySelector(".video");

            // Oculta imagen y botón
            img.style.display = "none";
            btn.style.display = "none";

            // Muestra y reproduce el video
            video.style.display = "block";
            video.play();
        });
    });
});