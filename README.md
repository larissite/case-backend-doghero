# Rodada de Cases :ferris_wheel:

## Um projeto para conclusão da Labenu :computer: :orange_heart:

### por Larissa Azevedo, Turma Aragon

Para conclusão do curso, considerando que o [Teste Técnico Diversidev](https://github.com/larissite/diversidev-teste-tecnico) também foi válido como projeto do módulo **Frontend** e para consolidar os aprendizados do módulo **Backend**, a resolução do [*case legado* da Petlove](https://github.com/petlove/test-backend/wiki/Test-Case) busca simular um site de cadastro de passeios para os doguinhos :dog: :dog2:

O deploy foi feito no Heroku e os endpoints foram testados no Postman.

A documentação pode ser acessada neste link do [Postman](https://documenter.getpostman.com/view/20783829/VVBXxRK8) :link:

## Setup :electric_plug:

Para instalar este projeto localmente é necessário rodar os seguintes comandos:
##### `cd ../case-backend-doghero`

##### `npm install`

##### `npm start`

#### `Arquivo .env` :warning:  É necessário configurar as variáveis de ambiente do seu banco de dados para o projeto rodar normalmente.

Para facilitar há o arquivo `.env` pronto para ser preenchido.

Também há um documento requests.rest que poderá ser acessado diretamente do VSCode, caso o usuário possua extensão "REST Client" instalada.

O projeto ainda conta com os _scripts_ `'migrations'` para manipulação de banco de dados e `'dev'` para otimizar os testes de endpoint.

## Como funciona :page_with_curl:

Neste sistema o preço do passeio é calculado dinamicamente da seguinte forma:
 * Um passeio de 30 minutos para 1 cachorro custa R$25, sendo cada cachorro adicional R$15;
 * Um passeio de 60 minutos para 1 cachorro custa R$35, sendo cada cachorro adicional R$20;


Este sistema permite, de forma simplificada, que a pessoa usuária possa cadastrar um novo passeio, consultá-los de forma geral ou por data ou status('To Do', 'Doing' ou 'Done'), sendo possível:

* cadastrar novo passeio, com o método **POST** createWalk
  * Atenção: os passeios são de 30 ou 60 minutos. Nos campos 'start_walking' e 'finish_walking' é necessário se atentar a este detalhe;

* editar o status de um passeio com **PUT** editWalkingStatus;
  * não é possível alterar o status de passeio já concluído.

* buscar todos os produtos com **GET** allWalkings;

  * buscar todos os produtos por data com **GET** getWalkingsByDate
  * buscar todos os passeios por status com **GET** getWalkingsByStatus


<br>

## Tecnologias utilizadas

<img align="left"  src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
<img align="left"  src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
<img align="left"  src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white"/>
<img align="left"  src="https://img.shields.io/badge/Knex.js-d34e36?style=for-the-badge"/>
<img align="left"  src="https://img.shields.io/badge/Jest-30cb2d?style=for-the-badge&logo=jest&logoColor=white"/>

<br> <br>

## Hosting
<img align="left"  src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>


<br><br>

## Testes

Foram realizados **testes unitários** neste projeto com o _framework_ Jest.
Abaixo segue a imagem com os dados da cobertura dos testes.
<br><br>
![image](https://user-images.githubusercontent.com/90583823/189214030-e13accd4-39b6-4ffb-8d4f-ca04a30f1b23.png)


##### Feito com VSCode, Beekeeper-Studio e Postman
