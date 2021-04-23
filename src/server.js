
import express from "express";
import cors from 'cors';
import routes from './routes';
var path = require('path');



const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static('./public'));
app.set('views', path.join(__dirname,'../src/app/views'));
app.set('view engine','ejs');



app.use(routes);

app.listen(4000, function () {
  console.log("Servidor rodando!!! 🚀");
});

