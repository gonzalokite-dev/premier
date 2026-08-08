# PROMPT — Desarrollo web Premier Gym

> Copia y pega todo el bloque siguiente en Claude Code (o el IDE con agente) en la raíz de un proyecto vacío.
> Antes de lanzarlo, copia la carpeta `LOGO/` y las fotos a `/public/assets/`.

---

## CONTEXTO

Eres un desarrollador front-end senior especializado en webs de marca premium. Vas a construir el sitio web completo de **Premier Gym**, una cadena de gimnasios premium en Palma de Mallorca con dos clubes: **S'Escorxador** y **Avenidas**.

La web **no debe parecer un gimnasio convencional**. Debe transmitir la sensación de un espacio premium donde el entrenamiento forma parte de una experiencia cuidada y elegante. Referencias visuales: **Mio Clubs, Apple, Aesop, COS, Zara Home, galerías de arte, hoteles boutique y arquitectura minimalista contemporánea.**

Si en algún punto te falta información, marca el contenido con `{{TBD: descripción}}` y continúa. No inventes precios, direcciones ni datos de contacto que no estén en este prompt.

---

## STACK Y REQUISITOS TÉCNICOS

- **Next.js 15 (App Router) + TypeScript**
- **Tailwind CSS v4** con design tokens en `@theme` (no hardcodear colores ni escalas)
- **Framer Motion** para animaciones de entrada y transiciones
- **next/font** para Montserrat (pesos 200, 300, 400, 500, 600)
- **next/image** siempre, con `sizes` correctos, `priority` solo en el hero
- Idioma base **español (es-ES)**. Prepara la estructura de rutas para añadir **inglés y alemán** más adelante (turistas), pero implementa solo español.
- Sin dependencias de UI pesadas. Componentes propios.
- Accesibilidad AA: contraste, foco visible, `alt` descriptivo, navegación por teclado, `prefers-reduced-motion`.
- Lighthouse objetivo: 95+ en Performance, Accessibility, Best Practices, SEO.

---

## IDENTIDAD VISUAL (obligatoria)

### Tipografía
**Montserrat** para absolutamente todo: títulos, cuerpo y botones.

- Títulos display: peso 200–300, `letter-spacing: 0.12em`–`0.2em`, **MAYÚSCULAS**, tamaños grandes (clamp 2.5rem–6rem)
- Subtítulos / eyebrows: peso 400, 0.75rem, mayúsculas, `letter-spacing: 0.25em`
- Cuerpo: peso 300–400, 1rem–1.125rem, `line-height: 1.75`, ancho máximo 65ch
- Botones: peso 400–500, mayúsculas, `letter-spacing: 0.15em`

El logo de Premier Gym es una tipografía fina, muy espaciada, en mayúsculas. **La jerarquía tipográfica de la web debe dialogar con él**: nada de negritas gruesas ni condensadas deportivas.

### Paleta

```css
@theme {
  /* Principales */
  --color-white: #FFFFFF;
  --color-black: #111111;

  /* Secundarios — arena y piedra */
  --color-sand-50:  #FAF8F5;
  --color-sand-100: #F2EEE8;
  --color-stone-200:#E4DFD8;
  --color-stone-300:#CFC8BF;

  /* Grises de división y fondo */
  --color-gray-100: #F5F5F5;
  --color-gray-300: #DDDDDD;
  --color-gray-500: #8A8A8A;
  --color-gray-700: #444444;

  /* Acento — SOLO hover, iconos y micro-detalles */
  --color-accent: #B7A98F; /* {{TBD: confirmar con cliente}} */
}
```

**Reglas de color no negociables:**

1. Blanco y negro dominan. Arena/piedra aportan calidez en fondos alternos.
2. El **verde solo aparece en elementos naturales de las fotografías (plantas)**. Nunca en UI.
3. El acento se usa exclusivamente en hovers, iconos y llamadas de atención puntuales. Nunca en fondos grandes ni botones primarios.
4. Prohibido cualquier color saturado o "energético" típico de gimnasio.

### Estilo

- **Minimalismo radical. Mucho espacio en blanco** — el whitespace es el elemento de diseño principal, no un sobrante.
- Fotografía de gran formato como protagonista absoluto. Secciones full-bleed.
- Iconografía **muy fina y discreta** (stroke 1px, estilo lineal, sin relleno).
- Sombras **muy sutiles** o inexistentes. Preferir separación por espacio y línea de 1px `--color-gray-300`.
- Bordes limpios con **radios suaves** (2–4px, nunca pill ni cards muy redondeadas).
- Escala de espaciado generosa: secciones con `py-24` en móvil, `py-40`/`py-48` en desktop.
- Grid de 12 columnas, contenedor máximo 1440px, márgenes laterales amplios.

