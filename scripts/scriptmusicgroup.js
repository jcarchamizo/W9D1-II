let catalogo = ["Queen", "The Beatles", "Miles Davis", "Pink Floyd", "Nirvana"];

    function renderizarCatalogo() {
      const contenedor = document.getElementById("catalogo");
      contenedor.innerHTML = "<strong>Catálogo:</strong><br>";
      catalogo.forEach((banda, i) => {
        contenedor.innerHTML += `<div class="banda">${i}: ${banda}</div>`;
      });
    }

    function mostrarMensaje(texto) {
      document.getElementById("mensaje").textContent = texto;
    }

    function añadirBanda() {
      const input = document.getElementById("nuevaBanda");
      const banda = input.value.trim();
      if (banda) {
        catalogo.push(banda);
        mostrarMensaje(`Añadida: ${banda}`);
        input.value = "";
        renderizarCatalogo();
      }
    }

    function borrarPrimero() {
      if (catalogo.length > 0) {
        const eliminado = catalogo.shift();
        mostrarMensaje(`Eliminado primero: ${eliminado}`);
        renderizarCatalogo();
      }
    }

    function borrarUltimo() {
      if (catalogo.length > 0) {
        const eliminado = catalogo.pop();
        mostrarMensaje(`Eliminado último: ${eliminado}`);
        renderizarCatalogo();
      }
    }

    function cambiarPorIndice() {
      const i = parseInt(document.getElementById("indiceCambiar").value);
      const nuevo = document.getElementById("nuevaBandaCambio").value.trim();
      if (!isNaN(i) && i >= 0 && i < catalogo.length && nuevo) {
        catalogo.splice(i, 1, nuevo);
        mostrarMensaje(`Reemplazado en índice ${i} por: ${nuevo}`);
        renderizarCatalogo();
      }
    }

    function borrarPorIndice() {
      const i = parseInt(document.getElementById("indiceCambiar").value);
      if (!isNaN(i) && i >= 0 && i < catalogo.length) {
        const eliminado = catalogo.splice(i, 1);
        mostrarMensaje(`Eliminado en índice ${i}: ${eliminado}`);
        renderizarCatalogo();
      }
    }

    function buscarGrupo() {
      const nombre = document.getElementById("buscarNombre").value.trim();
      const index = catalogo.indexOf(nombre);
      if (index !== -1) {
        mostrarMensaje(`"${nombre}" se encuentra en el índice ${index}`);
      } else {
        mostrarMensaje(`"${nombre}" no está en el catálogo`);
      }
    }

    function mostrarPorIndice() {
      const i = parseInt(document.getElementById("mostrarIndice").value);
      if (!isNaN(i) && i >= 0 && i < catalogo.length) {
        mostrarMensaje(`En el índice ${i} está: ${catalogo[i]}`);
      } else {
        mostrarMensaje("Índice no válido");
      }
    }

    // Mostrar al cargar
    renderizarCatalogo();