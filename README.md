# 🌾 Agroshop - Tienda de Productos Agrícolas

Una tienda de e-commerce moderna para productos agrícolas frescos, construida con HTML, CSS y JavaScript vanilla con Web Components.

## ✨ Características

- ✅ Interfaz moderna y responsive con gradientes y animaciones suaves
- ✅ Sistema de categorías (Frutas, Verduras, Lácteos, Cereales)
- ✅ Carrito de compras funcional
- ✅ Web Components (producto-card personalizado)
- ✅ Diseño mobile-first completamente responsivo
- ✅ Autenticación con páginas de login y registro
- ✅ Animaciones modernas y transiciones suaves
- ✅ 12+ productos de ejemplo con imágenes reales

## 🚀 Inicio Rápido

### Requisitos
- Node.js (v14 o superior)

### Instalación

1. **Clona o accede al directorio del proyecto:**
   ```bash
   cd agroshop-main
   ```

2. **Inicia el servidor:**
   ```bash
   npm start
   ```
   
   O directamente con Node:
   ```bash
   node server.js
   ```

3. **Abre tu navegador:**
   ```
   http://localhost:3000
   ```

## 📁 Estructura del Proyecto

```
agroshop-main/
├── public/
│   ├── index.html           # Página principal
│   ├── js/
│   │   └── main.js          # Lógica principal y componentes
│   ├── css/
│   │   ├── style.css        # Estilos principales
│   │   ├── login.css        # Estilos de login
│   │   └── register.css     # Estilos de registro
│   └── auth/
│       ├── login.html       # Página de inicio de sesión
│       └── register.html    # Página de registro
├── server.js                # Servidor Node.js
├── package.json             # Configuración del proyecto
└── README.md               # Este archivo
```

## 🎨 Paleta de Colores

- **Primario**: Verde Esmeralda (#10b981)
- **Primario Oscuro**: Verde Oscuro (#059669)
- **Secundario**: Ámbar (#f59e0b)
- **Acento**: Púrpura (#8b5cf6)
- **Fondo**: Gris muy claro (#f9fafb)

## 💻 Tecnologías Utilizadas

- **HTML5** - Semántica moderna
- **CSS3** - Gradientes, animaciones, Flexbox, Grid
- **JavaScript Vanilla** - Sin dependencias externas
- **Web Components** - Custom Elements para tarjetas de producto
- **Font Awesome 6** - Iconos
- **Google Fonts** - Tipografía (Poppins, Merriweather)

## 🎯 Funcionalidades Principales

### 1. Catálogo de Productos
- Vista de grid responsiva
- Filtrado por categorías
- Imágenes de productos con carga desde Unsplash

### 2. Carrito de Compras
- Añadir/eliminar productos
- Cálculo automático de totales
- Modal con animación suave
- Confirmación visual al añadir items

### 3. Autenticación (UI)
- Página de login con validación de formulario
- Página de registro
- Diseño atractivo con gradiente de fondo
- Validación HTML5 nativa

### 4. Responsive Design
- Adaptable a todos los tamaños de pantalla
- Menú optimizado para móviles
- Imágenes optimizadas
- Navegación táctil amigable

## 📱 Resoluciones Soportadas

- **Desktop** (> 768px): Navegación completa, sidebar de categorías
- **Tablet** (768px - 480px): Menú adaptado, categorías en horizontal
- **Móvil** (< 480px): Interfaz optimizada, navegación simplificada

## ⌨️ Atajos de Teclado

- **ESC** - Cerrar modal del carrito

## 🔧 Uso del Servidor

El servidor incluye:
- Servicio de archivos estáticos
- CORS habilitado
- Soporte para rutas SPA
- Manejo de errores 404
- Seguridad contra directory traversal

## 🎓 Aprendizaje

Este proyecto es perfecto para aprender:
- Web Components y Custom Elements
- Manipulación del DOM sin frameworks
- CSS moderno (Grid, Flexbox, Gradientes)
- Servidor HTTP básico con Node.js
- Buenas prácticas en JavaScript vanilla

## 📝 Notas de Desarrollo

- Los productos están almacenados en un objeto JavaScript
- No se usa base de datos (datos en memoria)
- Los endpoints de autenticación son placeholders (/api/login, /api/register)
- Las imágenes provienen de Unsplash (requiere conexión a internet)

## 🚀 Próximas Mejoras

- [ ] Integración con base de datos
- [ ] Autenticación real (JWT)
- [ ] Búsqueda de productos
- [ ] Filtros avanzados
- [ ] Historial de compras
- [ ] Reviews y calificaciones
- [ ] Integración de pago
- [ ] Admin panel

## 📄 Licencia

MIT

## 👨‍💻 Autor

Proyecto de demostración de e-commerce moderno

---

**Hecho con ❤️ para Agroshop** 🌾
