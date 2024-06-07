import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

/**
 * @swagger
 * /livros:
 *   get:
 *     summary: Retorna uma lista de livros
 *     description: Retorna uma lista de livros do banco de dados.
 *     responses:
 *       200:
 *         description: Resposta obtida com sucesso.
 */
routes.get("/livros", LivroController.listarLivros);
/**
 * @swagger
 * /livros/buscaall:
 *   get:
 *     summary: Retorna uma lista de livros por consulta
 *     description: Retorbna uma lista de livros do banco de dados por consulta.
 *     responses:
 *       200:
 *         description: Resposta obtida com sucesso.
 */
routes.get("/livros/buscaall", LivroController.listarLivrosPorQuery);
/**
 * @swagger
 * /livros/busca:
 *   get:
 *     summary: Retorna uma lista de livros por editora
 *     description: Retorna uma lista de livros do banco de dados por editora.
 *     responses:
 *       200:
 *         description: Resposta obtida com sucesso.
 */
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);
/**
 * @swagger
 * /livros/:id:
 *   get:
 *     summary: Retorna uma lista de livros por ID
 *     description: Retorna uma lista de livros do banco de dados por ID.
 *     responses:
 *       200:
 *         description: Resposta obtida com sucesso.
 */
routes.get("/livros/:id", LivroController.listarLivroPorId);
/**
 * @swagger
 * /livros:
 *   post:
 *     summary: Post realiza o cadastro de um livro
 *     description: Realiza o cadastro de um livro no banco de dados.
 *     responses:
 *       200:
 *         description: Resposta obtida com sucesso.
 */
routes.post("/livros", LivroController.cadastrarLivro);
/**
 * @swagger
 * /livros/:id:
 *   put:
 *     summary: Put Atualiza um livro
 *     description: Atualiza um livro no banco de dados.
 *     responses:
 *       200:
 *         description: Resposta obtida com sucesso.
 */
routes.put("/livros/:id", LivroController.atualizarLivro);
/**
 * @swagger
 * /livros/:id:
 *   delete:
 *     summary: Delete exclui um livro
 *     description: Exclui um livro no banco de dados.
 *     responses:
 *       200:
 *         description: Resposta obtida com sucesso.
 */
routes.delete("/livros/:id", LivroController.excluirLivro);

export default routes;
