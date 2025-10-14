# Contexto del Proyecto - Portafolio de Eli con Acento

Este documento sirve como un registro del progreso, decisiones y contexto general del desarrollo del portafolio para `eliconacento.com`.

**Última Actualización:** 14 de octubre de 2025

## Objetivo Principal
Construir un portafolio web moderno y funcional para Eli con Acento, destacando sus habilidades como desarrollador Full-Stack y presentando sus proyectos clave.

## Sobre Eli Rodríguez
-   **Nombre Completo:** Elí Rodríguez Salas
-   **Rol:** Full Stack Developer y líder de proyectos
-   **Experiencia:** +25 años creando soluciones tecnológicas de alto impacto.
-   **Filosofía:** Apasionado por la tecnología, transformando problemas complejos en software robusto, eficiente y escalable. Motivación por el aprendizaje constante, optimización de procesos y trabajo en equipos multidisciplinarios para lograr resultados sobresalientes. Objetivo: impulsar la innovación en proyectos que marcan la diferencia.

## Tecnologías y Habilidades Clave
-   **Lenguajes:** Javascript, TypeScript, C#.NET
-   **Frontend:** React, Next.js, HTML5, TailwindCSS, Bootstrap, UX/UI
-   **Backend:** Node.js, Express.js
-   **Bases de Datos:** SQL Server, Oracle, Oracle SQL
-   **Herramientas/DevOps:** Gestión de Proyectos, CI/CD, Scrum, Trello, Jira, Git, GitHub, Visual Studio, Visual Studio Code, SQL Server Management Studio, Oracle SQL Developer, Postman

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
-   **Aplicación Web para Certificación ISO/Medio Ambiente - iCalidad**
    -   Tecnologías: Next.js, Node.js, SQL Server, Oracle SQL, SQL Server, TailwindCSS.
-   **Módulos de Logística & Transporte**
    -   Tecnologías: ASP.NET, React, Node.js.

## Experiencia Laboral
-   **Global HITSS**
    -   Rol: Software Developer
    -   Periodo: 2015-2024
    -   Logro Clave: Desarrollo y despliegue de ERP, CI/CD
-   **NIPERD**
    -   Rol: Full Stack Developer
    -   Periodo: 2008-presente
    -   Logro Clave: Migración completa a JS y UX moderno
-   **SCCAP**
    -   Rol: Full Stack Developer
    -   Periodo: 1997-2008
    -   Logro Clave: Sistemas personalizados y robustos

## Información de Contacto
-   **Email:** `eli.rodriguez@gmail.com`
-   **LinkedIn:** `https://www.linkedin.com/in/el%C3%AD-rodr%C3%ADguez-2818b71a/`
-   **GitHub:** `https://github.com/EliNiperd`

## Decisiones y Soluciones Clave
-   **Migración de pnpm a npm:** Se realizó una migración forzada de `pnpm` a `npm` debido a un error persistente de `MODULE_NOT_FOUND` con `styled-jsx/package.json`. Esto implicó:
    -   Downgrade de Next.js (v15 a v14) y React (v19 a v18).
    -   Reinstalación completa de Node.js por parte del usuario para asegurar un `npm` funcional.
    -   Limpieza exhaustiva de `node_modules` y `pnpm-lock.yaml`.
    -   Instalación con `npm install --legacy-peer-deps` para resolver conflictos de `peer dependencies` de ESLint.
-   **Configuración de Next.js:** Se renombró `next.config.ts` a `next.config.mjs` y se ajustó su contenido a JavaScript puro con JSDoc para compatibilidad con Next.js v14.
-   **Configuración de npm para CI/CD:** Se añadió `legacy-peer-deps=true` y `strict-peer-deps=false` a `.npmrc` para resolver errores de `npm ci` en entornos de despliegue como Dokploy.

## Inspiración de Diseño
-   **Referencia:** `https://v4.brittanychiang.com/`, `https://brittanychiang.com/`
-   **Elementos Clave:** Diseño minimalista, desplazamiento suave, animaciones sutiles, tarjetas de proyecto claras, navegación pegajosa, footer.

## Futuras Mejoras Sugeridas
-   **Implementar Experiencia Laboral:** Crear una sección dedicada en el portafolio para mostrar la experiencia laboral detallada.
-   **Formulario de Contacto Funcional:** Desarrollar un backend para el formulario de contacto.
-   **Animaciones y Transiciones:** Incorporar animaciones sutiles (ej. con Framer Motion) para mejorar la experiencia de usuario.
-   **Footer:** Añadir un pie de página con información de copyright y enlaces sociales.
-   **Navegación:** Implementar una barra de navegación pegajosa con desplazamiento suave a las secciones.
-   **Optimización de Imágenes:** Asegurar que todas las imágenes estén optimizadas para la web.