### Animaciones

- Fade + subida sutil (16–24px) al entrar en viewport, `ease-out`, 600–800ms, con `stagger` en listas.
- Imágenes: leve `scale` al hover (1.0 → 1.03) en 700ms.
- Enlaces: subrayado que crece de izquierda a derecha.
- Transiciones de página suaves (fade).
- Nada de parallax agresivo, contadores animados ni efectos llamativos. **La contención es la estética.**
- Respetar `prefers-reduced-motion`.

---

## ARQUITECTURA DE RUTAS

```
/                          Pantalla de inicio (selector de club)
/clubes/sescorxador        Ficha del club S'Escorxador
/clubes/avenidas           Ficha del club Avenidas
/espacios                  Índice de zonas
/espacios/egym
/espacios/cardio
/espacios/discos-y-placas
/espacios/peso-libre
/espacios/recovery         (indicar: solo Avenidas)
/hazte-socio               Selector de club
/hazte-socio/sescorxador   Membresías + accesos temporales
/hazte-socio/avenidas      Membresías + accesos temporales
/contacto
/aviso-legal  /privacidad  /cookies    {{TBD: textos legales}}
```

**Nota:** `/espacios/*` puede resolverse como secciones ancladas dentro de `/espacios` con scroll suave si el resultado visual es más elegante. Decide tú, pero mantén URLs indexables para SEO.

---

## NAVEGACIÓN

- **Menú hamburguesa** (icono de tres líneas, muy fino, 1px) en la esquina superior. Presente en todas las páginas.
- Al pulsar, se despliega un **overlay a pantalla completa**: fondo blanco o negro, tipografía display grande, ítems apareciendo con stagger.
- Ítems del menú:
  - Nuestros Clubes
  - Espacios
  - Hazte Socio
  - Contacto
- Dentro del overlay, en pie: teléfono, WhatsApp, email e Instagram con tipografía pequeña.
- En páginas internas, el logo de Premier Gym aparece arriba a la izquierda enlazando a `/`.
- Header transparente sobre el hero, que gana fondo blanco al hacer scroll.

---

## PÁGINA 1 — INICIO (`/`)

**Estructura:** pantalla completa (100dvh), imagen o vídeo de alta calidad de Premier Gym como fondo, con overlay negro al 30–40% para legibilidad. Soporta vídeo (`<video>` autoplay, muted, loop, playsinline, con poster) y degrada a imagen en móvil o conexiones lentas.

**Contenido:**

1. Logo Premier Gym centrado, grande, en blanco.
2. Debajo, **dos botones principales** que son la acción central de la página:
   - `PREMIER GYM S'ESCORXADOR` → `/clubes/sescorxador`
   - `PREMIER GYM AVENIDAS` → `/clubes/avenidas`

   Estilo: botones outline de 1px blanco, fondo transparente, mayúsculas, muy espaciados. En hover se rellenan de blanco con texto negro, transición 400ms. En desktop van uno junto al otro; en móvil apilados a ancho completo.
3. Icono hamburguesa arriba.
4. Indicador de scroll sutil abajo (línea fina animada), opcional.

**Sin texto de más.** El inicio es una portada, no una landing. Es la puerta de entrada al club.

---

## PÁGINA 2 — CLUB S'ESCORXADOR (`/clubes/sescorxador`)

### Sección hero
Imagen full-bleed del club + título `PREMIER GYM S'ESCORXADOR` y eyebrow `PALMA DE MALLORCA`.

### Sección texto (usar este copy literal)

