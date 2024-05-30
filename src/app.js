import express from "express";

const app = express();
app.use(express.json()); //middleware

const livros = [
  {
    id: 1,
    Nome: "Harry Potter",
    Autor: "J.K. Rowling",
    Editora: "Rocco",
  },
  {
    id: 2,
    titulo: "Senhor dos Anéis",
    Autor: "J.R.R. Tolkien",
    Editora: "HarperCollins",
  },
];

function  buscaLivroPorId(id) {
  return livros.findIndex((livro) => livro.id === Number(id));
}

app.get("/", (req, res) => {
  res.status(200).send("Fase 2 - TECH CHALLENGE - Biblioteca API");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivroPorId(req.params.id);
  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("livro cadastrado com sucesso");
})

app.put("/livros/:id", (req, res) => {
  const index = buscaLivroPorId(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).send(livros);
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivroPorId(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("livro deletado com sucesso");


});

export default app;
