# Primer de Seguimiento
## Yocahú Agroecología PR — Próximos pasos para continuar el proyecto
**Fecha:** 2026-05-12 · Versión actual: 0.2.3

---

## Para quién es este documento

Este primer orienta a cualquier persona —el equipo original, un colaborador nuevo, o una IA asistente— que retome el proyecto después de esta sesión. Resume el estado actual, lo que queda por hacer, y cómo avanzar con claridad.

---

## Estado en el que se entrega el proyecto

El proyecto es una **PWA educativa funcional**, publicada en GitHub Pages:  
**https://ricardojuanmorales.github.io/yocahu-agroecologia-mvp-1/**

Incluye:
- 13 niveles curriculares de agroecología universitaria
- 50 proyectos insignia reales de Puerto Rico con fichas compactas
- Top 11 con perfiles narrativos extendidos (⭐)
- 25 actividades interactivas (15 tipos distintos)
- 13 badges y 13 prompts de Yocahú copiables
- **13 contestaciones modelo** accesibles desde botón en cada tarjeta de prompt
- Perfil de usuario editable (nombre, región, objetivo)
- Exportación e importación de progreso en JSON
- Guías de uso con markdown completo renderizado
- Sección motivacional en Inicio con principios como chips
- Modo offline con service worker v0-2-8 (network-first para HTML)
- Botón "Instalar app" siempre visible con fallback toast para iOS
- **README ilustrado** en el repositorio (con emojis, metodología, niveles, estado y planes)
- **Documentación oficial completa** en `docs/documentacion-oficial.md` (1,024 líneas, 23 secciones)

El código es estático (HTML/CSS/JS vanilla). No hay backend. El contenido editable vive en `/data/*.json`.

**Autor del proyecto:** Ricardo Juan Morales De Jesús, Ph.D.  
Facultad de Estudios Generales, Universidad de Puerto Rico en Río Piedras

---

## Próximos pasos recomendados (en orden de prioridad)

### Paso 1 — Pruebas de usabilidad con estudiantes

La app ya está publicada y funcional. El siguiente paso prioritario es probar con al menos 3–5 estudiantes universitarios:

- ¿Entienden la metáfora del archipiélago y el sistema de niveles?
- ¿Las actividades son claras sin instrucción adicional?
- ¿El sistema de puntos y badges motiva el avance?
- ¿Usan los prompts de Yocahú en conversaciones con IA?
- ¿Comparan la contestación modelo con la respuesta que reciben?
- ¿El perfil y exportar/importar son intuitivos?

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

`index.html` contiene HTML, CSS y JS en un solo archivo (~1,550 líneas). Para facilitar el mantenimiento:

1. Extraer estilos a `assets/styles.css`
2. Extraer lógica a `assets/app.js`
3. Mantener `index.html` como contenedor limpio
4. Actualizar `sw.js` para incluir los nuevos archivos en la caché

---

### Paso 5 — Supabase + Google OAuth (agenda futura confirmada)

Conectar la PWA a Supabase para persistencia de progreso en la nube con autenticación Google. Ver detalles completos en `docs/cierre-compendio-estado.md` sección 9.

Resumen de fases:
- **Fase 2a:** Supabase Auth + Google OAuth → login con cuenta Google
- **Fase 2b:** Sync de progreso LocalStorage → PostgreSQL (Supabase)
- **Fase 2c:** Panel docente con API en Render (solo si se necesita lógica server-side)

No requiere cambiar el hosting (GitHub Pages se mantiene). El SDK de Supabase corre directo en el navegador. LocalStorage sigue funcionando como fallback offline.

---

### Paso 6 — Panel docente básico

Un módulo simple que permita al docente:
- Ver el progreso de varios estudiantes (desde Supabase en Fase 2c)
- Visualizar badges obtenidos en grupo
- Agregar notas o retroalimentación

---

## Convenciones del proyecto para nuevos colaboradores

| Qué | Dónde |
|---|---|
| Contenido curricular (niveles, actividades, prompts) | `/data/*.json` |
| Contestaciones modelo de Yocahú | `data/answers.json` |
| Lógica y UI | `index.html` |
| Documentación oficial completa | `docs/documentacion-oficial.md` |
| Documentación de cierre | `docs/cierre-*.md` |
| Íconos y assets | `assets/icons/` |
| Rúbrica capstone | `data/rubric.json` |
| Guías internas de usuario | `data/guides.json` |

**Para editar contenido sin tocar código:** Solo modificar los archivos en `/data/`.

**Para añadir un nivel nuevo:** Añadir entrada en `data/levels.json` con su `id`, `title`, `question`, `concepts`, `activityIds`, `promptIds`, `badgeId` y `unlockRule`. Añadir el prompt en `data/prompts.json`, la contestación modelo en `data/answers.json`, y el badge en `data/badges.json`. Bumpar la versión del caché en `sw.js`.

**Para probar localmente:**
```bash
python3 -m http.server 8000
# Abrir: http://localhost:8000
```

**Para publicar cambios:**
```bash
git add .
git commit -m "descripción del cambio"
git push origin main
```
GitHub Pages despliega automáticamente en ~1 minuto.

---

## Puntos de contacto y recursos

- **App en vivo:** https://ricardojuanmorales.github.io/yocahu-agroecologia-mvp-1/
- **Repositorio:** https://github.com/ricardojuanmorales/yocahu-agroecologia-mvp-1
- **Documentación oficial:** `docs/documentacion-oficial.md`
- **Estado del proyecto:** `docs/cierre-compendio-estado.md`
- **Prompt de activación para IA:** `docs/cierre-prompt-activacion.md`

---

*Primer de seguimiento — Yocahú Agroecología PR v0.2.3 — 2026-05-12*
