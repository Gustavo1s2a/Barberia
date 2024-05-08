document.addEventListener("DOMContentLoaded", function() {
    const catalogo = document.getElementById("catalogo");

    const barberos = [
        { nombre: "Buzz", especialidad: "Cortes de moda", imagen: "Fotos/Buzz.jpg" },
        { nombre: "Fade", especialidad: "Cortes clásicos", imagen: "Fotos/Fade.jpg" },
        { nombre: "Militar", especialidad: "Cortes de moda", imagen: "Fotos/Militar.jpg" },
        { nombre: "Mohicano", especialidad: "Cortes de moda", imagen: "Fotos/Mohicano.jpg" },
        { nombre: "Mullet", especialidad: "Cortes de moda", imagen: "Fotos/Mullet.jpeg" },
        { nombre: "Pompadour", especialidad: "Cortes de moda", imagen: "Fotos/Pompadour.jpg" },
   
      
        
    ];

    barberos.forEach(barbero => {
        const barberoHTML = `
            <div class="barbero">
                <h2>${barbero.nombre}</h2>
                <img src="${barbero.imagen}" alt="${barbero.nombre}">
            </div>
        `;
        catalogo.innerHTML += barberoHTML;
    });
});
