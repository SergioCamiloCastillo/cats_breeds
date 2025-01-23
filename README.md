## Cat Breeds APP

Esta es una aplicación realizada en React Native/TypeScript, con arquitectura limpia, usando Redux para el manejo del estado de la app. Muestra información acerca de razas de gatos, y muestra esta información, de acuerdo al API The Cat API.

## Caracteristicas
* Splash Screen con GIF
* Pantalla principal mostrando una lista de razas, con la opción de seleccionar para ver mas detalle y ademas cuenta con un filtro por raza.
* Pantalla de detalle donde se encuentra más informacion acerca de la raza seleccionada
* Indicador de carga en la obtencion de datos, para que se vayan mostrando de 10 en 10, con el fin de mejorar el rendimiento en la APP.

## Herramientas
* React Native CLI / TypeScript
* Redux toolkit - Manejo del estado global
* Axios - Al momento de consumir la API

## Instalación
1. Clona el repositorio:
    git clone https://github.com/SergioCamiloCastillo/cats_breeds.git
2. Instala dependencias
    npm install
3. Crea en archivo .env, tomando como ejemplo .env.example, con las mismas variables agregandole el API_KEY, que genere el API de "The Cat API"
4. Correr el proyecto
 * En IOS: npx react native run-ios
 * En Android: npm run android
