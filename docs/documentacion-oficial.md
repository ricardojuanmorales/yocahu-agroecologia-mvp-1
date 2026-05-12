# Documentación Oficial del Proyecto
# Yocahú Agroecología PR: Viaje por el Archipiélago Vivo

---

**Autor:** Ricardo Juan Morales De Jesús, Ph.D.  
**Institución:** Facultad de Estudios Generales, Universidad de Puerto Rico en Río Piedras  
**Versión del proyecto:** 0.2.3  
**Fecha de este documento:** 2026-05-12  
**URL pública:** https://ricardojuanmorales.github.io/yocahu-agroecologia-mvp-1/  
**Repositorio:** https://github.com/ricardojuanmorales/yocahu-agroecologia-mvp-1

---

## Tabla de contenido

1. [Resumen ejecutivo](#1-resumen-ejecutivo)
2. [Contexto y justificación](#2-contexto-y-justificación)
3. [Visión pedagógica y principios de diseño](#3-visión-pedagógica-y-principios-de-diseño)
4. [El personaje Yocahú](#4-el-personaje-yocahú)
5. [Currículo: los 13 niveles](#5-currículo-los-13-niveles)
6. [Los 25 tipos de actividades](#6-las-25-actividades-interactivas)
7. [Los 50 proyectos insignia](#7-los-50-proyectos-insignia)
8. [Los 8 biomas del archipiélago](#8-los-8-biomas-del-archipiélago)
9. [El Top 11: perfiles aumentados](#9-el-top-11-perfiles-aumentados)
10. [Los 13 prompts de Yocahú y contestaciones modelo](#10-los-13-prompts-de-yocahú-y-contestaciones-modelo)
11. [Los 13 badges](#11-los-13-badges)
12. [Proyecto Capstone y rúbrica](#12-proyecto-capstone-y-rúbrica)
13. [Arquitectura técnica](#13-arquitectura-técnica)
14. [Sistema de diseño visual](#14-sistema-de-diseño-visual)
15. [Estructura de archivos](#15-estructura-de-archivos)
16. [Esquema de datos: archivos JSON](#16-esquema-de-datos-archivos-json)
17. [Guía de administración del contenido](#17-guía-de-administración-del-contenido)
18. [README para usuarios (versión ilustrada)](#18-readme-para-usuarios-versión-ilustrada)
19. [Estado actual y deuda técnica](#19-estado-actual-y-deuda-técnica)
20. [Hoja de ruta futura](#20-hoja-de-ruta-futura)
21. [Registro de decisiones técnicas y bugs corregidos](#21-registro-de-decisiones-técnicas-y-bugs-corregidos)
22. [Historial de versiones](#22-historial-de-versiones)
23. [Créditos y referencias](#23-créditos-y-referencias)

---

## 1. Resumen ejecutivo

**Yocahú Agroecología PR: Viaje por el Archipiélago Vivo** es una aplicación web progresiva (PWA) de código abierto diseñada como herramienta educativa universitaria para el estudio de la agroecología en Puerto Rico. La aplicación está concebida para estudiantes de nivel subgraduado y graduado, especialmente en cursos de Estudios Generales, ciencias ambientales, agronomía, educación y ciencias sociales.

La app organiza el aprendizaje en **13 niveles curriculares secuenciales**, desde la introducción a la agroecología hasta un proyecto capstone integrador. Cada nivel está anclado en un **proyecto insignia real** — una finca, organización o colectivo agroecológico existente en Puerto Rico, Vieques o Culebra — y acompañado de actividades interactivas, prompts copiables para IA y contestaciones modelo.

### Características principales

- 🌿 **13 niveles curriculares** de agroecología universitaria
- 🌱 **25 actividades interactivas** (quizzes, mapas, escenarios, diseños, simulaciones)
- 🏡 **50 proyectos insignia** reales del archipiélago puertorriqueño
- ⭐ **Top 11** con perfiles narrativos extendidos
- 🤖 **13 prompts copiables** para conversación con IA, con contestaciones modelo
- 🏅 **13 badges** (uno por nivel completado)
- 📱 **PWA instalable** en celular, funciona sin internet
- 💾 **Progreso local** con exportación e importación JSON
- 🎓 **Proyecto Capstone** con rúbrica de evaluación integrada
- ♿ **Diseño accesible** (contraste alto, botones ≥44px, navegación por teclado)

### Principio fundamental

> La app no requiere backend, login, base de datos remota ni API de IA externa. Todo el contenido curricular vive en archivos JSON editables. El progreso se guarda en el navegador del estudiante y puede exportarse como archivo portable.

---

## 2. Contexto y justificación

### Puerto Rico como laboratorio agroecológico

Puerto Rico enfrenta una crisis alimentaria estructural: importa más del 85% de los alimentos que consume. Al mismo tiempo, el archipiélago cuenta con una tradición campesina profunda, diversidad biológica excepcional, y un movimiento agroecológico activo que ha crecido con fuerza desde el huracán María (2017).

Esta contradicción —vulnerabilidad alimentaria extrema y potencial agroecológico enorme— convierte a Puerto Rico en un laboratorio vivo extraordinario para la educación agroecológica universitaria. Los estudiantes no necesitan imaginarse casos hipotéticos: pueden visitar fincas reales, conversar con agricultores reales y estudiar organizaciones que ya están construyendo alternativas.

### El vacío pedagógico

La educación universitaria en agroecología carece con frecuencia de:
- Materiales didácticos situados en el contexto específico de Puerto Rico
- Herramientas accesibles desde dispositivos móviles (muchos estudiantes no tienen laptop propia)
- Puentes entre el conocimiento académico y los proyectos comunitarios existentes
- Recursos que funcionen sin conexión constante a internet

Yocahú Agroecología PR fue diseñado para responder directamente a estas carencias.

### La oportunidad de la IA como mentor

El momento actual presenta una oportunidad pedagógica nueva: los modelos de lenguaje de IA pueden actuar como tutores disponibles a cualquier hora, capaces de responder preguntas complejas con sensibilidad cultural y disciplinar — si se les dan los prompts correctos. La app entrega esos prompts al estudiante, y la contestación modelo le permite evaluar críticamente la respuesta que recibe.

---

## 3. Visión pedagógica y principios de diseño

### Filosofía educativa

La app parte de siete principios pedagógicos que orientan cada decisión de diseño:

| # | Principio | Descripción |
|---|---|---|
| 1 | **Aprender haciendo** | Las actividades exigen que el estudiante analice, diseñe, decida o reflexione — no solo recuerde |
| 2 | **Puerto Rico como laboratorio vivo** | Cada nivel se ancla en proyectos, territorios y culturas reales del archipiélago |
| 3 | **Proyectos insignia como corazón narrativo** | Las fincas y organizaciones no son ilustraciones: son los casos de estudio centrales |
| 4 | **Complejidad gradual** | El currículo va de lo más concreto y local (el suelo, la semilla) a lo más abstracto y político (gobernanza, justicia alimentaria) |
| 5 | **Yocahú como mentor** | El personaje guía ofrece prompts para conversación con IA, no respuestas cerradas |
| 6 | **Diseño accesible** | La app debe funcionar en teléfonos de gama media, con bajo ancho de banda o sin conexión |
| 7 | **Datos portables** | El progreso del estudiante le pertenece y puede llevarlo consigo como archivo JSON |

### La metáfora del archipiélago

El currículo está organizado como un *viaje por el archipiélago*: el estudiante recorre 13 "islas" de conocimiento, cada una con su propio paisaje conceptual, sus propios proyectos y sus propias actividades. La metáfora conecta con la identidad puertorriqueña y con la idea de que el aprendizaje es un recorrido — no una acumulación lineal de datos.

Los 8 biomas que organizan los proyectos tienen nombres que refuerzan esta metáfora: *Raíces y Semillas*, *Montaña Viva*, *Islas Resilientes*, *Bosque, Carso y Biodiversidad*, *Huertos, Escuelas y Universidad*, *Economía Solidaria y Mercados*, *Tierra, Gobernanza y Futuro*, *Archipiélago Vivo*.

---

## 4. El personaje Yocahú

**Yocahú** es el mentor de la aplicación. Toma su nombre del dios de la yuca en la cosmovisión taína — símbolo de fertilidad, sustento y vida. En la app, Yocahú no es un chatbot integrado: es una *voz* que acompaña al estudiante mediante:

1. **Prompts copiables** — Instrucciones finamente diseñadas para que el estudiante los pegue en una conversación separada con Claude, ChatGPT u otro modelo de IA.
2. **Contestaciones modelo** — La respuesta de referencia que Yocahú ofrecería al prompt, visible en la sección Yocahú Prompts. Sirve para evaluar y comparar la respuesta recibida.

### Tono de Yocahú

El tono de Yocahú es:
- **Cálido y socrático**: pregunta más que afirma
- **Situado en Puerto Rico**: usa ejemplos locales, nombres de plantas, culturas y lugares reales
- **Académico pero accesible**: el vocabulario es universitario sin ser hermético
- **Respetuoso de la complejidad**: no simplifica lo que es complejo, pero desglosa lo que puede desglosarse

---

## 5. Currículo: los 13 niveles

El currículo progresa desde lo conceptual-introductorio hasta lo sistémico-propositivo. Los primeros niveles trabajan los componentes del agroecosistema (suelo, agua, semillas, diseño); los niveles medios integran relaciones ecológicas y prácticas complejas; los niveles finales exploran dimensiones económicas, políticas y éticas; el Capstone integra todo en una propuesta propia.

### Tabla curricular completa

| ID | Título | Pregunta guía | Badge | Pts. |
|---|---|---|---|---|
| 0 | Entrada al Archipiélago Vivo | ¿Qué es agroecología y por qué importa en Puerto Rico? | 🌱 Semilla Despierta | 100 |
| 1 | Pensamiento Sistémico | ¿Cómo se conectan suelo, agua, plantas, cultura, economía y comunidad? | 🕸️ Mirada Sistémica | 120 |
| 2 | Suelo Vivo | ¿Qué hace que un suelo sea fértil, resiliente y saludable? | 🪱 Guardiana del Suelo | 140 |
| 3 | Semillas, Biodiversidad y Cultura | ¿Qué se conserva cuando se conserva una semilla? | 🌾 Custodia de Semillas | 140 |
| 4 | Agua, Clima y Resiliencia | ¿Cómo se diseña para sequías, lluvias intensas, calor y huracanes? | 💧 Explorador de Microclimas | 160 |
| 5 | Diseño de Finca Agroecológica | ¿Cómo se diseña un agroecosistema desde cero? | 🗺️ Cartógrafo Agroecológico | 180 |
| 6 | Manejo Ecológico de Plagas y Enfermedades | ¿Cómo se previenen desequilibrios sin depender de recetas químicas? | 🐞 Observadora del Equilibrio | 160 |
| 7 | Agroforestería y Bosques Comestibles | ¿Cómo se cultiva con árboles, sombra y estratos? | 🌳 Arquitecta del Bosque | 180 |
| 8 | Animales, Polinizadores y Ciclos | ¿Qué roles cumplen abejas, gallinas, ganado, lombrices y fauna local? | 🐝 Cuidador de Polinizadores | 160 |
| 9 | Cosecha, Procesamiento y Valor Añadido | ¿Cómo se transforma una cosecha en sustento económico y cultural? | 🍯 Alquimista de Cosechas | 160 |
| 10 | Mercados, Cooperación y Economía Solidaria | ¿Cómo circulan alimentos, dinero, confianza y poder? | 🧺 Mercadera Solidaria | 180 |
| 11 | Tierra, Gobernanza y Justicia Alimentaria | ¿Quién decide sobre tierra, alimentos y futuro agrícola? | 🤲 Custodia de Tierra | 200 |
| 12 | Proyecto Capstone: Mi Agroecosistema Boricua | ¿Cómo integro todo en una propuesta agroecológica realista? | 🌿 Maestría Yocahú | 500 |

**Total de puntos posibles al completar todos los niveles:** 2,380 puntos

### Reglas de desbloqueo

Cada nivel (excepto el 0, que está siempre disponible) requiere haber completado el nivel anterior (`completeLevel: N-1`). El Capstone (Nivel 12) requiere completar el Nivel 11. Esta progresión garantiza que el estudiante construya sobre lo aprendido antes de avanzar.

### Conceptos clave por nivel

| Nivel | Conceptos principales |
|---|---|
| 0 | Agroecología, sistema agroalimentario, Puerto Rico, soberanía alimentaria, aprendizaje lúdico |
| 1 | Sistemas, interdependencia, retroalimentación, territorio, ciclos |
| 2 | Suelo, materia orgánica, erosión, composta, cobertura viva |
| 3 | Semillas, biodiversidad, memoria campesina, cultura alimentaria, soberanía |
| 4 | Agua, clima tropical, huracanes, sequía, resiliencia |
| 5 | Diseño agroecológico, zonas, funciones, policultivo, mapa de finca |
| 6 | Plagas, enfermedades, biodiversidad funcional, prevención, observación |
| 7 | Agroforestería, bosque comestible, estratos, sombra, frutales |
| 8 | Polinizadores, apicultura, animales, nutrientes, ética del manejo |
| 9 | Cosecha, poscosecha, valor añadido, fermentación, procesamiento |
| 10 | Mercados, cooperativismo, CSA, venta directa, economía solidaria |
| 11 | Tierra, fideicomiso, gobernanza, justicia alimentaria, política pública |
| 12 | Propuesta, capstone, diseño, evaluación, territorio |

---

## 6. Las 25 actividades interactivas

Las actividades cubren 13 tipos distintos de interacción pedagógica, desde la evaluación conceptual hasta la simulación de roles y el diseño de proyectos.

### Tipos de actividad implementados

| Tipo | Descripción |
|---|---|
| `quiz` | Preguntas de opción múltiple con retroalimentación inmediata |
| `reflection-map` | Mapa de reflexión personal situado en la experiencia del estudiante |
| `concept-map` | Mapa conceptual con nodos y relaciones editables |
| `scenario` | Escenario con decisiones y consecuencias |
| `branching-scenario` | Escenario ramificado con caminos alternativos |
| `field-observation` | Guía de observación de campo con registro escrito |
| `field-journal` | Diario de observación ecológica continua |
| `design` | Actividad de diseño libre (huerto, composta, canasta, producto) |
| `map` | Elaboración de mapa (agua, sombra, polinizadores) |
| `observation` | Observación dirigida con preguntas guía |
| `systems-map` | Mapa sistémico de ciclos y relaciones |
| `comparison` | Cuadro comparativo entre casos o modelos |
| `roleplay-simulation` | Simulación de asamblea o negociación |
| `matrix` | Matriz de análisis (gobernanza, actores, funciones) |
| `capstone` | Proyecto integrador con múltiples campos de desarrollo |

### Catálogo de actividades por nivel

| ID de actividad | Tipo | Nivel | Título |
|---|---|---|---|
| `quiz-intro-agroecologia` | quiz | 0 | Quiz relámpago: ¿Qué es agroecología? |
| `mapa-mi-comida` | reflection-map | 0 | Mapa de mi comida |
| `mapa-relaciones-agroecosistema` | concept-map | 1 | Mapa de relaciones del agroecosistema |
| `reto-sistema-alimentario-pr` | scenario | 1 | Sistema alimentario de Puerto Rico |
| `diagnostico-suelo-casero` | field-observation | 2 | Diagnóstico de suelo cercano |
| `reto-composta-territorial` | design | 2 | Diseña una composta contextual |
| `inventario-semillas-culturales` | reflection | 3 | Inventario de semillas y alimentos con memoria |
| `reto-biblioteca-semillas` | design | 3 | Mini biblioteca de semillas |
| `mapa-flujos-agua` | map | 4 | Mapa de agua y sombra |
| `escenario-huracan-huerto` | branching-scenario | 4 | Escenario: huerto después de huracán |
| `disena-tu-huerto` | design | 5 | Diseña tu huerto base |
| `reto-finca-region-pr` | design | 5 | Finca por región |
| `diario-observacion-plagas` | field-journal | 6 | Diario de observación ecológica |
| `reto-equilibrio-ecologico` | scenario | 6 | Restaurar equilibrio |
| `diseno-estratos-agroforestales` | design | 7 | Diseño por estratos |
| `reto-bosque-comestible` | project-card | 7 | Bosque comestible inspirado en proyectos reales |
| `mapa-polinizadores` | observation | 8 | Mapa de polinizadores |
| `reto-ciclo-animal-suelo` | systems-map | 8 | Ciclo animal-suelo-planta |
| `producto-valor-anadido` | design | 9 | Producto de valor añadido |
| `reto-etiqueta-alimento-local` | creative | 9 | Etiqueta con historia |
| `disena-canasta-solidaria` | design | 10 | Canasta solidaria |
| `comparar-mercados-pr` | comparison | 10 | Comparar mercados agroecológicos |
| `simulacion-asamblea-tierra` | roleplay-simulation | 11 | Asamblea por la tierra |
| `reto-matriz-gobernanza` | matrix | 11 | Matriz de gobernanza |
| `capstone-mi-agroecosistema-boricua` | capstone | 12 | Mi Agroecosistema Boricua |

---

## 7. Los 50 proyectos insignia

El catálogo de 50 proyectos es la columna vertebral narrativa de la app. Son fincas, organizaciones, colectivos, programas e iniciativas agroecológicas **reales y activas** en Puerto Rico, Vieques y Culebra, seleccionados por su relevancia pedagógica, diversidad geográfica y representación de distintos enfoques agroecológicos.

### Distribución por bioma

| Bioma | Proyectos |
|---|---|
| Economía Solidaria y Mercados | 15 |
| Bosque, Carso y Biodiversidad | 7 |
| Huertos, Escuelas y Universidad | 7 |
| Islas Resilientes | 6 |
| Archipiélago Vivo | 4 |
| Montaña Viva | 4 |
| Tierra, Gobernanza y Futuro | 4 |
| Raíces y Semillas | 3 |
| **Total** | **50** |

### Estructura de datos por proyecto

Cada proyecto en `data/projects.json` contiene:

```json
{
  "id": "slug-del-proyecto",
  "name": "Nombre del proyecto",
  "region": "Municipio o región",
  "biome": "Nombre del bioma",
  "description": "Descripción breve",
  "categories": ["agroecología", "educación", ...],
  "topRank": null
}
```

Las fichas compactas (`data/project_fichas_compactas.json`) añaden:

```json
{
  "projectId": "slug-del-proyecto",
  "code": "Código interno",
  "type": "Tipo de organización",
  "status": "Activo / Inactivo",
  "municipioRegion": "Municipio detallado",
  "systemsDescription": "Descripción sistémica extendida",
  "imageUrl": "",
  "imageAlt": "",
  "sourceUrl": "",
  "sourceLabel": "",
  "futureFields": {
    "website": "",
    "mapUrl": "",
    "contact": "",
    "verificationStatus": "pendiente"
  }
}
```

> **Nota administrativa:** Todos los proyectos tienen `verificationStatus: "pendiente"`. Los campos `imageUrl`, `website`, `mapUrl` y `contact` están vacíos y deben completarse con información verificada directamente con cada organización.

---

## 8. Los 8 biomas del archipiélago

Los biomas son categorías temático-territoriales que agrupan proyectos y orientan la exploración del catálogo.

| Bioma | Descripción |
|---|---|
| 🌱 **Raíces y Semillas** | Semillas, memoria campesina, cultura alimentaria, educación popular y soberanía alimentaria |
| ⛰️ **Montaña Viva** | Suelos, laderas, café bajo sombra, agua, agroforestería y resiliencia rural |
| 🏝️ **Islas Resilientes** | Vieques, Culebra, soberanía alimentaria insular, apicultura y respuesta comunitaria |
| 🌿 **Bosque, Carso y Biodiversidad** | Agroforestería, conservación, bosque comestible, carso y biodiversidad cultivada |
| 🎓 **Huertos, Escuelas y Universidad** | Huertos escolares, universidad, juventud, educación pública y aprendizaje práctico |
| 🧺 **Economía Solidaria y Mercados** | Mercados, cooperativas, canastas, valor añadido y circuitos cortos |
| ⚖️ **Tierra, Gobernanza y Futuro** | Acceso a tierra, fideicomisos, justicia agraria, política pública y gobernanza comunitaria |
| 🌊 **Archipiélago Vivo** | Proyectos transversales o multirregionales que conectan varios temas del sistema agroecológico |

---

## 9. El Top 11: perfiles aumentados

Los 11 proyectos más representativos del catálogo tienen **perfiles narrativos extendidos** accesibles desde la sección ⭐ Top 11. Estos perfiles incluyen narrativa histórica, descripción sistémica ampliada, tipo de organización y municipio.

| Rango | Proyecto | Municipio / Territorio | Tipo |
|---|---|---|---|
| 1 | Organización Boricuá de Agricultura Ecológica de PR | Puerto Rico (red) | Red campesina y movimiento agroecológico |
| 2 | Proyecto Agroecológico El Josco Bravo | Toa Alta | Finca familiar agroecológica y espacio educativo |
| 3 | Escuela de Agroecología del Josco Bravo | Toa Alta y secciones regionales | Programa de formación agroecológica |
| 4 | Fideicomiso para la Agroecología | Archipiélago de Puerto Rico | Fideicomiso y plataforma de acceso a tierras |
| 5 | Instituto para la Investigación y Acción en Agroecología (IALA-PR) | Cayey | Instituto de investigación, acción y formación |
| 6 | La Colmena Cimarrona | Vieques | Organización comunitaria, feminista y de economía solidaria |
| 7 | La Semillera | Vieques | Finca escuela agroecológica |
| 8 | Proyecto Siembra | Culebra | Huertos comunitarios y seguridad alimentaria insular |
| 9 | Siembra Tres Vidas | Aibonito | Finca agroecológica de hortalizas, flores y hierbas |
| 10 | Huerto Semilla | UPR Río Piedras | Huerto urbano universitario y comunitario |
| 11 | Plenitud PR | Las Marías | Finca educativa, permacultura y sostenibilidad comunitaria |

Las tarjetas del Top 11 se distinguen con el ícono ⭐ en la sección Proyectos y tienen su propia sección de navegación.

---

## 10. Los 13 prompts de Yocahú y contestaciones modelo

### El sistema de prompts

Cada nivel tiene asignado un prompt diseñado para:
1. Invocar a Yocahú como mentor con voz, tono y contexto definidos
2. Orientar la conversación hacia los conceptos y preguntas clave del nivel
3. Anclar la respuesta en el contexto de Puerto Rico, Vieques y Culebra
4. Provocar pensamiento crítico, no solo información

Los prompts son **copiables con un toque** y están pensados para usarse en Claude, ChatGPT u otro modelo de IA de propósito general.

### El sistema de contestaciones modelo

Cada prompt tiene una **contestación modelo** almacenada en `data/answers.json`. La contestación modelo es:
- La respuesta de referencia que Yocahú ofrecería al prompt
- Extensa, con estructura markdown (headings, listas, código, separadores)
- Específica al contexto puertorriqueño
- Útil para que el estudiante compare, evalúe críticamente y amplíe

El botón **Contestación Modelo** en cada tarjeta abre un modal con la respuesta formateada, scrollable, con opciones de cerrar o copiar el texto.

### Catálogo de prompts

| ID del prompt | Nivel | Enfoque principal |
|---|---|---|
| `prompt-explica-agroecologia-pr` | 0 | Qué es agroecología (suelo, agua, semillas, comunidad, cultura, soberanía) |
| `prompt-mapa-sistemico-pr` | 1 | Mapa sistémico de un agroecosistema en Puerto Rico |
| `prompt-diagnostico-suelo-vivo` | 2 | Diagnóstico de suelo vivo: biología, fertilidad, manejo |
| `prompt-semillas-cultura-pr` | 3 | Semillas, memoria campesina y biodiversidad cultivada |
| `prompt-resiliencia-climatica-finca` | 4 | Resiliencia climática ante huracanes, calor y sequías |
| `prompt-diseno-finca-pr` | 5 | Diseño de finca agroecológica por región de Puerto Rico |
| `prompt-manejo-ecologico-plagas` | 6 | Manejo ecológico de plagas sin insumos químicos |
| `prompt-agroforesteria-pr` | 7 | Sistemas agroforestales y bosques comestibles en PR |
| `prompt-polinizadores-islas` | 8 | Plan de protección de polinizadores en comunidad insular |
| `prompt-valor-anadido-pr` | 9 | Transformación de cosecha en producto de valor añadido |
| `prompt-economia-solidaria-alimentos` | 10 | Economía solidaria, cooperativas y circuitos cortos |
| `prompt-gobernanza-tierra-pr` | 11 | Gobernanza, acceso a tierra y justicia alimentaria en PR |
| `prompt-capstone-yocahu` | 12 | Diseño del proyecto capstone: Mi Agroecosistema Boricua |

---

## 11. Los 13 badges

Los badges son reconocimientos simbólicos que el estudiante obtiene al completar todas las actividades de un nivel.

| Badge ID | Nombre | Ícono | Nivel |
|---|---|---|---|
| `semilla-despierta` | Semilla Despierta | 🌱 | 0 |
| `mirada-sistemica` | Mirada Sistémica | 🕸️ | 1 |
| `guardiana-del-suelo` | Guardiana del Suelo | 🪱 | 2 |
| `custodia-de-semillas` | Custodia de Semillas | 🌾 | 3 |
| `explorador-de-microclimas` | Explorador de Microclimas | 💧 | 4 |
| `cartografo-agroecologico` | Cartógrafo Agroecológico | 🗺️ | 5 |
| `observadora-del-equilibrio` | Observadora del Equilibrio | 🐞 | 6 |
| `arquitecta-del-bosque` | Arquitecta del Bosque | 🌳 | 7 |
| `cuidador-de-polinizadores` | Cuidador de Polinizadores | 🐝 | 8 |
| `alquimista-de-cosechas` | Alquimista de Cosechas | 🍯 | 9 |
| `mercadera-solidaria` | Mercadera Solidaria | 🧺 | 10 |
| `custodia-de-tierra` | Custodia de Tierra | 🤲 | 11 |
| `maestria-yocahu` | Maestría Yocahú | 🌿 | 12 |

Los badges se muestran en la sección **Progreso** y en **Inicio** una vez obtenidos.

---

## 12. Proyecto Capstone y rúbrica

### Estructura del Capstone

El Nivel 12 es el proyecto final integrador: **Mi Agroecosistema Boricua**. El estudiante desarrolla una propuesta agroecológica propia, articulada en 10 campos:

| Campo | Descripción |
|---|---|
| `diagnostico` | Describe región, clima, suelos, actores, historia alimentaria y problema central |
| `mapa` | Explica relaciones entre suelo, agua, biodiversidad, comunidad, mercado y gobernanza |
| `suelo` | Observaciones y prácticas para materia orgánica, cobertura, erosión y vida del suelo |
| `agua` | Captación, infiltración, sombra, drenaje, sequía y lluvias intensas |
| `biodiversidad` | Cultivos, semillas, polinizadores, árboles, memoria campesina y conservación |
| `economia` | Canastas, intercambio, cooperativas, valor añadido, precio justo o mercado local |
| `comunidad` | Actores, aprendizajes, acuerdos, talleres, escuela, universidad o familias |
| `resiliencia` | Huracanes, calor, sequía, recuperación y diseño para reducir riesgos |
| `inspiracion` | Al menos tres proyectos insignia referenciados y qué se tomaría de cada uno |
| `reflexion` | Qué cambió en la mirada del estudiante, qué tensiones quedan y qué cuidaría éticamente |

Todo el texto del Capstone se guarda en LocalStorage y puede exportarse junto con el resto del progreso.

### Rúbrica de evaluación (5 criterios × 4 niveles)

La rúbrica está definida en `data/rubric.json` y visible en la sección Capstone.

| Criterio | Nivel 1 (Incipiente) | Nivel 2 (En desarrollo) | Nivel 3 (Logrado) | Nivel 4 (Sobresaliente) |
|---|---|---|---|---|
| **Pensamiento sistémico** | Lista elementos | Conecta algunos elementos | Explica interacciones | Analiza ciclos, tensiones y retroalimentaciones |
| **Contexto de Puerto Rico** | Mención general | Usa ejemplos locales | Integra región y cultura | Propone solución territorial realista |
| **Diseño agroecológico** | Ideas sueltas | Prácticas básicas | Diseño coherente | Diseño regenerativo y justificable |
| **Justicia y comunidad** | Poco presente | Mención básica | Integra actores | Propone gobernanza participativa |
| **Uso de proyectos insignia** | Nombra proyectos | Describe proyectos | Los compara | Aprende de ellos para diseñar solución propia |

---

## 13. Arquitectura técnica

### Stack tecnológico

| Componente | Tecnología | Justificación |
|---|---|---|
| Aplicación | HTML / CSS / JS vanilla | Sin dependencias, máxima portabilidad, sin proceso de compilación |
| Hosting | GitHub Pages | Gratuito, automático, con HTTPS |
| Almacenamiento | LocalStorage | Sin backend requerido, exportable como JSON |
| Modo offline | Service Worker (Cache API) | PWA nativa del navegador, sin librería |
| Instalación móvil | Web App Manifest | PWA estándar, compatible con Android e iOS |
| Fuentes | Google Fonts (Atkinson Hyperlegible, Montserrat) | Accesibilidad y legibilidad |
| Íconos | SVG + PNG (192px, 512px, maskable) | Requisito PWA |

### Estrategia de caché del Service Worker

El archivo `sw.js` implementa dos estrategias diferenciadas:

**Network-first para HTML:**
```
Solicitud HTML → Red → Si responde: actualiza caché y devuelve red
                     → Si falla: devuelve caché → Si no hay caché: devuelve index.html
```

Esta estrategia garantiza que el estudiante siempre vea la versión más reciente de la app cuando tiene conexión, evitando que versiones antiguas queden atrapadas en caché indefinidamente.

**Cache-first para assets estáticos:**
```
Solicitud JSON/imagen → Caché → Si está: devuelve caché
                              → Si no: Red → actualiza caché
```

Los archivos JSON y los íconos se sirven desde caché para que la app funcione sin conexión.

### Filtro de URLs no cacheables

El SW filtra cualquier URL cuyo protocolo no sea `http` o `https`, evitando errores con extensiones de Chrome y URLs internas del navegador:

```javascript
if (!url.protocol.startsWith('http')) return;
```

### LocalStorage: esquema de progreso

```json
{
  "appVersion": "0.2.3",
  "savedAt": "2026-05-12T00:00:00.000Z",
  "userProfile": {
    "displayName": "Estudiante",
    "regionInterest": "Puerto Rico",
    "learningGoal": "Aprender agroecología desde cero"
  },
  "progress": {
    "currentLevel": 0,
    "points": 0,
    "completedLevels": [],
    "completedActivities": [],
    "visitedProjects": [],
    "badges": [],
    "savedPrompts": [],
    "reflections": []
  }
}
```

Este esquema se mapea directamente a la futura tabla `progress` en Supabase (ver Sección 20).

### Navegación sin onclick inline

La app usa `data-view` attributes + `addEventListener` delegado para toda la navegación principal, eliminando dependencia de evaluación de HTML entities en manejadores `onclick`:

```javascript
nav.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-view]');
  if (btn) setView(btn.dataset.view);
});
```

Cuando se necesitan parámetros en manejadores onclick específicos, se usa `jsArg()` para serializar valores de forma segura en atributos HTML:

```javascript
function jsArg(value) {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/"/g, '&quot;');
}
```

---

## 14. Sistema de diseño visual

### Paleta de colores: "Selva salvaje accesible"

| Variable CSS | Hex | Uso |
|---|---|---|
| `--color-canopy` | `#123524` | Fondo de topbar, cabeceras de modal, color dominante |
| `--color-forest` | `#1B5E3A` | Botones primarios, links, elementos interactivos |
| `--color-leaf` | `#4C9A2A` | Acentos verdes secundarios |
| `--color-moss` | `#8FAF3C` | Chips, fondos de gradiente |
| `--color-earth` | `#5A3A1E` | Texto bold, strong, earth tones |
| `--color-clay` | `#B66A3C` | Botones clay (Contestación Modelo) |
| `--color-river` | `#2B7A78` | Acentos azul-verde, em, cursivas |
| `--color-sun` | `#F2C14E` | Botones de acción positiva, badge activo |
| `--color-flower` | `#D95D39` | Acentos de alerta o énfasis |
| `--color-bg` | `#F6F1E7` | Fondo de la app |
| `--color-card` | `#FFFDF6` | Fondo de tarjetas |
| `--color-text` | `#17231C` | Texto principal |
| `--color-muted` | `#4C5A51` | Texto secundario, metadatos |

### Tipografía

- **Cuerpo:** Atkinson Hyperlegible → Inter → Source Sans 3 → system-ui
- **Cabeceras:** Montserrat → Nunito Sans → Source Sans 3 → system-ui
- **Tamaño base:** 18px
- **Altura de línea:** 1.6

La fuente Atkinson Hyperlegible fue diseñada específicamente para personas con baja visión y tiene alta tasa de reconocimiento de caracteres individuales.

### Accesibilidad

- Contraste mínimo de 4.5:1 entre texto y fondo (WCAG AA)
- Botones con altura mínima de 44px (requisito de accesibilidad táctil)
- Texto alternativo reservado para todas las imágenes (campos `imageAlt`)
- El progreso no depende únicamente del color
- Navegación funcional por teclado (Tab, Enter, Escape)
- `focus-visible` con anillo de foco amarillo visible

### Fondo generativo

El fondo de la app usa dos gradientes radiales superpuestos sobre el color base:

```css
background:
  radial-gradient(circle at top left, rgba(143,175,60,.28), transparent 34rem),
  radial-gradient(circle at 85% 12%, rgba(43,122,120,.18), transparent 28rem),
  var(--color-bg);
```

---

## 15. Estructura de archivos

```
yocahu-agroecologia-mvp-1/
├── index.html                          # Aplicación monolítica (HTML + CSS + JS)
├── manifest.json                       # Manifiesto PWA
├── sw.js                               # Service worker
├── README.md                           # README ilustrado para usuarios y GitHub
│
├── data/
│   ├── app.json                        # Metadatos, principios, paleta, esquema de progreso
│   ├── levels.json                     # 13 niveles curriculares
│   ├── activities.json                 # 25 actividades interactivas
│   ├── projects.json                   # 50 proyectos insignia (datos base)
│   ├── project_fichas_compactas.json   # Fichas compactas de los 50 proyectos
│   ├── top_project_profiles.json       # Perfiles aumentados Top 11
│   ├── prompts.json                    # 13 prompts de Yocahú
│   ├── answers.json                    # 13 contestaciones modelo (keyed por promptId)
│   ├── badges.json                     # 13 badges
│   ├── rubric.json                     # Rúbrica del Capstone (5 criterios × 4 niveles)
│   └── guides.json                     # Guías de usuario y documentación interna
│
├── assets/
│   └── icons/
│       ├── yocahu-icon.svg             # Ícono principal SVG
│       ├── icon-192.png                # Ícono PWA 192×192
│       ├── icon-512.png                # Ícono PWA 512×512
│       └── maskable-512.png            # Ícono maskable para Android
│
└── docs/
    ├── documentacion-oficial.md        # Este documento
    ├── app-readme.md                   # README técnico original
    ├── user-guide.md                   # Guía de usuario (versión archivo)
    ├── cierre-compendio-estado.md      # Estado del proyecto al cierre de sesión
    ├── cierre-primer-seguimiento.md    # Instrucciones para retomar el proyecto
    └── cierre-prompt-activacion.md     # Prompt de activación para nueva sesión con IA
```

---

## 16. Esquema de datos: archivos JSON

### `data/levels.json`

Array de 13 objetos con la siguiente forma:

```json
{
  "id": 0,
  "title": "Entrada al Archipiélago Vivo",
  "question": "¿Qué es agroecología y por qué importa en Puerto Rico?",
  "summary": "Resumen breve del nivel.",
  "concepts": ["concepto1", "concepto2"],
  "activityIds": ["id-actividad-1", "id-actividad-2"],
  "promptIds": ["id-prompt-1"],
  "badgeId": "id-del-badge",
  "pointsToComplete": 100,
  "unlockRule": { "type": "always" }
}
```

El `unlockRule` puede ser `{ "type": "always" }` (Nivel 0) o `{ "type": "completeLevel", "levelId": N }`.

### `data/activities.json`

Array de 25 objetos. Los campos varían según el tipo (`quiz`, `design`, `scenario`, etc.), pero todos comparten:

```json
{
  "id": "id-de-actividad",
  "type": "quiz",
  "levelId": 0,
  "title": "Título de la actividad",
  "description": "Descripción del objetivo pedagógico.",
  "points": 50
}
```

### `data/projects.json`

Array de 50 objetos base de proyectos. Las fichas extendidas viven en `project_fichas_compactas.json`.

### `data/answers.json`

Objeto indexado por `promptId`:

```json
{
  "prompt-explica-agroecologia-pr": {
    "promptId": "prompt-explica-agroecologia-pr",
    "nivel": 0,
    "titulo": "Nivel 0",
    "respuesta": "Texto completo en markdown..."
  }
}
```

### `data/guides.json`

```json
{
  "metadata": { "title": "...", "version": "0.2.3" },
  "guides": [
    {
      "id": "user-guide",
      "title": "Guía de usuario",
      "summary": "...",
      "content": "# Contenido en markdown..."
    }
  ]
}
```

---

## 17. Guía de administración del contenido

Esta sección está dirigida al administrador del proyecto (Ricardo Juan Morales De Jesús o colaboradores designados).

### Editar el texto de un nivel

1. Abre `data/levels.json`
2. Localiza el objeto con el `id` del nivel que deseas editar
3. Modifica `title`, `question`, `summary` o `concepts` según necesites
4. Guarda el archivo y haz commit + push al repositorio

El cambio se refleja automáticamente en la app en la próxima visita del usuario (gracias a la estrategia network-first del service worker).

### Editar una contestación modelo

1. Abre `data/answers.json`
2. Localiza la clave del `promptId` correspondiente (ej. `"prompt-explica-agroecologia-pr"`)
3. Edita el campo `"respuesta"` — acepta markdown completo (headings `#`, `##`, listas `- `, bold `**`, code ` ``` `)
4. Guarda y haz push

### Añadir un nuevo proyecto al catálogo

1. En `data/projects.json`: añade el objeto base del proyecto con todos los campos requeridos
2. En `data/project_fichas_compactas.json`: añade la ficha compacta con el mismo `projectId`
3. Si es Top 11: añade el perfil en `data/top_project_profiles.json` con el campo `rank`
4. Si el proyecto tiene imagen: guarda la imagen en `assets/images/proyectos/` y actualiza `imageUrl`

### Verificar datos de contacto de proyectos

1. Abre `data/project_fichas_compactas.json`
2. Para cada proyecto, localiza el objeto `futureFields`
3. Completa `website`, `mapUrl` y `contact` con información verificada
4. Cambia `verificationStatus` de `"pendiente"` a `"verificado"`
5. Haz push — los cambios se reflejan en la app

### Añadir un nuevo nivel (expansión futura)

Para añadir un Nivel 13 o posterior:

1. **`data/levels.json`** — Añade objeto con `id: 13`, `title`, `question`, `summary`, `concepts`, `activityIds`, `promptIds`, `badgeId`, `pointsToComplete` y `unlockRule: { "type": "completeLevel", "levelId": 12 }`
2. **`data/activities.json`** — Añade las actividades del nuevo nivel con sus IDs
3. **`data/prompts.json`** — Añade el prompt del nuevo nivel
4. **`data/answers.json`** — Añade la contestación modelo con la clave del promptId
5. **`data/badges.json`** — Añade el badge del nuevo nivel
6. **`sw.js`** — Verifica que todos los archivos JSON nuevos están en `STATIC_ASSETS` y sube la versión del caché (`CACHE_NAME`)

### Actualizar la versión del service worker

Cuando se realizan cambios importantes que el service worker debe propagar inmediatamente:

```javascript
// En sw.js, línea 1:
const CACHE_NAME = 'yocahu-agroecologia-pr-v0-2-X'; // Incrementar X
```

El incremento de versión hace que el SW antiguo se desactive y el nuevo tome control en la próxima visita.

### Probar localmente antes de publicar

```bash
cd yocahu-agroecologia-mvp-1
python3 -m http.server 8000
# Luego abrir: http://localhost:8000
```

Abrir `index.html` directamente desde el sistema de archivos (`file://`) carga la app con datos internos de respaldo, pero **no activa el service worker**.

### Publicar en GitHub Pages

```bash
git add .
git commit -m "descripción del cambio"
git push origin main
```

GitHub Pages despliega automáticamente en ~1 minuto tras el push. La URL pública es:
**https://ricardojuanmorales.github.io/yocahu-agroecologia-mvp-1/**

---

## 18. README para usuarios (versión ilustrada)

*Esta es la versión del README.md del repositorio, incluida aquí para referencia completa.*

---

# 🌿 Yocahú Agroecología PR: Viaje por el Archipiélago Vivo

> **Una app educativa gratuita para explorar la agroecología de Puerto Rico, Vieques y Culebra — desde tu celular, sin necesidad de cuenta ni internet constante.**

🔗 **Abre la app:** https://ricardojuanmorales.github.io/yocahu-agroecologia-mvp-1/

### 🏝️ ¿Qué es Yocahú Agroecología PR?

Yocahú Agroecología PR es una aplicación web progresiva (PWA) diseñada para estudiantes universitarios en Puerto Rico que quieren aprender agroecología de manera activa, situada y conectada con la realidad del archipiélago.

**Yocahú** — el espíritu mentor de la app — te acompaña nivel a nivel con prompts copiables para conversar con IA, contestaciones modelo, proyectos insignia y actividades interactivas.

### 🧭 Metodología de estudio

Cada nivel sigue la misma estructura:

| Elemento | Descripción |
|---|---|
| 📖 **Pregunta guía** | Una pregunta central que orienta todo el nivel |
| 💡 **Conceptos clave** | Los principios teóricos del tema |
| 🛠️ **Actividades** | Quizzes, mapas conceptuales, observaciones de campo y escenarios |
| 🌱 **Proyecto insignia** | Una finca u organización real de Puerto Rico como caso de estudio |
| 🤖 **Prompt de Yocahú** | Un prompt copiable para continuar la conversación con IA |
| 📝 **Contestación modelo** | La respuesta de referencia que ofrece Yocahú como guía |

### 🗺️ Los 13 niveles del archipiélago

| # | Nivel | Pregunta central |
|---|---|---|
| 0 | 🌱 Entrada al Archipiélago Vivo | ¿Qué es la agroecología? |
| 1 | 🕸️ Pensamiento Sistémico | ¿Cómo se conectan todas las partes del sistema? |
| 2 | 🪱 Suelo Vivo | ¿Qué vive bajo nuestros pies? |
| 3 | 🌽 Semillas, Biodiversidad y Cultura | ¿Qué memoria guardan las semillas? |
| 4 | 🌧️ Agua, Clima y Resiliencia | ¿Cómo cultivamos ante huracanes y sequías? |
| 5 | 🏡 Diseño de Finca Agroecológica | ¿Cómo diseñamos un sistema productivo vivo? |
| 6 | 🐛 Manejo Ecológico de Plagas | ¿Cómo cuidamos sin químicos? |
| 7 | 🌳 Agroforestería y Bosques Comestibles | ¿Qué papel juegan los árboles en la finca? |
| 8 | 🐝 Animales, Polinizadores y Ciclos | ¿Cómo participan los animales en el ecosistema? |
| 9 | 🥭 Cosecha, Procesamiento y Valor Añadido | ¿Qué ocurre después de la cosecha? |
| 10 | 🤝 Mercados, Cooperación y Economía Solidaria | ¿Cómo construimos circuitos alimentarios justos? |
| 11 | ⚖️ Tierra, Gobernanza y Justicia Alimentaria | ¿Quién controla la tierra y la comida? |
| 12 | 🎓 Proyecto Capstone | Diseña tu propio agroecosistema boricua |

### 💾 Guarda tu avance

Tu progreso se guarda automáticamente en tu dispositivo. Puedes exportar/importar como JSON, editar tu perfil y coleccionar 13 badges. No necesitas cuenta.

### 📦 50 proyectos insignia reales

La app incluye fichas de **50 fincas, organizaciones y colectivos agroecológicos** de Puerto Rico, Vieques y Culebra. Los **Top 11** tienen perfiles extendidos con narrativa y contexto histórico.

### 📲 Instala la app en tu celular

1. Abre la app en Chrome o Safari
2. Toca **"Instalar"** en la parte superior de la pantalla
3. En iOS: compartir → "Añadir a pantalla de inicio"

### ✅ Estado actual — v0.2.3

| Componente | Estado |
|---|---|
| 13 niveles curriculares | ✅ |
| 50 proyectos insignia | ✅ |
| 25 actividades interactivas | ✅ |
| 13 badges y 13 prompts | ✅ |
| 13 contestaciones modelo | ✅ |
| Perfil y exportar/importar | ✅ |
| Modo offline PWA | ✅ |
| Imágenes de proyectos | ⬜ Pendiente |
| Verificación de contactos | ⬜ Pendiente |
| Pruebas con estudiantes | ⬜ Pendiente |

### 🚀 Planes futuros

- 🔐 Supabase + Google OAuth — progreso en la nube
- 📊 Panel docente — vista del grupo para el profesor
- 🖼️ Fotos reales de los proyectos
- 🤖 Yocahú interactivo con API de IA
- ♿ Auditoría WCAG 2.1 AA

---

## 19. Estado actual y deuda técnica

### Funcionalidades completadas (v0.2.3)

| Funcionalidad | Archivo(s) principal(es) |
|---|---|
| 13 niveles curriculares con actividades | `data/levels.json`, `data/activities.json` |
| 50 proyectos con fichas compactas | `data/projects.json`, `data/project_fichas_compactas.json` |
| Top 11 con perfiles aumentados | `data/top_project_profiles.json` |
| 13 prompts copiables | `data/prompts.json` |
| 13 contestaciones modelo con modal | `data/answers.json`, `index.html` |
| 13 badges | `data/badges.json` |
| Rúbrica del Capstone | `data/rubric.json` |
| Perfil de usuario editable | `index.html` → `saveUserProfile()` |
| Exportar/importar progreso JSON | `index.html` → `exportProgress()`, `importProgress()` |
| Guías de usuario con markdown renderizado | `data/guides.json` |
| Modo offline con service worker | `sw.js` (v0-2-8) |
| Botón "Instalar" siempre visible | `index.html` → `registerPWA()` |
| Navegación con data-view | `index.html` → `updateNav()`, `addEventListener` |

### Deuda técnica conocida

| Ítem | Impacto | Esfuerzo estimado |
|---|---|---|
| `imageUrl` vacíos en los 50 proyectos | Visual — las fichas no tienen foto | Alto (requiere gestión con cada organización) |
| `verificationStatus: "pendiente"` en todos | Datos sin verificar | Alto (requiere contacto directo) |
| `index.html` monolítico (~1,500 líneas) | Mantenimiento difícil a largo plazo | Medio (separar CSS y JS en archivos externos) |
| Pruebas de usabilidad con estudiantes | Sin validación empírica | Medio (requiere coordinación con grupo) |
| Auditoría WCAG 2.1 AA formal | Sin certificación de accesibilidad | Bajo-Medio |

---

## 20. Hoja de ruta futura

### Fase 1 — Pruebas y verificación (inmediato)

- **Pruebas de usabilidad** con al menos 5 estudiantes universitarios
- **Verificar datos** de las 50 organizaciones (website, contacto, estado)
- **Añadir imágenes** a fichas de proyectos (Creative Commons o permiso expreso)
- **Separar monolito** en `assets/styles.css` y `assets/app.js`

### Fase 2 — Supabase + Google OAuth

Conectar la PWA a **Supabase** para persistencia de progreso en la nube vinculado a cuenta Google.

```
[PWA en GitHub Pages]
        ↓ Supabase JS SDK (cliente, sin backend propio)
[Supabase]
  ├── Auth     → Google OAuth 2.0
  ├── Database → PostgreSQL: tabla progress, tabla profiles
  └── Realtime → sync multi-dispositivo (fase posterior)
```

**Fases de implementación:**

- **2a — Auth:** Añadir SDK de Supabase, botón "Entrar con Google", mostrar perfil del usuario autenticado. Sin cambios en cómo se guarda el progreso aún.
- **2b — Sync de progreso:** Al guardar avance, escribir a tabla `progress` en Supabase si hay sesión activa. Al cargar, leer de Supabase o LocalStorage como fallback offline.
- **2c — Panel docente:** API en Render (Node.js o FastAPI) solo si se necesita lógica de grupo server-side que no pueda ir en el cliente.

**Variables requeridas para Fase 2a:**
```
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_ANON_KEY=eyJ...
GOOGLE_CLIENT_ID=xxxx.apps.googleusercontent.com
```

> La `ANON_KEY` de Supabase es pública por diseño. La seguridad se gestiona con Row Level Security (RLS): cada usuario solo puede leer y escribir su propio progreso.

**Compatibilidad con el stack actual:**
- ✅ GitHub Pages sirve HTTPS (requerido para OAuth)
- ✅ LocalStorage se mantiene como fallback offline
- ✅ El esquema de progreso se mapea directamente a PostgreSQL
- ✅ El SDK de Supabase corre directo en el navegador (sin backend propio)

### Fase 3 — Yocahú interactivo

Integración opcional con la API de Claude (Anthropic) o GPT-4 para que el estudiante pueda conversar directamente con Yocahú dentro de la app, sin salir a otra conversación.

### Fase 4 — Panel docente

Un módulo que permita al profesor:
- Ver el progreso de estudiantes agrupados por curso
- Visualizar badges obtenidos en el grupo
- Añadir notas o retroalimentación por estudiante
- Exportar reportes de progreso grupal

---

## 21. Registro de decisiones técnicas y bugs corregidos

### Decisiones de diseño relevantes

| Decisión | Alternativa descartada | Justificación |
|---|---|---|
| HTML/CSS/JS vanilla sin framework | React, Vue, Svelte | Cero dependencias, máxima portabilidad, sin proceso de build |
| Datos en JSON separado del código | Embebidos en HTML | El contenido curricular puede editarse sin tocar lógica |
| LocalStorage como almacenamiento | Base de datos remota | Sin backend en el MVP, privacidad del estudiante |
| GitHub Pages como hosting | Netlify, Vercel, Render | Gratuito, integrado con el repositorio, sin configuración |
| Network-first para HTML | Cache-first global | Garantiza que el estudiante siempre vea la versión más reciente |
| data-view + addEventListener | onclick inline | Evita problemas de parsing de HTML entities en atributos |
| Botón "Instalar" siempre visible | Solo visible con `beforeinstallprompt` | En iOS y escritorio el evento no se dispara; el fallback toast orienta al usuario |

### Bugs corregidos en el desarrollo del MVP

| Bug | Causa raíz | Solución implementada |
|---|---|---|
| Botones de navegación no respondían | `jsArg()` producía comillas dobles dentro de atributos HTML delimitados con comillas dobles, rompiendo el `onclick` | Añadir `.replace(/"/g, '&quot;')` en `jsArg()`; migrar navegación a `data-view` + `addEventListener` |
| Service worker servía HTML antiguo | Estrategia cache-first interceptaba todas las peticiones, incluyendo HTML | Cambiar a network-first para HTML, cache-first solo para assets estáticos |
| `TypeError` en service worker con extensiones de Chrome | El SW intentaba cachear URLs con protocolo `chrome-extension://` que no acepta la Cache API | Añadir `if (!url.protocol.startsWith('http')) return;` al inicio del handler |
| Botón "Instalar" desaparecía | Solo se mostraba cuando el navegador disparaba `beforeinstallprompt`, que iOS y escritorio no disparan | Botón siempre visible; toast instructivo cuando el prompt nativo no está disponible |

---

## 22. Historial de versiones

| Versión | Fecha | Cambios principales |
|---|---|---|
| `0.1.0` | 2026-05-11 | Prototipo inicial: niveles, actividades, proyectos, badges, prompts |
| `0.2.0` | 2026-05-11 | Fichas compactas de 50 proyectos, Top 11 con perfiles aumentados |
| `0.2.1` | 2026-05-11 | Repositorio público en GitHub, publicación en GitHub Pages |
| `0.2.2` | 2026-05-11 | Corrección de navegación (jsArg + data-view), service worker network-first, perfil de usuario, exportar/importar, guías de uso, botón Instalar siempre visible, sección motivacional en Inicio |
| `0.2.3` | 2026-05-12 | Agenda Supabase + Google OAuth documentada; documentos de cierre actualizados; versión base |
| `0.2.3` | 2026-05-12 | Contestaciones modelo para los 13 prompts (`data/answers.json`), modal Contestación Modelo, renderizador markdown completo |
| `0.2.3` | 2026-05-12 | README ilustrado con emojis; guías de usuario reescritas con markdown completo |
| `0.2.3` | 2026-05-12 | Documentación oficial completa (`docs/documentacion-oficial.md`) |

---

## 23. Créditos y referencias

### Autoría

**Ricardo Juan Morales De Jesús, Ph.D.**  
Facultad de Estudios Generales  
Universidad de Puerto Rico en Río Piedras  
río Piedras, Puerto Rico

### Proyectos del catálogo

Los 50 proyectos insignia son organizaciones, fincas e iniciativas reales. Su inclusión en el catálogo es de carácter educativo y no implica endoso o afiliación institucional. Los datos de contacto, URLs y verificación están pendientes de completar con información directamente proporcionada por cada organización.

### Tecnología

- **Hosting:** GitHub Pages (gratuito, código abierto)
- **Fuentes:** Google Fonts — [Atkinson Hyperlegible](https://fonts.google.com/specimen/Atkinson+Hyperlegible), [Montserrat](https://fonts.google.com/specimen/Montserrat)
- **Ícono principal:** Yocahú Agroecología PR (diseño propio)
- **Asistencia en desarrollo:** Claude (Anthropic) — Claude Sonnet 4.6

### Referencias académicas recomendadas

Para ampliar el marco conceptual de la app:

- Altieri, M. A., & Nicholls, C. I. (2000). *Agroecología: Teoría y práctica para una agricultura sustentable*. PNUMA.
- Gliessman, S. R. (2015). *Agroecology: The Ecology of Sustainable Food Systems* (3rd ed.). CRC Press.
- Wezel, A., et al. (2009). Agroecology as a science, a movement and a practice. *Agronomy for Sustainable Development*, 29(4), 503–515.
- La Vía Campesina. (2015). *Agroecología campesina: Para la soberanía alimentaria y el enfriamiento del planeta*.
- Organización Boricuá de Agricultura Ecológica de Puerto Rico: https://organizacionboricua.org

---

*Documentación oficial — Yocahú Agroecología PR v0.2.3 — Ricardo Juan Morales De Jesús, Ph.D. — Facultad de Estudios Generales, UPR Río Piedras — 2026-05-12*
