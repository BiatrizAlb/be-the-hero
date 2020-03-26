const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors({}));
app.use(express.json());

app.use(routes);

app.listen(3333);

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do Backend
 * POST: Criar uma informação no Backend(ex: criar um usuário)
 * PUT: Alterar uma informação no Backend
 * DELETE: Deletar uma informação no Backend
 */
/**
 * Tipos de Parâmetros:
 * 
 * Query: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

/**
 * SQL: MySql, SQLite, PostgreSql, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 */

 /**
 * Driver: Select * From Users
 * Query Builder: table('users').select('*').where()
 * 
 */


