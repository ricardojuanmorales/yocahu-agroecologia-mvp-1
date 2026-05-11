# Compendio de Estado de Situación
## Yocahú Agroecología PR — MVP v0.2.2
**Fecha de cierre de sesión:** 2026-05-11

---

## 1. Identidad del proyecto

**Nombre:** Yocahú Agroecología PR: Viaje por el Archipiélago Vivo
**Versión actual:** 0.2.2
**Tipo:** PWA educativa móvil (HTML/CSS/JS vanilla, sin backend)
**Repositorio público:** https://github.com/ricardojuanmorales/yocahu-agroecologia-mvp-1
**Contexto geográfico:** Puerto Rico, Vieques y Culebra

---

## 2. Arquitectura técnica actual

| Componente | Estado | Detalle |
|---|---|---|
| `index.html` | Funcional | Aplicación monolítica HTML/CSS/JS vanilla |
| `manifest.json` | Funcional | PWA instalable en móvil |
| `sw.js` | Funcional | Service worker con caché offline |
| `data/*.json` | Funcional | 8 archivos JSON de contenido editable |
| `assets/icons/` | Funcional | SVG + PNG (192px, 512px, maskable) |
| Backend | Ninguno | Sin servidor, sin base de datos remota |
| Autenticación | Ninguna | Sin login, por diseño del MVP |
| Almacenamiento | LocalStorage | Progreso exportable/importable como JSON |

---

## 3. Contenido curricular completado

### Niveles (13 en total)

| ID | Título | Bioma |
|---|---|---|
| 0 | Entrada al Archipiélago Vivo | Raíces y Semillas |
| 1 | Pensamiento Sistémico | Archipiélago Vivo |
| 2 | Suelo Vivo | Montaña Viva |
| 3 | Semillas, Biodiversidad y Cultura | Raíces y Semillas |
| 4 | Agua, Clima y Resiliencia | Islas Resilientes |
| 5 | Diseño de Finca Agroecológica | Montaña Viva |
| 6 | Manejo Ecológico de Plagas y Enfermedades | Bosque, Carso y Biodiversidad |
| 7 | Agroforestería y Bosques Comestibles | Bosque, Carso y Biodiversidad |
| 8 | Animales, Polinizadores y Ciclos | Archipiélago Vivo |
| 9 | Cosecha, Procesamiento y Valor Añadido | Economía Solidaria y Mercados |
| 10 | Mercados, Cooperación y Economía Solidaria | Economía Solidaria y Mercados |
| 11 | Tierra, Gobernanza y Justicia Alimentaria | Tierra, Gobernanza y Futuro |
| 12 | Proyecto Capstone: Mi Agroecosistema Boricua | Archipiélago Vivo |

### Biomas del archipiélago (8)
Raíces y Semillas · Montaña Viva · Islas Resilientes · Bosque, Carso y Biodiversidad · Huertos, Escuelas y Universidad · Economía Solidaria y Mercados · Tierra, Gobernanza y Futuro · Archipiélago Vivo

### Actividades (25 en total)
Tipos implementados: quiz · reflection-map · concept-map · scenario · field-observation y otros.

### Proyectos insignia (50)
Catálogo completo de fincas, organizaciones y colectivos agroecológicos reales de Puerto Rico.
Ficheros: `data/projects.json`, `data/project_fichas_compactas.json`, `data/top_project_profiles.json`

### Top 11 (Lote A+)
Perfiles aumentados con imagen, fuente y narrativa extendida. Tarjetas marcadas con ⭐ en la app.

### Prompts de Yocahú (13 en total, uno por nivel)
Prompts copiables para usar en conversación separada con IA. Niveles 0–12.

### Badges (13)
Un badge por nivel completado. Ejemplo: Semilla Despierta, Mirada Sistémica, Guardiana del Suelo.

### Rúbrica capstone
Definida en `data/rubric.json` para el Nivel 12.

---

## 4. Funcionalidades de la PWA

- Navegación por secciones: Inicio, Mapa, Proyectos, Yocahú Prompts, Progreso, Capstone
- Fichas compactas de proyectos en modal
- Perfiles aumentados para Top 11
- Exportación e importación de progreso JSON
- Instalación en pantalla de inicio (móvil/escritorio)
- Modo offline con service worker

---

## 5. Decisiones de diseño relevantes

- **Sin backend por diseño:** El MVP no requiere servidor, login, ni API GPT. El progreso vive en LocalStorage.
- **Datos separados del código:** Todo contenido curricular está en `/data/*.json`, editable sin tocar el HTML.
- **Paleta accesible:** Tema "Selva salvaje accesible" con contraste alto y tipografía legible (Atkinson Hyperlegible / Montserrat).
- **Accesibilidad móvil:** Botones ≥44px, sin dependencia de color para mostrar progreso, navegación por teclado.
- **Portabilidad:** El proyecto es un directorio estático autocontenido que funciona desde `localhost` o cualquier hosting estático.

---

## 6. Deuda técnica y pendientes conocidos

- [ ] Verificación de datos de contacto y URLs de los 50 proyectos (`verificationStatus: "pendiente"`)
- [ ] Imágenes reales para fichas compactas y perfiles Top 11 (actualmente con campos `imageUrl` vacíos)
- [ ] Separar CSS y JS en archivos externos (actualmente embebidos en `index.html`)
- [ ] Panel docente (en hoja de ruta futura)
- [ ] Integración GPT API (en hoja de ruta futura)
- [ ] Base de datos remota opcional (en hoja de ruta futura)
- [ ] Pruebas de accesibilidad formal (WCAG 2.1 AA)

---

## 7. Hoja de ruta futura (prioridades sugeridas)

1. Separar `index.html` en módulos (HTML + CSS externo + JS externo)
2. Añadir imágenes reales a fichas de proyectos
3. Verificar y completar URLs y contactos de los 50 proyectos
4. Publicar en GitHub Pages u hosting estático (Netlify, Vercel)
5. Pruebas de usabilidad con estudiantes universitarios
6. Panel docente básico
7. Integración opcional GPT API para Yocahú interactivo

---

*Documento generado al cierre de sesión de trabajo — Yocahú Agroecología PR v0.2.2 — 2026-05-11*
