# Elegant Corti

Landing page para **Elegant Corti**, una vitrina digital de cortinas y persianas a medida. El objetivo del sitio es mostrar servicios, catálogo visual, galería y datos de contacto, llevando la conversión principal a WhatsApp.

## Estado Actual

El proyecto ya fue revisado y ajustado con enfoque de presentación comercial:

- Se corrigieron textos con caracteres dañados por codificación.
- Se quitaron precios del catálogo para evitar confusión de moneda.
- Se quitó la sección de testimonios.
- Se quitó el formulario funcional/decorativo de contacto.
- Se quitaron newsletter y enlaces sociales falsos.
- Se actualizó el contacto a:
  - WhatsApp / teléfono: `322 906 4201`
  - Email: `mfna24brayan@gmail.com`
- Se agregaron CTAs reales hacia WhatsApp con mensajes pre-cargados.
- Se cambió el build de `terser` a `esbuild`.
- Se eliminó contenido sobrante del template de React.
- Se agregó animación tipo escritura en el título del Hero:
  - `Transformamos tus`
  - `Espacios en Arte`

## Tecnologías Usadas

- **React 18**: construcción de la interfaz por componentes.
- **Vite**: servidor de desarrollo y build del proyecto.
- **Tailwind CSS**: estilos, responsive design y utilidades visuales.
- **Framer Motion**: animaciones de entrada, hover y transiciones.
- **React Icons**: iconos de WhatsApp, teléfono, correo, menú y otros elementos.
- **PostCSS / Autoprefixer**: procesamiento CSS para compatibilidad.

## Librerías Principales

Dependencias de producción:

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

Nota: `lucide-react`, `clsx` y `tailwind-merge` están instaladas, pero actualmente no son necesarias en el código principal revisado. Se pueden mantener o limpiar más adelante.

## Estructura Del Proyecto

```txt
Elegant corti/
├─ public/
│  ├─ logo.png
│  ├─ hero_curtains_1778263576711.png
│  ├─ blackout_curtains_1778263646696.png
│  └─ sheer_elegance_curtains_1778263662180.png
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Services.jsx
│  │  ├─ Catalog.jsx
│  │  ├─ Gallery.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Footer.jsx
│  │  └─ FloatingWhatsApp.jsx
│  ├─ utils/
│  │  └─ whatsapp.js
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
├─ ANALISIS_PROYECTO.txt
└─ README.md
```

## Componentes

### `Navbar.jsx`

Menú superior fijo con navegación por secciones:

- Inicio
- Servicios
- Catálogo
- Galería
- Contacto

Incluye botón **Cotizar Ahora** conectado a WhatsApp.

### `Hero.jsx`

Primera pantalla del sitio. Contiene:

- Imagen de fondo.
- Texto principal con animación tipo escritura.
- Botón para ir al catálogo.
- Botón directo a WhatsApp.

### `Services.jsx`

Muestra los servicios principales:

- Cortinas Blackout
- Sheer Elegance
- Persianas Modernas
- Instalación Especializada

### `Catalog.jsx`

Catálogo visual sin precios. Cada producto tiene botón para cotizar por WhatsApp.

Productos actuales:

- Terciopelo Real
- Seda Horizonte
- Sheer Dorado
- Negro Obsidiana
- Lino Natural
- Vino Royal

### `Gallery.jsx`

Galería visual tipo masonry con imágenes de referencia. Lo ideal a futuro es reemplazarlas por fotos reales de trabajos de Elegant Corti.

### `Contact.jsx`

Sección informativa y comercial. No usa formulario. Contiene:

- WhatsApp
- Llamada
- Correo
- Ubicaciones enlazadas a Google Maps
- CTA de asesoría

### `Footer.jsx`

Cierre del sitio con:

- Descripción corta de la marca.
- Acceso a WhatsApp.
- Enlaces internos.
- Horarios.
- Correo y teléfono.
- CTA para agendar asesoría.

### `FloatingWhatsApp.jsx`

Botón flotante fijo de WhatsApp con mensaje pre-cargado.

## Utilidad De WhatsApp

El archivo `src/utils/whatsapp.js` centraliza el número y la generación de enlaces:

```js
export const WA_NUMBER = '573229064201';

export function whatsappLink(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
```

Esto permite cambiar el número una sola vez si se necesita actualizar en el futuro.

## Comandos

Instalar dependencias:

```bash
npm install
```

Levantar servidor de desarrollo:

```bash
npm.cmd run dev
```

Generar build de producción:

```bash
npm.cmd run build
```

Previsualizar build:

```bash
npm.cmd run preview
```

En PowerShell puede fallar `npm run ...` por política de ejecución de scripts. En ese caso usar `npm.cmd`, por ejemplo:

```bash
npm.cmd run dev
```

## Configuración De Build

En `vite.config.js` se usa:

```js
build: {
  outDir: 'dist',
  minify: 'esbuild',
  sourcemap: false,
}
```

Se usa `esbuild` porque viene incluido con Vite y evita depender de `terser`.

## Diseño Visual

La identidad visual usa:

- Fondo negro elegante.
- Detalles en dorado.
- Color vino tinto para acentos.
- Tipografía serif para títulos.
- Tipografía sans para textos generales.
- Tarjetas con imágenes grandes.
- Animaciones suaves con Framer Motion.

Colores definidos en `tailwind.config.js`:

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

## Contacto Configurado

- WhatsApp: `322 906 4201`
- WhatsApp link interno: `573229064201`
- Email: `mfna24brayan@gmail.com`

## Pendientes Recomendados

- Reemplazar imágenes externas de Unsplash por fotos reales del negocio.
- Revisar si `lucide-react`, `clsx` y `tailwind-merge` se deben eliminar si no se usan.
- Actualizar `ANALISIS_PROYECTO.txt` si se quiere que refleje solo el estado final y no el diagnóstico inicial.
- Ejecutar `npm.cmd run build` después de cada bloque grande de cambios.
- Revisar visualmente en móvil, tablet y desktop.

## Nota Sobre `dist`

La carpeta `dist/` contiene el build generado. Si se cambia código en `src/`, hay que volver a ejecutar:

```bash
npm.cmd run build
```

para que `dist/` quede actualizado.
