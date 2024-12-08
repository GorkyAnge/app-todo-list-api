# ToDoList API

Este proyecto es una API REST que permite gestionar una lista de tareas (ToDoList) con operaciones CRUD: crear, listar, actualizar el estado y eliminar tareas. La API está pensada para ser consumida por un frontend o cualquier cliente que necesite llevar un control de tareas.

## Características

- **Crear Tareas (POST /tasks):** Permite crear una tarea con `title` y `description`.
- **Listar Tareas (GET /tasks):** Retorna todas las tareas almacenadas.
- **Actualizar Estado (PATCH /tasks/:id):** Actualiza el campo `completed` de una tarea específica.
- **Eliminar Tarea (DELETE /tasks/:id):** Elimina una tarea de la lista.

Cada tarea tiene un `title`, `description`, `createdAt` y un estado `completed`.

## Tecnologías utilizadas

- **Backend:** Node.js, Express
- **Base de datos:** MongoDB (Atlas)
- **ORM:** Mongoose
- **Variables de entorno:** dotenv
- **Pruebas:** Jest, Supertest
- **CI/CD:** GitHub Actions
- **Despliegue:** Heroku


## Configuración del Entorno de Desarrollo

1. Clona el repositorio:
   git clone https://github.com/tu-usuario/todo-list-api.git
   cd todo-list-api

2. Instala dependencias:
   npm install

3. Configura las variables de entorno en `.env`:
   MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/<dbname>?retryWrites=true&w=majority
   PORT=3000

4. Ejecuta el proyecto en desarrollo:
   npm start

5. Pruebas:
   npm test

## Pipeline CI/CD

El proyecto cuenta con un pipeline en GitHub Actions que se ejecuta al hacer push a la rama `main`. El pipeline realiza los siguientes pasos:

1. Checkout del código
2. Instalación de dependencias
3. Ejecución de pruebas unitarias e integración (npm test)
4. Construcción de la imagen Docker
5. Despliegue automático a Heroku (si las pruebas pasan)

Esto garantiza que cada commit con nuevas funcionalidades pasa por un control de calidad automatizado antes de llegar a producción.

## Despliegue en Producción

La aplicación está desplegada en Heroku. Una vez configurada la variable MONGODB_URI en Heroku y el stack como container, las nuevas versiones se despliegan automáticamente vía CI/CD.

URL de producción (ejemplo):
https://app-todo-list-d79f5823b201.herokuapp.com/

Endpoints principales:
- POST /tasks
- GET /tasks
- PATCH /tasks/:id
- DELETE /tasks/:id

## Ejemplo de uso con Postman

- Crear tarea:
  Método: POST
  URL: https://app-todo-list-d79f5823b201.herokuapp.com/tasks
  Headers: Content-Type: application/json
  Body (JSON):
    {
      "title": "Nueva tarea",
      "description": "Esta es la descripción de la tarea"
    }

  Respuesta exitosa:
    {
      "_id": "675533e01555196abbd723a4",
      "title": "Nueva tarea",
      "description": "Esta es la descripción de la tarea",
      "completed": false,
      "createdAt": "2024-12-08T05:51:28.669Z",
      "__v": 0
    }

## Ventajas de implementar CI/CD y pruebas

- Entrega continua: Cada cambio en main se prueba y despliega automáticamente.
- Calidad: Las pruebas unitarias y de integración validan la funcionalidad y evitan regresiones.
- Rapidez: Sin intervención manual, las funcionalidades llegan más rápido a producción.
- Trazabilidad: Cada despliegue está asociado a un commit y conjunto de pruebas.

## Desafíos enfrentados

- Configuración segura de variables de entorno (MONGODB_URI) en Heroku.
- Ajuste del pipeline para ejecutar las pruebas antes de desplegar.
- Resolver problemas iniciales con el Dockerfile, el stack de Heroku y la CLI de Heroku.
- Asegurar la conexión exitosa con la base de datos Atlas.

## Evidencia de Despliegues

- Despliegue 1 (POST /tasks): Tras implementar crear tarea, el pipeline pasó y desplegó.
- Despliegue 2 (GET /tasks): Tras implementar listar tareas, nuevo despliegue exitoso.
- Despliegue 3 (PATCH /tasks/:id): Tras implementar actualización de estado, despliegue completado.
- Despliegue 4 (DELETE /tasks/:id): Tras implementar eliminación de tarea, despliegue final exitoso.

## Contribuidores

- José Sánchez
- Liseth Abad
- Nicolás García
- Gorky Palacios
