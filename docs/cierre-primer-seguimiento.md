# Primer de Seguimiento
## Yocahú Agroecología PR — Próximos pasos para continuar el proyecto
**Fecha:** 2026-05-11 · Versión actual: 0.2.2

---

## Para quién es este documento

Este primer orienta a cualquier persona —el equipo original, un colaborador nuevo, o una IA asistente— que retome el proyecto después de esta sesión. Resume el estado actual, lo que queda por hacer, y cómo avanzar con claridad.

---

## Estado en el que se entrega el proyecto

El proyecto es una **PWA educativa funcional** con:
- 13 niveles curriculares de agroecología universitaria
- 50 proyectos insignia reales de Puerto Rico
- 25 actividades interactivas
- 13 badges y 13 prompts de Yocahú
- Modo offline, instalable en móvil
- Repositorio público en GitHub: https://github.com/ricardojuanmorales/yocahu-agroecologia-mvp-1

El código es estático (HTML/CSS/JS vanilla). No hay backend. El contenido editable vive en `/data/*.json`.

---

## Próximos pasos recomendados (en orden de prioridad)

### Paso 1 — Publicar en la web (urgente para pruebas)

El proyecto ya está en GitHub. El paso inmediato es activar **GitHub Pages**:

1. Ir a `https://github.com/ricardojuanmorales/yocahu-agroecologia-mvp-1/settings/pages`
2. En "Branch", seleccionar `main` y carpeta `/ (root)`
3. Guardar — la URL quedará en `https://ricardojuanmorales.github.io/yocahu-agroecologia-mvp-1/`

Alternativa: publicar en Netlify o Vercel arrastrando la carpeta del proyecto.

---

### Paso 2 — Completar imágenes de proyectos

En `data/project_fichas_compactas.json` y `data/top_project_profiles.json` hay campos `imageUrl` e `imageAlt` vacíos. Para añadir imágenes:

1. Conseguir fotos con permiso de uso (Creative Commons o cortesía de cada organización)
2. Guardar en `assets/images/proyectos/`
3. Actualizar el campo `imageUrl` de cada proyecto con la ruta relativa

---

### Paso 3 — Verificar datos de contacto de los 50 proyectos

Todos los proyectos tienen `"verificationStatus": "pendiente"` en `futureFields`. Completar:
- `website` — URL oficial
- `mapUrl` — enlace a mapa
- `contact` — correo o teléfono público

Actualizar `verificationStatus` a `"verificado"` cuando se confirme.

---

### Paso 4 — Separar el monolito

`index.html` contiene HTML, CSS y JS en un solo archivo (~1200+ líneas). Para facilitar el mantenimiento:

1. Extraer estilos a `assets/styles.css`
2. Extraer lógica a `assets/app.js`
3. Mantener `index.html` como contenedor limpio
4. Actualizar `sw.js` para incluir los nuevos archivos en la caché

---

### Paso 5 — Pruebas con estudiantes

Antes de iterar más en funcionalidad, probar con al menos 3–5 estudiantes universitarios:
- ¿Entienden la metáfora del archipiélago?
- ¿Las actividades son claras sin instrucción adicional?
- ¿El sistema de puntos y badges motiva?
- ¿Usan los prompts de Yocahú?

---

### Paso 6 — Supabase + Google OAuth (agenda futura confirmada)

Conectar la PWA a Supabase para persistencia de progreso en la nube con autenticación Google. Ver detalles completos en `docs/cierre-compendio-estado.md` sección 8.

Resumen de fases:
- **Fase 1:** Supabase Auth + Google OAuth → login con cuenta Google
- **Fase 2:** Sync de progreso LocalStorage → PostgreSQL (Supabase)
- **Fase 3:** Panel docente con API en Render (solo si se necesita lógica server-side)

No requiere cambiar el hosting (GitHub Pages se mantiene). El SDK de Supabase corre directo en el navegador. LocalStorage sigue funcionando como fallback offline.

---

### Paso 7 — Panel docente básico

Un módulo simple que permita al docente:
- Ver el progreso de varios estudiantes (desde Supabase en Fase 3)
- Visualizar badges obtenidos en grupo
- Agregar notas o retroalimentación

---

## Convenciones del proyecto para nuevos colaboradores

| Qué | Dónde |
|---|---|
| Contenido curricular (niveles, actividades, prompts) | `/data/*.json` |
| Lógica y UI | `index.html` (por ahora) |
| Documentación | `/docs/*.md` |
| Iconos y assets | `/assets/icons/` |
| Rúbrica capstone | `data/rubric.json` |
| Guías | `data/guides.json` |

**Para editar contenido sin tocar código:** Solo modificar los archivos en `/data/`.
**Para añadir un nivel nuevo:** Añadir entrada en `data/levels.json` con su `id`, `title`, `concepts`, `activityIds`, `promptIds`, `badgeId` y `unlockRule`.

---

## Puntos de contacto y recursos

- **Repositorio:** https://github.com/ricardojuanmorales/yocahu-agroecologia-mvp-1
- **Documentación de la app:** `docs/app-readme.md`
- **Guía de usuario:** `docs/user-guide.md`
- **Estado del proyecto:** `docs/cierre-compendio-estado.md`
- **Prompt de activación para IA:** `docs/cierre-prompt-activacion.md`

---

*Primer de seguimiento — Yocahú Agroecología PR v0.2.2 — 2026-05-11*