> Premier Gym S'Escorxador es un gimnasio premium en el centro de Palma de Mallorca, diseñado para quienes buscan entrenar en un entorno tranquilo, moderno y con un aforo controlado. Si buscas un gimnasio en Palma donde la calidad de la experiencia sea tan importante como el entrenamiento, este es tu lugar.
>
> Nuestro club combina tecnología de última generación, diseño cuidado y atención personalizada para ayudarte a conseguir tus objetivos de forma eficiente. Disponemos de circuito inteligente EGYM, análisis corporal InBody, evaluación BioAge, zona de peso libre, maquinaria premium y planes de entrenamiento adaptados a cada persona.
>
> A diferencia de un gimnasio convencional, en Premier Gym apostamos por un ambiente sin masificaciones, limpio y ordenado, donde puedas entrenar con comodidad y sin esperas. Cada socio recibe un seguimiento personalizado para que pueda progresar de forma constante y segura.
>
> Tanto si estás empezando como si ya tienes experiencia, en Premier Gym S'Escorxador encontrarás un espacio pensado para disfrutar del entrenamiento y convertirlo en un hábito sostenible.

Maquétalo en dos columnas asimétricas (texto a la izquierda, imagen vertical de gran formato a la derecha) o como bloque de texto centrado a 65ch con mucho aire. Elige lo que respire mejor.

### Sección separada — "¿Por qué elegir Premier Gym S'Escorxador?"

Bloque diferenciado visualmente (fondo `--color-sand-50` o negro completo, a criterio). Lista con iconos lineales muy finos, no bullets:

- Gimnasio premium en el centro de Palma.
- Aforo controlado para entrenar sin aglomeraciones.
- Circuito inteligente EGYM.
- Análisis corporal InBody y evaluación BioAge.
- Plan de entrenamiento personalizado.
- Maquinaria de última generación y zona de peso libre.
- Equipo profesional que realiza un seguimiento continuo.
- Sin matrícula y sin permanencia.

Cierre:

> Si estás buscando un gimnasio en Palma de Mallorca donde entrenar con tranquilidad, tecnología y un servicio personalizado, te invitamos a conocer Premier Gym S'Escorxador y descubrir una forma diferente de entrenar.

CTA final: `HAZTE SOCIO` → `/hazte-socio/sescorxador`

---

## PÁGINA 3 — CLUB AVENIDAS (`/clubes/avenidas`)

Misma estructura que S'Escorxador, con este copy literal:

> Premier Gym Avenidas es un gimnasio en Palma de Mallorca, donde entrenar con tranquilidad, tecnología y un servicio personalizado. Premier Gym Avenidas es la elección perfecta.
>
> Nuestro nuevo club nace para ofrecer una experiencia de entrenamiento premium en una de las zonas mejor comunicadas de Palma. Un espacio más amplio, con nuevas zonas de entrenamiento, tecnología de última generación y servicios orientados tanto al rendimiento como al bienestar.
>
> En Premier Gym Avenidas encontrarás un completo circuito inteligente EGYM, análisis corporal InBody, evaluación BioAge, amplias zonas de fuerza y cardio, una exclusiva Recovery Zone para optimizar la recuperación muscular y una sala polivalente destinada a Pilates, Yoga y actividades dirigidas.
>
> Como en todos los clubes Premier Gym, mantenemos un aforo controlado, un ambiente tranquilo y un seguimiento personalizado para que cada entrenamiento sea más eficiente y puedas alcanzar tus objetivos de forma segura.

### "¿Por qué elegir Premier Gym Avenidas?"

- Gimnasio en Avenidas, Palma de Mallorca.
- Gimnasio premium con instalaciones de última generación.
- Circuito inteligente EGYM.
- Análisis corporal InBody y BioAge.
- Recovery Zone: Zona de Sauna + Ice Bath.
- Pilates, Yoga y actividades dirigidas.
- Entrenamiento personalizado.
- Aforo controlado.
- Instalaciones modernas y espacios amplios.
- Ubicación céntrica con excelente acceso.

Cierre:

> Si estás buscando un gimnasio en Palma, un gimnasio en Avenidas, un centro con Pilates en Palma, Yoga en Palma o un gimnasio con tecnología inteligente y seguimiento personalizado, te invitamos a descubrir Premier Gym Avenidas.

CTA final: `HAZTE SOCIO` → `/hazte-socio/avenidas`

> Nota: si aún no hay fotos de Avenidas, usa placeholders elegantes marcados `{{TBD: fotografía Avenidas}}` — nunca stock genérico de gimnasio.

---

## PÁGINA 4 — ESPACIOS (`/espacios`)

Índice de zonas con **fotografía de gran formato** como protagonista. Cada zona ocupa una sección amplia alternando la posición de la imagen (izquierda/derecha) o en formato full-bleed con texto superpuesto en un lateral. Cada una lleva su titular en display y el texto debajo.

**Las fotos son de los dos centros; por ahora se usarán las del primer club.**

