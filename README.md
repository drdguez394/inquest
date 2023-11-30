# inquest
inquest web 


--------------------------------------------------------
DARIEL RODRÍGUEZ CORDERO
54604481
78795914
drdguez394@gmail.com


--------------------------------------------------------
MongoDB: mongodb://localhost:27017/inquestdb



--------------------------------------------------------
RUTAS
FRONTEND: http://localhost:5173
            /               LIBRE ACCESO
            /login          LIBRE ACCESO
            /register       LIBRE ACCESO
            /profile        LOGUEADOS
            /inquest        LOGUEADOS
            /inquest-add    LOGUEADOS
            /inquest/:id    LOGUEADOS



BACKEND: http://localhost:3000/
GET         api/inquest     LOGUEADOS
GET         api/inquest/:id LOGUEADOS
DELETE      api/inquest/:id LOGUEADOS
PUT         api/inquest/:id LOGUEADOS
POST        api/inquest     LOGUEADOS
POST        api/register    LIBRE ACCESO
POST        api/login       LIBRE ACCESO
POST        api/logout      LIBRE ACCESO
GET         api/profile     LOGUEADOS
