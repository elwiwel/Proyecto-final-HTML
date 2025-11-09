const formDoras = document.querySelectorAll(".form-doras");

formDoras.forEach(form => {
      form.addEventListener('click', () => {
        // Quita el tick de todos los botones
        formDoras.forEach(b => b.querySelector("img").style.opacity = 0);
        // Añade el tick al botón clicado
        form.querySelector("img").style.opacity = 100;
      });
});




let nombre;
let aparato;
const boton = document.getElementById('botonform');

boton.addEventListener("click", function(ev) {
  ev.preventDefault();
    nombre = document.getElementById("name").value;
    alert("¡Gracias por unirte a nuestro club, " + nombre + "!");
    aparato = document.getElementById("aparato").value;
    if(aparato === "Menú durum mixto"){
        alert("¡Estupendo! Solo un verdadero fan del durum podrá unirse a nuestro club.");
        window.location.href = "secondary.html";
    }
})




