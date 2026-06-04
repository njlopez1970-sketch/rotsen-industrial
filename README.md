<div align="center">

# ⚙️ ROTSEN

### Ingeniería y Mantenimiento Industrial · Industria 4.0

Sitio web corporativo de alta tecnología: mantenimiento predictivo, monitoreo en tiempo real e inteligencia artificial aplicada a la industria.

![React](https://img.shields.io/badge/React-18-1E63FF?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-38E1FF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3-22D3EE?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel&logoColor=white)
![Status](https://img.shields.io/badge/status-en%20producción-22D3EE)

</div>

---

## 📌 Descripción

Landing corporativa de **ROTSEN**, empresa de ingeniería y mantenimiento industrial ubicada en **Cali, Colombia**. El sitio comunica alta tecnología, confianza e innovación con un diseño futurista inspirado en referentes como Tesla, Siemens, ABB y SpaceX.

## ✨ Características

- **Hero animado** con grilla en movimiento, efectos de glow y contadores dinámicos.
- **Menú responsive** con versión móvil colapsable.
- **16 servicios** en tarjetas modernas con iconografía técnica.
- **Sección de tecnologías** (IoT, IA, drones, Industria 4.0, manufactura aditiva).
- **Galería de proyectos** industriales.
- **Bloque de drones** con radar animado e inspección en vivo.
- **Dashboard Industria 4.0** con datos en tiempo real (vibración, temperatura, salud de activos) usando `recharts`.
- **Formulario de contacto** + integración con **Google Maps** + **botón flotante de WhatsApp**.
- **Diseño responsive**, animaciones suaves y optimización **SEO**.

## 🛠️ Stack tecnológico

| Categoría | Tecnología |
|---|---|
| Framework | React 18 + Vite |
| Estilos | TailwindCSS + CSS personalizado |
| Iconos | lucide-react |
| Gráficas | recharts |
| Tipografía | Chakra Petch · Sora |
| Hosting | Vercel |

## 📁 Estructura del proyecto

```
rotsen-web/
├─ public/            # favicon, og-image, robots.txt, sitemap.xml
├─ src/
│  ├─ components/     # Navbar, Hero, Services, Dashboard, Contact, etc.
│  ├─ data/           # services.js, technologies.js, projects.js
│  ├─ hooks/          # useInView, useCounter
│  ├─ App.jsx
│  └─ main.jsx
├─ vercel.json        # SPA routing, cache y headers de seguridad
├─ tailwind.config.js
└─ index.html         # metadatos SEO + JSON-LD
```

## 🚀 Requisitos previos

- [Node.js](https://nodejs.org/) 18 o superior
- [Git](https://git-scm.com/)

## ⚡ Instalación y uso

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/rotsen-web.git
cd rotsen-web

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

La aplicación quedará disponible en `http://localhost:5173`.

## 📦 Build de producción

```bash
npm run build      # genera la carpeta dist/
npm run preview    # previsualiza el build localmente
```

## ☁️ Despliegue en Vercel

1. Sube el proyecto a GitHub.
2. En [vercel.com](https://vercel.com) → **Add New → Project** → importa el repositorio.
3. Vercel detecta Vite automáticamente y usa la configuración de `vercel.json`.
4. Pulsa **Deploy**.

Cada `git push` a la rama `main` redespliega el sitio automáticamente.

## 🔧 Configuración pendiente

Antes de publicar, reemplaza estos valores de ejemplo:

- [ ] **Número de WhatsApp** en `WhatsAppButton` (`573000000000`)
- [ ] **Teléfono y correo** de contacto (`contacto@rotsen.com`)
- [ ] **`src` del iframe de Google Maps** con la dirección exacta
- [ ] **Proyectos, métricas y textos** de marketing
- [ ] **Imágenes reales** (formato `.webp` / `.avif`)
- [ ] **Backend del formulario** (Formspree, Resend o API propia)

## 📜 Scripts disponibles

| Comando | Acción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm run preview` | Previsualiza el build |
| `npm run lint` | Revisa el código (si ESLint está configurado) |

## 🗺️ Roadmap

- [ ] Multipágina con React Router (Servicios, Proyectos, Blog)
- [ ] CMS para gestionar proyectos y noticias
- [ ] Dashboard conectado a datos reales (IoT / API)
- [ ] Internacionalización (ES / EN)
- [ ] Analítica y métricas de conversión

## 📄 Licencia

Propiedad de **ROTSEN**. Todos los derechos reservados © 2026.

## 📬 Contacto

**ROTSEN** — Cali, Valle del Cauca, Colombia
📧 contacto@rotsen.com · 📱 +57 300 000 0000

---

<div align="center"><sub>En movimiento, hacia tu próximo objetivo.</sub></div>
