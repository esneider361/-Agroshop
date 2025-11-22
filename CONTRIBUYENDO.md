# 🤝 Guía de Contribución - Agroshop

Gracias por tu interés en contribuir a **Agroshop**. Esta guía te ayudará a entender cómo participar en el desarrollo del proyecto.

## 📋 Tabla de Contenidos

1. [Código de Conducta](#código-de-conducta)
2. [¿Cómo Contribuir?](#cómo-contribuir)
3. [Proceso de Pull Request](#proceso-de-pull-request)
4. [Estándares de Código](#estándares-de-código)
5. [Reporte de Bugs](#reporte-de-bugs)
6. [Solicitud de Características](#solicitud-de-características)

---

## 📜 Código de Conducta

Nos comprometemos a proporcionar un ambiente amable, inclusivo y respetuoso para todos los contribuidores.

**Esperamos:**
- ✅ Ser respetuoso con otros contribuidores
- ✅ Aceptar crítica constructiva
- ✅ Enfocarse en lo que es mejor para la comunidad
- ✅ Mostrar empatía hacia otros miembros

---

## 🚀 ¿Cómo Contribuir?

### Formas de Contribuir:

1. **Reportar Bugs** - Encontraste un error? Repórtalo
2. **Sugerir Mejoras** - Tenemos ideas para mejorar? Sugierelas
3. **Documentación** - Mejora o expande la documentación
4. **Código** - Fix bugs o implementa nuevas características
5. **Testing** - Ayuda a probar nuevas funcionalidades

---

## 🔄 Proceso de Pull Request

### Paso 1: Fork del Repositorio
```bash
# En GitHub, haz click en "Fork"
git clone https://github.com/TU_USUARIO/agroshop.git
cd agroshop
```

### Paso 2: Crea una Rama
```bash
git checkout -b feature/descripcion-corta
# o para bugs:
git checkout -b fix/descripcion-del-bug
```

**Convención de nombres:**
- `feature/nombre-feature` - Para nuevas características
- `fix/nombre-bug` - Para correcciones
- `docs/nombre-doc` - Para documentación
- `test/nombre-test` - Para tests

### Paso 3: Realiza Cambios
- Haz commits pequeños y con mensajes claros
- Una funcionalidad por PR

```bash
git add .
git commit -m "feat: Agregar autenticación con JWT"
```

**Formato de commit:**
```
<tipo>: <descripción corta>

<descripción detallada si es necesario>

Fixes #<issue-number> (si aplica)
```

**Tipos de commit:**
- `feat:` - Nueva característica
- `fix:` - Corrección de bug
- `docs:` - Cambios en documentación
- `style:` - Cambios de formato (no afectan código)
- `refactor:` - Refactorización de código
- `perf:` - Mejoras de performance
- `test:` - Agregar tests

### Paso 4: Push y Pull Request

```bash
git push origin feature/descripcion-corta
```

Luego en GitHub:
1. Haz click en "Compare & Pull Request"
2. Llena la plantilla de PR
3. Describe qué cambios hiciste y por qué
4. Linkea cualquier issue relacionado (#123)
5. Envía el PR

### Paso 5: Code Review

- Los mantenedores revisarán tu código
- Pueden solicitar cambios
- Una vez aprobado, se hace merge

---

## 💻 Estándares de Código

### JavaScript/Node.js

✅ **DO:**
```javascript
// Nombres descriptivos
const getUserById = async (userId) => {
  return await database.find(userId);
};

// Comentarios útiles
// Validar que el email sea válido
if (isValidEmail(email)) {
  // Procesar
}

// Funciones pequeñas con propósito único
const validateEmail = (email) => email.includes('@');
```

❌ **DON'T:**
```javascript
// Nombres vagos
const get = (x) => database.find(x);

// Sin comentarios en lógica compleja
if (email.split('@').length === 2 && email.includes('.')) {}

// Funciones muy largas
const doEverything = () => { /* 500 líneas */ };
```

### CSS

✅ **DO:**
```css
/* Usar variables CSS */
.button {
  background-color: var(--primary-color);
  padding: var(--spacing-md);
}

/* Clases descriptivas */
.product-card-container { }
.filter-section-active { }
```

❌ **DON'T:**
```css
/* Colores hardcodeados */
.button { background: #10b981; }

/* Clases genéricas */
.box1, .box2, .container-div { }
```

### HTML

✅ **DO:**
```html
<!-- Usar elementos semánticos -->
<article>
  <header>
    <h1>Título</h1>
  </header>
  <section>
    <p>Contenido</p>
  </section>
</article>

<!-- Atributos bien nombrados -->
<button aria-label="Cerrar modal" data-action="close">×</button>
```

❌ **DON'T:**
```html
<!-- Divs anidados sin semántica -->
<div class="main">
  <div class="content">
    <div class="text">
      <div>Contenido</div>
    </div>
  </div>
</div>
```

---

## 🐛 Reporte de Bugs

Antes de reportar, revisa si el bug ya existe.

### Plantilla de Bug Report:

```markdown
**Descripción:**
Descripción clara del bug

**Pasos para Reproducir:**
1. Ir a...
2. Hacer click en...
3. Notar que...

**Comportamiento Esperado:**
Qué debería suceder

**Comportamiento Actual:**
Qué está sucediendo

**Información del Sistema:**
- OS: [Windows/Mac/Linux]
- Navegador: [Chrome/Firefox/Safari]
- Versión de Node: [14.0.0]

**Screenshots/Video:**
[Si es posible, adjuntar]

**Contexto Adicional:**
[Cualquier otra información relevante]
```

---

## 💡 Solicitud de Características

### Plantilla de Feature Request:

```markdown
**Descripción:**
Descripción clara de la característica deseada

**Caso de Uso:**
Qué problema resuelve o qué necesidad cubre

**Solución Propuesta:**
Cómo debería funcionar

**Alternativas Consideradas:**
Otras soluciones que pensaste

**Contexto Adicional:**
[Mockups, referencias, enlaces relevantes]

**Prioridad:**
[Baja/Media/Alta]
```

---

## 📝 Documentación

Si agregas nuevas características, también agrega documentación:

1. **Código comentado** - Explica la lógica compleja
2. **README** - Actualiza si cambia la instalación/uso
3. **CAMBIOS.md** - Agrega tu cambio al changelog
4. **Ejemplos** - Proporciona ejemplos de uso

---

## ✅ Checklist antes de Enviar PR

- [ ] He leído la guía de contribución
- [ ] Mi rama está basada en la rama `master` más reciente
- [ ] He hecho commits con mensajes claros
- [ ] Mi código sigue los estándares del proyecto
- [ ] He agregado/actualizado comentarios en código complejo
- [ ] He actualizado la documentación si es necesario
- [ ] He probado mis cambios localmente
- [ ] No tengo conflictos de merge
- [ ] Los tests pasan (si existen)

---

## 🔧 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Ejecutar linting
npm run lint

# Ejecutar tests
npm run test

# Build para producción
npm run build
```

---

## 📚 Recursos Útiles

- [Estructura del Proyecto](ESTRUCTURA_PROYECTO.md)
- [Guía de Instalación](docs/guias/INSTALACION.md)
- [Documentación de API](docs/api/ENDPOINTS.md)
- [Changelog](docs/CAMBIOS.md)

---

## 🎓 Comunidad

¿Preguntas? ¡Abre un Issue o Discussion!

- 💬 Discussions - Para preguntas generales
- 🐛 Issues - Para bugs y features
- 📧 Email - [Si tienes contacto establecido]

---

## 📜 Licencia

Al contribuir, aceptas que tu código será licenciado bajo la licencia MIT del proyecto.

---

**¡Gracias por contribuir a Agroshop! 🌾**

Cada contribución nos ayuda a mejorar. ¡Esperamos tu PR! 🚀