### ZONA EGYM
> La Zona EGYM de Premier Gym combina innovación y entrenamiento inteligente. Cada máquina se ajusta automáticamente a tus necesidades para que entrenes mejor, progreses más rápido y disfrutes de una experiencia única en uno de los pocos gimnasios con EGYM en Palma de Mallorca.

### ZONA CARDIO
> Nuestra Zona Cardio cuenta con equipamiento de última generación para que disfrutes de una experiencia cómoda, eficiente y motivadora. Cintas de correr, bicicletas, elípticas y mucho más en un espacio diseñado para mejorar tu resistencia, cuidar tu salud cardiovascular y alcanzar tus objetivos en uno de los gimnasios premium de Palma.

### ZONA DISCOS Y PLACAS
> Entrena con una amplia selección de máquinas de discos y placas diseñadas para trabajar cada grupo muscular con máxima precisión, estabilidad y comodidad. Equipamiento de última generación para disfrutar de un entrenamiento de fuerza seguro y eficaz en Premier Gym.

### ZONA PESO LIBRE
> Nuestra Zona de Peso Libre está equipada con racks, bancos, barras y mancuernas para que puedas entrenar con total libertad. Un espacio amplio y diseñado para desarrollar fuerza, ganar masa muscular y llevar tu entrenamiento al máximo nivel en Premier Gym Palma.

Añadir aquí las **marcas de la maquinaria**: `{{TBD: listado de marcas}}`. Preséntalas como una fila de logos en gris muy claro, discretos, con mucho espacio.

### ZONA RECOVERY
> La exclusiva Recovery Zone de Premier Gym Avenidas redefine la forma de recuperarte después de entrenar. Disfruta de nuestra sauna y ice bath (baño de agua fría), una combinación cada vez más utilizada por deportistas para favorecer la recuperación muscular, reducir la fatiga y mejorar el bienestar. Un espacio diseñado para que recuperarte forme parte de tu entrenamiento y convierta cada visita a Premier Gym en una experiencia completa.

**Importante:** señalar de forma clara pero elegante (etiqueta fina tipo eyebrow, no badge llamativo) que **por el momento la Zona Recovery solo está disponible en Premier Gym Avenidas.**

También existe una **sala polivalente para Pilates, Yoga y actividades dirigidas** en Avenidas (mencionada en el texto del club). Inclúyela como sección si el cliente aporta texto: `{{TBD: copy sala polivalente}}`.

---

## PÁGINA 5 — HAZTE SOCIO (`/hazte-socio`)

**Selector de club.** Dos recuadros grandes, uno junto a otro (apilados en móvil), cada uno con una fotografía del club y el nombre debajo:

- `PREMIER GYM S'ESCORXADOR` → `/hazte-socio/sescorxador`
- `PREMIER GYM AVENIDAS` → `/hazte-socio/avenidas`

Es necesario separar los clubes **porque las cuotas son diferentes**. Deja esto claro con una línea de texto fina sobre los recuadros.

Hover: la imagen escala sutilmente y aparece un overlay oscuro con el nombre en blanco.

### `/hazte-socio/sescorxador`

**Dos membresías principales**, presentadas como dos tarjetas de línea fina (1px), sin sombras, mucho padding interno:

**1. Membresía Mensual**
> Disfruta de acceso ilimitado a Premier Gym con total flexibilidad. Entrena sin permanencia y accede a todas las instalaciones durante el horario de apertura.

Incluye:
- Acceso ilimitado al club.
- Plan de entrenamiento personalizado.
- Uso de todas las zonas e instalaciones.
- App Premier Gym.
- Sin permanencia.

Precio: `{{TBD: precio mensual S'Escorxador}}`

**2. Membresía Trimestral**
> La mejor opción para quienes buscan continuidad y el mejor precio. Disfruta de todos los servicios de Premier Gym con una tarifa más ventajosa durante tres meses.

Incluye:
- Acceso ilimitado al club.
- Plan de entrenamiento personalizado.
- Uso de todas las zonas e instalaciones.
- App Premier Gym.
- Mejor precio por mes.

Precio: `{{TBD: precio trimestral S'Escorxador}}`

Marca la trimestral como opción recomendada con una etiqueta tipográfica discreta (`MEJOR PRECIO POR MES`), nunca con un badge de color.

**Debajo de las membresías, apartado "Accesos Temporales":**

> Entrena en Premier Gym durante tu estancia en Palma.

