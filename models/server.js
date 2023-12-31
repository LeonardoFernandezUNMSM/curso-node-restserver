const express = require("express");
const cors = require("cors");
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath='/api/usuarios';
        //Middleware
        this.middlewares();
        //Rutas de la Aplicación
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true}));//NECESARIO DE AGREGAR SI NO NO MANEJA EL BODY RECIBIDO
        //lectura y parseo del body recibe lo que se envía
        this.app.use(express.json());
        //Directorio Público
        this.app.use(express.static('public'));
    }
    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }
    listen() {
        this.app.listen(this.port, () =>{
            console.log("Servidor corriendo en puerto ",this.port);
        })
    }
}
module.exports = Server;
