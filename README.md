# Fase 2 - TECH CHALLENGE - Biblioteca API

## Descrição

Projeto relacionado a criação de uma API com Node.js + Express e MongoDB que realiza um CRUD (CREATE, READ, UPDATE e DELETE) no gerenciamento de livros, tendo como atribuitos necessários:

Id.
Nome. 
Autor.
Editora.


## Passos para executar o Projeto em ambiente de Desenvolvimento

> ### Pré Requisitos
>
> **Projeto foi Desenvolvido utilizando VSCODE, MongoDB em Docker e Postman**
>
> 1.  Abra um terminal e execute o comando abaixo para criar um projeto JS
> 
> `npm init -y`
>
> 2. Valide se o arquivo **package.json** foi criado e adicione abaixo de "main" a seguinte string:
>
> `"type": "module"`
>
> 3. Install o Express ("Framework web rápido, flexível e minimalista para Node.js")
>
> `npm install express@4.18.1`
>
> 4. Criar um arquivo server.js para simular um servidor HTTP e após executar validar o output, assim como, via browser através do link: http://localhost:3000
>
> 5. Para fazer Refresh no Server após alterações utilizado o utilitário nodemon que pode ser instalado com o comando abaixo:
>
> `npm install nodemon@3.0.1`
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
> `npm install mongoose@7.3.4`
>
> 7. Install a bibliteca dotenv para configurar variáveis de ambiente e não subir senhas para o git ao realizer commit do código.
>
> `npm install dotenv`
>
>




db.createUser({
    user: 'adminbook',
    pwd: 'mongoadmin',
    roles: [{ role: 'readWrite', db:'cool_db'}]
})



https://www.bigscal.com/blogs/backend/how-to-setup-node-js-with-mongodb-using-docker/


PS:  para usar os métodos GET na pesquisa utilizar ? após a URL base, por example:

localhost:3000/livros/buscaall?editora=USA


# Install swagger

npm install swagger-jsdoc swagger-ui-express express





# Vulnerabilities

Executar e comando abaixo e verificar se existe algumas vulnerabilidade:

`npm audit`

se for entrado alguma executar o comando de fix para resolver:

`npm audit fix`



localhost:3000/livros/buscaall?editora=USA
