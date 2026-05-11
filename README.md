# Elegant Corti

Landing page para **Elegant Corti**, una vitrina digital enfocada en cortinas y persianas a medida. El sitio presenta los servicios, el catalogo visual, la galeria de referencia y los canales de contacto de la marca, con una conversion principal orientada a WhatsApp.

## Objetivo Del Proyecto

El objetivo principal es ofrecer una experiencia elegante, clara y responsive para que el visitante pueda:

- Conocer la propuesta visual de Elegant Corti.
- Explorar servicios de cortinas, persianas e instalacion.
- Ver una seleccion de productos y referencias visuales.
- Contactar rapidamente por WhatsApp.
- Consultar datos de telefono, correo y ubicaciones.

## Caracteristicas Principales

- Landing page de una sola pagina con navegacion por secciones.
- Hero visual con imagen de fondo y animacion tipo escritura.
- Botones de accion conectados a WhatsApp con mensajes pre-cargados.
- Catalogo visual sin precios visibles, orientado a cotizacion directa.
- Galeria tipo masonry para mostrar ambientes e inspiracion.
- Seccion de contacto enfocada en WhatsApp, llamada, correo y ubicaciones.
- Footer con enlaces internos, horarios, contacto y CTA de asesoria.
- Diseno responsive para movil, tablet y escritorio.
- Identidad visual oscura con detalles dorados y vino tinto.

## Tecnologias Usadas

- **React 18**: construccion de la interfaz por componentes.
- **Vite**: servidor de desarrollo y generacion del build.
- **Tailwind CSS**: estilos, layout responsive y utilidades visuales.
- **Framer Motion**: animaciones de entrada, hover y transiciones.
- **React Icons**: iconos de WhatsApp, telefono, correo, ubicacion y menu.
- **PostCSS / Autoprefixer**: procesamiento CSS y compatibilidad.

## Librerias Del Proyecto

Dependencias principales:

- `react`
- `react-dom`
- `framer-motion`
- `react-icons`
- `lucide-react`
- `clsx`
- `tailwind-merge`

Dependencias de desarrollo:

- `vite`
- `@vitejs/plugin-react`
- `tailwindcss`
- `postcss`
- `autoprefixer`

## Estructura Del Proyecto

```txt
Elegant corti/
|-- public/
|   |-- logo.png
|   |-- hero_curtains_1778263576711.png
|   |-- blackout_curtains_1778263646696.png
|   `-- sheer_elegance_curtains_1778263662180.png
|-- src/
|   |-- components/
|   |   |-- Navbar.jsx
|   |   |-- Hero.jsx
|   |   |-- Services.jsx
|   |   |-- Catalog.jsx
|   |   |-- Gallery.jsx
|   |   |-- Contact.jsx
|   |   |-- Footer.jsx
|   |   `-- FloatingWhatsApp.jsx
|   |-- utils/
|   |   `-- whatsapp.js
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
|-- tailwind.config.js
|-- postcss.config.js
|-- vite.config.js
|-- ANALISIS_PROYECTO.txt
`-- README.md
```

## Componentes

### `Navbar.jsx`

Menu superior fijo con navegacion interna hacia las secciones principales:

- Inicio
- Servicios
- Catalogo
- Galeria
- Contacto

Incluye un CTA de cotizacion conectado a WhatsApp.

### `Hero.jsx`

Primera pantalla del sitio. Incluye imagen de fondo, texto principal, botones de accion y animacion tipo escritura para el mensaje:

```txt
Transformamos tus
Espacios en Arte
```

### `Services.jsx`

Presenta los servicios principales de la marca:

- Cortinas Blackout
- Sheer Elegance
- Persianas Modernas
- Instalacion Especializada

### `Catalog.jsx`

Catalogo visual de productos y estilos. Cada producto dirige a WhatsApp para solicitar informacion o cotizacion.

Productos actuales:

- Terciopelo Real
- Seda Horizonte
- Sheer Dorado
- Negro Obsidiana
- Lino Natural
- Vino Royal

### `Gallery.jsx`

Galeria visual tipo masonry para mostrar ambientes, inspiracion y referencias de instalacion.

### `Contact.jsx`

Seccion de contacto orientada a conversion directa. Incluye:

