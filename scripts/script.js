    // Array de animales del zoo
    const zoo = ["León", "Tigre", "Rinoceronte", "Jirafa", "Hipopótamo", "Cebra"];

    const lista = document.getElementById("listaZoo");

    function mostrarLista(modo) {
      lista.classList.remove("visible"); // Reinicia animación

      setTimeout(() => {
        lista.innerHTML = ""; // Limpiar la lista

        if (modo === "normal") {
          for (let i = 0; i < zoo.length; i++) {
            const item = document.createElement("li");
            item.textContent = zoo[i];
            lista.appendChild(item);
            console.log(zoo[i]);
          }
        } else if (modo === "inverso") {
          for (let i = zoo.length - 1; i >= 0; i--) {
            const item = document.createElement("li");
            item.textContent = zoo[i];
            lista.appendChild(item);
            console.log(zoo[i]);
          }
        }

        // Activar animación
        lista.classList.add("visible");
      }, 100); // Breve retraso para reiniciar animación
    }

    // Mostrar por defecto al cargar
    mostrarLista('normal');