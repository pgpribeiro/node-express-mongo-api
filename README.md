# Fase 2 - TECH CHALLENGE - Biblioteca API

## Descrição

Projeto relacionado a criação de uma API com Node.js + Express e MongoDB que realiza um CRUD (CREATE, READ, UPDATE e DELETE) no gerenciamento de livros, tendo como atribuitos necessários:

  **Id.**

  **Nome.**

  **Autor.**

  **Editora.**


## Passos para executar o Projeto em ambiente de Desenvolvimento

1. Instalar o **GIT** caso não tenha clonar esse Repósitorio:

    https://www.git-scm.com/downloads
 
2. Abrir o Projeto no **VS (Visual Studio Code)** ou em outro Editor de sua preferência.

3. Acessar o link abaixo e realizar a instalação do **Docker Engine**  de acordo com seu Sistema Operacional. Será necessário para utilização do Banco de Dados MongoDB e MongoExpress:

    https://docs.docker.com/engine/install/

4. Adicinar o arquivo **.env** dentro da Pasta: **raiz** com as seguintes informações:

   `DB_CONNECTION_STRING=mongodb://admin:mongoadmin@mongo:27017/livraria?authSource=admin`

5. Executar o comando abaixo para inicializar os Containers:

      `docker compose up -d`

5. Instalar o Postman para realizar os API testes (CRUD):

    https://www.postman.com/downloads/


## Utilizando o POSTMAN para validar os API Endpoints com os métodos POST, GET, PUT and DELETE

1. **POST** Cadastrar alguns livros utilizando o método **POST**:

    1.1. Adicionar o link: http://localhost:3000/livros no postman e em BODY-RAW-JSON colar o seguintes JSONs (um de cada vez) abaixo para cadastrar livros e clicar em SEND:

```b
{
  "nome" : "Harry Potter",
  "autor": "J.K. Rowling",
  "editora" : "Rocco"
}
```
```b
{
  "nome" : "Lord of the rings",
  "autor": "J.R.R. Tolkien",
  "editora" : "HarperCollins"
}
```

```b
{
  "nome" : "The Hobbit",
  "autor": "J.R.R. Tolkien",
  "editora" : "HarperCollins"
}
```
```b
{
  "nome" : "The Hunger Games",
  "autor": "Suzanne Collins",
  "editora" : "Scholastic"
}
```
2. **GET** Adicionar o link: http://localhost:3000/livros com o método **GET** para consultar todos os Livros cadastrados. 

3. **PUT** Adicionar o link: http://localhost:3000/livros/(id_do_livro) utilizando método **PUT** para ALTERAR valores do livro, substituindo (id_do_livro) pelo ID do livro obtido no método GET. Informar a alteração em formato JSON (BODY-RAW-JSON ) como o examplo abaixo para alterar **editora**:

```b 
 {
    "editora": "USA"
 }
```

4. **DELETE** Adicionar o link: http://localhost:3000/livros/(id_do_livro) utilizando o método **DELETE**, substituindo (id_do_livro) pelo ID do livro obtido no método GET para DELETAR o livro.

## Parando o Containers

1. Executar o comando abaixo para parar os Containers:
 
     `docker compose down`

### Swagger URL
http://localhost:4000/api-docs/#/

### **PS:**  para usar os métodos GET na pesquisa utilizar ? após a URL base, por examplo:

http://localhost:3000/livros/buscaall?editora=USA

-----------------------
-----------------------
-----------------------
-----------------------



# Esses Steps não são necessários para rodar o projeto em Ambiente Desenvolvimento, mas deixamos salvos pois foram necessário durante o processo de Desenvolvimento do Projeto e podem servir como para futuras consultas.

###  Comandos utilizados durante o Desenvolvimento do Projeto (Somente Informação)

> ### Pré Requisitos
>
> **Projeto foi Desenvolvido utilizando VSCODE, MongoDB em Docker e Postman**
>
>
>
> 0. Instalação do NODE através do link:
>
>    `https://nodejs.org/en/download/package-manager`
> 
>   **Exemplo_MACOS**
>   ```
>   # installs nvm (Node Version Manager)
>   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
>   
>   # download and install Node.js (you may need to restart the terminal)
>   nvm install 20
>   
>   # verifies the right Node.js version is in the environment
>   node -v # should print `v20.14.0`
>   
>   # verifies the right NPM version is in the environment
>   npm -v # should print `10.7.0`
>   ``` 
>
>
> 1.  Abra um terminal e execute o comando abaixo para criar um projeto JS
> 
>     `npm init -y`
>
> 2. Valide se o arquivo **package.json** foi criado e adicione abaixo de "main" adicione a seguinte string:
>
>    `"type": "module"`
>
> 3. Instale o Express ("Framework web rápido, flexível e minimalista para Node.js") executando o comando abaixo:
>
>    `npm install express@4.18.1`
>
> 4. Criar um arquivo server.js para simular um servidor HTTP e após executá-lo validar o output, assim como, pode ser verifcado via web browser: http://localhost:3000
>
> 5. Executar o comando abaixo para fazer Refresh no Server após alterações utilizado o utilitário nodemon:
>
>    `npm install nodemon@3.0.1`
> 
> alterar novamente o arquivo package.json para utilizar nodemon adicionando em scripts a sequinte syntaxe:
>
> `"scripts": {
>        "dev": "nodemon server.js",`
> 
> após salvar a alteração pode-se executar `npm run dev` e o resultado será algo parecido com esse output:
>
> ```js-express-mongo@1.0.0 dev
> nodemon server.js
> [nodemon] 3.0.1
> [nodemon] to restart at any time, enter `rs`
> [nodemon] watching path(s): *.*
> [nodemon] watching extensions: js,mjs,cjs,json
> [nodemon] starting `node server.js`
> Servidor escutando !```

> 6. Instalação do Mongoose (Biblioteca intermediária para conexões entre a App e o MongoDB)
>
>    `npm install mongoose@7.3.4`
>
> 7. Install a bibliteca dotenv para configurar variáveis de ambiente e não subir senhas para o git ao realizer commit do código.
>
>    `npm install dotenv`
>
> 8. Instalar o Swagger para realizar a documentação das APIs:
>
>    `npm install swagger-jsdoc swagger-ui-express express`
>
> 9. Executar e comando abaixo e verificar se existe algumas vulnerabilidade:
>
>    `npm audit`
>
> 10. Executar o comando abaixo para vulnerabilidades se por acaso o step 9 trouxer:
>
>    `npm audit fix`