- Boton de WhatsApp.
- Boton de llamada.
- Correo electronico.
- Ubicaciones enlazadas a Google Maps.
- CTA para agendar asesoria.

### `Footer.jsx`

Cierre del sitio con descripcion de la marca, enlaces internos, horarios, datos de contacto y acceso a WhatsApp.

### `FloatingWhatsApp.jsx`

Boton flotante de WhatsApp visible durante la navegacion para facilitar el contacto rapido.

## WhatsApp

La utilidad `src/utils/whatsapp.js` centraliza el numero y la generacion de enlaces:

```js
export const WA_NUMBER = '573229064201';

export function whatsappLink(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
```

Esto permite actualizar el numero o reutilizar mensajes de contacto sin repetir logica en cada componente.

## Contacto Configurado

- WhatsApp / telefono: `322 906 4201`
- Numero interno para enlaces: `573229064201`
- Email: `mfna24brayan@gmail.com`

## Diseno Visual

La interfaz esta construida con una estetica sobria y elegante:

- Fondo negro.
- Detalles dorados.
- Acentos vino tinto.
- Titulos con tipografia serif.
- Texto general con tipografia sans.
- Imagenes grandes y contrastadas.
- Animaciones suaves con Framer Motion.

Colores personalizados definidos en `tailwind.config.js`:

```js
elegant: {
  black: '#050505',
  wine: '#4a0404',
  gold: '#D4AF37',
  'gold-light': '#F1D592',
  gray: '#1A1A1A',
  white: '#FFFFFF',
}
```

## Comandos

Instalar dependencias:

```bash
npm install
```

Levantar servidor de desarrollo:

```bash
npm.cmd run dev
```

Generar build de produccion:

```bash
npm.cmd run build
```

Previsualizar build:

```bash
npm.cmd run preview
```

Publicar en GitHub Pages:

```bash
npm.cmd run deploy
```

En PowerShell, si `npm run ...` falla por politica de ejecucion de scripts, usar `npm.cmd`:

```bash
npm.cmd run dev
```

## Build

La configuracion de produccion se encuentra en `vite.config.js`:

```js
base: '/Elegant-Corti/',
build: {
  outDir: 'dist',
  minify: 'esbuild',
  sourcemap: false,
}
```

`esbuild` viene integrado con Vite y permite generar el build sin dependencias adicionales de minificacion.

## Despliegue En GitHub Pages

Repositorio configurado:

```txt
https://github.com/brayannu123/Elegant-Corti.git
```

URL esperada del sitio publicado:

```txt
https://brayannu123.github.io/Elegant-Corti/
```

Configuraciones necesarias ya incluidas:

- `vite.config.js` usa `base: '/Elegant-Corti/'`.
- `package.json` incluye `homepage`.
- `package.json` incluye `predeploy` y `deploy`.
- `gh-pages` esta instalado como dependencia de desarrollo.
- `.gitignore` evita subir `node_modules`, `dist` y archivos de entorno.

Flujo recomendado para publicar cambios:

```bash
git add .
git commit -m "actualizar landing elegant corti"
git push
npm.cmd run deploy
```

Despues del primer deploy, en GitHub se debe revisar:

1. Entrar al repositorio en GitHub.
2. Ir a `Settings`.
3. Abrir `Pages`.
4. Seleccionar la rama `gh-pages`.
5. Seleccionar carpeta `/ (root)`.
6. Guardar la configuracion.

GitHub puede tardar unos minutos en mostrar la version publicada.

## SEO Basico

El archivo `index.html` incluye:

- Idioma principal en espanol.
- Titulo del sitio.
- Meta description.
- Favicon con `logo.png`.
- Etiquetas Open Graph basicas.
- Twitter card.

## Recomendaciones Futuras

- Reemplazar imagenes externas por fotografias reales del negocio.
- Optimizar imagenes para web antes de publicar.
- Revisar visualmente la experiencia en movil, tablet y escritorio.
- Ejecutar `npm.cmd run build` antes de desplegar.
- Mantener actualizado el correo y numero de WhatsApp en `src/utils/whatsapp.js` y en la seccion de contacto.

## Nota Sobre `dist`

La carpeta `dist/` contiene la version generada para produccion. Cuando se cambie codigo en `src/`, se debe volver a ejecutar:

```bash
npm.cmd run build
```

para actualizar los archivos finales.