| | | |
|---|---|---|
| **Day Pass** — Accede a Premier Gym durante un día y disfruta de todas las instalaciones sin necesidad de ser socio. Ideal para probar el club o entrenar durante tu estancia en Palma. | | **20 €** |
| **Week Pass** — Entrena durante 7 días consecutivos con acceso ilimitado a todas las instalaciones. La opción perfecta para vacaciones, viajes de trabajo o estancias cortas. | | **35 €** |
| **15 Day Pass** — Disfruta de acceso ilimitado durante 15 días y vive la experiencia Premier Gym con total flexibilidad. Ideal para estancias más largas o para quienes quieren entrenar antes de decidirse por una membresía. | | **50 €** |

Preséntalo como una lista horizontal con líneas divisorias finas, no como tabla ni como cards de pricing convencionales.

### `/hazte-socio/avenidas`

Misma estructura, con este copy:

**1. Membresía Mensual**
> Disfruta de acceso ilimitado a Premier Gym Avenidas con total flexibilidad. Entrena sin permanencia y accede a todas las instalaciones, incluyendo la exclusiva Zona Recovery con sauna y baño de agua fría, diseñada para mejorar tu recuperación y bienestar.

Incluye:
- Acceso ilimitado al club.
- Zona Recovery (sauna + ice bath).
- Plan de entrenamiento personalizado.
- Uso de todas las zonas e instalaciones.
- App Premier Gym.
- Sin permanencia.

Precio: `{{TBD: precio mensual Avenidas}}`

**2. Membresía Trimestral**
> La mejor opción para quienes buscan continuidad y el mejor precio. Disfruta de todos los servicios de Premier Gym Avenidas, incluida la exclusiva Zona Recovery con sauna y baño de agua fría, para completar tu entrenamiento con una recuperación de primer nivel.

Incluye:
- Acceso ilimitado al club.
- Zona Recovery (sauna + ice bath).
- Plan de entrenamiento personalizado.
- Uso de todas las zonas e instalaciones.
- App Premier Gym.
- Mejor precio por mes.

Precio: `{{TBD: precio trimestral Avenidas}}`

**Accesos Temporales — Avenidas:**

- **Day Pass** — mismo texto — **35 €**
- **Week Pass** — mismo texto — **50 €**
- **15 Day Pass** — mismo texto — **75 €**

**CTA de conversión:** cada membresía y cada pase debe tener un botón. Como aún no hay pasarela de pago definida, enlaza a WhatsApp con mensaje prerrellenado indicando club y modalidad, y deja el código preparado para sustituirlo por el sistema de alta online: `{{TBD: sistema de gestión / pasarela de pago}}`.

---

## PÁGINA 6 — CONTACTO (`/contacto`)

Diseño en dos columnas: información a la izquierda, mapa a la derecha (o mapa full-bleed abajo). Iconos lineales de 1px, nunca emojis.

### Premier Gym S'Escorxador
**Dirección**
Carrer Germans García Peñaranda, 1A
07010 · Palma de Mallorca

### Premier Gym Avenidas
**Dirección**
`{{TBD: dirección completa Avenidas}}`

### Contacto
**Teléfono:** 630 863 949
**WhatsApp:** botón directo `https://wa.me/34630863949` con mensaje prerrellenado — debe ser un elemento destacado, el cliente quiere que puedan escribir directamente desde aquí.
**Email:** premiergymsescorxador@gmail.com

### Horario
Lunes a Viernes: 06:00 – 23:00
Sábados, Domingos y Festivos: 08:00 – 20:00

`{{TBD: confirmar si el horario de Avenidas es el mismo}}`

### Extras a incluir
- **Mapa de Google Maps embebido** por cada club, en escala de grises mediante filtro CSS para no romper la paleta.
- **Formulario de contacto** (nombre, email, teléfono, club de interés, mensaje) con validación en cliente, estados de carga/éxito/error, honeypot antispam y checkbox de consentimiento RGPD enlazando a la política de privacidad. Endpoint en `/api/contacto` con envío por Resend o similar: `{{TBD: proveedor de email}}`.
- **Botón flotante de WhatsApp** persistente en todo el sitio, discreto: círculo blanco, borde 1px, icono lineal negro. Nada de verde WhatsApp.

---

## FOOTER (todas las páginas)

Sobrio, fondo negro `#111111` o arena muy claro. Contiene:

