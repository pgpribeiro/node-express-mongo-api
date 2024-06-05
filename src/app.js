import express from "express";
import dbConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";


const conexao = await dbConnect();

conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});

conexao.once("open", () => console.log("Conexão com o MongoDB: OK"));

const app = express();
routes(app);


//Configuração do Swagger

const port = 4000;
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Your application routes go here...
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// app.use(express.json()); //middleware

// const livros = [
//   {
//     id: 1,
//     nome: "Harry Potter",
//     autor: "J.K. Rowling",
//     editora: "Rocco",
//   },
//   {
//     id: 2,
//     nome: "Senhor dos Anéis",
//     autor: "J.R.R. Tolkien",
//     editora: "HarperCollins",
//   },
// ];

// function  buscaLivroPorId(id) {
//   return livros.findIndex((livro) => livro.id === Number(id));
// }

// app.get("/", (req, res) => {
//   res.status(200).send("Fase 2 - TECH CHALLENGE - Biblioteca API");
// });

// app.get("/livros", async (req, res) => {
//   const listaLivros = await livro.find({});
//   res.status(200).json(listaLivros);
// });

// app.get("/livros/:id", (req, res) => {
//   const index = buscaLivroPorId(req.params.id);
//   res.status(200).json(livros[index]);
// });

// // app.post("/livros", (req, res) => {
// //   livros.push(req.body);
// //   res.status(201).send("livro cadastrado com sucesso");
// // })

// app.put("/livros/:id", (req, res) => {
//   const index = buscaLivroPorId(req.params.id);
//   livros[index].titulo = req.body.titulo;
//   res.status(200).send(livros);
// });

// app.delete("/livros/:id", (req, res) => {
//   const index = buscaLivroPorId(req.params.id);
//   livros.splice(index, 1);
//   res.status(200).send("livro deletado com sucesso");

// });

// app.delete("/livros/:id", (req, res) => {
//   const index = buscaLivro(req.params.id);
//   livros.splice(index, 1);
//   res.status(200).send("livro removido com sucesso");
// });


export default app;
