# Despliegue de aplicaciones multi-entorno
Este repositorio consiste en una prueba de despliege de diferentes aplicaciones conectadas entre sí en dos entornos distintos, desarrollo y producción, cada uno con una aplicación web, una base de datos y una caché. La caché sólo se despliega en el entorno de producción y los datos de la base de datos son diferentes según el entorno.<br>
La aplicación web se conecta tanto a la base de datos como a la caché y muestra el estado de la conexión, si una cae se muestra en la web.<br>
Tanto la base de datos como la caché cuentan con un servicio separado al cual acceder y manipular los datos, phpmyadmin para conectarse con la base de datos y phpredisadmin para conectarse con la caché.<br>
Sólo hay un Dockerfile que es el de la aplicación web, las otras imágenes provienen de docker hub y todo se despliega mediante docker compose.<br>
![Diagrama de la infraestructura](./Diagrama.png)

## Desplegar Dev
Para desplegar el entorno de desarrollo basta con ejecutar el siguiente comando:
`docker-compose -f compose-dev.yaml up`

* Para acceder a la aplicación web hay que entrar en: https://localhost
> Hay que aceptar el certificado ya que está autofirmado.

* Para acceder al servicio para administrar la base de datos se debe entrar en la siguiente web en localhost: http://localhost:8081
> Con usuario `user` y contraseña `pass`.

## Desplegar Producción
Desplegar el entorno de producción:
`docker-compose up`

* Acceder a la aplicación web: https://localhost
* Administrar la base de datos: http://localhost:8081
> Con usuario `user` y contraseña `pass`.

* Administrar la caché: http://localhost:8082
> La caché no tiene usuario ni contraseña.
