
// Web Component para tarjeta de producto
class ProductCard extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute('name') || 'Producto';
        const price = this.getAttribute('price') || '$0.00';
        const image = this.getAttribute('image') || 'https://via.placeholder.com/300x200?text=' + name;
        
        this.innerHTML = `
            <div class="product-card-simple">
                <img src="${image}" alt="${name}" onerror="this.src='https://via.placeholder.com/300x200?text=${name}'">
                <h3>${name}</h3>
                <p class="price">${price}</p>
                <button class="add-btn">Añadir al Carrito</button>
            </div>
        `;
        
        this.querySelector('.add-btn').addEventListener('click', () => {
            window.addToCart(name, price, image);
        });
    }
}

customElements.define('product-card', ProductCard);

const products = {
    frutas: [
        { name: 'Manzanas Rojas', price: '$2.50/kg', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400' },
        { name: 'Plátanos Frescos', price: '$1.80/kg', image: 'https://images.unsplash.com/photo-1571771894824-c13b341134a6?w=400' },
        { name: 'Naranjas', price: '$2.00/kg', image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400' },
    ],
    verduras: [
        { name: 'Zanahorias Orgánicas', price: '$1.20/kg', image: 'https://images.unsplash.com/photo-1590868309235-e62758673633?w=400' },
        { name: 'Tomates Frescos', price: '$3.00/kg', image: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=400' },
        { name: 'Lechuga Verde', price: '$1.50/kg', image: 'https://images.unsplash.com/photo-1511621776486-a01980e01a18?w=400' },
    ],
    lacteos: [
        { name: 'Leche Fresca Pura', price: '$1.50/L', image: 'https://images.unsplash.com/photo-1620189507195-68309c04c4d2?w=400' },
        { name: 'Queso Artesanal', price: '$12.00/kg', image: 'https://images.unsplash.com/photo-1628022299361-934f559437a3?w=400' },
        { name: 'Yogurt Natural', price: '$3.50/kg', image: 'https://images.unsplash.com/photo-1608270861620-7891c1b51748?w=400' },
    ],
    cereales: [
        { name: 'Avena en Hojuelas', price: '$4.00/kg', image: 'https://images.unsplash.com/photo-1500219955672-7a0c96848225?w=400' },
        { name: 'Maíz Fresco', price: '$1.00/kg', image: 'https://images.unsplash.com/photo-1599447462853-f72a445778a8?w=400' },
        { name: 'Arroz Integral', price: '$2.50/kg', image: 'https://images.unsplash.com/photo-1586985289688-cacf604ba6d3?w=400' },
    ]
};

let cartItems = [];
let currentSection = 'inicio';

// ===== NAVEGACIÓN ENTRE SECCIONES =====
function goToSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionId;
        
        // Si es la tienda, mostrar los productos
        if (sectionId === 'tienda') {
            displayProducts('all');
            setupCategoryFilters();
        } else if (sectionId === 'inicio') {
            displayFeaturedProducts();
        }
        
        // Scroll al inicio
        window.scrollTo(0, 0);
    }
}

// Mostrar productos destacados en inicio
function displayFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;
    
    container.innerHTML = '';
    const featured = [
        products.frutas[0],
        products.verduras[1],
        products.lacteos[0],
        products.cereales[2]
    ];
    
    featured.forEach(product => {
        const card = document.createElement('product-card');
        card.setAttribute('name', product.name);
        card.setAttribute('price', product.price);
        card.setAttribute('image', product.image);
        container.appendChild(card);
    });
}

function addToCart(name, price, image) {
    cartItems.push({ name, price, image });
    updateCart();
    showNotification('✓ ' + name + ' añadido al carrito!');
}

function updateCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCounter = document.querySelector('.cart-counter');
    
    if (cartContainer) {
        cartContainer.innerHTML = '';
        let total = 0;
        
        if (cartItems.length === 0) {
            cartContainer.innerHTML = '<p style="text-align: center; padding: 20px; color: #999;">Tu carrito está vacío</p>';
        } else {
            cartItems.forEach((item, idx) => {
                const priceNum = parseFloat(item.price.match(/[\d.]+/)[0]);
                total += priceNum;
                
                const div = document.createElement('div');
                div.className = 'cart-item';
                div.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80x80'">
                    <div class="item-details">
                        <p><strong>${item.name}</strong></p>
                        <p>${item.price}</p>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${idx})" style="background: #ef4444; color: white; border: none; border-radius: 5px; padding: 0.5rem 0.75rem; cursor: pointer; font-size: 0.8rem; font-weight: 600;">Eliminar</button>
                `;
                cartContainer.appendChild(div);
            });
        }
        
        if (cartTotal) {
            cartTotal.textContent = '$' + total.toFixed(2);
        }
        
        if (cartCounter) {
            cartCounter.textContent = cartItems.length;
            cartCounter.style.display = cartItems.length > 0 ? 'flex' : 'none';
        }
    }
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}

function clearCart() {
    if (cartItems.length === 0) {
        alert('El carrito ya está vacío');
        return;
    }
    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
        cartItems = [];
        updateCart();
    }
}

function showNotification(msg) {
    const notif = document.createElement('div');
    notif.className = 'add-to-cart-confirmation';
    notif.textContent = msg;
    document.body.appendChild(notif);
    setTimeout(() => notif.style.opacity = '1', 10);
    setTimeout(() => {
        notif.style.opacity = '0';
        setTimeout(() => notif.remove(), 300);
    }, 2500);
}

function displayProducts(category) {
    const container = document.getElementById('product-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const toDisplay = category === 'all' 
        ? Object.values(products).flat()
        : (products[category] || []);
    
    if (toDisplay.length === 0) {
        container.innerHTML = '<p>No hay productos en esta categoría</p>';
        return;
    }
    
    toDisplay.forEach(product => {
        const card = document.createElement('product-card');
        card.setAttribute('name', product.name);
        card.setAttribute('price', product.price);
        card.setAttribute('image', product.image);
        container.appendChild(card);
    });
}

function setupCategoryFilters() {
    const categoryLinks = document.querySelectorAll('.category-sidebar a');
    categoryLinks.forEach(link => {
        // Remover listeners antiguos
        link.removeEventListener('click', categoryClickHandler);
        // Agregar nuevo listener
        link.addEventListener('click', categoryClickHandler);
    });
}

function categoryClickHandler(e) {
    e.preventDefault();
    const category = this.dataset.category;
    
    const categoryLinks = document.querySelectorAll('.category-sidebar a');
    categoryLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    displayProducts(category);
}

function handleContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Aquí iría la lógica para enviar el mensaje (a un servidor)
    // Por ahora, solo mostramos una confirmación
    showNotification('✓ Mensaje enviado! Nos pondremos en contacto pronto.');
    
    // Limpiar formulario
    event.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar sección inicio
    displayFeaturedProducts();
    
    // Setup carrito
    const cartIcon = document.querySelector('.cart');
    const cartModal = document.querySelector('.shopping-cart-modal');
    const closeBtn = document.getElementById('close-cart');
    const clearBtn = document.getElementById('clear-cart-btn');
    
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            if (cartModal) cartModal.style.display = 'block';
            updateCart();
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (cartModal) cartModal.style.display = 'none';
        });
    }
    
    if (cartModal) {
        window.addEventListener('click', (e) => {
            if (e.target === cartModal) cartModal.style.display = 'none';
        });
    }
    
    if (clearBtn) {
        clearBtn.addEventListener('click', clearCart);
    }
    
    // ESC para cerrar modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cartModal && cartModal.style.display === 'block') {
            cartModal.style.display = 'none';
        }
    });
    
    updateCart();
});


