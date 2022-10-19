# Git Commit - API Server
### English: 
This API Server is intended for a technical test demonstrating Restful API knowledge using Nest. It makes requests to a Git Hub API server, retrieving commits from a specific repository, selecting and reducing the information provided by the Git Hub API; It also allows sending email using Gmail. You have 3 End Points:
* git-commits/last: Publish the last 3 commits of a given repository.
* git-commits/all: Publish all commits of a given repository.
* /sendmail: Enables sending email from a Website.
### Español:
Este Servidor API está destinado a una prueba técnica por la cual se demuestra conocimientos sobre API Restful usando Nest. El mismo realiza peticiones a un servidor API de Git Hub, recuperando commits de un repositorio específico, seleccionando y reduciendo la información proporcionada por el API Git Hub; además permite el envío de correo electrónico usando Gmail. Se tiene 3 End Points:
* git-commits/last: Publica los últimos 3 commits de un repositorio dado.
* git-commits/last: Publica todos los commits de un repositorio dado.
* /sendmail: Posibilita el envío de correo electrónico desde un Sitioweb.
## Comenzando
_Estas instrucciones te permitirán obtener una copia del proyecto para realizar las pruebas respectivas o continuar con su desarrollo._
## Requisitos
_Lo que necesitas para instalar el Servidor API en tu computadora local:_
* Clonar el [Servidor API](https://github.com/leoerickp/Git-Commit-APIServer.git).
## Instalación
_Dentro de la carpeta donde se clonó el proyecto:_
* Instalar las dependencias:
```console
npm install
```
## Configuración
_Dentro de la carpeta donde se clonó el proyecto, es necesario configurar las variables de entorno del servidor API:_
* Con el editor de su preferencia crear un archivo con el nombre **.env** en la carpeta raiz:
* Como el ejemplo **.sample.env**, agregar las siguientes variables de entorno:
```javascript
PORT=
TOKEN=
EMAIL=
EPASSWORD=
EMAILTO=
GIT_OWNER=
REPO=
```
* Asignar a **PORT** con el número puerto disponible para el Servidor API. Ej. **PORT=3000**.
* Asignar a **TOKEN** el token obtenido de Git Hub ([Ver documentación](https://docs.github.com/es/rest)).
* Asignar a **EMAIL** la dirección de correo electrónico de Google que será utilizado para enviar el correo.
* Asignar a **EPASSWORD** la contraseña proporcionada por Google para usarse en aplicaciones ([Ver documentación](https://support.google.com/accounts/answer/185833)). 
* Asignar a **EMAILTO** la dirección de correo electrónico que será utilizado como destinatario de los correos. Estos contendrán el mensaje proporcionado del sitio Web.
* Asignar a **GIT_OWNER** el usuario propietario de Git Hub. Ej. **GIT_OWNER=leoerickp**.
* Asignar a **REPO** el repositorio de Git Hub para obtener los commit. Ej.**REPO=Git-Commit**.
---------------
## Ejecución
_Dentro de la carpeta donde se clonó el proyecto:_
* Ejecutar como desarrollador:
```console
npm run start:dev
```
## Características de los End Points
* git-commits/last: Es un End Point GET que no pasa ningún dato, respondiendo con un array con los últimos 3 commits con un JSON como:
```json
{
    "author": {
        "name": "Leo Pereyra",
        "email": "leoerickp@gmail.com",
        "date": "2022-10-18T13:58:39Z"
    },
    "committer": {
        "name": "Leo Pereyra",
        "email": "leoerickp@gmail.com",
        "date": "2022-10-18T13:58:39Z"
    },
    "message": "README.md and Index.html modified",
    "author_avatar_url": "https://avatars.githubusercontent.com/u/112339552?v=4",
    "author_html_url": "https://github.com/leoerickp",
    "commiter_avatar_url": "https://avatars.githubusercontent.com/u/112339552?v=4",
    "commiter_html_url": "https://github.com/leoerickp"
}
```
* git-commits/all: Es un End Point GET que no pasa ningún dato, respondiendo con un array como el caso anterior.
* /sendmail: Es un End Point POST que envía en el **body** la dirección del correo electrónico **(email)** y el mensaje del correo **(msg)**, devolviendo un JSON como:
```json
{
    "msg": "success"
}
```
## Autor
* [Leo Erick Pereyra](https://github.com/leoerickp).
## Licencia
Este proyecto está bajo la licencia del HONOR.


<img height="200" width="200" src="![9c0250ae61df31af88cb04ecba7e7cd1](https://user-images.githubusercontent.com/112339552/196771404-8a8c3d42-67d0-4c9d-b589-6f05dedf1235.jpg)">
</div>
