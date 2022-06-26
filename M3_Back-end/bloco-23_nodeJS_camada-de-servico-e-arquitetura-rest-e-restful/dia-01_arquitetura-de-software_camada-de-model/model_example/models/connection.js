const mysql = require('mysql2/promise');

/**
 * O método createPool:
 * - Cria uma pool de conexões com o banco de dados
 * - Retorna um objeto Pool representando uma sessão com o banco
 */

const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'model_example' });

module.exports = connection;