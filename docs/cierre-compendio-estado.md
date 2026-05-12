# Compendio de Estado de Situación
## Yocahú Agroecología PR — MVP v0.2.3
**Fecha de cierre de sesión:** 2026-05-12

---

## 1. Identidad del proyecto

**Nombre:** Yocahú Agroecología PR: Viaje por el Archipiélago Vivo  
**Versión actual:** 0.2.3  
**URL pública:** https://ricardojuanmorales.github.io/yocahu-agroecologia-mvp-1/  
**Repositorio:** https://github.com/ricardojuanmorales/yocahu-agroecologia-mvp-1  
**Tipo:** PWA educativa móvil (HTML/CSS/JS vanilla, sin backend)  
**Contexto geográfico:** Puerto Rico, Vieques y Culebra  
**Autor:** Ricardo Juan Morales De Jesús, Ph.D. — Facultad de Estudios Generales, UPR Río Piedras

---

## 2. Arquitectura técnica actual

| Componente | Estado | Detalle |
|---|---|---|
| `index.html` | Funcional | Aplicación monolítica HTML/CSS/JS vanilla (~1,550 líneas) |
| `manifest.json` | Funcional | PWA instalable en móvil |
| `sw.js` | Funcional | Service worker v0-2-8; network-first para HTML, cache-first para assets |
| `data/*.json` | Funcional | 11 archivos JSON de contenido editable |
| `assets/icons/` | Funcional | SVG + PNG (192px, 512px, maskable) |
| `docs/` | Funcional | 6 archivos MD de documentación |
| Backend | Ninguno | Sin servidor, sin base de datos remota |
| Autenticación | Ninguna | Sin login, por diseño del MVP |
| Almacenamiento | LocalStorage | Progreso exportable/importable como JSON |

---

## 3. Contenido curricular completado

### Niveles (13 en total)

| ID | Título | Badge |
|---|---|---|
| 0 | Entrada al Archipiélago Vivo | 🌱 Semilla Despierta |
| 1 | Pensamiento Sistémico | 🕸️ Mirada Sistémica |
| 2 | Suelo Vivo | 🪱 Guardiana del Suelo |
| 3 | Semillas, Biodiversidad y Cultura | 🌾 Custodia de Semillas |
| 4 | Agua, Clima y Resiliencia | 💧 Explorador de Microclimas |
| 5 | Diseño de Finca Agroecológica | 🗺️ Cartógrafo Agroecológico |
| 6 | Manejo Ecológico de Plagas y Enfermedades | 🐞 Observadora del Equilibrio |
| 7 | Agroforestería y Bosques Comestibles | 🌳 Arquitecta del Bosque |
| 8 | Animales, Polinizadores y Ciclos | 🐝 Cuidador de Polinizadores |
| 9 | Cosecha, Procesamiento y Valor Añadido | 🍯 Alquimista de Cosechas |
| 10 | Mercados, Cooperación y Economía Solidaria | 🧺 Mercadera Solidaria |
| 11 | Tierra, Gobernanza y Justicia Alimentaria | 🤲 Custodia de Tierra |
| 12 | Proyecto Capstone: Mi Agroecosistema Boricua | 🌿 Maestría Yocahú |

### Actividades (25 en total)
Tipos implementados: `quiz` · `reflection-map` · `concept-map` · `scenario` · `branching-scenario` · `field-observation` · `field-journal` · `design` · `map` · `observation` · `systems-map` · `comparison` · `roleplay-simulation` · `matrix` · `capstone`

### Proyectos insignia (50)
Catálogo completo de fincas, organizaciones y colectivos agroecológicos reales de Puerto Rico.  
Ficheros: `data/projects.json`, `data/project_fichas_compactas.json`, `data/top_project_profiles.json`

### Top 11 (Lote A+)
Perfiles aumentados con narrativa extendida, tipo y municipio. Tarjetas marcadas con ⭐ en la app.

### Prompts de Yocahú (13 en total, uno por nivel)
Prompts copiables para usar en conversación separada con IA. Niveles 0–12.

### Contestaciones modelo (13 en total)
Respuestas de referencia de Yocahú para cada prompt, almacenadas en `data/answers.json` y accesibles desde el botón **Contestación Modelo** en cada tarjeta de prompt. Desplegadas en modal con renderizado markdown completo.

### Badges (13)
Un badge por nivel completado.

### Rúbrica capstone
Definida en `data/rubric.json`: 5 criterios × 4 niveles de desempeño.

---

## 4. Funcionalidades de la PWA

- Navegación por secciones: Inicio, Mapa, Proyectos, Top 11, Yocahú Prompts, Progreso, Capstone
- Fichas compactas de proyectos en modal
- Perfiles aumentados para Top 11
- **Perfil de usuario editable** (nombre, región, objetivo de aprendizaje)
- **Exportación e importación de progreso JSON**
- **Guías de uso** accesibles desde la sección Progreso, con markdown completo renderizado
- **Contestación Modelo** — botón en cada tarjeta de prompt; abre modal con respuesta scrollable, opciones Cerrar y Copiar texto
- Botón "Instalar app" siempre visible en topbar (con fallback toast para iOS/escritorio)
- Modo offline con service worker (network-first HTML, cache-first assets)
- Sección motivacional en Inicio con principios pedagógicos como chips

---

## 5. Decisiones de diseño relevantes

