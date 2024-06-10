import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: "Swagger Petstore - OpenAPI 3.0",
      description: "# Welcome para a Documentação de APIs Referente ao Projeto Biblioteca - Fase 2 - TECH CHALLENGE\n\n## URL Base\n\nURL base para acessar todas as APIs: `http://localhost:3000/`, como nosso projeto está relaciondo a implemetação de um CRUD em MongoDB que permite a manutenção de LIVROS (em um Livraria) as URLs abaixo poderão ser acessadas:\n\n1. Consulta Livros (GET): `http://localhost:3000/livros`\n2. Cadastra Livros (POST): `http://localhost:3000/livros`\n3. Altera e Deletra livros (PUT,DELETE): `http://localhost:3000/livros(livro_id)`, sendo que o ID do livro a ser editado ou deletado deve ser pesquisado utilizando o método GET.\n\n\n## Métodos Utilizados\n\n- GET\n- POST\n- PUT\n- DELETE\n\n## Body and content type\n\nTodos os requestes devem utilizar o formato JSON com Content-Type header set to application/json.\n\n### Server \nlocalhost://\n    ",
      termsOfService: "http://swagger.io/terms/",
      contact: {
        email: "apiteam@swagger.io"
      },
      license: {
        name: "Apache 2.0",
        url: "http://www.apache.org/licenses/LICENSE-2.0.html"
      },
      version: "1.0.11"
    },
  },
  apis: ['./src/routes/*.js'], // Path to the API routes
};
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
