# Agroshop APP

Backend desarrollado por **Esneider Monsalve**  
Desarrollador Full Stack Junior  

---

## 👨‍💻 Sobre el Proyecto

Agroshop es una aplicación backend desarrollada con Node.js y Express que permite gestionar un sistema de restaurante mediante una API REST segura y estructurada.

Este proyecto demuestra mis habilidades como desarrollador backend, incluyendo autenticación segura con JWT, conexión a base de datos PostgreSQL y arquitectura organizada bajo el patrón MVC.

---

## 🚀 Tecnologías Utilizadas

- Node.js
- Express.js
- PostgreSQL
- JWT (JSON Web Token)
- bcrypt
- dotenv
- Cors
- Arquitectura MVC

---

## 🔐 Autenticación y Seguridad

El sistema implementa autenticación basada en JWT:

- Registro e inicio de sesión de usuarios.
- Encriptación de contraseñas con bcrypt.
- Generación de token JWT al iniciar sesión.
- Persistencia de sesión mediante token.
- Middleware de autenticación para proteger rutas privadas.
- Validación del token sin necesidad de consultar nuevamente la base de datos.

Esto permite mantener sesiones activas de forma segura y eficiente.

---

## 🗄 Base de Datos

Se utiliza PostgreSQL como motor de base de datos.

Características:

- Conexión configurada mediante archivo `.env`.
- Estructura relacional organizada.
- Preparado para escalabilidad.
- Separación de modelos y lógica de negocio.

---

## 📂 Estructura del Proyecto

```
├── controllers/
├── routes/
├── middlewares/
├── models/
├── database/
├── .env
├── server.js
└── package.json
```

El proyecto está organizado bajo el patrón MVC para mantener separación de responsabilidades y facilitar el mantenimiento.

---

## ⚙ Instalación y Configuración

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/esneider361/NOMBRE_DEL_REPO.git
cd NOMBRE_DEL_REPO
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```
PORT=3000

DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=nombre_base_datos
DB_PORT=5432

JWT_SECRET=tu_clave_secreta
JWT_EXPIRES_IN=24h
```

### 4️⃣ Ejecutar el servidor

```bash
npm start
```

Servidor disponible en:

```
http://localhost:3000
```

---

# 📡 Documentación de Endpoints

## 🔐 Autenticación

### 🟢 Registrar usuario
**POST** `/api/auth/register`

Crea un nuevo usuario en el sistema.

**Body:**
```json
{
  "name": "Juan Perez",
  "email": "juan@email.com",
  "password": "123456"
}
```

---

### 🟢 Iniciar sesión
**POST** `/api/auth/login`

Genera un token JWT para autenticación.

**Body:**
```json
{
  "email": "juan@email.com",
  "password": "123456"
}
```

**Respuesta:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 👥 Usuarios (🔒 Requiere Token)

### 🔵 Obtener todos los usuarios
**GET** `/api/users`

### 🔵 Obtener usuario por ID
**GET** `/api/users/:id`

### 🟡 Actualizar usuario
**PUT** `/api/users/:id`

### 🔴 Eliminar usuario
**DELETE** `/api/users/:id`

---

## 🍽 Platos (🔒 Requiere Token)

### 🔵 Obtener todos los platos
**GET** `/api/dishes`

### 🟢 Crear plato
**POST** `/api/dishes`

### 🟡 Actualizar plato
**PUT** `/api/dishes/:id`

### 🔴 Eliminar plato
**DELETE** `/api/dishes/:id`

---

## 🧾 Pedidos (🔒 Requiere Token)

### 🟢 Crear pedido
**POST** `/api/orders`

### 🔵 Obtener pedidos
**GET** `/api/orders`

---

## 🔐 Headers para rutas protegidas

Las rutas protegidas requieren el siguiente header:

```
Authorization: Bearer TU_TOKEN_AQUI
```

---

## 🧠 Mi Rol en el Proyecto

En este proyecto fui responsable de:

- Desarrollo completo del backend.
- Implementación del sistema de autenticación con JWT.
- Configuración y conexión con PostgreSQL.
- Creación de middleware de seguridad.
- Organización del proyecto bajo arquitectura MVC.
- Configuración de variables de entorno.
- Persistencia de sesión mediante token.
- Documentación del proyecto.

---

## 🎯 Objetivo Profesional

Este proyecto hace parte de mi portafolio como **Desarrollador Full Stack Junior**, donde demuestro:

- Desarrollo de APIs REST
- Implementación de autenticación segura
- Integración con bases de datos relacionales
- Buenas prácticas de backend
- Estructuración profesional de proyectos

---

## 🔮 Mejoras Futuras

- Implementar sistema de roles (admin / usuario)
- Documentación interactiva con Swagger
- Tests automatizados
- Dockerización
- Deploy en Render o Railway

---

## 📌 Estado del Proyecto

🟢 Funcional  
🔐 Autenticación implementada  
🗄 Base de datos conectada  
🚀 Proyecto listo para escalar  

---

## 📫 Contacto

GitHub: https://github.com/esneider361  

---

⭐ Este proyecto forma parte de mi crecimiento profesional como desarrollador backend.

