# ProviEmplea - Centro de Negocios SERCOTEC

Proyecto desarrollado en React como parte de una evaluación sumativa de la Unidad 3.  
Simula un sitio web institucional para el Centro de Negocios Santiago de SERCOTEC, integrando componentes reutilizables, consumo de API y diseño responsivo.

---

## Tecnologías utilizadas

- React + Vite
- JavaScript (ES6+)
- CSS puro
- JSON Server (CMS simulado)
- Fetch API
- Git y GitHub

---

## Estructura del proyecto

PROVIEMPLEA-SERCOTEC
├── node_modules
├── public
└── src
├── assets
│ ├── hero.png
│ └── vite.svg
├── components
├── data
│ └── servicesData.js
├── sections
│ ├── About.jsx
│ ├── Contact.jsx
│ ├── FAQ.jsx
│ ├── Hero.jsx
│ ├── Services.jsx
│ └── Testimonials.jsx
├── services
├── styles
│ ├── about.css
│ ├── contact.css
│ ├── faq.css
│ ├── footer.css
│ ├── hero.css
│ ├── navbar.css
│ ├── scrollTop.css
│ ├── serviceCard.css
│ ├── services.css
│ └── testimonials.css
├── App.css
├── App.jsx
├── index.css
└── main.jsx
├── .gitignore
├── db.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

---

## Instalación del proyecto

```bash
- npm install


---

Ejecución del CMS (JSON Server)

json-server --watch db.json --port 3001


----

Endpoints del CMS

El proyecto consume datos desde:

GET /faq
GET /testimonials

Base URL:

http://localhost:3001


---

Ejemplo de uso del CMS (Postman)

🔹 Obtener datos

GET http://localhost:3001/faq
GET http://localhost:3001/testimonials
🔹 Crear nuevo testimonio
POST http://localhost:3001/testimonials

Body JSON:

{
  "name": "Nuevo Usuario",
  "role": "Emprendedor",
  "text": "Excelente servicio del centro de negocios"
}

🔹 Editar testimonio
PUT http://localhost:3001/testimonials/1

🔹 Eliminar testimonio
DELETE http://localhost:3001/testimonials/1

----

Funcionalidades principales


Tarjetas de servicios reutilizables
Carrusel de testimonios dinámico
FAQ tipo acordeón con estado
Modo oscuro global
Accesibilidad (A+, A-)
Scroll automático a contacto
Consumo de API (CMS)

---


Accesibilidad y modo oscuro

El sitio incluye:

Modo claro / oscuro global
Ajuste de tamaño de fuente
Contraste adaptativo

---


Buenas prácticas aplicadas

Componentes reutilizables
Separación de lógica y estilos
Consumo de API con fetch
Uso de estado con React Hooks
Diseño responsive

```
