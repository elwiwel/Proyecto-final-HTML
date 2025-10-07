const formDoras = document.querySelectorAll(".form-doras");

/*formDoras.forEach(form => {
      form.addEventListener('click', () => {
        // Quita la clase "seleccionado" de todos los botones
        formDoras.forEach(b => b.classList.remove('seleccionado'));
        // Añade la clase al botón clicado
        form.classList.add('seleccionado');
      });
});*/

formDoras.forEach(form => {
      form.addEventListener('click', () => {
        // Quita el tick de todos los botones
        formDoras.forEach(b => b.querySelector("img").style.opacity = 0);
        // Añade el tick al botón clicado
        form.querySelector("img").style.opacity = 100;
      });
});