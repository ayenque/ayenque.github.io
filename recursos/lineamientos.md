---
# Directrices de Desarrollo y Diseño para el Sitio Web Personal de Angelo Yenque

Este documento sirve como guía para la creación de un sitio web personal moderno, innovador y seguro, utilizando como inspiración los diseños de [brittanychiang.com](https://brittanychiang.com) y [craftz.dog](https://www.craftz.dog/).

## 1. Tecnologías Recomendadas

Para este proyecto, se utilizarán las siguientes tecnologías en sus **últimas versiones estables** para garantizar la seguridad y el rendimiento:

- **Framework**: **Next.js** (configurado para exportación estática `next export`).
- **Lenguaje**: **TypeScript**.
- **Estilos**: **Tailwind CSS**.
- **Animaciones**: **Framer Motion**.
- **Despliegue y Hosting**: **GitHub Pages**, con un flujo de trabajo de **GitHub Actions** para la automatización del despliegue. El sitio se servirá desde el repositorio `ayenque.github.io` y se conectará al dominio personalizado `ayenque.me`.

## 2. Inspiración de Diseño y Estructura

El diseño debe ser una fusión de las mejores características de los sitios de ejemplo:

- **Diseño General (Inspirado en brittanychiang.com)**:
  - **Layout de Doble Columna (Escritorio)**:
    - **Columna Izquierda (Fija/Sticky)**: Debe contener tu nombre, título profesional, una breve biografía y la navegación principal (Sobre mí, Experiencia, Habilidades, Contacto). También debe incluir enlaces a tus redes sociales (LinkedIn, GitHub, etc.) con iconos.
    - **Columna Derecha (Scrollable)**: Contendrá las secciones principales de la web. A medida que el usuario se desplaza, la sección activa en la navegación de la izquierda debe resaltarse.
  - **Diseño Responsivo**: En dispositivos móviles, el diseño de doble columna debe colapsar a una sola columna, con la información de contacto y la navegación en la parte superior.

- **Elementos Innovadores (Inspirado en craftz.dog)**:
  - **Elemento 3D (Opcional pero recomendado)**: En la sección principal o "hero", se podría incluir un elemento 3D interactivo. Podría ser un logo abstracto o una nube de palabras con tus habilidades. Se puede usar **Three.js** y **React Three Fiber** para esto.
  - **Animaciones de Entrada**: Cada sección debe tener una animación sutil de entrada (fade-in y slide-up) a medida que aparece en la vista del usuario. Framer Motion es ideal para esto.

## 3. Estructura de las Secciones del Contenido

El contenido ya está preparado. La IA debe tomar el markdown existente y distribuirlo en las siguientes secciones HTML/JSX:

- **Componente `Header` (Columna Izquierda)**:
  - `<h1>`: Angelo Paul Yenque Tume
  - `<h2>`: Coordinador de Investigación, Desarrollo & T.I.
  - `<p>`: Un resumen corto del perfil.
  - `<nav>`: Enlaces de navegación a las secciones (`#about`, `#experience`, `#skills`, `#contact`).
  - `<ul>` con `<li>`: Iconos de redes sociales (LinkedIn, email).

- **Componente `Main` (Columna Derecha)**:
  - **Sección `About` (`<section id="about">`)**: Tomar el contenido de la sección "Sobre mí".
  - **Sección `Experience` (`<section id="experience">`)**:
    - Cada puesto de trabajo debe ser un componente individual.
    - Las tecnologías o habilidades clave mencionadas en cada puesto (SAP, Power BI, etc.) pueden ser presentadas como etiquetas (pills) con un estilo distintivo.
  - **Sección `Skills` (`<section id="skills">`)**:
    - Agrupar las habilidades por categorías (Software, Lenguajes de Programación, etc.).
  - **Sección `Education` (`<section id="education">`)**:
    - Mostrar la formación académica de manera clara.
  - **Sección `Contact` (`<section id="contact">`)**:
    - Un mensaje de llamado a la acción y los datos de contacto.

## 4. Recursos Adicionales

- **Iconos**: Usar una librería como **Lucide Icons** o **Feather Icons** para los iconos.
- **Tipografía**: Utilizar **Google Fonts** para cargar una fuente moderna como `Inter` o `Sora`.
- **Seguridad**:
  - Asegurarse de que todos los enlaces externos (`target="_blank"`) incluyan `rel="noopener noreferrer"`.
  - Mantener las dependencias actualizadas regularmente.

