import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

/**
 * @swagger
 * /livros:
 *   get:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */
routes.get("/livros", LivroController.listarLivros);
/**
 * @swagger
 * /livros/buscaall:
 *   get:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */
routes.get("/livros/buscaall", LivroController.listarLivrosPorQuery);
/**
 * @swagger
 * /livros/busca:
 *   get:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);
/**
 * @swagger
 * /livros/:id:
 *   get:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */
routes.get("/livros/:id", LivroController.listarLivroPorId);
/**
 * @swagger
 * /livros:
 *   post:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */
routes.post("/livros", LivroController.cadastrarLivro);
/**
 * @swagger
 * /livros/:id:
 *   put:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */
routes.put("/livros/:id", LivroController.atualizarLivro);
/**
 * @swagger
 * /livros/:id:
 *   delete:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */
routes.delete("/livros/:id", LivroController.excluirLivro);

export default routes;
