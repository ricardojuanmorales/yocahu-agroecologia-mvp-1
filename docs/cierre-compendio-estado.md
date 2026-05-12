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

- Navegación por secciones: Inicio, Mapa, Proyectos, Top 11, Yocahú Prompts, Progreso, Capstone
- Fichas compactas de proyectos en modal
- Perfiles aumentados para Top 11
- **Perfil de usuario editable** (nombre, región, objetivo de aprendizaje)
- **Exportación e importación de progreso JSON** (sección propia en Progreso)
- **Guías de uso** accesibles desde la sección Progreso
- Botón "Instalar app" siempre visible en hero (con fallback toast para iOS/desktop)
- Modo offline con service worker (estrategia network-first para HTML, cache-first para assets)
- Sección motivacional en Inicio con principios pedagógicos como chips

---

## 5. Decisiones de diseño relevantes

- **Sin backend por diseño:** El MVP no requiere servidor, login, ni API GPT. El progreso vive en LocalStorage.
- **Datos separados del código:** Todo contenido curricular está en `/data/*.json`, editable sin tocar el HTML.
- **Paleta accesible:** Tema "Selva salvaje accesible" con contraste alto y tipografía legible (Atkinson Hyperlegible / Montserrat).
- **Accesibilidad móvil:** Botones ≥44px, sin dependencia de color para mostrar progreso, navegación por teclado.
- **Portabilidad:** El proyecto es un directorio estático autocontenido que funciona desde `localhost` o cualquier hosting estático.
- **Navegación sin onclick inline:** Los botones del nav usan `data-view` + `addEventListener` en lugar de atributos `onclick`, eliminando dependencia de evaluación de HTML entities en event handlers.
- **Service worker network-first:** El HTML siempre se busca en la red primero; los assets estáticos (JSON, imágenes) usan cache-first. Esto evita que versiones antiguas queden atrapadas en caché.

---

## 6. Bugs corregidos en esta sesión

| Bug | Causa | Solución |
|---|---|---|
| Botones del nav no respondían | `jsArg()` producía `"value"` con comillas dobles dentro de atributos HTML también delimitados con comillas dobles | Escapar con `&quot;` en `jsArg` + migrar nav a `data-view` + `addEventListener` |
| Service worker servía HTML viejo | Estrategia cache-first interceptaba todas las recargas | Cambiar a network-first para HTML, cache-first solo para assets |
| TypeError `chrome-extension://` en SW | El SW intentaba cachear URLs de extensiones de Chrome | Filtrar cualquier URL con protocolo distinto a `http/https` |
| "Instalar" desaparecía | El botón solo se mostraba cuando el browser disparaba `beforeinstallprompt` | Botón siempre visible; toast instructivo si el prompt nativo no está disponible |

---

## 7. Deuda técnica y pendientes conocidos

- [ ] Verificación de datos de contacto y URLs de los 50 proyectos (`verificationStatus: "pendiente"`)
- [ ] Imágenes reales para fichas compactas y perfiles Top 11 (actualmente con campos `imageUrl` vacíos)
- [ ] Separar CSS y JS en archivos externos (actualmente embebidos en `index.html`)
- [ ] Pruebas de accesibilidad formal (WCAG 2.1 AA)
- [ ] Supabase + Google OAuth (en agenda futura — ver sección 9)
- [ ] Panel docente (depende de Supabase, Fase 3)

---

## 8. Hoja de ruta futura (prioridades sugeridas)

1. Pruebas de usabilidad con estudiantes universitarios
2. Verificar y completar URLs y contactos de los 50 proyectos
3. Añadir imágenes reales a fichas de proyectos
4. Separar `index.html` en módulos (HTML + CSS externo + JS externo)
5. Supabase + Google OAuth — Fase 1: Auth (ver sección 9)
6. Supabase — Fase 2: sync de progreso
7. Integración opcional GPT API para Yocahú interactivo
8. Panel docente (Fase 3, con Render si se necesita)

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

**Fase 1 — Auth (Supabase + Google OAuth)**
- Añadir Supabase JS SDK al `index.html`
- Botón "Entrar con Google" en sección Progreso
- Al autenticarse: mostrar nombre, foto y email del usuario
- Sin cambios en cómo se guarda el progreso aún

**Fase 2 — Sincronización de progreso**
- Al guardar avance: escribir a tabla `progress` en Supabase si hay sesión
- Al cargar: leer de Supabase si hay sesión activa, si no usar LocalStorage
- LocalStorage sigue funcionando como caché offline (sin cambios para usuarios no autenticados)

**Fase 3 — Panel docente (aquí entra Render si se necesita)**
- API REST en Render (Node.js o FastAPI) para lógica de grupo
- El docente ve progreso agregado de estudiantes por curso
- Render solo es necesario si se requiere lógica server-side que no pueda ir en el cliente

### Compatibilidad con el stack actual

| Aspecto | Estado |
|---|---|
| HTTPS requerido para OAuth | ✅ GitHub Pages sirve HTTPS |
| LocalStorage como fallback offline | ✅ Se mantiene intacto |
| Esquema de progreso (`progressSchema`) | ✅ Se mapea directamente a tabla PostgreSQL |
| Sin backend propio en Fase 1 y 2 | ✅ Supabase SDK corre directo en el navegador |
| Render | ⏳ Evaluar solo en Fase 3 (panel docente) |

### Variables de entorno necesarias (Fase 1)

```
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_ANON_KEY=eyJ...
GOOGLE_CLIENT_ID=xxxx.apps.googleusercontent.com  ← configurar en Supabase Auth
```

> **Nota:** La `ANON_KEY` de Supabase es pública por diseño (se usa en el cliente). La seguridad se gestiona con Row Level Security (RLS) en Supabase: cada usuario solo puede leer y escribir su propio progreso.

---

*Documento actualizado al cierre de sesión — Yocahú Agroecología PR v0.2.3 — 2026-05-12*
