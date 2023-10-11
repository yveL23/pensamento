const express = require('express');
const router = require("./routes");
const dotenv = require("dotenv");
dotenv.config();

require("./database/index");

const app = express();
app.use(express.json());
app.use(router);


app.listen(3333, console.log("Servidor on na porta 3333"));