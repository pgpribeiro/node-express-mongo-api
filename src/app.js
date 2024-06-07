import express from "express";
import dbConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

//Configuração do MongoDB
const conexao = await dbConnect();

conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});
conexao.once("open", () => console.log("Conexão com o MongoDB: OK"));

//Configuração do Express
const app = express();
routes(app);


//Configuração do Swagger
const port = 4000;
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Your application routes go here...
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
