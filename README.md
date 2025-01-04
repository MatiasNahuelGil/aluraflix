# Aluraflix

Este proyecto es una aplicación web construida con React que permite a los usuarios gestionar videos de manera sencilla. La aplicación incluye funcionalidades para subir, editar y eliminar videos, además de visualizar información sobre equipos relacionados.

## Características

- **Subir videos**: Los usuarios pueden agregar nuevos videos a través de un formulario intuitivo.
- **Editar videos**: Modifica detalles de los videos existentes.
- **Eliminar videos**: Elimina videos no deseados de manera rápida y fácil.
- **Gestión de equipos**: Organiza y muestra información sobre los equipos asociados a los videos.

## Tecnologías utilizadas

- **React**: Para construir la interfaz de usuario.
- **React Router**: Para gestionar la navegación entre las diferentes páginas.
- **Styled Components**: Para aplicar estilos modernos y modulares a los componentes.

## Cómo ejecutar el proyecto

### Requisitos previos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos para la instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/nombre-del-proyecto.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd nombre-del-proyecto
   ```

3. Instala las dependencias necesarias:

   ```bash
   npm install
   # o si usas yarn
   yarn install
   ```

4. Inicia la aplicación en modo desarrollo:

   ```bash
   npm start
   # o si usas yarn
   yarn start
   ```

5. Abre la aplicación en tu navegador en [http://localhost:3000](http://localhost:3000).

## Estructura del proyecto

La aplicación sigue una estructura organizada para facilitar la mantenibilidad y escalabilidad:

- **Componentes**: Elementos reutilizables como formularios, banners y secciones de equipo.
- **Contexto**: Gestión del estado global de la aplicación usando el patrón Context API.
- **Páginas**: Vistas principales como la página de inicio y la de creación de videos.
- **Rutas**: Configuración de navegación entre páginas usando `react-router-dom`.

## Uso

1. **Página principal**: Muestra los equipos y videos existentes.
2. **Formulario de videos**: Permite agregar un nuevo video completando los campos necesarios.
3. **Gestión de videos**: Edita o elimina videos desde la interfaz principal.
