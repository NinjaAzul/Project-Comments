//import modulos
import { Router } from 'express';
import axios from 'axios';
const routes = new Router();

let data = {};

//Login Page
routes.get('/', (request, response) => {

  response.render("logIn");
});

//CreateUser || Login || SignUp
routes.post('/createUser', async (request, response) => {

  const { name, eMail } = request.body;


  if (name === "" || eMail === "") {
    return response.status(400).json({ Error: "form is not valid" });
  }

  const dados = {
    nome: name,
    email: eMail
  }
  try {
    const res = await axios.post("http://138.68.7.94:85/cadastro", dados);
    console.log(res.data);

    data = {
      id: res.data.id,
      nome: res.data.nome,
      email: res.data.email
    };

    return response.send({ redirectTo: '/index' });
  } catch (error) {
    console.error(error);
  }
});

//newComment
routes.post('/index', async (request, response) => {
  const { comment } = request.body;

  if (comment === "" || comment.length > 250) {
    return response.status(400).json({ Error: "form is not valid" });
  }

  const dados = {
    id_usuario: data.id,
    comentario: comment
  }

  console.log(dados);
  try {
    await axios.post("http://138.68.7.94:85/add_comentario", dados);
    return response.status(201).json({ message: "Success" });
  } catch (error) {
    console.error(error);
  }


});
//home page
routes.get('/index', (request, response) => {

  response.render('index', data);
});

routes.get('/comments', async (request, response) => {

 const res = await axios.post("http://138.68.7.94:85/busca_comentarios");

 console.log(res.data);

  response.render('comments', res);
});






export default routes;