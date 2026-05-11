# Yocahú Agroecología PR: PWA MVP

Esta carpeta contiene la versión PWA modular del MVP.

## Archivos principales

- `index.html`: aplicación móvil en HTML/CSS/JS vanilla.
- `manifest.json`: manifiesto PWA para instalación móvil.
- `sw.js`: service worker para caché offline.
- `assets/icons/`: íconos SVG y PNG.
- `data/*.json`: contenido editable separado por tipo.

## Probar localmente

Para activar instalación y modo offline, sirve la carpeta por HTTP:

```bash
cd yocahu-agroecologia-pwa
python3 -m http.server 8000
```

Luego abre:

```text
http://localhost:8000
```

Abrir `index.html` directamente también carga la app con datos internos de respaldo, pero los navegadores no permiten service workers desde `file://`.


## Actualización v0.2.2

- Nueva sección **Top 11** con perfiles aumentados del Lote A+.
- Las tarjetas de los 50 proyectos abren fichas compactas en modal.
- Las tarjetas con ⭐ abren perfil aumentado.
- `data/project_fichas_compactas.json` y `data/top_project_profiles.json` incluyen campos opcionales para imagen y fuente: `imageUrl`, `imageAlt`, `sourceUrl`, `sourceLabel`.