- Logo Premier Gym en versión monocroma
- Enlaces: Nuestros Clubes · Espacios · Hazte Socio · Contacto
- Los dos clubes con su dirección abreviada
- Teléfono, WhatsApp, email
- Horario resumido
- Instagram y redes sociales: `{{TBD: perfiles}}`
- Enlaces legales: Aviso Legal · Política de Privacidad · Política de Cookies
- `© 2026 Premier Gym. Palma de Mallorca.`

---

## SEO Y METADATOS

El briefing repite palabras clave locales de forma deliberada. Respétalo y refuérzalo:

**Keywords objetivo:** gimnasio en Palma, gimnasio en Palma de Mallorca, gimnasio premium Palma, gimnasio Avenidas, gimnasio S'Escorxador, EGYM Palma, Pilates en Palma, Yoga en Palma, sauna e ice bath Palma, day pass gimnasio Palma.

**Implementa:**
- `metadata` por ruta en el App Router: title único (patrón `%s | Premier Gym`), description de 150–160 caracteres, canonical.
- Open Graph y Twitter Card con imagen 1200×630 por página.
- **JSON-LD `SportsActivityLocation`** (o `HealthClub`) por cada club, con `name`, `address` (PostalAddress), `telephone`, `openingHoursSpecification`, `geo`, `image`, `priceRange`, `amenityFeature`.
- `Organization` con `sameAs` a redes sociales.
- `BreadcrumbList` en páginas internas.
- `sitemap.ts` y `robots.ts` nativos de Next.
- Headings semánticos: un solo `h1` por página, jerarquía correcta.
- Textos alternativos descriptivos y con contexto local en las imágenes.

---

## RESPONSIVE

- Mobile first. Breakpoints: 640 / 768 / 1024 / 1280 / 1536.
- En móvil: los dos botones del hero se apilan a ancho completo; el menú overlay ocupa 100dvh; las secciones de Espacios pasan a imagen sobre texto.
- Usa `dvh` en lugar de `vh` para evitar saltos con la barra del navegador móvil.
- Áreas táctiles mínimas de 44×44px.
- Tipografía fluida con `clamp()`.

---

## ASSETS DISPONIBLES

En `/public/assets/`:
- `logo/premier-gym.svg` — logotipo vectorial (versión negra sobre fondo claro). Genera también la variante blanca invirtiendo el `fill` vía CSS `currentColor` si es posible.
- Fotografías del club S'Escorxador: zona general, zona E-GYM, cardio, máquinas de disco y placas, peso libre, vestuarios, y **cuadros y arte** (el club tiene obra colgada — úsala, refuerza el posicionamiento de galería de arte).
- Vídeos del club: `{{TBD: confirmar formatos y comprimir a WebM + MP4}}`

Optimiza todo a AVIF/WebP con fallback. Genera `blurDataURL` para el placeholder de carga.

---

## LEGAL Y CUMPLIMIENTO

- Banner de cookies con consentimiento granular (necesarias / analíticas / marketing), bloqueando scripts hasta la aceptación. Estilo minimalista: barra inferior blanca, línea fina, sin colores.
- Páginas de Aviso Legal, Política de Privacidad y Política de Cookies: `{{TBD: textos a aportar por el cliente}}`.
- Analítica respetuosa con la privacidad: `{{TBD: Google Analytics 4 o Plausible}}`.

---

## ENTREGA

1. Empieza por el sistema de diseño: tokens Tailwind, tipografía, componentes base (`Button`, `Container`, `Section`, `Heading`, `Eyebrow`, `Divider`, `FadeIn`).
2. Después el layout global: header, menú overlay, footer, botón de WhatsApp.
3. Luego página a página, en el orden de este documento.
4. Extrae todo el copy a `content/` en objetos TypeScript tipados, para que el cliente pueda editarlo sin tocar componentes. Deja la estructura lista para migrar a un CMS (Sanity o Payload) más adelante.
5. Al terminar cada página, revisa contra la sección de identidad visual y responde: ¿esto parece una galería de arte o parece un gimnasio? Si parece un gimnasio, quita elementos y añade espacio.

---

## RECORDATORIO FINAL

El error más probable en este proyecto es hacer una web de gimnasio bonita. El objetivo es otro: **un espacio digital premium, silencioso y elegante, donde el entrenamiento se presenta como parte de una experiencia cuidada.** Ante la duda entre añadir algo y quitarlo, quítalo.
