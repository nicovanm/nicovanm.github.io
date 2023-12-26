        // Función para mostrar los detalles de un mueble al hacer clic en el botón
       function mostrarDetalles(muebleId) {
            var detalles = document.getElementById('detalles-' + muebleId);

            // Alternar la visibilidad usando una clase CSS
            if (detalles.classList.contains('visible')) {
                detalles.classList.remove('visible');
            } else {
                detalles.classList.add('visible');
            }
        }
   //funcion al apretar el boton agregar el carrito se suman todos los items apretados
    document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product');
    const cartItems = document.getElementById('cart-items');
    let total = 0;

    products.forEach(product => {
        const addToCartButton = product.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const product = event.target.closest('.product');
        const productPrice = parseFloat(product.dataset.price);

        total += productPrice;
        updateTotal();
    }

    function updateTotal() {
        const totalElement = document.getElementById('total');
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }
});