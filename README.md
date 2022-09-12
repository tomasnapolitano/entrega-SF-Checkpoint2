------------------------------------------------------------
# Segundo Checkpoint - SkillFactory React 2022 - Avalith.
------------------------------------------------------------
## Objetivos:
### Migrar una página desarrollada en Js Vanilla a React.
##### Aplicar lo aprendido en Bootcamp:
- Interactuar con formularios y manejo de información.
- Realizar peticiones a APIs externas.
- Trabajar con asincronismos y promesas.
- Manejo de componentes con React.
- Ruteo usando _react-router-dom 6.3.0_
- Uso de Hooks.
- Maquetado de página web.
- Uso de librerias externas como _Material UI_
------------------------------------------------------------
## Contenido:
Una SPA (single page application) compuesta por tres rutas:
- Formulario: Toma la información cargada y la devuelve por
consola en formato Json (console.log)
- Usuarios: Realiza una petición a la API
https://jsonplaceholder.typicode.com/users
y renderiza el resultado en el DOM, en formato de tabla.
- Personajes: realiza una petición a la API
https://rickandmortyapi.com/api/character
y muestra los resultados en forma de tarjeta. Incluye detalle,
buscador y paginación.

### Deploy en Vercel: https://react-skill-factory-vite-app.vercel.app/
------------------------------------------------------------
## Recomendaciones para correr Vite:

- Vite requiere Node.js versión 14.18+, 16+. Sin embargo, 
  algunas plantillas requieren una versión superior de 
  Node.js para funcionar, actualice si su administrador de
  paquetes advierte al respecto.
  
------------------------------------------------------------

## //-----Pasos para Ejecutar el proyecto con Vite-----//

Abrir una terminal en la carpeta de destino y clonar el repositorio,
mediante los comandos:

- git init
- git clone https://github.com/Ferclemens/React-SkillFactory-ViteApp.git

Ingresar a la carpeta del proyecto:

- cd React-SkillFactory-ViteApp

Instalar las dependencias:

- npm install

Una vez terminada la instalación, inicializamos con:

- npm run dev

la ruta del localhost figura en "local".
Listo!.

##### ✨Happy Coding!✨
