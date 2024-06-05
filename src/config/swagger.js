import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Fase 2 - TECH CHALLENGE - Biblioteca API',
      version: '1.0.0',
      description: 'API documentation for your Node.js application',
    },
  },
  apis: ['./src/routes/*.js'], // Path to the API routes
};
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
