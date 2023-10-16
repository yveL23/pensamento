const express = require('express');
const router = require("./routes");
const dotenv = require("dotenv");
const handlebars = require("express-handlebars");
const app = express();

dotenv.config();

require("./database/index");

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(router);

app.get('/home', (req, res) =>{
    return res.render('home')
});

app.listen(3333, console.log("Servidor on na porta 3333"));