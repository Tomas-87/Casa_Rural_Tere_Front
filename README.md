# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


1. Instalamos vite npm create vite@latest  elegimos el nombre del proyecto y elegimos react y js.
Instalamos dependencias npm i,   npm i react-router-dom axios

creamos la petición con axios al back

2. pintamos la Home para ver si funciona

3. Creamos el Header con un botón con el  teléfono de contacto que al clicarlo llame directamente al numero y un pequeño parrafo de donde se encuentra.

4. Ponemos el título h1 con el nombre de la casa y un menu desplegable al lado donde iran las rutas para las demas paginas devera desplegarse un div que contendra los Links de las otras paginas y al clicar nos llevara a ellas. 

5. crearemos tambien una carpeta para guardar todas las rutas y importarlas a App.jsx

6. A continuación del titulo pondremos las fotos principales de la casa que vallan pasando poco a poco y debajo un botón para ir a todas las fotos.
lo sacamos en un componente porque se esta cargando la Home intentaremos hacer lo mismo con los demás. deveremos sacarlo del array que nos viene de mongoAtlas que es donde estan guardadas las urls.

7. introducimos una descripción de la casa diciendo donde esta situada y su capacidad deveremos sacarlo del array que nos viene de mongoAtlas

8. Debajo ponemos los precios por temporadas y debajo la puntuación de booking para generar confianza con un enlace para que puedan ver los comentarios de booking.

9. Despues pondremos unas reseñas falsas que hemos creado en mongoAtlas con imagenes generadas por la ia.

10. Entraremos en google maps para poner la ubicacion de la casa y  le daremos a compartir alli copiaremos el iframe para poder traernos el mapa de google a nuestra pagina facil copiar y pegar. Tambien habra un enlace a maps con la dirección que al clicar nos llevara asta nuestra casa.

11. crearemos el componente Footer donde ira otra vez el teléfono contacto que nos lleve directos a whatsApp, la calle donde se encuentra y los derechos reservados.

12. Añadimos la pagiana de todas la img donde se mostraran todas las img de la casa con una descripcion debajo, lo traeremos todo de mongo

13. crear la carpeta de las rutas con las rutas de las paginas y ponerlo en App para que las renderice 

14. añadiremos las rutas en la hamburguesa para el menu desplegable

15. crea pagina todas las imagenes

16. creo otra pagina de que visitar y su ruta en el menu desplegable, esa pagina nos llevara a los enlaces donde podremos ir a las diferentes paginas de las cosas que visitar con sus fotos y descripciones empezaremos por Valderrrobres, creando la pagina y la ruta.

17. creamos un componente layaut con Oulet para no tener que meter el header y el footer a mano cada vez.

18. Seguimos creando otra ruta en que visitar con el Parrizal