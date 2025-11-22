# 🌾 Agroshop - Tienda de Productos Agrícolas

[![Node.js](https://img.shields.io/badge/Node.js->=14.0.0-green?logo=node.js)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)](https://github.com/DinoPattta/-Agroshop/releases/tag/v1.0.0)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen.svg)]()

Una tienda de e-commerce moderna para productos agrícolas frescos, construida con **HTML5, CSS3 y JavaScript Vanilla** con Web Components. Sin dependencias externas, completamente responsivo y listo para producción.

## ✨ Características

| Característica | Descripción |
|---|---|
| 🎨 **Diseño Moderno** | Interfaz atractiva con gradientes y animaciones suaves |
| 📱 **Totalmente Responsivo** | Mobile-first, funciona en todos los dispositivos |
| 🛍️ **E-commerce Completo** | Catálogo de 12+ productos con carrito funcional |
| 🏷️ **Categorías** | Frutas, Verduras, Lácteos, Cereales |
| 🔧 **Web Components** | Componentes reutilizables personalizados |
| 🔐 **Autenticación UI** | Páginas de login y registro diseñadas |
| ⚡ **Sin Dependencias** | HTML, CSS y JS vanilla - carga ultra rápida |
| 🎯 **Multi-sección** | Inicio, Tienda, Nosotros, Contacto |

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Demo](#-demo)
- [Inicio Rápido](#-inicio-rápido)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Estructura](#-estructura-del-proyecto)
- [Tecnologías](#-tecnologías-utilizadas)
- [API](#-api-endpoints)
- [Desarrollo](#-desarrollo)
- [Documentación](#-documentación-completa)
- [Contribuir](#-contribución)
- [Licencia](#-licencia)

## 🖼️ Demo

### En Vivo
- **Sitio Web**: http://localhost:3000 (después de ejecutar)
- **Admin Dashboard**: Próximamente
- **API Docs**: `/api/docs`

### Screenshots
```
[Agroshop - Homepage Hero]
[Agroshop - Tienda con Productos]
[Agroshop - Carrito de Compras]
[Agroshop - Vista Mobile]
```

---

## 🚀 Inicio Rápido

### Requisitos
- **Node.js** v14 o superior
- **npm** o **yarn**
- Un navegador moderno (Chrome, Firefox, Safari, Edge)

### Instalación Rápida

```bash
# 1. Clonar el repositorio
git clone https://github.com/DinoPattta/-Agroshop.git
cd agroshop-main

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo
npm start

# 4. Abrir en navegador
# Automáticamente abrirá http://localhost:3000
# O abre manualmente: http://localhost:3000
```

**¡Listo! La tienda estará disponible en 30 segundos ⚡**

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

### Frontend
```
✅ HTML5           - Estructura semántica moderna
✅ CSS3            - Grid, Flexbox, Animaciones, Gradientes
✅ JavaScript ES6+ - Vanilla (sin dependencias)
✅ Web Components  - Custom Elements reutilizables
✅ Responsive      - Mobile-first design
✅ A11y            - Accesibilidad (ARIA labels)
```

### Backend (Opcional)
```
✅ Node.js         - Express.js (recomendado)
✅ Python          - Flask/FastAPI (alternativa)
✅ REST API        - 10+ endpoints documentados
```

### Herramientas
```
✅ Font Awesome 6  - Iconos profesionales
✅ Google Fonts    - Tipografía (Poppins, Merriweather)
✅ Capacitor       - Apps móviles nativas
✅ Git/GitHub      - Control de versiones
```

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

## 🔨 Desarrollo

### Scripts Disponibles

```bash
npm start          # Ejecutar servidor en desarrollo
npm run dev        # Modo desarrollo con watch
npm run lint       # Verificar código con ESLint
npm run build      # Build para producción
npm run test       # Ejecutar tests
```

### Estructura de Carpetas

```
agroshop-main/
├── web/public/           # Frontend (HTML, CSS, JS)
├── server/              # Backend (Node.js, Python)
├── config/              # Configuración
├── docs/                # Documentación
├── mobile/android/      # App Android
└── scripts/             # Scripts útiles
```

### Notas de Desarrollo

- ✅ Productos en JavaScript (en memoria actualmente)
- ✅ Sin base de datos todavía (próxima versión)
- ✅ Endpoints son placeholders (implementar backend)
- ✅ Imágenes desde Unsplash (requiere internet)
- ⚠️ Autenticación UI solo - backend pendiente

---

## 📚 Documentación Completa

| Recurso | Descripción |
|---|---|
| [EMPEZAR_AQUI.md](EMPEZAR_AQUI.md) | 🟢 **COMIENZA AQUÍ** - Guía de bienvenida |
| [docs/INDEX.md](docs/INDEX.md) | Centro de documentación con todas las guías |
| [docs/guias/INICIO_RAPIDO.md](docs/guias/INICIO_RAPIDO.md) | Guía 5 minutos |
| [docs/guias/INSTALACION.md](docs/guias/INSTALACION.md) | Instalación paso a paso |
| [docs/api/ENDPOINTS.md](docs/api/ENDPOINTS.md) | API REST documentada |
| [docs/api/AUTENTICACION.md](docs/api/AUTENTICACION.md) | Sistema de auth |
| [server/README.md](server/README.md) | Documentación backend |
| [REFERENCIA_RAPIDA.md](REFERENCIA_RAPIDA.md) | Cheat sheet para devs |

---

## 🤝 Contribución

¿Quieres contribuir? ¡Es fácil!

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

Ver guía completa: [CONTRIBUYENDO.md](CONTRIBUYENDO.md)

---

## 📞 Soporte

¿Problemas? ¿Preguntas?

- 📖 Revisa la [documentación](docs/INDEX.md)
- 🐛 Abre un [Issue](https://github.com/DinoPattta/-Agroshop/issues)
- 💬 Inicia una [Discussion](https://github.com/DinoPattta/-Agroshop/discussions)

## 🔄 API Endpoints

```javascript
// Productos
GET    /api/products           // Obtener todos
GET    /api/products/:id       // Obtener por ID
GET    /api/categories         // Obtener categorías

// Carrito
POST   /api/cart/add           // Agregar producto
DELETE /api/cart/remove        // Eliminar producto
GET    /api/cart               // Obtener carrito

// Autenticación
POST   /api/auth/login         // Login
POST   /api/auth/register      // Registro
POST   /api/auth/logout        // Logout

// Órdenes
POST   /api/orders             // Crear orden
GET    /api/orders/:id         // Obtener orden
```

Ver documentación completa: [docs/api/ENDPOINTS.md](docs/api/ENDPOINTS.md)

---

## 🚀 Próximas Versiones

### v1.1.0 (Próximo)
- [ ] Backend con base de datos (MongoDB/PostgreSQL)
- [ ] Autenticación real (JWT)
- [ ] Persistencia de carrito en BD

### v1.2.0
- [ ] Integración de pago (Stripe/PayPal)
- [ ] Búsqueda y filtros avanzados
- [ ] Historial de compras

### v2.0.0
- [ ] Admin panel
- [ ] Reviews y calificaciones
- [ ] App móvil nativa (Android/iOS)
- [ ] Sistema de notificaciones

## 📄 Licencia

MIT

## 👨‍💻 Autor

Proyecto de demostración de e-commerce moderno

---

**Hecho con ❤️ para Agroshop** 🌾
