# Guía de usuario · Yocahú Agroecología PR

## Cómo usar la aplicación

1. Entra a **Inicio** para ver tu nivel actual, puntos y badges.
2. Abre **Mapa** y comienza por el primer nivel disponible.
3. Lee la pregunta guía, revisa conceptos y completa las actividades interactivas.
4. Visita **Proyectos** para explorar los 50 proyectos insignia. Toca una tarjeta para abrir su ficha compacta.
5. Usa **Yocahú Prompts** para copiar prompts recomendados y trabajarlos en una conversación aparte.
6. En **Progreso**, exporta tu avance como JSON o importa un archivo válido.
7. En **Capstone**, desarrolla “Mi Agroecosistema Boricua” y guarda tus notas localmente.

## Guardado y privacidad

El progreso se guarda en el navegador con LocalStorage. No hay login, servidor ni base de datos remota. Si cambias de equipo o navegador, exporta tu avance JSON primero.

## Uso offline

Para instalar y usar offline, sirve la carpeta por `localhost` o HTTPS. Los navegadores no activan service workers desde `file://`.

```bash
python3 -m http.server 8000
```

Luego abre `http://localhost:8000`.

## Consejos de estudio

Trabaja poco a poco. Cada nivel funciona como una caminata corta por el archipiélago: observa, compara, diseña y reflexiona.
