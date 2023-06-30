require('dotenv').config();
const Server = require("./models/server");
const server = new Server();
server.listen();
//Página 12 inconsistencia entre si se llama user o usuarios