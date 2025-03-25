const d = document;
const $listaCarrito = d.querySelector("#lista-carrito");
const $totalCarrito = d.querySelector("#total-carrito");
const $btnCompra = d.querySelector("#btn-compra");
const $mensajeCompra = d.querySelector("#mensaje-compra");
const $carrito = d.querySelector("#carrito");
const $productos = d.querySelector("#productos");

// Función para obtener productos desde la API
async function cargarProductos() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const productos = await res.json();

    // Limpiar productos existentes
    $productos.innerHTML = `<h2>Productos</h2>`;

    // Renderizar productos
    productos.forEach((producto) => {
      const $item = d.createElement("article");
      $item.classList.add("producto");
      $item.dataset.id = producto.id;
      $item.dataset.nombre = producto.title;
      $item.dataset.precio = producto.price;
      $item.dataset.imagen = producto.image;  // Guardar la URL de la imagen en el dataset

      $item.innerHTML = `
        <img src="${producto.image}" alt="${producto.title}" style="width:100px; height:auto; display:block; margin-bottom: 10px;">
        ${producto.title} - $${producto.price.toFixed(2)}
      `;
      $productos.appendChild($item);
    });
  } catch (error) {
    console.error("Error al cargar productos:", error);
  }
}

// Llamar a la función para cargar productos al iniciar
cargarProductos();

// Evento de compra
$btnCompra.addEventListener("click", function () {
  if ($listaCarrito.children.length > 0) {
    $mensajeCompra.classList.remove("hidden");

    setTimeout(function () {
      $mensajeCompra.classList.add("hidden");
      $listaCarrito.innerHTML = "";
      $totalCarrito.textContent = "0";
      alert("Compra realizada con éxito");
    }, 5000);
  } else {
    alert("El carrito está vacío");
  }
});

// Evento para agregar productos al carrito
d.addEventListener("click", function (e) {
  if (e.target.closest(".producto")) {
    const $producto = e.target.closest(".producto");
    let nombre = $producto.dataset.nombre;
    let precio = parseFloat($producto.dataset.precio);
    let imagen = $producto.dataset.imagen;

    let $itemExistente = Array.from($listaCarrito.children).find((item) => {
      return item.querySelector(".nombre-producto").textContent === nombre;
    });

    if ($itemExistente) {
      let $cantidad = $itemExistente.querySelector(".cantidad");
      let cantidad = parseInt($cantidad.textContent);
      $cantidad.textContent = cantidad + 1;
    } else {
      const $itemCarrito = d.createElement("li");
      $itemCarrito.classList.add("item-carrito");

      $itemCarrito.innerHTML = `
        <img src="${imagen}" alt="${nombre}" style="width:50px; height:auto; margin-right:10px; vertical-align:middle;">
        <span class="nombre-producto">${nombre}</span> - $<span class="precio-producto">${precio.toFixed(2)}</span>
        <span class="cantidad">1</span>
        <button class="btn-mas">+</button>
        <button class="btn-menos">-</button>
      `;
      $listaCarrito.appendChild($itemCarrito);
    }

    actualizarTotalCarrito();
  }

  // Manejar clics en botones "+" y "-"
  if (e.target.matches(".btn-mas") || e.target.matches(".btn-menos")) {
    const $itemCarrito = e.target.closest("li");
    const $cantidad = $itemCarrito.querySelector(".cantidad");
    let cantidad = parseInt($cantidad.textContent);

    if (e.target.matches(".btn-mas")) {
      cantidad++;
    } else if (e.target.matches(".btn-menos")) {
      if (cantidad > 1) {
        cantidad--;
      } else {
        $itemCarrito.remove();
      }
    }

    $cantidad.textContent = cantidad;
    actualizarTotalCarrito();
  }
});

// Función para actualizar el total del carrito
function actualizarTotalCarrito() {
  let total = 0;
  Array.from($listaCarrito.children).forEach((item) => {
    const $precio = item.querySelector(".precio-producto");
    const $cantidad = item.querySelector(".cantidad");
    total += parseFloat($precio.textContent) * parseInt($cantidad.textContent);
  });
  $totalCarrito.textContent = total.toFixed(2);
}