- **Sin backend por diseño:** El MVP no requiere servidor, login ni API GPT. El progreso vive en LocalStorage.
- **Datos separados del código:** Todo contenido curricular está en `/data/*.json`, editable sin tocar el HTML.
- **Paleta accesible:** Tema "Selva salvaje accesible" con contraste alto y tipografía Atkinson Hyperlegible.
- **Accesibilidad móvil:** Botones ≥44px, navegación por teclado, anillo de foco visible.
- **Navegación sin onclick inline:** Los botones del nav usan `data-view` + `addEventListener`; `jsArg()` con `&quot;` para parámetros seguros en handlers específicos.
- **Service worker network-first:** El HTML siempre se busca en la red; los assets usan cache-first. Evita versiones antiguas en caché.
- **Renderizador markdown propio:** `renderAnswerMarkdown()` convierte texto markdown a HTML sin dependencias externas. Usado por el modal de contestaciones y el panel de guías.

---

## 6. Bugs corregidos (historial acumulado)

| Bug | Causa | Solución |
|---|---|---|
| Botones del nav no respondían | `jsArg()` producía `"value"` con comillas dobles dentro de atributos HTML también con comillas dobles | Escapar con `&quot;` + migrar nav a `data-view` + `addEventListener` |
| Service worker servía HTML viejo | Estrategia cache-first interceptaba todas las recargas | Network-first para HTML, cache-first solo para assets |
| TypeError `chrome-extension://` en SW | El SW intentaba cachear URLs de extensiones de Chrome | Filtrar con `if (!url.protocol.startsWith('http')) return;` |
| "Instalar" desaparecía en iOS/escritorio | El botón solo se mostraba con `beforeinstallprompt`, que iOS no dispara | Botón siempre visible; toast instructivo si el prompt nativo no está disponible |
| Guías mostraban markdown sin renderizar | `formatMarkdownish()` no manejaba headings, código ni separadores | Reemplazar por `renderAnswerMarkdown()` en el panel de guías |

---

## 7. Deuda técnica y pendientes conocidos

- [ ] Imágenes reales para fichas compactas y perfiles Top 11 (campos `imageUrl` vacíos)
- [ ] Verificación de datos de contacto y URLs de los 50 proyectos (`verificationStatus: "pendiente"`)
- [ ] Separar CSS y JS en archivos externos (actualmente embebidos en `index.html`)
- [ ] Pruebas de usabilidad formal con estudiantes universitarios
- [ ] Auditoría de accesibilidad WCAG 2.1 AA
- [ ] Supabase + Google OAuth (en agenda futura — ver sección 9)
- [ ] Panel docente (depende de Supabase, Fase 2c)

---

## 8. Hoja de ruta futura (prioridades sugeridas)

1. Pruebas de usabilidad con estudiantes universitarios
2. Verificar y completar URLs y contactos de los 50 proyectos
3. Añadir imágenes reales a fichas de proyectos (Creative Commons o permiso expreso)
4. Separar `index.html` en módulos (CSS externo + JS externo)
5. Supabase + Google OAuth — Fase 2a: Auth
6. Supabase — Fase 2b: sync de progreso en la nube
7. Integración opcional API de IA para Yocahú interactivo
8. Panel docente (Fase 2c, con Render si se necesita lógica server-side)

---

## 9. Agenda técnica futura — Autenticación y persistencia en la nube

**Decisión registrada:** 2026-05-11

Conectar la PWA a **Supabase + Google OAuth** para que los usuarios guarden sus avances en un perfil persistente vinculado a su cuenta Google.

### Arquitectura propuesta (MVP v2)

```
[PWA en GitHub Pages]
        ↓ Supabase JS SDK (cliente, sin backend propio)
[Supabase]
  ├── Auth     → Google OAuth 2.0
  ├── Database → PostgreSQL: tabla progress, tabla profiles
  └── Realtime → sync multi-dispositivo (fase posterior)
```

### Fases de implementación

**Fase 2a — Auth (Supabase + Google OAuth)**
- Añadir Supabase JS SDK al `index.html`
- Botón "Entrar con Google" en sección Progreso
- Al autenticarse: mostrar nombre, foto y email del usuario
- Sin cambios en cómo se guarda el progreso aún

**Fase 2b — Sincronización de progreso**
- Al guardar avance: escribir a tabla `progress` en Supabase si hay sesión
- Al cargar: leer de Supabase si hay sesión activa, si no usar LocalStorage
- LocalStorage sigue funcionando como caché offline

**Fase 2c — Panel docente**
- API REST en Render (Node.js o FastAPI) para lógica de grupo
- El docente ve progreso agregado de estudiantes por curso
- Render solo es necesario si se requiere lógica server-side

### Variables de entorno necesarias (Fase 2a)

```
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_ANON_KEY=eyJ...
GOOGLE_CLIENT_ID=xxxx.apps.googleusercontent.com
```

> **Nota:** La `ANON_KEY` de Supabase es pública por diseño. La seguridad se gestiona con Row Level Security (RLS): cada usuario solo puede leer y escribir su propio progreso.

---

## 10. Documentación del proyecto

Todos los archivos de documentación están en `/docs/`:

| Archivo | Contenido |
|---|---|
| `documentacion-oficial.md` | Documentación completa para el administrador (1,024 líneas, 23 secciones) |
| `cierre-compendio-estado.md` | Este documento — estado técnico al cierre de sesión |
| `cierre-primer-seguimiento.md` | Instrucciones para retomar el proyecto |
| `cierre-prompt-activacion.md` | Prompt de activación para nueva sesión con IA |
| `app-readme.md` | README técnico original |
| `user-guide.md` | Guía de usuario (versión archivo) |

---

*Documento actualizado al cierre de sesión — Yocahú Agroecología PR v0.2.3 — 2026-05-12*
