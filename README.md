Conversor de imágenes en aplicación de escritorio
=====================

El siguiente proyecto es una aplicación de escritorio de convertidor de imágenes, el cual se encarga de buscar una imagen desde el ordenador para su conversión en cualquiera de los siguientes formatos: GIF, BMP, PNG y JPG.

### Requisitos

+ Se requiere instalar la librería express de nodeJS para el despliegue del servidor nodeconnect.
+ Se requiere instalar la librería librería multiparty para el manejo del archivo en el endpoint.
+ Se requiere el uso de la librería body-parser para recibir los parámetros en formato json  

### Arquitecturas implementada

La arquitectura que se manejó, fue la arquitectura atómica, la cual consiste en dividir lo que más se pueda cada uno de los componentes, para independizar la lógica o funcionalidades y distribuir de manera eficiente los archivos, donde se pueda obtener un fácil acceso en cuanto a importaciones y comunicación de datos. Así mismo, para simplificar las peticiones dentro de cada uno de estos componentes, parametrizando los datos que van a ser suministrados a componentes principales por medio de containers.

### Librerías Implementadas
+ **Express:**
Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.
El comando para la instalación de la librería Express, en el sistema operativo windows: $ npm install express

+ **Multiparty:** 
Este es un módulo node.js disponible a través del registro npm. Multiparty nos ayuda a analizar solicitudes http con tipo de contenido, también conocido como cargas de archivos.multipart/form-data.
El comando para la instalación de la librería Multiparty, en el sistema operativo windows: npm install multiparty

+ **Dotenv:** 
Dotenv es un módulo de dependencia cero que carga variables de entorno desde un archivo .env en process.env. El almacenamiento de la configuración en el entorno por separado del código se basa en la metodología de la aplicación de doce factores.
El comando para la instalación de la librería Multiparty, en el sistema operativo windows: npm install dotenv

+ **Electron:** 
Permite el desarrollo de aplicaciones gráficas de escritorio usando componentes del lado del cliente y del servidor originalmente desarrolladas para aplicaciones web: Node.js del lado del servidor y Chromium como interfaz, Electron es un framework hibrido de js que permite emular la web en forma de escritorio.
Para más información sobre la libreria electron y su ecosistema: <a href="https://www.electronjs.org/">Electron</a>


### ¿Cómo ejecutar  la aplicación?

1. Descargar el archivo ejecutable.
2. Abrir la aplicación y acceder a la interfaz principal.
3. Seleccionar la imagen a convertir almacenada en el ordenador.
4. Seleccionar el formato al cual se desea convertir.
5. Descargar el archivo convertido.

### Para el desarrollador

1. Instalar las dependencias de nodejs con npm i.
2. Iniciar el entorno de desarrollo con npm run start.
