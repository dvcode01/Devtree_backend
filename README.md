# DevTree Backend - API y Servidor

![Imagen del proyecto](./assets/Devtree.png)

## Indice
- [Descripción](#descripción-del-proyecto)
- [Funcionalidades](#funcionalidades-del-proyecto)
- [Tecnologías](#tecnologías-utilizadas)
- [Acceso al proyecto](#acceso-al-proyecto)
- [Endpoints Principales](#endpoints-principales)


## Descripción del Proyecto
DevTree Backend es el servidor API que potencia la aplicación DevTree, proporcionando todas las funcionalidades de gestión de datos, autenticación y almacenamiento para las páginas de enlaces personalizadas estilo Linktree.

## Funcionalidades del Proyecto
- Registro y login seguro de usuarios
- Gestión de perfiles completos
- Protección de endpoints con middleware de autenticación
- Tokens JWT para sesiones persistentes y seguras
- Subida y almacenamiento de imágenes (avatars, fondos)

## Tecnologías Utilizadas
- Node JS
- Express
- Mongo DB
- Typescript
- JSON Web Tokens (para autenticación)
- Mongoose (para gestión de la base de datos) 
- Bcrypt (para hashing seguro de contraseñas)
- CORS (configurado para seguridad)
- Cloudinary (para gestión de imágenes)
- Dotenv (para gestión de variables de entorno)

## Acceso al Proyecto
Para poder hacer uso del proyecto de forma local, sigue las siguientes instrucciones:

```bash
# Clonar repositorio
git clone https://github.com/dvcode01/Devtree_backend.git

# Instalar dependencias
npm install

# Iniciar servidor
npm run dev

# Pruebas internas de la API
npm run dev:api
```

## Endpoints Principales

### 👤 Autenticación
- `POST /auth/register` - Registrar nuevo usuario
- `POST /auth/login` - Iniciar sesión

### 👥 Usuarios y Perfiles
- `GET /user` - Obtener perfil público
- `PATCH /user` - Actualizar perfil

### 🔗 Gestión de Enlaces
- `GET /:handle` - Obtener perfil por el handle 
- `POST /user/image` - Almacenamiento de imagenes
- `POST /search`- Busqueda perfil según el handle
