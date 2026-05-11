# README general · Yocahú Agroecología PR

**Yocahú Agroecología PR: Viaje por el Archipiélago Vivo** es una PWA educativa móvil para estudiar agroecología universitaria desde Puerto Rico, Vieques y Culebra.

## Arquitectura

- `index.html`: aplicación principal HTML/CSS/JS vanilla.
- `manifest.json`: metadatos de instalación PWA.
- `sw.js`: service worker para modo offline.
- `data/*.json`: contenido editable.
- `docs/*.md`: guías y documentación.
- `assets/icons/*`: íconos de la PWA.

## Datos principales

- `data/levels.json`
- `data/activities.json`
- `data/projects.json`
- `data/project_fichas_compactas.json`
- `data/prompts.json`
- `data/badges.json`
- `data/rubric.json`
- `data/guides.json`

## Principios del MVP

No requiere backend, login, base de datos remota ni API GPT. El progreso vive en LocalStorage y puede exportarse o importarse como JSON.

## Mantenimiento

Para editar contenido curricular, modifica los archivos JSON en `/data`. Para modificar experiencia visual o lógica, edita `index.html`. Si agregas archivos que deban funcionar offline, inclúyelos también en `sw.js`.
