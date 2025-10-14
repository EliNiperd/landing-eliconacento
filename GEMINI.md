# Contexto del Proyecto - Portafolio de Eli con Acento

Este documento sirve como un registro del progreso, decisiones y contexto general del desarrollo del portafolio para `eliconacento.com`.

## Objetivo Principal
Construir un portafolio web moderno y funcional para Eli con Acento, destacando sus habilidades como desarrollador Full-Stack y presentando sus proyectos clave.

## Tecnologías Utilizadas
-   **Framework:** Next.js (v14.x)
-   **Lenguaje:** TypeScript
-   **Estilos:** Tailwind CSS
-   **Gestor de Paquetes:** npm (migrado desde pnpm debido a conflictos de dependencias)
-   **Iconos:** React Icons

## Estructura de la Aplicación (app/page.tsx)
El portafolio es una página única (one-page) con las siguientes secciones:
1.  **Hero:** Introducción con nombre, tagline, biografía y enlaces a redes sociales.
2.  **Sobre Mí y Habilidades:** Foto de perfil, descripción y listado de tecnologías por categorías.
3.  **Proyectos Destacados:** Presentación de proyectos individuales con imágenes, descripciones, características, stack tecnológico y enlaces a GitHub/Demo.
4.  **Contacto:** Sección final con un mensaje y un enlace `mailto:`.

## Proyectos Destacados
-   **MediScan: Inventario Inteligente de Medicamentos**
    -   GitHub: `https://github.com/EliNiperd/medical-inventory`
    -   Demo: `https://medical-inventory.eliconacento.com/`
-   **F1 Race Center 2025**
    -   GitHub: `https://github.com/EliNiperd/f1-gp-david`
    -   Demo Sugerida: `https://f1.eliconacento.com`

## Información de Contacto del Usuario
-   **Email:** `eli.rodriguez@gmail.com`

## Decisiones y Soluciones Clave
-   **Migración de pnpm a npm:** Se realizó una migración forzada de `pnpm` a `npm` debido a un error persistente de `MODULE_NOT_FOUND` con `styled-jsx/package.json`. Esto implicó:
    -   Downgrade de Next.js (v15 a v14) y React (v19 a v18).
    -   Reinstalación completa de Node.js por parte del usuario para asegurar un `npm` funcional.
    -   Limpieza exhaustiva de `node_modules` y `pnpm-lock.yaml`.
    -   Instalación con `npm install --legacy-peer-deps` para resolver conflictos de `peer dependencies` de ESLint.
-   **Configuración de Next.js:** Se renombró `next.config.ts` a `next.config.mjs` y se ajustó su contenido a JavaScript puro con JSDoc para compatibilidad con Next.js v14.

## Próximos Pasos Sugeridos
-   **Imágenes de Proyectos:** El usuario debe añadir las imágenes `project-mediscan.png` y `project-f1.png` a la carpeta `public/`.
-   **Mockups de Imágenes:** Se sugirieron herramientas como Canva, shots.so y Screely para crear mockups de proyectos impactantes.
-   **Funcionalidad de Contacto:** Considerar la implementación de un formulario de contacto funcional.
-   **Animaciones/UX:** Añadir animaciones sutiles o mejoras de UX (ej. con Framer Motion).

